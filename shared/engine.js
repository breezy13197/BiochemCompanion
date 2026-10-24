/* ============================================================
   COMPANION ENGINE — shared across every topic
   This file knows nothing about enzymes, kinetics, or any other
   subject. It reads generic globals that other files are expected
   to define before this script runs:
     TOPIC_ID, TOPIC_TITLE   (banks/<topic>.js)
     CHECKPOINTS, POOL, CARDS (banks/<topic>.js)
     state, saveState(), storageWorks (shared/storage.js)
     el(), shuffle(), order(), LETTERS (shared/helpers.js)
   This file also reads/writes state.lastSection (shared/storage.js)
   and a `?s=<sectionKey>` query param on the page's own URL, to
   resume a student's last section on return and to let a section be
   linked to directly — see "SECTION URLS" below goTo().
     MODULES, UNGRADED, FLOW, AREA_SECTION,
     SECTION_REQ, QUIZ_KEY_FOR_SECTION,
     FINAL_EXAM_MIX, MODULE_QUIZ_SIZE (optional)  (the page's own content script)
   Any MODULES entry may also carry an optional `unlockAfter` field —
   see "MODULE LOCKING" below — to gate that module behind others.
   Load order in the HTML file should be:
     1. shared/styles.css
     2. banks/<topic>.js       (TOPIC_ID, CHECKPOINTS, POOL, CARDS)
     3. shared/storage.js      (defines `state` — needs TOPIC_ID)
     4. shared/helpers.js      (el, shuffle, order — no dependencies)
     5. the page's own inline content script (module figures, etc.
        — several figures call el()/shuffle() and read
        `state.activities.*` as soon as they run, not just inside
        click handlers, so both must exist by this point)
     6. shared/engine.js       (this file — must load last; builds
        the nav from MODULES and wires every section up)
   ============================================================ */
var current=0,navEl=document.getElementById('nav');
var navLockBadges={};
MODULES.forEach(function(mod,mi){
  var row=el('div','mod-row');
  var head=el('button','mod-head','<span class="mod-badge">'+mod.badge+'</span><span class="mod-title-text">'+mod.title+'</span>');
  var chev=el('button','chev-btn','▶');
  chev.setAttribute('aria-label','Expand '+mod.title);
  var list=el('ul','sub');
  mod.sections.forEach(function(s){
    var li=el('li');
    var b=el('button',null,'<span class="dot"></span><span>'+s.label+'</span>');
    b.onclick=function(){goTo(FLOW.findIndex(function(f){return f.key===s.key;}));};
    li.appendChild(b);list.appendChild(li);
  });
  /* Clicking the module title navigates to that module's landing page.
     The chevron is a separate control so a student can preview the
     sub-section list without leaving the page they're on. */
  head.onclick=function(){goTo(FLOW.findIndex(function(f){return f.key===mod.sections[0].key;}));};
  chev.onclick=function(){list.classList.toggle('open');chev.classList.toggle('open');};
  /* Optional module lock (see MODULE LOCKING below): a small badge next
     to the title, shown only while this module is still locked. */
  if(mod.unlockAfter){
    var lockBadge=el('span','nav-lock','&#128274;');
    lockBadge.setAttribute('aria-label','Locked until other modules are complete');
    head.appendChild(lockBadge);
    navLockBadges[mod.id]=lockBadge;
  }
  row.appendChild(head);row.appendChild(chev);
  navEl.appendChild(row);navEl.appendChild(list);
});

/* ------------------------------------------------------------
   MODULE LOCKING (optional, opt-in per module)
   Any module in MODULES can declare `unlockAfter` to gate it behind
   other modules:
     unlockAfter: ['lab','m1','m2','m3','m4','m5']   an explicit list, or
     unlockAfter: '*'                                every other module
                                                       that has gradable
                                                       content
   A module without `unlockAfter` is never locked, so companions that
   don't use this field (including ones already built) are unaffected.
   A locked module's sections have their normal `.card` children hidden
   and replaced with one generic lock card built here — nothing about
   it is topic-specific, so no companion needs its own markup or script
   for this; adding `unlockAfter` to a MODULES entry is the whole job.
   ------------------------------------------------------------ */
