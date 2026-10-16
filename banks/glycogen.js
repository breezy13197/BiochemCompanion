/* ============================================================
   GLYCOGEN METABOLISM — QUESTION BANK
   PHA3134 Biochemistry Q2 2026

   This file is pure content data. It contains no page code and
   touches no DOM element, so a hub or BankBridge can read it on
   its own without ever loading glycogen.html.

   Five globals, in the order the architecture doc expects:
     TOPIC_ID, TOPIC_TITLE, CHECKPOINTS, CARDS, POOL

   Every item follows the course question-writing checklist:
   single best answer, positive stem, 4 homogeneous and parallel
   choices, plausible distractors, no absolute or vague terms,
   no "all/none of the above", and a teaching rationale on every
   item.

   ID rule: GLY-### is permanent. Never renumber, never reuse.
   ============================================================ */

var TOPIC_ID    = 'glycogen';
var TOPIC_TITLE = 'Glycogen Metabolism';

/* ------------------------------------------------------------
   CHECKPOINTS — the in-section "can you predict it?" questions.
   The property name (c1, c1b, ...) is the ID the manifest and
   the HTML both refer to. `answer` is an index into `options`
   BEFORE the engine shuffles them.
   ------------------------------------------------------------ */
var CHECKPOINTS = {

  /* --- Module 1 · Section 1 · Why store glucose as glycogen --- */
  c1: {
    options: [
      'One glycogen particle, because a single large particle contributes far fewer dissolved particles than the glucose it holds',
      'Twenty thousand free glucose molecules, because small solutes leave the cell before they raise osmotic pressure',
      'Twenty thousand free glucose molecules, because a polymer raises intracellular osmotic pressure more than its monomers do',
      'One glycogen particle, because glucose polymers are held in vesicles rather than dissolved in the cytosol'
    ],
    answer: 0,
    why: 'Osmotic pressure tracks the number of dissolved particles, not their mass. Twenty thousand free glucose molecules are twenty thousand particles pulling water into the cell; the same glucose polymerized into one branched particle counts as roughly one dissolved species. The cell banks identical fuel without swelling.'
  },
  c1b: {
    options: [
      'Its branches expose many nonreducing ends, so many enzyme molecules can work on one particle at the same time',
      'Its α1→4 bonds break down without enzymatic help at cytosolic pH',
      'Its single reducing end is the site at which degradation begins',
      'Its large size lets it diffuse rapidly toward the plasma membrane'
    ],
    answer: 0,
    why: 'Compactness and speed are two separate payoffs of the same structure. Branching is what supplies speed: each branch adds another nonreducing end, and every nonreducing end is an independent worksite where a phosphorylase or synthase molecule can act in parallel with all the others.'
  },

  /* --- Module 1 · Section 2 · Bonds, ends, and branch spacing --- */
  c2: {
    options: [
      'An α1→6 glycosidic bond',
      'An α1→4 glycosidic bond',
      'A β1→4 glycosidic bond',
      'A phosphodiester bond'
    ],
    answer: 0,
    why: 'Linear stretches of glycogen are α1→4. A branch point is the exception: carbon 1 of the first residue of the new branch is joined to carbon 6 of a residue in the existing chain. Holding these two linkages apart is what makes the debranching enzyme and branching enzyme make sense later.'
  },
  c2b: {
    options: [
      'Each branch creates one additional free end, while the one uncommitted anomeric carbon sits buried at the core',
      'The reducing end is consumed during synthesis, leaving nonreducing ends behind',
      'Branching enzyme oxidizes each terminal carbon as it creates a new branch',
      'The core of the particle holds several reducing ends that merge into one as branches form'
    ],
    answer: 0,
    why: 'The reducing end is the one anomeric carbon in the whole particle not tied up in a glycosidic bond, and it is anchored at the glycogenin core. Every other end of every branch is a nonreducing end. Branching therefore multiplies nonreducing ends while leaving the count of reducing ends at one.'
  },
  c2c: {
    options: [
      'It packs many nonreducing ends into a soluble particle without crowding the enzymes that act on them',
      'It spaces branches far enough apart that phosphorylase can work past a branch point unassisted',
      'It holds the particle below the size at which lysosomes take it up',
      'It places a reducing end at the tip of each branch for phosphorylase to attack'
    ],
    answer: 0,
    why: 'Spacing is a compromise. Branches closer together would give more ends but leave too little room for the enzymes themselves; branches farther apart would give a slower, less soluble particle. Roughly every 8 to 12 residues balances accessibility, solubility, and working room.'
  },

  /* --- Module 1 · Section 3 · Liver versus skeletal muscle --- */
  c3: {
    options: [
      'Glucose-6-phosphatase',
      'Phosphoglucomutase',
      'Glycogen phosphorylase',
      'Glycogen debranching enzyme'
    ],
    answer: 0,
    why: 'Muscle runs the whole degradation pathway and arrives at glucose-6-phosphate perfectly well. What it lacks is the enzyme that strips the phosphate off. Phosphorylated sugars cannot cross the plasma membrane, so the glucose stays home and enters glycolysis for the muscle\'s own ATP.'
  },
  c3b: {
    options: [
      'Skeletal muscle cells carry no glucagon receptor',
      'Skeletal muscle degrades glucagon at the cell surface before it can bind',
      'Glucagon signals through a cascade that muscle terminates with phosphodiesterase',
      'Muscle glycogen phosphorylase responds poorly to phosphorylation'
    ],
    answer: 0,
    why: 'A hormone can only act where its receptor is expressed. Muscle expresses β-adrenergic receptors and so answers epinephrine, but it expresses no glucagon receptor. This fits the physiology: glucagon\'s job is to defend blood glucose, and muscle glycogen never contributes to blood glucose.'
  },

  /* --- Module 2 · Section 1 · Glycogen phosphorylase --- */
  c4: {
    options: [
      'Glucose-1-phosphate',
      'Glucose-6-phosphate',
      'Free glucose',
      'UDP-glucose'
    ],
    answer: 0,
    why: 'Phosphorylase performs phosphorolysis, not hydrolysis: inorganic phosphate rather than water attacks the terminal α1→4 bond. The phosphate ends up on carbon 1 of the departing residue, giving glucose-1-phosphate.'
  },
  c4b: {
    options: [
      'The released sugar carries a phosphate already, so no ATP is spent phosphorylating it',
      'The phosphate group lets the released sugar cross the plasma membrane',
      'Phosphorolysis regenerates the phosphate that debranching enzyme consumes',
      'Phosphorolysis yields a sugar that glycogen synthase can reuse directly'
    ],
    answer: 0,
    why: 'Free glucose entering glycolysis must first be phosphorylated by hexokinase at the cost of one ATP. Phosphorolysis skips that charge entirely — a meaningful saving in a muscle that is degrading glycogen precisely because ATP is running short.'
  },
  c4c: {
    options: [
      'Its active site cannot accommodate residues that sit that close to an α1→6 linkage',
      'Inorganic phosphate runs out in the immediate vicinity of a branch point',
      'The remaining residues are joined by β1→4 bonds this enzyme cannot cleave',
      'Debranching enzyme occupies the site and physically blocks phosphorylase'
    ],
    answer: 0,
    why: 'The stall is steric. Phosphorylase works processively along an α1→4 chain until the branch point crowds its active site, which happens about four residues out. The stalled structure it leaves behind — a "limit dextrin" — is exactly the substrate the debranching enzyme is built for.'
  },

  /* --- Module 2 · Section 2 · Debranching enzyme --- */
  c5: {
    options: [
      'It lengthens a neighboring chain and leaves one residue at the branch point for the second activity to remove',
      'It converts the three residues to glucose-1-phosphate as they move',
      'It creates a new branch point that phosphorylase can attack from the other side',
      'It exposes the reducing end so degradation can restart from the core'
    ],
    answer: 0,
    why: 'The transferase activity moves a block of three α1→4-linked residues onto a nearby nonreducing end. Two things are accomplished at once: the acceptor chain becomes longer substrate for phosphorylase, and the branch point is stripped down to the single residue held by the α1→6 bond.'
  },
  c5b: {
    options: [
      'Free, unphosphorylated glucose',
      'Glucose-1-phosphate',
      'Glucose-6-phosphate',
      'UDP-glucose'
    ],
    answer: 0,
    why: 'This is a hydrolysis, not a phosphorolysis, so the product carries no phosphate. It is a favorite exam distinction: phosphorylase gives glucose-1-phosphate, the α1→6 glucosidase activity gives free glucose. Roughly one in ten residues from a glycogen particle leaves as free glucose for this reason.'
  },

  /* --- Module 2 · Section 3 · Phosphoglucomutase and the fork --- */
  c6: {
    options: [
      'Phosphoglucomutase',
      'Glucose-6-phosphatase',
      'Hexokinase',
      'UDP-glucose pyrophosphorylase'
    ],
    answer: 0,
    why: 'Glycolysis begins at glucose-6-phosphate, but phosphorylase delivers glucose-1-phosphate. Phosphoglucomutase relocates the phosphate from carbon 1 to carbon 6, which is the step that connects glycogen degradation to the rest of glucose metabolism.'
  },
  c6b: {
    options: [
      'Glucose-6-phosphatase',
      'Phosphoglucomutase',
      'Phosphoglucose isomerase',
      'Hexokinase'
    ],
    answer: 0,
    why: 'Glucose-6-phosphatase is the exit door, and the liver, kidney, and intestine are the tissues that have it. Removing the phosphate produces neutral free glucose, which can leave the hepatocyte and raise blood glucose.'
  },
  c6c: {
    options: [
      'Phosphoglucose isomerase',
      'Glucose-6-phosphatase',
      'Phosphoglucomutase',
      'Glycogen phosphorylase'
    ],
    answer: 0,
    why: 'With no glucose-6-phosphatase available, a myocyte routes glucose-6-phosphate straight into glycolysis. Phosphoglucose isomerase converts it to fructose-6-phosphate, the second step of the pathway, and the carbon proceeds toward ATP for the muscle itself.'
  },

  /* --- Module 3 · Section 1 · UDP-glucose --- */
  c7: {
    options: [
      'Glucose-1-phosphate and UTP',
      'Glucose-6-phosphate and UTP',
      'Glucose-1-phosphate and ATP',
      'Glucose-6-phosphate and UDP'
    ],
    answer: 0,
    why: 'UDP-glucose pyrophosphorylase joins glucose-1-phosphate to UTP and releases pyrophosphate. Note which sugar it takes: synthesis and degradation both pass through glucose-1-phosphate, which is why phosphoglucomutase appears in both directions.'
  },
  c7b: {
    options: [
      'It removes a product from the system and drives the reaction toward UDP-glucose',
      'It supplies the phosphate that glycogen synthase transfers to the growing chain',
      'It regenerates the UTP consumed in the preceding step',
      'It prevents UDP-glucose from being diverted into galactose metabolism'
    ],
    answer: 0,
    why: 'The pyrophosphorylase reaction itself is close to equilibrium. Inorganic pyrophosphatase then hydrolyzes the pyrophosphate to two phosphates, an essentially irreversible step that pulls the whole sequence forward — the same trick the cell uses in DNA and RNA synthesis.'
  },

  /* --- Module 3 · Section 2 · Glycogenin --- */
  c8: {
    options: [
      'Glycogenin',
      'Branching enzyme',
      'Phosphoglucomutase',
      'Phosphorylase kinase'
    ],
    answer: 0,
    why: 'Glycogen synthase extends an existing chain but cannot create one. Glycogenin solves the problem by acting as both enzyme and substrate: it glycosylates itself, building a short primer that synthase can then take over. It stays buried at the core of the finished particle.'
  },
  c8b: {
    options: [
      'A tyrosine residue',
      'A serine residue',
      'A threonine residue',
      'A lysine residue'
    ],
    answer: 0,
    why: 'Glycogenin autoglycosylates a specific tyrosine, adding roughly eight glucose units from UDP-glucose. Worth separating from regulation, where serine phosphorylation is the recurring theme — the tyrosine here is a site of glycosylation, not of a regulatory phosphate.'
  },

  /* --- Module 3 · Section 3 · Synthase and branching enzyme --- */
  c9: {
    options: [
      'To a nonreducing end, through an α1→4 bond',
      'To the reducing end, through an α1→4 bond',
      'To a nonreducing end, through an α1→6 bond',
      'To the reducing end, through an α1→6 bond'
    ],
    answer: 0,
    why: 'Synthase and phosphorylase work on the same real estate from opposite directions: both act at nonreducing ends, on α1→4 bonds. Synthase makes no branches at all, which is precisely why a separate branching enzyme is needed.'
  },
  c9b: {
    options: [
      'To an interior residue of the particle, through a new α1→6 bond',
      'To the nonreducing end of the same chain, through a new α1→4 bond',
      'To the reducing end at the glycogenin core, through a new α1→6 bond',
      'To a tyrosine residue on glycogenin, through a new α1→4 bond'
    ],
    answer: 0,
    why: 'Branching enzyme cuts a block of about seven residues off the end of a lengthening chain and reattaches it to a carbon 6 further in. No net glucose is gained — but the particle has gained one more nonreducing end, and both branches can now grow.'
  },
  c9c: {
    options: [
      'It would fall, because fewer nonreducing ends would be available for synthase to work on',
      'It would rise, because synthase would spend no time waiting for branching enzyme',
      'It would be unchanged, because branching adds no net glucose to the particle',
      'It would rise, because long unbranched chains dissolve more readily than branched ones'
    ],
    answer: 0,
    why: 'This is the branching argument running in the synthetic direction. Nonreducing ends are worksites, and synthesis rate scales with how many are available. It also predicts the clinical picture in Andersen disease: glycogen is made, but it is long-chained, poorly soluble, and pathological.'
  },

  /* --- Module 4 · Section 1 · The cAMP cascade --- */
  c10: {
    options: [
      'Cyclic AMP',
      'Calcium',
      'Inositol trisphosphate',
      'Diacylglycerol'
    ],
    answer: 0,
    why: 'Glucagon and epinephrine both signal through G protein-coupled receptors that activate adenylate cyclase, raising cAMP. One cascade, two hormones — which is why memorizing it once covers both.'
  },
  c10b: {
    options: [
      'Phosphorylase kinase',
      'Glycogen phosphorylase itself',
      'Adenylate cyclase',
      'Glycogen synthase kinase'
    ],
    answer: 0,
    why: 'PKA does not touch phosphorylase directly. It phosphorylates phosphorylase kinase, which then phosphorylates glycogen phosphorylase. That extra layer is what amplifies a handful of hormone molecules into a large metabolic response.'
  },
  c10c: {
    options: [
      'Phosphodiesterase',
      'Protein phosphatase 1',
      'Adenylate cyclase',
      'Protein kinase A'
    ],
    answer: 0,
    why: 'Two different off-switches are worth keeping straight. Phosphodiesterase destroys the second messenger by converting cAMP to AMP. Protein phosphatase 1 acts one level down, stripping phosphates off the enzymes the cascade already modified.'
  },

  /* --- Module 4 · Section 2 · Reciprocal regulation --- */
  c11: {
    options: [
      'Degradation is switched on while synthesis is switched off',
      'Both degradation and synthesis are switched on',
      'Degradation is switched off while synthesis is switched on',
      'Both degradation and synthesis are switched off'
    ],
    answer: 0,
    why: 'One kinase, one signal, opposite outcomes. This is reciprocal regulation, and it is what stops the cell from building and dismantling glycogen at the same time — a futile cycle that would burn ATP for nothing.'
  },
  c11b: {
    options: [
      'The consequence of adding a phosphate depends on which protein receives it',
      'Phosphorylation activates catabolic enzymes and inactivates anabolic ones as a general rule',
      'Enzymes with more phosphorylation sites respond more strongly than those with fewer',
      'A phosphate group activates an enzyme when a kinase adds it and inactivates it when a phosphatase removes it'
    ],
    answer: 0,
    why: 'The habit of reading phosphorylation as activation is one of the most common shortcuts students carry into an exam. A phosphate is a covalent tag; whether it turns an enzyme on or off is a property of the enzyme, not of the phosphate. Glycogen metabolism disproves the shortcut in a single hormone response.'
  },

  /* --- Module 4 · Section 3 · Allosteric control and isoforms --- */
  c12: {
    options: [
      'It shifts the enzyme toward the more active R state',
      'It shifts the enzyme toward the less active T state',
      'It converts phosphorylase b into phosphorylase a',
      'It removes the phosphate from phosphorylase a'
    ],
    answer: 0,
    why: 'AMP accumulating in a working muscle is a direct report that energy charge has fallen. Binding AMP pushes the unphosphorylated b isoform toward its active conformation, so muscle can mobilize glycogen on energy status alone, before any hormone arrives.'
  },
  c12b: {
    options: [
      'The enzyme shifts toward the less active T state',
      'The enzyme shifts toward the more active R state',
      'The enzyme is phosphorylated by phosphorylase kinase',
      'The enzyme becomes responsive to AMP and ATP'
    ],
    answer: 0,
    why: 'Glucose is an allosteric inhibitor of hepatic phosphorylase a. The logic is elegant: the product of the reaction reports that the liver\'s job is done, so a rising blood glucose level shuts hepatic glycogenolysis off directly, without waiting on a hormone.'
  },
  c12c: {
    options: [
      'Its activity tracks blood glucose and hormonal signals rather than the liver\'s own energy charge',
      'Its activity tracks the liver\'s ATP concentration more tightly than the muscle isoform does',
      'It responds to AMP but not to ATP',
      'It requires a higher phosphate concentration to catalyze phosphorolysis'
    ],
    answer: 0,
    why: 'The two isoforms are tuned to two different jobs. Muscle degrades glycogen for itself, so reading its own energy charge makes sense. The liver degrades glycogen for everyone else, so a well-fed hepatocyte still exports glucose during a fast — its own ATP supply is beside the point.'
  },

  /* --- Module 4 · Section 4 · Putting regulation together --- */
  c13: {
    options: [
      'Rising AMP, rising calcium, and epinephrine',
      'Rising ATP, rising glucose-6-phosphate, and insulin',
      'Rising glucagon, rising cAMP, and rising glucose',
      'Rising insulin, rising protein phosphatase 1 activity, and rising glucose-6-phosphate'
    ],
    answer: 0,
    why: 'Three separate inputs converge on the same enzyme in working muscle. AMP reports falling energy charge, calcium released for contraction also activates phosphorylase kinase, and circulating epinephrine runs the cAMP cascade. Glucagon is absent from the list because muscle has no receptor for it.'
  },
  c13b: {
    options: [
      'Glycogen synthase is dephosphorylated and active, while phosphorylase is dephosphorylated and less active',
      'Both glycogen synthase and phosphorylase are phosphorylated and active',
      'Glycogen synthase is phosphorylated and active, while phosphorylase is phosphorylated and less active',
      'Both glycogen synthase and phosphorylase are dephosphorylated and less active'
    ],
    answer: 0,
    why: 'Insulin works from both ends: it inactivates glycogen synthase kinase, so synthase escapes the inhibitory phosphate, and it activates protein phosphatase 1, which strips activating phosphates off phosphorylase. The dephosphorylated state is the fed state — and it means opposite things for the two enzymes.'
  },

  /* --- Module 5 · Section 1 · Reasoning from presentation to enzyme --- */
  c14: {
    options: [
      'The liver\'s ability to release glucose into the blood',
      'Skeletal muscle\'s ability to mobilize glycogen during exercise',
      'The lysosome\'s ability to degrade glycogen it has taken up',
      'The intestine\'s ability to absorb dietary carbohydrate'
    ],
    answer: 0,
    why: 'Reason tissue first. Hypoglycemia that appears specifically between meals points at hepatic glucose output, and hepatomegaly says the substrate is piling up inside the liver. Only after locating the tissue is it worth asking which enzyme in that tissue is missing.'
  },
  c14b: {
    options: [
      'In skeletal muscle glycogen mobilization',
      'In hepatic glucose export',
      'In lysosomal glycogen degradation across multiple tissues',
      'In the branching step of hepatic glycogen synthesis'
    ],
    answer: 0,
    why: 'Normal fasting glucose rules the liver out — hepatic glycogenolysis and export are intact. Symptoms that appear in the first minutes of hard exercise, when muscle depends most on its own glycogen, localize the defect to muscle. That reasoning arrives at McArdle disease without needing the name first.'
  },

  /* --- Module 5 · Section 2 · The disease matrix --- */
  c15: {
    options: [
      'Severe fasting hypoglycemia with an enlarged liver',
      'Exercise intolerance with painful cramps and normal fasting glucose',
      'Cardiomyopathy presenting in the first months of life',
      'Progressive cirrhosis with structurally abnormal glycogen'
    ],
    answer: 0,
    why: 'Glucose-6-phosphatase is the final exit step. Without it, the liver can dismantle glycogen all it likes but cannot release the product, so glucose-6-phosphate and glycogen accumulate — hepatomegaly — while blood glucose falls between meals.'
  },
  c15b: {
    options: [
      'Normal in amount, with unusually long and sparsely branched outer chains',
      'Increased in amount, with normal branching structure',
      'Increased in amount, with abnormally short outer branches',
      'Decreased in amount, with normal branching structure'
    ],
    answer: 0,
    why: 'Structure follows the missing enzyme directly. With branching enzyme gone, synthase keeps extending α1→4 chains but nothing introduces α1→6 branches, giving long, poorly soluble, amylose-like glycogen. Contrast Cori disease, where debranching fails and the outer branches end up abnormally short.'
  }
};

