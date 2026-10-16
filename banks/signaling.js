/* ============================================================
   BANK — Membrane Transport & Signal Transduction
   PHA3134 Biochemistry Q2 2026
   Pure data. No DOM, no dependency on shared/ or on the page.
   Question IDs are permanent: SIG-001 ... SIG-052, never reused,
   never renumbered. Card IDs: SIG-CARD-01 ...
   ============================================================ */
var TOPIC_ID    = 'signaling';
var TOPIC_TITLE = 'Membrane Transport & Signal Transduction';

/* ------------------------------------------------------------
   CHECKPOINTS — the in-section "Can you predict it?" questions.
   `answer` is an index into `options` BEFORE the engine shuffles.
   ------------------------------------------------------------ */
var CHECKPOINTS = {

  /* --- Module 1 · Section 1 — passive transport --- */
  c1: {
    options: [
      'The small neutral lipophilic molecule',
      'The hydrated potassium ion',
      'Both cross at the same rate',
      'Neither crosses without a transporter'
    ],
    answer: 0,
    why: 'The bilayer interior is hydrophobic. A small neutral lipophilic molecule dissolves into it and diffuses through unaided. A hydrated K\u207a ion carries both charge and a shell of water molecules, so it needs a transport protein.'
  },
  c1b: {
    options: [
      'The ions move down a gradient that already exists, so no energy is added',
      'The channel hydrolyzes ATP each time it opens',
      'The bound ligand is consumed to power the movement',
      'The membrane potential is converted into chemical energy'
    ],
    answer: 0,
    why: 'A ligand-gated channel controls <em>when</em> the pore opens, not which way ions travel. Once open, ions flow down their existing electrochemical gradient, so the transport itself is passive.'
  },
  c1c: {
    options: [
      'A change in membrane potential',
      'Binding of a neurotransmitter',
      'Phosphorylation of the channel by a kinase',
      'A rise in intracellular ATP'
    ],
    answer: 0,
    why: 'Voltage-gated channels sense the electrical potential across the membrane; ligand-gated channels respond to a bound signaling molecule. Both are passive once open.'
  },

  /* --- Module 1 · Section 2 — primary active transport --- */
  c2: {
    options: [
      'It must be coupled to an energy source, because the movement opposes the gradient',
      'It happens spontaneously once a channel opens',
      'It requires only a change in membrane potential',
      'It occurs whenever a carrier protein changes conformation'
    ],
    answer: 0,
    why: 'Moving Na\u207a from 12 mM inside to 145 mM outside is thermodynamically uphill (\u0394G &gt; 0). An uphill process needs an energy input coupled to it \u2014 for the Na\u207a/K\u207a pump, ATP hydrolysis.'
  },
  c2b: {
    options: [
      '3 Na\u207a move out and 2 K\u207a move in',
      '2 Na\u207a move out and 3 K\u207a move in',
      '3 Na\u207a move in and 2 K\u207a move out',
      '1 Na\u207a moves out and 1 K\u207a moves in'
    ],
    answer: 0,
    why: 'One ATP drives 3 Na\u207a out and 2 K\u207a in. Both ions move against their gradients, and because more positive charge leaves than enters, the pump also contributes to the negative resting membrane potential.'
  },
  c2c: {
    options: [
      'Each electrical signal moves ions down their gradients, and the pump has to restore them',
      'The pump is unusually inefficient compared with other ATPases',
      'Excitable cells synthesize far more pump protein than other cells',
      'The pump runs continuously at a fixed rate regardless of ion movement'
    ],
    answer: 0,
    why: 'Excitable cells fire repeatedly, and every action potential dissipates a little of the Na\u207a and K\u207a gradients. The pump pays the ATP bill to rebuild them, which is why roughly 75% of these cells\u2019 energy budget goes to it.'
  },

  /* --- Module 1 · Section 3 — secondary active transport --- */
  c3: {
    options: [
      'The energy stored in the inward Na\u207a gradient',
      'Direct hydrolysis of ATP by SGLT1 itself',
      'The glucose concentration gradient across the membrane',
      'GTP hydrolysis by an associated G protein'
    ],
    answer: 0,
    why: 'SGLT1 does not touch ATP. It lets Na\u207a run downhill into the cell and uses that released free energy to drag glucose uphill \u2014 which is why the gradient built by the Na\u207a/K\u207a pump is the real power source.'
  },
  c3b: {
    options: [
      'A symporter',
      'An antiporter',
      'A uniporter',
      'A ligand-gated channel'
    ],
    answer: 0,
    why: 'Two substrates, same direction, one moving with its gradient and one against it \u2014 that is the definition of a symporter. Opposite directions would make it an antiporter; a single substrate would make it a uniporter.'
  },
  c3c: {
    options: [
      'Glucose uptake falls as the Na\u207a gradient runs down',
      'Glucose uptake continues unchanged, since SGLT1 does not use ATP',
      'Glucose uptake rises as intracellular Na\u207a accumulates',
      'SGLT1 switches to moving glucose out of the cell immediately'
    ],
    answer: 0,
    why: 'This is the chain worth memorizing: ATP \u2192 Na\u207a/K\u207a pump \u2192 Na\u207a gradient \u2192 SGLT1. Cut ATP and the pump stops, the Na\u207a gradient collapses over time, and the secondary active transporter loses the driving force it depends on.'
  },

  /* --- Module 2 · Section 1 — signaling fundamentals & GPCR anatomy --- */
  c4: {
    options: [
      'Signal amplification',
      'Signal termination',
      'Receptor desensitization',
      'Feedback inhibition'
    ],
    answer: 0,
    why: 'One receptor activates one enzyme, that enzyme makes many second messenger molecules, and each of those engages downstream targets. A small extracellular signal becomes a large intracellular response \u2014 amplification.'
  },
  c4b: {
    options: [
      'The extracellular N-terminal domain',
      'The intracellular C-terminal domain',
      'The center of the transmembrane helical bundle only',
      'The cytoplasmic loop between helices 5 and 6'
    ],
    answer: 0,
    why: 'A GPCR has three regions: an extracellular N-terminal ligand-binding domain, seven transmembrane \u03b1-helices, and an intracellular C-terminal domain where the G protein docks.'
  },
  c4c: {
    options: [
      'Seven membrane-spanning \u03b1-helices',
      'Seven ligand-binding sites',
      'Seven subunits in the receptor complex',
      'Seven phosphorylation sites on the C-terminus'
    ],
    answer: 0,
    why: 'The nickname 7-TM (or heptahelical) receptor refers to the seven \u03b1-helices that thread back and forth through the bilayer \u2014 a structural signature shared by every GPCR.'
  },

  /* --- Module 2 · Section 2 — the beta-adrenergic cascade --- */
  c5: {
    options: [
      'It binds GTP and dissociates from the other subunits',
      'It binds GDP and stays bound to the receptor',
      'It is phosphorylated on a tyrosine residue',
      'It binds cAMP produced by adenylate cyclase'
    ],
    answer: 0,
    why: 'The activated receptor lets G\u03b1 exchange GDP for GTP. GTP-bound G\u03b1 separates from the heterotrimer and goes on to activate adenylate cyclase. GTP on means active; GDP on means off.'
  },
  c5b: {
    options: [
      'ATP into cyclic AMP',
      'cyclic AMP into AMP',
      'GTP into GDP',
      'PIP\u2082 into IP\u2083 and DAG'
    ],
    answer: 0,
    why: 'Adenylate cyclase cyclizes ATP into cAMP, the second messenger. The reverse step \u2014 cAMP to AMP \u2014 belongs to phosphodiesterase, which is a termination mechanism.'
  },
  c5c: {
    options: [
      'Protein kinase A',
      'Protein kinase C',
      'Phospholipase C',
      'Protein kinase B (Akt)'
    ],
    answer: 0,
    why: 'cAMP activates PKA. Pairing the messenger with its kinase is worth locking in early: cAMP with PKA, DAG and Ca\u00b2\u207a with PKC, PIP\u2083 with Akt.'
  },

  /* --- Module 2 · Section 3 — the PLC branch --- */
  c6: {
    options: [
      'IP\u2083 and DAG',
      'cAMP and AMP',
      'PIP\u2083 and DAG',
      'IP\u2083 and cAMP'
    ],
    answer: 0,
    why: 'Phospholipase C cleaves PIP\u2082 into two products at once: inositol 1,4,5-trisphosphate (IP\u2083), which is soluble, and diacylglycerol (DAG), which is lipid.'
  },
  c6b: {
    options: [
      'DAG, because it stays associated with the membrane',
      'IP\u2083, because it stays associated with the membrane',
      'Both products stay in the membrane',
      'Both products diffuse into the cytosol'
    ],
    answer: 0,
    why: 'DAG keeps its fatty acyl tails, so it cannot leave the bilayer. IP\u2083 is a soluble head group and travels through the cytosol to reach intracellular Ca\u00b2\u207a stores. Their chemistry dictates where each one can work.'
  },
  c6c: {
    options: [
      'Protein kinase C',
      'Protein kinase A',
      'Protein kinase B (Akt)',
      'Adenylate cyclase'
    ],
    answer: 0,
    why: 'PKC needs both signals \u2014 the Ca\u00b2\u207a released by IP\u2083 and the DAG waiting in the membrane. That requirement is what makes PKC activation depend on the branch point being taken.'
  },

  /* --- Module 3 · Section 1 — insulin --- */
  c7: {
    options: [
      'The two \u03b2 subunits phosphorylate tyrosine residues on each other',
      'The \u03b1 subunits phosphorylate each other on the cell surface',
      'A separate cytosolic kinase phosphorylates both \u03b2 subunits',
      'The receptor binds GTP and dissociates into monomers'
    ],
    answer: 0,
    why: 'The insulin receptor is already a dimer. Insulin binding to the extracellular \u03b1 subunits triggers <em>trans</em>-autophosphorylation: each intracellular \u03b2 subunit phosphorylates tyrosines on its partner.'
  },
  c7b: {
    options: [
      'PIP\u2082 into PIP\u2083',
      'PIP\u2082 into IP\u2083 and DAG',
      'ATP into cAMP',
      'PIP\u2083 into PIP\u2082'
    ],
    answer: 0,
    why: 'PI3K is a lipid kinase: it adds a phosphate to PIP\u2082 to make PIP\u2083, the second messenger of insulin signaling. Removing that phosphate (PIP\u2083 \u2192 PIP\u2082) is what a lipid phosphatase does to shut the pathway down.'
  },
  c7c: {
    options: [
      'PIP\u2083, made from PIP\u2082 by PI3K',
      'IP\u2083, made from PIP\u2082 by PLC',
      'PIP\u2082, made from PIP\u2083 by a phosphatase',
      'DAG, made from PIP\u2082 by PLC'
    ],
    answer: 0,
    why: 'Both messengers start from PIP\u2082, so the enzyme is the tell. PLC <em>cleaves</em> PIP\u2082 to release soluble IP\u2083; PI3K <em>phosphorylates</em> PIP\u2082 to make membrane-bound PIP\u2083.'
  },

  /* --- Module 3 · Section 2 — EGFR --- */
  c8: {
    options: [
      'Each subunit binds its own EGF molecule first',
      'One EGF molecule bridges both subunits at once',
      'The subunits are permanently dimerized before EGF arrives',
      'Ras binds the subunits together after GTP loading'
    ],
    answer: 0,
    why: 'This is the structural difference from the insulin receptor, which is a dimer before its ligand shows up. EGFR monomers each bind EGF, and only then associate \u2014 which brings the two intracellular kinase domains close enough to autophosphorylate.'
  },
  c8b: {
    options: [
      'Exchanging its bound GDP for GTP',
      'Being phosphorylated on a tyrosine residue by EGFR',
      'Binding cAMP released by adenylate cyclase',
      'Hydrolyzing its bound GTP to GDP'
    ],
    answer: 0,
    why: 'Ras is a small G protein and follows the same on/off logic as G\u03b1: GTP-bound is on, GDP-bound is off. Sos, a guanine nucleotide exchange factor, catalyzes the swap that turns it on.'
  },
  c8c: {
    options: [
      'Raf, then MEK, then ERK',
      'MEK, then Raf, then ERK',
      'ERK, then Raf, then MEK',
      'Raf, then ERK, then MEK'
    ],
    answer: 0,
    why: 'GTP-bound Ras recruits Raf at the membrane; Raf phosphorylates MEK; MEK phosphorylates ERK. ERK, a MAP kinase, then moves to the nucleus and phosphorylates transcription factors.'
  },

  /* --- Module 3 · Section 3 — comparing pathways --- */
  c9: {
    options: [
      'The \u03b2-adrenergic pathway',
      'The insulin pathway',
      'The EGFR pathway',
      'All three use one equally'
    ],
    answer: 0,
    why: 'Only the \u03b2-adrenergic (GPCR) pathway uses a heterotrimeric G protein. EGFR uses Ras, a <em>small</em> monomeric G protein. The insulin pathway uses no G protein at all.'
  },
  c9b: {
    options: [
      'PIP\u2083',
      'cAMP',
      'IP\u2083',
      'Ras-GTP'
    ],
    answer: 0,
    why: 'Insulin\u2019s second messenger is PIP\u2083. Ras-GTP is a signaling protein rather than a diffusible small-molecule messenger, and the EGFR pathway is often described as having no classic second messenger.'
  },

  /* --- Module 4 · Section 1 — termination --- */
  c10: {
    options: [
      'It returns G\u03b1 to its inactive GDP-bound form',
      'It locks G\u03b1 onto adenylate cyclase permanently',
      'It converts cAMP back into ATP',
      'It removes phosphate groups from PKA'
    ],
    answer: 0,
    why: 'G\u03b1 is its own timer. Its intrinsic GTPase slowly hydrolyzes bound GTP to GDP; GDP-bound G\u03b1 releases adenylate cyclase and rejoins the heterotrimer. Slow hydrolysis gives the cascade time to run, but not indefinitely.'
  },
  c10b: {
    options: [
      'Hydrolyzing cAMP to AMP',
      'Hydrolyzing GTP to GDP',
      'Dephosphorylating PKA',
      'Cleaving PIP\u2082 into IP\u2083 and DAG'
    ],
    answer: 0,
    why: 'Phosphodiesterases open the cyclic phosphate of cAMP to give AMP, which cannot activate PKA. Because they set how long a cAMP signal lasts, PDEs are heavily used drug targets.'
  },
  c10c: {
    options: [
      'Phosphatases',
      'Phosphodiesterases',
      'Guanine nucleotide exchange factors',
      'Lipid kinases'
    ],
    answer: 0,
    why: 'A pathway built by adding phosphates is dismantled by removing them. Lipid phosphatases convert PIP\u2083 back to PIP\u2082, protein tyrosine phosphatases strip the receptor, and serine phosphatases reverse the downstream kinases.'
  },

  /* --- Module 4 · Section 2 — broken switches --- */
  c11: {
    options: [
      'Ras stays GTP-bound and ERK signaling increases',
      'Ras stays GDP-bound and ERK signaling decreases',
      'Ras activity is unchanged because Sos still regulates it',
      'Ras is degraded and ERK signaling stops'
    ],
    answer: 0,
    why: 'GTP hydrolysis is Ras\u2019s only off switch. Remove it and Ras stays in the GTP-bound ON state whether or not EGF is present, so Raf \u2192 MEK \u2192 ERK signaling and the proliferation it drives both rise.'
  },
  c11b: {
    options: [
      'cAMP rises and the signal lasts longer',
      'cAMP falls and the signal ends sooner',
      'cAMP is unchanged but PKA activity falls',
      'cAMP rises and PKA activity falls'
    ],
    answer: 0,
    why: 'Blocking the enzyme that destroys a second messenger lets that messenger accumulate. More cAMP for longer means more PKA activity for longer \u2014 the mechanism behind caffeine\u2019s and sildenafil\u2019s PDE inhibition.'
  },
  c11c: {
    options: [
      'Roughly 90%',
      'Roughly 10%',
      'Roughly 30%',
      'Roughly 50%'
    ],
    answer: 0,
    why: 'Constitutively active K-Ras appears in about 90% of pancreatic ductal adenocarcinomas. Long considered undruggable, K-Ras finally yielded to sotorasib, approved in 2021 for non-small cell lung cancer.'
  },

  /* --- Pathway Lab --- */
  cL1: {
    options: [
      'PIP\u2083 accumulates and Akt signaling increases',
      'PIP\u2083 is depleted and Akt signaling decreases',
      'IP\u2083 accumulates and Ca\u00b2\u207a release increases',
      'PIP\u2082 accumulates and PLC activity increases'
    ],
    answer: 0,
    why: 'The lipid phosphatase is the enzyme that converts PIP\u2083 back to PIP\u2082. Inhibit the eraser and the second messenger it erases builds up, so the Akt arm of insulin signaling stays on longer.'
  },
  cL2: {
    options: [
      'cAMP falls and PKA activity falls',
      'cAMP rises and PKA activity rises',
      'cAMP falls but PKA activity is maintained',
      'cAMP is unchanged because epinephrine is still bound'
    ],
    answer: 0,
    why: 'A receptor can be fully occupied and still produce no response if the enzyme downstream of it is blocked. Adenylate cyclase is the only source of cAMP here, so blocking it starves PKA regardless of what the receptor is doing.'
  }
};

