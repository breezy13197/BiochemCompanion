/* ============================================================
   BANK — Oxidative Phosphorylation
   Pure content. No DOM, no dependency on shared/ or on the page.
   Loaded by oxphos.html and, unchanged, by hub.html.

   Question IDs are permanent: OXP-001 … OXP-060 are never reused
   and never renumbered, even if a question is edited or retired.

   Every item follows the course question-writing standard:
   single best answer, positive stem, 3–5 homogeneous parallel
   options, plausible distractors, no absolute or vague terms,
   no "all/none of the above", and a teaching rationale in `why`.
   ============================================================ */
var TOPIC_ID    = 'oxphos';
var TOPIC_TITLE = 'Oxidative Phosphorylation';

/* ------------------------------------------------------------
   CHECKPOINTS — the in-section "Can you predict it?" questions.
   `answer` is an index into `options` BEFORE the engine shuffles.
   ------------------------------------------------------------ */
var CHECKPOINTS = {

  /* ---- Module 1 · Section 1 — redox and reduction potential ---- */
  c1a: {
    options: [
      'Reduction potential',
      'Molecular weight',
      'Lipid solubility',
      'Proton permeability'
    ],
    answer: 0,
    why: 'Electrons move spontaneously toward carriers with a higher (more positive) reduction potential. That is the property that rises step by step from NADH at about \u22120.32 V to oxygen at about +0.82 V, and it is what makes the whole chain energetically downhill.'
  },
  c1b: {
    options: [
      'It has the highest reduction potential in the chain',
      'It has the lowest reduction potential in the chain',
      'It binds protons more tightly than the carriers do',
      'It diffuses more slowly than the carriers do'
    ],
    answer: 0,
    why: 'Oxygen is the terminal electron acceptor because nothing in the chain has a higher reduction potential. Electrons have nowhere further to fall, so they end up in water.'
  },
  c1c: {
    options: [
      'It pumps protons across the inner membrane in a series of small steps',
      'It transfers a phosphate group from NADH directly to ADP',
      'It stores electrons inside the inner membrane until ADP arrives',
      'It raises the temperature of the matrix until ATP forms'
    ],
    answer: 0,
    why: 'Releasing all the energy of NADH plus oxygen at once would waste most of it as heat. The chain divides the drop into steps, and three of those steps drive proton pumping, which converts redox energy into a stored electrochemical gradient.'
  },

  /* ---- Module 1 · Section 2 — the components ---- */
  c2a: {
    options: [
      'Complexes I and II to complex III',
      'Complex III to complex IV',
      'Complex IV to oxygen',
      'Cytochrome c to complex III'
    ],
    answer: 0,
    why: 'Coenzyme Q (ubiquinone) is the collection point for both entry routes. Its lipophilic tail lets it diffuse within the inner membrane, picking up electrons from complex I or complex II and delivering them to complex III as QH\u2082.'
  },
  c2b: {
    options: [
      'A heme iron that cycles between Fe\u00B2\u207A and Fe\u00B3\u207A',
      'A flavin ring that binds two protons',
      'A lipid tail that anchors it in the membrane',
      'A nucleotide site that binds NADH'
    ],
    answer: 0,
    why: 'Cytochrome c is a small water-soluble protein that shuttles along the outer face of the inner membrane. Its heme iron accepts one electron (Fe\u00B3\u207A \u2192 Fe\u00B2\u207A) at complex III and gives it up at complex IV.'
  },
  c2c: {
    options: [
      'The citric acid cycle',
      'Glycolysis',
      'The pentose phosphate pathway',
      'Fatty acid synthesis'
    ],
    answer: 0,
    why: 'Succinate dehydrogenase is both complex II of the chain and step 6 of the citric acid cycle. It oxidizes succinate to fumarate and hands the electrons, held on tightly bound FAD, straight to coenzyme Q.'
  },

  /* ---- Module 1 · Section 3 — proton stoichiometry ---- */
  c3a: {
    options: [
      'It supports a smaller proton gradient than NADH does',
      'It supports a larger proton gradient than NADH does',
      'It delivers its electrons to cytochrome c directly',
      'It delivers its protons to the matrix directly'
    ],
    answer: 0,
    why: 'Complex II moves no protons. Electrons from FADH\u2082 skip the four protons that complex I would have pumped, so each FADH\u2082 builds a smaller gradient than each NADH \u2014 6 H\u207A versus 10 H\u207A.'
  },
  c3b: {
    options: ['10', '6', '8', '4'],
    answer: 0,
    why: 'Complex I contributes 4 H\u207A, complex III contributes 4 H\u207A, and complex IV contributes 2 H\u207A per pair of electrons, for a total of 10 H\u207A per mitochondrial NADH.'
  },

  /* ---- Module 2 · Section 1 — building the gradient ---- */
  c4a: {
    options: [
      'Lower pH and more positive charge',
      'Higher pH and more positive charge',
      'Lower pH and more negative charge',
      'Higher pH and more negative charge'
    ],
    answer: 0,
    why: 'Protons carry both charge and acidity. Pumping them out of the matrix leaves the intermembrane space at about pH 7.0 and positively charged relative to the matrix at about pH 7.8.'
  },
  c4b: {
    options: [
      'In the electrochemical gradient across the inner membrane',
      'In the reduced form of cytochrome c',
      'In the heme groups of complex IV',
      'In the phosphate bonds of coenzyme Q'
    ],
    answer: 0,
    why: 'This is the central idea of oxidative phosphorylation. The chain makes no ATP itself. It converts the redox energy of NADH into a proton motive force, and a separate machine spends that force on ATP.'
  },

  /* ---- Module 2 · Section 2 — coupling ---- */
  c5a: {
    options: [
      'It increases',
      'It decreases',
      'It stops within seconds',
      'It stays at the resting rate'
    ],
    answer: 0,
    why: 'A leaky membrane removes the back-pressure the chain works against, so electron transport and oxygen consumption speed up. The energy still leaves the chain, but it leaves as heat instead of ATP.'
  },
  c5b: {
    options: [
      'It becomes larger',
      'It becomes smaller',
      'It disappears',
      'It stays at the resting value'
    ],
    answer: 0,
    why: 'Blocking ATP synthase closes the main return route for protons. The chain keeps pumping into a space it can no longer drain, so the gradient rises until the pumps can no longer work against it \u2014 and then electron transport stops too.'
  },
  c5c: {
    options: [
      'Electron transport halts and the gradient dissipates',
      'Electron transport halts while the gradient grows',
      'Electron transport continues using cytochrome c as the acceptor',
      'Electron transport continues at a reduced rate'
    ],
    answer: 0,
    why: 'Without oxygen, complex IV has nowhere to put electrons, so the whole chain backs up and pumping stops. The existing gradient then leaks away, and ATP synthesis falls with it.'
  },

  /* ---- Module 3 · Section 1 — the machine ---- */
  c6a: {
    options: [
      'Conducting protons across the inner membrane',
      'Forming ATP from ADP and phosphate',
      'Binding NADH for oxidation',
      'Transporting ATP into the cytosol'
    ],
    answer: 0,
    why: 'F\u2080 is the membrane-embedded portion. Protons flowing through it turn its rotor, which is the mechanical input for everything that happens in F\u2081.'
  },
  c6b: {
    options: [
      'It links rotation in the membrane to conformational change in F\u2081',
      'It conducts protons from the intermembrane space to the matrix',
      'It binds ADP and phosphate before catalysis',
      'It anchors the enzyme to the outer membrane'
    ],
    answer: 0,
    why: 'The \u03B3 subunit is the drive shaft. It is asymmetric, so as it turns inside the F\u2081 head it pushes each \u03B2 subunit through its conformational cycle in turn.'
  },

  /* ---- Module 3 · Section 2 — binding change ---- */
  c7a: {
    options: [
      'Open, where ATP leaves the site',
      'Loose, where ADP and phosphate bind',
      'Tight, where a second ATP forms',
      'Loose, where ATP leaves the site'
    ],
    answer: 0,
    why: 'The cycle runs L \u2192 T \u2192 O. A site holding newly formed ATP is in the tight state; the next 120\u00B0 turn opens it and the ATP is released.'
  },
  c7b: {
    options: ['1', '2', '3', '4'],
    answer: 0,
    why: 'Three \u03B2 subunits each release one ATP per full turn, so a 360\u00B0 rotation yields 3 ATP and each 120\u00B0 step yields 1.'
  },
  c7c: {
    options: ['2.5', '1.5', '4.0', '10'],
    answer: 0,
    why: 'Ten protons pumped per NADH, divided by roughly four protons per ATP, gives about 2.5 ATP. The textbook yield is arithmetic, not a number to memorize on its own.'
  },

  /* ---- Module 4 · Section 1 — yields ---- */
  c8a: {
    options: ['2.5 ATP', '1.5 ATP', '3.5 ATP', '1.0 ATP'],
    answer: 0,
    why: 'NADH oxidized inside the matrix drives 10 H\u207A across the membrane, which supports about 2.5 ATP at roughly 4 H\u207A per ATP.'
  },
  c8b: {
    options: ['1.5 ATP', '2.5 ATP', '3.0 ATP', '0.5 ATP'],
    answer: 0,
    why: 'The glycerol-3-phosphate shuttle passes electrons to FAD, so they reach coenzyme Q without passing through complex I. Six protons instead of ten means about 1.5 ATP.'
  },

  /* ---- Module 4 · Section 2 — shuttles ---- */
  c9a: {
    options: ['Complex I', 'Complex II', 'Complex III', 'Complex IV'],
    answer: 0,
    why: 'Entering at coenzyme Q means complex I is bypassed, and with it the 4 H\u207A that complex I would have pumped. That is the whole reason the yield drops from 2.5 to 1.5.'
  },
  c9b: {
    options: ['Complex I', 'Complex II', 'Coenzyme Q', 'Cytochrome c'],
    answer: 0,
    why: 'The malate-aspartate shuttle rebuilds NADH inside the matrix rather than handing electrons to FAD. Matrix NADH enters at complex I, so the full 10 H\u207A and the 2.5 ATP yield are preserved.'
  },
  c9c: {
    options: ['32 ATP', '30 ATP', '36 ATP', '26 ATP'],
    answer: 0,
    why: 'Liver relies on the malate-aspartate shuttle, so each of the two cytosolic NADH is worth 2.5 ATP rather than 1.5. That difference of 2 ATP is what separates 32 from 30.'
  },

  /* ---- Module 5 · Section 1 — inhibitor sites ---- */
  c10a: {
    options: [
      'Transfer of electrons to oxygen',
      'Transfer of electrons to coenzyme Q',
      'Transfer of protons through ATP synthase',
      'Transfer of NADH into the matrix'
    ],
    answer: 0,
    why: 'Cyanide binds the heme iron of cytochrome c oxidase (complex IV), the site where electrons are handed to oxygen. Blocking the last step backs up every step before it.'
  },
  c10b: {
    options: [
      'FADH\u2082 through complex II',
      'NADH through complex I',
      'Cytochrome c through complex III',
      'Oxygen through complex IV'
    ],
    answer: 0,
    why: 'Complex II is a separate entry point that feeds coenzyme Q directly, so succinate-driven respiration survives a complex I block. This selective pattern is exactly how a complex I lesion is identified experimentally.'
  },

  /* ---- Module 5 · Section 2 — uncouplers and drugs ---- */
  c11a: {
    options: [
      'It rises',
      'It falls',
      'It stays at baseline',
      'It falls to zero'
    ],
    answer: 0,
    why: 'An uncoupler lets protons return without doing work on ATP synthase, so the energy in the gradient is released as heat. In the 1930s that effect made DNP a weight-loss drug, and fatal hyperthermia is what took it off the market.'
  },
  c11b: {
    options: [
      'Generating heat',
      'Generating ATP',
      'Storing electrons',
      'Storing protons'
    ],
    answer: 0,
    why: 'UCP-1 (thermogenin) is a built-in, regulated uncoupler in brown adipose tissue. Infants and hibernating mammals use it for non-shivering thermogenesis.'
  },
  c11c: {
    options: [
      'AMP-activated protein kinase activity',
      'Glycogen synthase activity',
      'Cytochrome c oxidase activity',
      'Malate dehydrogenase activity'
    ],
    answer: 0,
    why: 'Partial complex I inhibition lowers hepatic ATP and raises AMP, which activates AMPK. The downstream result is less gluconeogenesis and more glucose uptake in muscle \u2014 the basis of metformin\u2019s effect on blood glucose.'
  },

  /* ---- Mastery Lab — integrated diagnosis ---- */
  c12a: {
    options: [
      'An uncoupler',
      'A complex IV inhibitor',
      'An ATP synthase inhibitor',
      'A complex I inhibitor'
    ],
    answer: 0,
    why: 'Fast electron transport with a collapsed gradient and no ATP is the signature of uncoupling: the chain runs freely because the protons it pumps leak straight back in.'
  },
  c12b: {
    options: [
      'An ATP synthase inhibitor',
      'An uncoupler',
      'A complex II inhibitor',
      'A shuttle inhibitor'
    ],
    answer: 0,
    why: 'A high gradient with falling oxygen consumption means protons are being pumped but cannot return. Blocking ATP synthase creates exactly that back-pressure, and the chain stalls against it.'
  },
  c12c: {
    options: ['Complex I', 'Complex III', 'Complex IV', 'ATP synthase'],
    answer: 0,
    why: 'Only the NADH entry route is affected, and succinate feeds coenzyme Q through complex II. A block downstream of Q would stop both substrates.'
  }
};

