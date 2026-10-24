/* ============================================================
   MANIFEST — Nucleotides, Nucleosides & Nucleic Acids
   The single source of truth for this companion's module and
   section structure. Loaded by BOTH nucleotides.html (which
   derives MODULES / SECTION_REQ / QUIZ_KEY_FOR_SECTION /
   AREA_SECTION from it at runtime) and hub.html (which reads it
   to draw the dashboard). See companion-architecture.md §14.

   This file is load-bearing: a syntax error here takes the
   student-facing page down, not just the hub's dashboard card.
   ============================================================ */

var MANIFEST = {
  topic      : 'nucleotides',
  title      : 'Nucleotides, Nucleosides & Nucleic Acids',
  file       : 'nucleotides.html',
  accent     : '#41678A',
  accentSoft : '#EAF0F5',
  /* One plain sentence under the title on this companion's home page. */
  tagline    : "How cells build and recycle the pieces of DNA and RNA, and how drugs break those pathways.",

  modules: [

    { id:'map', title:'The Metabolic Map', summary:"A map of nucleotide metabolism that starts mostly grayed out and fills in as you finish each module.",
      sections:[
      { key:'map', label:'Your nucleotide metabolism map' }
    ]},

    { id:'m1', title:'Module 1 \u00b7 Building blocks & nucleic acid structure', summary:"The vocabulary of nucleotides and nucleic acid structure, until it becomes automatic.",
      sections:[
      { key:'m1home', label:'Module overview' },
      { key:'m1s1', label:'Nucleobases: purines and pyrimidines', checks:['c11a','c11b','c11c'], activity:'baseSort' },
      { key:'m1s2', label:'Nucleoside to nucleotide', checks:['c12a','c12b','c12c'], activity:'builder' },
      { key:'m1s3', label:'The sugar, and why it matters', checks:['c13a','c13b'], activity:'sugarToggle' },
      { key:'m1s4', label:'Backbone and base pairing', checks:['c14a','c14b','c14c'], activity:'strand' },
      { key:'m1quiz', label:'Module 1 quiz', quiz:'m1' }
    ]},

    { id:'m2', title:'Module 2 \u00b7 Build a purine', summary:"Work out where every atom of the purine ring comes from, then meet the reactions that add them.",
      sections:[
      { key:'m2home', label:'Module overview' },
      { key:'m2s1', label:'Where nucleotides come from', checks:['c21a','c21b','c21c'], activity:'sourceMatch' },
      { key:'m2s2', label:'Build the purine ring', checks:['c22a','c22b','c22c'], activity:'ringBuild' },
      { key:'m2s3', label:'PRPP to IMP: the pathway', checks:['c23a','c23b','c23c'], activity:'pathOrder' },
      { key:'m2s4', label:'The IMP branch point', checks:['c24a','c24b'], activity:'branch' },
      { key:'m2quiz', label:'Module 2 quiz', quiz:'m2' }
    ]},

    { id:'m3', title:'Module 3 \u00b7 Same goal, different strategy', summary:"De novo versus salvage: two routes to the same nucleotide, compared side by side.",
      sections:[
      { key:'m3home', label:'Module overview' },
      { key:'m3s1', label:'Two construction strategies', checks:['c31a','c31b'], activity:'strategySort' },
      { key:'m3s2', label:'CPS II, CPS I, and CAD', checks:['c32a','c32b','c32c'], activity:'cad' },
      { key:'m3s3', label:'Orotate to UMP', checks:['c33a','c33b'], activity:'orotateMatch' },
      { key:'m3s4', label:'Climbing the phosphate ladder', checks:['c34a','c34b'], activity:'kinase' },
      { key:'m3quiz', label:'Module 3 quiz', quiz:'m3' }
    ]},

    { id:'m4', title:'Module 4 \u00b7 Making DNA building blocks', summary:"How cells make the deoxyribonucleotides and the thymine that DNA needs.",
      sections:[
      { key:'m4home', label:'Module overview' },
      { key:'m4s1', label:'Ribonucleotide reductase and the electron relay', checks:['c41a','c41b','c41c'], activity:'electron' },
      { key:'m4s2', label:'The thymidine problem', checks:['c42a','c42b'], activity:'folate' },
      { key:'m4s3', label:'Why the route runs down and back up', checks:['c43a','c43b'], activity:'whyT' },
      { key:'m4quiz', label:'Module 4 quiz', quiz:'m4' }
    ]},

    { id:'m5', title:'Module 5 \u00b7 Break the pathway', summary:"Predict what happens when a pathway is blocked by a drug or a disease.",
      sections:[
      { key:'m5home', label:'Module overview' },
      { key:'m5s1', label:'Perturbation lab: predict, then meet the drug', checks:['c51a','c51b','c51c'], activity:'inhibitor' },
      { key:'m5s2', label:'Taking nucleotides apart', checks:['c52a','c52b'], activity:'catab' },
      { key:'m5s3', label:'Clinical case: uric acid and gout', checks:['c53a','c53b','c53c'], activity:'gout' },
      { key:'m5quiz', label:'Module 5 quiz', quiz:'m5' }
    ]},

    { id:'flash', title:'Retrieval Practice', summary:"Flashcards for every key term and idea in this companion, for quick retrieval practice.",
      sections:[
      { key:'flashcards', label:'Flashcards' }
    ]},

    { id:'final', title:'Final Mastery Exam', unlockAfter:'*', summary:"A mixed exam drawn from every module. It unlocks once all of the modules are complete.",
      sections:[
      { key:'final', label:'25-question exam', quiz:'final' }
    ]}

  ],

  areaSection: {
    'Nucleobase structure'            : 'm1s1',
    'Nucleoside and nucleotide naming': 'm1s2',
    'Sugars and nucleic acid chemistry':'m1s3',
    'Backbone and base pairing'       : 'm1s4',
    'Nucleotide sources and PRPP'     : 'm2s1',
    'Purine ring assembly'            : 'm2s2',
    'Purine pathway and energetics'   : 'm2s3',
    'The IMP branch point'            : 'm2s4',
    'Pyrimidine strategy'             : 'm3s1',
    'CPS II and CAD'                  : 'm3s2',
    'Orotate to UMP'                  : 'm3s3',
    'Nucleotide phosphorylation'      : 'm3s4',
    'Ribonucleotide reductase'        : 'm4s1',
    'Thymidylate synthesis'           : 'm4s2',
    'Deoxynucleotide logic'           : 'm4s3',
    'Antimetabolite drugs'            : 'm5s1',
    'Nucleotide catabolism'           : 'm5s2',
    'Uric acid and gout'              : 'm5s3'
  }
};
