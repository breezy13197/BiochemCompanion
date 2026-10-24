/* ============================================================
   banks/hemoglobin.manifest.js
   Structure map for the hub. Pure data — no DOM, no engine.

   This file is a copy of the MODULES / SECTION_REQ /
   QUIZ_KEY_FOR_SECTION / AREA_SECTION globals that live in the
   content script inside hemoglobin.html. The hub needs them to work
   out which checkpoints belong to which module; the bank file
   alone cannot tell it that.

   IF YOU CHANGE THE MODULE OR SECTION LAYOUT IN HEMOGLOBIN.HTML
   UPDATE THIS FILE IN THE SAME SITTING. Nothing checks it for
   you; the hub just reports the old shape until you do.

   It is deliberately NOT part of banks/hemoglobin.js: BankBridge
   rewrites bank files from scratch and would delete anything it
   does not have a field for.
   ============================================================ */
var MANIFEST = {
  topic  : 'hemoglobin',
  title  : 'Hemoglobin: Structure, Oxygen Binding & Clinical Relevance',
  file   : 'hemoglobin.html',          /* link the hub sends students to */
  accent : '#8E1538',   /* this companion’s colour, for the dashboard */
  accentSoft : '#FBE4EA',
  /* One plain sentence under the title on this companion's home page. */
  tagline    : "How hemoglobin carries oxygen, how its four subunits cooperate, and what that means for patients.",

  /* Every module, in study order. `quiz` names the POOL `m` value
     for that module’s quiz; `checks` are the checkpoint ids that
     gate a section; `activity` is a key in state.activities. */
  modules: [
    { id:'m1', title:'Module 1 · Globin Foundations', summary:"Hemoglobin and myoglobin share one iron-containing group but are built very differently.",
      sections:[
      { key:'m1home', label:'Module 1 overview' },
      { key:'m1s1', label:'Hemoglobin and myoglobin', checks:['c1','c1b'] },
      { key:'m1s2', label:'Heme, prosthetic groups and iron', checks:['c2','c2b','c2c'] },
      { key:'m1s3', label:'Compare the two proteins', checks:['c3'], activity:'hbmb' },
      { key:'m1quiz', label:'Module 1 quiz', quiz:'m1' }
    ]},
    { id:'m2', title:'Module 2 · Oxygen Binding', summary:"Zoom in on a single iron atom and see the tiny movement that starts the signal.",
      sections:[
      { key:'m2home', label:'Module 2 overview' },
      { key:'m2s1', label:'Six coordination sites', checks:['c4','c4b'], activity:'coordination' },
      { key:'m2s2', label:'Redox, distal histidine, CO', checks:['c5','c5b','c5c'] },
      { key:'m2s3', label:'Binding, step by step', checks:['c6'], activity:'sequence' },
      { key:'m2quiz', label:'Module 2 quiz', quiz:'m2' }
    ]},
    { id:'m3', title:'Module 3 · Cooperativity', summary:"Why four subunits that talk to each other deliver far more oxygen than four working alone.",
      sections:[
      { key:'m3home', label:'Module 3 overview' },
      { key:'m3s1', label:'Two dimers, four subunits', checks:['c7','c7b'] },
      { key:'m3s2', label:'The T and R states', checks:['c8','c8b'] },
      { key:'m3s3', label:'Concerted vs sequential', checks:['c9','c9b'], activity:'models' },
      { key:'m3quiz', label:'Module 3 quiz', quiz:'m3' }
    ]},
    { id:'m4', title:'Module 4 · Controlling Delivery', summary:"The molecules (H⁺, CO₂, 2,3-BPG) that push hemoglobin to release oxygen where it is needed.",
      sections:[
      { key:'m4home', label:'Module 4 overview' },
      { key:'m4s1', label:'2,3-BPG', checks:['c10','c10b'] },
      { key:'m4s2', label:'The Bohr effect', checks:['c11','c11b'] },
      { key:'m4s3', label:'Two routes for CO₂', checks:['c12','c12b'] },
      { key:'m4s4', label:'Curve simulator', checks:['c13','c13b'], activity:'curveSim' },
      { key:'m4quiz', label:'Module 4 quiz', quiz:'m4' }
    ]},
    { id:'m5', title:'Module 5 · Clinical Pharmacy', summary:"Three short clinical cases that link a change in structure to a patient outcome.",
      sections:[
      { key:'m5home', label:'Module 5 overview' },
      { key:'m5s1', label:'Case: fetal hemoglobin', checks:['c14','c14b'] },
      { key:'m5s2', label:'Case: methemoglobinemia', checks:['c15','c15b'], activity:'metheme' },
      { key:'m5s3', label:'Case: sickle cell anemia', checks:['c16','c16b'], activity:'sickle' },
      { key:'m5quiz', label:'Module 5 quiz', quiz:'m5' }
    ]},
    { id:'lab', title:'Mastery Lab', unlockAfter:["m1","m2","m3","m4","m5"], summary:"An integration area that ties the whole companion together, one molecule at a time.",
      sections:[
      { key:'labhome', label:'Lab overview' },
      { key:'lab1', label:'Integration challenges', checks:['c17','c17b','c17c','c18','c18b'], activity:'lab' },
      { key:'lab2', label:'T ⇌ R equilibrium simulator', checks:['c19','c19b'], activity:'trmeter' }
    ]},
    { id:'flash', title:'Retrieval Practice', summary:"Flashcards for every key term and idea in this companion, for quick retrieval practice.",
      sections:[
      { key:'flashcards', label:'Flashcard deck' }
    ]},
    { id:'final', title:'Final Mastery Exam', unlockAfter:"*", summary:"A mixed exam drawn from every module. It unlocks once all of the modules are complete.",
      sections:[
      { key:'final', label:'25-question Mastery Exam', quiz:'final' }
    ]}
  ],

  /* Content area -> the section key a student should revisit. */
  areaSection: {
    'Hemoglobin vs myoglobin' : 'm1s1',
    'Heme & iron chemistry' : 'm1s2',
    'Oxygen coordination' : 'm2s1',
    'Distal histidine & CO' : 'm2s2',
    'Quaternary structure & cooperativity' : 'm3s1',
    'T and R states' : 'm3s2',
    'Models of cooperativity' : 'm3s3',
    '2,3-BPG' : 'm4s1',
    'Bohr effect' : 'm4s2',
    'CO₂ transport' : 'm4s3',
    'Carbon monoxide (modeled)' : 'm4s4',
    'T⇌R equilibrium (integration)' : 'lab2',
    'Fetal hemoglobin' : 'm5s1',
    'Methemoglobinemia' : 'm5s2',
    'Sickle cell disease' : 'm5s3'
  }
};
