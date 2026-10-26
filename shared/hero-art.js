/* ============================================================
   COMPANION HERO ART — shared across every topic
   One small line drawing per companion, shown at the top of its
   home page (see shared/home.js). Each entry is a function that
   returns the markup for an SVG, keyed by the companion's
   TOPIC_ID. Pure drawing: no page access, no dependency on the
   engine, so it can load anywhere before home.js.

   The drawings are white lines on whatever dark color the hero
   panel is using, so they pick up each companion's own color
   automatically. To add a companion, add one entry below; a
   companion with no entry simply shows a plain colored banner.
   ============================================================ */
var HERO_ART=(function(){
  var W='#fff', G='<g fill="none" stroke="'+W+'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">';
  function svg(inner){
    return '<svg viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg" focusable="false">'+inner+'</svg>';
  }
  function hex(cx,cy,r,fill){
    var p=[],i,a;
    for(i=0;i<6;i++){a=Math.PI/3*i+Math.PI/6;p.push((cx+r*Math.cos(a)).toFixed(1)+','+(cy+r*Math.sin(a)).toFixed(1));}
    return '<polygon points="'+p.join(' ')+'" fill="'+(fill||'rgba(255,255,255,.18)')+'"/>';
  }
  /* A row of lipid heads with short tails: the membrane in cross-section. */
  function membrane(y,x0,x1,gap){
    var s='',x;
    for(x=x0;x<=x1;x+=gap){
      s+='<circle cx="'+x+'" cy="'+(y-16)+'" r="5" fill="'+W+'" stroke="none" opacity=".85"/>'+
         '<circle cx="'+x+'" cy="'+(y+16)+'" r="5" fill="'+W+'" stroke="none" opacity=".85"/>'+
         '<path d="M'+x+' '+(y-10)+'v8M'+x+' '+(y+10)+'v-8" stroke-width="2" opacity=".5"/>';
    }
    return s;
  }
  function label(x,y,t,size,anchor){
    return '<text x="'+x+'" y="'+y+'" fill="'+W+'" stroke="none" font-size="'+(size||12)+'" font-weight="600" text-anchor="'+(anchor||'middle')+'" opacity=".92">'+t+'</text>';
  }
  function arrow(x1,y1,x2,y2){
    var a=Math.atan2(y2-y1,x2-x1),h=9;
    return '<path d="M'+x1+' '+y1+'L'+x2+' '+y2+'M'+(x2-h*Math.cos(a-.5)).toFixed(1)+' '+(y2-h*Math.sin(a-.5)).toFixed(1)+
           'L'+x2+' '+y2+'L'+(x2-h*Math.cos(a+.5)).toFixed(1)+' '+(y2-h*Math.sin(a+.5)).toFixed(1)+'"/>';
  }

  var art={};

  /* Enzymes: a substrate dropping into the active site, products leaving. */
  art.enzymes=function(){
    return svg(G+
      '<path d="M52 170C38 124 66 86 112 92L140 96L168 130L196 96L228 92C282 86 314 126 298 170C282 214 226 232 176 230C122 228 66 214 52 170Z" fill="rgba(255,255,255,.14)"/>'+
      '<path d="M146 62L176 106L206 62Z" fill="rgba(255,255,255,.92)" stroke="none" stroke-linejoin="round"/>'+
      '<path d="M176 12v26M168 30l8 9 8-9"/>'+
      '<circle cx="100" cy="166" r="10" fill="rgba(255,255,255,.3)"/><circle cx="250" cy="176" r="15" fill="rgba(255,255,255,.3)"/>'+
      '<path d="M210 70h34" stroke-dasharray="2 7"/>'+
      '<path d="M262 60l16-24 16 24Z" fill="'+W+'" stroke="none" opacity=".92"/>'+
      '<circle cx="324" cy="48" r="13" fill="'+W+'" stroke="none" opacity=".92"/>'+
      '<path d="M296 56h4" opacity="0"/>'+
      '</g>'+label(176,254,'substrate meets active site',12));
  };

  /* Amino acids: a peptide chain winding into a helix, with side-chain beads. */
  art.aminoacids=function(){
    var s=G,i,x,y,px,py,nx,ny,d='M';
    for(i=0;i<12;i++){
      x=40+i*25.5;y=128+Math.sin(i*0.95)*46;
      d+=(i?'L':'')+x.toFixed(1)+' '+y.toFixed(1);
    }
    s+='<path d="'+d+'" stroke-width="4" opacity=".55"/>';
    for(i=0;i<12;i++){
      x=40+i*25.5;y=128+Math.sin(i*0.95)*46;
      ny=Math.cos(i*0.95)>0?1:-1;
      s+='<path d="M'+x.toFixed(1)+' '+y.toFixed(1)+'L'+x.toFixed(1)+' '+(y+ny*30).toFixed(1)+'" stroke-width="2"/>'+
         '<circle cx="'+x.toFixed(1)+'" cy="'+(y+ny*38).toFixed(1)+'" r="8" fill="rgba(255,255,255,.28)"/>'+
         '<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="11" fill="'+W+'" stroke="none"/>';
    }
    s+='</g>'+label(24,238,'H₃N⁺',13,'start')+label(336,238,'COO⁻',13,'end');
    return svg(s);
  };

  /* Hemoglobin: four subunits, each with a heme and an oxygen molecule. */
  art.hemoglobin=function(){
    var s=G,pos=[[138,96],[222,96],[138,172],[222,172]],i,p;
    for(i=0;i<4;i++){
      p=pos[i];
      s+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="46" fill="rgba(255,255,255,.12)"/>'+
         '<rect x="'+(p[0]-13)+'" y="'+(p[1]-13)+'" width="26" height="26" rx="6" fill="rgba(255,255,255,.22)"/>'+
         '<circle cx="'+p[0]+'" cy="'+p[1]+'" r="6" fill="'+W+'" stroke="none"/>';
    }
    s+='<circle cx="60" cy="52" r="7" fill="'+W+'" stroke="none"/><circle cx="76" cy="60" r="7" fill="'+W+'" stroke="none"/>'+
       '<circle cx="300" cy="206" r="7" fill="'+W+'" stroke="none"/><circle cx="316" cy="198" r="7" fill="'+W+'" stroke="none"/>'+
       arrow(86,68,116,86)+arrow(296,194,252,178)+
       '</g>'+label(180,250,'4 subunits · 4 hemes · 4 O₂',12);
    return svg(s);
  };

  /* Signaling: ligand, receptor crossing the membrane, relay and amplification. */
  art.signaling=function(){
    var s=G,i;
    s+=membrane(112,22,338,17);
    for(i=0;i<7;i++)s+='<rect x="'+(144+i*10)+'" y="84" width="7" height="56" rx="3.5" fill="rgba(255,255,255,.55)" stroke="none"/>';
    s+='<circle cx="180" cy="34" r="13" fill="'+W+'" stroke="none"/>'+arrow(180,50,180,76)+
       '<ellipse cx="180" cy="168" rx="26" ry="16" fill="rgba(255,255,255,.2)"/>'+
       arrow(206,176,244,196)+
       '<circle cx="254" cy="204" r="5" fill="'+W+'" stroke="none"/>'+
       '<circle cx="276" cy="196" r="5" fill="'+W+'" stroke="none"/><circle cx="276" cy="216" r="5" fill="'+W+'" stroke="none"/>'+
       '<circle cx="300" cy="188" r="5" fill="'+W+'" stroke="none"/><circle cx="300" cy="204" r="5" fill="'+W+'" stroke="none"/>'+
       '<circle cx="300" cy="220" r="5" fill="'+W+'" stroke="none"/><circle cx="300" cy="236" r="5" fill="'+W+'" stroke="none"/>'+
       '</g>'+label(24,244,'amplification \u2192',12,'start');
    return svg(s);
  };

  /* Nucleotides: the double helix with base pairs. */
  art.nucleotides=function(){
    var s=G,d1='M',d2='M',x,y,i,rungs='';
    for(x=24,i=0;x<=336;x+=6,i++){
      y=Math.sin(x*0.052)*52;
      d1+=(i?'L':'')+x+' '+(130+y).toFixed(1);
      d2+=(i?'L':'')+x+' '+(130-y).toFixed(1);
    }
    for(x=36;x<=324;x+=18){
      y=Math.sin(x*0.052)*52;
      rungs+='<path d="M'+x+' '+(130+y).toFixed(1)+'L'+x+' '+(130-y).toFixed(1)+'" stroke-width="2.5" opacity="'+(Math.abs(y)>20?.75:.3)+'"/>';
    }
    s+=rungs+'<path d="'+d1+'" stroke-width="5"/><path d="'+d2+'" stroke-width="5" opacity=".6"/></g>'+
       label(180,238,'A–T · G–C',13);
    return svg(s);
  };

  /* Glycogen: a branched particle of glucose units around a core protein. */
  art.glycogen=function(){
    var s=G,cx=180,cy=124,k,j,a,r,x,y,bx,by,ba,t;
    for(k=0;k<8;k++){
      a=Math.PI*2/8*k+0.2;
      s+='<path d="M'+cx+' '+cy+'L'+(cx+Math.cos(a)*100).toFixed(1)+' '+(cy+Math.sin(a)*100).toFixed(1)+'" stroke-width="2.5" opacity=".6"/>';
      for(j=1;j<=3;j++){
        r=22+j*26;x=cx+Math.cos(a)*r;y=cy+Math.sin(a)*r;
        if(j===2){
          for(t=-1;t<=1;t+=2){
            ba=a+t*0.75;bx=x+Math.cos(ba)*30;by=y+Math.sin(ba)*30;
            s+='<path d="M'+x.toFixed(1)+' '+y.toFixed(1)+'L'+bx.toFixed(1)+' '+by.toFixed(1)+'" stroke-width="2.5" opacity=".6"/>'+hex(bx,by,9,'rgba(255,255,255,.3)');
          }
        }
        s+=hex(x,y,10.5,j===3?'rgba(255,255,255,.5)':'rgba(255,255,255,.22)');
      }
    }
    s+='<circle cx="'+cx+'" cy="'+cy+'" r="15" fill="'+W+'" stroke="none"/></g>'+label(180,250,'branched glucose polymer',12);
    return svg(s);
  };

  /* Citric acid cycle: eight steps around a ring, acetyl-CoA in, CO2 out. */
  art.cac=function(){
    var s=G,cx=190,cy=134,R=78,i,a,a2,x,y,mx,my,tx,ty;
    s+='<circle cx="'+cx+'" cy="'+cy+'" r="'+R+'" stroke-width="3" opacity=".35"/>';
    for(i=0;i<8;i++){
      a2=Math.PI*2/8*i-Math.PI/2+Math.PI/8;
      mx=cx+Math.cos(a2)*R;my=cy+Math.sin(a2)*R;
      tx=-Math.sin(a2);ty=Math.cos(a2);                 /* direction of travel around the ring */
      s+='<path d="M'+(mx-tx*3+ty*7).toFixed(1)+' '+(my-ty*3-tx*7).toFixed(1)+'L'+(mx+tx*6).toFixed(1)+' '+(my+ty*6).toFixed(1)+
         'L'+(mx-tx*3-ty*7).toFixed(1)+' '+(my-ty*3+tx*7).toFixed(1)+'" stroke-width="3"/>';
    }
    for(i=0;i<8;i++){
      a=Math.PI*2/8*i-Math.PI/2;x=cx+Math.cos(a)*R;y=cy+Math.sin(a)*R;
      s+='<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="14" fill="'+W+'" stroke="none"/>'+
         '<text x="'+x.toFixed(1)+'" y="'+(y+4.5).toFixed(1)+'" font-size="13" font-weight="700" text-anchor="middle" stroke="none" style="fill:var(--ch-b)">'+(i+1)+'</text>';
    }
    s+=arrow(54,40,cx-18,cy-R-4)+arrow(cx+58,cy+56,300,206)+
       '</g>'+label(24,30,'acetyl-CoA',12,'start')+label(336,226,'2 CO\u2082',12,'end');
    return svg(s);
  };

  /* Oxidative phosphorylation: complexes pumping protons, ATP synthase spending them. */
  art.oxphos=function(){
    var s=G,i,hx;
    s+=membrane(134,16,344,17);
    s+='<rect x="44" y="108" width="46" height="52" rx="10" fill="rgba(255,255,255,.35)"/><rect x="118" y="108" width="46" height="52" rx="10" fill="rgba(255,255,255,.35)"/>'+
       '<rect x="192" y="108" width="46" height="52" rx="10" fill="rgba(255,255,255,.35)"/>'+
       '<rect x="274" y="96" width="32" height="24" rx="8" fill="rgba(255,255,255,.7)"/>'+
       '<path d="M290 120v52" stroke-width="7"/><circle cx="290" cy="196" r="24" fill="rgba(255,255,255,.4)"/>';
    for(i=0;i<10;i++){
      hx=28+i*29;
      s+='<circle cx="'+hx+'" cy="'+(34+(i%3)*10)+'" r="6" fill="'+W+'" stroke="none"/>';
    }
    s+=arrow(67,100,67,64)+arrow(141,100,141,64)+arrow(215,100,215,64)+
       '<path d="M326 64c14 14 14 32 0 46M318 100l8 10 10-8"/>'+
       '<circle cx="150" cy="212" r="4" fill="'+W+'" stroke="none"/><circle cx="184" cy="226" r="4" fill="'+W+'" stroke="none"/>'+
       '</g>'+label(34,18,'H\u207a pumped out',12,'start')+label(290,238,'ATP',13);
    return svg(s);
  };

  /* Amino acid metabolism: nitrogen peeled off to urea, carbon skeleton to the cycle. */
  art.aametabolism=function(){
    var s=G;
    s+='<circle cx="90" cy="134" r="20" fill="'+W+'" stroke="none"/>'+
       '<text x="90" y="140" font-size="16" font-weight="700" text-anchor="middle" stroke="none" style="fill:var(--ch-b)">Cα</text>'+
       '<path d="M78 120L58 86"/><circle cx="52" cy="76" r="14" fill="rgba(255,255,255,.3)"/>'+label(52,81,'N',13)+
       '<path d="M108 134h40"/><circle cx="162" cy="134" r="14" fill="rgba(255,255,255,.18)"/>'+
       '<path d="M90 154v34"/><circle cx="90" cy="202" r="14" fill="rgba(255,255,255,.18)"/>'+
       '<path d="M70 70C100 30 160 30 208 56"/>'+
       '<path d="M200 46l12 12-16 2" />'+
       '<circle cx="250" cy="66" r="14" fill="rgba(255,255,255,.3)"/>'+label(250,71,'N',13)+
       '<circle cx="292" cy="66" r="14" fill="rgba(255,255,255,.3)"/>'+label(292,71,'N',13)+
       '<path d="M264 66h14"/>'+
       label(271,38,'urea',12)+
       '<path d="M106 204h60l16-18 22 34 20-34 22 18h14" stroke-width="3"/>'+
       '<circle cx="296" cy="204" r="32" stroke-dasharray="2 8" stroke-width="3"/>'+
       label(296,208,'cycle',12)+
       label(90,240,'carbon skeleton',12)+
       '</g>';
    return svg(s);
  };

  /* Integration: organs linked by traffic of fuels and hormones. */
  art.integration=function(){
    var s=G,nodes=[[180,128,34,'Liver'],[66,58,24,'Brain'],[294,58,24,'Muscle'],[62,196,24,'Fat'],[298,196,24,'Gut']],i,n,L=nodes[0],dx,dy,d,ux,uy,x1,y1,x2,y2,mx,my,toLiver;
    for(i=1;i<nodes.length;i++){
      n=nodes[i];dx=n[0]-L[0];dy=n[1]-L[1];d=Math.sqrt(dx*dx+dy*dy);ux=dx/d;uy=dy/d;
      x1=L[0]+ux*(L[2]+6);y1=L[1]+uy*(L[2]+6);x2=n[0]-ux*(n[2]+6);y2=n[1]-uy*(n[2]+6);
      s+='<path d="M'+x1.toFixed(1)+' '+y1.toFixed(1)+'L'+x2.toFixed(1)+' '+y2.toFixed(1)+'" stroke-width="2.5" opacity=".5"/>';
      mx=(x1+x2)/2;my=(y1+y2)/2;toLiver=(i%2===0);
      s+=arrow(toLiver?mx+ux*12:mx-ux*12,toLiver?my+uy*12:my-uy*12,toLiver?mx-ux*12:mx+ux*12,toLiver?my-uy*12:my+uy*12);
    }
    for(i=0;i<nodes.length;i++){
      n=nodes[i];
      s+='<circle cx="'+n[0]+'" cy="'+n[1]+'" r="'+n[2]+'" fill="'+(i?'rgba(255,255,255,.2)':'rgba(255,255,255,.92)')+'"/>'+
         '<text x="'+n[0]+'" y="'+(n[1]+4.5)+'" font-size="'+(i?12:14)+'" font-weight="700" text-anchor="middle" stroke="none" '+
         (i?'fill="#fff"':'style="fill:var(--ch-b)"')+'>'+n[3]+'</text>';
    }
    s+='</g>'+label(180,250,'fuels and hormones, organ to organ',12);
    return svg(s);
  };

  return art;
})();
