/* ============================================================
   COMPANION HOME PAGE — shared across every topic
   Adds a "Home" page to the front of a companion: a picture
   that represents the topic, a short summary of each module, and
   the student's progress and quiz / exam results so far.

   Nothing here is specific to one topic. It reads:
     MANIFEST            (banks/<topic>.manifest.js: title, tagline,
                          accent color, each module's summary)
     TOPIC_ID, POOL, CARDS, CHECKPOINTS   (banks/<topic>.js)
     HERO_ART            (shared/hero-art.js: the picture)
     state               (shared/storage.js: saved progress)
     the engine's own helpers (sectionComplete, moduleLocked, goTo...)

   Load order: after the page's own content script (which defines
   MODULES and FLOW) and BEFORE shared/engine.js, because engine.js
   builds the side menu from MODULES and this file adds Home to it.
   The page is drawn by renderCompanionHome(), which engine.js's
   paintNav() calls whenever progress changes or the student moves.
   If this file is missing or fails, the companion works as before.
   ============================================================ */
(function(){
  if(typeof MANIFEST==='undefined'||typeof MODULES==='undefined'||typeof FLOW==='undefined')return;
  var main=document.querySelector('.main');
  if(!main)return;

  /* ---------- 1. Add Home to the front of the study path ---------- */
  var HOME={key:'home',label:'Companion home'};
  MODULES.unshift({id:'home',badge:'&#8962;',title:'Home',sections:[HOME]});
  FLOW.unshift(HOME);

  var sec=document.createElement('section');
  sec.className='section ch';
  sec.setAttribute('data-key','home');
  sec.setAttribute('aria-label','Companion home');
  var topbar=main.querySelector('.topbar');
  if(topbar&&topbar.nextSibling)main.insertBefore(sec,topbar.nextSibling);else main.appendChild(sec);

  /* ---------- 2. Small helpers ---------- */
  function esc(t){return String(t==null?'':t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
  /* Titles in the manifests are already HTML-safe ("&amp;" is common). */
  function title(t){return String(t==null?'':t).replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>');}
  function hexToRgb(h){
    h=String(h||'').replace('#','');
    if(h.length===3)h=h.charAt(0)+h.charAt(0)+h.charAt(1)+h.charAt(1)+h.charAt(2)+h.charAt(2);
    if(!/^[0-9a-fA-F]{6}$/.test(h))return [47,169,122];
    return [parseInt(h.substr(0,2),16),parseInt(h.substr(2,2),16),parseInt(h.substr(4,2),16)];
  }
  /* Mix the accent with black to get the dark hero colors, so white
     text always reads clearly whatever the companion's own color is. */
  function darken(rgb,k){
    return 'rgb('+rgb.map(function(c){return Math.round(c*(1-k));}).join(',')+')';
  }
  /* Same thresholds the quiz result screen uses (engine.js showResult). */
  function band(p){
    return p>=88?{cls:'strong',text:'Strong'}:p>=63?{cls:'solid',text:'Solid'}:{cls:'review',text:'Needs another pass'};
  }
  function findMod(id){return MODULES.filter(function(m){return m.id===id;})[0];}
  function flowIndex(key){return FLOW.findIndex(function(f){return f.key===key;});}
  function labelFor(key){var f=FLOW[flowIndex(key)];return f?f.label:key;}

  /* Everything the page needs to know, worked out from the manifest
     and the saved state each time it is drawn. */
  function gather(){
    var out={mods:[],quizzes:[],exam:null,done:0,total:0,quizTaken:0,quizTotal:0};
    MANIFEST.modules.forEach(function(m){
      var graded=m.sections.filter(function(s){return isGradable(s.key);});
      var done=graded.filter(function(s){return sectionComplete(s.key);}).length;
      var rec={id:m.id,title:m.title,summary:m.summary||'',total:graded.length,done:done,
               first:m.sections[0].key,next:null,locked:false,isExam:false};
      var live=findMod(m.id);
      if(live)rec.locked=!!(live.unlockAfter&&moduleLocked(live));
      for(var i=0;i<graded.length;i++){if(!sectionComplete(graded[i].key)){rec.next=graded[i].key;break;}}
      m.sections.forEach(function(s){
        if(!s.quiz)return;
        var best=state.best[s.quiz];
        var q={key:s.key,quiz:s.quiz,label:s.label,best:(best===undefined?null:best),modId:m.id,locked:rec.locked};
        if(s.quiz==='final'){rec.isExam=true;out.exam=q;}
        else{out.quizzes.push(q);out.quizTotal++;if(q.best!==null)out.quizTaken++;}
      });
      out.done+=done;out.total+=graded.length;
      out.mods.push(rec);
    });
    return out;
  }

  /* ---------- 3. Drawing ---------- */
  function ring(pct){
    var C=2*Math.PI*42;
    return '<svg class="ch-ring" viewBox="0 0 100 100" aria-hidden="true" focusable="false">'+
      '<circle cx="50" cy="50" r="42" fill="none" stroke-width="10" class="ch-ring-track"/>'+
      '<circle cx="50" cy="50" r="42" fill="none" stroke-width="10" stroke-linecap="round" class="ch-ring-fill" '+
      'stroke-dasharray="'+C.toFixed(1)+'" stroke-dashoffset="'+(C*(1-pct/100)).toFixed(1)+'" transform="rotate(-90 50 50)"/>'+
      '<text x="50" y="57" text-anchor="middle" class="ch-ring-num">'+pct+'%</text></svg>';
  }
  /* `ticks` adds the 63% and 88% marks that separate Needs another pass /
     Solid / Strong, so they appear on score bars and not on progress bars. */
  function bar(p,cls,aria,ticks){
    return '<span class="ch-bar" role="img" aria-label="'+esc(aria)+'"><span class="ch-bar-fill '+cls+'" style="width:'+Math.max(0,Math.min(100,p))+'%"></span>'+
           (ticks?'<span class="ch-bar-mark" style="left:63%"></span><span class="ch-bar-mark" style="left:88%"></span>':'')+'</span>';
  }

  function heroHTML(g,pct){
    var facts=[];
    var nm=MANIFEST.modules.filter(function(m){return /^m\d+$/.test(m.id);}).length;
    if(nm)facts.push([nm,nm===1?'module':'modules']);
    if(typeof POOL!=='undefined'&&POOL.length)facts.push([POOL.length,'practice questions']);
    if(typeof CHECKPOINTS!=='undefined'){var nc=Object.keys(CHECKPOINTS).length;if(nc)facts.push([nc,'predict-it checkpoints']);}
    if(typeof CARDS!=='undefined'&&CARDS.length)facts.push([CARDS.length,'flashcards']);
    var art=(typeof HERO_ART!=='undefined'&&HERO_ART[TOPIC_ID])?HERO_ART[TOPIC_ID]():'';

    var resume=state.lastSection&&state.lastSection!=='home'&&flowIndex(state.lastSection)>-1?state.lastSection:null;
    var cta;
    if(pct===0&&!resume){
      cta='<button type="button" class="ch-btn ch-btn-main" data-go="'+esc(g.mods[0].first)+'">Start the first module</button>';
    }else if(resume){
      cta='<button type="button" class="ch-btn ch-btn-main" data-go="'+esc(resume)+'">Continue: '+esc(title(labelFor(resume)))+'</button>';
    }else{
      var nx=g.mods.filter(function(m){return !m.locked&&m.next;})[0];
      cta='<button type="button" class="ch-btn ch-btn-main" data-go="'+esc(nx?nx.next:g.mods[0].first)+'">'+(nx?'Continue: '+esc(title(labelFor(nx.next))):'Open the first module')+'</button>';
    }
    return '<div class="ch-hero">'+
      '<div class="ch-hero-txt">'+
        '<div class="ch-eyebrow">PHA3134 &middot; Study Companion</div>'+
        '<h1 class="ch-title">'+esc(title(MANIFEST.title))+'</h1>'+
        (MANIFEST.tagline?'<p class="ch-tagline">'+esc(MANIFEST.tagline)+'</p>':'')+
        '<div class="ch-cta">'+cta+'<a class="ch-btn ch-btn-ghost" href="#chModules" data-scroll="chModules">See what&rsquo;s inside</a></div>'+
        (facts.length?'<ul class="ch-facts">'+facts.map(function(f){return '<li><b>'+f[0]+'</b> '+f[1]+'</li>';}).join('')+'</ul>':'')+
      '</div>'+
      (art?'<div class="ch-hero-art" aria-hidden="true">'+art+'</div>':'')+
    '</div>';
  }

  function progressHTML(g,pct){
    var flagged=state.flags?Object.keys(state.flags).length:0;
    var stats='<ul class="ch-stats">'+
      '<li><b>'+g.done+' of '+g.total+'</b><span>steps complete</span></li>'+
      '<li><b>'+g.quizTaken+' of '+g.quizTotal+'</b><span>module quizzes taken</span></li>'+
      '<li><b>'+(flagged||0)+'</b><span>flagged for review</span></li></ul>';
    var msg=pct===100?'Every step is complete. Use the mastery exam and the concept areas below to find what to polish.':
            pct===0?'Nothing started yet. Each step you finish fills this in.':
            'A step counts once you answer its checkpoints correctly and finish its activity.';
    return '<section class="ch-panel ch-progress" aria-labelledby="chProgH">'+
      '<h2 id="chProgH">Your progress</h2>'+
      '<div class="ch-prog-body">'+ring(pct)+'<div>'+stats+'<p class="ch-note">'+msg+'</p></div></div>'+
    '</section>';
  }

  function examHTML(g){
    var e=g.exam;
    if(!e)return '';
    var body,cls='';
    var remaining=[];
    if(e.locked){
      remaining=g.mods.filter(function(m){return !m.isExam&&m.total>0&&m.done<m.total;});
    }
    if(e.locked){
      cls=' is-locked';
      body='<div class="ch-exam-lock" aria-hidden="true">&#128274;</div>'+
        '<p class="ch-exam-line"><strong>Locked.</strong> It opens once every module is complete'+
        (remaining.length?' ('+remaining.length+' still to finish)':'')+'.</p>'+
        '<button type="button" class="ch-btn ch-btn-quiet" data-go="'+esc(remaining.length?(remaining[0].next||remaining[0].first):g.mods[0].first)+'">Take me to what&rsquo;s left</button>';
    }else if(e.best===null){
      body='<p class="ch-exam-line"><strong>Not taken yet.</strong> Take it once you have worked through the modules. Your best score is kept here.</p>'+
        '<button type="button" class="ch-btn ch-btn-main-dark" data-go="'+esc(e.key)+'">Open the mastery exam</button>';
    }else{
      var b=band(e.best);
      body='<div class="ch-exam-score"><span class="ch-big">'+e.best+'%</span><span class="ch-chip '+b.cls+'">'+b.text+'</span></div>'+
        bar(e.best,b.cls,'Best mastery exam score '+e.best+' percent',true)+
        '<p class="ch-exam-line">Best score so far. Every attempt also updates your concept areas below.</p>'+
        '<button type="button" class="ch-btn ch-btn-quiet" data-go="'+esc(e.key)+'">Retake the exam</button>';
    }
    return '<section class="ch-panel ch-exam'+cls+'" aria-labelledby="chExamH">'+
      '<h2 id="chExamH">Mastery exam</h2>'+body+'</section>';
  }

  function modulesHTML(g){
    var cards=g.mods.map(function(m,i){
      var status,btn,cls='';
      if(m.locked){status='<span class="ch-chip locked">Locked</span>';cls=' is-locked';btn='Why is it locked?';}
      else if(m.isExam&&g.exam&&g.exam.best!==null){var eb=band(g.exam.best);status='<span class="ch-chip '+eb.cls+'">Best '+g.exam.best+'%</span>';btn='Retake';cls=' is-done';}
      else if(m.isExam){status='<span class="ch-chip plain">Ready</span>';btn='Open';}
      else if(m.total===0){status='<span class="ch-chip plain">Practice</span>';btn='Open';}
      else if(m.done===m.total){status='<span class="ch-chip strong">Complete</span>';btn='Review';cls=' is-done';}
      else if(m.done>0){status='<span class="ch-chip solid">In progress</span>';btn='Continue';}
      else{status='<span class="ch-chip plain">Not started</span>';btn='Start';}
      var target=m.locked?m.first:(m.next||m.first);
      var qs=g.quizzes.filter(function(q){return q.modId===m.id;});
      var quiz='';
      if(qs.length){
        quiz=qs.map(function(q){
          if(q.best===null)return '<span class="ch-qline"><span>Quiz</span><span class="ch-muted">not taken</span></span>';
          var b=band(q.best);
          return '<span class="ch-qline"><span>Quiz best</span><span class="ch-chip '+b.cls+'">'+q.best+'% &middot; '+b.text+'</span></span>';
        }).join('');
      }
      var prog=(m.total&&!m.isExam)?('<span class="ch-mod-prog">'+bar(Math.round(m.done/m.total*100),m.done===m.total?'strong':'accent',m.done+' of '+m.total+' steps complete')+
        '<span class="ch-mod-count">'+m.done+' of '+m.total+' steps</span></span>'):'';
      var parts=String(m.title).split(/\s*[·•]\s*/);
      var label=parts.length>1?parts[0]:'';
      var name=parts.length>1?parts.slice(1).join(' · '):m.title;
      return '<li class="ch-mod'+cls+'">'+
        '<div class="ch-mod-top"><span class="ch-mod-label">'+esc(title(label||(m.isExam?'Exam':'Extra')))+'</span>'+status+'</div>'+
        '<h3>'+esc(title(name))+'</h3>'+
        (m.summary?'<p>'+esc(m.summary)+'</p>':'')+
        prog+quiz+
        '<button type="button" class="ch-btn ch-btn-quiet" data-go="'+esc(target)+'" aria-label="'+esc(btn+': '+title(m.title))+'">'+btn+' &rarr;</button>'+
      '</li>';
    }).join('');
    return '<section class="ch-block" id="chModules" aria-labelledby="chModH"><h2 id="chModH">What&rsquo;s inside</h2>'+
      '<ol class="ch-mods">'+cards+'</ol></section>';
  }

  function resultsHTML(g){
    var rows=g.quizzes.map(function(q){
      var m=g.mods.filter(function(x){return x.id===q.modId;})[0];
      var nm=title(String(m.title).replace(/^.*?[·•]\s*/,''));
      if(q.best===null){
        return '<li class="ch-row"><div class="ch-row-name"><b>'+esc(title(q.label))+'</b><span>'+esc(nm)+'</span></div>'+
          bar(0,'accent','Not taken yet',true)+'<span class="ch-row-val ch-muted">Not taken</span></li>';
      }
      var b=band(q.best);
      return '<li class="ch-row"><div class="ch-row-name"><b>'+esc(title(q.label))+'</b><span>'+esc(nm)+'</span></div>'+
        bar(q.best,b.cls,q.label+': best score '+q.best+' percent, '+b.text,true)+
        '<span class="ch-row-val"><b>'+q.best+'%</b> <span class="ch-chip '+b.cls+'">'+b.text+'</span></span></li>';
    }).join('');
    return '<section class="ch-panel" aria-labelledby="chResH"><h2 id="chResH">Quiz results</h2>'+
      '<p class="ch-note">Best score on each end-of-module quiz. The two tick marks on each bar sit at 63% and 88%.</p>'+
      (rows?'<ul class="ch-rows">'+rows+'</ul>':'<p class="ch-note">This companion has no module quizzes.</p>')+'</section>';
  }

  function areasHTML(){
    var stats=state.areaStats||{};
    var list=Object.keys(stats).filter(function(a){return stats[a]&&stats[a].asked>0;}).map(function(a){
      return {area:a,asked:stats[a].asked,right:stats[a].right,acc:Math.round(stats[a].right/stats[a].asked*100)};
    }).sort(function(a,b){return a.acc-b.acc||b.asked-a.asked;});
    var body;
    if(!list.length){
      body='<p class="ch-note">Take a module quiz and your results by concept area appear here, weakest first, with a link back to the section to revisit.</p>';
    }else{
      body='<p class="ch-note">Across every quiz and exam attempt, weakest first.</p><ul class="ch-rows">'+list.slice(0,8).map(function(r){
        var b=band(r.acc),key=(typeof AREA_SECTION!=='undefined')?AREA_SECTION[r.area]:null;
        return '<li class="ch-row"><div class="ch-row-name"><b>'+esc(title(r.area))+'</b><span>'+r.right+' of '+r.asked+' answered correctly</span></div>'+
          bar(r.acc,b.cls,r.area+': '+r.acc+' percent correct, '+b.text,true)+
          '<span class="ch-row-val"><b>'+r.acc+'%</b>'+
          (key&&flowIndex(key)>-1&&r.acc<88?' <button type="button" class="ch-link" data-go="'+esc(key)+'">Revisit</button>':'')+'</span></li>';
      }).join('')+'</ul>'+(list.length>8?'<p class="ch-note">Showing the 8 weakest of '+list.length+' areas.</p>':'');
    }
    return '<section class="ch-panel" aria-labelledby="chAreaH"><h2 id="chAreaH">Concept areas</h2>'+body+'</section>';
  }

  /* ---------- 4. Called by the engine ---------- */
  window.renderCompanionHome=function(){
    var onHome=FLOW[current]&&FLOW[current].key==='home';
    document.body.classList.toggle('on-home',!!onHome);
    /* Home has only one page, so the menu shows it as a single row
       with no arrow and no sub-list. */
    if(navEl&&navEl.children.length>1){
      var hb=navEl.children[0].querySelector('.chev-btn');
      if(hb)hb.style.display='none';
      navEl.children[1].style.display='none';
    }
    if(!onHome)return;  /* only redraw what the student can see */
    var g=gather();
    var pct=g.total?Math.round(g.done/g.total*100):0;
    var rgb=hexToRgb(MANIFEST.accent);
    sec.style.setProperty('--ch-a',darken(rgb,.38));
    sec.style.setProperty('--ch-b',darken(rgb,.62));
    sec.innerHTML=heroHTML(g,pct)+
      '<div class="ch-split">'+progressHTML(g,pct)+examHTML(g)+'</div>'+
      modulesHTML(g)+
      '<div class="ch-split ch-split-even">'+resultsHTML(g)+areasHTML()+'</div>';
    Array.prototype.forEach.call(sec.querySelectorAll('[data-go]'),function(b){
      b.onclick=function(){var i=flowIndex(b.getAttribute('data-go'));if(i>-1)goTo(i);};
    });
    Array.prototype.forEach.call(sec.querySelectorAll('[data-scroll]'),function(a){
      a.onclick=function(e){
        e.preventDefault();
        var t=document.getElementById(a.getAttribute('data-scroll'));
        if(t){try{t.scrollIntoView({behavior:'smooth',block:'start'});}catch(x){t.scrollIntoView();}}
      };
    });
  };
})();
