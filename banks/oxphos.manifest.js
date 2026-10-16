/* ============================================================
   MANIFEST — Oxidative Phosphorylation
   A copy of this companion's module/section structure in a form
   hub.html can load with a single <script> tag, without running
   the companion's own page.

   THIS IS A COPY, AND COPIES DRIFT. If you rename a section, add
   a checkpoint to SECTION_REQ, or change AREA_SECTION inside
   oxphos.html, edit this file in the same sitting. Nothing checks
   the two against each other, and the hub will keep reporting the
   old shape with no error.
   ============================================================ */
var MANIFEST = {
  topic      : 'oxphos',
  title      : 'Oxidative Phosphorylation',
  file       : 'oxphos.html',
  accent     : '#1E5FD0',
  accentSoft : '#E8EFFD',

  modules: [
    { id:'m1', title:'Module 1 \u00B7 Follow the electrons', sections:[
      { key:'m1home', label:'Module overview' },
      { key:'m1s1',   label:'Why electrons move',      checks:['c1a','c1b','c1c'], activity:'ladder' },
      { key:'m1s2',   label:'Building the chain',      checks:['c2a','c2b','c2c'], activity:'highway' },
      { key:'m1s3',   label:'Counting the protons',    checks:['c3a','c3b'],       activity:'protons' },
      { key:'m1quiz', label:'Module 1 quiz',           quiz:'m1' }
    ]},
    { id:'m2', title:'Module 2 \u00B7 Build the battery', sections:[
      { key:'m2home', label:'Module overview' },
      { key:'m2s1',   label:'Charging the mitochondrion',  checks:['c4a','c4b'],       activity:'charge' },
      { key:'m2s2',   label:'Coupling, and what breaks it', checks:['c5a','c5b','c5c'], activity:'coupling' },
      { key:'m2quiz', label:'Module 2 quiz',                quiz:'m2' }
    ]},
    { id:'m3', title:'Module 3 \u00B7 Spend the gradient', sections:[
      { key:'m3home', label:'Module overview' },
      { key:'m3s1',   label:'Anatomy of the machine',   checks:['c6a','c6b'],       activity:'parts' },
      { key:'m3s2',   label:'The binding-change cycle', checks:['c7a','c7b','c7c'], activity:'rotor' },
      { key:'m3quiz', label:'Module 3 quiz',            quiz:'m3' }
    ]},
    { id:'m4', title:'Module 4 \u00B7 Count the ATP', sections:[
      { key:'m4home', label:'Module overview' },
      { key:'m4s1',   label:'Building the ATP ledger', checks:['c8a','c8b'],       activity:'yield' },
      { key:'m4s2',   label:'Tracing the shuttles',    checks:['c9a','c9b','c9c'], activity:'shuttle' },
      { key:'m4quiz', label:'Module 4 quiz',           quiz:'m4' }
    ]},
    { id:'m5', title:'Module 5 \u00B7 Break the system', sections:[
      { key:'m5home', label:'Module overview' },
      { key:'m5s1',   label:'Mapping the inhibitors',        checks:['c10a','c10b'],        activity:'inhibmap' },
      { key:'m5s2',   label:'Uncouplers and drug targets',   checks:['c11a','c11b','c11c'], activity:'detective' },
      { key:'m5quiz', label:'Module 5 quiz',                 quiz:'m5' }
    ]},
    { id:'lab', title:'Mastery Lab \u00B7 Diagnose', sections:[
      { key:'labhome', label:'Lab overview' },
      { key:'lab1',    label:'Case files',        checks:['c12a','c12b','c12c'], activity:'cases' },
      { key:'labquiz', label:'Integration check', quiz:'lab' }
    ]},
    { id:'flash', title:'Retrieval Practice', sections:[
      { key:'flashcards', label:'Flashcards' }
    ]},
    { id:'final', title:'Mastery Challenge', unlockAfter:'*', sections:[
      { key:'final', label:'25-question mastery exam', quiz:'final' }
    ]}
  ],

  areaSection: {
    'Electron flow and ETC complexes' : 'm1s2',
    'Proton motive force and coupling': 'm2s2',
    'ATP synthase mechanism'          : 'm3s2',
    'Shuttles and ATP yield'          : 'm4s1',
    'Inhibitors and uncouplers'       : 'm5s1',
    'Integrated OXPHOS reasoning'     : 'lab1'
  }
};