/* ------------------------------------------------------------
   FLASHCARDS
   ------------------------------------------------------------ */
var CARDS = [
  {id:'SIG-CARD-01', t:'Passive diffusion',
   d:'Movement of a solute down its own concentration or electrochemical gradient, with no energy input. May be unaided or through a carrier or channel protein.'},
  {id:'SIG-CARD-02', t:'Primary active transport',
   d:'Energy \u2014 usually ATP hydrolysis \u2014 is applied directly to the transporter to move a solute against its gradient. Example: the Na\u207a/K\u207a-ATPase.'},
  {id:'SIG-CARD-03', t:'Secondary active transport',
   d:'One solute moves down its gradient and the free energy released drags a second solute up its own gradient. Depends on a gradient built by primary active transport.'},
  {id:'SIG-CARD-04', t:'Na\u207a/K\u207a pump stoichiometry',
   d:'One ATP hydrolyzed moves 3 Na\u207a out of the cell and 2 K\u207a in. Accounts for roughly 75% of energy use in excitable cells.'},
  {id:'SIG-CARD-05', t:'Uniporter / symporter / antiporter',
   d:'Uniporter: one substrate. Symporter: two substrates, same direction. Antiporter: two substrates, opposite directions. Sym- and antiporters are cotransporters.'},
  {id:'SIG-CARD-06', t:'SGLT1/2',
   d:'Sodium-glucose cotransporters. A symporter: Na\u207a enters down its gradient and glucose enters against its gradient. Powered indirectly by the Na\u207a/K\u207a pump.'},
  {id:'SIG-CARD-07', t:'Second messenger',
   d:'A small intracellular molecule generated in response to receptor activation that relays and amplifies the signal. One receptor can generate 10\u2013100s of them.'},
  {id:'SIG-CARD-08', t:'G-protein coupled receptor',
   d:'Seven-transmembrane receptor with an extracellular ligand-binding N-terminus and an intracellular C-terminus that engages a heterotrimeric G protein. Target of ~34% of approved drugs.'},
  {id:'SIG-CARD-09', t:'The \u03b2-adrenergic cascade',
   d:'Epinephrine \u2192 \u03b2-adrenergic receptor \u2192 G\u03b1-GTP \u2192 adenylate cyclase \u2192 cAMP \u2192 PKA \u2192 tissue-specific response.'},
  {id:'SIG-CARD-10', t:'G\u03b1 switch logic',
   d:'GTP-bound G\u03b1 is active and dissociates to reach its effector. Its own intrinsic GTPase slowly hydrolyzes GTP to GDP, which switches it off. Ras follows the same logic.'},
  {id:'SIG-CARD-11', t:'The PLC branch',
   d:'Some GPCRs activate phospholipase C instead of adenylate cyclase. PLC cleaves PIP\u2082 into IP\u2083 and DAG; IP\u2083 releases Ca\u00b2\u207a, and Ca\u00b2\u207a plus DAG activate PKC.'},
  {id:'SIG-CARD-12', t:'IP\u2083 versus DAG',
   d:'IP\u2083 is soluble and travels through the cytosol to trigger Ca\u00b2\u207a release. DAG keeps its lipid tails and stays embedded in the membrane.'},
  {id:'SIG-CARD-13', t:'IP\u2083 versus PIP\u2083',
   d:'Both come from PIP\u2082. PLC cleaves PIP\u2082 to give soluble IP\u2083 (\u2192 Ca\u00b2\u207a). PI3K phosphorylates PIP\u2082 to give membrane-bound PIP\u2083 (\u2192 Akt).'},
  {id:'SIG-CARD-14', t:'Receptor tyrosine kinase',
   d:'A receptor whose intracellular domain is a tyrosine kinase. Ligand binding leads to dimerization and autophosphorylation on tyrosine residues. Insulin receptor and EGFR are both RTKs.'},
  {id:'SIG-CARD-15', t:'The insulin cascade',
   d:'Insulin \u2192 receptor \u03b1 subunits \u2192 \u03b2-subunit autophosphorylation \u2192 IRS1/2 \u2192 PI3K \u2192 PIP\u2083 \u2192 Akt (protein kinase B).'},
  {id:'SIG-CARD-16', t:'The EGFR cascade',
   d:'EGF \u2192 EGFR (each monomer binds its own EGF, then dimerizes) \u2192 autophosphorylation \u2192 Grb2/Sos \u2192 Ras-GTP \u2192 Raf \u2192 MEK \u2192 ERK \u2192 nucleus.'},
  {id:'SIG-CARD-17', t:'Three ways to terminate a signal',
   d:'GTP hydrolysis returns a G protein to its off state; phosphatases remove activating phosphates; phosphodiesterases destroy cyclic second messengers.'},
  {id:'SIG-CARD-18', t:'Phosphodiesterase',
   d:'Hydrolyzes cAMP to AMP, ending the cAMP signal. A common drug target \u2014 caffeine and sildenafil both inhibit PDEs.'},
  {id:'SIG-CARD-19', t:'Ras as a proto-oncogene',
   d:'Ras mutations that block GTP hydrolysis lock it ON, driving constant ERK signaling and proliferation. K-Ras is mutated in roughly 90% of pancreatic ductal adenocarcinomas.'},
  {id:'SIG-CARD-20', t:'Sotorasib',
   d:'A K-Ras inhibitor approved in 2021 for non-small cell lung cancer \u2014 the first drug to make a target long considered undruggable.'}
];

