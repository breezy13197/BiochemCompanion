/* ============================================================
   GLYCOGEN METABOLISM — MANIFEST
   The structure map for this companion: which modules exist,
   which sections sit inside them, and what each section needs
   before it counts as complete.

   This is the ONLY place that structure is written down.
   - glycogen.html derives MODULES, FLOW, SECTION_REQ,
     QUIZ_KEY_FOR_SECTION and AREA_SECTION from it at load time.
   - hub.html loads this same file for its dashboard.
   Neither copy can drift, because there is only one copy.

   It lives in its own file rather than inside banks/glycogen.js
   because BankBridge rewrites bank files from five known fields
   and would silently delete anything else it found there.

   WARNING: this file is load-bearing for the student-facing
   page, not just for the hub. A syntax error here takes
   glycogen.html down with it. Run `node --check` on it after
   every edit, then open the page and confirm it still renders.

   Section fields:
     checks   — checkpoint IDs from CHECKPOINTS that gate the section
     activity — name of the interactive; must match the key the page
                writes to state.activities.<name>
     quiz     — the POOL `m` value this quiz section draws from
   A section with none of the three is ungraded and never blocks
   progress (landing pages, the pathway map, the flashcard deck).
   ============================================================ */

var MANIFEST = {
  topic      : 'glycogen',
  title      : 'Glycogen Metabolism',
  file       : 'glycogen.html',
  accent     : '#C0562A',
  accentSoft : '#FCEEE5',

  modules: [

    { id:'m1', title:'Module 1 · Why glycogen? Structure and tissue roles', sections:[
      { key:'m1home', label:'Module overview' },
      { key:'m1s1',   label:'The osmotic problem',        checks:['c1','c1b'],        activity:'osmo'   },
      { key:'m1s2',   label:'Bonds, ends, and branching', checks:['c2','c2b','c2c'],  activity:'build'  },
      { key:'m1s3',   label:'Liver or muscle?',           checks:['c3','c3b'],        activity:'tissue' },
      { key:'m1quiz', label:'Module 1 quiz',              quiz:'m1' }
    ]},

    { id:'m2', title:'Module 2 · Glycogenolysis: take it apart', sections:[
      { key:'m2home', label:'Module overview' },
      { key:'m2s1',   label:'Glycogen phosphorylase',     checks:['c4','c4b','c4c'],  activity:'phos'     },
      { key:'m2s2',   label:'The debranching enzyme',     checks:['c5','c5b'],        activity:'debranch' },
      { key:'m2s3',   label:'The metabolic fork',         checks:['c6','c6b','c6c'],  activity:'fork'     },
      { key:'m2quiz', label:'Module 2 quiz',              quiz:'m2' }
    ]},

    { id:'m3', title:'Module 3 · Glycogenesis: build it up', sections:[
      { key:'m3home', label:'Module overview' },
      { key:'m3s1',   label:'Activating glucose',         checks:['c7','c7b'],        activity:'udp'    },
      { key:'m3s2',   label:'Who starts the molecule?',   checks:['c8','c8b'],        activity:'primer' },
      { key:'m3s3',   label:'Extending and branching',    checks:['c9','c9b','c9c'],  activity:'synth'  },
      { key:'m3quiz', label:'Module 3 quiz',              quiz:'m3' }
    ]},

    { id:'m4', title:'Module 4 · The glycogen control room', sections:[
      { key:'m4home', label:'Module overview' },
      { key:'m4s1',   label:'The cAMP cascade',           checks:['c10','c10b','c10c'], activity:'cascade'   },
      { key:'m4s2',   label:'Phosphorylation detective',  checks:['c11','c11b'],        activity:'detective' },
      { key:'m4s3',   label:'Isoforms and allostery',     checks:['c12','c12b','c12c'], activity:'iso'       },
      { key:'m4s4',   label:'Run the control room',       checks:['c13','c13b'],        activity:'control'   },
      { key:'m4quiz', label:'Module 4 quiz',              quiz:'m4' }
    ]},

    { id:'m5', title:'Module 5 · When the pathway breaks', sections:[
      { key:'m5home', label:'Module overview' },
      { key:'m5s1',   label:'Reasoning from the patient', checks:['c14','c14b'],  activity:'cases'  },
      { key:'m5s2',   label:'The disease matrix',         checks:['c15','c15b'],  activity:'matrix' },
      { key:'m5quiz', label:'Module 5 quiz',              quiz:'m5' }
    ]},

    /* Ungraded: no checks, no activity, no quiz. The map unlocks
       itself as the modules above are completed, but it never
       gates anything and never counts toward the progress ring. */
    { id:'map', title:'Pathway Map', sections:[
      { key:'pathmap', label:'Your glycogen map' }
    ]},

    { id:'flash', title:'Retrieval Practice', sections:[
      { key:'flashcards', label:'Flashcards' }
    ]},

    /* unlockAfter:'*' means every other module that has gradable
       content — m1 through m5. The map and flashcard modules are
       excluded automatically because they have none. */
    { id:'final', title:'Final Mastery Exam', unlockAfter:'*', sections:[
      { key:'final', label:'25-question mastery exam', quiz:'final' }
    ]}
  ],

  /* Where a missed concept area sends a student back to. Every key
     here must match an `area` string used in banks/glycogen.js
     exactly, spelling and capitalization included. */
  areaSection: {
    'Why glycogen'              : 'm1s1',
    'Glycogen structure'        : 'm1s2',
    'Liver vs muscle'           : 'm1s3',
    'Glycogen phosphorylase'    : 'm2s1',
    'Debranching enzyme'        : 'm2s2',
    'G6P fates'                 : 'm2s3',
    'UDP-glucose'               : 'm3s1',
    'Glycogenin'                : 'm3s2',
    'Synthase and branching'    : 'm3s3',
    'Hormonal cascade'          : 'm4s1',
    'Reciprocal regulation'     : 'm4s2',
    'Allosteric control'        : 'm4s3',
    'Integrated regulation'     : 'm4s4',
    'Clinical reasoning'        : 'm5s1',
    'Glycogen storage diseases' : 'm5s2'
  }
};
