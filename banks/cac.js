/* ============================================================
   BANK — Citric Acid Cycle
   PHA3134 Biochemistry · Q2 2026 · C. Brackett, Ph.D.

   Pure content. No DOM, no dependency on shared/ or on the page.
   Loads FIRST (see architecture doc §3) because storage.js needs
   TOPIC_ID and engine.js needs CHECKPOINTS, CARDS and POOL.

   Question IDs are permanent: CAC-001 upward, never reused, never
   renumbered. Flashcards are CAC-CARD-##. Checkpoint IDs are the
   object's own property names (c1, c1b, ...).
   ============================================================ */

var TOPIC_ID    = 'cac';
var TOPIC_TITLE = 'The Citric Acid Cycle';

/* ------------------------------------------------------------
   CHECKPOINTS — the in-section "Can you predict it?" questions.
   Retry-until-correct. `answer` is an index into `options` BEFORE
   shuffling. Every `why` begins with a space because engine.js
   concatenates it directly after "That's it."
   ------------------------------------------------------------ */
var CHECKPOINTS = {

  /* ---------- Module 1 · Section 1 · Where pyruvate goes ---------- */
  c1: {
    options: [
      'The mitochondrial matrix',
      'The cytosol',
      'The intermembrane space',
      'The inner mitochondrial membrane'
    ],
    answer: 0,
    why: ' Glycolysis ends in the cytosol, but the pyruvate dehydrogenase complex and every citric acid cycle enzyme sit in the mitochondrial matrix. Pyruvate has to be carried across both mitochondrial membranes before it can be converted to acetyl-CoA. Succinate dehydrogenase is the one partial exception, since it is embedded in the inner membrane as Complex II.'
  },
  c1b: {
    options: [
      'The conversion of pyruvate to acetyl-CoA is irreversible',
      'Acetyl-CoA is too large to leave the matrix',
      'The cytosol lacks a pool of coenzyme A',
      'Pyruvate is consumed by glycolysis before it can be regenerated'
    ],
    answer: 0,
    why: ' Oxidative decarboxylation by the PDH complex releases CO\u2082 and is thermodynamically irreversible, so carbon that enters acetyl-CoA this way cannot be turned back into pyruvate. This is the reason acetyl-CoA from carbohydrate cannot be used to make net glucose \u2014 a point that becomes important again in the gluconeogenesis material.'
  },
  c1c: {
    options: [
      'It is transported into the matrix and oxidized to acetyl-CoA',
      'It is reduced to lactate in the cytosol',
      'It is carboxylated to oxaloacetate in the cytosol',
      'It is exported from the cell for use by other tissues'
    ],
    answer: 0,
    why: ' With oxygen available and ATP demand high, the aerobic route dominates: pyruvate enters the matrix and PDH converts it to acetyl-CoA, which feeds the citric acid cycle. Lactate formation is the redox-balancing route used when the electron transport chain cannot regenerate NAD\u207A.'
  },

  /* ---------- Module 1 · Section 2 · Building the PDH complex ---------- */
  c2: {
    options: [
      'Thiamine pyrophosphate',
      'Lipoic acid',
      'Coenzyme A',
      'Flavin adenine dinucleotide'
    ],
    answer: 0,
    why: ' E1 (pyruvate dehydrogenase) uses thiamine pyrophosphate to carry out the decarboxylation of pyruvate and hold the resulting two-carbon hydroxyethyl fragment. Lipoic acid belongs to E2, and FAD with NAD\u207A belong to E3.'
  },
  c2b: {
    options: [
      'It regenerates the oxidized form of lipoamide needed by E2',
      'It releases CO\u2082 from pyruvate',
      'It transfers the acetyl group to coenzyme A',
      'It carries pyruvate across the inner mitochondrial membrane'
    ],
    answer: 0,
    why: ' E3 (dihydrolipoyl dehydrogenase) reoxidizes the reduced lipoamide left behind by E2, passing electrons first to its FAD and then to NAD\u207A to make NADH. Without that regeneration step the complex would stall after a single turnover, because E2 would have no oxidized lipoamide to accept the next acetyl group.'
  },
  c2c: {
    options: [
      'Thiamine',
      'Riboflavin',
      'Niacin',
      'Pantothenate'
    ],
    answer: 0,
    why: ' Thiamine (vitamin B1) is the precursor of thiamine pyrophosphate. Riboflavin (B2) gives FAD, niacin (B3) gives NAD\u207A, and pantothenate (B5) gives coenzyme A \u2014 all four vitamins are represented in this one complex.'
  },
  c2d: {
    options: [
      'Oxidative decarboxylation reactions that depend on thiamine pyrophosphate',
      'Hydration reactions catalyzed by fumarase',
      'Substrate-level phosphorylation by succinyl-CoA synthetase',
      'The isomerization of citrate to isocitrate'
    ],
    answer: 0,
    why: ' Poor thiamine status limits thiamine pyrophosphate, which is required by both the pyruvate dehydrogenase complex and the \u03B1-ketoglutarate dehydrogenase complex. Both are oxidative decarboxylations, and both slow when TPP is scarce \u2014 which is why thiamine deficiency has such a broad effect on oxidative metabolism.'
  },

  /* ---------- Module 1 · Section 3 · Tracking carbon and electrons ---------- */
  c3: {
    options: [
      'One carbon leaves as CO\u2082 and two remain in the acetyl group',
      'Two carbons leave as CO\u2082 and one remains in the acetyl group',
      'All three carbons are retained in acetyl-CoA',
      'One carbon leaves as CO\u2082 and two are transferred to oxaloacetate'
    ],
    answer: 0,
    why: ' Pyruvate has three carbons. Decarboxylation at E1 releases one as CO\u2082, leaving a two-carbon unit that ends up as the acetyl group of acetyl-CoA. The coenzyme A portion is a carrier, not part of the two-carbon count that enters the cycle.'
  },
  c3b: {
    options: [
      'NAD\u207A, forming NADH',
      'FAD, forming FADH\u2082',
      'Coenzyme Q, forming ubiquinol',
      'Oxygen, forming water'
    ],
    answer: 0,
    why: ' Electrons removed from pyruvate pass through lipoamide and the FAD of E3 and are finally deposited on NAD\u207A, producing one NADH per pyruvate. FAD acts as an intermediate carrier inside E3 rather than as the final acceptor for this complex.'
  },
  c3c: {
    options: [
      'One',
      'Two',
      'Three',
      'Zero'
    ],
    answer: 0,
    why: ' The PDH complex releases exactly one CO\u2082 per pyruvate. The other two CO\u2082 that come from that carbon skeleton are released later, inside the cycle, at isocitrate dehydrogenase and the \u03B1-ketoglutarate dehydrogenase complex. Keeping the PDH CO\u2082 separate from the two cycle CO\u2082 is the bookkeeping step students most often merge by accident.'
  },

  /* ---------- Module 1 · Section 4 · The gateway decision ---------- */
  c4: {
    options: [
      'PDH activity decreases',
      'PDH activity increases',
      'PDH activity is unchanged',
      'PDH is converted into pyruvate carboxylase'
    ],
    answer: 0,
    why: ' ATP, NADH and acetyl-CoA are all signals that the cell is energy-replete, and all three inhibit the PDH complex \u2014 acetyl-CoA and NADH by direct product inhibition, and ATP by activating pyruvate dehydrogenase kinase. Committing more pyruvate to acetyl-CoA when acetyl-CoA is already accumulating would waste substrate.'
  },
  c4b: {
    options: [
      'The regulated activity of the PDH complex',
      'The rate at which pyruvate leaves the mitochondrion',
      'The concentration of citrate in the cytosol',
      'The availability of oxaloacetate in the matrix'
    ],
    answer: 0,
    why: ' Because the reaction cannot run backward, the cell has to control it at the point of entry. That makes PDH activity itself the decision point for whether a molecule of pyruvate is committed to oxidation \u2014 and it is why the complex carries both allosteric regulation and a phosphorylation switch.'
  },

  /* ---------- Module 2 · Section 1 · Building the cycle ---------- */
  c5: {
    options: [
      'Isocitrate',
      '\u03B1-Ketoglutarate',
      'Succinyl-CoA',
      'Malate'
    ],
    answer: 0,
    why: ' Aconitase isomerizes citrate to isocitrate by moving a hydroxyl group, converting a tertiary alcohol that cannot be oxidized into a secondary alcohol that can. That single rearrangement is what makes the next step, oxidative decarboxylation by isocitrate dehydrogenase, chemically possible.'
  },
  c5b: {
    options: [
      'Citrate synthase',
      'Aconitase',
      'Malate dehydrogenase',
      'Succinyl-CoA synthetase'
    ],
    answer: 0,
    why: ' Citrate synthase condenses the two-carbon acetyl group of acetyl-CoA with four-carbon oxaloacetate to give six-carbon citrate. It is one of the effectively irreversible steps of the cycle and one of its four main control points.'
  },
  c5c: {
    options: [
      'Oxaloacetate',
      'Citrate',
      'Succinate',
      '\u03B1-Ketoglutarate'
    ],
    answer: 0,
    why: ' Oxaloacetate is both the starting acceptor and the final product, which is what makes the pathway a cycle: one oxaloacetate can carry many acetyl groups through in succession, so the cell needs only catalytic amounts of it. That also explains why draining oxaloacetate for biosynthesis is so disruptive.'
  },

  /* ---------- Module 2 · Section 2 · Reaction detective ---------- */
  c6: {
    options: [
      'Oxidation, with FAD reduced to FADH\u2082',
      'Reduction, with FADH\u2082 oxidized to FAD',
      'Oxidation, with NAD\u207A reduced to NADH',
      'Hydration, with no change in oxidation state'
    ],
    answer: 0,
    why: ' Succinate loses two hydrogens to form the carbon\u2013carbon double bond of fumarate, so succinate is oxidized. The electrons go to the tightly bound FAD of succinate dehydrogenase, giving FADH\u2082. This is the only FAD-linked oxidation in the cycle.'
  },
  c6b: {
    options: [
      'Succinate dehydrogenase',
      'Malate dehydrogenase',
      'Isocitrate dehydrogenase',
      'Citrate synthase'
    ],
    answer: 0,
    why: ' Succinate dehydrogenase is embedded in the inner mitochondrial membrane and serves as Complex II of the electron transport chain. Its bound FADH\u2082 hands electrons directly to coenzyme Q rather than releasing a soluble carrier, which is one reason FADH\u2082 yields less ATP than NADH.'
  },
  c6c: {
    options: [
      'Water is added across the double bond to give malate',
      'Water is removed to give a double bond',
      'Coenzyme A is added to give succinyl-CoA',
      'Carbon dioxide is released to give a four-carbon product'
    ],
    answer: 0,
    why: ' Fumarase hydrates the double bond of fumarate to give malate. No electrons are transferred, so no NADH or FADH\u2082 is made \u2014 the point of the step is to install the hydroxyl group that malate dehydrogenase will oxidize in the final reaction.'
  },

  /* ---------- Module 2 · Section 3 · The reaction passport ---------- */
  c7: {
    options: [
      'Isocitrate dehydrogenase',
      'Aconitase',
      'Succinate dehydrogenase',
      'Fumarase'
    ],
    answer: 0,
    why: ' Isocitrate dehydrogenase catalyzes the first oxidative decarboxylation of the cycle: six-carbon isocitrate is oxidized and loses CO\u2082 to give five-carbon \u03B1-ketoglutarate, generating the first NADH. It is irreversible and is one of the cycle\u0027s main regulatory points.'
  },
  c7b: {
    options: [
      'Succinyl-CoA synthetase',
      'Citrate synthase',
      '\u03B1-Ketoglutarate dehydrogenase',
      'Malate dehydrogenase'
    ],
    answer: 0,
    why: ' Succinyl-CoA synthetase cleaves the high-energy thioester bond of succinyl-CoA and couples that energy to phosphorylating ADP or GDP. This is substrate-level phosphorylation \u2014 nucleotide made directly by a reaction rather than by the proton gradient. Tissue-specific isoforms determine whether ATP or GTP is the product.'
  },
  c7c: {
    options: [
      'A four-carbon product, one NADH, and one CO\u2082',
      'A four-carbon product, one FADH\u2082, and one CO\u2082',
      'A five-carbon product, one NADH, and no CO\u2082',
      'A six-carbon product, one NADH, and one CO\u2082'
    ],
    answer: 0,
    why: ' The \u03B1-ketoglutarate dehydrogenase complex is built on the same E1\u2013E2\u2013E3 plan as PDH and uses the same five coenzymes. It oxidatively decarboxylates five-carbon \u03B1-ketoglutarate to four-carbon succinyl-CoA, releasing the second CO\u2082 of the cycle and generating the second NADH.'
  },

  /* ---------- Module 2 · Section 4 · Energy harvest ---------- */
  c8: {
    options: [
      'Three NADH, one FADH\u2082, one ATP or GTP, and two CO\u2082',
      'Two NADH, two FADH\u2082, one ATP or GTP, and two CO\u2082',
      'Three NADH, one FADH\u2082, two ATP or GTP, and three CO\u2082',
      'Four NADH, one FADH\u2082, one ATP or GTP, and two CO\u2082'
    ],
    answer: 0,
    why: ' Per acetyl-CoA the cycle yields three NADH (isocitrate dehydrogenase, \u03B1-ketoglutarate dehydrogenase, malate dehydrogenase), one FADH\u2082 (succinate dehydrogenase), one ATP or GTP (succinyl-CoA synthetase), and two CO\u2082. The NADH made by PDH is counted separately, before the cycle begins.'
  },
  c8b: {
    options: [
      'Six NADH, two FADH\u2082, two ATP or GTP, and four CO\u2082',
      'Three NADH, one FADH\u2082, one ATP or GTP, and two CO\u2082',
      'Eight NADH, two FADH\u2082, two ATP or GTP, and six CO\u2082',
      'Six NADH, four FADH\u2082, two ATP or GTP, and four CO\u2082'
    ],
    answer: 0,
    why: ' One glucose gives two pyruvate, so everything the cycle produces per acetyl-CoA doubles. The two NADH and two CO\u2082 generated by the PDH complex are a separate line item \u2014 keeping them out of this total is what keeps the bookkeeping honest.'
  },
  c8c: {
    options: [
      'Glucose is split into two pyruvate, each yielding one acetyl-CoA',
      'Each turn of the cycle oxidizes one carbon of an acetyl group',
      'Oxaloacetate is consumed and must be rebuilt after each turn',
      'Two turns are needed to release all six carbons of glucose as CO\u2082'
    ],
    answer: 0,
    why: ' Glycolysis splits the six-carbon glucose into two three-carbon pyruvate, and each pyruvate becomes one acetyl-CoA. Since the cycle accepts one acetyl-CoA per turn, one glucose requires two turns. Oxaloacetate is regenerated each turn rather than consumed.'
  },

  /* ---------- Module 2 · Section 5 · The malate dehydrogenase paradox ---------- */
  c9: {
    options: [
      'Oxaloacetate is consumed rapidly by citrate synthase',
      'Malate dehydrogenase couples the reaction to ATP hydrolysis',
      'The matrix maintains a high NADH to NAD\u207A ratio',
      'Fumarase supplies malate at a concentration above its K\u2098'
    ],
    answer: 0,
    why: ' The standard free energy change for malate oxidation is positive, so on paper the reverse reaction is favored. In the cell, citrate synthase pulls oxaloacetate away as fast as it appears, keeping the product concentration very low. By mass action, that keeps the malate dehydrogenase reaction running forward.'
  },
  c9b: {
    options: [
      'Oxaloacetate accumulates and the malate dehydrogenase reaction slows',
      'Oxaloacetate falls and the malate dehydrogenase reaction accelerates',
      'Malate is converted directly to fumarate to relieve the block',
      'The cycle switches to using \u03B1-ketoglutarate as its entry point'
    ],
    answer: 0,
    why: ' Removing the pull removes the thermodynamic advantage. With oxaloacetate no longer being consumed, its concentration rises and the unfavorable equilibrium of malate oxidation reasserts itself, so flux through malate dehydrogenase falls. This is a clean illustration of how coupled reactions, not just individual \u0394G\u00B0 values, determine direction in a cell.'
  },

  /* ---------- Module 3 · Section 1 · The control points ---------- */
  c10: {
    options: [
      'Citrate synthase, isocitrate dehydrogenase, and \u03B1-ketoglutarate dehydrogenase',
      'Aconitase, fumarase, and malate dehydrogenase',
      'Succinyl-CoA synthetase, succinate dehydrogenase, and fumarase',
      'Aconitase, isocitrate dehydrogenase, and succinate dehydrogenase'
    ],
    answer: 0,
    why: ' Together with the pyruvate dehydrogenase complex just upstream, these three are the main regulated steps. Each catalyzes an effectively irreversible reaction, which is the general rule for where pathways are controlled \u2014 regulating a reaction near equilibrium has little effect on net flux.'
  },
  c10b: {
    options: [
      'Succinyl-CoA signals that the cycle already holds enough intermediate downstream',
      'Succinyl-CoA is a precursor of oxaloacetate and would otherwise be depleted',
      'Succinyl-CoA competes with NADH at the electron transport chain',
      'Succinyl-CoA is the direct product of the citrate synthase reaction'
    ],
    answer: 0,
    why: ' Succinyl-CoA sits four steps downstream of citrate. If it is piling up, carbon is entering faster than the later steps can process it, so slowing the entry reaction is the appropriate response. This is feedback inhibition by a downstream intermediate rather than by the final product.'
  },
  c10c: {
    options: [
      'ATP, NADH, citrate, and succinyl-CoA',
      'ADP, NAD\u207A, and oxaloacetate',
      'Ca\u00B2\u207A, pyruvate, and acetyl-CoA',
      'ADP, citrate, and coenzyme A'
    ],
    answer: 0,
    why: ' Citrate synthase is inhibited by ATP and NADH, which report a high energy charge, and by citrate and succinyl-CoA, which report that the cycle is already well supplied. It is activated by ADP and by its own substrate oxaloacetate.'
  },

  /* ---------- Module 3 · Section 2 · Energy state ---------- */
  c11: {
    options: [
      'Flux through the cycle falls',
      'Flux through the cycle rises',
      'Flux through the cycle is unchanged',
      'The cycle reverses direction to consume NADH'
    ],
    answer: 0,
    why: ' High ATP/ADP and high NADH/NAD\u207A both signal that the cell has more energy than it currently needs. ATP and NADH inhibit PDH, citrate synthase, isocitrate dehydrogenase and \u03B1-ketoglutarate dehydrogenase, so flux drops. A shortage of NAD\u207A also directly limits the three NAD\u207A-dependent dehydrogenases.'
  },
  c11b: {
    options: [
      'Isocitrate dehydrogenase is activated',
      'Isocitrate dehydrogenase is inhibited',
      'Citrate synthase is inhibited',
      'Succinate dehydrogenase is inhibited'
    ],
    answer: 0,
    why: ' Rising ADP means ATP is being consumed, so the cell needs more reducing equivalents for oxidative phosphorylation. ADP allosterically activates isocitrate dehydrogenase and citrate synthase, increasing flux at exactly the moment demand rises.'
  },

  /* ---------- Module 3 · Section 3 · The phosphorylation switch ---------- */
  c12: {
    options: [
      'The complex becomes inactive',
      'The complex becomes more active',
      'The complex is degraded',
      'The complex switches to carboxylating pyruvate'
    ],
    answer: 0,
    why: ' Pyruvate dehydrogenase kinase transfers a phosphate onto the E1 subunit, and that phosphorylation inactivates the complex. This is the piece students most often reverse: here the kinase turns the enzyme off, not on.'
  },
  c12b: {
    options: [
      'Pyruvate dehydrogenase phosphatase',
      'Pyruvate dehydrogenase kinase',
      'Pyruvate carboxylase',
      'Succinyl-CoA synthetase'
    ],
    answer: 0,
    why: ' Pyruvate dehydrogenase phosphatase removes the phosphate and restores activity. Its action is favored when ADP, pyruvate, and \u2014 in muscle \u2014 Ca\u00B2\u207A are elevated, which are all signals of high energy demand.'
  },
  c12c: {
    options: [
      'The kinase is activated, so more PDH is phosphorylated and inactive',
      'The kinase is inhibited, so more PDH is dephosphorylated and active',
      'The phosphatase is activated, so more PDH becomes active',
      'Both the kinase and the phosphatase are inhibited, leaving PDH unchanged'
    ],
    answer: 0,
    why: ' A high ATP concentration activates pyruvate dehydrogenase kinase, which phosphorylates and switches off PDH. NADH and acetyl-CoA reinforce the same signal. The result is that pyruvate is spared when the cell already has ample energy.'
  },

  /* ---------- Module 3 · Section 4 · Physiologic challenge ---------- */
  c13: {
    options: [
      'PDH, isocitrate dehydrogenase and \u03B1-ketoglutarate dehydrogenase are all activated',
      'All three are inhibited by the rise in Ca\u00B2\u207A',
      'PDH is activated while the two dehydrogenases are inhibited',
      '\u03B1-Ketoglutarate dehydrogenase responds while the other two hold steady'
    ],
    answer: 0,
    why: ' The same Ca\u00B2\u207A signal that triggers contraction also activates PDH (through the phosphatase), isocitrate dehydrogenase and \u03B1-ketoglutarate dehydrogenase. Rising ADP reinforces the effect. Energy production is therefore switched on by the same signal that creates the energy demand \u2014 an efficient piece of coordination.'
  },
  c13b: {
    options: [
      'Flux falls, because ATP and NADH inhibit the regulated enzymes',
      'Flux rises, because substrate is abundant',
      'Flux is unchanged, because the cycle runs at a constant rate',
      'Flux falls, because oxygen is no longer available'
    ],
    answer: 0,
    why: ' In a resting, energy-rich cell, ATP and NADH accumulate and inhibit PDH, citrate synthase, isocitrate dehydrogenase and \u03B1-ketoglutarate dehydrogenase. Oxygen is still present; what has changed is demand, not supply.'
  },

  /* ---------- Module 4 · Section 1 · Draining the cycle ---------- */
  c14: {
    options: [
      'Fatty acids and cholesterol',
      'Heme',
      'Purine nucleotides',
      'Glutamate and other amino acids'
    ],
    answer: 0,
    why: ' Citrate carries acetyl units out of the mitochondrion to the cytosol, where they are released as acetyl-CoA for fatty acid and cholesterol synthesis. This is how a cell in a fed, energy-rich state converts excess carbon into stored lipid.'
  },
  c14b: {
    options: [
      'Heme',
      'Fatty acids',
      'Aspartate',
      'Glutamate'
    ],
    answer: 0,
    why: ' Succinyl-CoA is the entry point for heme synthesis, condensing with glycine in the first committed step. This links the citric acid cycle directly to red blood cell production, and is one reason disorders of heme synthesis can involve metabolic intermediates.'
  },
  c14c: {
    options: [
      'Acetyl-CoA requires oxaloacetate as a partner in order to enter the cycle',
      'Acetyl-CoA is unable to cross the inner mitochondrial membrane',
      'Acetyl-CoA inhibits the regulated enzymes of the cycle',
      'Acetyl-CoA is converted to citrate without the help of an enzyme'
    ],
    answer: 0,
    why: ' Citrate synthase requires both substrates. If oxaloacetate has been drained away for biosynthesis, adding more acetyl-CoA simply leaves it with no partner to condense with, and flux stays low. This is exactly why the cell needs anaplerotic reactions rather than more fuel.'
  },

  /* ---------- Module 4 · Section 2 · Rescuing the cycle ---------- */
  c15: {
    options: [
      'Pyruvate carboxylase, converting pyruvate to oxaloacetate',
      'Pyruvate dehydrogenase, converting pyruvate to acetyl-CoA',
      'Malate dehydrogenase, converting malate to oxaloacetate',
      'Aspartate transaminase, converting oxaloacetate to aspartate'
    ],
    answer: 0,
    why: ' Pyruvate carboxylase is the principal anaplerotic enzyme. It carboxylates pyruvate to oxaloacetate, refilling the pool of the one intermediate that acetyl-CoA needs in order to enter the cycle at all.'
  },
  c15b: {
    options: [
      'Biotin',
      'Thiamine pyrophosphate',
      'Lipoic acid',
      'Cobalamin'
    ],
    answer: 0,
    why: ' Pyruvate carboxylase is a biotin-dependent enzyme, and biotin is vitamin B7. Biotin is the standard cofactor for carboxylases, where it serves as a carrier for an activated carboxyl group.'
  },
  c15c: {
    options: [
      'Rising acetyl-CoA signals that oxaloacetate is limiting, so more should be made',
      'Acetyl-CoA is a substrate of pyruvate carboxylase and is consumed by it',
      'Acetyl-CoA activation prevents pyruvate from being oxidized to CO\u2082',
      'Acetyl-CoA activation allows the cycle to run without oxaloacetate'
    ],
    answer: 0,
    why: ' If acetyl-CoA is piling up, it is not being consumed \u2014 which usually means its partner, oxaloacetate, has run short. Having acetyl-CoA activate pyruvate carboxylase directs pyruvate toward oxaloacetate at precisely the moment that is what the cycle needs. It is a neat example of a metabolite reporting on a shortage of something else.'
  },

  /* ---------- Module 4 · Section 3 · Alternative entry points ---------- */
  c16: {
    options: [
      '\u03B1-Ketoglutarate',
      'Oxaloacetate',
      'Succinyl-CoA',
      'Citrate'
    ],
    answer: 0,
    why: ' Glutamate dehydrogenase removes the amino group of glutamate to give \u03B1-ketoglutarate, which enters the cycle directly. This link runs in both directions, which is why \u03B1-ketoglutarate is also listed as a precursor for amino acid synthesis.'
  },
  c16b: {
    options: [
      'Aspartate transaminase, producing oxaloacetate',
      'Glutamate dehydrogenase, producing oxaloacetate',
      'Aspartate transaminase, producing \u03B1-ketoglutarate',
      'Pyruvate carboxylase, producing aspartate'
    ],
    answer: 0,
    why: ' Aspartate transaminase moves the amino group of aspartate onto \u03B1-ketoglutarate, leaving oxaloacetate. Because oxaloacetate is the intermediate most likely to become limiting, this is a useful second route for replenishing it.'
  },
  c16c: {
    options: [
      'Cobalamin',
      'Biotin',
      'Thiamine',
      'Riboflavin'
    ],
    answer: 0,
    why: ' Methylmalonyl-CoA mutase requires cobalamin (vitamin B12) to rearrange methylmalonyl-CoA into succinyl-CoA. This is the last step of the route that brings carbon from propionyl-CoA \u2014 derived from odd-chain fatty acids and certain amino acids \u2014 into the cycle, and it is why methylmalonic acid accumulates in B12 deficiency.'
  },

  /* ---------- Module 5 · Section 1 · Pulling the oxygen plug ---------- */
  c17: {
    options: [
      'Oxygen is needed to regenerate NAD\u207A and FAD through the electron transport chain',
      'Oxygen is a direct substrate of isocitrate dehydrogenase',
      'Oxygen is required to transport pyruvate into the matrix',
      'Oxygen is consumed when citrate synthase condenses acetyl-CoA with oxaloacetate'
    ],
    answer: 0,
    why: ' No citric acid cycle enzyme uses molecular oxygen as a substrate. The dependence is indirect: the cycle needs a continuous supply of oxidized NAD\u207A and FAD, and only the electron transport chain \u2014 with oxygen as its final electron acceptor \u2014 can regenerate them. Remove oxygen and the carriers stay reduced.'
  },
  c17b: {
    options: [
      'NADH accumulates and NAD\u207A becomes scarce',
      'NAD\u207A accumulates and NADH becomes scarce',
      'Both NADH and NAD\u207A fall in parallel',
      'FADH\u2082 is converted back to FAD by an alternative acceptor'
    ],
    answer: 0,
    why: ' With no final electron acceptor the chain backs up, so NADH cannot be reoxidized. NADH accumulates while NAD\u207A is depleted. Since three cycle enzymes require NAD\u207A, that shortage is what actually stops the cycle.'
  },
  c17c: {
    options: [
      'Isocitrate dehydrogenase, \u03B1-ketoglutarate dehydrogenase and malate dehydrogenase',
      'Aconitase and fumarase',
      'Citrate synthase and succinyl-CoA synthetase',
      'Succinate dehydrogenase alone'
    ],
    answer: 0,
    why: ' These three are the NAD\u207A-dependent dehydrogenases of the cycle, so they are the steps most immediately limited when NAD\u207A runs short. Aconitase and fumarase involve no redox chemistry, and citrate synthase and succinyl-CoA synthetase do not use NAD\u207A.'
  },

  /* ---------- Module 5 · Section 2 · Following pyruvate ---------- */
  c18: {
    options: [
      'It is reduced to lactate in the cytosol',
      'It is oxidized to acetyl-CoA in the matrix',
      'It is carboxylated to oxaloacetate in the matrix',
      'It accumulates unchanged until oxygen returns'
    ],
    answer: 0,
    why: ' Without oxygen, lactate dehydrogenase reduces pyruvate to lactate in the cytosol. In humans this is the route that restores redox balance; ethanol fermentation is the equivalent route in yeast and some bacteria, not in human tissue.'
  },
  c18b: {
    options: [
      'It regenerates NAD\u207A so that glycolysis can continue',
      'It generates additional ATP directly from pyruvate',
      'It allows acetyl-CoA to be produced without oxygen',
      'It removes protons that would otherwise acidify the cytosol'
    ],
    answer: 0,
    why: ' Glycolysis consumes NAD\u207A at the glyceraldehyde 3-phosphate dehydrogenase step, and with the electron transport chain stalled there is no other way to regenerate it. Reducing pyruvate to lactate reoxidizes NADH, keeping glycolysis \u2014 and its small ATP yield \u2014 running. Lactate formation makes no ATP itself.'
  },

  /* ---------- Module 5 · Section 3 · Efficiency ---------- */
  c19: {
    options: [
      'Approximately 30 to 32 ATP, from the whole aerobic process',
      'Approximately 30 to 32 ATP, from the citric acid cycle alone',
      'Approximately 12 ATP, from the citric acid cycle alone',
      'Approximately 2 ATP, from oxidative phosphorylation'
    ],
    answer: 0,
    why: ' The 30 to 32 figure covers glycolysis, pyruvate processing, the citric acid cycle and oxidative phosphorylation combined. The cycle itself makes only two ATP or GTP per glucose by substrate-level phosphorylation; the large yield comes from the NADH and FADH\u2082 that the cycle feeds to the electron transport chain.'
  },
  c19b: {
    options: [
      'Two ATP, produced by glycolysis',
      'Two ATP, produced by the citric acid cycle',
      'Four ATP, produced by substrate-level phosphorylation in the cycle',
      'Eighteen ATP, produced by partial operation of the electron transport chain'
    ],
    answer: 0,
    why: ' Without oxygen the only net ATP comes from glycolysis: two per glucose. The citric acid cycle and oxidative phosphorylation both stall, which is why anaerobic metabolism is so much less efficient even though it can be very fast.'
  },

  /* ---------- Integration challenge ---------- */
  c20: {
    options: [
      'PDH is largely phosphorylated and inactive',
      'PDH is largely dephosphorylated and active',
      'PDH activity is unaffected by this energy state',
      'PDH is converted to the \u03B1-ketoglutarate dehydrogenase complex'
    ],
    answer: 0,
    why: ' High ATP and NADH with low ADP activates pyruvate dehydrogenase kinase, which phosphorylates and inactivates PDH. Low Ca\u00B2\u207A means the phosphatase is not being stimulated to reverse it, so the complex stays switched off.'
  },
  c20b: {
    options: [
      'Flux is low, because the regulated enzymes are inhibited',
      'Flux is high, because oxygen is available',
      'Flux is high, because NADH is abundant',
      'Flux is low, because oxaloacetate has been depleted'
    ],
    answer: 0,
    why: ' Oxygen availability permits flux but does not drive it. With ATP and NADH high and ADP and Ca\u00B2\u207A low, citrate synthase, isocitrate dehydrogenase and \u03B1-ketoglutarate dehydrogenase are all inhibited, so flux is low. The limiting factor here is demand, not supply.'
  },
  c20c: {
    options: [
      'NADH production decreases along with flux',
      'NADH production increases to match the high NADH concentration',
      'NADH production is unchanged because the cycle is catalytic',
      'NADH production increases while FADH\u2082 production falls'
    ],
    answer: 0,
    why: ' NADH is made by three cycle enzymes, and all of them are either inhibited by NADH directly or limited by the scarcity of NAD\u207A that a high NADH ratio implies. Less flux means less NADH \u2014 the feedback is self-limiting, which is the point.'
  },
  c20d: {
    options: [
      'Oxaloacetate falls, and flux through citrate synthase drops further',
      'Oxaloacetate rises, because citrate is no longer consuming it',
      'Acetyl-CoA falls, because citrate synthase becomes more active',
      'The cycle continues at the same rate using \u03B1-ketoglutarate as its entry point'
    ],
    answer: 0,
    why: ' Every citrate exported for lipid synthesis carries away four carbons that would otherwise have been returned to the pool as oxaloacetate. As oxaloacetate falls, citrate synthase loses a substrate and flux drops further \u2014 unless an anaplerotic reaction replaces what was removed.'
  },
  c20e: {
    options: [
      'Pyruvate carboxylase converts pyruvate to oxaloacetate',
      'Pyruvate dehydrogenase converts pyruvate to acetyl-CoA',
      'Citrate synthase runs in reverse to regenerate oxaloacetate',
      'Succinate dehydrogenase transfers electrons to coenzyme Q'
    ],
    answer: 0,
    why: ' Anaplerotic reactions replace intermediates that have been withdrawn, and pyruvate carboxylase is the most important of them. Conveniently, the accumulating acetyl-CoA that results from a low oxaloacetate pool is itself the activator of this enzyme.'
  },
  c20f: {
    options: [
      'It is a signal of energy status rather than a substrate the cycle consumes',
      'It is consumed by isocitrate dehydrogenase as an electron acceptor',
      'It is required to transport pyruvate into the mitochondrial matrix',
      'It is the direct product of the succinyl-CoA synthetase reaction'
    ],
    answer: 0,
    why: ' ATP is not a reactant in any citric acid cycle reaction. It acts as an allosteric inhibitor of PDH, citrate synthase, isocitrate dehydrogenase and \u03B1-ketoglutarate dehydrogenase, and it activates PDH kinase. Recognizing that a molecule can control a pathway without participating in its chemistry is one of the durable lessons of this material.'
  }
};