/* ------------------------------------------------------------
   FLASHCARDS — retrieval practice, shared with the hub deck.
   ------------------------------------------------------------ */
var CARDS = [
  {id:'OXP-CARD-01', t:'Oxidative phosphorylation',           d:'The two-phase process that uses electrons from NADH and FADH\u2082 to build a proton gradient, then spends that gradient on ATP.'},
  {id:'OXP-CARD-02', t:'Complex I',                            d:'NADH-Q oxidoreductase. Oxidizes NADH, reduces coenzyme Q, and pumps 4 H\u207A per two electrons.'},
  {id:'OXP-CARD-03', t:'Complex II',                           d:'Succinate dehydrogenase. Passes electrons from FADH\u2082 to coenzyme Q and pumps no protons. Also step 6 of the citric acid cycle.'},
  {id:'OXP-CARD-04', t:'Complex III',                          d:'Q-cytochrome c oxidoreductase. Moves electrons from QH\u2082 to cytochrome c and pumps 4 H\u207A per two electrons.'},
  {id:'OXP-CARD-05', t:'Complex IV',                           d:'Cytochrome c oxidase. Delivers electrons to O\u2082 to form water and pumps 2 H\u207A per two electrons.'},
  {id:'OXP-CARD-06', t:'Coenzyme Q (ubiquinone)',              d:'Lipophilic mobile carrier inside the inner membrane. Collects electrons from complexes I and II and delivers them to complex III.'},
  {id:'OXP-CARD-07', t:'Cytochrome c',                         d:'Small water-soluble heme protein on the outer face of the inner membrane. Carries one electron at a time from complex III to complex IV.'},
  {id:'OXP-CARD-08', t:'H\u207A pumped per mitochondrial NADH', d:'10 \u2014 four at complex I, four at complex III, two at complex IV.'},
  {id:'OXP-CARD-09', t:'H\u207A pumped per FADH\u2082',          d:'6 \u2014 complex II pumps none, so only complexes III and IV contribute.'},
  {id:'OXP-CARD-10', t:'Reduction potential',                  d:'A measure of a carrier\u2019s tendency to accept electrons. Electrons flow from low to high reduction potential, ending at oxygen.'},
  {id:'OXP-CARD-11', t:'Proton motive force',                  d:'The stored energy of the H\u207A gradient: a pH difference plus a charge difference across the inner membrane.'},
  {id:'OXP-CARD-12', t:'Matrix and IMS pH',                    d:'Matrix about 7.8; intermembrane space about 7.0. The IMS is also positive relative to the matrix.'},
  {id:'OXP-CARD-13', t:'Coupling',                             d:'Electron transport and ATP synthesis are separate processes joined by the gradient. Inhibiting either one eventually stops the other.'},
  {id:'OXP-CARD-14', t:'F\u2080 subunit',                       d:'Membrane-embedded proton channel and rotor of ATP synthase.'},
  {id:'OXP-CARD-15', t:'F\u2081 subunit',                       d:'Matrix-facing head of ATP synthase. Its three \u03B2 subunits carry out ATP synthesis.'},
  {id:'OXP-CARD-16', t:'\u03B3 subunit',                        d:'Asymmetric central shaft that couples F\u2080 rotation to conformational change in the F\u2081 \u03B2 subunits.'},
  {id:'OXP-CARD-17', t:'O, L, T states',                       d:'Open releases ATP and takes up ADP + P\u1D62; Loose binds ADP + P\u1D62; Tight forms ATP. Each 120\u00B0 turn advances every site one step.'},
  {id:'OXP-CARD-18', t:'ATP per rotation',                     d:'3 ATP per 360\u00B0, at roughly 4 H\u207A per ATP.'},
  {id:'OXP-CARD-19', t:'Glycerol-3-phosphate shuttle',         d:'Skeletal muscle and brain. Cytosolic NADH \u2192 DHAP \u2192 G3P \u2192 FADH\u2082 \u2192 CoQ. Yields 1.5 ATP per cytosolic NADH.'},
  {id:'OXP-CARD-20', t:'Malate-aspartate shuttle',             d:'Liver, heart, kidney. Regenerates NADH inside the matrix, which enters at complex I. Yields 2.5 ATP per cytosolic NADH.'},
  {id:'OXP-CARD-21', t:'ATP per glucose',                      d:'30 with the glycerol-3-phosphate shuttle, 32 with the malate-aspartate shuttle.'},
  {id:'OXP-CARD-22', t:'ETC inhibitor sites',                  d:'Rotenone \u2192 complex I; malonate \u2192 complex II; antimycin A \u2192 complex III; cyanide \u2192 complex IV; oligomycin \u2192 ATP synthase.'},
  {id:'OXP-CARD-23', t:'Uncoupler',                            d:'A compound that carries H\u207A back across the inner membrane, bypassing ATP synthase. Electron transport speeds up, ATP falls, heat rises. Example: 2,4-dinitrophenol.'},
  {id:'OXP-CARD-24', t:'UCP-1 (thermogenin)',                  d:'Regulated proton channel in brown adipose tissue that uncouples on purpose to generate heat.'},
  {id:'OXP-CARD-25', t:'Metformin',                            d:'Inhibits complex I and glycerol-3-phosphate dehydrogenase, lowering hepatic ATP and activating AMPK.'},
  {id:'OXP-CARD-26', t:'Anaerobic yield',                      d:'2 ATP per glucose from glycolysis alone, with lactate and H\u207A as products.'}
];

