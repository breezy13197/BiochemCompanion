/* ============================================================
   MOBILE MENU — shared by the hub and every companion
   On a narrow screen (phone or small tablet) the side menu would
   otherwise sit above the content and push it a full screen down.
   This file adds a "Menu" button that opens and closes the list.
   On a wide screen nothing changes. If this file fails to load, the
   menu simply stays open, exactly as before.
   Load it last, after the page's own scripts (after engine.js in a
   companion; after the hub's own script in index.html).
   ============================================================ */
(function(){
  var side=document.querySelector('.sidebar')||document.querySelector('.rail');
  var nav=document.getElementById('nav');
  if(!side||!nav)return;
  var isHub=side.classList.contains('rail');
  var narrow=isHub?'(max-width:1080px)':'(max-width:900px)';
  var mq=window.matchMedia(narrow);

  /* The look. Uses each page's own color names, with plain fallbacks. */
  var st=document.createElement('style');
  var q='@media '+narrow;
  st.textContent=
    '.menu-toggle{display:none}'+
    q+'{'+
      '.menu-toggle{display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;'+
        'min-height:44px;padding:10px 14px;border-radius:12px;font:inherit;font-weight:650;font-size:.95rem;cursor:pointer;'+
        'border:1px solid var(--line,#dde);background:var(--card,#fff);color:var(--ink,#222)}'+
      '.menu-toggle .menu-icon{font-size:1.15rem;line-height:1}'+
      '.rail .menu-toggle{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.25);color:#fff}'+
      '.menu-toggle:focus-visible{outline:3px solid var(--w-hl,#7aa7ff);outline-offset:2px}'+
      'body:not(.menu-open) .menu-collapsible{display:none !important}'+
      '.rail .brand{flex:1 1 auto}'+
      '.rail .menu-toggle{flex:0 0 auto;width:auto}'+
    '}';
  document.head.appendChild(st);

  /* Everything in the menu except the brand block, the back link and the button. */
  Array.prototype.forEach.call(side.children,function(c){
    if(c.classList.contains('brand')||c.classList.contains('back-to-hub')||c.classList.contains('menu-toggle'))return;
    c.classList.add('menu-collapsible');
  });

  var btn=document.createElement('button');
  btn.type='button';
  btn.className='menu-toggle';
  btn.setAttribute('aria-controls','nav');
  btn.innerHTML='<span class="menu-label">Menu</span><span class="menu-icon" aria-hidden="true">&#9776;</span>';
  var brand=side.querySelector('.brand');
  if(brand)brand.parentNode.insertBefore(btn,brand.nextSibling);else side.insertBefore(btn,side.firstChild);

  function set(open){
    document.body.classList.toggle('menu-open',open);
    btn.setAttribute('aria-expanded',open?'true':'false');
    btn.querySelector('.menu-label').textContent=open?'Close menu':'Menu';
    btn.querySelector('.menu-icon').innerHTML=open?'&times;':'&#9776;';
  }
  set(false);
  btn.addEventListener('click',function(){set(!document.body.classList.contains('menu-open'));});

  /* Close the menu once the student has actually gone somewhere.
     In the hub every menu button is a destination. In a companion, a module
     heading both opens the module and expands its list of sections, so the
     menu stays open for that click, so the student can pick a section.
     Any other menu button (a section, a quiz, Start Here) closes it. */
  nav.addEventListener('click',function(e){
    var b=e.target.closest('button');
    if(!mq.matches||!b)return;
    if(isHub||!b.classList.contains('mod-head')){set(false);window.scrollTo(0,0);}
  },true);

  /* Escape closes it; going back to a wide screen resets it. */
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'&&document.body.classList.contains('menu-open')){set(false);btn.focus();}
  });
  (mq.addEventListener?mq.addEventListener.bind(mq,'change'):mq.addListener.bind(mq))(function(){set(false);});
})();