function buildLockCard(mod){
  var card=el('div','card lock-card');
  card.innerHTML=
    '<div class="lock-icon" aria-hidden="true">&#128274;</div>'+
    '<h2>Locked</h2>'+
    '<p>&#8220;'+mod.title+'&#8221; unlocks once the following are complete:</p>'+
    '<ul class="lock-list"></ul>'+
    '<button class="btn lock-go" type="button">Take me to what\u2019s left</button>';
  return card;
}
var LOCKED_SECTIONS={};
MODULES.forEach(function(mod){
  if(!mod.unlockAfter)return;
  mod.sections.forEach(function(s){
    var sectionEl=document.querySelector('.section[data-key="'+s.key+'"]');
    if(!sectionEl)return;
    var cards=Array.prototype.slice.call(sectionEl.children).filter(function(c){return c.classList.contains('card');});
    var lockCard=buildLockCard(mod);
    sectionEl.insertBefore(lockCard,sectionEl.firstChild);
    var rec={cards:cards,lockCard:lockCard,
             list:lockCard.querySelector('.lock-list'),
             btn:lockCard.querySelector('.lock-go')};
    rec.btn.onclick=function(){
      var target=firstIncompleteFor(mod);
      if(target)goTo(FLOW.findIndex(function(f){return f.key===target;}));
    };
    LOCKED_SECTIONS[s.key]=rec;
  });
});

/* ------------------------------------------------------------
   SECTION URLS ("continue where I left off" + direct linking)
   The current section is mirrored into a `?s=<key>` query param via
   history.replaceState (never pushState — in-page Back/Next already
   has its own pager, so this deliberately doesn't add a browser-
   history entry per section). That makes the address bar always a
   valid, shareable, bookmarkable link straight to what's on screen,
   which is what lets an instructor link a specific section from
   Brightspace instead of only ever linking the companion's front page.

   On load, resolveStartSection() below picks the section to open:
   an explicit `?s=` in the URL wins first (so a Brightspace link
   always lands where it says it will), otherwise `state.lastSection`
   resumes wherever the student stopped, otherwise section 0. A
   locked module's sections already degrade to a lock card via
   refreshLocks() regardless of how the student arrived there, so
   landing on one directly (a stale link, a link shared before that
   module unlocked) is already handled with no extra guard needed
   here.
   ------------------------------------------------------------ */
function sectionKeyFromURL(){
  try{
    var m=/[?&]s=([^&]+)/.exec(location.search);
    return m?decodeURIComponent(m[1]):null;
  }catch(e){return null;}
}
function setSectionParam(key){
  try{
    var url=new URL(location.href);
    url.searchParams.set('s',key);
    history.replaceState(null,'',url);
  }catch(e){/* URL API missing or blocked — resume from storage still works */}
}
function resolveStartSection(){
  var fromURL=sectionKeyFromURL();
  if(fromURL && FLOW.some(function(f){return f.key===fromURL;})){
    return FLOW.findIndex(function(f){return f.key===fromURL;});
  }
  /* A companion with a home page (shared/home.js) opens there; the home
     page's own "Continue" button picks up from state.lastSection. */
  if(FLOW.length && FLOW[0].key==='home')return 0;
  if(state.lastSection && FLOW.some(function(f){return f.key===state.lastSection;})){
    return FLOW.findIndex(function(f){return f.key===state.lastSection;});
  }
  return 0;
}

function goTo(i){
  if(i<0||i>=FLOW.length)return;
  current=i;var key=FLOW[i].key;
  document.querySelectorAll('.section').forEach(function(s){s.classList.toggle('active',s.dataset.key===key);});
  paintNav();
  window.scrollTo({top:0,behavior:'smooth'});
  state.lastSection=key;saveState();
  setSectionParam(key);
}

/* ------------------------------------------------------------
   COMPLETION RULES
   A section only counts toward progress once the student has
   earned it: every "Can You Predict It?" checkpoint in that
   section answered CORRECTLY, plus any hands-on activity checked
   at least once. Quiz sections and the final exam count once
   submitted a first time. Just opening a section no longer moves
   the needle. Module landing pages and the flashcard deck are
   reference pages, not graded content, so they never block a
   module from reading "done" and never show a status dot.
   ------------------------------------------------------------ */