/* ------------------------------------------------------------
   CARDS — flashcard deck. `t` is the front, `d` is the back.
   `flip:true` is a cosmetic marker for reversed-recall prompts.
   ------------------------------------------------------------ */
var CARDS = [
  { id:'GLY-CARD-01', t:'α1→4 glycosidic bond', d:'The linkage that joins glucose residues along the linear stretches of a glycogen chain. Made by glycogen synthase, broken by glycogen phosphorylase.' },
  { id:'GLY-CARD-02', t:'α1→6 glycosidic bond', d:'The linkage at a branch point, joining carbon 1 of a new branch to carbon 6 of a residue in an existing chain. Made by branching enzyme, broken by the glucosidase activity of debranching enzyme.' },
  { id:'GLY-CARD-03', t:'Nonreducing end', d:'A chain terminus whose anomeric carbon is committed to a glycosidic bond. Every branch supplies one, and each is a worksite for phosphorylase and synthase — which is why branching sets the speed of both pathways.' },
  { id:'GLY-CARD-04', t:'Reducing end', d:'The single anomeric carbon in a glycogen particle not tied up in a glycosidic bond. It is anchored at the glycogenin core and is not used metabolically.' },
  { id:'GLY-CARD-05', t:'Why the cell stores glucose as a polymer', d:'Osmotic pressure depends on the number of dissolved particles. Thousands of free glucose molecules would draw water in and swell the cell; the same glucose in one branched particle is osmotically near-silent.', flip:true },
  { id:'GLY-CARD-06', t:'Glycogen phosphorylase', d:'Cleaves terminal α1→4 bonds by phosphorolysis, releasing glucose-1-phosphate. Stalls about four residues from a branch point.' },
  { id:'GLY-CARD-07', t:'Debranching enzyme, activity 1', d:'Transferase: moves a block of three α1→4-linked residues from a stalled branch onto a nearby nonreducing end, leaving one residue at the branch point.' },
  { id:'GLY-CARD-08', t:'Debranching enzyme, activity 2', d:'α1→6 glucosidase: hydrolyzes the last branch-point residue and releases it as free, unphosphorylated glucose.' },
  { id:'GLY-CARD-09', t:'Phosphoglucomutase', d:'Interconverts glucose-1-phosphate and glucose-6-phosphate. Runs in both directions — toward G6P during degradation, toward G1P during synthesis.' },
  { id:'GLY-CARD-10', t:'Glucose-6-phosphatase', d:'Hydrolyzes glucose-6-phosphate to free glucose so it can leave the cell. Present in liver, kidney, and intestine; absent from muscle and brain.' },
  { id:'GLY-CARD-11', t:'The enzyme muscle lacks, and what follows from it', d:'Glucose-6-phosphatase. Muscle glycogen therefore serves the muscle alone and contributes nothing to blood glucose.', flip:true },
  { id:'GLY-CARD-12', t:'UDP-glucose pyrophosphorylase', d:'Joins glucose-1-phosphate to UTP, releasing pyrophosphate. Subsequent hydrolysis of that pyrophosphate makes the step effectively irreversible.' },
  { id:'GLY-CARD-13', t:'Glycogenin', d:'The primer protein. Autoglycosylates a tyrosine residue with roughly eight glucose units, then remains at the core of the finished particle.' },
  { id:'GLY-CARD-14', t:'Glycogen synthase', d:'Adds glucose from UDP-glucose to a nonreducing end through an α1→4 bond. Requires an existing chain and creates no branches.' },
  { id:'GLY-CARD-15', t:'Branching enzyme', d:'Moves a block of about seven residues from the end of a growing chain to an interior carbon 6, creating a new α1→6 branch and a new nonreducing end.' },
  { id:'GLY-CARD-16', t:'The protein that starts a glycogen particle', d:'Glycogenin — because glycogen synthase can extend a chain but cannot begin one.', flip:true },
  { id:'GLY-CARD-17', t:'The cAMP cascade', d:'Hormone binds a GPCR → adenylate cyclase raises cAMP → PKA is activated → PKA phosphorylates phosphorylase kinase → phosphorylase kinase phosphorylates glycogen phosphorylase.' },
  { id:'GLY-CARD-18', t:'What PKA does to glycogen synthase', d:'Phosphorylates and inactivates it. The same kinase that switches degradation on switches synthesis off — reciprocal regulation in a single step.' },
  { id:'GLY-CARD-19', t:'Protein phosphatase 1 (PP1)', d:'Removes the phosphates the cascade added: inactivates phosphorylase and activates glycogen synthase. Insulin promotes its activity.' },
  { id:'GLY-CARD-20', t:'Phosphodiesterase (PDE)', d:'Converts cAMP to AMP, ending the second-messenger signal upstream of PKA.' },
  { id:'GLY-CARD-21', t:'Phosphorylase a versus phosphorylase b', d:'"a" is phosphorylated and favors the active R state; "b" is unphosphorylated and favors the less active T state. The b form dominates resting muscle, the a form dominates liver.' },
  { id:'GLY-CARD-22', t:'Allosteric regulators of muscle phosphorylase b', d:'AMP activates by shifting toward R. ATP and glucose-6-phosphate inhibit by shifting toward T. Calcium released during contraction activates phosphorylase kinase in parallel.' },
  { id:'GLY-CARD-23', t:'Allosteric regulator of hepatic phosphorylase a', d:'Glucose, which shifts the enzyme toward T. Hepatic phosphorylase reads blood glucose and hormones rather than the liver\'s own energy charge.' },
  { id:'GLY-CARD-24', t:'Why muscle answers epinephrine but not glucagon', d:'Muscle expresses β-adrenergic receptors but no glucagon receptor. Glucagon defends blood glucose, and muscle glycogen never contributes to blood glucose.', flip:true },
  { id:'GLY-CARD-25', t:'Von Gierke disease (type I)', d:'Glucose-6-phosphatase deficiency. Liver and kidney. Severe fasting hypoglycemia with massive hepatomegaly; glycogen is normal in structure but increased in amount.' },
  { id:'GLY-CARD-26', t:'Pompe disease (type II)', d:'Lysosomal α1→4 glucosidase (acid maltase) deficiency. Glycogen accumulates inside lysosomes in many tissues; cardiorespiratory failure in infancy.' },
  { id:'GLY-CARD-27', t:'Cori disease (type III)', d:'Debranching enzyme deficiency. Liver and muscle. Resembles type I but milder, with glycogen carrying abnormally short outer branches.' },
  { id:'GLY-CARD-28', t:'Andersen disease (type IV)', d:'Branching enzyme deficiency. Glycogen is normal in amount but has very long, sparsely branched chains; progressive cirrhosis and liver failure in early childhood.' },
  { id:'GLY-CARD-29', t:'McArdle disease (type V)', d:'Muscle glycogen phosphorylase deficiency. Exercise intolerance with painful cramps; fasting blood glucose is normal because the liver is unaffected.' },
  { id:'GLY-CARD-30', t:'Reciprocal regulation, stated in one line', d:'Insulin favors glycogenesis and opposes glycogenolysis; glucagon and epinephrine do the reverse. The cell never builds and dismantles glycogen at the same time.', flip:true }
];