/* ------------------------------------------------------------
   POOL — module quizzes and the mastery exam draw from here.
     m     : which quiz ('m1'…'m5', 'lab')
     area  : concept area, must match a key in AREA_SECTION
     level : 'concept' | 'application' | 'integration'
   ------------------------------------------------------------ */
var POOL = [

  /* ============ AREA: Electron flow and ETC complexes (m1) ============ */
  {id:'OXP-001', m:'m1', area:'Electron flow and ETC complexes', level:'concept',
   stem:'Which complex accepts electrons from FADH\u2082?',
   options:['Succinate dehydrogenase (complex II)','NADH-Q oxidoreductase (complex I)','Q-cytochrome c oxidoreductase (complex III)','Cytochrome c oxidase (complex IV)'],
   answer:0,
   why:'FADH\u2082 generated in the citric acid cycle stays bound to succinate dehydrogenase, which is complex II. Complex I is reserved for NADH.'},

  {id:'OXP-002', m:'m1', area:'Electron flow and ETC complexes', level:'concept',
   stem:'Which molecule serves as the terminal electron acceptor of the chain?',
   options:['Molecular oxygen','Cytochrome c','Coenzyme Q','NAD\u207A'],
   answer:0,
   why:'Oxygen has the highest reduction potential in the system, so it takes the electrons at complex IV and is reduced to water.'},

  {id:'OXP-003', m:'m1', area:'Electron flow and ETC complexes', level:'concept',
   stem:'Which carrier moves electrons through the interior of the inner membrane?',
   options:['Coenzyme Q','Cytochrome c','NADH','Oxaloacetate'],
   answer:0,
   why:'Coenzyme Q is highly lipophilic, so it diffuses within the membrane between complexes I or II and complex III. Cytochrome c travels on the membrane surface instead.'},

  {id:'OXP-004', m:'m1', area:'Electron flow and ETC complexes', level:'application',
   stem:'A carrier accepts one electron at a time by cycling its iron between Fe\u00B3\u207A and Fe\u00B2\u207A on the outer face of the inner membrane. Which carrier fits this description?',
   options:['Cytochrome c','Coenzyme Q','FAD in complex II','NAD\u207A in the matrix'],
   answer:0,
   why:'Cytochrome c is a small water-soluble heme protein in the intermembrane space, carrying single electrons from complex III to complex IV.'},

  {id:'OXP-005', m:'m1', area:'Electron flow and ETC complexes', level:'application',
   stem:'Electrons move spontaneously from one carrier to the next in the chain. Which property of the accepting carrier makes each transfer favorable?',
   options:['A higher reduction potential than the donor','A lower reduction potential than the donor','A larger molecular mass than the donor','A greater proton permeability than the donor'],
   answer:0,
   why:'Each transfer runs down an energy gradient because the acceptor holds electrons more tightly. The sum of those steps is the large negative \u0394G of NADH oxidation by oxygen.'},

  {id:'OXP-006', m:'m1', area:'Electron flow and ETC complexes', level:'application',
   stem:'Complex III receives electrons from a reduced carrier. Which molecule delivers them?',
   options:['QH\u2082','Cytochrome c','NADH','Succinate'],
   answer:0,
   why:'Ubiquinol (QH\u2082) is the reduced form of coenzyme Q. Complex III oxidizes QH\u2082 and reduces two molecules of cytochrome c.'},

  {id:'OXP-007', m:'m1', area:'Electron flow and ETC complexes', level:'application',
   stem:'Complex IV consumes protons from the matrix in addition to pumping them. What are those consumed protons used for?',
   options:['Forming water from reduced oxygen','Reducing coenzyme Q to QH\u2082','Reducing cytochrome c to Fe\u00B2\u207A','Phosphorylating ADP at the F\u2081 head'],
   answer:0,
   why:'Complex IV draws 8 H\u207A from the matrix per O\u2082: four are chemically incorporated into two molecules of water, and four are pumped to the intermembrane space.'},

  {id:'OXP-008', m:'m1', area:'Electron flow and ETC complexes', level:'concept',
   stem:'How many protons reach the intermembrane space per pair of electrons passing through complex III?',
   options:['4','2','0','8'],
   answer:0,
   why:'Complex III contributes 4 H\u207A per two electrons, the same as complex I. Complex IV contributes 2 and complex II contributes none.'},

  {id:'OXP-009', m:'m1', area:'Electron flow and ETC complexes', level:'integration',
   stem:'A mitochondrial electron source drives 6 translocated H\u207A per pair of electrons. Through which complex did those electrons enter?',
   options:['Complex II','Complex I','Complex III','Complex IV'],
   answer:0,
   why:'Six protons means complex I was skipped: 4 from complex III plus 2 from complex IV. Entry at complex II, which pumps nothing, is what produces that total.'},

  {id:'OXP-010', m:'m1', area:'Electron flow and ETC complexes', level:'integration',
   stem:'Releasing the energy of NADH oxidation in several small steps rather than one large one gives the mitochondrion which advantage?',
   options:['More of the energy is captured as a proton gradient','More of the energy is captured as heat','Electrons reach oxygen at a slower rate','Electrons bypass the need for a terminal acceptor'],
   answer:0,
   why:'A single large drop would be dissipated. Splitting it lets three separate complexes each do work against the membrane, storing energy instead of losing it.'},

  /* ============ AREA: Proton motive force and coupling (m2) ============ */
  {id:'OXP-011', m:'m2', area:'Proton motive force and coupling', level:'concept',
   stem:'Which description matches the mitochondrial matrix during active electron transport?',
   options:['Higher pH and more negative charge','Lower pH and more negative charge','Higher pH and more positive charge','Lower pH and more positive charge'],
   answer:0,
   why:'Protons leave the matrix, so the matrix becomes less acidic (about pH 7.8) and more negative. The intermembrane space becomes the acidic, positive compartment.'},

  {id:'OXP-012', m:'m2', area:'Proton motive force and coupling', level:'concept',
   stem:'Which property of the inner mitochondrial membrane makes the proton gradient possible?',
   options:['It resists free diffusion of H\u207A','It resists free diffusion of O\u2082','It allows free diffusion of ATP','It allows free diffusion of NADH'],
   answer:0,
   why:'A gradient can exist only across a barrier. The inner membrane blocks free movement of H\u207A, and of ATP and ADP, which is why dedicated transporters exist for those.'},

  {id:'OXP-013', m:'m2', area:'Proton motive force and coupling', level:'application',
   stem:'After electrons pass from NADH to oxygen, where is most of the released energy held before ATP is made?',
   options:['In the electrochemical gradient across the inner membrane','In the reduced heme groups of complex IV','In the covalent bonds of ubiquinol','In the phosphate bonds of GTP'],
   answer:0,
   why:'The chain performs no phosphorylation. Its product is stored potential energy in the form of a proton gradient, which ATP synthase later spends.'},

  {id:'OXP-014', m:'m2', area:'Proton motive force and coupling', level:'application',
   stem:'The proton motive force has two components. Which pair describes them?',
   options:['A pH difference and a membrane potential','A pH difference and an oxygen gradient','A membrane potential and an ATP gradient','An oxygen gradient and an ADP gradient'],
   answer:0,
   why:'Protons carry both a proton and a charge, so moving them creates a chemical gradient (\u0394pH) and an electrical one (\u0394\u03C8). Both contribute to the driving force on ATP synthase.'},

  {id:'OXP-015', m:'m2', area:'Proton motive force and coupling', level:'application',
   stem:'Isolated mitochondria are supplied with substrate and oxygen but no ADP. What happens to electron transport?',
   options:['It slows as the gradient builds toward its maximum','It accelerates as the gradient builds toward its maximum','It continues unchanged because oxygen is present','It stops immediately because substrate cannot bind'],
   answer:0,
   why:'With no ADP, ATP synthase has nothing to make, so protons stop returning. The gradient rises until the pumps can no longer work against it, and respiration slows to a trickle. This is respiratory control.'},

  {id:'OXP-016', m:'m2', area:'Proton motive force and coupling', level:'integration',
   stem:'Electron transport and ATP synthesis are described as coupled. Which observation best supports that description?',
   options:['Blocking ATP synthase eventually stops oxygen consumption','Blocking ATP synthase raises oxygen consumption steadily','Blocking electron transport raises the proton gradient','Blocking electron transport raises ATP synthesis'],
   answer:0,
   why:'The two processes are physically separate but share the gradient. Blocking the consumer backs up the producer, which is exactly what coupling means.'},

  {id:'OXP-017', m:'m2', area:'Proton motive force and coupling', level:'integration',
   stem:'A mitochondrial preparation shows a large proton gradient, minimal ATP output, and low oxygen consumption. Which disturbance fits these findings?',
   options:['ATP synthase is blocked','The membrane has become leaky to protons','Complex I is blocked','Oxygen has been removed'],
   answer:0,
   why:'A large gradient rules out both a leak and a block upstream in the chain, since either would lower it. Protons are being pumped but cannot return, so the consumer is the problem.'},

  {id:'OXP-018', m:'m2', area:'Proton motive force and coupling', level:'integration',
   stem:'A student proposes that the electron transport chain phosphorylates ADP directly at complex IV. Which finding argues against that proposal?',
   options:['ATP synthesis stops when the membrane becomes leaky, while electron transport continues','ATP synthesis stops when oxygen is removed, and electron transport stops as well','Electron transport slows when ADP is unavailable','Complex IV consumes protons from the matrix'],
   answer:0,
   why:'If the chain made ATP directly, collapsing the gradient would not matter. That uncoupling separates the two processes is the classic evidence that a gradient is the intermediate.'},

  /* ============ AREA: ATP synthase mechanism (m3) ============ */
  {id:'OXP-019', m:'m3', area:'ATP synthase mechanism', level:'concept',
   stem:'Which portion of ATP synthase forms the channel for protons returning to the matrix?',
   options:['F\u2080','F\u2081','The \u03B3 subunit','The \u03B2 subunits'],
   answer:0,
   why:'F\u2080 is embedded in the inner membrane and conducts protons. F\u2081 sits in the matrix and performs catalysis.'},

  {id:'OXP-020', m:'m3', area:'ATP synthase mechanism', level:'concept',
   stem:'Which state of a \u03B2 subunit releases ATP and takes up ADP and phosphate?',
   options:['Open','Loose','Tight','Bound'],
   answer:0,
   why:'In the open state the site has low affinity, so ATP leaves and fresh substrate enters. Loose binds substrate; tight carries out the chemistry.'},

  {id:'OXP-021', m:'m3', area:'ATP synthase mechanism', level:'concept',
   stem:'How many molecules of ATP are produced per complete 360\u00B0 rotation of the \u03B3 subunit?',
   options:['3','1','2','4'],
   answer:0,
   why:'Each of the three \u03B2 subunits passes through the full O \u2192 L \u2192 T cycle once per revolution, releasing one ATP each.'},

  {id:'OXP-022', m:'m3', area:'ATP synthase mechanism', level:'application',
   stem:'What is the immediate mechanical consequence of proton flow through F\u2080?',
   options:['Rotation of the \u03B3 subunit within the F\u2081 head','Phosphorylation of the \u03B3 subunit by ATP','Release of cytochrome c into the cytosol','Transport of ADP into the intermembrane space'],
   answer:0,
   why:'Proton flow turns the membrane rotor, and the \u03B3 shaft turns with it. That rotation, not the protons themselves, is what changes the \u03B2 subunit conformations.'},

  {id:'OXP-023', m:'m3', area:'ATP synthase mechanism', level:'application',
   stem:'A \u03B2 subunit has just bound ADP and phosphate without converting them. Which state will that site occupy after the next 120\u00B0 turn?',
   options:['Tight','Open','Loose','Empty'],
   answer:0,
   why:'The order is L \u2192 T \u2192 O. A site that has just bound substrate in the loose state moves to the tight state, where the phosphoanhydride bond forms.'},

  {id:'OXP-024', m:'m3', area:'ATP synthase mechanism', level:'application',
   stem:'Roughly how many protons pass through ATP synthase for each ATP formed?',
   options:['4','1','8','12'],
   answer:0,
   why:'About 4 H\u207A per ATP is the working figure. It is what turns 10 H\u207A per NADH into roughly 2.5 ATP.'},

  {id:'OXP-025', m:'m3', area:'ATP synthase mechanism', level:'integration',
   stem:'Which feature of the \u03B3 subunit explains why the three \u03B2 subunits are in different states at the same moment?',
   options:['Its asymmetric shape contacts each \u03B2 subunit differently','Its heme group oxidizes each \u03B2 subunit in turn','Its proton channel opens toward one \u03B2 subunit at a time','Its phosphate site binds one \u03B2 subunit at a time'],
   answer:0,
   why:'The \u03B3 shaft is a bent, asymmetric rod. Its orientation forces one site open, one loose, and one tight, and turning it advances all three together.'},

  {id:'OXP-026', m:'m3', area:'ATP synthase mechanism', level:'integration',
   stem:'A mutation locks the \u03B3 subunit so it cannot rotate, while F\u2080 still conducts protons. What is the expected result?',
   options:['Protons return to the matrix without supporting ATP synthesis','Protons accumulate in the intermembrane space and ATP synthesis rises','ATP synthesis continues at the normal rate','Electron transport stops immediately at complex I'],
   answer:0,
   why:'Without rotation the \u03B2 subunits cannot cycle, so the proton flux is uncoupled from catalysis. The enzyme becomes, in effect, a proton leak.'},

  /* ============ AREA: Shuttles and ATP yield (m4) ============ */
  {id:'OXP-027', m:'m4', area:'Shuttles and ATP yield', level:'concept',
   stem:'How much ATP does one molecule of mitochondrial NADH support?',
   options:['2.5','1.5','3.5','1.0'],
   answer:0,
   why:'Ten protons pumped, at roughly four per ATP, gives about 2.5 ATP per matrix NADH.'},

  {id:'OXP-028', m:'m4', area:'Shuttles and ATP yield', level:'concept',
   stem:'How much ATP does one molecule of FADH\u2082 support?',
   options:['1.5','2.5','2.0','0.5'],
   answer:0,
   why:'Entry at complex II skips complex I, so six protons are pumped instead of ten, which supports about 1.5 ATP.'},

  {id:'OXP-029', m:'m4', area:'Shuttles and ATP yield', level:'concept',
   stem:'Which shuttle predominates in skeletal muscle and brain?',
   options:['The glycerol-3-phosphate shuttle','The malate-aspartate shuttle','The citrate shuttle','The carnitine shuttle'],
   answer:0,
   why:'Muscle and brain favor the faster glycerol-3-phosphate shuttle, which trades ATP yield for speed. Liver, heart, and kidney favor the malate-aspartate shuttle.'},

  {id:'OXP-030', m:'m4', area:'Shuttles and ATP yield', level:'application',
   stem:'Why can cytosolic NADH not deliver its electrons directly to complex I?',
   options:['The inner membrane blocks its passage into the matrix','The cytosol lacks the oxygen needed for the transfer','Complex I accepts electrons from FADH\u2082 rather than NADH','Cytosolic NADH is oxidized by cytochrome c first'],
   answer:0,
   why:'NADH cannot cross the inner membrane, so its electrons must be handed to a carrier that can. That constraint is the entire reason shuttles exist.'},

  {id:'OXP-031', m:'m4', area:'Shuttles and ATP yield', level:'application',
   stem:'In the glycerol-3-phosphate shuttle, which molecule is reduced by cytosolic NADH?',
   options:['Dihydroxyacetone phosphate','Oxaloacetate','\u03B1-Ketoglutarate','Fumarate'],
   answer:0,
   why:'Cytosolic NADH reduces DHAP to glycerol 3-phosphate. G3P is then oxidized at the outer face of the inner membrane, loading the electrons onto FAD.'},

  {id:'OXP-032', m:'m4', area:'Shuttles and ATP yield', level:'application',
   stem:'In the malate-aspartate shuttle, which molecule carries the electrons across the inner membrane?',
   options:['Malate','Glycerol 3-phosphate','Cytochrome c','Pyruvate'],
   answer:0,
   why:'Oxaloacetate is reduced to malate in the cytosol, malate is exchanged into the matrix, and matrix malate dehydrogenase regenerates NADH there.'},

  {id:'OXP-033', m:'m4', area:'Shuttles and ATP yield', level:'application',
   stem:'Complete oxidation of one glucose in skeletal muscle yields approximately how much ATP?',
   options:['30','32','36','26'],
   answer:0,
   why:'Muscle uses the glycerol-3-phosphate shuttle, so the two cytosolic NADH are worth 1.5 each rather than 2.5. That lowers the total from 32 to 30.'},

  {id:'OXP-034', m:'m4', area:'Shuttles and ATP yield', level:'integration',
   stem:'The same glucose molecule yields 30 ATP in one tissue and 32 in another. Which factor accounts for the difference?',
   options:['The shuttle used for cytosolic NADH','The number of NADH produced in the citric acid cycle','The number of ATP produced during glycolysis','The proton stoichiometry of complex IV'],
   answer:0,
   why:'Everything upstream is identical. Only the fate of the two glycolytic NADH differs, and 2 \u00D7 1 ATP is exactly the 2 ATP gap between the two totals.'},

  {id:'OXP-035', m:'m4', area:'Shuttles and ATP yield', level:'integration',
   stem:'A tissue switches from the malate-aspartate shuttle to the glycerol-3-phosphate shuttle. Which change in the proton gradient explains the lower ATP yield?',
   options:['Four fewer protons are pumped per cytosolic NADH','Four more protons are consumed per cytosolic NADH','Two fewer protons are pumped per cytosolic NADH','Two more protons leak back per cytosolic NADH'],
   answer:0,
   why:'Bypassing complex I costs the 4 H\u207A it would have pumped. At roughly 4 H\u207A per ATP, that is the missing 1 ATP per cytosolic NADH.'},

  {id:'OXP-036', m:'m4', area:'Shuttles and ATP yield', level:'integration',
   stem:'Complete oxidation of glucose delivers 10 NADH and 2 FADH\u2082 to the mitochondrion, of which 2 NADH arise in the cytosol. Which calculation gives the yield in liver?',
   options:['(8 \u00D7 2.5) + (2 \u00D7 1.5) + (2 \u00D7 2.5) + 4','(8 \u00D7 1.5) + (2 \u00D7 2.5) + (2 \u00D7 1.5) + 4','(10 \u00D7 2.5) + (2 \u00D7 1.5) + 4','(10 \u00D7 1.5) + (2 \u00D7 2.5) + 4'],
   answer:0,
   why:'Eight matrix NADH at 2.5, two FADH\u2082 at 1.5, two cytosolic NADH at 2.5 through the malate-aspartate shuttle, plus 4 ATP made by substrate-level phosphorylation: 20 + 3 + 5 + 4 = 32.'},

  /* ============ AREA: Inhibitors and uncouplers (m5) ============ */
  {id:'OXP-037', m:'m5', area:'Inhibitors and uncouplers', level:'concept',
   stem:'Which complex does rotenone inhibit?',
   options:['Complex I','Complex II','Complex III','Complex IV'],
   answer:0,
   why:'Rotenone, an insecticide, blocks electron transfer from complex I to coenzyme Q. Succinate-driven respiration through complex II is unaffected.'},

  {id:'OXP-038', m:'m5', area:'Inhibitors and uncouplers', level:'concept',
   stem:'Which compound inhibits succinate dehydrogenase by competing with its substrate?',
   options:['Malonate','Rotenone','Antimycin A','Oligomycin'],
   answer:0,
   why:'Malonate resembles succinate closely enough to occupy the active site of complex II without being oxidized, the classic example of competitive inhibition.'},

  {id:'OXP-039', m:'m5', area:'Inhibitors and uncouplers', level:'concept',
   stem:'Which compound blocks ATP synthase directly?',
   options:['Oligomycin','Antimycin A','Cyanide','Rotenone'],
   answer:0,
   why:'Oligomycin blocks the F\u2080 proton channel, so protons cannot return through the enzyme and ATP synthesis stops.'},

  {id:'OXP-040', m:'m5', area:'Inhibitors and uncouplers', level:'concept',
   stem:'Where does cyanide act within oxidative phosphorylation?',
   options:['The heme iron of cytochrome c oxidase','The flavin site of complex I','The quinone site of complex III','The proton channel of F\u2080'],
   answer:0,
   why:'Cyanide binds the iron in complex IV and prevents oxygen from being reduced. Electron transport backs up and ATP production fails.'},

  {id:'OXP-041', m:'m5', area:'Inhibitors and uncouplers', level:'application',
   stem:'Antimycin A is added to respiring mitochondria. Which carrier accumulates in its reduced form?',
   options:['Coenzyme Q','Cytochrome c','Oxygen','NAD\u207A'],
   answer:0,
   why:'Antimycin A blocks complex III, so electrons stack up on everything upstream. QH\u2082 accumulates while cytochrome c downstream stays oxidized.'},

  {id:'OXP-042', m:'m5', area:'Inhibitors and uncouplers', level:'application',
   stem:'Which change follows addition of an uncoupler to actively respiring mitochondria?',
   options:['Oxygen consumption rises while ATP synthesis falls','Oxygen consumption falls while ATP synthesis rises','Both oxygen consumption and ATP synthesis rise','Both oxygen consumption and ATP synthesis fall'],
   answer:0,
   why:'Removing the back-pressure lets the chain run at full speed, but the returning protons do no work on ATP synthase, so the energy is lost as heat.'},

  {id:'OXP-043', m:'m5', area:'Inhibitors and uncouplers', level:'application',
   stem:'Why was 2,4-dinitrophenol abandoned as a weight-loss agent?',
   options:['It caused dangerous elevations in body temperature','It caused irreversible inhibition of complex IV','It caused accumulation of lactate in the liver','It caused loss of cytochrome c from the mitochondrion'],
   answer:0,
   why:'DNP shuttles protons across the inner membrane, and the energy released appears as heat. Fatal hyperthermia is the direct extension of its intended effect.'},

  {id:'OXP-044', m:'m5', area:'Inhibitors and uncouplers', level:'application',
   stem:'What is the physiological role of UCP-1 in brown adipose tissue?',
   options:['Producing heat by allowing regulated proton leak','Producing ATP at a higher rate than F\u2080F\u2081','Storing protons within the inner membrane','Transporting fatty acids into the matrix'],
   answer:0,
   why:'Thermogenin is a controlled, physiological uncoupler. Infants and hibernating mammals depend on it for non-shivering thermogenesis.'},

  {id:'OXP-045', m:'m5', area:'Inhibitors and uncouplers', level:'application',
   stem:'Which pair of targets is inhibited by metformin?',
   options:['Complex I and glycerol-3-phosphate dehydrogenase','Complex II and malate dehydrogenase','Complex IV and ATP synthase','Complex III and cytochrome c'],
   answer:0,
   why:'Both targets sit in oxidative phosphorylation. Inhibiting them lowers hepatic ATP, raises AMP, and activates AMPK, which reduces gluconeogenesis.'},

  {id:'OXP-046', m:'m5', area:'Inhibitors and uncouplers', level:'integration',
   stem:'Respiration in isolated mitochondria stops after rotenone but resumes when succinate is added. Which conclusion does this support?',
   options:['Complex II provides an entry point independent of complex I','Complex II transfers electrons directly to cytochrome c','Rotenone acts as an uncoupler rather than an inhibitor','Succinate restores the activity of complex I'],
   answer:0,
   why:'Succinate feeds electrons to coenzyme Q through complex II, downstream of the block. This rescue experiment is how a complex I lesion is localized.'},

  {id:'OXP-047', m:'m5', area:'Inhibitors and uncouplers', level:'integration',
   stem:'Cells treated with oligomycin show a sharp rise in the proton gradient followed by a fall in oxygen consumption. Which principle does this sequence illustrate?',
   options:['Electron transport and ATP synthesis are coupled through the gradient','Electron transport requires ATP as a substrate','Oxygen consumption depends on cytosolic NADH supply','ATP synthase pumps protons out of the matrix'],
   answer:0,
   why:'Blocking the consumer raises the gradient, and the raised gradient is what eventually stalls the producer. Neither process directly touches the other.'},

  {id:'OXP-048', m:'m5', area:'Inhibitors and uncouplers', level:'integration',
   stem:'A patient exposed to a toxin shows normal blood oxygen but tissues that cannot use it, along with lactic acidosis. Which mechanism fits this presentation?',
   options:['Inhibition of cytochrome c oxidase','Inhibition of ATP synthase alone','Uncoupling of the inner membrane','Loss of the malate-aspartate shuttle'],
   answer:0,
   why:'Cyanide leaves oxygen delivery intact but blocks its use at complex IV. Cells fall back on glycolysis, which generates lactate and hydrogen ions.'},

  /* ============ AREA: Integrated OXPHOS reasoning (lab) ============ */
  {id:'OXP-049', m:'lab', area:'Integrated OXPHOS reasoning', level:'integration',
   stem:'Mitochondrial ATP production falls sharply, the proton gradient collapses, and electron transport continues rapidly. Which disruption explains these findings?',
   options:['A compound that carries protons across the inner membrane','A compound that binds the heme iron of complex IV','A compound that blocks the F\u2080 proton channel','A compound that competes with succinate at complex II'],
   answer:0,
   why:'Fast electron transport with no gradient and no ATP is the definition of uncoupling. Any inhibitor would slow the chain rather than speed it up.'},

  {id:'OXP-050', m:'lab', area:'Integrated OXPHOS reasoning', level:'integration',
   stem:'Electrons from NADH can no longer enter the chain, while FADH\u2082-linked transfer continues. Which site is affected?',
   options:['Complex I','Complex III','Complex IV','ATP synthase'],
   answer:0,
   why:'The two entry points are independent. A block that spares succinate-driven respiration has to lie upstream of coenzyme Q on the NADH side.'},

  {id:'OXP-051', m:'lab', area:'Integrated OXPHOS reasoning', level:'application',
   stem:'A tissue sample shows high heat production, low ATP output, and elevated oxygen consumption. Which tissue feature best explains this profile?',
   options:['Abundant UCP-1 in the inner membrane','Abundant ATP synthase in the inner membrane','A high ratio of complex I to complex II','A high rate of malate-aspartate shuttling'],
   answer:0,
   why:'This is the normal working state of brown adipose tissue. UCP-1 provides a regulated proton return path that produces heat rather than ATP.'},

  {id:'OXP-052', m:'lab', area:'Integrated OXPHOS reasoning', level:'integration',
   stem:'Adding ADP to substrate-fed mitochondria increases oxygen consumption within seconds. Which explanation fits this observation?',
   options:['Protons return through ATP synthase, lowering the gradient the pumps work against','ADP donates electrons directly to complex I','ADP increases the reduction potential of oxygen','ADP transports protons across the inner membrane'],
   answer:0,
   why:'ATP synthase can only turn when it has substrate. Restoring proton flow relieves back-pressure on the pumps, so electron transport accelerates. This is respiratory control.'},

  {id:'OXP-053', m:'lab', area:'Integrated OXPHOS reasoning', level:'application',
   stem:'A cell shifts from aerobic to anaerobic metabolism. Which change in ATP yield per glucose is expected?',
   options:['A fall from about 30 to 2','A fall from about 30 to 10','A fall from about 32 to 18','A fall from about 32 to 24'],
   answer:0,
   why:'Without oxygen the chain stops, so nothing beyond glycolysis contributes. Substrate-level phosphorylation in glycolysis leaves a net of 2 ATP, with lactate as the end product.'},

  {id:'OXP-054', m:'lab', area:'Integrated OXPHOS reasoning', level:'integration',
   stem:'A partial inhibitor of complex I lowers hepatic ATP without stopping respiration. Which downstream consequence follows in the liver?',
   options:['Activation of AMPK and reduced gluconeogenesis','Activation of AMPK and increased gluconeogenesis','Inhibition of AMPK and reduced glycolysis','Inhibition of AMPK and increased glycogen synthesis'],
   answer:0,
   why:'A falling ATP-to-AMP ratio activates AMPK, which suppresses energy-expensive pathways such as gluconeogenesis. This is the accepted account of metformin\u2019s hepatic effect.'},

  {id:'OXP-055', m:'lab', area:'Integrated OXPHOS reasoning', level:'application',
   stem:'Oxygen consumption is measured in mitochondria given succinate as the sole substrate. Which inhibitor leaves that consumption intact?',
   options:['Rotenone','Antimycin A','Cyanide','Oligomycin'],
   answer:0,
   why:'Succinate enters through complex II, so a complex I block does not affect it. Blocks at complex III or IV lie downstream and would stop it, and oligomycin stops it indirectly through back-pressure.'},

  {id:'OXP-056', m:'lab', area:'Integrated OXPHOS reasoning', level:'integration',
   stem:'A muscle cell and a liver cell oxidize identical amounts of glucose, yet the liver cell produces more ATP. Which difference accounts for this?',
   options:['The liver preserves complex I entry for cytosolic NADH','The liver produces more NADH in the citric acid cycle','The liver pumps more protons per electron pair at complex III','The liver uses a lower proton cost per ATP at F\u2080F\u2081'],
   answer:0,
   why:'The malate-aspartate shuttle regenerates NADH inside the matrix, so those electrons still pass through complex I. Muscle sends them to coenzyme Q instead and loses 4 H\u207A each.'},

  {id:'OXP-057', m:'lab', area:'Integrated OXPHOS reasoning', level:'integration',
   stem:'A compound allows protons to return to the matrix without passing through ATP synthase. Which set of changes is expected?',
   options:['Gradient falls, oxygen consumption rises, ATP falls','Gradient rises, oxygen consumption falls, ATP falls','Gradient falls, oxygen consumption falls, ATP rises','Gradient rises, oxygen consumption rises, ATP rises'],
   answer:0,
   why:'The gradient is short-circuited, so it falls and the chain runs faster in an attempt to rebuild it. The energy leaves as heat, and ATP synthesis drops.'},

  {id:'OXP-058', m:'lab', area:'Integrated OXPHOS reasoning', level:'application',
   stem:'Which measurement would distinguish an uncoupler from an electron transport inhibitor most directly?',
   options:['The rate of oxygen consumption','The concentration of ADP in the matrix','The pH of the cytosol','The concentration of glucose in the medium'],
   answer:0,
   why:'Both lower ATP and both lower the gradient in the end, but they move oxygen consumption in opposite directions: up with an uncoupler, down with an inhibitor.'},

  {id:'OXP-059', m:'lab', area:'Integrated OXPHOS reasoning', level:'integration',
   stem:'A mitochondrion pumps 10 protons per NADH and spends roughly 4 per ATP. Which yield does a doubling of the proton cost per ATP predict?',
   options:['About 1.25 ATP per NADH','About 2.5 ATP per NADH','About 5 ATP per NADH','About 10 ATP per NADH'],
   answer:0,
   why:'The yield is a ratio of protons pumped to protons spent. Doubling the cost halves the yield, which shows that 2.5 is a consequence of stoichiometry rather than a fixed constant.'},

  {id:'OXP-060', m:'lab', area:'Integrated OXPHOS reasoning', level:'integration',
   stem:'Respiration stops completely when oxygen is removed, even though NADH remains abundant. Which explanation accounts for this?',
   options:['Electrons have no acceptor, so every carrier stays reduced','Protons leak back faster than the pumps can move them','ATP synthase reverses and consumes the gradient','Complex I loses its affinity for NADH'],
   answer:0,
   why:'The chain works by passing electrons along; with no terminal acceptor, every carrier fills up and nothing can move. Pumping stops, and the existing gradient then dissipates.'},

  /* ---- Depth added so a targeted round after a module quiz still has
         unseen questions to draw on. Each module holds 12. ---- */

  {id:'OXP-061', m:'m1', area:'Electron flow and ETC complexes', level:'concept',
   stem:'Which product is formed when complex IV completes the transfer of electrons?',
   options:['Water','Hydrogen peroxide','Superoxide','Carbon dioxide'],
   answer:0,
   why:'Cytochrome c oxidase reduces O\u2082 fully to two molecules of water, using four electrons and four matrix protons.'},

  {id:'OXP-062', m:'m1', area:'Electron flow and ETC complexes', level:'application',
   stem:'Coenzyme Q is described as existing in oxidized, semi-reduced, and fully reduced forms. What does this property allow it to do?',
   options:['Accept electrons singly and pass them onward in pairs','Accept protons from the intermembrane space','Bind directly to cytochrome c in the matrix','Transfer phosphate groups to ADP'],
   answer:0,
   why:'Complexes hand electrons over one at a time, while Q collects two before delivering QH\u2082 to complex III. The semiquinone intermediate is what bridges those two arrangements.'},

  {id:'OXP-063', m:'m2', area:'Proton motive force and coupling', level:'concept',
   stem:'Approximately what pH difference exists across the inner membrane during active electron transport?',
   options:['0.5 to 1 unit','3 to 4 units','0.01 to 0.05 units','6 to 7 units'],
   answer:0,
   why:'The matrix sits near pH 7.8 and the intermembrane space near pH 7.0. Because pH is logarithmic, that modest-looking difference is a several-fold difference in [H\u207A].'},

  {id:'OXP-064', m:'m2', area:'Proton motive force and coupling', level:'application',
   stem:'Which molecules require dedicated transport proteins to cross the inner mitochondrial membrane?',
   options:['ATP and ADP','O\u2082 and CO\u2082','Water and ammonia','Ethanol and urea'],
   answer:0,
   why:'The same impermeability that sustains the proton gradient also blocks ATP and ADP, so an adenine nucleotide translocase moves them. Small uncharged gases cross freely.'},

  {id:'OXP-065', m:'m2', area:'Proton motive force and coupling', level:'application',
   stem:'Which observation would indicate that a mitochondrial preparation has lost inner membrane integrity?',
   options:['Rapid oxygen consumption with negligible ATP output','Slow oxygen consumption with high ATP output','Rapid oxygen consumption with high ATP output','Slow oxygen consumption with negligible ATP output'],
   answer:0,
   why:'A leaky membrane cannot hold a gradient, so the chain runs unrestrained while no useful work is captured. This is the laboratory definition of an uncoupled preparation.'},

  {id:'OXP-066', m:'m2', area:'Proton motive force and coupling', level:'integration',
   stem:'Which statement best captures the relationship between the electron transport chain and ATP synthase?',
   options:['They are separate processes linked through a shared proton gradient','They are two catalytic sites within a single protein complex','They act in sequence on the same substrate molecule','They compete for the same pool of reduced carriers'],
   answer:0,
   why:'Nothing physically connects the two. Understanding that the gradient is the only link is what makes every inhibitor and uncoupler prediction in Module 5 straightforward.'},

  {id:'OXP-067', m:'m3', area:'ATP synthase mechanism', level:'concept',
   stem:'Where is the F\u2081 head of ATP synthase located?',
   options:['In the mitochondrial matrix','In the intermembrane space','Within the inner membrane bilayer','On the outer mitochondrial membrane'],
   answer:0,
   why:'F\u2081 projects into the matrix, which is where ADP and phosphate are available and where newly made ATP is released.'},

  {id:'OXP-068', m:'m3', area:'ATP synthase mechanism', level:'application',
   stem:'Which event drives rotation of the F\u2080 rotor?',
   options:['Movement of protons down their electrochemical gradient','Hydrolysis of ATP at the \u03B2 subunits','Oxidation of cytochrome c at complex IV','Binding of oxygen at the terminal acceptor site'],
   answer:0,
   why:'The rotor turns because protons are moving from a high concentration to a low one. All of the energy for ATP synthesis arrives as that movement.'},

  {id:'OXP-069', m:'m3', area:'ATP synthase mechanism', level:'application',
   stem:'A \u03B2 subunit in the tight state performs which function?',
   options:['Forming the bond between ADP and phosphate','Releasing the finished ATP molecule','Admitting ADP and phosphate into the site','Transferring phosphate to coenzyme Q'],
   answer:0,
   why:'The tight state is where chemistry happens. Release requires the site to open, which the next 120\u00B0 turn provides.'},

  {id:'OXP-070', m:'m3', area:'ATP synthase mechanism', level:'integration',
   stem:'Why is the energy cost of ATP synthesis better described as the cost of releasing ATP than of forming it?',
   options:['Formation in the tight site is nearly energy-neutral, while opening the site requires work','Formation requires more energy than any other step in the chain','Release occurs spontaneously once the phosphate bond has formed','Release requires a second molecule of ADP to bind first'],
   answer:0,
   why:'This is the central insight of the binding-change mechanism: the enzyme stabilizes ATP so well that making it is easy, and the proton-driven rotation is spent prying the product loose.'},

  {id:'OXP-071', m:'m4', area:'Shuttles and ATP yield', level:'concept',
   stem:'Which shuttle predominates in liver, heart, and kidney?',
   options:['The malate-aspartate shuttle','The glycerol-3-phosphate shuttle','The citrate-pyruvate shuttle','The carnitine-acyl shuttle'],
   answer:0,
   why:'These tissues favor the more efficient malate-aspartate shuttle, which preserves the full 2.5 ATP per cytosolic NADH.'},

  {id:'OXP-072', m:'m4', area:'Shuttles and ATP yield', level:'application',
   stem:'In the malate-aspartate shuttle, which molecule returns to the cytosol carrying the amino group?',
   options:['Aspartate','Malate','Succinate','Citrate'],
   answer:0,
   why:'Matrix oxaloacetate is transaminated to aspartate, which exits in exchange for glutamate. That exchange is what makes the shuttle reversible, unlike the one-way glycerol-3-phosphate route.'}
];
