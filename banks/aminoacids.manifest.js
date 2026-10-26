/* ============================================================
   MANIFEST — Amino Acids & Protein Structure
   Per companion-architecture.md §14.2. This is the ONLY place the
   module/section structure is written. aminoacids.html derives
   MODULES, SECTION_REQ, QUIZ_KEY_FOR_SECTION, and AREA_SECTION
   from this at load time; hub.html reads this same file for its
   dashboard. Edit here, not in the page.

   topic/title should match TOPIC_ID/TOPIC_TITLE in banks/aminoacids.js —
   confirm those two lines against the actual bank file, which was not
   available when this manifest was written.
   ============================================================ */
var MANIFEST = {
  topic  : 'aminoacids',
  title  : 'Amino Acids &amp; Protein Structure',
  file   : 'aminoacids.html',
  accent : '#0D8C80',
  accentSoft : '#DDF5F1',
  /* One plain sentence under the title on this companion's home page. */
  tagline    : "The twenty amino acids, how their charge follows pH, and how they build proteins.",

  modules: [
    { id:'lab', title:'Amino Acid Reference Lab', summary:"A reference lab for the twenty amino acids: names, abbreviations, classes and side chains.",
      sections:[
      { key:'labhome', label:'About this lab' },
      { key:'lab', label:'Explorer &; practice', checks:['cL1','cL2','cL3'], activity:'aapractice' }
    ]},

    { id:'m1', title:'Module 1 · Anatomy & classification', summary:"Given a side chain, predict how the amino acid will behave.",
      sections:[
      { key:'m1home', label:'Module overview' },
      { key:'m1s1', label:'The alpha-amino acid framework', checks:['c1','c1b','c1c'], activity:'buildaa' },
      { key:'m1s2', label:'Grouping the twenty', checks:['c2','c2b'] },
      { key:'m1s3', label:'The polar amino acids', checks:['c3','c3b'], activity:'classify' },
      { key:'m1quiz', label:'Module 1 quiz', quiz:'m1' }
    ]},

    { id:'m2', title:'Module 2 · Ionization & pKa', summary:"Charge is a function of pH. Learn to predict zwitterions and read pKa values.",
      sections:[
      { key:'m2home', label:'Module overview' },
      { key:'m2s1', label:'Backbone &; the zwitterion', checks:['c4','c4b'], activity:'chargebb' },
      { key:'m2s2', label:'Acidic side chains', checks:['c5','c5b'], activity:'chargesc' },
      { key:'m2s3', label:'Basic side chains', checks:['c6','c6b','c6c'], activity:'ph' },
      { key:'m2quiz', label:'Module 2 quiz', quiz:'m2' }
    ]},

    { id:'m3', title:'Module 3 · From amino acids to peptides', summary:"How one bond joins amino acids into peptides, and how a sequence is read.",
      sections:[
      { key:'m3home', label:'Module overview' },
      { key:'m3s1', label:'Key terms', checks:['c7','c7b'] },
      { key:'m3s2', label:'Why the peptide bond is rigid', checks:['c8','c8b','c8c'] },
      { key:'m3s3', label:'Termini and direction', checks:['c9','c9b'], activity:'termini' },
      { key:'m3quiz', label:'Module 3 quiz', quiz:'m3' }
    ]},

    { id:'m4', title:'Module 4 · Protein structure', summary:"The four levels of protein structure and what holds each one together.",
      sections:[
      { key:'m4home', label:'Module overview' },
      { key:'m4s1', label:'The four levels', checks:['c10','c10b'], activity:'levels' },
      { key:'m4s2', label:'The alpha helix', checks:['c11','c11b','c11c'], activity:'wheel' },
      { key:'m4s3', label:'The beta sheet', checks:['c12','c12b'] },
      { key:'m4s4', label:'Tertiary structure', checks:['c13','c13b'], activity:'forces' },
      { key:'m4s5', label:'Quaternary structure', checks:['c14','c14b'] },
      { key:'m4quiz', label:'Module 4 quiz', quiz:'m4' }
    ]},

    { id:'m5', title:'Module 5 · Post-translational modifications', summary:"What happens to a protein after it leaves the ribosome, and why so many drugs target those steps.",
      sections:[
      { key:'m5home', label:'Module overview' },
      { key:'m5s1', label:'From gene to mature protein', checks:['c15','c15b'], activity:'pathorder' },
      { key:'m5s2', label:'Phosphorylation', checks:['c16','c16b'] },
      { key:'m5s3', label:'Glycosylation and others', checks:['c17','c17b'], activity:'ptm' },
      { key:'m5quiz', label:'Module 5 quiz', quiz:'m5' }
    ]},

    { id:'flash', title:'Retrieval Practice', summary:"Flashcards for every key term and idea in this companion, for quick retrieval practice.",
      sections:[
      { key:'flashcards', label:'Flashcards · all terms' }
    ]},

    { id:'final', title:'Final Mastery Exam', unlockAfter:'*', summary:"A mixed exam drawn from every module. It unlocks once all of the modules are complete.",
      sections:[
      { key:'final', label:'25-Question Mastery Exam', quiz:'final' }
    ]}
  ],

  areaSection: {
    'Amino acid recognition' : 'm1s2',
    'Ionization & pKa' : 'm2s2',
    'Peptides & peptide bonds' : 'm3s2',
    'Protein structure' : 'm4s2',
    'Post-translational modifications' : 'm5s2',
    'Pharmacy application' : 'm4s5'
  }
};