function sectionComplete(key){
  if(QUIZ_KEY_FOR_SECTION[key]!==undefined){
    return state.best[QUIZ_KEY_FOR_SECTION[key]]!==undefined;
  }
  var req=SECTION_REQ[key];
  if(!req)return true; /* landing pages & flashcards never block progress */
  var checksOK=req.checks.every(function(id){
    return state.checks[id]!==undefined && state.checks[id]===CHECKPOINTS[id].answer;
  });
  var activityOK=!req.activity || (state.activities[req.activity]!==null && state.activities[req.activity]!==undefined);
  return checksOK && activityOK;
}
function isGradable(key){return SECTION_REQ[key]!==undefined || QUIZ_KEY_FOR_SECTION[key]!==undefined;}

/* A module counts as complete once every gradable section inside it
   does — the same rule the sidebar badge uses, pulled out here so the
   lock logic reuses it exactly rather than recomputing it separately. */
function moduleComplete(mod){
  var g=mod.sections.filter(function(s){return isGradable(s.key);});
  return g.length>0 && g.every(function(s){return sectionComplete(s.key);});
}
function requiredIdsFor(mod){
  if(!mod.unlockAfter)return [];
  if(mod.unlockAfter==='*'){
    return MODULES.filter(function(m){
      return m.id!==mod.id && m.sections.some(function(s){return isGradable(s.key);});
    }).map(function(m){return m.id;});
  }
  return mod.unlockAfter;
}
function moduleLocked(mod){
  var ids=requiredIdsFor(mod);
  if(!ids.length)return false;
  return ids.some(function(id){
    var target=MODULES.filter(function(m){return m.id===id;})[0];
    return target && !moduleComplete(target);
  });
}
function firstIncompleteFor(mod){
  var ids=requiredIdsFor(mod);
  for(var i=0;i<ids.length;i++){
    var m=MODULES.filter(function(x){return x.id===ids[i];})[0];
    if(m && !moduleComplete(m)){
      for(var j=0;j<m.sections.length;j++){
        if(isGradable(m.sections[j].key)&&!sectionComplete(m.sections[j].key))return m.sections[j].key;
      }
      return m.sections[0].key; /* fallback: that module's landing page */
    }
  }
  return null;
}
/* Re-checks every locked module's status. Called at the end of
   paintNav(), so a lock lifts the instant its last requirement is met,
   in step with everything else paintNav already recalculates. */
function refreshLocks(){
  MODULES.forEach(function(mod){
    if(!mod.unlockAfter)return;
    var locked=moduleLocked(mod);
    if(navLockBadges[mod.id])navLockBadges[mod.id].style.display=locked?'':'none';
    mod.sections.forEach(function(s){
      var rec=LOCKED_SECTIONS[s.key];
      if(!rec)return;
      rec.lockCard.style.display=locked?'':'none';
      rec.cards.forEach(function(c){c.style.display=locked?'none':'';});
      if(locked){
        rec.list.innerHTML='';
        requiredIdsFor(mod).forEach(function(id){
          var m=MODULES.filter(function(x){return x.id===id;})[0];
          if(!m)return;
          var done=moduleComplete(m);
          var li=document.createElement('li');
          li.className=done?'done':'';
          li.innerHTML='<span class="lock-dot'+(done?' done':'')+'"></span>'+m.title;
          rec.list.appendChild(li);
        });
      }
    });
  });
}

