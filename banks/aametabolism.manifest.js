/* ============================================================
   MANIFEST — Amino Acid Metabolism & Biosynthesis
   The ONLY place this companion's module/section structure is
   written. aametabolism.html derives MODULES, FLOW, SECTION_REQ,
   QUIZ_KEY_FOR_SECTION and AREA_SECTION from this file at load,
   and hub.html reads it for the dashboard.
   Every `checks` id must exist in CHECKPOINTS (banks/aametabolism.js),
   every `quiz` value must match a POOL `m` value, and every
   areaSection key must match a POOL `area` string exactly.
   ============================================================ */
var MANIFEST = {
  topic      : 'aametabolism',
  title      : 'Amino Acid Metabolism & Biosynthesis',
  file       : 'aametabolism.html',
  accent     : '#5A7414',
  accentSoft : '#F1F5E1',
  /* One plain sentence under the title on this companion's home page. */
  tagline    : "What happens to the nitrogen and carbon of amino acids, and how the body builds new ones.",

  modules: [
    { id:'m1', title:'Module 1 · Amino Acid Economy', summary:"When amino acids are used, how proteins are broken down, and which cofactors are involved.",
      sections:[
      { key:'m1home', label:'Module overview' },
      { key:'m1s1', label:'Essential or synthesizable?', checks:['c1','c1b','c1c'], activity:'essential' },
      { key:'m1s2', label:'When amino acids are degraded', checks:['c2','c2b'], activity:'circumstance' },
      { key:'m1s3', label:'Proteolysis & zymogens', checks:['c3','c3b','c3c'], activity:'zymogen' },
      { key:'m1s4', label:'Cofactor detective', checks:['c4','c4b','c4c'], activity:'cofactor' },
      { key:'m1quiz', label:'Module 1 quiz', quiz:'m1' }
    ]},
    { id:'m2', title:'Module 2 · Follow the Nitrogen', summary:"What happens to the amino group after an amino acid is broken down.",
      sections:[
      { key:'m2home', label:'Module overview' },
      { key:'m2s1', label:'Capture the nitrogen', checks:['c5','c5b','c5c'], activity:'transam' },
      { key:'m2s2', label:'Transport the nitrogen', checks:['c6','c6b','c6c'], activity:'journey' },
      { key:'m2s3', label:'Dispose of the nitrogen', checks:['c7','c7b','c7c'], activity:'urea' },
      { key:'m2s4', label:'Regulate & troubleshoot', checks:['c8','c8b','c8c'], activity:'block' },
      { key:'m2quiz', label:'Module 2 quiz', quiz:'m2' }
    ]},
    { id:'m3', title:'Module 3 · Follow the Carbon', summary:"What the carbon skeleton becomes once the nitrogen is gone.",
      sections:[
      { key:'m3home', label:'Module overview' },
      { key:'m3s1', label:'The seven destinations', checks:['c9','c9b'], activity:'subway' },
      { key:'m3s2', label:'Glucose or ketone bodies?', checks:['c10','c10b','c10c'], activity:'fate' },
      { key:'m3s3', label:'Classify the amino acids', checks:['c11','c11b'], activity:'gk' },
      { key:'m3quiz', label:'Module 3 quiz', quiz:'m3' }
    ]},
    { id:'m4', title:'Module 4 · Build an Amino Acid', summary:"How the body builds the nonessential amino acids.",
      sections:[
      { key:'m4home', label:'Module overview' },
      { key:'m4s1', label:'Precursor families', checks:['c12','c12b','c12c'], activity:'families' },
      { key:'m4s2', label:'Reaction lab', checks:['c13','c13b','c13c'], activity:'reactionlab' },
      { key:'m4s3', label:'Methionine, SAM & cysteine', checks:['c14','c14b','c14c'], activity:'methyl' },
      { key:'m4quiz', label:'Module 4 quiz', quiz:'m4' }
    ]},
    { id:'m5', title:'Module 5 · Build Something Else', summary:"How amino acids become neurotransmitters, hormones and protective molecules.",
      sections:[
      { key:'m5home', label:'Module overview' },
      { key:'m5s1', label:'Catecholamine builder', checks:['c15','c15b','c15c'], activity:'catechol' },
      { key:'m5s2', label:'Serotonin & melatonin', checks:['c16','c16b'], activity:'trp' },
      { key:'m5s3', label:'Histamine & glutathione', checks:['c17','c17b','c17c'], activity:'gsh' },
      { key:'m5s4', label:'Break the pathway', checks:['c18','c18b'], activity:'breaks' },
      { key:'m5quiz', label:'Module 5 quiz', quiz:'m5' }
    ]},
    { id:'flash', title:'Retrieval Practice', summary:"Flashcards for every key term and idea in this companion, for quick retrieval practice.",
      sections:[
      { key:'flashcards', label:'Flashcards' }
    ]},
    { id:'final', title:'Mastery Challenge', unlockAfter:'*', summary:"A mixed exam drawn from every module. It unlocks once all of the modules are complete.",
      sections:[
      { key:'final', label:'25-question mastery exam', quiz:'final' }
    ]}
  ],

  areaSection: {
    'Essential amino acids'               : 'm1s1',
    'Catabolic circumstances'             : 'm1s2',
    'Proteolysis & zymogens'              : 'm1s3',
    'Cofactors'                           : 'm1s4',
    'Transamination'                      : 'm2s1',
    'Nitrogen transport'                  : 'm2s2',
    'Urea cycle steps'                    : 'm2s3',
    'Urea cycle regulation & disorders'   : 'm2s4',
    'Metabolic destinations'              : 'm3s1',
    'Glucose & ketone consequences'       : 'm3s2',
    'Glucogenic/ketogenic classification' : 'm3s3',
    'Precursor families'                  : 'm4s1',
    'Biosynthetic enzymes & classes'      : 'm4s2',
    'Methionine, SAM & cysteine'          : 'm4s3',
    'Catecholamines'                      : 'm5s1',
    'Serotonin & melatonin'               : 'm5s2',
    'Histamine & glutathione'             : 'm5s3',
    'Pathway disruptions'                 : 'm5s4'
  }
};