/* ------------------------------------------------------------
   POOL — module quizzes and the final mastery exam.
   `m`     = which module quiz this belongs to (m1..m5)
   `area`  = concept area; must match a key in MANIFEST.areaSection
   `level` = concept | application | integration
             (the final exam draws 8 / 10 / 7 across the whole pool)
   ------------------------------------------------------------ */
var POOL = [

  /* ===================== MODULE 1 ===================== */
  {
    id:'GLY-001', m:'m1', area:'Why glycogen', level:'concept',
    stem:'A cell stores a large quantity of glucose as one branched glycogen particle rather than as free glucose. Which problem does this arrangement solve?',
    options:[
      'The osmotic load that thousands of dissolved glucose molecules would create',
      'The oxidation of glucose by cytosolic reactive oxygen species',
      'The loss of glucose through facilitated transporters in the plasma membrane',
      'The competition between glucose and fatty acids for cytosolic space'
    ],
    answer:0,
    why:'Osmotic pressure depends on particle count. Polymerization collapses thousands of osmotically active particles into roughly one, so the cell holds the same fuel without drawing in water and swelling.'
  },
  {
    id:'GLY-002', m:'m1', area:'Why glycogen', level:'concept',
    stem:'Approximately what fraction of body mass is stored as glycogen in a well-fed adult?',
    options:['About 1.5 percent','About 8 percent','About 15 percent','About 25 percent'],
    answer:0,
    why:'Roughly 15 g of glycogen per kg of body mass works out to about 1.5 percent of body mass. In the fed state around 10 percent of liver mass is glycogen, which is why hepatomegaly is such a recognizable sign when degradation fails.'
  },
  {
    id:'GLY-003', m:'m1', area:'Why glycogen', level:'application',
    stem:'A cell is engineered to store its entire glucose reserve as free monomers instead of glycogen. Which consequence follows most directly?',
    options:[
      'Water enters the cell and its volume rises sharply',
      'Glucose is oxidized before it can be used as a reserve',
      'The reserve becomes inaccessible to glycolytic enzymes',
      'ATP is consumed continuously to hold glucose in the cytosol'
    ],
    answer:0,
    why:'Each free glucose molecule is an osmotically active particle. A reserve large enough to matter metabolically would raise intracellular osmolarity substantially, drawing water in and swelling the cell — the exact outcome polymerization avoids.'
  },
  {
    id:'GLY-004', m:'m1', area:'Why glycogen', level:'integration',
    stem:'Two hepatocytes hold identical amounts of glucose. One holds it as a single lightly branched particle, the other as a single heavily branched particle of the same mass. What distinguishes the heavily branched cell during a fast?',
    options:[
      'It mobilizes glucose faster because more nonreducing ends are available at once',
      'It mobilizes glucose faster because its particle carries more reducing ends',
      'It mobilizes glucose more slowly because phosphorylase stalls at every branch point',
      'It mobilizes glucose at the same rate because both particles contain the same glucose'
    ],
    answer:0,
    why:'Total glucose sets how much is stored; the number of nonreducing ends sets how fast it comes out. Phosphorylase stalls near branch points, but debranching enzyme clears those quickly, and the net effect of more branches is a faster response.'
  },
  {
    id:'GLY-005', m:'m1', area:'Glycogen structure', level:'concept',
    stem:'Which linkage joins glucose residues along a linear stretch of a glycogen chain?',
    options:['α1→4','α1→6','β1→4','β1→6'],
    answer:0,
    why:'Linear stretches are α1→4; branch points are α1→6. The α configuration is what distinguishes glycogen and starch from cellulose, whose β1→4 bonds human enzymes cannot cleave.'
  },
  {
    id:'GLY-006', m:'m1', area:'Glycogen structure', level:'concept',
    stem:'How many reducing ends does a single glycogen particle contain?',
    options:['One','One per branch point','One per nonreducing end','One per thousand glucose residues'],
    answer:0,
    why:'A particle grows outward from a single glycogenin molecule, so exactly one anomeric carbon is left uncommitted, at the core. Every other terminus is a nonreducing end — often thousands of them.'
  },
  {
    id:'GLY-007', m:'m1', area:'Glycogen structure', level:'application',
    stem:'A synthetic polysaccharide is built from glucose with α1→4 bonds and no branches. Compared with natural glycogen of the same mass, how does it behave?',
    options:[
      'It is less soluble and slower to degrade',
      'It is more soluble and faster to degrade',
      'It is less soluble and faster to degrade',
      'It is more soluble and slower to degrade'
    ],
    answer:0,
    why:'Branching does two jobs at once: it improves solubility and it multiplies nonreducing ends. Removing branches costs both. This is also the structural basis of Andersen disease, where branching enzyme is deficient.'
  },
  {
    id:'GLY-008', m:'m1', area:'Glycogen structure', level:'integration',
    stem:'A glycogen particle carries roughly 30,000 glucose residues with branch points about every 10 residues. Which feature of this particle most directly determines how quickly it can be degraded?',
    options:[
      'The number of nonreducing ends available to phosphorylase',
      'The total number of glucose residues it contains',
      'The number of reducing ends buried at its core',
      'The average length of the α1→6 linkages between branches'
    ],
    answer:0,
    why:'Capacity and rate are separate properties. Residue count sets how much fuel is banked; nonreducing-end count sets how many phosphorylase molecules can work in parallel, and therefore how fast the bank can be drawn down.'
  },
  {
    id:'GLY-009', m:'m1', area:'Liver vs muscle', level:'concept',
    stem:'What is the principal role of glycogen stored in the liver?',
    options:[
      'Maintaining blood glucose for other tissues',
      'Supplying ATP for hepatocyte contraction',
      'Serving as a carbon source for hepatic lipid synthesis',
      'Buffering the osmotic pressure of hepatic cytosol'
    ],
    answer:0,
    why:'The liver is the body\'s glucose bank. It runs the whole degradation pathway and, uniquely among the major stores, possesses glucose-6-phosphatase, so the glucose it releases can leave the cell and enter the blood.'
  },
  {
    id:'GLY-010', m:'m1', area:'Liver vs muscle', level:'application',
    stem:'A researcher measures glucose-6-phosphatase activity in liver, kidney, skeletal muscle, and brain. In which pair of tissues is activity expected?',
    options:['Liver and kidney','Liver and skeletal muscle','Kidney and brain','Skeletal muscle and brain'],
    answer:0,
    why:'Liver, kidney, and intestine express glucose-6-phosphatase and can export free glucose. Muscle and brain are consumers: they hold on to glucose-6-phosphate and commit it to glycolysis.'
  },
  {
    id:'GLY-011', m:'m1', area:'Liver vs muscle', level:'application',
    stem:'A volunteer runs a hard interval on a treadmill. Which tissue\'s glycogen supplies the glucose oxidized in the working quadriceps?',
    options:[
      'The quadriceps\' own glycogen',
      'Hepatic glycogen delivered as glucose-1-phosphate',
      'Hepatic glycogen delivered as glucose-6-phosphate',
      'Cardiac glycogen released into the circulation'
    ],
    answer:0,
    why:'Muscle glycogen is a local reserve. Phosphorylated intermediates cannot cross membranes, so nothing is exported and nothing is imported as G1P or G6P. The liver contributes free glucose to the blood, but the muscle\'s first line of supply is its own store.'
  },
  {
    id:'GLY-012', m:'m1', area:'Liver vs muscle', level:'integration',
    stem:'During an overnight fast, hepatic glycogen falls substantially while skeletal muscle glycogen changes little. Which explanation accounts for both observations?',
    options:[
      'The liver responds to glucagon and exports glucose, while resting muscle has neither the receptor nor the demand',
      'Muscle glycogen is chemically more stable than hepatic glycogen',
      'Muscle phosphorylase is inhibited by the calcium released during rest',
      'Hepatic glycogen has more branch points and therefore degrades spontaneously'
    ],
    answer:0,
    why:'Two facts do the work together. Muscle expresses no glucagon receptor, so the fasting hormonal signal passes it by; and resting muscle has low energy demand, so AMP stays low and phosphorylase b stays in the T state. The liver has both the receptor and the job.'
  },

  /* ===================== MODULE 2 ===================== */
  {
    id:'GLY-013', m:'m2', area:'Glycogen phosphorylase', level:'concept',
    stem:'Which molecule does glycogen phosphorylase use to cleave a terminal α1→4 bond?',
    options:['Inorganic phosphate','Water','ATP','UTP'],
    answer:0,
    why:'The reaction is a phosphorolysis. Inorganic phosphate attacks the glycosidic bond and ends up on carbon 1 of the leaving residue, producing glucose-1-phosphate rather than free glucose.'
  },
  {
    id:'GLY-014', m:'m2', area:'Glycogen phosphorylase', level:'application',
    stem:'A muscle cell degrading glycogen by phosphorolysis conserves ATP relative to one taking up blood glucose. Which step is bypassed?',
    options:[
      'Phosphorylation of glucose by hexokinase',
      'Phosphorylation of fructose-6-phosphate by phosphofructokinase',
      'Removal of phosphate by glucose-6-phosphatase',
      'Activation of glucose-1-phosphate by UTP'
    ],
    answer:0,
    why:'Free glucose entering glycolysis costs one ATP at the hexokinase step. Glucose released from glycogen already carries a phosphate, so the cell skips that investment — useful precisely when it is degrading glycogen because ATP is short.'
  },
  {
    id:'GLY-015', m:'m2', area:'Glycogen phosphorylase', level:'application',
    stem:'Phosphorylase acting on a branched particle releases glucose-1-phosphate and then stops with several residues still attached to the branch. How many residues typically remain?',
    options:['About four','About eight','About twelve','About twenty'],
    answer:0,
    why:'The branch point crowds the active site, and the enzyme halts roughly four residues away. The stalled structure is the limit dextrin, and it is the specific substrate the debranching enzyme evolved to handle.'
  },
  {
    id:'GLY-016', m:'m2', area:'Glycogen phosphorylase', level:'integration',
    stem:'A cell expresses a phosphorylase variant that works normally but cannot be phosphorylated. Which capability is lost?',
    options:[
      'The ability to raise glycogen breakdown in response to the cAMP cascade',
      'The ability to cleave α1→4 bonds by phosphorolysis',
      'The ability to release glucose-1-phosphate as a product',
      'The ability to bind glycogen at the nonreducing end'
    ],
    answer:0,
    why:'Catalysis and regulation are separable. An unphosphorylatable enzyme still performs its chemistry and still answers allosteric signals such as AMP, but the hormonal route — cAMP, PKA, phosphorylase kinase — can no longer reach it.'
  },
  {
    id:'GLY-017', m:'m2', area:'Debranching enzyme', level:'concept',
    stem:'Which two catalytic activities does the glycogen debranching enzyme carry?',
    options:[
      'Transfer of three α1→4-linked residues and hydrolysis of an α1→6 bond',
      'Transfer of seven α1→4-linked residues and formation of an α1→6 bond',
      'Phosphorolysis of an α1→4 bond and hydrolysis of an α1→6 bond',
      'Hydrolysis of an α1→4 bond and isomerization of glucose-1-phosphate'
    ],
    answer:0,
    why:'One protein, two jobs, in a fixed order: move three residues out of the way, then cut the last one off. Note the contrast with branching enzyme, which moves seven residues and creates an α1→6 bond rather than destroying one.'
  },
  {
    id:'GLY-018', m:'m2', area:'Debranching enzyme', level:'concept',
    stem:'The α1→6 glucosidase activity of debranching enzyme releases which product?',
    options:['Free glucose','Glucose-1-phosphate','Glucose-6-phosphate','UDP-glucose'],
    answer:0,
    why:'This step is a hydrolysis, so no phosphate is incorporated. It is the reason a fraction of the glucose leaving a glycogen particle is already free and needs hexokinase before entering glycolysis.'
  },
  {
    id:'GLY-019', m:'m2', area:'Debranching enzyme', level:'application',
    stem:'A hepatocyte degrades a glycogen particle completely. Which description fits the products released?',
    options:[
      'Mostly glucose-1-phosphate, with a smaller amount of free glucose',
      'Mostly free glucose, with a smaller amount of glucose-1-phosphate',
      'Equal amounts of glucose-1-phosphate and free glucose',
      'Mostly glucose-6-phosphate, with a smaller amount of glucose-1-phosphate'
    ],
    answer:0,
    why:'Phosphorylase handles the great majority of residues, and only the single residue at each branch point is released free by the glucosidase activity. With branch points every 8 to 12 residues, that is roughly one free glucose for every ten G1P.'
  },
  {
    id:'GLY-020', m:'m2', area:'Debranching enzyme', level:'integration',
    stem:'A patient\'s debranching enzyme is inactive while phosphorylase is normal. What is the expected structure of the accumulated glycogen?',
    options:[
      'Increased in amount, with abnormally short outer branches',
      'Increased in amount, with abnormally long outer branches',
      'Normal in amount, with normally spaced branch points',
      'Decreased in amount, with normal branching'
    ],
    answer:0,
    why:'Phosphorylase trims each outer branch down to about four residues and then halts, and nothing clears the branch point. Degradation stops there, leaving a particle with stubby outer chains — the limit dextrin picture of Cori disease.'
  },
  {
    id:'GLY-021', m:'m2', area:'G6P fates', level:'concept',
    stem:'Which enzyme interconverts glucose-1-phosphate and glucose-6-phosphate?',
    options:['Phosphoglucomutase','Phosphoglucose isomerase','Glucose-6-phosphatase','Hexokinase'],
    answer:0,
    why:'Phosphoglucomutase relocates the phosphate between carbon 1 and carbon 6, and it works in both directions — toward G6P during degradation, toward G1P on the way to UDP-glucose during synthesis.'
  },
  {
    id:'GLY-022', m:'m2', area:'G6P fates', level:'application',
    stem:'Glucose-6-phosphate generated from glycogen in a resting hepatocyte during a fast follows which route?',
    options:[
      'Conversion to free glucose by glucose-6-phosphatase and release into the blood',
      'Conversion to fructose-6-phosphate by phosphoglucose isomerase and entry into glycolysis',
      'Conversion to glucose-1-phosphate and reincorporation into glycogen',
      'Transport into the mitochondrion for direct oxidation'
    ],
    answer:0,
    why:'A fasting liver is degrading glycogen to serve the rest of the body, and the exit door is glucose-6-phosphatase. Removing the phosphate produces a neutral molecule that can cross the membrane and raise blood glucose.'
  },
  {
    id:'GLY-023', m:'m2', area:'G6P fates', level:'application',
    stem:'Glucose-6-phosphate generated from glycogen in a contracting myocyte follows which route?',
    options:[
      'Conversion to fructose-6-phosphate and entry into glycolysis',
      'Conversion to free glucose and release into the blood',
      'Conversion to UDP-glucose and reincorporation into glycogen',
      'Export to the liver for conversion to free glucose'
    ],
    answer:0,
    why:'Muscle has no glucose-6-phosphatase, so the phosphate stays on and the molecule is committed to glycolysis. Phosphoglucose isomerase makes fructose-6-phosphate, and the carbon continues toward ATP for the contracting muscle.'
  },
  {
    id:'GLY-024', m:'m2', area:'G6P fates', level:'integration',
    stem:'Glucose-6-phosphate rises in a myocyte. Beyond entering glycolysis, what additional effect does this molecule exert?',
    options:[
      'It inhibits phosphorylase b by shifting it toward the T state',
      'It activates phosphorylase b by shifting it toward the R state',
      'It activates glucose-6-phosphatase to permit glucose export',
      'It inhibits phosphoglucomutase and prevents further glycogen breakdown'
    ],
    answer:0,
    why:'Glucose-6-phosphate is both a metabolite and a signal. Its accumulation says the cell already has more mobilized glucose than it is consuming, so it allosterically damps further phosphorylase activity — product feedback working alongside ATP.'
  },

  /* ===================== MODULE 3 ===================== */
  {
    id:'GLY-025', m:'m3', area:'UDP-glucose', level:'concept',
    stem:'Which activated sugar donates glucose residues during glycogen synthesis?',
    options:['UDP-glucose','ADP-glucose','Glucose-1-phosphate','Glucose-6-phosphate'],
    answer:0,
    why:'Glycogen synthase works from UDP-glucose. Plants and bacteria use ADP-glucose for starch and glycogen respectively, which is a useful contrast but not the human pathway.'
  },
  {
    id:'GLY-026', m:'m3', area:'UDP-glucose', level:'concept',
    stem:'Which nucleotide does UDP-glucose pyrophosphorylase consume in forming UDP-glucose?',
    options:['UTP','ATP','GTP','CTP'],
    answer:0,
    why:'Glucose-1-phosphate attacks the α-phosphate of UTP, releasing pyrophosphate and leaving glucose linked to UDP. Hydrolysis of that pyrophosphate is what makes the step effectively irreversible.'
  },
  {
    id:'GLY-027', m:'m3', area:'UDP-glucose', level:'application',
    stem:'A cell line carries an inactivating mutation in inorganic pyrophosphatase. What happens to the rate of UDP-glucose formation?',
    options:[
      'It falls, because pyrophosphate accumulates and the reaction is no longer pulled forward',
      'It rises, because pyrophosphate is a positive effector of the pyrophosphorylase',
      'It is unchanged, because the pyrophosphorylase step is already irreversible',
      'It rises, because conserved pyrophosphate is used to regenerate UTP'
    ],
    answer:0,
    why:'The pyrophosphorylase reaction sits near equilibrium on its own. Rapid hydrolysis of pyrophosphate removes a product and drives the reaction toward UDP-glucose. Lose the hydrolysis and the driving force goes with it.'
  },
  {
    id:'GLY-028', m:'m3', area:'UDP-glucose', level:'integration',
    stem:'Phosphoglucomutase appears in both glycogen synthesis and glycogen degradation. What accounts for its participation in both?',
    options:[
      'It catalyzes a readily reversible step, and both pathways pass through glucose-1-phosphate',
      'It is expressed as two isoforms with opposite directional preferences',
      'It is activated by PKA during synthesis and by PP1 during degradation',
      'It phosphorylates glucose during synthesis and dephosphorylates it during degradation'
    ],
    answer:0,
    why:'Reciprocal regulation is applied at the committed, irreversible steps — phosphorylase and synthase — not at every enzyme. Phosphoglucomutase sits at a near-equilibrium junction that both routes traverse, so one enzyme serves both directions.'
  },
  {
    id:'GLY-029', m:'m3', area:'Glycogenin', level:'concept',
    stem:'What is the role of glycogenin in glycogen synthesis?',
    options:[
      'It glycosylates itself to create the primer chain that glycogen synthase extends',
      'It transfers seven-residue blocks to create the first branch point',
      'It activates glucose-1-phosphate by joining it to UTP',
      'It anchors the finished particle to the plasma membrane'
    ],
    answer:0,
    why:'Glycogen synthase can extend a chain but cannot start one, so something must lay down the first residues. Glycogenin does it by acting on itself, and stays at the core of the mature particle as a permanent record of where synthesis began.'
  },
  {
    id:'GLY-030', m:'m3', area:'Glycogenin', level:'concept',
    stem:'Roughly how many glucose units does glycogenin attach during autoglycosylation?',
    options:['About eight','About three','About twenty','About fifty'],
    answer:0,
    why:'About eight residues is enough to satisfy glycogen synthase, which needs a chain of at least four residues before it can extend. Glycogenin builds the primer and then hands the particle off.'
  },
  {
    id:'GLY-031', m:'m3', area:'Glycogenin', level:'application',
    stem:'A cell is supplied with abundant UDP-glucose and fully active glycogen synthase, but glycogenin is absent. What is observed?',
    options:[
      'No new glycogen particles are initiated',
      'Glycogen particles form but carry no branches',
      'Glycogen particles form with abnormally short chains',
      'Glycogen accumulates within lysosomes instead of the cytosol'
    ],
    answer:0,
    why:'Synthase is an elongase; it needs an existing chain of at least four residues to work on. With no primer and no protein to build one, there is nothing for synthase to grip, and initiation fails regardless of substrate supply.'
  },
  {
    id:'GLY-032', m:'m3', area:'Glycogenin', level:'integration',
    stem:'Glycogenin remains buried at the center of a mature glycogen particle. Which structural consequence follows?',
    options:[
      'The particle\'s single reducing end is anchored there and stays metabolically unavailable',
      'The particle carries one nonreducing end for every glycogenin molecule present',
      'Degradation proceeds inward from the surface toward glycogenin and then reverses',
      'Branching enzyme acts on glycogenin before it acts on the growing chains'
    ],
    answer:0,
    why:'The particle grows outward from glycogenin, so the one anomeric carbon never committed to a chain-extending bond is the one tethered at the core. All the metabolic action happens at the thousands of nonreducing ends on the surface.'
  },
  {
    id:'GLY-033', m:'m3', area:'Synthase and branching', level:'concept',
    stem:'Which bond does glycogen synthase form as it extends a chain?',
    options:['α1→4','α1→6','β1→4','β1→6'],
    answer:0,
    why:'Synthase makes linear α1→4 linkages exclusively. Branch points require a separate enzyme, which is why a cell can have functioning synthase and still produce structurally abnormal glycogen.'
  },
  {
    id:'GLY-034', m:'m3', area:'Synthase and branching', level:'application',
    stem:'Branching enzyme relocates a block of about seven residues from the end of a lengthening chain to an interior position. What is the net effect on the particle?',
    options:[
      'One additional nonreducing end, with no change in total glucose',
      'One additional nonreducing end, with seven glucose residues added',
      'One additional reducing end, with no change in total glucose',
      'No change in either end count or total glucose'
    ],
    answer:0,
    why:'Branching is rearrangement, not addition. The same residues end up attached at a new α1→6 position, and the payoff is an extra nonreducing end — one more site where synthase and phosphorylase can act.'
  },
  {
    id:'GLY-035', m:'m3', area:'Synthase and branching', level:'application',
    stem:'A cell has active glycogenin, active glycogen synthase, and inactive branching enzyme. What kind of glycogen is produced?',
    options:[
      'Long, sparsely branched chains that are poorly soluble',
      'Short chains with abnormally frequent branch points',
      'Normally branched glycogen at a reduced total amount',
      'No polysaccharide of any kind'
    ],
    answer:0,
    why:'Initiation and elongation are intact, so chains form, but nothing introduces α1→6 branches. The result is long amylose-like glycogen that dissolves poorly and mobilizes slowly — the structural basis of Andersen disease.'
  },
  {
    id:'GLY-036', m:'m3', area:'Synthase and branching', level:'integration',
    stem:'Glycogen synthase and glycogen phosphorylase both act at nonreducing ends of the same particle. Which mechanism keeps them from running simultaneously?',
    options:[
      'Reciprocal covalent regulation, in which one signal activates one enzyme and inactivates the other',
      'Physical separation, with synthesis in the cytosol and degradation in the lysosome',
      'Competition for nonreducing ends, with the more abundant enzyme excluding the other',
      'Sequential expression, with each enzyme transcribed while the other is degraded'
    ],
    answer:0,
    why:'Both enzymes are cytosolic and both sit on the same substrate, so separation cannot be structural. It is covalent: PKA phosphorylation activates the degradation arm and inactivates synthase, and PP1 reverses both. Running them together would burn ATP for no product.'
  },

  /* ===================== MODULE 4 ===================== */
  {
    id:'GLY-037', m:'m4', area:'Hormonal cascade', level:'concept',
    stem:'Which second messenger rises when glucagon binds its receptor on a hepatocyte?',
    options:['Cyclic AMP','Calcium','Inositol trisphosphate','Cyclic GMP'],
    answer:0,
    why:'Glucagon and epinephrine both act through G protein-coupled receptors that stimulate adenylate cyclase. The rise in cAMP is the shared entry point into the phosphorylation cascade.'
  },
  {
    id:'GLY-038', m:'m4', area:'Hormonal cascade', level:'application',
    stem:'Protein kinase A is activated in a hepatocyte. Which protein does it phosphorylate to promote glycogen breakdown?',
    options:[
      'Phosphorylase kinase',
      'Glycogen phosphorylase',
      'Adenylate cyclase',
      'Protein phosphatase 1'
    ],
    answer:0,
    why:'PKA acts one step upstream of the enzyme people expect. It phosphorylates phosphorylase kinase, which then phosphorylates glycogen phosphorylase — an extra tier that amplifies a small hormonal signal into a large metabolic one.'
  },
  {
    id:'GLY-039', m:'m4', area:'Hormonal cascade', level:'integration',
    stem:'A drug inhibits phosphodiesterase in hepatocytes. What is the expected effect on glycogen metabolism during a glucagon response?',
    options:[
      'Glycogen breakdown is prolonged, because cAMP persists and PKA stays active',
      'Glycogen breakdown ends sooner, because cAMP is converted to AMP more rapidly',
      'Glycogen synthesis is prolonged, because PKA can no longer reach glycogen synthase',
      'Glycogen metabolism is unchanged, because protein phosphatase 1 terminates the signal on its own'
    ],
    answer:0,
    why:'Phosphodiesterase is the off-switch for the second messenger itself. Block it and cAMP lingers, PKA stays active, and the degradative response outlasts the hormone. Protein phosphatase 1 works at a different level and cannot substitute.'
  },
  {
    id:'GLY-040', m:'m4', area:'Reciprocal regulation', level:'concept',
    stem:'What effect does PKA-mediated phosphorylation have on glycogen synthase?',
    options:[
      'It inactivates the enzyme',
      'It activates the enzyme',
      'It targets the enzyme for degradation',
      'It relocates the enzyme to the lysosome'
    ],
    answer:0,
    why:'The same kinase that switches degradation on switches synthesis off. This is why phosphorylation cannot be read as a synonym for activation — the outcome is a property of the substrate protein, not of the phosphate.'
  },
  {
    id:'GLY-041', m:'m4', area:'Reciprocal regulation', level:'application',
    stem:'Insulin rises after a carbohydrate-rich meal. What happens to glycogen synthase in the liver?',
    options:[
      'It is dephosphorylated and becomes active',
      'It is phosphorylated and becomes active',
      'It is dephosphorylated and becomes inactive',
      'It is phosphorylated and becomes inactive'
    ],
    answer:0,
    why:'Insulin inactivates glycogen synthase kinase and activates protein phosphatase 1, so synthase loses its inhibitory phosphates. For this enzyme the dephosphorylated state is the active one — the mirror image of phosphorylase.'
  },
  {
    id:'GLY-042', m:'m4', area:'Reciprocal regulation', level:'integration',
    stem:'Protein phosphatase 1 is activated in a hepatocyte. What happens to the two arms of glycogen metabolism?',
    options:[
      'Synthesis is favored and degradation is suppressed',
      'Both synthesis and degradation are suppressed',
      'Degradation is favored and synthesis is suppressed',
      'Both synthesis and degradation are stimulated'
    ],
    answer:0,
    why:'PP1 removes the phosphates the cascade installed. Phosphorylase loses its activating phosphate and quiets down; synthase loses its inhibitory phosphate and switches on. One enzyme reverses the whole hormonal response in a single move.'
  },
  {
    id:'GLY-043', m:'m4', area:'Allosteric control', level:'concept',
    stem:'Which form of glycogen phosphorylase is phosphorylated and favors the more active R state?',
    options:['Phosphorylase a','Phosphorylase b','The lysosomal isoform','The glycogenin-bound isoform'],
    answer:0,
    why:'"a" is the phosphorylated, more active form and dominates the liver; "b" is unphosphorylated, favors T, and dominates resting muscle. Both forms exist in both tissues — what differs is which one predominates and what each one listens to.'
  },
  {
    id:'GLY-044', m:'m4', area:'Allosteric control', level:'application',
    stem:'ATP and glucose-6-phosphate accumulate in a resting myocyte. What is their effect on phosphorylase b?',
    options:[
      'They shift the enzyme toward the less active T state',
      'They shift the enzyme toward the more active R state',
      'They convert the enzyme to phosphorylase a',
      'They dissociate the enzyme into inactive monomers'
    ],
    answer:0,
    why:'Both molecules report that the cell is energy-replete and already holds mobilized substrate. Shifting phosphorylase b toward T stops further glycogen breakdown — allosteric control acting on energy charge, with no hormone involved.'
  },
  {
    id:'GLY-045', m:'m4', area:'Allosteric control', level:'integration',
    stem:'Hepatic phosphorylase a remains active even when liver ATP is abundant, while muscle phosphorylase b does not. Which principle explains the difference?',
    options:[
      'Each isoform is tuned to the job its tissue performs, so the liver reads blood glucose while muscle reads its own energy charge',
      'The hepatic isoform has a lower affinity for glycogen and therefore requires no allosteric control',
      'The hepatic isoform cannot be dephosphorylated by protein phosphatase 1',
      'The muscle isoform is expressed during exercise and degraded at rest'
    ],
    answer:0,
    why:'Function drives regulation. Muscle spends glycogen on itself, so gating it by its own ATP supply is sensible. The liver spends glycogen on the whole body, so gating it by hepatic ATP would be counterproductive — it answers glucose and hormones instead.'
  },
  {
    id:'GLY-046', m:'m4', area:'Integrated regulation', level:'application',
    stem:'A sprinter begins a maximal effort. Which combination of intracellular signals raises glycogen phosphorylase activity in the working muscle?',
    options:[
      'Rising AMP together with rising calcium',
      'Rising ATP together with rising glucose-6-phosphate',
      'Rising glucagon together with rising glucose',
      'Rising insulin together with rising protein phosphatase 1 activity'
    ],
    answer:0,
    why:'Two independent inputs report the same situation. AMP signals that energy charge has fallen, and the calcium released to trigger contraction also activates phosphorylase kinase. Fuel supply is coupled directly to the act of contracting.'
  },
  {
    id:'GLY-047', m:'m4', area:'Integrated regulation', level:'integration',
    stem:'Epinephrine rises during exercise and acts on both liver and skeletal muscle, while glucagon acts on the liver alone. What accounts for the difference in muscle?',
    options:[
      'Muscle expresses β-adrenergic receptors but not glucagon receptors',
      'Muscle expresses glucagon receptors that are uncoupled from adenylate cyclase',
      'Muscle degrades circulating glucagon before it reaches its receptors',
      'Muscle terminates glucagon signaling through an unusually active phosphodiesterase'
    ],
    answer:0,
    why:'Hormonal responsiveness is set by receptor expression. Glucagon exists to defend blood glucose, and muscle glycogen never contributes to blood glucose, so a glucagon receptor there would serve no purpose. Epinephrine\'s broader role in the stress response is why muscle answers it.'
  },
  {
    id:'GLY-048', m:'m4', area:'Integrated regulation', level:'integration',
    stem:'A hepatocyte and a myocyte are both exposed to epinephrine. Which outcome distinguishes them?',
    options:[
      'The hepatocyte releases free glucose into the blood while the myocyte oxidizes glucose-6-phosphate internally',
      'The hepatocyte activates glycogen synthase while the myocyte activates phosphorylase',
      'The hepatocyte responds through cAMP while the myocyte responds through calcium alone',
      'The hepatocyte degrades glycogen while the myocyte synthesizes it'
    ],
    answer:0,
    why:'The signal and the cascade are the same in both cells; the difference is downstream. Only the hepatocyte has glucose-6-phosphatase, so only the hepatocyte can export the product. The myocyte keeps the phosphate on and burns the carbon itself.'
  },

  /* ===================== MODULE 5 ===================== */
  {
    id:'GLY-049', m:'m5', area:'Clinical reasoning', level:'application',
    stem:'A 6-month-old presents with fasting hypoglycemia, lactic acidosis, and marked hepatomegaly. Which tissue function has failed?',
    options:[
      'Hepatic release of glucose into the blood',
      'Skeletal muscle mobilization of glycogen during activity',
      'Lysosomal degradation of glycogen in cardiac muscle',
      'Intestinal absorption of dietary carbohydrate'
    ],
    answer:0,
    why:'Work outward from the presentation. Hypoglycemia specifically between feeds implicates hepatic glucose output, and hepatomegaly says substrate is accumulating in the liver. Naming the enzyme is the last step, not the first.'
  },
  {
    id:'GLY-050', m:'m5', area:'Clinical reasoning', level:'application',
    stem:'A 24-year-old reports cramps and weakness within the first minutes of vigorous exercise, with normal fasting blood glucose. Where does the defect lie?',
    options:[
      'In skeletal muscle glycogen mobilization',
      'In hepatic glucose export',
      'In lysosomal glycogen degradation',
      'In hepatic glycogen branching'
    ],
    answer:0,
    why:'Normal fasting glucose exonerates the liver. Symptoms confined to the opening minutes of hard exercise — the window in which muscle leans hardest on its own glycogen — localize the problem to muscle, arriving at McArdle disease by mechanism.'
  },
  {
    id:'GLY-051', m:'m5', area:'Clinical reasoning', level:'integration',
    stem:'An infant has hypotonia and cardiomegaly, with glycogen accumulating inside vacuoles in cardiac and skeletal muscle. Blood glucose is normal. Which compartment is affected?',
    options:[
      'The lysosome',
      'The cytosol',
      'The mitochondrial matrix',
      'The endoplasmic reticulum lumen'
    ],
    answer:0,
    why:'Normal blood glucose says the cytosolic pathway is intact — the liver still degrades glycogen and exports glucose. Glycogen trapped in vacuoles across multiple tissues points to the lysosomal route, which runs separately from cytosolic phosphorolysis. This is Pompe disease.'
  },
  {
    id:'GLY-052', m:'m5', area:'Clinical reasoning', level:'integration',
    stem:'A child has hepatomegaly and fasting hypoglycemia along with muscle weakness. Structural analysis shows glycogen with abnormally short outer branches. Which step is impaired?',
    options:[
      'Removal of the branch point during degradation',
      'Formation of the branch point during synthesis',
      'Hydrolysis of glucose-6-phosphate in the liver',
      'Initiation of the glycogen primer'
    ],
    answer:0,
    why:'Short outer branches are a degradation signature: phosphorylase trimmed each branch to about four residues and then stalled with nothing to clear the branch point. Involvement of both liver and muscle fits debranching enzyme, which serves both tissues — Cori disease.'
  },
  {
    id:'GLY-053', m:'m5', area:'Clinical reasoning', level:'integration',
    stem:'A patient with a defect in muscle glycogen phosphorylase maintains normal blood glucose during an overnight fast. Which explanation accounts for this?',
    options:[
      'Hepatic phosphorylase is a distinct isozyme and remains functional',
      'Muscle glycogen is converted to free glucose by an alternative muscle enzyme',
      'Muscle exports glucose-6-phosphate that the liver dephosphorylates',
      'The lysosomal pathway compensates by releasing glucose from muscle glycogen'
    ],
    answer:0,
    why:'Liver and muscle phosphorylases are separate gene products, so a muscle-specific defect leaves hepatic glycogenolysis untouched. It also reflects the underlying physiology: muscle glycogen never contributes to blood glucose even when everything is working.'
  },
  {
    id:'GLY-054', m:'m5', area:'Clinical reasoning', level:'integration',
    stem:'A clinician wants to distinguish a hepatic from a muscular glycogen storage disorder using history alone. Which pair of features is most informative?',
    options:[
      'Fasting tolerance and exercise tolerance',
      'Appetite and sleep pattern',
      'Height percentile and head circumference',
      'Skin pigmentation and hair texture'
    ],
    answer:0,
    why:'The two stores have two jobs, so they fail in two recognizable ways. A liver defect shows up when a meal is missed; a muscle defect shows up when the muscle is asked to work. Asking about fasting and exertion separates the categories before any enzyme assay.'
  },
  {
    id:'GLY-055', m:'m5', area:'Glycogen storage diseases', level:'concept',
    stem:'Which enzyme is deficient in Von Gierke disease (type I)?',
    options:['Glucose-6-phosphatase','Glycogen debranching enzyme','Muscle glycogen phosphorylase','Lysosomal α1→4 glucosidase'],
    answer:0,
    why:'Without glucose-6-phosphatase the liver can dismantle glycogen but cannot release the product, so glucose-6-phosphate and glycogen accumulate while blood glucose falls between meals. Hepatomegaly with severe fasting hypoglycemia is the classic picture.'
  },
  {
    id:'GLY-056', m:'m5', area:'Glycogen storage diseases', level:'concept',
    stem:'Which enzyme is deficient in McArdle disease (type V)?',
    options:['Muscle glycogen phosphorylase','Glucose-6-phosphatase','Branching enzyme','Phosphorylase kinase'],
    answer:0,
    why:'Muscle cannot mobilize its own glycogen, so exercise brings on painful cramps and early fatigue. Blood glucose is unaffected because the hepatic isozyme is a separate gene product and continues working normally.'
  },
  {
    id:'GLY-057', m:'m5', area:'Glycogen storage diseases', level:'application',
    stem:'Which enzyme deficiency produces glycogen that is normal in amount but has unusually long, sparsely branched outer chains?',
    options:['Branching enzyme','Debranching enzyme','Glucose-6-phosphatase','Muscle glycogen phosphorylase'],
    answer:0,
    why:'Structure reports the missing enzyme. With branching enzyme absent, synthase extends α1→4 chains normally but no α1→6 links are introduced, giving long amylose-like glycogen. The insoluble product drives progressive liver disease in Andersen disease.'
  },
  {
    id:'GLY-058', m:'m5', area:'Glycogen storage diseases', level:'application',
    stem:'Pompe disease involves glycogen accumulation within lysosomes across many tissues. Which enzyme is deficient?',
    options:[
      'Lysosomal α1→4 glucosidase',
      'Cytosolic glycogen phosphorylase',
      'Cytosolic debranching enzyme',
      'Glucose-6-phosphatase'
    ],
    answer:0,
    why:'A separate lysosomal route degrades glycogen taken up by autophagy, and it runs on acid α-glucosidase rather than phosphorolysis. Because the cytosolic pathway is untouched, blood glucose is normal while glycogen builds up inside lysosomes, hitting cardiac and skeletal muscle hardest.'
  },
  {
    id:'GLY-059', m:'m5', area:'Glycogen storage diseases', level:'integration',
    stem:'Cori disease and Von Gierke disease both cause hepatomegaly and fasting hypoglycemia, but Cori disease follows a milder course. Which explanation accounts for the difference?',
    options:[
      'In Cori disease phosphorylase still releases glucose from outer branches, so some hepatic glucose output persists',
      'In Cori disease the liver compensates by increasing glycogen synthesis',
      'In Cori disease muscle exports free glucose to support blood glucose',
      'In Cori disease glucose-6-phosphatase activity rises to offset the defect'
    ],
    answer:0,
    why:'Degradation is partially blocked rather than fully blocked. Phosphorylase trims each outer branch to about four residues before stalling, so a meaningful fraction of the glycogen is still mobilized. In type I the final exit step is gone and nothing gets out at all.'
  },
  {
    id:'GLY-060', m:'m5', area:'Glycogen storage diseases', level:'integration',
    stem:'A newly described disorder impairs phosphorylase kinase in the liver while leaving glycogen phosphorylase itself intact. Which presentation is expected?',
    options:[
      'Mild hepatomegaly with mild hypoglycemia, since hormonal activation of phosphorylase is blunted',
      'Severe fasting hypoglycemia with lactic acidosis, since glucose export is abolished',
      'Exercise intolerance with cramps, since muscle glycogen cannot be mobilized',
      'Cardiomyopathy in infancy, since glycogen accumulates within lysosomes'
    ],
    answer:0,
    why:'Losing the kinase weakens the hormonal route to phosphorylase without eliminating the enzyme, and allosteric activation still operates. The result is a partial defect — the mild phenotype described for type VIII, and a good illustration of how severity tracks how completely a step is blocked.'
  }
];