function paintNav(){
  MODULES.forEach(function(mod,mi){
    var row=navEl.children[mi*2],list=navEl.children[mi*2+1];
    var head=row.children[0],chev=row.children[1];
    var inMod=mod.sections.some(function(s){return s.key===FLOW[current].key;});
    list.classList.toggle('open',inMod);
    chev.classList.toggle('open',inMod);
    head.classList.toggle('current',inMod);
    var allDone=moduleComplete(mod);
    head.querySelector('.mod-badge').classList.toggle('done',allDone);
    mod.sections.forEach(function(s,si){
      var b=list.children[si].firstChild;
      b.classList.toggle('current',s.key===FLOW[current].key);
      b.classList.toggle('done',isGradable(s.key)&&sectionComplete(s.key));
    });
  });
  var gradableFlow=FLOW.filter(function(f){return isGradable(f.key);});
  var done=gradableFlow.filter(function(s){return sectionComplete(s.key);}).length;
  var pct=gradableFlow.length?Math.round(done/gradableFlow.length*100):0;
  document.getElementById('ringPct').textContent=pct+'%';
  document.getElementById('ringFill').style.strokeDashoffset=113-(113*pct/100);
  document.getElementById('topTitle').textContent=FLOW[current].label;
  var pill=document.getElementById('topPill');
  if(state.best.final!==undefined){pill.textContent='Final exam best: '+state.best.final+'%';}
  else if(pct===0){pill.textContent='Not started';}
  else{pill.textContent=pct+'% complete';}

  /* Keep any landing-page checklist in sync with real completion,
     including the one the student is currently looking at. */
  document.querySelectorAll('.home-item[data-goto]').forEach(function(btn){
    var key=btn.dataset.goto,done2=sectionComplete(key);
    var num=btn.querySelector('.home-num'),st=btn.querySelector('.home-status');
    num.classList.toggle('done',done2);
    st.classList.toggle('done',done2);
    st.textContent=done2?'Done':'Not started';
  });
  refreshLocks();
  /* The companion home page (shared/home.js), if this page has one,
     redraws itself from the same progress numbers used above. */
  if(typeof renderCompanionHome==='function')renderCompanionHome();
}

/* Back / Next follow the study path in FLOW, not the order the
   sections happen to appear in the file. */
document.querySelectorAll('.section').forEach(function(sec){
  var p=sec.querySelector('.pager');if(!p)return;
  var i=FLOW.findIndex(function(f){return f.key===sec.dataset.key;});
  var back=el('button','btn ghost','← Back');
  back.onclick=function(){goTo(i-1);};
  if(i<=0)back.style.visibility='hidden';
  var next=el('button','btn',i>=0&&FLOW[i+1]?('Next: '+FLOW[i+1].label+' →'):'Next →');
  next.onclick=function(){goTo(i+1);};
  if(i===FLOW.length-1)next.style.visibility='hidden';
  p.appendChild(back);p.appendChild(next);
});
document.querySelectorAll('[data-check]').forEach(function(host){
  var id=host.dataset.check,cp=CHECKPOINTS[id];
  var box=host.classList.contains('choices')?host:host.querySelector('.choices');
  var fb=host.classList.contains('choices')?host.parentElement.querySelector('.feedback'):host.querySelector('.feedback');
  var ord=order(cp.options.length);
  ord.forEach(function(realIdx,pos){
    var b=el('button','choice','<span class="mark">'+LETTERS[pos]+'</span>'+cp.options[realIdx]);
    b.onclick=function(){answer(realIdx);};
    box.appendChild(b);
  });
  /* These are retry-until-correct: a wrong pick shows a nudge and stays
     open for another try, so one slip never blocks a section from being
     marked complete. Only a correct answer locks the question and saves
     it — which is also what "done" in the sidebar is built from. */
  function answer(realIdx){
    var right=(realIdx===cp.answer);
    if(right){
      box.querySelectorAll('.choice').forEach(function(b,pos){
        b.disabled=true;b.classList.remove('wrong');
        if(ord[pos]===cp.answer)b.classList.add('right');
      });
      fb.className='feedback show';
      fb.innerHTML='<strong>That\u2019s it.</strong>'+cp.why;
      state.checks[id]=realIdx;saveState();paintNav();
    }else{
      box.querySelectorAll('.choice').forEach(function(b){b.classList.remove('right','wrong');});
      box.querySelectorAll('.choice')[ord.indexOf(realIdx)].classList.add('wrong');
      fb.className='feedback show miss';
      fb.innerHTML='<strong>Not quite — try again.</strong>';
    }
  }
  if(state.checks[id]!==undefined)answer(state.checks[id]);
});
var fcIdx=0,fcCard=document.getElementById('fcCard');
function paintCard(){
  var wasFlipped=fcCard.classList.contains('flipped');
  fcCard.classList.remove('flipped');
  setTimeout(function(){
    document.getElementById('fcFront').textContent=CARDS[fcIdx].t;
    document.getElementById('fcBack').textContent=CARDS[fcIdx].d;
  },wasFlipped?250:0);
  document.getElementById('fcCount').textContent='Card '+(fcIdx+1)+' of '+CARDS.length;
}
fcCard.onclick=function(){fcCard.classList.toggle('flipped');};
fcCard.onkeydown=function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();fcCard.classList.toggle('flipped');}};
document.getElementById('fcNext').onclick=function(){fcIdx=(fcIdx+1)%CARDS.length;paintCard();};
document.getElementById('fcPrev').onclick=function(){fcIdx=(fcIdx-1+CARDS.length)%CARDS.length;paintCard();};
paintCard();
function sampleFrom(list,n){return shuffle(list).slice(0,n);}
function buildFinalSet(){
  var mix=(typeof FINAL_EXAM_MIX!=='undefined')?FINAL_EXAM_MIX:{concept:8,application:10,integration:7};
  var total=Object.keys(mix).reduce(function(s,k){return s+mix[k];},0);
  var picked=[];
  Object.keys(mix).forEach(function(lv){
    picked=picked.concat(sampleFrom(POOL.filter(function(q){return q.level===lv;}),mix[lv]));
  });
  if(picked.length<total){
    var rest=POOL.filter(function(q){return picked.indexOf(q)===-1;});
    picked=picked.concat(sampleFrom(rest,total-picked.length));
  }
  return shuffle(picked);
}
function buildSet(quizId){
  if(quizId==='final')return buildFinalSet();
  var n=(typeof MODULE_QUIZ_SIZE!=='undefined')?MODULE_QUIZ_SIZE:8;
  return sampleFrom(POOL.filter(function(q){return q.m===quizId;}),n);
}