/* ------------------------------------------------------------
   CARDS — flashcards for the Retrieval Practice deck.
   `t` is the front face, `d` the back. `flip:true` is cosmetic
   only and simply signals a reversed-recall prompt.
   ------------------------------------------------------------ */
var CARDS = [
  { id:'CAC-CARD-01', t:'Where does the citric acid cycle take place?',
    d:'The mitochondrial matrix. Glycolysis runs in the cytosol, so pyruvate must be transported into the matrix first. Succinate dehydrogenase is the exception \u2014 it sits in the inner mitochondrial membrane as Complex II.' },
  { id:'CAC-CARD-02', t:'Pyruvate dehydrogenase complex \u2014 three enzymes',
    d:'E1 pyruvate dehydrogenase (TPP), E2 dihydrolipoyl transacetylase (lipoic acid), E3 dihydrolipoyl dehydrogenase (FAD and NAD\u207A).' },
  { id:'CAC-CARD-03', t:'Five coenzymes of the PDH complex',
    d:'Thiamine pyrophosphate, lipoic acid, coenzyme A, FAD, and NAD\u207A.' },
  { id:'CAC-CARD-04', t:'TPP, FAD, NAD\u207A and CoA come from which vitamins?',
    d:'TPP from thiamine (B1), FAD from riboflavin (B2), NAD\u207A from niacin (B3), CoA from pantothenate (B5).' },
  { id:'CAC-CARD-05', t:'Overall PDH reaction',
    d:'Pyruvate + CoA + NAD\u207A \u2192 acetyl-CoA + CO\u2082 + NADH. Three carbons in, one leaves as CO\u2082, two continue as the acetyl group. The reaction is irreversible.' },
  { id:'CAC-CARD-06', t:'The eight intermediates, in order',
    d:'Citrate, isocitrate, \u03B1-ketoglutarate, succinyl-CoA, succinate, fumarate, malate, oxaloacetate \u2014 then back to citrate.' },
  { id:'CAC-CARD-07', t:'Step 1 \u2014 citrate synthase',
    d:'Condenses acetyl-CoA (2C) with oxaloacetate (4C) to give citrate (6C). Irreversible and a major control point.' },
  { id:'CAC-CARD-08', t:'Step 2 \u2014 aconitase',
    d:'Reversibly isomerizes citrate to isocitrate, converting a tertiary alcohol into a secondary alcohol so that the next step can oxidize it.' },
  { id:'CAC-CARD-09', t:'Step 3 \u2014 isocitrate dehydrogenase',
    d:'Oxidative decarboxylation of isocitrate (6C) to \u03B1-ketoglutarate (5C). First NADH, first CO\u2082. Irreversible and regulated.' },
  { id:'CAC-CARD-10', t:'Step 4 \u2014 \u03B1-ketoglutarate dehydrogenase complex',
    d:'\u03B1-Ketoglutarate (5C) to succinyl-CoA (4C). Second NADH, second CO\u2082. Built on the same E1\u2013E2\u2013E3 plan as PDH and uses the same five coenzymes.' },
  { id:'CAC-CARD-11', t:'Step 5 \u2014 succinyl-CoA synthetase',
    d:'Cleaves the thioester bond of succinyl-CoA and couples it to substrate-level phosphorylation, giving ATP or GTP depending on the tissue-specific isoform.' },
  { id:'CAC-CARD-12', t:'Step 6 \u2014 succinate dehydrogenase',
    d:'Oxidizes succinate to fumarate, reducing tightly bound FAD to FADH\u2082. Also serves as Complex II of the electron transport chain and passes electrons to coenzyme Q.' },
  { id:'CAC-CARD-13', t:'Step 7 \u2014 fumarase',
    d:'Hydrates fumarate to malate. No redox chemistry; it installs the hydroxyl group that malate dehydrogenase will oxidize.' },
  { id:'CAC-CARD-14', t:'Step 8 \u2014 malate dehydrogenase',
    d:'Oxidizes malate to oxaloacetate, giving the third NADH. \u0394G\u00B0 is positive, but rapid removal of oxaloacetate by citrate synthase pulls the reaction forward.' },
  { id:'CAC-CARD-15', t:'Yield per acetyl-CoA', flip:true,
    d:'Three NADH, one FADH\u2082, one ATP or GTP, and two CO\u2082.' },
  { id:'CAC-CARD-16', t:'Yield per glucose from the cycle itself', flip:true,
    d:'Six NADH, two FADH\u2082, two ATP or GTP, four CO\u2082 \u2014 two turns. The two NADH and two CO\u2082 from PDH are counted separately.' },
  { id:'CAC-CARD-17', t:'Which steps release CO\u2082?',
    d:'Isocitrate dehydrogenase and the \u03B1-ketoglutarate dehydrogenase complex, inside the cycle. The PDH complex releases a third CO\u2082 before the cycle begins.' },
  { id:'CAC-CARD-18', t:'Carbon bookkeeping through one turn',
    d:'4C oxaloacetate + 2C acetyl \u2192 6C citrate \u2192 6C isocitrate \u2192 5C \u03B1-ketoglutarate \u2192 4C succinyl-CoA \u2192 4C through to oxaloacetate.' },
  { id:'CAC-CARD-19', t:'The four main regulated enzymes',
    d:'Pyruvate dehydrogenase complex, citrate synthase, isocitrate dehydrogenase, and \u03B1-ketoglutarate dehydrogenase.' },
  { id:'CAC-CARD-20', t:'General rule for cycle regulation',
    d:'Activated when energy charge is low (ADP, Ca\u00B2\u207A, pyruvate). Inhibited when it is high (ATP, NADH) or when downstream intermediates such as succinyl-CoA accumulate.' },
  { id:'CAC-CARD-21', t:'Why does Ca\u00B2\u207A activate the cycle?',
    d:'Ca\u00B2\u207A is the signal that triggers muscle contraction, so it predicts a rise in ATP demand. It activates PDH phosphatase, isocitrate dehydrogenase and \u03B1-ketoglutarate dehydrogenase.' },
  { id:'CAC-CARD-22', t:'PDK and PDP', flip:true,
    d:'Pyruvate dehydrogenase kinase phosphorylates PDH and switches it off, favored by high ATP, NADH and acetyl-CoA. Pyruvate dehydrogenase phosphatase removes the phosphate and switches it on, favored by ADP, pyruvate and Ca\u00B2\u207A.' },
  { id:'CAC-CARD-23', t:'Citrate synthase inhibitors',
    d:'ATP, NADH, citrate, and succinyl-CoA. Activated by ADP and by oxaloacetate.' },
  { id:'CAC-CARD-24', t:'What are anaplerotic reactions?',
    d:'Reactions that replenish citric acid cycle intermediates withdrawn for biosynthesis, keeping the pool large enough for the cycle to keep turning.' },
  { id:'CAC-CARD-25', t:'Four intermediates and what they build',
    d:'Citrate \u2192 fatty acids and cholesterol. \u03B1-Ketoglutarate \u2192 glutamate and other amino acids. Succinyl-CoA \u2192 heme. Oxaloacetate \u2192 aspartate and glucose.' },
  { id:'CAC-CARD-26', t:'Pyruvate carboxylase',
    d:'The main anaplerotic enzyme: pyruvate + CO\u2082 \u2192 oxaloacetate. Requires biotin (B7) and is activated by acetyl-CoA.' },
  { id:'CAC-CARD-27', t:'Why does acetyl-CoA activate pyruvate carboxylase?',
    d:'Accumulating acetyl-CoA usually means oxaloacetate has run short, since acetyl-CoA can enter the cycle only by condensing with it. Directing pyruvate toward oxaloacetate fixes the actual shortage.' },
  { id:'CAC-CARD-28', t:'Amino acid entry points',
    d:'Glutamate dehydrogenase converts glutamate to \u03B1-ketoglutarate. Aspartate transaminase converts aspartate to oxaloacetate.' },
  { id:'CAC-CARD-29', t:'Propionyl-CoA to succinyl-CoA',
    d:'Propionyl-CoA carboxylase (biotin), then methylmalonyl-CoA epimerase, then methylmalonyl-CoA mutase (vitamin B12). Propionyl-CoA comes from odd-chain fatty acids and certain amino acids.' },
  { id:'CAC-CARD-30', t:'Why does the cycle stop without oxygen?',
    d:'No cycle enzyme uses O\u2082 directly, but the electron transport chain needs it to reoxidize NADH and FADH\u2082. Without O\u2082, NAD\u207A and FAD are not regenerated and the dehydrogenase steps stall.' },
  { id:'CAC-CARD-31', t:'Fate of pyruvate without oxygen',
    d:'Reduced to lactate in the cytosol by lactate dehydrogenase. This regenerates NAD\u207A so glycolysis can continue; it produces no ATP itself.' },
  { id:'CAC-CARD-32', t:'Aerobic versus anaerobic ATP yield', flip:true,
    d:'Roughly 30 to 32 ATP per glucose from the whole aerobic process, against 2 ATP per glucose from glycolysis alone when oxygen is absent.' },
  { id:'CAC-CARD-33', t:'Vitamins across the whole pathway',
    d:'B1 thiamine (TPP), B2 riboflavin (FAD), B3 niacin (NAD\u207A), B5 pantothenate (CoA), B7 biotin (pyruvate carboxylase), B12 cobalamin (methylmalonyl-CoA mutase).' },
  { id:'CAC-CARD-34', t:'Why is the cycle called amphibolic?',
    d:'It runs catabolic and anabolic traffic at once \u2014 oxidizing acetyl groups for energy while also supplying carbon skeletons for lipids, amino acids, heme and glucose.' },
  { id:'CAC-CARD-35', t:'Substrate-level phosphorylation',
    d:'Making ATP or GTP by coupling directly to the cleavage of another high-energy bond, rather than by using the proton gradient. In this pathway it happens at succinyl-CoA synthetase.' }
];

