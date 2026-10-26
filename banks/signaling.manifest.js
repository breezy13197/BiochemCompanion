/* ============================================================
   banks/signaling.manifest.js
   Structure map for this companion AND the hub. Pure data — no
   DOM, no engine.

   signaling.html loads this file directly and DERIVES its own
   MODULES, SECTION_REQ, QUIZ_KEY_FOR_SECTION, and AREA_SECTION
   from it at runtime — see the content script's top block. This
   is the only place that structure is written; nothing hand-
   copies it a second time, so there is nothing to keep in sync.

   Because of that derivation, this file is now load-bearing for
   the companion's own page, not just the hub's dashboard of it.
   If it's missing or fails to parse, MANIFEST is undefined, the
   derivation throws on its first line, and the page fails to
   load at all — a sidebar with nothing behind it. Check it with
   `node --check banks/signaling.manifest.js`, then actually load
   signaling.html, before assuming only the hub needs re-checking.

   It is deliberately NOT part of banks/signaling.js: BankBridge
   rewrites bank files from scratch and would delete anything it
   does not have a field for.
   ============================================================ */
var MANIFEST = {
  topic  : 'signaling',
  title  : 'Membrane Transport & Signal Transduction',
  file   : 'signaling.html',          /* link the hub sends students to */
  accent : '#B07213',   /* this companion’s colour, for the dashboard */
  accentSoft : '#FDF2DC',
  /* One plain sentence under the title on this companion's home page. */
  tagline    : "How cells move molecules across membranes and turn outside signals into inside responses.",

  /* Every module, in study order. `quiz` names the POOL `m` value
     for that module’s quiz; `checks` are the checkpoint ids that
     gate a section; `activity` is a key in state.activities. */
  modules: [
    { id:'m1', title:'Module 1 · Membrane Transport', summary:"Predict which protein moves a molecule, in which direction, and what pays for it.",
      sections:[
      { key:'m1home', label:'Module 1 overview' },
      { key:'m1s1', label:'Passive transport', checks:['c1','c1b','c1c'], activity:'transportsim' },
      { key:'m1s2', label:'Primary active transport', checks:['c2','c2b','c2c'], activity:'pump' },
      { key:'m1s3', label:'Secondary active transport', checks:['c3','c3b','c3c'], activity:'classify' },
      { key:'m1quiz', label:'Module 1 quiz', quiz:'m1' }
    ]},
    { id:'m2', title:'Module 2 · GPCR Signaling', summary:"Build the G-protein cascade step by step, from receptor to second messenger to response.",
      sections:[
      { key:'m2home', label:'Module 2 overview' },
      { key:'m2s1', label:'Anatomy of a pathway', checks:['c4','c4b','c4c'], activity:'roles' },
      { key:'m2s2', label:'The β-adrenergic cascade', checks:['c5','c5b','c5c'], activity:'cascadereveal' },
      { key:'m2s3', label:'The IP₃ / DAG branch', checks:['c6','c6b','c6c'], activity:'cmp2' },
      { key:'m2quiz', label:'Module 2 quiz', quiz:'m2' }
    ]},
    { id:'m3', title:'Module 3 · Receptor Tyrosine Kinases', summary:"Insulin and EGFR receptors side by side: the same vocabulary, different pathways.",
      sections:[
      { key:'m3home', label:'Module 3 overview' },
      { key:'m3s1', label:'The insulin pathway', checks:['c7','c7b','c7c'], activity:'insulin' },
      { key:'m3s2', label:'The EGFR pathway', checks:['c8','c8b','c8c'], activity:'egfr' },
      { key:'m3s3', label:'Compare the pathways', checks:['c9','c9b'], activity:'cmp3' },
      { key:'m3quiz', label:'Module 3 quiz', quiz:'m3' }
    ]},
    { id:'m4', title:'Module 4 · Signal Termination', summary:"The three ways a pathway is switched off, and what happens when the off switch fails.",
      sections:[
      { key:'m4home', label:'Module 4 overview' },
      { key:'m4s1', label:'Three ways to end a signal', checks:['c10','c10b','c10c'], activity:'offswitch' },
      { key:'m4s2', label:'Break the pathway', checks:['c11','c11b','c11c'], activity:'breakras' },
      { key:'m4quiz', label:'Module 4 quiz', quiz:'m4' }
    ]},
    { id:'lab', title:'Pathway Lab', unlockAfter:["m1","m2","m3","m4"], summary:"A virtual cell where you change one thing and predict what every readout does.",
      sections:[
      { key:'lab', label:'Pathway Lab', checks:['cL1','cL2'], activity:'pathlab' }
    ]},
    { id:'flash', title:'Retrieval Practice', summary:"Flashcards for every key term and idea in this companion, for quick retrieval practice.",
      sections:[
      { key:'flashcards', label:'Flashcards' }
    ]},
    { id:'final', title:'Final Mastery Exam', unlockAfter:"*", summary:"A mixed exam drawn from every module. It unlocks once all of the modules are complete.",
      sections:[
      { key:'final', label:'Final mastery exam', quiz:'final' }
    ]}
  ],

  /* Content area -> the section key a student should revisit. */
  areaSection: {
    'Passive transport' : 'm1s1',
    'Active transport' : 'm1s2',
    'Cotransport & transporter types' : 'm1s3',
    'Signaling fundamentals & GPCR structure' : 'm2s1',
    'β-adrenergic cascade' : 'm2s2',
    'IP₃/DAG pathway' : 'm2s3',
    'Insulin signaling' : 'm3s1',
    'EGFR/Ras/MAPK signaling' : 'm3s2',
    'Comparing pathways' : 'm3s3',
    'Signal termination' : 'm4s1',
    'Broken switches & cancer' : 'm4s2'
  }
};
