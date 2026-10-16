/* ============================================================
   MANIFEST: Metabolic Integration & Organ Specialization
   The ONLY place this companion's module/section structure is
   written. integration.html derives MODULES, FLOW, SECTION_REQ,
   QUIZ_KEY_FOR_SECTION and AREA_SECTION from this at load time,
   and hub.html reads it for the dashboard.
   ============================================================ */
var MANIFEST = {
  topic      : "integration",
  title      : "Metabolic Integration & Organ Specialization",
  file       : "integration.html",
  accent     : "#5F7A1A",
  accentSoft : "#EEF3DF",

  modules: [
    { id:"start", title:"Start here", sections:[
      { key:"welcome", label:"Your integration map" }
    ]},

    { id:"m1", title:"Module 1 · Energy economy & fuel storage", sections:[
      { key:"m1home", label:"Module overview" },
      { key:"m1s1", label:"What fuels are available?", checks:["c1a","c1b","c1c"], activity:"kcal" },
      { key:"m1s2", label:"Build the fuel warehouse", checks:["c2a","c2b","c2c"], activity:"warehouse" },
      { key:"m1s3", label:"Fuel storage sort", checks:["c3a","c3b"], activity:"storagesort" },
      { key:"m1s4", label:"The DEE mixer", checks:["c4a","c4b"], activity:"dee" },
      { key:"m1quiz", label:"Module 1 quiz", quiz:"m1" }
    ]},

    { id:"m2", title:"Module 2 · The metabolic state simulator", sections:[
      { key:"m2home", label:"Module overview" },
      { key:"m2s1", label:"After a meal", checks:["c5a","c5b","c5c"], activity:"routing" },
      { key:"m2s2", label:"The overnight fast", checks:["c6a","c6b","c6c"], activity:"tracker" },
      { key:"m2s3", label:"Prolonged starvation", checks:["c7a","c7b","c7c"], activity:"urea" },
      { key:"m2s4", label:"Run the simulator", checks:["c8a"], activity:"simulator" },
      { key:"m2quiz", label:"Module 2 quiz", quiz:"m2" }
    ]},

    { id:"m3", title:"Module 3 · Hormones as a network", sections:[
      { key:"m3home", label:"Module overview" },
      { key:"m3s1", label:"Insulin & glucagon", checks:["c9a","c9b"], activity:"arrowgrid" },
      { key:"m3s2", label:"Hormone control panel", checks:["c10a","c10b","c10c"], activity:"hormonematch" },
      { key:"m3s3", label:"Reverse it: predict the signals", checks:["c11a","c11b"], activity:"scenarios" },
      { key:"m3s4", label:"Incretins & pharmacotherapy", checks:["c12a","c12b","c12c"], activity:"incretin" },
      { key:"m3quiz", label:"Module 3 quiz", quiz:"m3" }
    ]},

    { id:"m4", title:"Module 4 · The metabolic division of labor", sections:[
      { key:"m4home", label:"Module overview" },
      { key:"m4s1", label:"Who burns what?", checks:["c13a","c13b","c13c"], activity:"whocan" },
      { key:"m4s2", label:"The liver: traffic controller", checks:["c14a","c14b","c14c"], activity:"livermatch" },
      { key:"m4s3", label:"Muscle energy timeline", checks:["c15a","c15b","c15c"], activity:"musclesequence" },
      { key:"m4s4", label:"Creatine to creatinine", checks:["c16a","c16b"], activity:"creatine" },
      { key:"m4quiz", label:"Module 4 quiz", quiz:"m4" }
    ]},

    { id:"map", title:"Integration challenge", sections:[
      { key:"rebuild", label:"Rebuild the network", checks:["c17a","c17b"], activity:"rebuild" }
    ]},

    { id:"flash", title:"Retrieval practice", sections:[
      { key:"flashcards", label:"Flashcards" }
    ]},

    { id:"final", title:"Final mastery exam", unlockAfter:"*", sections:[
      { key:"final", label:"25-question mastery exam", quiz:"final" }
    ]}
  ],

  areaSection: {
    "Fuel energy yield"            : "m1s1",
    "Fuel storage efficiency"      : "m1s2",
    "Stored fuel pools"            : "m1s3",
    "Energy expenditure"           : "m1s4",
    "Fed state"                    : "m2s1",
    "Postabsorptive state"         : "m2s2",
    "Starvation adaptation"        : "m2s3",
    "Integrated fuel states"       : "m2s4",
    "Insulin and glucagon"         : "m3s1",
    "Counterregulatory hormones"   : "m3s2",
    "Hormone response patterns"    : "m3s3",
    "Incretins and pharmacotherapy": "m3s4",
    "Tissue fuel profiles"         : "m4s1",
    "Liver functions"              : "m4s2",
    "Muscle energy systems"        : "m4s3",
    "Creatine and creatinine"      : "m4s4"
  }
};
