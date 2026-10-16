/* ============================================================
   banks/enzymes.manifest.js
   Structure map for the hub. Pure data — no DOM, no engine.

   This file is a copy of the MODULES / SECTION_REQ /
   QUIZ_KEY_FOR_SECTION / AREA_SECTION globals that live in the
   content script inside enzymes.html. The hub needs them to work
   out which checkpoints belong to which module; the bank file
   alone cannot tell it that.

   IF YOU CHANGE THE MODULE OR SECTION LAYOUT IN ENZYMES.HTML
   UPDATE THIS FILE IN THE SAME SITTING. Nothing checks it for
   you; the hub just reports the old shape until you do.

   It is deliberately NOT part of banks/enzymes.js: BankBridge
   rewrites bank files from scratch and would delete anything it
   does not have a field for.
   ============================================================ */
var MANIFEST = {
  topic  : 'enzymes',
  title  : 'Biochemistry of Enzymes',
  file   : 'enzymes.html',          /* link the hub sends students to */
  accent : '#2FA97A',   /* this companion’s colour, for the dashboard */
  accentSoft : '#E7F6EF',

  /* Every module, in study order. `quiz` names the POOL `m` value
     for that module’s quiz; `checks` are the checkpoint ids that
     gate a section; `activity` is a key in state.activities. */
  modules: [
    { id:'m1', title:'Module 1 · Fundamentals & catalysis', sections:[
      { key:'m1home', label:'Module overview' },
      { key:'m1s1', label:'What enzymes do', checks:['c1','c1b','c1c'] },
      { key:'m1s2', label:'Energetics of catalysis', checks:['c2','c2b','c2c'] },
      { key:'m1s3', label:'Specificity & active site', checks:['c3','c3b','c3c'] },
      { key:'m1s4', label:'Enzyme terminology', checks:['c4','c4b'], activity:'sort' },
      { key:'m1quiz', label:'Module 1 quiz', quiz:'m1' }
    ]},
    { id:'m2', title:'Module 2 · Kinetics & rate factors', sections:[
      { key:'m2home', label:'Module overview' },
      { key:'m2s1', label:'Michaelis-Menten curve', checks:['c5','c5b','c5c'] },
      { key:'m2s2', label:'kcat & efficiency', checks:['c6','c6b'], activity:'bench' },
      { key:'m2s3', label:'Enzyme, temperature, pH', checks:['c7','c7b','c7c'] },
      { key:'m2s4', label:'Putting it together', checks:['c8','c9','c10'] },
      { key:'m2quiz', label:'Module 2 quiz', quiz:'m2' }
    ]},
    { id:'m3', title:'Module 3 · The seven classes', sections:[
      { key:'m3home', label:'Module overview' },
      { key:'m3s1', label:'One question tells you the class', checks:['c11','c11b','c11c'], activity:'tree' },
      { key:'m3s2', label:'The seven classes', checks:['c16','c17'], activity:'inspect' },
      { key:'m3s3', label:'Classification challenge', checks:['c12','c12b'], activity:'cls' },
      { key:'m3quiz', label:'Module 3 quiz', quiz:'m3' }
    ]},
    { id:'m4', title:'Module 4 · Inhibition & regulation', sections:[
      { key:'m4home', label:'Module overview' },
      { key:'m4s1', label:'Competitive & uncompetitive', checks:['c13','c13b'], activity:'tbl' },
      { key:'m4s2', label:'Identify the inhibitor', checks:['c17b','c17c'], activity:'inh' },
      { key:'m4s3', label:'Irreversible & mechanism-based', checks:['c14','c14b'], activity:'pcn' },
      { key:'m4s4', label:'Allosteric control & isozymes', checks:['c15','c15b'] },
      { key:'m4quiz', label:'Module 4 quiz', quiz:'m4' }
    ]},
    { id:'flash', title:'Retrieval Practice', sections:[
      { key:'flashcards', label:'Flashcards · all terms' }
    ]},
    { id:'final', title:'Final Mastery Exam', unlockAfter:"*", sections:[
      { key:'final', label:'25-question mastery exam', quiz:'final' }
    ]}
  ],

  /* Content area -> the section key a student should revisit. */
  areaSection: {
    'Enzyme basics' : 'm1s1',
    'Energetics & catalysis' : 'm1s2',
    'Specificity' : 'm1s3',
    'Cofactors & terminology' : 'm1s4',
    'Michaelis-Menten & Km' : 'm2s1',
    'Catalytic efficiency' : 'm2s2',
    'Enzyme, temperature & pH' : 'm2s3',
    'Enzyme classification' : 'm3s2',
    'Hydrolase vs lyase' : 'm3s2',
    'Competitive vs uncompetitive' : 'm4s1',
    'Irreversible & mechanism-based' : 'm4s3',
    'Allosteric & isozymes' : 'm4s4'
  }
};