/* ------------------------------------------------------------
   POOL — the graded question bank.
   `m`     which module quiz the question belongs to
   `area`  concept area, used for the post-quiz mastery breakdown
           and the adaptive round; must match a key in AREA_SECTION
   `level` concept | application | integration, used to build the
           stratified final exam
   ------------------------------------------------------------ */
var POOL = [

  /* ==================== MODULE 1 ==================== */
  { id:'CAC-001', m:'m1', area:'Pyruvate transport and fate', level:'concept',
    stem:'In which cellular compartment does the pyruvate dehydrogenase complex carry out the conversion of pyruvate to acetyl-CoA?',
    options:['Mitochondrial matrix','Cytosol','Mitochondrial intermembrane space','Endoplasmic reticulum lumen'],
    answer:0,
    why:' Glycolysis ends in the cytosol, so pyruvate has to be transported across both mitochondrial membranes before the PDH complex, which resides in the matrix, can act on it.' },

  { id:'CAC-002', m:'m1', area:'Pyruvate transport and fate', level:'concept',
    stem:'Which property of the pyruvate dehydrogenase reaction explains why carbohydrate carbon that has been converted to acetyl-CoA cannot be used to make net glucose?',
    options:['The reaction is irreversible','The reaction requires oxygen as a substrate','The reaction occurs in the cytosol','The reaction consumes ATP'],
    answer:0,
    why:' Oxidative decarboxylation releases CO\u2082 and is thermodynamically irreversible. Because there is no route back from acetyl-CoA to pyruvate, that carbon is committed to oxidation or to lipid synthesis.' },

  { id:'CAC-003', m:'m1', area:'Pyruvate transport and fate', level:'application',
    stem:'A well-oxygenated muscle cell is contracting steadily and consuming ATP rapidly. Which fate accounts for most of the pyruvate produced by glycolysis in that cell?',
    options:['Transport into the matrix and oxidation to acetyl-CoA','Reduction to lactate in the cytosol','Transamination to alanine for export','Carboxylation to oxaloacetate for glucose synthesis'],
    answer:0,
    why:' With oxygen present and demand high, the electron transport chain keeps NAD\u207A available and PDH is active, so pyruvate is directed into the aerobic route. Lactate formation dominates only when NAD\u207A must be regenerated some other way.' },

  { id:'CAC-004', m:'m1', area:'PDH complex and cofactors', level:'concept',
    stem:'Which coenzyme is used by E1, the pyruvate dehydrogenase subunit of the PDH complex?',
    options:['Thiamine pyrophosphate','Lipoic acid','Coenzyme A','Nicotinamide adenine dinucleotide'],
    answer:0,
    why:' E1 uses thiamine pyrophosphate to decarboxylate pyruvate and to hold the resulting hydroxyethyl fragment. Lipoic acid belongs to E2; FAD and NAD\u207A belong to E3.' },

  { id:'CAC-005', m:'m1', area:'PDH complex and cofactors', level:'concept',
    stem:'What is the role of E3, dihydrolipoyl dehydrogenase, within the PDH complex?',
    options:['It reoxidizes reduced lipoamide and reduces NAD\u207A','It decarboxylates pyruvate and releases CO\u2082','It transfers the acetyl group onto coenzyme A','It anchors the complex to the inner mitochondrial membrane'],
    answer:0,
    why:' E3 restores the oxidized lipoamide that E2 needs for the next round, passing the electrons through its FAD and onto NAD\u207A. Without this regeneration the complex would stop after one turnover.' },

  { id:'CAC-006', m:'m1', area:'PDH complex and cofactors', level:'application',
    stem:'A researcher assembles a PDH complex in which E1 has been supplied with FAD instead of its usual cofactor. Which activity is most directly lost?',
    options:['Decarboxylation of pyruvate','Transfer of the acetyl group to coenzyme A','Reduction of NAD\u207A to NADH','Transport of pyruvate into the matrix'],
    answer:0,
    why:' The decarboxylation step depends on thiamine pyrophosphate, which stabilizes the carbanion intermediate formed when CO\u2082 leaves. FAD cannot perform that chemistry, so the very first step of the complex fails.' },

  { id:'CAC-007', m:'m1', area:'Vitamins and coenzymes', level:'concept',
    stem:'Which vitamin is the precursor of the coenzyme used by both the pyruvate dehydrogenase complex and the \u03B1-ketoglutarate dehydrogenase complex for decarboxylation?',
    options:['Thiamine','Riboflavin','Niacin','Biotin'],
    answer:0,
    why:' Thiamine (B1) becomes thiamine pyrophosphate, the decarboxylation cofactor shared by both complexes. This shared dependence is why thiamine status affects oxidative metabolism so broadly.' },

  { id:'CAC-008', m:'m1', area:'Vitamins and coenzymes', level:'application',
    stem:'A patient with long-standing poor nutritional intake has markedly reduced thiamine stores. Which pair of enzymes is most directly affected?',
    options:['Pyruvate dehydrogenase and \u03B1-ketoglutarate dehydrogenase','Aconitase and fumarase','Citrate synthase and malate dehydrogenase','Succinate dehydrogenase and succinyl-CoA synthetase'],
    answer:0,
    why:' Both complexes require thiamine pyrophosphate for oxidative decarboxylation. Limiting TPP restricts entry of pyruvate into the cycle and slows the cycle at step 4, so lactate tends to rise while ATP production falls.' },

  { id:'CAC-009', m:'m1', area:'Vitamins and coenzymes', level:'concept',
    stem:'Coenzyme A, which carries the acetyl group produced by the PDH complex, is derived from which vitamin?',
    options:['Pantothenate','Niacin','Riboflavin','Cobalamin'],
    answer:0,
    why:' Pantothenate (B5) is the precursor of coenzyme A. Niacin gives NAD\u207A, riboflavin gives FAD, and cobalamin serves methylmalonyl-CoA mutase further downstream.' },

  { id:'CAC-010', m:'m1', area:'Carbon and electron bookkeeping', level:'concept',
    stem:'How many carbon atoms of pyruvate are retained in the acetyl group of acetyl-CoA?',
    options:['Two','One','Three','Four'],
    answer:0,
    why:' Pyruvate has three carbons; one is released as CO\u2082 during decarboxylation, leaving a two-carbon acetyl unit. The coenzyme A portion is a carrier and is not counted as part of the entering carbon.' },

  { id:'CAC-011', m:'m1', area:'Carbon and electron bookkeeping', level:'concept',
    stem:'Which electron carrier is reduced when the PDH complex oxidizes pyruvate?',
    options:['NAD\u207A','Coenzyme Q','Cytochrome c','Molecular oxygen'],
    answer:0,
    why:' Electrons removed from pyruvate travel through lipoamide and the FAD of E3 before ending on NAD\u207A, giving one NADH per pyruvate. FAD is an intermediate carrier here rather than the final acceptor.' },

  { id:'CAC-012', m:'m1', area:'Carbon and electron bookkeeping', level:'application',
    stem:'Starting from one molecule of glucose, how many CO\u2082 are released by the pyruvate dehydrogenase step alone?',
    options:['Two','One','Four','Six'],
    answer:0,
    why:' One glucose yields two pyruvate, and each releases one CO\u2082 at PDH, for two in total. The remaining four CO\u2082 per glucose come from the two turns of the cycle itself.' },

  { id:'CAC-013', m:'m1', area:'Gateway regulation', level:'application',
    stem:'A hepatocyte has high concentrations of ATP, NADH and acetyl-CoA. What is the expected effect on the activity of the PDH complex?',
    options:['Activity decreases','Activity increases','Activity is unchanged','Activity increases and then reverses direction'],
    answer:0,
    why:' All three metabolites signal that the cell is energy-replete. NADH and acetyl-CoA inhibit the complex directly, and ATP activates the kinase that phosphorylates it, so the gateway closes.' },

  { id:'CAC-014', m:'m1', area:'Gateway regulation', level:'integration',
    stem:'Why is the PDH complex a particularly important site of regulation compared with a reversible step such as the aconitase reaction?',
    options:['It catalyzes an irreversible, committing step','It generates the largest share of the pathway NADH','It is the slowest reaction in the pathway','It requires more cofactors than the other steps'],
    answer:0,
    why:' Pathways are controlled where reactions are far from equilibrium, because those are the steps whose rate actually sets flux. Since the conversion of pyruvate to acetyl-CoA cannot be undone, the cell regulates it heavily at the point of commitment.' },

  { id:'CAC-015', m:'m1', area:'Gateway regulation', level:'application',
    stem:'Which combination of signals would be expected to increase flux through the PDH complex in contracting skeletal muscle?',
    options:['High ADP, high pyruvate and high Ca\u00B2\u207A','High ATP, high NADH and low Ca\u00B2\u207A','High acetyl-CoA, high NADH and low ADP','Low pyruvate, high ATP and high Ca\u00B2\u207A'],
    answer:0,
    why:' ADP and pyruvate inhibit the kinase while Ca\u00B2\u207A stimulates the phosphatase, so the balance shifts toward the dephosphorylated, active form of the complex. These are exactly the conditions a contracting muscle generates.' },

  /* ==================== MODULE 2 ==================== */
  { id:'CAC-016', m:'m2', area:'Cycle sequence and enzymes', level:'concept',
    stem:'Which enzyme condenses acetyl-CoA with oxaloacetate to form citrate?',
    options:['Citrate synthase','Aconitase','Citrate lyase','Malate dehydrogenase'],
    answer:0,
    why:' Citrate synthase joins the two-carbon acetyl group to four-carbon oxaloacetate, producing six-carbon citrate. It is effectively irreversible and is one of the four principal control points of the pathway.' },

  { id:'CAC-017', m:'m2', area:'Cycle sequence and enzymes', level:'concept',
    stem:'Which intermediate directly follows \u03B1-ketoglutarate in the citric acid cycle?',
    options:['Succinyl-CoA','Succinate','Fumarate','Isocitrate'],
    answer:0,
    why:' The \u03B1-ketoglutarate dehydrogenase complex oxidatively decarboxylates five-carbon \u03B1-ketoglutarate to four-carbon succinyl-CoA, generating NADH and releasing the second CO\u2082 of the cycle.' },

  { id:'CAC-018', m:'m2', area:'Cycle sequence and enzymes', level:'concept',
    stem:'Which enzyme regenerates oxaloacetate at the end of one turn of the cycle?',
    options:['Malate dehydrogenase','Fumarase','Succinate dehydrogenase','Aspartate transaminase'],
    answer:0,
    why:' Malate dehydrogenase oxidizes malate to oxaloacetate, producing the third NADH of the turn and restoring the acceptor that citrate synthase needs for the next acetyl group.' },

  { id:'CAC-019', m:'m2', area:'Cycle sequence and enzymes', level:'application',
    stem:'A sample of mitochondria is supplied with acetyl-CoA and oxaloacetate, and aconitase is then selectively inhibited. Which intermediate is expected to accumulate?',
    options:['Citrate','Isocitrate','\u03B1-Ketoglutarate','Succinate'],
    answer:0,
    why:' Aconitase converts citrate to isocitrate, so blocking it leaves citrate as the last species formed. Everything downstream of the block is depleted rather than accumulated.' },

  { id:'CAC-020', m:'m2', area:'Reaction chemistry', level:'concept',
    stem:'The conversion of succinate to fumarate is best described as which type of reaction?',
    options:['An oxidation that reduces FAD to FADH\u2082','A reduction that oxidizes FADH\u2082 to FAD','A hydration with no change in oxidation state','An oxidative decarboxylation releasing CO\u2082'],
    answer:0,
    why:' Two hydrogens are removed from succinate to create the carbon\u2013carbon double bond of fumarate, so succinate is oxidized. The electrons are taken up by the enzyme-bound FAD, giving FADH\u2082 \u2014 the only FAD-linked step of the cycle.' },

  { id:'CAC-021', m:'m2', area:'Reaction chemistry', level:'integration',
    stem:'Which citric acid cycle enzyme also functions as a component of the electron transport chain?',
    options:['Succinate dehydrogenase','Malate dehydrogenase','Isocitrate dehydrogenase','Aconitase'],
    answer:0,
    why:' Succinate dehydrogenase is Complex II, embedded in the inner mitochondrial membrane. Its FADH\u2082 stays bound and passes electrons straight to coenzyme Q, bypassing Complex I, which is part of why FADH\u2082 supports less ATP synthesis than NADH.' },

  { id:'CAC-022', m:'m2', area:'Reaction chemistry', level:'application',
    stem:'Fumarase catalyzes the addition of water across the double bond of fumarate. What does this reaction accomplish for the next step of the cycle?',
    options:['It creates the hydroxyl group that malate dehydrogenase oxidizes','It releases the CO\u2082 required before oxaloacetate can form','It generates the FADH\u2082 used by Complex II','It attaches coenzyme A for substrate-level phosphorylation'],
    answer:0,
    why:' Hydration converts fumarate into malate, a secondary alcohol. That hydroxyl group is the site malate dehydrogenase oxidizes to a ketone in the final step, so fumarase is a setup reaction rather than an energy-yielding one.' },

  { id:'CAC-023', m:'m2', area:'Reaction chemistry', level:'concept',
    stem:'What is the purpose of the isomerization of citrate to isocitrate?',
    options:['It converts a tertiary alcohol into a secondary alcohol that can be oxidized','It releases the first CO\u2082 of the cycle','It generates the first NADH of the cycle','It attaches coenzyme A in preparation for cleavage'],
    answer:0,
    why:' The hydroxyl group of citrate sits on a carbon with no hydrogen, so it cannot be oxidized to a carbonyl. Moving it to an adjacent carbon creates a secondary alcohol, which isocitrate dehydrogenase can then oxidize.' },

  { id:'CAC-024', m:'m2', area:'Reaction chemistry', level:'application',
    stem:'Which reaction of the citric acid cycle produces a nucleoside triphosphate directly, without involving the proton gradient?',
    options:['Cleavage of succinyl-CoA by succinyl-CoA synthetase','Condensation of acetyl-CoA by citrate synthase','Oxidation of isocitrate by isocitrate dehydrogenase','Hydration of fumarate by fumarase'],
    answer:0,
    why:' Succinyl-CoA synthetase couples the energy released when the thioester bond is broken to phosphorylation of ADP or GDP. This is substrate-level phosphorylation, and it is the only such step in the cycle.' },

  { id:'CAC-025', m:'m2', area:'Energy yield', level:'concept',
    stem:'How many NADH are produced per turn of the citric acid cycle?',
    options:['Three','One','Two','Four'],
    answer:0,
    why:' NADH is generated at isocitrate dehydrogenase, the \u03B1-ketoglutarate dehydrogenase complex, and malate dehydrogenase. The NADH produced by the PDH complex is counted before the cycle begins, not as part of this total.' },

  { id:'CAC-026', m:'m2', area:'Energy yield', level:'application',
    stem:'How many CO\u2082 molecules are released by the citric acid cycle itself per molecule of glucose?',
    options:['Four','Two','Six','Eight'],
    answer:0,
    why:' Each turn releases two CO\u2082, and one glucose supplies two acetyl-CoA, so the cycle contributes four. The other two CO\u2082 per glucose come from the PDH step, giving six overall.' },

  { id:'CAC-027', m:'m2', area:'Energy yield', level:'application',
    stem:'Why does one molecule of glucose require two turns of the citric acid cycle for complete oxidation?',
    options:['Glucose yields two pyruvate, each producing one acetyl-CoA','Oxaloacetate is consumed and must be replaced after each turn','Each turn oxidizes one of the two carbons of the acetyl group','The cycle accepts a three-carbon substrate per turn'],
    answer:0,
    why:' Glycolysis splits six-carbon glucose into two three-carbon pyruvate, and each becomes one acetyl-CoA. Since the cycle accepts one acetyl-CoA per turn, two turns are needed. Oxaloacetate is regenerated rather than consumed.' },

  { id:'CAC-028', m:'m2', area:'Energy yield', level:'integration',
    stem:'A student states that the citric acid cycle produces about 30 ATP per glucose. Which correction best describes the actual contribution of the cycle?',
    options:['The cycle makes two ATP or GTP per glucose and supplies carriers to the electron transport chain','The cycle makes about 30 ATP per glucose through substrate-level phosphorylation','The cycle releases carbon dioxide without producing high-energy phosphateu2082','The cycle makes about 12 ATP per glucose directly from NADH'],
    answer:0,
    why:' Substrate-level phosphorylation in the cycle yields only one ATP or GTP per turn, so two per glucose. The 30 to 32 figure describes the whole aerobic process, and most of it comes from oxidative phosphorylation using the NADH and FADH\u2082 that the cycle supplies.' },

  { id:'CAC-029', m:'m2', area:'Thermodynamic coupling', level:'integration',
    stem:'The oxidation of malate to oxaloacetate has a positive standard free energy change. What allows this reaction to proceed in the direction of oxaloacetate inside the mitochondrion?',
    options:['Oxaloacetate is removed rapidly by citrate synthase','The reaction is coupled to hydrolysis of GTP','Malate dehydrogenase alters the equilibrium constant','The matrix maintains a high ratio of NADH to NAD\u207A'],
    answer:0,
    why:' Standard free energy assumes equal concentrations of substrates and products. In the cell, citrate synthase keeps oxaloacetate extremely low, and by mass action that low product concentration drives the reaction forward.' },

  { id:'CAC-030', m:'m2', area:'Thermodynamic coupling', level:'application',
    stem:'If citrate synthase were strongly inhibited in isolated mitochondria supplied with malate, what would be the expected effect on the malate dehydrogenase reaction?',
    options:['Net flux toward oxaloacetate would fall','Net flux toward oxaloacetate would rise','Malate would be converted directly to fumarate','NADH production would rise while malate fell'],
    answer:0,
    why:' Removing the consumer of oxaloacetate removes the pull. Oxaloacetate accumulates, the unfavorable equilibrium reasserts itself, and net oxidation of malate slows \u2014 an illustration of how coupled reactions rather than individual \u0394G\u00B0 values set direction.' },

  { id:'CAC-031', m:'m2', area:'Cycle sequence and enzymes', level:'application',
    stem:'Which sequence correctly orders four consecutive intermediates of the citric acid cycle?',
    options:['Isocitrate, \u03B1-ketoglutarate, succinyl-CoA, succinate','Isocitrate, succinyl-CoA, \u03B1-ketoglutarate, succinate','\u03B1-Ketoglutarate, isocitrate, succinate, succinyl-CoA','Succinate, succinyl-CoA, \u03B1-ketoglutarate, isocitrate'],
    answer:0,
    why:' After aconitase produces isocitrate, oxidative decarboxylation gives \u03B1-ketoglutarate, a second oxidative decarboxylation gives succinyl-CoA, and thioester cleavage gives succinate. Carbon count falls 6, 5, 4, 4 across those steps.' },

  { id:'CAC-032', m:'m2', area:'Energy yield', level:'concept',
    stem:'Which product is generated by the succinate dehydrogenase reaction?',
    options:['FADH\u2082','NADH','GTP','CO\u2082'],
    answer:0,
    why:' Succinate dehydrogenase is the single FAD-linked oxidation of the cycle, giving one FADH\u2082 per turn. No CO\u2082 is released after step 4, and no NADH is made at this step.' },

  /* ==================== MODULE 3 ==================== */
  { id:'CAC-033', m:'m3', area:'Regulatory control points', level:'concept',
    stem:'Which three citric acid cycle enzymes serve as the principal points of regulation?',
    options:['Citrate synthase, isocitrate dehydrogenase, \u03B1-ketoglutarate dehydrogenase','Aconitase, fumarase, malate dehydrogenase','Succinyl-CoA synthetase, succinate dehydrogenase, fumarase','Citrate synthase, aconitase, succinate dehydrogenase'],
    answer:0,
    why:' These three catalyze effectively irreversible reactions, which is the general rule for where control is exerted. Together with the PDH complex just upstream, they form the four main regulatory sites of the pathway.' },

  { id:'CAC-034', m:'m3', area:'Regulatory control points', level:'concept',
    stem:'Which set of molecules inhibits citrate synthase?',
    options:['ATP, NADH, citrate and succinyl-CoA','ADP, NAD\u207A and oxaloacetate','Ca\u00B2\u207A, pyruvate and coenzyme A','ADP, citrate and acetyl-CoA'],
    answer:0,
    why:' ATP and NADH report a high energy charge, while citrate and succinyl-CoA report that the cycle is already well stocked. Citrate synthase is activated by ADP and by its own substrate oxaloacetate.' },

  { id:'CAC-035', m:'m3', area:'Regulatory control points', level:'integration',
    stem:'Why is inhibition of citrate synthase by succinyl-CoA a sensible regulatory arrangement?',
    options:['Accumulating succinyl-CoA indicates that carbon is entering faster than later steps can process it','Succinyl-CoA is the immediate product of the citrate synthase reaction','Succinyl-CoA is required to regenerate oxaloacetate for the next turn','Succinyl-CoA competes with NADH for binding at Complex I'],
    answer:0,
    why:' Succinyl-CoA lies four steps downstream of citrate. If it is building up, the later portion of the cycle is the bottleneck, so slowing entry at citrate synthase prevents further backup. This is feedback inhibition by an intermediate rather than an end product.' },

  { id:'CAC-036', m:'m3', area:'Regulatory control points', level:'application',
    stem:'Which enzyme of the citric acid cycle is activated by both ADP and Ca\u00B2\u207A?',
    options:['Isocitrate dehydrogenase','Citrate synthase','Succinate dehydrogenase','Fumarase'],
    answer:0,
    why:' Isocitrate dehydrogenase responds to ADP as a signal of low energy charge and to Ca\u00B2\u207A as a signal of muscle activation, and it is inhibited by ATP and NADH. That dual activation makes it a sensitive rate-setting step.' },

  { id:'CAC-037', m:'m3', area:'Energy charge and flux', level:'application',
    stem:'A cell has a high ATP to ADP ratio and a high NADH to NAD\u207A ratio. What happens to flux through the citric acid cycle?',
    options:['Flux falls','Flux rises','Flux is unchanged','Flux rises briefly and then reverses'],
    answer:0,
    why:' Both ratios indicate that the cell has more energy than it needs. ATP and NADH inhibit all four regulated enzymes, and the scarcity of NAD\u207A also directly limits the three NAD\u207A-dependent dehydrogenases.' },

  { id:'CAC-038', m:'m3', area:'Energy charge and flux', level:'concept',
    stem:'Under which condition is the citric acid cycle generally activated?',
    options:['When energy charge is low','When energy charge is high','When acetyl-CoA and NADH are both elevated','When ATP accumulates faster than it is used'],
    answer:0,
    why:' The cycle exists to supply reduced carriers for ATP production, so it responds to demand. Low energy charge means abundant ADP and NAD\u207A, both of which favor higher flux.' },

  { id:'CAC-039', m:'m3', area:'Energy charge and flux', level:'integration',
    stem:'ATP inhibits several citric acid cycle enzymes, yet every cycle reaction proceeds without ATP as a reactant. What does this indicate about its role?',
    options:['It acts as an allosteric signal reporting energy status','It serves as a phosphate donor for the dehydrogenase steps','It functions as an alternative electron acceptor','It is a structural component of the enzyme complexes'],
    answer:0,
    why:' A regulator does not need to participate in the chemistry it controls. ATP binds at allosteric sites and reports the cell\u0027s energy status, adjusting flux to match demand \u2014 a recurring pattern across metabolic pathways.' },

  { id:'CAC-040', m:'m3', area:'PDH covalent regulation', level:'concept',
    stem:'What is the effect of pyruvate dehydrogenase kinase on the PDH complex?',
    options:['It phosphorylates the complex and inactivates it','It phosphorylates the complex and activates it','It removes a phosphate and inactivates the complex','It removes a phosphate and activates the complex'],
    answer:0,
    why:' The kinase adds a phosphate to the E1 subunit, which switches the complex off. Students often assume phosphorylation activates an enzyme; here the opposite is true, which is why it is worth committing to memory deliberately.' },

  { id:'CAC-041', m:'m3', area:'PDH covalent regulation', level:'concept',
    stem:'Which enzyme restores activity to the phosphorylated PDH complex?',
    options:['Pyruvate dehydrogenase phosphatase','Pyruvate dehydrogenase kinase','Pyruvate carboxylase','Protein kinase A'],
    answer:0,
    why:' The phosphatase removes the phosphate from E1 and returns the complex to its active form. Its action is favored by ADP, pyruvate and, in muscle, Ca\u00B2\u207A.' },

  { id:'CAC-042', m:'m3', area:'PDH covalent regulation', level:'application',
    stem:'A cell accumulates ATP, NADH and acetyl-CoA. What happens at the PDH kinase and phosphatase?',
    options:['Kinase activity rises, so more of the complex is phosphorylated','Kinase activity falls, so more of the complex is dephosphorylated','Phosphatase activity rises, so more of the complex is active','Both enzymes are inhibited, leaving the complex unchanged'],
    answer:0,
    why:' All three metabolites stimulate the kinase, shifting the complex toward its phosphorylated, inactive form. This spares pyruvate for other purposes when oxidative capacity is already saturated.' },

  { id:'CAC-043', m:'m3', area:'PDH covalent regulation', level:'integration',
    stem:'Why does the PDH complex carry a phosphorylation switch in addition to allosteric regulation?',
    options:['It guards an irreversible commitment step that deserves layered control','It is the largest enzyme complex of the pathway','Phosphorylation is required for the complex to bind thiamine pyrophosphate','Allosteric regulators lose their effectiveness inside the mitochondrion'],
    answer:0,
    why:' Once pyruvate becomes acetyl-CoA there is no way back, so the cell benefits from more than one layer of control at that branch point. Covalent modification provides a longer-lasting setting than rapid allosteric adjustment alone.' },

  { id:'CAC-044', m:'m3', area:'Physiologic scenarios', level:'application',
    stem:'During sprinting, skeletal muscle shows rising ADP and rising cytosolic Ca\u00B2\u207A. What is the expected effect on PDH, isocitrate dehydrogenase and \u03B1-ketoglutarate dehydrogenase?',
    options:['All three become more active','All three become less active','PDH becomes more active while the other two become less active','\u03B1-Ketoglutarate dehydrogenase responds while the other two hold steady'],
    answer:0,
    why:' Ca\u00B2\u207A stimulates the PDH phosphatase and activates both dehydrogenases, while ADP relieves inhibition. The signal that triggers contraction therefore also switches on the pathway that will pay for it.' },

  { id:'CAC-045', m:'m3', area:'Physiologic scenarios', level:'application',
    stem:'A well-fed, resting hepatocyte has abundant ATP and NADH and low ADP. What is the expected flux through the citric acid cycle?',
    options:['Low, because the regulated enzymes are inhibited','High, because substrate supply is plentiful','Low, because oxygen availability has fallen','High, because NADH activates the dehydrogenase steps'],
    answer:0,
    why:' Substrate is available and oxygen is present, but demand is low. ATP and NADH inhibit all four regulated enzymes, so flux stays low and the excess carbon is directed toward storage instead.' },

  { id:'CAC-046', m:'m3', area:'Physiologic scenarios', level:'integration',
    stem:'Why is it useful for the same Ca\u00B2\u207A signal that triggers muscle contraction to also stimulate citric acid cycle enzymes?',
    options:['It raises energy production at the moment demand increases','It prevents lactate from accumulating during contraction','It allows the cycle to operate without oxygen','It converts the cycle from a catabolic to an anabolic pathway'],
    answer:0,
    why:' Anticipatory control is more efficient than waiting for ATP to fall. By coupling contraction and oxidative metabolism to one signal, muscle increases supply as demand rises instead of after it.' },

  { id:'CAC-047', m:'m3', area:'Regulatory control points', level:'application',
    stem:'Which pair of conditions would most effectively slow the \u03B1-ketoglutarate dehydrogenase complex?',
    options:['High NADH and high succinyl-CoA','High ADP and high Ca\u00B2\u207A','Low ATP and high pyruvate','High NAD\u207A and low succinyl-CoA'],
    answer:0,
    why:' The complex is inhibited by its own product succinyl-CoA and by NADH, as well as by ATP. Ca\u00B2\u207A and a low energy charge push it in the opposite direction.' },

  /* ==================== MODULE 4 ==================== */
  { id:'CAC-048', m:'m4', area:'Biosynthetic precursors', level:'concept',
    stem:'Which biosynthetic pathway draws on citrate exported from the mitochondrion?',
    options:['Fatty acid and cholesterol synthesis','Heme synthesis','Purine synthesis','Urea synthesis'],
    answer:0,
    why:' Citrate carries acetyl units into the cytosol, where citrate lyase releases acetyl-CoA for lipid synthesis. This route lets a fed cell convert surplus carbohydrate carbon into stored fat.' },

  { id:'CAC-049', m:'m4', area:'Biosynthetic precursors', level:'concept',
    stem:'Which citric acid cycle intermediate is the starting point for heme synthesis?',
    options:['Succinyl-CoA','Citrate','\u03B1-Ketoglutarate','Fumarate'],
    answer:0,
    why:' Succinyl-CoA condenses with glycine in the first committed step of heme synthesis, linking the cycle to red blood cell production and to the porphyrias.' },

  { id:'CAC-050', m:'m4', area:'Biosynthetic precursors', level:'concept',
    stem:'Which intermediate serves as the carbon skeleton for glutamate and several related amino acids?',
    options:['\u03B1-Ketoglutarate','Oxaloacetate','Succinate','Malate'],
    answer:0,
    why:' Adding an amino group to \u03B1-ketoglutarate gives glutamate, which in turn supplies nitrogen and carbon for other amino acids. The same connection also runs the other way as an anaplerotic route.' },

  { id:'CAC-051', m:'m4', area:'Biosynthetic precursors', level:'integration',
    stem:'A cell withdraws large amounts of citrate for lipid synthesis. Why does supplying more acetyl-CoA fail to restore cycle flux?',
    options:['Acetyl-CoA requires oxaloacetate as a partner in order to enter the cycle','Acetyl-CoA inhibits the regulated enzymes of the cycle','Acetyl-CoA cannot cross the inner mitochondrial membrane','Acetyl-CoA is converted to citrate without an enzyme'],
    answer:0,
    why:' Withdrawing citrate removes four-carbon units that would have returned as oxaloacetate. Citrate synthase needs both substrates, so with oxaloacetate scarce the extra acetyl-CoA simply accumulates. What the cycle needs is an anaplerotic reaction, not more fuel.' },

  { id:'CAC-052', m:'m4', area:'Anaplerotic reactions', level:'concept',
    stem:'What is the defining purpose of an anaplerotic reaction?',
    options:['Replenishing citric acid cycle intermediates withdrawn for biosynthesis','Increasing the rate of substrate-level phosphorylation','Regenerating NAD\u207A when oxygen is unavailable','Transporting acetyl units into the cytosol'],
    answer:0,
    why:' Because the cycle is catalytic, its intermediates are not consumed by normal turnover \u2014 but they are consumed when siphoned off for biosynthesis. Anaplerotic reactions refill that pool so the cycle can keep turning.' },

  { id:'CAC-053', m:'m4', area:'Anaplerotic reactions', level:'concept',
    stem:'Which reaction is the most important anaplerotic route into the citric acid cycle?',
    options:['Pyruvate to oxaloacetate, by pyruvate carboxylase','Pyruvate to acetyl-CoA, by the PDH complex','Malate to oxaloacetate, by malate dehydrogenase','Citrate to acetyl-CoA, by citrate lyase'],
    answer:0,
    why:' Pyruvate carboxylase adds CO\u2082 to pyruvate to make oxaloacetate, directly restoring the intermediate most likely to become limiting. The PDH reaction adds acetyl units, which does not increase the size of the four-carbon pool.' },

  { id:'CAC-054', m:'m4', area:'Anaplerotic reactions', level:'concept',
    stem:'Which vitamin is required as a cofactor by pyruvate carboxylase?',
    options:['Biotin','Thiamine','Niacin','Cobalamin'],
    answer:0,
    why:' Pyruvate carboxylase is a biotin-dependent enzyme, and biotin is vitamin B7. Biotin acts as a carrier for an activated carboxyl group, the standard arrangement for carboxylases.' },

  { id:'CAC-055', m:'m4', area:'Anaplerotic reactions', level:'integration',
    stem:'Acetyl-CoA activates pyruvate carboxylase. What makes this an appropriate regulatory signal?',
    options:['Accumulating acetyl-CoA suggests oxaloacetate has become limiting','Acetyl-CoA is a substrate that pyruvate carboxylase consumes','Acetyl-CoA blocks the conversion of pyruvate to lactate','Acetyl-CoA is required to transport pyruvate into the matrix'],
    answer:0,
    why:' Acetyl-CoA can only be used if oxaloacetate is available, so a rising acetyl-CoA concentration usually means the four-carbon pool has run short. Directing pyruvate toward oxaloacetate at that moment addresses the actual shortage rather than the apparent surplus.' },

  { id:'CAC-056', m:'m4', area:'Anaplerotic reactions', level:'application',
    stem:'In a cell with low oxaloacetate and high acetyl-CoA, which change would most directly restore cycle flux?',
    options:['Increased carboxylation of pyruvate to oxaloacetate','Increased conversion of pyruvate to acetyl-CoA','Increased export of citrate to the cytosol','Increased inhibition of malate dehydrogenase'],
    answer:0,
    why:' Refilling the oxaloacetate pool gives citrate synthase the partner it lacks, allowing the accumulated acetyl-CoA to enter. Making more acetyl-CoA or exporting more citrate would each make the imbalance worse.' },

  { id:'CAC-057', m:'m4', area:'Amino acid and propionyl-CoA entry', level:'concept',
    stem:'Glutamate dehydrogenase converts glutamate into which citric acid cycle intermediate?',
    options:['\u03B1-Ketoglutarate','Oxaloacetate','Succinyl-CoA','Fumarate'],
    answer:0,
    why:' Removing the amino group from glutamate leaves the five-carbon keto acid \u03B1-ketoglutarate, which enters the cycle directly. This link is a major route by which amino acid carbon reaches oxidative metabolism.' },

  { id:'CAC-058', m:'m4', area:'Amino acid and propionyl-CoA entry', level:'concept',
    stem:'Aspartate transaminase generates which citric acid cycle intermediate from aspartate?',
    options:['Oxaloacetate','\u03B1-Ketoglutarate','Malate','Citrate'],
    answer:0,
    why:' Transferring the amino group of aspartate onto \u03B1-ketoglutarate leaves oxaloacetate. Since oxaloacetate is the intermediate most likely to limit flux, this provides a second useful anaplerotic route.' },

  { id:'CAC-059', m:'m4', area:'Amino acid and propionyl-CoA entry', level:'application',
    stem:'Propionyl-CoA, derived from odd-chain fatty acids and certain amino acids, enters the citric acid cycle as which intermediate?',
    options:['Succinyl-CoA','Acetyl-CoA','Oxaloacetate','\u03B1-Ketoglutarate'],
    answer:0,
    why:' Propionyl-CoA is carboxylated, epimerized and then rearranged by methylmalonyl-CoA mutase to give succinyl-CoA. This is one of the few routes by which fatty acid carbon can contribute to the four-carbon pool.' },

  { id:'CAC-060', m:'m4', area:'Amino acid and propionyl-CoA entry', level:'integration',
    stem:'Which vitamin is required by methylmalonyl-CoA mutase, the enzyme that completes the conversion of propionyl-CoA to succinyl-CoA?',
    options:['Cobalamin','Biotin','Riboflavin','Pantothenate'],
    answer:0,
    why:' Methylmalonyl-CoA mutase depends on a cobalamin (B12) cofactor for the rearrangement. When B12 is deficient, methylmalonic acid accumulates \u2014 which is why measuring it helps distinguish B12 deficiency from folate deficiency.' },

  { id:'CAC-061', m:'m4', area:'Biosynthetic precursors', level:'application',
    stem:'Which intermediate provides the carbon skeleton used for gluconeogenesis and for aspartate synthesis?',
    options:['Oxaloacetate','Citrate','Succinate','\u03B1-Ketoglutarate'],
    answer:0,
    why:' Oxaloacetate is the branch point for both routes, which is part of why its concentration is so tightly linked to cycle flux. Every oxaloacetate diverted to glucose or aspartate is one that citrate synthase cannot use.' },

  { id:'CAC-062', m:'m4', area:'Anaplerotic reactions', level:'application',
    stem:'Which description best captures the term amphibolic as applied to the citric acid cycle?',
    options:['It runs catabolic and anabolic traffic at the same time','It operates in both the forward and reverse directions','It functions in both the cytosol and the matrix','It uses both NAD\u207A and FAD as electron acceptors'],
    answer:0,
    why:' The cycle oxidizes acetyl groups for energy while simultaneously supplying carbon skeletons for lipids, amino acids, heme and glucose. That dual role is what the term describes, and it is why anaplerotic reactions are necessary at all.' },

  /* ==================== MODULE 5 ==================== */
  { id:'CAC-063', m:'m5', area:'Oxygen and redox balance', level:'concept',
    stem:'Why does the citric acid cycle slow when oxygen becomes unavailable, even though no cycle enzyme uses oxygen as a substrate?',
    options:['NAD\u207A and FAD are no longer regenerated by the electron transport chain','Citrate synthase requires oxygen to condense acetyl-CoA with oxaloacetate','Pyruvate can no longer be transported into the matrix','Oxaloacetate is spontaneously oxidized in the absence of oxygen'],
    answer:0,
    why:' The dependence is indirect. The cycle consumes NAD\u207A and FAD at four steps, and only the electron transport chain, with oxygen as its final acceptor, can restore them. Without that regeneration the carriers stay reduced and the cycle stalls.' },

  { id:'CAC-064', m:'m5', area:'Oxygen and redox balance', level:'application',
    stem:'Immediately after oxygen is removed from actively respiring mitochondria, what happens to the NADH and NAD\u207A pools?',
    options:['NADH rises while NAD\u207A falls','NAD\u207A rises while NADH falls','Both rise together','Both fall together'],
    answer:0,
    why:' With no final electron acceptor, the chain backs up and NADH cannot be reoxidized. NADH accumulates and NAD\u207A becomes scarce, which is the change that actually limits the cycle.' },

  { id:'CAC-065', m:'m5', area:'Oxygen and redox balance', level:'application',
    stem:'Which group of citric acid cycle enzymes is most directly limited when NAD\u207A becomes scarce?',
    options:['Isocitrate dehydrogenase, \u03B1-ketoglutarate dehydrogenase and malate dehydrogenase','Aconitase and fumarase','Citrate synthase and succinyl-CoA synthetase','Succinate dehydrogenase and fumarase'],
    answer:0,
    why:' These three are the NAD\u207A-dependent dehydrogenases. Aconitase and fumarase carry out no redox chemistry, and neither citrate synthase nor succinyl-CoA synthetase uses NAD\u207A.' },

  { id:'CAC-066', m:'m5', area:'Oxygen and redox balance', level:'integration',
    stem:'What is the role of oxygen in the overall process of aerobic metabolism?',
    options:['It serves as the final acceptor of electrons carried by NADH and FADH\u2082','It is incorporated into the CO\u2082 released by the cycle','It activates the four regulated enzymes of the cycle','It provides the phosphate used in substrate-level phosphorylation'],
    answer:0,
    why:' Oxygen accepts electrons at the end of the electron transport chain and is reduced to water. That final step is what keeps the chain running and, indirectly, what keeps NAD\u207A and FAD available to the cycle.' },

  { id:'CAC-067', m:'m5', area:'Metabolic fate of pyruvate', level:'concept',
    stem:'In human tissue lacking oxygen, what is the fate of pyruvate produced by glycolysis?',
    options:['It is reduced to lactate in the cytosol','It is oxidized to acetyl-CoA in the matrix','It is converted to ethanol and CO\u2082','It is carboxylated to oxaloacetate'],
    answer:0,
    why:' Lactate dehydrogenase reduces pyruvate to lactate in the cytosol. Ethanol fermentation is the equivalent route in yeast and some bacteria, but human cells do not use it.' },

  { id:'CAC-068', m:'m5', area:'Metabolic fate of pyruvate', level:'integration',
    stem:'What does the reduction of pyruvate to lactate accomplish for a cell without oxygen?',
    options:['It regenerates NAD\u207A so glycolysis can continue','It produces additional ATP directly from pyruvate','It allows acetyl-CoA to be made without oxygen','It removes CO\u2082 that would otherwise accumulate'],
    answer:0,
    why:' Glycolysis consumes NAD\u207A at glyceraldehyde 3-phosphate dehydrogenase. With the electron transport chain stalled, reducing pyruvate is the only way to reoxidize NADH and keep glycolysis, and its modest ATP yield, running. The reaction itself makes no ATP.' },

  { id:'CAC-069', m:'m5', area:'Metabolic fate of pyruvate', level:'application',
    stem:'A muscle cell shifts from well-oxygenated to poorly oxygenated conditions during intense exercise. Which change in pyruvate handling is expected?',
    options:['A greater share of pyruvate is reduced to lactate','A greater share of pyruvate is oxidized to acetyl-CoA','A greater share of pyruvate is exported unchanged','Pyruvate production by glycolysis stops entirely'],
    answer:0,
    why:' As the electron transport chain becomes limited, NADH accumulates and PDH is inhibited by the rising NADH. Lactate dehydrogenase then handles more of the pyruvate, restoring NAD\u207A so that glycolytic ATP production can continue.' },

  { id:'CAC-070', m:'m5', area:'Aerobic and anaerobic efficiency', level:'concept',
    stem:'Approximately how much ATP is produced per glucose by the whole aerobic process, from glycolysis through oxidative phosphorylation?',
    options:['30 to 32','10 to 12','2 to 4','60 to 64'],
    answer:0,
    why:' The figure covers glycolysis, pyruvate processing, the citric acid cycle and oxidative phosphorylation combined. Most of it comes from the electron transport chain acting on NADH and FADH\u2082, not from substrate-level phosphorylation.' },

  { id:'CAC-071', m:'m5', area:'Aerobic and anaerobic efficiency', level:'concept',
    stem:'How much net ATP is produced per glucose when oxygen is unavailable, and from which process?',
    options:['Two ATP, from glycolysis','Two ATP, from the citric acid cycle','Four ATP, from substrate-level phosphorylation in the cycle','Twelve ATP, from partial operation of the electron transport chain'],
    answer:0,
    why:' Without oxygen, only glycolysis yields net ATP, and it yields two per glucose. The cycle and oxidative phosphorylation both stall for lack of regenerated NAD\u207A and FAD.' },

  { id:'CAC-072', m:'m5', area:'Aerobic and anaerobic efficiency', level:'integration',
    stem:'A student attributes the full 30 to 32 ATP yield per glucose to the citric acid cycle. Which correction is most accurate?',
    options:['That figure describes the whole aerobic process, of which the cycle supplies mainly reduced carriers','That figure describes glycolysis alone, and the cycle contributes nothing further','That figure describes the cycle alone, and glycolysis contributes nothing','That figure describes oxidative phosphorylation, which operates independently of the cycle'],
    answer:0,
    why:' The cycle makes only two ATP or GTP per glucose directly. Its main contribution is the six NADH and two FADH\u2082 it delivers to the electron transport chain, where most of the ATP is actually made.' },

  { id:'CAC-073', m:'m5', area:'Aerobic and anaerobic efficiency', level:'application',
    stem:'Which waste products characterize anaerobic metabolism of glucose in human tissue?',
    options:['Lactate and protons','Carbon dioxide and water','Ethanol and carbon dioxide','Acetyl-CoA and NADH'],
    answer:0,
    why:' Anaerobic glycolysis ends in lactate along with protons, which contributes to the acidification seen with sustained oxygen limitation. Carbon dioxide and water are the end products of the complete aerobic route.' },

  { id:'CAC-074', m:'m5', area:'Oxygen and redox balance', level:'application',
    stem:'A drug blocks Complex IV of the electron transport chain in a cell with normal oxygen delivery. What is the expected effect on the citric acid cycle?',
    options:['Flux falls because NAD\u207A is no longer regenerated','Flux rises because oxygen remains available','Flux is unchanged because the cycle operates independently of oxygen','Flux rises briefly and then stabilizes at a higher rate'],
    answer:0,
    why:' What matters to the cycle is not oxygen delivery but whether electrons can move through the chain. Blocking Complex IV stops electron flow, NADH accumulates, and the NAD\u207A-dependent steps of the cycle slow just as they would in hypoxia.' }
,
  /* ---- Added depth: these fill out the concept areas that had the
     fewest questions, so an adaptive round after a missed area has
     unseen questions to draw on rather than repeating the quiz. ---- */

  { id:'CAC-075', m:'m1', area:'Pyruvate transport and fate', level:'application',
    stem:'A liver cell converts pyruvate into oxaloacetate rather than acetyl-CoA. Which enzyme carries out that conversion?',
    options:['Pyruvate carboxylase','Pyruvate dehydrogenase','Malate dehydrogenase','Lactate dehydrogenase'],
    answer:0,
    why:' Pyruvate sits at a branch point with several possible fates. Carboxylation to oxaloacetate is favored when the cycle needs replenishing or when the cell is making glucose, and it is a separate enzyme from the PDH complex.' },

  { id:'CAC-076', m:'m1', area:'Pyruvate transport and fate', level:'integration',
    stem:'Which feature distinguishes the compartment where glycolysis occurs from the compartment where the citric acid cycle occurs?',
    options:['Glycolysis occurs in the cytosol while the cycle occurs in the mitochondrial matrix','Glycolysis occurs in the matrix while the cycle occurs in the cytosol','Both occur in the matrix but use different enzyme pools','Both occur in the cytosol but at different times'],
    answer:0,
    why:' The separation is what makes pyruvate transport necessary, and it also lets the cell regulate the two stages independently. Succinate dehydrogenase is the partial exception, since it is anchored in the inner mitochondrial membrane.' },

  { id:'CAC-077', m:'m1', area:'PDH complex and cofactors', level:'concept',
    stem:'Which coenzyme carries the acetyl group away from the PDH complex?',
    options:['Coenzyme A','Thiamine pyrophosphate','Lipoic acid','NAD\u207A'],
    answer:0,
    why:' The acetyl group is passed from the lipoyl arm of E2 onto coenzyme A, forming acetyl-CoA. TPP and lipoic acid hold the fragment earlier in the sequence, and NAD\u207A takes the electrons rather than the carbon.' },

  { id:'CAC-078', m:'m1', area:'PDH complex and cofactors', level:'integration',
    stem:'Which complex of the citric acid cycle is built on the same three-enzyme plan as the PDH complex?',
    options:['\u03B1-Ketoglutarate dehydrogenase','Succinyl-CoA synthetase','Succinate dehydrogenase','Citrate synthase'],
    answer:0,
    why:' The \u03B1-ketoglutarate dehydrogenase complex uses the same E1\u2013E2\u2013E3 arrangement and the same five coenzymes. Recognizing the repeat means learning one mechanism rather than two.' },

  { id:'CAC-079', m:'m1', area:'Vitamins and coenzymes', level:'application',
    stem:'A patient is deficient in riboflavin. Which cycle enzyme would be most directly affected?',
    options:['Succinate dehydrogenase','Citrate synthase','Aconitase','Fumarase'],
    answer:0,
    why:' Riboflavin supplies FAD, and succinate dehydrogenase is the FAD-linked oxidation of the cycle. FAD is also used within the E3 subunit of both dehydrogenase complexes.' },

  { id:'CAC-080', m:'m1', area:'Vitamins and coenzymes', level:'concept',
    stem:'Which coenzyme is derived from niacin?',
    options:['NAD\u207A','FAD','Coenzyme A','Thiamine pyrophosphate'],
    answer:0,
    why:' Niacin (B3) supplies NAD\u207A, which is used by isocitrate dehydrogenase, \u03B1-ketoglutarate dehydrogenase, malate dehydrogenase and the E3 subunit of the PDH complex.' },

  { id:'CAC-081', m:'m1', area:'Carbon and electron bookkeeping', level:'application',
    stem:'Starting from one molecule of glucose, how many molecules of acetyl-CoA are produced by pyruvate processing?',
    options:['Two','One','Three','Six'],
    answer:0,
    why:' Glycolysis splits glucose into two pyruvate, and each is converted to one acetyl-CoA. This is why one glucose drives two turns of the cycle.' },

  { id:'CAC-082', m:'m1', area:'Carbon and electron bookkeeping', level:'integration',
    stem:'Six CO\u2082 are released per glucose during complete aerobic oxidation. How are they distributed between pyruvate processing and the cycle?',
    options:['Two from pyruvate processing and four from the cycle','Four from pyruvate processing and two from the cycle','Six from the cycle alone','Three from each'],
    answer:0,
    why:' Each pyruvate releases one CO\u2082 at PDH, giving two, and each of the two cycle turns releases two, giving four. Keeping these ledgers separate is what makes the totals close against the six carbons of glucose.' },

  { id:'CAC-083', m:'m1', area:'Gateway regulation', level:'application',
    stem:'Which metabolite serves as a signal that the PDH complex should remain active?',
    options:['Pyruvate','Acetyl-CoA','NADH','ATP'],
    answer:0,
    why:' Substrate availability argues for keeping the gate open: pyruvate inhibits the kinase, favoring the dephosphorylated active form. The other three all signal that the cell is energy-replete and push the complex toward inactivation.' },

  { id:'CAC-084', m:'m1', area:'Gateway regulation', level:'concept',
    stem:'Which pair of products directly inhibits the PDH complex?',
    options:['Acetyl-CoA and NADH','Pyruvate and coenzyme A','ADP and NAD\u207A','Citrate and oxaloacetate'],
    answer:0,
    why:' The complex is inhibited by its own products, which is a common way for a committing step to sense whether its output is being used. ATP adds a further layer by activating the kinase.' },

  { id:'CAC-085', m:'m2', area:'Thermodynamic coupling', level:'concept',
    stem:'What does a positive standard free energy change indicate about a reaction?',
    options:['The reverse direction is favored when substrate and product concentrations are equal','The reaction cannot occur under any cellular conditions','The reaction requires an enzyme in order to proceed','The reaction releases energy as it proceeds forward'],
    answer:0,
    why:' Standard free energy is defined at equal concentrations, which cells rarely maintain. A positive value describes the equilibrium position, not an absolute prohibition \u2014 change the concentrations and the direction can change with them.' },

  { id:'CAC-086', m:'m2', area:'Thermodynamic coupling', level:'integration',
    stem:'The aconitase reaction favors citrate at equilibrium, yet flux runs toward isocitrate in a working cell. What accounts for the direction of flux?',
    options:['Isocitrate is consumed rapidly by the next reaction','Aconitase changes the equilibrium constant of the reaction','The reaction is coupled to hydrolysis of ATP','Citrate is unable to bind aconitase in the matrix'],
    answer:0,
    why:' Isocitrate dehydrogenase removes isocitrate as fast as aconitase produces it, keeping the product low. This is the same mass-action logic that drives the malate dehydrogenase step \u2014 the pattern is worth recognizing rather than learning twice.' },

  { id:'CAC-087', m:'m3', area:'Energy charge and flux', level:'application',
    stem:'A cell is consuming ATP rapidly and its NADH to NAD\u207A ratio has fallen. What is the expected flux through the cycle?',
    options:['High, because the inhibitory signals have been relieved','Low, because NADH is needed as a substrate','Low, because ADP inhibits the regulated enzymes','Unchanged, because the cycle runs at a constant rate'],
    answer:0,
    why:' Falling ATP and NADH remove the inhibition on all four regulated enzymes, and abundant NAD\u207A supports the three NAD\u207A-dependent dehydrogenases. NADH is a product of the cycle, not a substrate for it.' },

  { id:'CAC-088', m:'m3', area:'Energy charge and flux', level:'concept',
    stem:'Which ratio serves as the most direct indicator of whether the cycle should speed up or slow down?',
    options:['NADH to NAD\u207A','Citrate to isocitrate','Malate to fumarate','Acetyl-CoA to coenzyme A'],
    answer:0,
    why:' The NADH to NAD\u207A ratio reports both how much energy has been captured and whether the electron transport chain is keeping up. It inhibits the regulated enzymes and, by limiting NAD\u207A, restricts the dehydrogenases directly.' },

  { id:'CAC-089', m:'m3', area:'Physiologic scenarios', level:'application',
    stem:'In cardiac muscle during increased workload, which change would most increase citric acid cycle flux?',
    options:['A rise in cytosolic Ca\u00B2\u207A','A rise in ATP concentration','A rise in NADH concentration','A rise in succinyl-CoA concentration'],
    answer:0,
    why:' Ca\u00B2\u207A activates PDH through the phosphatase and directly stimulates isocitrate dehydrogenase and \u03B1-ketoglutarate dehydrogenase. The other three all slow the cycle.' },

  { id:'CAC-090', m:'m3', area:'Physiologic scenarios', level:'integration',
    stem:'What is the advantage of having Ca\u00B2\u207A regulate both muscle contraction and citric acid cycle enzymes?',
    options:['Energy supply increases at the same moment demand appears','Contraction can occur without any ATP being consumed','The cycle can operate when oxygen delivery is interrupted','Calcium substitutes for ADP as an allosteric activator'],
    answer:0,
    why:' Waiting for ATP to fall before increasing production would leave the cell perpetually catching up. Using one signal for both means supply rises alongside demand rather than after it.' },

  { id:'CAC-091', m:'m5', area:'Metabolic fate of pyruvate', level:'application',
    stem:'Which enzyme catalyzes the conversion of pyruvate to lactate?',
    options:['Lactate dehydrogenase','Pyruvate dehydrogenase','Pyruvate carboxylase','Malate dehydrogenase'],
    answer:0,
    why:' Lactate dehydrogenase reduces pyruvate using NADH, which reoxidizes the carrier to NAD\u207A. That regenerated NAD\u207A is what keeps glycolysis running when the electron transport chain has stalled.' },

  { id:'CAC-092', m:'m5', area:'Metabolic fate of pyruvate', level:'integration',
    stem:'Both the aerobic and the anaerobic routes for pyruvate serve one shared purpose. Which purpose is it?',
    options:['Regenerating NAD\u207A so that glycolysis can continue','Producing acetyl-CoA for the citric acid cycle','Releasing CO\u2082 from the carbon skeleton','Generating a proton gradient across the inner membrane'],
    answer:0,
    why:' Glycolysis stops without NAD\u207A. Aerobically the electron transport chain regenerates it and a large amount of ATP is produced along the way; anaerobically lactate dehydrogenase regenerates it and no additional ATP is made. Redox balance is the constraint in both cases.' }
];