document.querySelectorAll('.quiz-body').forEach(function(body){
  var quizId=body.dataset.quiz;
  var sec=body.closest('.section');
  var resultCard=sec.querySelector('.q-result');
  var warn=sec.querySelector('.q-warn');
  var questions=[],picks=[],orders=[],mode='normal';

  function render(list,heading){
    questions=list;picks=new Array(list.length).fill(null);orders=[];
    body.innerHTML='';
    if(heading)body.appendChild(el('h3',null,heading));
    list.forEach(function(q,i){
      var ord=order(q.options.length);orders.push(ord);
      var wrap=el('div','q');
      wrap.id='qjump-'+quizId+'-'+i;
      wrap.appendChild(el('div','q-num','Question '+(i+1)+' of '+list.length+
        '<span class="q-level">'+q.level+'</span>'));
      wrap.appendChild(el('p','q-stem',q.stem));
      var box=el('div','choices');
      ord.forEach(function(realIdx,pos){
        var b=el('button','choice','<span class="mark">'+LETTERS[pos]+'</span>'+q.options[realIdx]);
        b.onclick=function(){
          picks[i]=realIdx;
          box.querySelectorAll('.choice').forEach(function(x){x.classList.remove('picked');});
          b.classList.add('picked');
          wrap.classList.remove('q-missing');
        };
        box.appendChild(b);
      });
      wrap.appendChild(box);wrap.appendChild(el('div','feedback'));
      body.appendChild(wrap);
    });
    resultCard.classList.add('hidden');resultCard.innerHTML='';warn.textContent='';
  }

  function grade(){
    var qWraps=body.querySelectorAll('.q');
    var missingIdx=[];
    picks.forEach(function(p,i){if(p===null)missingIdx.push(i);});
    qWraps.forEach(function(wrap,i){wrap.classList.toggle('q-missing',missingIdx.indexOf(i)>-1);});
    if(missingIdx.length>0){
      var n=missingIdx.length;
      warn.textContent=n+' question'+(n>1?'s still need':' still needs')+' an answer.';
      var first=qWraps[missingIdx[0]];
      first.setAttribute('tabindex','-1');
      try{first.scrollIntoView({behavior:'smooth',block:'center'});}catch(e){}
      try{first.focus();}catch(e){}
      return;
    }
    warn.textContent='';
    var byArea={},correct=0,weak=[],missed=[];
    body.querySelectorAll('.q').forEach(function(wrap,i){
      var q=questions[i],right=(picks[i]===q.answer);
      if(right)correct++;
      else missed.push({num:i+1,area:q.area,stem:q.stem,id:wrap.id});
      if(!byArea[q.area])byArea[q.area]={got:0,total:0};
      byArea[q.area].total++;if(right)byArea[q.area].got++;
      wrap.querySelectorAll('.choice').forEach(function(b,pos){
        b.disabled=true;b.classList.remove('picked');
        if(orders[i][pos]===q.answer)b.classList.add('right');
        else if(orders[i][pos]===picks[i])b.classList.add('wrong');
      });
      var fb=wrap.querySelector('.feedback');
      fb.className='feedback show'+(right?'':' miss');
      fb.innerHTML='<strong>'+(right?'Correct.':'The better answer is highlighted above.')+'</strong>'+q.why;
      /* Flagging is offered only once an answer has been graded and its
         explanation is on screen, so it is a considered "come back to
         this", not a distraction mid-quiz. Flags are stored per question
         id in state.flags and read by the hub's Flagged questions list. */
      if(!state.flags)state.flags={};
      var flagBtn=el('button','btn ghost'+(state.flags[q.id]?' on':''),
        state.flags[q.id]?'★ Flagged for review':'☆ Flag for review');
      flagBtn.style.marginTop='12px';
      flagBtn.setAttribute('aria-pressed',state.flags[q.id]?'true':'false');
      flagBtn.onclick=function(){
        if(state.flags[q.id]){delete state.flags[q.id];}
        else{state.flags[q.id]=Date.now();}
        saveState();
        var on=!!state.flags[q.id];
        flagBtn.className='btn ghost'+(on?' on':'');
        flagBtn.innerHTML=on?'★ Flagged for review':'☆ Flag for review';
        flagBtn.setAttribute('aria-pressed',on?'true':'false');
      };
      wrap.appendChild(flagBtn);
    });
    var pct=Math.round(correct/questions.length*100);
    Object.keys(byArea).forEach(function(a){
      if(byArea[a].got/byArea[a].total<1)weak.push(a);
    });
    /* Persist this attempt's real per-area right/wrong, on every
       submission — a retake or a mastery round included, not only a
       new personal best — since each is genuine evidence about
       specific concepts even when the overall score doesn't improve.
       This is what lets the hub's weaknessMap() work from actual
       question-level evidence instead of spreading this quiz's one
       overall score across every area it happens to touch. */
    if(!state.areaStats)state.areaStats={};
    Object.keys(byArea).forEach(function(a){
      var b=byArea[a];
      var s=state.areaStats[a]||(state.areaStats[a]={asked:0,right:0,lastAcc:null,lastTs:0});
      s.asked+=b.total;s.right+=b.got;
      s.lastAcc=b.got/b.total;s.lastTs=Date.now();
    });
    saveState();
    showResult(pct,correct,byArea,weak,missed);
    if(mode==='normal'&&(state.best[quizId]===undefined||pct>state.best[quizId])){
      state.best[quizId]=pct;saveState();paintNav();
    }
  }

  /* Scrolls straight to a specific graded question and gives it a brief
     highlight pulse, so clicking a row in the "Questions to review" list
     actually lands the student on that question instead of leaving them
     to scroll and hunt for it. */
  function jumpToMissed(id){
    var target=document.getElementById(id);
    if(!target)return;
    target.scrollIntoView({behavior:'smooth',block:'center'});
    target.classList.remove('q-jumped');
    void target.offsetWidth; /* restart the animation if clicked twice */
    target.classList.add('q-jumped');
  }

  function showResult(pct,correct,byArea,weak,missed){
    resultCard.classList.remove('hidden');resultCard.innerHTML='';
    var hero=el('div','score-hero');
    hero.appendChild(el('div','big',pct+'%'));
    hero.appendChild(el('div',null,'<strong>'+correct+' of '+questions.length+' correct</strong>'));
    hero.appendChild(el('p',null,
      pct>=88?'Strong command of this material.':
      pct>=63?'A solid foundation with a few gaps worth closing.':
              'Worth another pass through the sections before moving on.'));
    resultCard.appendChild(hero);

    if(missed&&missed.length){
      resultCard.appendChild(el('h3',null,'Questions to review ('+missed.length+')'));
      var ml=el('div','missed-list');
      missed.forEach(function(m){
        var row=el('button','missed-row');
        row.type='button';
        row.title=m.stem;
        row.innerHTML='<span class="missed-num">Q'+m.num+'</span>'+
          '<span class="missed-stem">'+m.stem+'</span>'+
          '<span class="missed-area">'+m.area+'</span>'+
          '<span class="missed-arrow">Review &darr;</span>';
        row.onclick=function(){jumpToMissed(m.id);};
        ml.appendChild(row);
      });
      resultCard.appendChild(ml);
    }

    resultCard.appendChild(el('h3',null,'Mastery by concept area'));
    var bd=el('div','bd');
    Object.keys(byArea).forEach(function(area){
      var a=byArea[area],p=Math.round(a.got/a.total*100);
      var label=p===100?'Strong':(p>=50?'Developing':'Needs review');
      var cls=p===100?'s-strong':(p>=50?'s-dev':'s-review');
      var color=p===100?'#2FA97A':(p>=50?'#E0A73C':'#D4536B');
      bd.appendChild(el('div','bd-row',
        '<span class="bd-name">'+area+'</span>'+
        '<span class="bd-bar"><span class="bd-fill" style="width:'+p+'%;background:'+color+'"></span></span>'+
        '<span class="bd-state '+cls+'">'+label+' · '+a.got+'/'+a.total+'</span>'));
    });
    resultCard.appendChild(bd);

    var ns=el('div','next-step');
    if(weak.length===0){
      ns.innerHTML='<strong>Every concept area is solid.</strong> Nothing here needs another pass.';
      resultCard.appendChild(ns);
    }else{
      var links=weak.map(function(a){
        var key=AREA_SECTION[a];
        return key?'<a data-jump="'+key+'">'+FLOW.find(function(f){return f.key===key;}).label+'</a>':a;
      }).join(', ');
      ns.innerHTML='<strong>Recommended next step:</strong> revisit '+links+', then run a targeted round.';
      resultCard.appendChild(ns);
      var mb=el('button','btn','Practice the concepts you missed ('+weak.length+')');
      mb.style.marginTop='16px';
      mb.onclick=function(){startMastery(weak);};
      resultCard.appendChild(mb);
      resultCard.querySelectorAll('[data-jump]').forEach(function(a){
        a.onclick=function(){goTo(FLOW.findIndex(function(f){return f.key===a.dataset.jump;}));};
      });
    }
    resultCard.scrollIntoView({behavior:'smooth',block:'start'});
  }

  function startMastery(weak){
    var asked=questions.slice();
    var fresh=POOL.filter(function(q){return weak.indexOf(q.area)>-1&&asked.indexOf(q)===-1;});
    var reuse=POOL.filter(function(q){return weak.indexOf(q.area)>-1&&asked.indexOf(q)>-1;});
    var set=sampleFrom(fresh,8);
    if(set.length<4)set=set.concat(sampleFrom(reuse,4-set.length));
    mode='mastery';
    render(set,'Mastery round · '+set.length+' questions on '+weak.join(', '));
    body.scrollIntoView({behavior:'smooth',block:'start'});
  }

  sec.querySelector('.q-submit').onclick=grade;
  sec.querySelector('.q-retake').onclick=function(){mode='normal';render(buildSet(quizId));
    window.scrollTo({top:0,behavior:'smooth'});};
  render(buildSet(quizId));
});
document.getElementById('resetBtn').onclick=function(){
  if(!confirm('Clear all saved progress on this device? This cannot be undone.'))return;
  try{if(storageWorks){localStorage.removeItem(KEY);}else{delete memory[KEY];}}catch(e){}
  location.reload();
};

/* Module landing-page checklist rows navigate like any other nav item. */
document.querySelectorAll('.home-item[data-goto]').forEach(function(btn){
  btn.onclick=function(){goTo(FLOW.findIndex(function(f){return f.key===btn.dataset.goto;}));};
});
var jumpFlash=document.getElementById('jumpFlash');
if(jumpFlash){jumpFlash.onclick=function(){goTo(FLOW.findIndex(function(f){return f.key==='flashcards';}));};}

goTo(resolveStartSection());
if(!storageWorks){
  document.getElementById('topMeta').textContent=
    (typeof TOPIC_TITLE!=='undefined'?TOPIC_TITLE:'This companion')+
    ' · This browser is blocking saved progress, so this session will not be remembered.';
}