/* ------------------------------------------------------------
   POOL — module quiz and final exam questions.
   `m`     which module quiz this belongs to
   `area`  must match a key in AREA_SECTION (content script)
   `level` concept | application | integration
   ------------------------------------------------------------ */
var POOL = [

  /* =========== MODULE 1 =========== */
  {id:'SIG-001', m:'m1', area:'Passive transport', level:'concept',
   stem:'Which property allows a molecule to cross the lipid bilayer without a transport protein?',
   options:['Being small, neutral, and lipophilic','Carrying a full positive charge','Having a large hydrated radius','Forming multiple hydrogen bonds with water'],
   answer:0,
   why:'The bilayer core is hydrophobic, so molecules that are both uncharged and lipid-soluble partition into it readily. Charge, size, and strong hydration all favor staying in the aqueous phase.'},

  {id:'SIG-002', m:'m1', area:'Passive transport', level:'concept',
   stem:'What distinguishes passive transport from active transport?',
   options:['Passive transport requires no added energy because the solute moves down its gradient','Passive transport requires a carrier protein while active transport does not','Passive transport moves only ions while active transport moves only sugars','Passive transport occurs only at the plasma membrane'],
   answer:0,
   why:'The defining difference is thermodynamic. Passive transport follows the existing gradient (\u0394G &lt; 0) and needs no energy input; active transport opposes it (\u0394G &gt; 0) and must be coupled to an energy source.'},

  {id:'SIG-003', m:'m1', area:'Passive transport', level:'application',
   stem:'A neurotransmitter binds a channel on a postsynaptic membrane and Na\u207a rushes into the cell. How is this transport best classified?',
   options:['Passive transport through a ligand-gated channel','Primary active transport driven by ATP','Secondary active transport driven by the K\u207a gradient','Passive transport through a voltage-gated channel'],
   answer:0,
   why:'The neurotransmitter opens the gate, but the ions then move down their existing electrochemical gradient. Gating controls timing; it does not supply energy, so the transport is passive.'},

  {id:'SIG-004', m:'m1', area:'Passive transport', level:'application',
   stem:'A membrane protein opens in response to depolarization rather than to a bound molecule. Which description fits it?',
   options:['A voltage-gated ion channel','A ligand-gated ion channel','A primary active transporter','A sodium-glucose symporter'],
   answer:0,
   why:'Voltage-gated channels carry charged sensor domains that shift with membrane potential. Ligand-gated channels open on binding a chemical signal instead.'},

  {id:'SIG-005', m:'m1', area:'Active transport', level:'concept',
   stem:'What defines primary active transport?',
   options:['Energy is applied directly to the transporter, typically by ATP hydrolysis','The gradient of a second solute supplies the energy','The solute moves down its own concentration gradient','A ligand must bind before the transporter opens'],
   answer:0,
   why:'In primary active transport the energy source is coupled straight to the transport protein. In secondary active transport the transporter uses a gradient that some other pump established.'},

  {id:'SIG-006', m:'m1', area:'Active transport', level:'application',
   stem:'A cell maintains intracellular Na\u207a near 12 mM while extracellular Na\u207a is near 145 mM. Which process is chiefly responsible?',
   options:['ATP-driven export of Na\u207a by the Na\u207a/K\u207a pump','Passive leak of Na\u207a through voltage-gated channels','Symport of Na\u207a with glucose into the cell','Antiport of Na\u207a with K\u207a driven by the K\u207a gradient'],
   answer:0,
   why:'Only an energy-consuming pump can hold a solute far from equilibrium. Every passive route listed would move Na\u207a inward, collapsing rather than sustaining the gradient.'},

  {id:'SIG-007', m:'m1', area:'Active transport', level:'application',
   stem:'A cell hydrolyzes 10 molecules of ATP through the Na\u207a/K\u207a pump. How many K\u207a ions enter the cell?',
   options:['20','10','30','5'],
   answer:0,
   why:'The pump moves 2 K\u207a in per ATP, so 10 ATP brings in 20 K\u207a \u2014 and simultaneously exports 30 Na\u207a. The unequal 3:2 ratio also makes the pump electrogenic.'},

  {id:'SIG-008', m:'m1', area:'Active transport', level:'integration',
   stem:'Excitable cells devote roughly 75% of their energy expenditure to the Na\u207a/K\u207a pump. Which explanation best accounts for this?',
   options:['Repeated electrical activity dissipates ion gradients that the pump must rebuild','The pump has a far lower catalytic efficiency than other membrane ATPases','Excitable cells lack the passive channels that other cell types use','The pump also synthesizes the ATP used by neighboring transporters'],
   answer:0,
   why:'Every action potential lets Na\u207a in and K\u207a out down their gradients. Restoring those gradients after each firing event is continuous, ATP-expensive work.'},

  {id:'SIG-009', m:'m1', area:'Cotransport & transporter types', level:'concept',
   stem:'Which term describes a transporter that moves two substrates in opposite directions across the membrane?',
   options:['Antiporter','Symporter','Uniporter','Ligand-gated channel'],
   answer:0,
   why:'Antiporters and symporters are both cotransporters, moving two substrates with one moving down its gradient. Direction is what separates them: opposite for antiport, the same for symport.'},

  {id:'SIG-010', m:'m1', area:'Cotransport & transporter types', level:'application',
   stem:'SGLT1 carries Na\u207a and glucose into an intestinal cell together. How is this transporter best classified?',
   options:['A symporter using secondary active transport','An antiporter using secondary active transport','A uniporter using passive transport','A pump using primary active transport'],
   answer:0,
   why:'Both substrates enter, so it is a symporter, and glucose moves against its gradient on energy borrowed from the Na\u207a gradient, so the transport is secondary active.'},

  {id:'SIG-011', m:'m1', area:'Cotransport & transporter types', level:'integration',
   stem:'A drug selectively inhibits the Na\u207a/K\u207a-ATPase in an intestinal cell. What is the most likely effect on SGLT1-mediated glucose uptake?',
   options:['Uptake declines as the inward Na\u207a gradient dissipates','Uptake continues unchanged because SGLT1 does not hydrolyze ATP','Uptake increases because more Na\u207a remains available outside','Uptake reverses immediately, exporting glucose from the cell'],
   answer:0,
   why:'SGLT1 is powered indirectly. Stopping the pump lets intracellular Na\u207a rise and the gradient flatten, removing the driving force that pulls glucose uphill.'},

  {id:'SIG-012', m:'m1', area:'Cotransport & transporter types', level:'integration',
   stem:'A transporter moves a single amino acid down its concentration gradient and uses no other solute. Which classification applies?',
   options:['A uniporter using passive transport','A symporter using secondary active transport','An antiporter using secondary active transport','A uniporter using primary active transport'],
   answer:0,
   why:'One substrate makes it a uniporter, and movement down the gradient makes it passive. Uniporters can be active as well \u2014 the substrate count and the energetics are independent descriptors.'},

  {id:'SIG-013', m:'m1', area:'Active transport', level:'integration',
   stem:'A mitochondrial poison abolishes ATP synthesis in a cell. Which sequence best describes what follows for Na\u207a handling?',
   options:['The pump stalls, intracellular Na\u207a rises, and Na\u207a-dependent cotransport weakens','The pump accelerates, intracellular Na\u207a falls, and cotransport strengthens','The pump is unaffected because it uses GTP rather than ATP','Na\u207a channels close to preserve the existing gradient'],
   answer:0,
   why:'Tracing the dependency forward gives the whole chain: ATP \u2192 pump \u2192 Na\u207a gradient \u2192 every secondary active transporter that borrows from it.'},

  /* =========== MODULE 2 =========== */
  {id:'SIG-014', m:'m2', area:'Signaling fundamentals & GPCR structure', level:'concept',
   stem:'What is the role of a second messenger in a signal transduction pathway?',
   options:['To relay and amplify the signal inside the cell after receptor activation','To bind the extracellular receptor in place of the original ligand','To transport the signaling molecule across the plasma membrane','To terminate the pathway once the response is complete'],
   answer:0,
   why:'The receptor converts an outside event into an inside one; the second messenger spreads it. Because one activated enzyme makes many messenger molecules, this step is where most amplification happens.'},

  {id:'SIG-015', m:'m2', area:'Signaling fundamentals & GPCR structure', level:'concept',
   stem:'Which structural feature is shared by all G-protein coupled receptors?',
   options:['Seven transmembrane \u03b1-helices','An intracellular tyrosine kinase domain','A pair of identical subunits joined by disulfide bonds','A covalently bound GTP molecule'],
   answer:0,
   why:'The seven-helix bundle is the defining GPCR architecture. Intracellular kinase domains belong to receptor tyrosine kinases, a structurally distinct receptor class.'},

  {id:'SIG-016', m:'m2', area:'Signaling fundamentals & GPCR structure', level:'application',
   stem:'An investigator mutates the extracellular N-terminal domain of a \u03b2-adrenergic receptor. Which function is most directly disrupted?',
   options:['Binding of epinephrine to the receptor','Hydrolysis of GTP by the G\u03b1 subunit','Conversion of ATP to cAMP by adenylate cyclase','Phosphorylation of downstream targets by PKA'],
   answer:0,
   why:'The N-terminal extracellular domain is the ligand-binding site. The other three events occur on the cytoplasmic side, downstream of a receptor that would still need to bind its ligand to start.'},

  {id:'SIG-017', m:'m2', area:'\u03b2-adrenergic cascade', level:'concept',
   stem:'Which event activates the G\u03b1 subunit of a heterotrimeric G protein?',
   options:['Exchange of bound GDP for GTP','Hydrolysis of bound GTP to GDP','Phosphorylation on a tyrosine residue','Binding of cAMP to its regulatory site'],
   answer:0,
   why:'GTP loading is the on switch and GTP hydrolysis is the off switch. Keeping that pairing straight makes every G protein in the course predictable, including Ras.'},

  {id:'SIG-018', m:'m2', area:'\u03b2-adrenergic cascade', level:'concept',
   stem:'Which enzyme produces cAMP in the \u03b2-adrenergic pathway?',
   options:['Adenylate cyclase','Phosphodiesterase','Phospholipase C','Protein kinase A'],
   answer:0,
   why:'Adenylate cyclase makes cAMP from ATP. Phosphodiesterase destroys it, PLC works on a different lipid substrate entirely, and PKA is the target rather than the source.'},

  {id:'SIG-019', m:'m2', area:'\u03b2-adrenergic cascade', level:'application',
   stem:'Epinephrine binds a \u03b2-adrenergic receptor on a cardiac cell. Which sequence of events follows?',
   options:['G\u03b1 binds GTP \u2192 adenylate cyclase activated \u2192 cAMP produced \u2192 PKA activated','Adenylate cyclase activated \u2192 G\u03b1 binds GTP \u2192 PKA activated \u2192 cAMP produced','G\u03b1 binds GTP \u2192 PKA activated \u2192 adenylate cyclase activated \u2192 cAMP produced','cAMP produced \u2192 G\u03b1 binds GTP \u2192 adenylate cyclase activated \u2192 PKA activated'],
   answer:0,
   why:'The order is fixed by what each step needs: G\u03b1 must load GTP before it can reach adenylate cyclase, the cyclase must run before cAMP exists, and cAMP must exist before PKA can respond to it.'},

  {id:'SIG-020', m:'m2', area:'\u03b2-adrenergic cascade', level:'application',
   stem:'A single \u03b2-adrenergic receptor is activated and hundreds of PKA molecules become active. Which feature of the pathway explains this?',
   options:['One activated adenylate cyclase produces many cAMP molecules','Each receptor binds hundreds of epinephrine molecules simultaneously','PKA activates additional receptors in a positive feedback loop','Each cAMP molecule activates hundreds of adenylate cyclase enzymes'],
   answer:0,
   why:'Amplification comes from catalysis: an enzyme turns over repeatedly, so one activated cyclase yields many messenger molecules and one receptor event produces a much larger downstream response.'},

  {id:'SIG-021', m:'m2', area:'\u03b2-adrenergic cascade', level:'integration',
   stem:'A cell expresses a G\u03b1 subunit that binds GTP normally but cannot reach adenylate cyclase. What is the most likely result after epinephrine binds?',
   options:['cAMP production stays low and PKA remains inactive','cAMP production rises but PKA remains inactive','cAMP production rises and PKA is constitutively active','Epinephrine binding to the receptor is abolished'],
   answer:0,
   why:'Every step downstream of the break goes dark. Ligand binding and GTP loading proceed, but with the cyclase never engaged there is no cAMP and therefore nothing to activate PKA.'},

  {id:'SIG-022', m:'m2', area:'IP\u2083/DAG pathway', level:'concept',
   stem:'Which products does phospholipase C generate from PIP\u2082?',
   options:['IP\u2083 and DAG','cAMP and AMP','PIP\u2083 and ADP','IP\u2083 and cAMP'],
   answer:0,
   why:'PLC cleaves PIP\u2082 into a soluble head group, IP\u2083, and a lipid tail portion, DAG. Both act as messengers, but in different compartments.'},

  {id:'SIG-023', m:'m2', area:'IP\u2083/DAG pathway', level:'application',
   stem:'Which property allows IP\u2083 to reach intracellular calcium stores while DAG stays at the plasma membrane?',
   options:['IP\u2083 is water soluble while DAG retains lipid tails','IP\u2083 is smaller than DAG and passes through membrane pores','IP\u2083 is actively transported by a dedicated carrier protein','IP\u2083 is bound to a soluble carrier protein released by PLC'],
   answer:0,
   why:'PLC divides PIP\u2082 into its polar and nonpolar halves. The polar half dissolves in cytosol and travels; the nonpolar half stays anchored in the bilayer, which is why the two products act on different targets.'},

  {id:'SIG-024', m:'m2', area:'IP\u2083/DAG pathway', level:'application',
   stem:'Which pair of signals is required to activate protein kinase C?',
   options:['DAG in the membrane and released Ca\u00b2\u207a','cAMP and released Ca\u00b2\u207a','PIP\u2083 and DAG','IP\u2083 and cAMP'],
   answer:0,
   why:'PKC integrates both PLC outputs \u2014 the lipid product that stays put and the calcium that the soluble product liberates \u2014 which is why activation reports on the whole branch rather than one arm of it.'},

  {id:'SIG-025', m:'m2', area:'IP\u2083/DAG pathway', level:'integration',
   stem:'Two GPCRs bind different ligands, yet one raises cAMP and the other raises intracellular Ca\u00b2\u207a. Which difference best explains this?',
   options:['Their G proteins activate different effector enzymes','One receptor has seven transmembrane helices and the other has three','One receptor is a tyrosine kinase and the other is not','One pathway terminates by GTP hydrolysis and the other does not'],
   answer:0,
   why:'The branch point sits at the effector. A G protein coupled to adenylate cyclase gives cAMP; one coupled to phospholipase C gives IP\u2083 and DAG, and IP\u2083 is what mobilizes Ca\u00b2\u207a.'},

  {id:'SIG-026', m:'m2', area:'Signaling fundamentals & GPCR structure', level:'integration',
   stem:'Roughly 34% of approved drugs act on GPCRs. Which feature of these receptors best accounts for their pharmacological importance?',
   options:['They are surface receptors controlling many distinct physiological responses','They are the only receptors that use second messengers','They are found exclusively in excitable tissues','They act directly as transcription factors in the nucleus'],
   answer:0,
   why:'GPCRs sit on the cell surface where drugs can reach them without crossing the membrane, and the family covers histamine, opioid, adrenergic, dopamine, serotonin, and cannabinoid signaling among others.'},

  /* =========== MODULE 3 =========== */
  {id:'SIG-027', m:'m3', area:'Insulin signaling', level:'concept',
   stem:'Which description fits the insulin receptor?',
   options:['A membrane-bound dimer whose \u03b2 subunits have tyrosine kinase activity','A seven-transmembrane receptor coupled to a heterotrimeric G protein','A monomer that dimerizes only after each subunit binds its ligand','A cytosolic receptor that translocates to the nucleus when bound'],
   answer:0,
   why:'The insulin receptor is already a dimer, with extracellular \u03b1 subunits binding insulin and intracellular \u03b2 subunits carrying the kinase domains. EGFR, by contrast, dimerizes only after ligand binding.'},

  {id:'SIG-028', m:'m3', area:'Insulin signaling', level:'concept',
   stem:'Which molecule serves as the second messenger in insulin signaling?',
   options:['PIP\u2083','IP\u2083','cAMP','DAG'],
   answer:0,
   why:'PI3K phosphorylates PIP\u2082 to make PIP\u2083, which recruits the components leading to Akt activation. IP\u2083 belongs to the PLC branch of GPCR signaling.'},

  {id:'SIG-029', m:'m3', area:'Insulin signaling', level:'application',
   stem:'Insulin binds the \u03b1 subunits of its receptor. Which event occurs next?',
   options:['The \u03b2 subunits phosphorylate tyrosine residues on each other','The receptor dissociates into two independent monomers','A G\u03b1 subunit binds GTP and leaves the complex','Adenylate cyclase converts ATP to cAMP'],
   answer:0,
   why:'Ligand binding on the outside triggers <em>trans</em>-autophosphorylation on the inside, and those new phosphotyrosines become docking sites for IRS1/2.'},

  {id:'SIG-030', m:'m3', area:'Insulin signaling', level:'application',
   stem:'Which enzyme converts PIP\u2082 into PIP\u2083 during insulin signaling?',
   options:['PI3K','Phospholipase C','Adenylate cyclase','Protein kinase B'],
   answer:0,
   why:'PI3K is a lipid kinase that adds a phosphate to PIP\u2082. PLC also uses PIP\u2082 but cleaves it into IP\u2083 and DAG instead \u2014 same substrate, different chemistry, different messenger.'},

  {id:'SIG-031', m:'m3', area:'Insulin signaling', level:'integration',
   stem:'A cell expresses IRS-1 that can no longer be phosphorylated by the insulin receptor. Which downstream change is most likely?',
   options:['PI3K activation falls and Akt signaling decreases','PI3K activation rises and Akt signaling increases','cAMP production falls and PKA activity decreases','Ras remains GTP-bound and ERK signaling increases'],
   answer:0,
   why:'IRS1/2 is the adaptor between the receptor and PI3K. Break it and the receptor still autophosphorylates, but the signal never reaches PI3K, so PIP\u2083 and Akt both drop.'},

  {id:'SIG-032', m:'m3', area:'EGFR/Ras/MAPK signaling', level:'concept',
   stem:'How does EGFR dimerization differ from insulin receptor dimerization?',
   options:['EGFR monomers each bind EGF before associating with one another','EGFR is held together by disulfide bonds before ligand binding','EGFR dimerizes only after Ras binds GTP','EGFR requires phosphorylation by a separate kinase to dimerize'],
   answer:0,
   why:'This structural contrast is a frequent exam point: the insulin receptor is a constitutive dimer, while EGFR assembles its dimer as part of the activation step itself.'},

  {id:'SIG-033', m:'m3', area:'EGFR/Ras/MAPK signaling', level:'concept',
   stem:'Which description fits the Ras protein?',
   options:['A small G protein that is active when bound to GTP','A heterotrimeric G protein with \u03b1, \u03b2, and \u03b3 subunits','A lipid kinase that phosphorylates PIP\u2082','A phosphatase that removes phosphates from ERK'],
   answer:0,
   why:'Ras is monomeric \u2014 a small G protein \u2014 but it uses the same GTP-on, GDP-off logic as the heterotrimeric G\u03b1 of a GPCR pathway.'},

  {id:'SIG-034', m:'m3', area:'EGFR/Ras/MAPK signaling', level:'application',
   stem:'Which sequence correctly orders the kinase cascade downstream of activated Ras?',
   options:['Raf, then MEK, then ERK','MEK, then Raf, then ERK','ERK, then MEK, then Raf','Raf, then ERK, then MEK'],
   answer:0,
   why:'Ras-GTP recruits Raf to the membrane, Raf phosphorylates MEK, and MEK phosphorylates ERK. ERK then enters the nucleus to phosphorylate transcription factors.'},

  {id:'SIG-035', m:'m3', area:'EGFR/Ras/MAPK signaling', level:'application',
   stem:'Where does activated ERK act to produce its main cellular effect?',
   options:['In the nucleus, phosphorylating transcription factors','At the plasma membrane, activating adenylate cyclase','In the mitochondrial matrix, stimulating ATP synthesis','In the extracellular space, cleaving growth factor precursors'],
   answer:0,
   why:'ERK is where the cascade converts a membrane event into a change in gene expression \u2014 which is why the EGFR pathway drives proliferation and why its mutations are oncogenic.'},

  {id:'SIG-036', m:'m3', area:'EGFR/Ras/MAPK signaling', level:'integration',
   stem:'A cell expresses an EGFR whose intracellular kinase domain is inactive, though EGF binding and dimerization still occur. Which outcome is most likely?',
   options:['Grb2 and Sos are not recruited, so Ras remains GDP-bound','Ras remains GTP-bound, so ERK signaling increases','cAMP production rises through a compensatory GPCR pathway','ERK enters the nucleus without needing upstream activation'],
   answer:0,
   why:'Recruitment of Grb2 and Sos depends on phosphotyrosines created by autophosphorylation. With no kinase activity there are no docking sites, so Sos never arrives to load Ras with GTP.'},

  {id:'SIG-037', m:'m3', area:'Comparing pathways', level:'application',
   stem:'Which pathway uses a heterotrimeric G protein as its transducer?',
   options:['The \u03b2-adrenergic pathway','The insulin pathway','The EGFR pathway','The SGLT1 transport pathway'],
   answer:0,
   why:'Heterotrimeric G proteins belong to GPCR signaling. EGFR uses the small G protein Ras, and insulin signaling proceeds through phosphorylation without a G protein.'},

  {id:'SIG-038', m:'m3', area:'Comparing pathways', level:'integration',
   stem:'Which kinase is the major endpoint taught for the insulin pathway?',
   options:['Akt','PKA','ERK','PKC'],
   answer:0,
   why:'Pairing each pathway with its terminal kinase separates them cleanly: \u03b2-adrenergic with PKA, the PLC branch with PKC, insulin with Akt, and EGFR with ERK.'},

  {id:'SIG-039', m:'m3', area:'Comparing pathways', level:'integration',
   stem:'The \u03b2-adrenergic and EGFR pathways both rely on a GTP-binding protein. Which statement best captures how they differ in that respect?',
   options:['One uses a heterotrimeric G protein while the other uses the small G protein Ras','One uses GTP while the other uses ATP as the nucleotide switch','One is activated by GTP binding while the other is activated by GTP hydrolysis','One G protein is membrane associated while the other is nuclear'],
   answer:0,
   why:'Both switches are turned on by GTP binding and off by hydrolysis. The real difference is the protein itself: a three-subunit G protein coupled to a GPCR versus monomeric Ras downstream of an RTK.'},

  /* =========== MODULE 4 =========== */
  {id:'SIG-040', m:'m4', area:'Signal termination', level:'concept',
   stem:'Which mechanism ends the activity of a GTP-bound G\u03b1 subunit?',
   options:['Its intrinsic GTPase hydrolyzes GTP to GDP','A phosphatase removes a phosphate from a tyrosine residue','A phosphodiesterase hydrolyzes GTP to cAMP','A kinase phosphorylates the bound GTP'],
   answer:0,
   why:'G\u03b1 carries its own slow GTPase. The hydrolysis rate acts as a built-in timer \u2014 fast enough to prevent runaway signaling, slow enough to let the cascade run first.'},

  {id:'SIG-041', m:'m4', area:'Signal termination', level:'concept',
   stem:'What reaction does a phosphodiesterase catalyze in the \u03b2-adrenergic pathway?',
   options:['Hydrolysis of cAMP to AMP','Hydrolysis of ATP to cAMP','Hydrolysis of GTP to GDP','Cleavage of PIP\u2082 to IP\u2083 and DAG'],
   answer:0,
   why:'PDE opens the cyclic phosphate, giving AMP, which cannot activate PKA. Adenylate cyclase runs the opposite reaction, so the two enzymes together set the lifetime of a cAMP signal.'},

  {id:'SIG-042', m:'m4', area:'Signal termination', level:'application',
   stem:'The insulin receptor pathway is built by successive phosphorylation events. Which enzyme class terminates it?',
   options:['Phosphatases','Phosphodiesterases','Guanine nucleotide exchange factors','Lipid kinases'],
   answer:0,
   why:'Reversal mirrors activation. Lipid phosphatases return PIP\u2083 to PIP\u2082, tyrosine phosphatases strip the receptor, and serine phosphatases reverse the activated kinases.'},

  {id:'SIG-043', m:'m4', area:'Signal termination', level:'application',
   stem:'Why is the slow rate of GTP hydrolysis by G\u03b1 physiologically useful?',
   options:['It leaves enough time for the downstream cascade to occur before shutdown','It allows G\u03b1 to activate adenylate cyclase without binding GTP','It prevents the receptor from binding additional ligand','It permits cAMP to be recycled back into ATP'],
   answer:0,
   why:'The timing is the point. Hydrolysis fast enough and the cyclase never gets going; slow enough and cAMP accumulates unchecked. The intermediate rate produces a signal with a defined duration.'},

  {id:'SIG-044', m:'m4', area:'Signal termination', level:'integration',
   stem:'A drug inhibits the phosphodiesterase acting on cAMP in a cardiac cell. Which set of changes is most likely?',
   options:['cAMP rises, PKA activity rises, and the signal lasts longer','cAMP falls, PKA activity falls, and the signal ends sooner','cAMP rises while PKA activity falls and the signal ends sooner','cAMP is unchanged while PKA activity rises and the signal lasts longer'],
   answer:0,
   why:'Blocking the only route of second-messenger removal lets cAMP accumulate. The three readouts move together because PKA activity tracks cAMP concentration and duration tracks how long it persists.'},

  {id:'SIG-045', m:'m4', area:'Signal termination', level:'integration',
   stem:'A mutation abolishes the lipid phosphatase that converts PIP\u2083 back to PIP\u2082. Which downstream change is most likely?',
   options:['PIP\u2083 accumulates and Akt signaling increases','PIP\u2083 is depleted and Akt signaling decreases','IP\u2083 accumulates and Ca\u00b2\u207a release increases','cAMP accumulates and PKA activity increases'],
   answer:0,
   why:'Removing the enzyme that erases a second messenger extends that messenger\u2019s life. Persistent PIP\u2083 keeps recruiting the machinery that activates Akt, and this is a recognized mechanism in several cancers.'},

  {id:'SIG-046', m:'m4', area:'Broken switches & cancer', level:'application',
   stem:'A mutation prevents Ras from hydrolyzing its bound GTP. Which downstream change is most likely?',
   options:['ERK signaling increases because Ras remains in its active state','ERK signaling decreases because Ras remains in its inactive state','ERK signaling is unchanged because Sos still regulates Ras','Adenylate cyclase activity increases through direct Ras binding'],
   answer:0,
   why:'Hydrolysis is the only off switch Ras has. Blocked, Ras stays GTP-loaded and keeps recruiting Raf whether or not EGF is present, so the whole MAPK cascade runs continuously.'},

  {id:'SIG-047', m:'m4', area:'Broken switches & cancer', level:'application',
   stem:'Which protein family is most commonly mutated across human cancers, according to the lecture?',
   options:['The Ras family, with K-Ras the most prevalent','The phosphodiesterase family','The heterotrimeric G\u03b1 family','The insulin receptor substrate family'],
   answer:0,
   why:'Almost every gene in the EGFR pathway is a proto-oncogene, and Ras leads the list. K-Ras in particular appears in roughly 90% of pancreatic ductal adenocarcinomas.'},

  {id:'SIG-048', m:'m4', area:'Broken switches & cancer', level:'integration',
   stem:'A tumor carries a K-Ras mutation that locks Ras in its GTP-bound form. Why would an antibody blocking EGF binding to EGFR be expected to have limited effect?',
   options:['Ras is downstream of the receptor and no longer depends on it','The antibody cannot reach the extracellular domain of EGFR','K-Ras mutations also prevent EGF from being synthesized','Blocking EGFR would increase ERK signaling further'],
   answer:0,
   why:'Inhibiting a pathway upstream of a constitutively active component leaves the break untouched. This is the biochemical reason K-Ras status guides the use of EGFR-targeted therapy in the clinic.'},

  {id:'SIG-049', m:'m4', area:'Broken switches & cancer', level:'integration',
   stem:'Which development made K-Ras a druggable target?',
   options:['The approval of sotorasib in 2021 for non-small cell lung cancer','The approval of the first phosphodiesterase inhibitor','The discovery that Ras binds GTP rather than ATP','The finding that Ras is a heterotrimeric G protein'],
   answer:0,
   why:'K-Ras lacked an obvious binding pocket and was long considered undruggable. Sotorasib, approved in 2021, showed that a covalent inhibitor could exploit a specific mutant form.'},

  {id:'SIG-050', m:'m4', area:'Broken switches & cancer', level:'integration',
   stem:'A mutation leaves a G\u03b1 subunit unable to hydrolyze GTP. Which combination of changes is most likely?',
   options:['Adenylate cyclase stays active, cAMP rises, and PKA activity rises','Adenylate cyclase stays inactive, cAMP falls, and PKA activity falls','Adenylate cyclase stays active while cAMP falls and PKA activity rises','Epinephrine binding to the receptor is abolished and cAMP falls'],
   answer:0,
   why:'This is the GPCR version of the oncogenic Ras mutation. With hydrolysis blocked, G\u03b1 never releases the cyclase, so the cascade below it stays on regardless of whether ligand is present.'},

  {id:'SIG-051', m:'m4', area:'Signal termination', level:'application',
   stem:'Which termination mechanism operates in both the \u03b2-adrenergic pathway and the EGFR pathway?',
   options:['Hydrolysis of GTP by a G protein','Hydrolysis of cAMP by a phosphodiesterase','Cleavage of PIP\u2082 by phospholipase C','Export of the second messenger from the cell'],
   answer:0,
   why:'Both pathways carry a GTP switch \u2014 heterotrimeric G\u03b1 in one, small G protein Ras in the other \u2014 and both are switched off by hydrolysis. PDE activity is specific to the cyclic nucleotide pathway.'},

  {id:'SIG-052', m:'m4', area:'Broken switches & cancer', level:'integration',
   stem:'Why does loss of signal termination pose a greater risk in the EGFR pathway than in many other pathways?',
   options:['Its output drives cell proliferation, so continuous signaling promotes tumor growth','It is the only pathway that lacks a phosphatase-based off switch','Its second messenger cannot be metabolized once produced','It operates exclusively in cells that cannot undergo apoptosis'],
   answer:0,
   why:'What a pathway controls determines the cost of leaving it on. EGFR signaling ends in transcription of growth and division genes, so a stuck ON switch translates directly into uncontrolled proliferation.'}
];
