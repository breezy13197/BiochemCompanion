/* ============================================================
   MANIFEST — Citric Acid Cycle
   A plain-data copy of this companion's module and section
   structure, so the hub can compute per-module progress without
   loading the whole companion page.

   It exists as a separate file rather than as extra fields on
   banks/cac.js because BankBridge rewrites a bank file completely
   from five known fields every time it saves. Anything else placed
   in the bank would be silently deleted the next time someone
   edited a question through BankBridge.

   MAINTENANCE RULE: this is a COPY and copies drift. If you rename
   a module, reorder sections, add a checkpoint to SECTION_REQ, or
   change AREA_SECTION inside cac.html, update this file in the same
   sitting. Nothing checks the two against each other, and the hub
   will keep reporting the old shape with no error.
   ============================================================ */

var MANIFEST = {
  topic      : 'cac',
  title      : 'The Citric Acid Cycle',
  file       : 'cac.html',
  accent     : '#7A2E8E',
  accentSoft : '#F6EAFA',
  /* One plain sentence under the title on this companion's home page. */
  tagline    : "How carbon enters the citric acid cycle, how the cycle is controlled, and why it needs oxygen.",

  modules: [
    { id:'m1', title:'Module 1 \u00b7 Gateway to the mitochondria', summary:"Follow pyruvate into the mitochondria and take apart the enzyme complex that turns it into acetyl-CoA.",
      sections:[
      { key:'m1home', label:'Module overview' },
      { key:'m1s1',   label:'Where does pyruvate go?',  checks:['c1','c1b','c1c'],       activity:'compartments' },
      { key:'m1s2',   label:'Build the PDH complex',    checks:['c2','c2b','c2c','c2d'], activity:'pdhrepair' },
      { key:'m1s3',   label:'Carbons and electrons',    checks:['c3','c3b','c3c'],       activity:'tracker' },
      { key:'m1s4',   label:'The gateway decision',     checks:['c4','c4b'],             activity:'gateway' },
      { key:'m1quiz', label:'Module 1 quiz', quiz:'m1' }
    ]},

    { id:'m2', title:'Module 2 \u00b7 Running the engine', summary:"The eight reactions of the cycle told as one story, with a running ledger of products.",
      sections:[
      { key:'m2home', label:'Module overview' },
      { key:'m2s1',   label:'Build the cycle',                    checks:['c5','c5b','c5c'],  activity:'buildcycle' },
      { key:'m2s2',   label:'Reaction detective',                 checks:['c6','c6b','c6c'],  activity:'detective' },
      { key:'m2s3',   label:'The reaction passport',              checks:['c7','c7b','c7c'],  activity:'passport' },
      { key:'m2s4',   label:'Energy harvest meter',               checks:['c8','c8b','c8c'],  activity:'harvest' },
      { key:'m2s5',   label:'The malate dehydrogenase paradox',   checks:['c9','c9b'],        activity:'mdh' },
      { key:'m2quiz', label:'Module 2 quiz', quiz:'m2' }
    ]},

    { id:'m3', title:'Module 3 \u00b7 Metabolic traffic control', summary:"Four enzymes act as throttles. Set a cell's state, predict the speed, then run it.",
      sections:[
      { key:'m3home', label:'Module overview' },
      { key:'m3s1',   label:'The four control points',            checks:['c10','c10b','c10c'], activity:'regmap' },
      { key:'m3s2',   label:'Energy-state simulator',             checks:['c11','c11b'],        activity:'simulator' },
      { key:'m3s3',   label:'The PDH phosphorylation switch',     checks:['c12','c12b','c12c'], activity:'pdhswitch' },
      { key:'m3s4',   label:'Physiologic challenge',              checks:['c13','c13b'],        activity:'scenarios' },
      { key:'m3quiz', label:'Module 3 quiz', quiz:'m3' }
    ]},

    { id:'m4', title:'Module 4 \u00b7 The amphibolic hub', summary:"The cycle is not closed: carbon leaves for building and is topped back up.",
      sections:[
      { key:'m4home', label:'Module overview' },
      { key:'m4s1',   label:'Drain the cycle',          checks:['c14','c14b','c14c'], activity:'cart' },
      { key:'m4s2',   label:'Rescue the cycle',         checks:['c15','c15b','c15c'], activity:'rescue' },
      { key:'m4s3',   label:'Alternative entry points', checks:['c16','c16b','c16c'], activity:'feeders' },
      { key:'m4quiz', label:'Module 4 quiz', quiz:'m4' }
    ]},

    { id:'m5', title:'Module 5 \u00b7 Oxygen and redox balance', summary:"Why a cycle that does not use oxygen stops when oxygen disappears.",
      sections:[
      { key:'m5home', label:'Module overview' },
      { key:'m5s1',   label:'Pull the oxygen plug',     checks:['c17','c17b','c17c'], activity:'oxygen' },
      { key:'m5s2',   label:'Follow pyruvate',          checks:['c18','c18b'],        activity:'doors' },
      { key:'m5s3',   label:'ATP efficiency challenge', checks:['c19','c19b'],        activity:'tokens' },
      { key:'m5quiz', label:'Module 5 quiz', quiz:'m5' }
    ]},

    { id:'mi', title:'Integration Challenge', unlockAfter:['m1','m2','m3','m4','m5'], summary:"One unfamiliar metabolic state and six questions that each need a different module.",
      sections:[
      { key:'mi1', label:'Metabolic integration challenge',
        checks:['c20','c20b','c20c','c20d','c20e','c20f'], activity:'integration' }
    ]},

    { id:'flash', title:'Retrieval Practice', summary:"Flashcards for every key term and idea in this companion, for quick retrieval practice.",
      sections:[
      { key:'flashcards', label:'Flashcards' }
    ]},

    { id:'final', title:'Final Mastery Exam', unlockAfter:'*', summary:"A mixed exam drawn from every module. It unlocks once all of the modules are complete.",
      sections:[
      { key:'final', label:'25-question mastery exam', quiz:'final' }
    ]}
  ],

  areaSection: {
    'Pyruvate transport and fate'        : 'm1s1',
    'PDH complex and cofactors'          : 'm1s2',
    'Vitamins and coenzymes'             : 'm1s2',
    'Carbon and electron bookkeeping'    : 'm1s3',
    'Gateway regulation'                 : 'm1s4',
    'Cycle sequence and enzymes'         : 'm2s1',
    'Reaction chemistry'                 : 'm2s2',
    'Energy yield'                       : 'm2s4',
    'Thermodynamic coupling'             : 'm2s5',
    'Regulatory control points'          : 'm3s1',
    'Energy charge and flux'             : 'm3s2',
    'PDH covalent regulation'            : 'm3s3',
    'Physiologic scenarios'              : 'm3s4',
    'Biosynthetic precursors'            : 'm4s1',
    'Anaplerotic reactions'              : 'm4s2',
    'Amino acid and propionyl-CoA entry' : 'm4s3',
    'Oxygen and redox balance'           : 'm5s1',
    'Metabolic fate of pyruvate'         : 'm5s2',
    'Aerobic and anaerobic efficiency'   : 'm5s3'
  }
};
