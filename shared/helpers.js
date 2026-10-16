/* ============================================================
   COMPANION HELPERS — shared across every topic
   Small, dependency-free utilities used by both the content script
   and engine.js. Loads after storage.js (no dependency on it, but
   keeping foundational files together) and before the content
   script, since content-side code (the drag-and-drop board, the
   sorting activities) calls el() and shuffle() as soon as it runs.
   ============================================================ */
var LETTERS=['A','B','C','D','E'];
function shuffle(arr){var a=arr.slice(),i,j,t;
  for(i=a.length-1;i>0;i--){j=Math.floor(Math.random()*(i+1));t=a[i];a[i]=a[j];a[j]=t;}return a;}
function order(n){return shuffle(Array.from({length:n},function(_,i){return i;}));}
function el(tag,cls,html){var e=document.createElement(tag);if(cls)e.className=cls;
  if(html!==undefined)e.innerHTML=html;return e;}
