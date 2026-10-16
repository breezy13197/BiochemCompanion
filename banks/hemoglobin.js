/* ============================================================
   HEMOGLOBIN QUESTION BANK
   Pure content. No dependency on the engine or on any DOM
   element, so a future hub can read this file on its own to build
   cross-topic exams. Every ID here is permanent: once assigned it
   is never reused and never renumbered, even if the question is
   edited or retired.

   Source: PHA3134 Biochemistry Q2 2026 — Hemoglobin lecture.
   Every item is written to the course question-writing standard:
   single best answer, independent of every other item, positively
   worded stem, 4 homogeneous parallel choices, plausible
   distractors, no absolute or vague terms, no all/none of the
   above, and a teaching rationale on every item.
   ============================================================ */

var TOPIC_ID    = 'hemoglobin';
var TOPIC_TITLE = 'Hemoglobin: Structure, Oxygen Binding & Clinical Relevance';

/* ---------- "Can you predict it?" checkpoints ----------
   Keyed by id. `answer` is an index into `options` BEFORE the
   engine shuffles them at render time. `why` is the teaching
   rationale shown once the student answers correctly. */
var CHECKPOINTS = {

  /* ---- Module 1 · Globin foundations ---- */
  c1: {
    options: [
      'One molecule of O₂',
      'Two molecules of O₂',
      'Four molecules of O₂',
      'Eight molecules of O₂'
    ],
    answer: 0,
    why: 'Myoglobin is a monomer with a single heme group, so it carries one O₂. Hemoglobin is an α₂β₂ tetramer with four heme groups and carries four.'
  },
  c1b: {
    options: [
      'Cardiac and skeletal muscle tissue',
      'Red blood cells',
      'Hepatocytes',
      'Circulating plasma'
    ],
    answer: 1,
    why: 'Hemoglobin is produced and housed in erythrocytes. Myoglobin is the one found in cardiac and skeletal muscle.'
  },

  /* ---- Module 1 · Heme, prosthetic groups, iron ---- */
  c2: {
    options: [
      'A prosthetic group',
      'A coenzyme',
      'A substrate',
      'A signal peptide'
    ],
    answer: 0,
    why: 'A prosthetic group is a non-amino-acid component tightly or covalently bound to a protein. Heme is bound to globin this way, which is why it stays with the protein rather than diffusing away between oxygen deliveries.'
  },
  c2b: {
    options: [
      'Fe²⁺',
      'Fe³⁺',
      'Either Fe²⁺ or Fe³⁺',
      'Iron in its elemental state'
    ],
    answer: 0,
    why: 'Only the ferrous form, Fe²⁺, binds oxygen within hemoglobin. Iron trapped in the ferric Fe³⁺ state gives you methemoglobin, which is covered in Module 5.'
  },
  c2c: {
    options: [
      'Ferrochelatase inserts iron into the finished porphyrin ring',
      'Ferrochelatase links glycine to acetate',
      'Ferrochelatase removes iron from aged heme',
      'Ferrochelatase converts Fe³⁺ to Fe²⁺ in circulation'
    ],
    answer: 0,
    why: 'The organic scaffold is built first from glycine- and acetate-derived atoms; ferrochelatase then adds the iron atom to the center of that scaffold.'
  },

  /* ---- Module 1 · Comparison activity ---- */
  c3: {
    options: [
      'Hemoglobin, because its four subunits bind O₂ cooperatively',
      'Myoglobin, because its single site has a very high affinity',
      'Hemoglobin, because each of its heme groups binds two O₂ molecules',
      'Myoglobin, because it is found closer to metabolising tissue'
    ],
    answer: 0,
    why: 'Cooperativity is the whole point of the tetramer. Under similar conditions hemoglobin uses about 66% of its oxygen capacity while myoglobin uses about 7%, so hemoglobin delivers close to ten times as much oxygen.'
  },

  /* ---- Module 2 · Coordination chemistry ---- */
  c4: {
    options: [
      'Four are held by the heme ring, one by the proximal histidine, one by O₂',
      'Five are held by the heme ring and one by O₂',
      'Four are held by the heme ring and two by O₂',
      'Three are held by the heme ring, two by histidine residues, one by O₂'
    ],
    answer: 0,
    why: 'Fe²⁺ coordinates six groups: four positions are taken by the heme ring itself, the fifth by the imidazole side chain of the proximal histidine, and the sixth is left open for oxygen.'
  },
  c4b: {
    options: [
      'It moves into the plane of the porphyrin ring',
      'It moves further out of the plane of the porphyrin ring',
      'It leaves the porphyrin ring entirely',
      'It stays exactly where it was'
    ],
    answer: 0,
    why: 'On binding O₂ the iron shifts into the plane of the porphyrin. That small movement drags the proximal histidine with it, and that is the mechanical signal Module 3 builds on.'
  },

  /* ---- Module 2 · Redox and the distal histidine ---- */
  c5: {
    options: [
      'Superoxide anion, O₂⁻',
      'Water',
      'Hydrogen peroxide',
      'Molecular nitrogen'
    ],
    answer: 0,
    why: 'The iron is temporarily oxidised from Fe²⁺ to Fe³⁺, so something has to be reduced — the bound O₂ becomes superoxide. Both changes reverse when the oxygen is released.'
  },
  c5b: {
    options: [
      'It stabilises the bound O₂ and makes binding of other small molecules less favourable',
      'It occupies the sixth coordination site in deoxyhemoglobin',
      'It donates an electron to the iron atom',
      'It anchors the heme group covalently to the globin chain'
    ],
    answer: 0,
    why: 'The distal histidine is the second histidine near the heme pocket. It steadies bound oxygen and makes the pocket less welcoming to competitors such as CO and isocyanates.'
  },
  c5c: {
    options: [
      'CO binds roughly 250 times more strongly than O₂',
      'CO binds roughly as strongly as O₂',
      'CO binds roughly 250 times more weakly than O₂',
      'CO binds only when iron is in the Fe³⁺ state'
    ],
    answer: 0,
    why: 'The distal histidine reduces CO binding but does not prevent it — CO still binds about 250 times more strongly than oxygen, which is why carbon monoxide exposure is so dangerous.'
  },

  /* ---- Module 2 · Sequence activity ---- */
  c6: {
    options: [
      'Iron moves into the porphyrin plane, pulling the proximal histidine with it',
      'The distal histidine swings into the sixth coordination site',
      'The heme group detaches from the globin chain',
      'The α and β chains exchange heme groups'
    ],
    answer: 0,
    why: 'This is the pivot point of the whole lecture: a chemical event at one iron atom becomes a mechanical event in an α helix, and that is how one subunit tells the others what just happened.'
  },

  /* ---- Module 3 · Quaternary structure ---- */
  c7: {
    options: [
      'Two αβ dimers that rotate relative to one another',
      'Four identical subunits arranged in a ring',
      'A single long chain folded into four domains',
      'Two α chains bound directly to two heme-free β chains'
    ],
    answer: 0,
    why: 'Hemoglobin is a heterotetramer of two α and two β chains, but it behaves as two αβ dimers. Oxygen binding makes those dimers rotate with respect to each other.'
  },
  c7b: {
    options: [
      'About 66% for hemoglobin and about 7% for myoglobin',
      'About 7% for hemoglobin and about 66% for myoglobin',
      'About 50% for each protein',
      'About 100% for hemoglobin and about 50% for myoglobin'
    ],
    answer: 0,
    why: 'Under similar conditions hemoglobin uses roughly 66% of its oxygen capacity against roughly 7% for myoglobin — close to a tenfold difference in delivery, produced entirely by quaternary structure.'
  },

  /* ---- Module 3 · T and R states ---- */
  c8: {
    options: [
      'The T state, which has lower affinity and more interactions between subunits',
      'The R state, which has lower affinity and fewer interactions between subunits',
      'The T state, which has higher affinity and fewer interactions between subunits',
      'The R state, which has higher affinity and more interactions between subunits'
    ],
    answer: 0,
    why: 'Deoxyhemoglobin sits almost exclusively in the tense state: more contacts between subunits, more rigidity, lower oxygen affinity. Oxyhemoglobin prefers the relaxed, higher-affinity R state.'
  },
  c8b: {
    options: [
      'Oxygen affinity rises',
      'Oxygen affinity falls',
      'Oxygen affinity is unchanged',
      'The tetramer separates into free subunits'
    ],
    answer: 0,
    why: 'R is the high-affinity state. Anything that pushes the equilibrium toward R makes hemoglobin hold oxygen more tightly; anything that pushes it toward T makes hemoglobin release oxygen.'
  },

  /* ---- Module 3 · Models ---- */
  c9: {
    options: [
      'All four subunits share the same state, with the equilibrium shifting toward R as O₂ binds',
      'Each subunit changes state independently of the others',
      'Subunits alternate between T and R in a fixed rotation',
      'Only the β subunits are able to adopt the R state'
    ],
    answer: 0,
    why: 'That is the concerted model. The sequential model is the one that allows each subunit to change independently, passing through an intermediate state that is neither T nor R.'
  },
  c9b: {
    options: [
      'Hemoglobin behaves in a way that supports elements of both models',
      'Only the concerted model is supported by the evidence',
      'Only the sequential model is supported by the evidence',
      'Neither model has any experimental support'
    ],
    answer: 0,
    why: 'The lecture gives evidence on both sides: a 20-fold affinity increase when three of four sites are occupied fits the concerted model, while a 3–4 fold increase after just the first O₂ binds fits the sequential model. Real hemoglobin sits between them.'
  },

  /* ---- Module 4 · 2,3-BPG ---- */
  c10: {
    options: [
      'The T state',
      'The R state',
      'Both states with equal affinity',
      'Only hemoglobin that already carries four O₂ molecules'
    ],
    answer: 0,
    why: '2,3-BPG binds hemoglobin only in the T state. By stabilising the low-affinity conformation it makes the R state harder to reach, which is exactly what forces oxygen release in the tissues.'
  },
  c10b: {
    options: [
      'Positively charged residues, because 2,3-BPG is highly negatively charged',
      'Negatively charged residues, because 2,3-BPG is highly positively charged',
      'The heme iron itself, competing directly with O₂',
      'Hydrophobic residues buried in the core of each subunit'
    ],
    answer: 0,
    why: '2,3-BPG carries a strong negative charge and binds a positively charged pocket. Remember this one — Module 5 shows what happens in fetal hemoglobin when a positive histidine in that pocket is replaced by a neutral serine.'
  },

  /* ---- Module 4 · Bohr effect ---- */
  c11: {
    options: [
      'Oxygen affinity falls, favouring release',
      'Oxygen affinity rises, favouring retention',
      'Oxygen affinity is unaffected by pH',
      'Hemoglobin releases its heme groups'
    ],
    answer: 0,
    why: 'Affinity is directly correlated with pH: as pH drops, affinity drops. Metabolically active tissue generates H⁺ and CO₂, and hemoglobin answers by letting go of oxygen exactly where it is needed.'
  },
  c11b: {
    options: [
      'A protonated histidine forms a salt bridge with an aspartate in the same β chain',
      'A protonated histidine binds directly to the heme iron',
      'An aspartate residue is protonated and leaves the β chain',
      'The β chains dissociate from the α chains'
    ],
    answer: 0,
    why: 'Low pH protonates the imidazole side chain of a β-chain histidine. In deoxyhemoglobin that protonated residue can form a salt bridge with an aspartate in the same chain, stabilising the T state.'
  },

  /* ---- Module 4 · CO₂ ---- */
  c12: {
    options: [
      'It reacts with water to form carbonic acid, a reaction catalysed by carbonic anhydrase',
      'It binds the sixth coordination site of the heme iron',
      'It reduces Fe³⁺ back to Fe²⁺',
      'It displaces 2,3-BPG from its binding pocket'
    ],
    answer: 0,
    why: 'This is the indirect route: CO₂ acts as a mild acid via carbonic acid, the resulting H⁺ drops the pH, and the Bohr mechanism from the previous section takes over.'
  },
  c12b: {
    options: [
      'Negatively charged carbamates that form salt bridges with the other αβ dimer',
      'Positively charged carbamates that repel the other αβ dimer',
      'Neutral carbamates that block the 2,3-BPG pocket',
      'Bicarbonate ions bound directly to the heme iron'
    ],
    answer: 0,
    why: 'This is the direct route: CO₂ reacts with N-terminal amino groups to form negatively charged carbamates, which form salt bridges across to the other αβ dimer and stabilise the T state. Carbamate formation also carries about 15% of total CO₂ back to the lungs.'
  },

  /* ---- Module 4 · Control panel ---- */
  c13: {
    options: [
      'Toward the T state, releasing oxygen to the tissue',
      'Toward the R state, holding oxygen more tightly',
      'Toward the T state, holding oxygen more tightly',
      'Toward the R state, releasing oxygen to the tissue'
    ],
    answer: 0,
    why: 'Rising H⁺, rising CO₂ and 2,3-BPG all push the same way — toward T, toward release. That is the single question worth carrying through the whole companion: what shifts hemoglobin toward T or R, and what does that do to affinity?'
  },
  c13b: {
    options: [
      'Reduced maximum saturation with a left shift of the remaining curve',
      'Increased maximum saturation with a right shift',
      'A right shift only, with no change in maximum saturation',
      'No effect on the curve at physiological CO exposure'
    ],
    answer: 0,
    why: 'CO takes up some of the oxygen-binding seats outright, lowering the ceiling on how much oxygen the molecule can carry, and it also raises the affinity of the remaining sites — a double penalty on delivery that looks different on the curve from the four allosteric effectors.'
  },

  /* ---- Module 5 · Fetal hemoglobin ---- */
  c14: {
    options: [
      'Two α chains and two γ chains',
      'Two α chains and two β chains',
      'Four γ chains',
      'Two β chains and two γ chains'
    ],
    answer: 0,
    why: 'Fetal hemoglobin is α₂γ₂. The γ chain is about 72% identical to the β chain, and the difference that matters sits in the 2,3-BPG binding site.'
  },
  c14b: {
    options: [
      'Serine is neutral, so the pocket binds 2,3-BPG less well and oxygen affinity rises',
      'Serine is negatively charged, so the pocket binds 2,3-BPG more tightly and affinity rises',
      'Serine blocks the heme pocket, so fewer O₂ molecules can bind',
      'Serine stabilises the T state, so oxygen affinity falls'
    ],
    answer: 0,
    why: 'Follow the chain of reasoning: histidine → serine means positive → neutral, so a weaker grip on negatively charged 2,3-BPG, less T-state stabilisation, higher oxygen affinity — and oxygen transfers from maternal to fetal blood.'
  },

  /* ---- Module 5 · Methemoglobin ---- */
  c15: {
    options: [
      'The heme iron is in the Fe³⁺ state and cannot bind oxygen',
      'The heme iron is in the Fe²⁺ state and binds oxygen irreversibly',
      'The globin chains have lost their heme groups',
      'The tetramer has separated into αβ dimers'
    ],
    answer: 0,
    why: 'Methemoglobin is hemoglobin whose iron has been oxidised to Fe³⁺. About 1–2% of circulating hemoglobin is in this form in a healthy person.'
  },
  c15b: {
    options: [
      'Cytochrome-b₅ reductase',
      'Carbonic anhydrase',
      'Ferrochelatase',
      'Superoxide dismutase'
    ],
    answer: 0,
    why: 'Cytochrome-b₅ reductase (methemoglobin reductase) converts methemoglobin back to functional hemoglobin. A deficiency predisposes to methemoglobinemia, and certain medications and environmental exposures can cause it too.'
  },

  /* ---- Module 5 · Sickle cell ---- */
  c16: {
    options: [
      'Glutamate at position 6 of the β chain is replaced by valine',
      'Valine at position 6 of the β chain is replaced by glutamate',
      'Histidine in the 2,3-BPG pocket is replaced by serine',
      'A γ chain replaces each β chain'
    ],
    answer: 0,
    why: 'HbS carries a single substitution, Glu6Val, in the β chain. Swapping a charged residue for a hydrophobic one on the protein surface is all it takes.'
  },
  c16b: {
    options: [
      'The T state, because the partner hydrophobic residues are exposed only in that conformation',
      'The R state, because oxygenated hemoglobin packs more tightly',
      'Both states equally, because the valine is always on the surface',
      'Neither state, because aggregation requires a second mutation'
    ],
    answer: 0,
    why: 'The surface valine interacts with hydrophobic residues on a neighbouring hemoglobin molecule, and those partner residues are exposed only in the T state. That is why deoxyhemoglobin S aggregates and oxygenated HbS largely does not.'
  },

  /* ---- Mastery Lab ---- */
  c17: {
    options: [
      'Affinity falls and oxygen is released, because H⁺ and CO₂ stabilise the T state',
      'Affinity rises and oxygen is retained, because H⁺ and CO₂ stabilise the R state',
      'Affinity is unchanged, because only 2,3-BPG shifts the equilibrium',
      'The tetramer dissociates and oxygen diffuses away'
    ],
    answer: 0,
    why: 'Exercising muscle is acidic and CO₂-rich. Both changes stabilise T through salt bridges, affinity falls, and oxygen is delivered precisely to the tissue doing the work.'
  },
  c17b: {
    options: [
      'Oxygen affinity would fall, because 2,3-BPG would bind the pocket more tightly',
      'Oxygen affinity would rise, because 2,3-BPG would bind the pocket more tightly',
      'Oxygen affinity would fall, because the heme iron would be oxidised',
      'Oxygen affinity would be unchanged, because 2,3-BPG binds the heme pocket'
    ],
    answer: 0,
    why: 'Run the fetal-hemoglobin logic in reverse. Adding positive charge strengthens binding of negatively charged 2,3-BPG, which stabilises T and lowers affinity — the opposite of what the γ chain achieves.'
  },
  c17c: {
    options: [
      'Aggregation increases, because the T state exposes the partner hydrophobic residues',
      'Aggregation decreases, because the T state buries the partner hydrophobic residues',
      'Aggregation is unchanged, because the valine is exposed in both states',
      'Aggregation stops, because 2,3-BPG occupies the valine site'
    ],
    answer: 0,
    why: 'This is the clinical payoff of the T/R framework: anything that drives HbS toward the T state — low oxygen, acidosis, high CO₂ — makes sickling more likely.'
  },

  /* ---- Mastery Lab · reading the dissociation curve ---- */
  c18: {
    options: [
      '2,3-BPG is absent',
      'CO is present',
      'pH is elevated above 7.4',
      'CO₂ has fallen below normal'
    ],
    answer: 0,
    why: 'A left-shifted curve with a normal maximum means affinity rose without any loss of capacity. Losing 2,3-BPG produces exactly that: nothing occupies the binding sites, but the T state is no longer being stabilised, so affinity climbs.'
  },
  c18b: {
    options: [
      'CO is present',
      '2,3-BPG is absent',
      'pH has dropped',
      'CO₂ has risen'
    ],
    answer: 0,
    why: 'A shortened curve — reduced maximum saturation — is the tell. Only CO removes usable capacity outright, on top of left-shifting whatever sites remain. None of the three allosteric effectors change how much oxygen the molecule could carry at best.'
  },

  /* ---- Mastery Lab · T⇌R equilibrium simulator ---- */
  c19: {
    options: [
      'Low O₂, high 2,3-BPG, low pH, high CO₂',
      'High O₂, low 2,3-BPG, high pH, low CO₂',
      'Low O₂, low 2,3-BPG, high pH, high CO₂',
      'High O₂, high 2,3-BPG, low pH, low CO₂'
    ],
    answer: 0,
    why: 'Every one of these four conditions independently favours the T state on its own: low O₂ leaves fewer sites occupied, 2,3-BPG binds only T, low pH protonates the Bohr histidine, and high CO₂ drives both the carbamate and carbonic-acid routes. Set correctly, they all push the same direction at once.'
  },
  c19b: {
    options: [
      'It simultaneously produces multiple T-stabilising signals that reinforce each other',
      'It produces only one T-stabilising signal, which is enough on its own',
      'It shifts hemoglobin toward the R state, which increases affinity',
      'It has no measurable effect on the T⇌R equilibrium'
    ],
    answer: 0,
    why: 'Low local O₂, rising CO₂, and falling pH all show up together in working muscle, and none of them is acting alone — that overlap is exactly why active tissue is so effective at extracting oxygen from passing blood.'
  }
};

/* ---------- Flashcards ---------- */
var CARDS = [
  { id:'HGB-CARD-01', t:'Prosthetic group', d:'A non-amino-acid component tightly or covalently bound to a protein. Heme is the prosthetic group of hemoglobin and myoglobin.' },
  { id:'HGB-CARD-02', t:'Metalloprotein', d:'A protein containing one or more metal ions. Up to an estimated 50% of all proteins are bound to a metal ion.' },
  { id:'HGB-CARD-03', t:'Heme b', d:'The iron-containing porphyrin responsible for oxygen binding in both hemoglobin and myoglobin.' },
  { id:'HGB-CARD-04', t:'Which iron oxidation state binds oxygen?', d:'Only Fe²⁺. Fe³⁺ hemoglobin is methemoglobin and cannot carry oxygen.', flip:true },
  { id:'HGB-CARD-05', t:'Ferrochelatase', d:'The enzyme that inserts the iron atom into the completed porphyrin scaffold during heme biosynthesis.' },
  { id:'HGB-CARD-06', t:'Sources of heme carbon and nitrogen', d:'Glycine and acetate, per the lecture. Heme is made mainly in the mitochondria of liver and bone marrow cells.', flip:true },
  { id:'HGB-CARD-07', t:'Myoglobin: structure and capacity', d:'A monomer with one heme group; binds one O₂. Located in cardiac and skeletal muscle.' },
  { id:'HGB-CARD-08', t:'Hemoglobin: structure and capacity', d:'An α₂β₂ tetramer with four heme groups; binds four O₂. Located in erythrocytes.' },
  { id:'HGB-CARD-09', t:'Globin family', d:'Oxygen-binding proteins sharing a similar tertiary structure of eight alpha helices.' },
  { id:'HGB-CARD-10', t:'Six coordination sites of Fe²⁺', d:'Four to the heme ring, the fifth to the proximal histidine, the sixth left open for O₂.' },
  { id:'HGB-CARD-11', t:'Proximal histidine', d:'The histidine occupying the fifth coordination site. It sits on an α helix near the αβ dimer interface and moves with the iron — the mechanical basis of cooperativity.' },
  { id:'HGB-CARD-12', t:'Distal histidine', d:'A second histidine near the heme pocket. It stabilises bound O₂ and makes binding of CO and similar molecules less favourable.' },
  { id:'HGB-CARD-13', t:'CO binding strength', d:'About 250 times stronger than O₂, even with the distal histidine discouraging it.', flip:true },
  { id:'HGB-CARD-14', t:'What happens to the iron on O₂ binding?', d:'It moves into the plane of the porphyrin and is temporarily oxidised Fe²⁺ → Fe³⁺, reducing O₂ to superoxide. Both changes reverse on release.', flip:true },
  { id:'HGB-CARD-15', t:'Cooperativity', d:'Binding of O₂ to one subunit raises the affinity of the others; release from one lowers the affinity of the others.' },
  { id:'HGB-CARD-16', t:'Hemoglobin vs myoglobin oxygen use', d:'Under similar conditions hemoglobin uses about 66% of its capacity, myoglobin about 7% — nearly ten times the delivery.' },
  { id:'HGB-CARD-17', t:'T state', d:'Tense/taut. Low oxygen affinity, more interactions between subunits, more rigid. Deoxyhemoglobin sits almost exclusively here.' },
  { id:'HGB-CARD-18', t:'R state', d:'Relaxed. High oxygen affinity, fewer interactions between subunits, less rigid. Preferred by oxyhemoglobin.' },
  { id:'HGB-CARD-19', t:'Concerted model', d:'All four subunits share one state; the equilibrium shifts toward R as oxygen binding increases.' },
  { id:'HGB-CARD-20', t:'Sequential model', d:'Each subunit changes state independently, passing through an intermediate that is neither T nor R before fully converting.' },
  { id:'HGB-CARD-21', t:'Which model is right?', d:'Both contribute. A 20-fold affinity rise with three of four sites filled supports the concerted model; a 3–4 fold rise after the first O₂ supports the sequential model.', flip:true },
  { id:'HGB-CARD-22', t:'Allosteric effector', d:'A molecule that binds at a site other than the site used by the native ligand, and changes the protein\u2019s behaviour from there.' },
  { id:'HGB-CARD-23', t:'2,3-BPG', d:'A glycolytic side product, present at roughly the same concentration as hemoglobin. Binds T-state hemoglobin at a positively charged pocket and drives oxygen release.' },
  { id:'HGB-CARD-24', t:'Hemoglobin without 2,3-BPG', d:'It would release only about 8% of its bound oxygen to tissue.', flip:true },
  { id:'HGB-CARD-25', t:'Bohr effect', d:'H⁺ and CO₂ generated by metabolically active tissue stimulate oxygen release. Affinity is directly correlated with pH.' },
  { id:'HGB-CARD-26', t:'Bohr effect: the salt bridge', d:'Low pH protonates a β-chain histidine, which forms a salt bridge with an aspartate in the same chain and stabilises the T state.' },
  { id:'HGB-CARD-27', t:'CO₂ mechanism 1 — indirect', d:'CO₂ + H₂O → carbonic acid (via carbonic anhydrase) → H⁺ → Bohr effect → T state.' },
  { id:'HGB-CARD-28', t:'CO₂ mechanism 2 — direct', d:'CO₂ + N-terminal amino groups → negatively charged carbamates → salt bridges to the other αβ dimer → T state.' },
  { id:'HGB-CARD-29', t:'CO₂ transport share', d:'Carbamate formation accounts for about 15% of total CO₂ transport; the rest travels as bicarbonate.', flip:true },
  { id:'HGB-CARD-30', t:'Fetal hemoglobin (HbF)', d:'α₂γ₂. A histidine in the 2,3-BPG site is a serine in the γ chain, so less BPG binds and oxygen affinity rises — enabling maternal-to-fetal transfer.' },
  { id:'HGB-CARD-31', t:'Methemoglobin', d:'Hemoglobin with Fe³⁺ heme iron, unable to bind oxygen. Normally 1–2% of circulating hemoglobin.' },
  { id:'HGB-CARD-32', t:'Methemoglobinemia: enzyme and treatment', d:'Cytochrome-b₅ reductase restores functional hemoglobin; deficiency, medications or environmental exposures can cause the condition. Treated with methylene blue, which regenerates NAD⁺ for the enzyme.' },
  { id:'HGB-CARD-33', t:'Hemoglobin S', d:'Glu6Val in the β chain. The surface valine binds hydrophobic residues on a neighbouring hemoglobin — residues exposed only in the T state.' },
  { id:'HGB-CARD-34', t:'Consequences of sickling', d:'Rigid sickled cells clog small capillaries, impairing blood flow and damaging tissue; their shortened lifespan causes anemia. Associated with painful swelling of the extremities, higher stroke risk and bacterial infection.' }
];

/* ---------- Quiz / mastery-exam question pool ----------
   `m` selects which module quiz an item belongs to.
   `area` must match a key in AREA_SECTION (content script).
   `level` is concept | application | integration and drives the
   stratified final exam via FINAL_EXAM_MIX. */
var POOL = [

  /* ================= MODULE 1 ================= */
  { id:'HGB-001', m:'m1', area:'Hemoglobin vs myoglobin', level:'concept',
    stem:'Where is myoglobin produced and located?',
    options:['Cardiac and skeletal muscle tissue','Red blood cells','Bone marrow stroma','Hepatic sinusoids'],
    answer:0,
    why:'Myoglobin resides in myocytes of cardiac and skeletal muscle. Hemoglobin is the one produced and housed in erythrocytes.' },

  { id:'HGB-002', m:'m1', area:'Hemoglobin vs myoglobin', level:'concept',
    stem:'How many oxygen molecules can one hemoglobin tetramer carry when fully saturated?',
    options:['Four','Two','One','Eight'],
    answer:0,
    why:'Each of the four polypeptide chains carries one heme group, and each heme group binds one O₂, giving four per tetramer.' },

  { id:'HGB-003', m:'m1', area:'Heme & iron chemistry', level:'concept',
    stem:'Which term describes a non-amino-acid component tightly bound to a protein, such as heme?',
    options:['Prosthetic group','Allosteric effector','Substrate analogue','Chaperone'],
    answer:0,
    why:'Heme is covalently associated with globin, which is what makes it a prosthetic group rather than a freely diffusing cofactor.' },

  { id:'HGB-004', m:'m1', area:'Heme & iron chemistry', level:'concept',
    stem:'Which feature places hemoglobin in the class of metalloproteins?',
    options:['It contains iron atoms','It contains four polypeptide chains','It is located inside erythrocytes','It binds oxygen reversibly'],
    answer:0,
    why:'Metalloproteins are proteins containing metal ions. An estimated half of all proteins are bound to a metal ion.' },

  { id:'HGB-005', m:'m1', area:'Heme & iron chemistry', level:'application',
    stem:'A patient has a defect in the enzyme that inserts iron into the completed porphyrin scaffold. Which enzyme is affected?',
    options:['Ferrochelatase','Carbonic anhydrase','Cytochrome-b₅ reductase','Superoxide dismutase'],
    answer:0,
    why:'Ferrochelatase adds the iron atom to the center of the organic scaffold once it has been built from glycine- and acetate-derived atoms.' },

  { id:'HGB-006', m:'m1', area:'Heme & iron chemistry', level:'application',
    stem:'A sample of hemoglobin has all of its heme iron in the Fe³⁺ state. What is the expected effect on oxygen transport?',
    options:['Oxygen binding is lost, because only Fe²⁺ binds oxygen','Oxygen binding is enhanced, because Fe³⁺ has greater affinity','Oxygen binding continues at the same rate','Oxygen binds but is released more slowly'],
    answer:0,
    why:'Only the ferrous Fe²⁺ form binds oxygen within hemoglobin. Iron held in the ferric state gives methemoglobin, which cannot carry oxygen.' },

  { id:'HGB-007', m:'m1', area:'Hemoglobin vs myoglobin', level:'application',
    stem:'Two oxygen-binding proteins are compared under identical conditions. Protein A uses about 66% of its oxygen capacity and protein B about 7%. Which identification fits?',
    options:['A is hemoglobin and B is myoglobin','A is myoglobin and B is hemoglobin','Both are forms of myoglobin','Both are forms of hemoglobin'],
    answer:0,
    why:'Cooperative binding lets hemoglobin use far more of its capacity, delivering close to ten times as much oxygen as myoglobin under the same conditions.' },

  { id:'HGB-008', m:'m1', area:'Hemoglobin vs myoglobin', level:'integration',
    stem:'Which structural feature best explains why hemoglobin is a more effective oxygen transporter than myoglobin?',
    options:['Its quaternary structure allows cooperative binding among four subunits','Its heme group has a higher intrinsic affinity for oxygen','Its single subunit releases oxygen more readily','Its iron atom occupies eight coordination sites'],
    answer:0,
    why:'Both proteins use the same heme chemistry. The difference is quaternary: four subunits that communicate can load in the lungs and unload in tissue far more efficiently than one that cannot.' },

  /* ================= MODULE 2 ================= */
  { id:'HGB-009', m:'m2', area:'Oxygen coordination', level:'concept',
    stem:'How many groups can the Fe²⁺ atom of heme coordinate?',
    options:['Six','Four','Five','Eight'],
    answer:0,
    why:'Four coordination positions are occupied by the heme ring, the fifth by the proximal histidine, and the sixth is available for oxygen.' },

  { id:'HGB-010', m:'m2', area:'Oxygen coordination', level:'concept',
    stem:'Which residue occupies the fifth coordination site of the heme iron?',
    options:['The proximal histidine','The distal histidine','A β-chain aspartate','An N-terminal valine'],
    answer:0,
    why:'The imidazole side chain of the proximal histidine holds the fifth position, leaving the sixth open for oxygen.' },

  { id:'HGB-011', m:'m2', area:'Oxygen coordination', level:'concept',
    stem:'What happens to the position of the heme iron when oxygen binds?',
    options:['It moves into the plane of the porphyrin ring','It moves further below the porphyrin plane','It exits the porphyrin ring','It rotates without changing position'],
    answer:0,
    why:'Oxygen binding at the sixth site draws the iron into the porphyrin plane, and the proximal histidine moves with it.' },

  { id:'HGB-012', m:'m2', area:'Distal histidine & CO', level:'concept',
    stem:'Which species is formed from molecular oxygen when the heme iron is temporarily oxidised?',
    options:['Superoxide anion','Hydrogen peroxide','Hydroxide ion','Water'],
    answer:0,
    why:'Oxidation of Fe²⁺ to Fe³⁺ must be balanced by a reduction, and the bound O₂ becomes superoxide. The process reverses when oxygen is released.' },

  { id:'HGB-013', m:'m2', area:'Distal histidine & CO', level:'application',
    stem:'Which role does the distal histidine play in the heme pocket?',
    options:['It stabilises bound oxygen and disfavours binding of molecules such as CO','It provides the fifth coordination bond to the iron','It transfers electrons to bound oxygen','It anchors the porphyrin ring to the α helix'],
    answer:0,
    why:'The distal histidine steadies the bound O₂ molecule and makes the pocket less accommodating to competitors, although it does not exclude them.' },

  { id:'HGB-014', m:'m2', area:'Distal histidine & CO', level:'application',
    stem:'A patient is exposed to carbon monoxide. Which statement describes CO binding to heme?',
    options:['CO binds about 250 times more strongly than oxygen','CO binds about 250 times more weakly than oxygen','CO and oxygen bind with equal strength','CO binds only after the iron is oxidised to Fe³⁺'],
    answer:0,
    why:'Even with the distal histidine reducing its favourability, CO binds roughly 250 times more strongly than oxygen — enough to displace it clinically.' },

  { id:'HGB-015', m:'m2', area:'Oxygen coordination', level:'application',
    stem:'A modified hemoglobin has its proximal histidine replaced by a residue that cannot coordinate iron. Which consequence is expected?',
    options:['The mechanical link between iron movement and the α helix is lost','The sixth coordination site is permanently occupied','The heme group gains a second oxygen-binding site','Iron is locked into the porphyrin plane'],
    answer:0,
    why:'The proximal histidine is the physical connection between the iron and an α helix near the dimer interface. Remove it and the conformational signal that produces cooperativity has no route out of the heme pocket.' },

  { id:'HGB-016', m:'m2', area:'Oxygen coordination', level:'integration',
    stem:'Which sequence describes how oxygen binding at one heme becomes a signal the rest of the tetramer can read?',
    options:['O₂ occupies site six → iron moves into plane → proximal histidine shifts → the α helix moves at the dimer interface','O₂ occupies site five → the distal histidine shifts → heme detaches → subunits separate','O₂ binds the globin surface → the porphyrin flattens → iron is released → affinity rises','O₂ binds two irons at once → both dimers rotate → the tetramer dissociates'],
    answer:0,
    why:'This is the mechanistic bridge from Module 2 to Module 3: a chemical event at the iron becomes a mechanical shift in a helix positioned right at the interface between the two αβ dimers.' },

  /* ================= MODULE 3 ================= */
  { id:'HGB-017', m:'m3', area:'Quaternary structure & cooperativity', level:'concept',
    stem:'How is the hemoglobin tetramer best described in functional terms?',
    options:['As two αβ dimers that rotate relative to one another','As four independent identical subunits','As a single chain with four folded domains','As two α chains bound to two heme-free β chains'],
    answer:0,
    why:'Hemoglobin is a heterotetramer of two α and two β chains that behaves as two αβ dimers, and oxygen binding makes those dimers rotate with respect to each other.' },

  { id:'HGB-018', m:'m3', area:'Quaternary structure & cooperativity', level:'concept',
    stem:'What does cooperative oxygen binding mean for hemoglobin?',
    options:['Binding at one subunit raises the oxygen affinity of the remaining subunits','Each subunit binds oxygen at a fixed, unchanging affinity','Binding at one subunit blocks binding at the others','All four subunits must bind oxygen simultaneously'],
    answer:0,
    why:'The reverse also holds: release from one subunit lowers the affinity of the others, which is what makes unloading in tissue so efficient.' },

  { id:'HGB-019', m:'m3', area:'T and R states', level:'concept',
    stem:'Which description matches the T state of hemoglobin?',
    options:['Low oxygen affinity, more interactions between subunits, greater rigidity','High oxygen affinity, fewer interactions between subunits, greater flexibility','Low oxygen affinity, fewer interactions between subunits, greater flexibility','High oxygen affinity, more interactions between subunits, greater rigidity'],
    answer:0,
    why:'T is tense: more inter-subunit contacts, more rigidity, lower affinity. Deoxyhemoglobin is found almost exclusively in this state.' },

  { id:'HGB-020', m:'m3', area:'T and R states', level:'application',
    stem:'A change in the local environment shifts the hemoglobin equilibrium toward the R state. What is the expected effect?',
    options:['Oxygen affinity rises and oxygen is retained','Oxygen affinity falls and oxygen is released','Oxygen affinity is unchanged','The heme groups are oxidised'],
    answer:0,
    why:'R is the relaxed, high-affinity state. Keep this pairing central: T means release, R means retention.' },

  { id:'HGB-021', m:'m3', area:'Models of cooperativity', level:'concept',
    stem:'Which statement describes the concerted model of cooperativity?',
    options:['All four subunits occupy the same state, with the equilibrium shifting toward R as binding increases','Each subunit shifts state independently of the others','Subunits convert to R in a fixed clockwise order','Only the α subunits are able to adopt the R state'],
    answer:0,
    why:'The concerted model keeps all four subunits in step. The sequential model is the one permitting independent, subunit-by-subunit change.' },

  { id:'HGB-022', m:'m3', area:'Models of cooperativity', level:'application',
    stem:'Hemoglobin carrying oxygen at three of its four heme groups shows a 20-fold greater affinity for oxygen than deoxyhemoglobin shows for its first oxygen molecule. Which model does this observation support?',
    options:['The concerted model','The sequential model','Neither model','Both models equally'],
    answer:0,
    why:'The large affinity jump at high occupancy fits a whole-tetramer shift toward R. The separate 3–4 fold rise seen right after the first O₂ binds is the observation that supports the sequential model.' },

  { id:'HGB-023', m:'m3', area:'Quaternary structure & cooperativity', level:'application',
    stem:'Why are conformational changes rather than direct contact responsible for communication between heme groups?',
    options:['The heme groups are too far apart to influence one another directly','The heme groups are shielded by the distal histidine','The heme groups carry identical charges and repel one another','The heme groups are located outside the globin chains'],
    answer:0,
    why:'Distance rules out direct interaction, so the signal travels through quaternary structure — helix movement at the interface between the two αβ dimers.' },

  { id:'HGB-024', m:'m3', area:'Quaternary structure & cooperativity', level:'integration',
    stem:'A hemoglobin variant is locked permanently in the R state. Which physiological consequence is expected?',
    options:['Oxygen is loaded normally in the lungs but poorly released in tissue','Oxygen is neither loaded nor released','Oxygen is released in the lungs and loaded in tissue','Oxygen delivery increases about tenfold'],
    answer:0,
    why:'A balance between R and T is what makes transport work. Hemoglobin that could only occupy the high-affinity R state would hold onto its oxygen under physiological conditions instead of delivering it.' },

  /* ================= MODULE 4 ================= */
  { id:'HGB-025', m:'m4', area:'2,3-BPG', level:'concept',
    stem:'Which conformation of hemoglobin does 2,3-BPG bind?',
    options:['The T state','The R state','Both states equally','Only fully oxygenated hemoglobin'],
    answer:0,
    why:'Binding only the T state is what makes 2,3-BPG an effective promoter of oxygen release — it stabilises the low-affinity conformation and makes R harder to reach.' },

  { id:'HGB-026', m:'m4', area:'2,3-BPG', level:'concept',
    stem:'What does the term allosteric effector describe?',
    options:['A molecule binding at a site other than the one used by the native ligand','A molecule binding the same site as the native ligand','A molecule permanently bound to the protein core','A metal ion required for catalysis'],
    answer:0,
    why:'2,3-BPG never touches the heme iron. It works from a separate, positively charged pocket, which is precisely what allosteric means.' },

  { id:'HGB-027', m:'m4', area:'2,3-BPG', level:'application',
    stem:'2,3-BPG is highly negatively charged. Which residues would it be expected to bind within hemoglobin?',
    options:['Positively charged residues','Negatively charged residues','Hydrophobic residues in the protein core','The heme iron directly'],
    answer:0,
    why:'Charge complementarity drives the interaction. This is worth holding onto: fetal hemoglobin weakens exactly this interaction by replacing a positive histidine with a neutral serine.' },

  { id:'HGB-028', m:'m4', area:'Bohr effect', level:'concept',
    stem:'How does hemoglobin oxygen affinity relate to pH?',
    options:['Affinity falls as pH falls','Affinity rises as pH falls','Affinity is independent of pH','Affinity rises and then falls as pH falls'],
    answer:0,
    why:'Affinity is directly correlated with pH. Metabolically active tissue produces H⁺ and CO₂, and the resulting drop in affinity delivers oxygen where demand is highest.' },

  { id:'HGB-029', m:'m4', area:'Bohr effect', level:'application',
    stem:'Which molecular event follows protonation of the β-chain histidine as pH falls?',
    options:['A salt bridge forms with an aspartate in the same chain, stabilising the T state','A salt bridge forms with the heme iron, stabilising the R state','The histidine is released from the β chain','The β chain dissociates from its α partner'],
    answer:0,
    why:'The protonated imidazole side chain pairs with an aspartate in the same chain. That salt bridge is the physical anchor holding deoxyhemoglobin in its low-affinity state.' },

  { id:'HGB-030', m:'m4', area:'CO₂ transport', level:'application',
    stem:'By which mechanism does CO₂ act as a mild acid to promote oxygen release?',
    options:['It reacts with water to form carbonic acid, catalysed by carbonic anhydrase','It binds the sixth coordination site of the heme iron','It reduces Fe³⁺ to Fe²⁺','It displaces 2,3-BPG from its pocket'],
    answer:0,
    why:'This is the indirect route. The H⁺ released from carbonic acid lowers pH and the Bohr mechanism does the rest.' },

  { id:'HGB-031', m:'m4', area:'CO₂ transport', level:'application',
    stem:'CO₂ also reacts with N-terminal amino groups of hemoglobin. What is formed, and what does it do?',
    options:['Negatively charged carbamates that form salt bridges with the other αβ dimer','Positively charged carbamates that block the 2,3-BPG pocket','Neutral carbamates that displace the proximal histidine','Bicarbonate ions that bind the heme iron'],
    answer:0,
    why:'This is the direct route, and it doubles as transport: carbamate formation accounts for about 15% of total CO₂ carried back to the lungs, with the remainder travelling as bicarbonate.' },

  { id:'HGB-032', m:'m4', area:'2,3-BPG', level:'integration',
    stem:'Hemoglobin is studied in the complete absence of 2,3-BPG. Which outcome is expected?',
    options:['Only about 8% of bound oxygen is released to tissue','Oxygen release to tissue is roughly doubled','Oxygen loading in the lungs is prevented','The tetramer separates into αβ dimers'],
    answer:0,
    why:'Without 2,3-BPG the equilibrium sits too far toward R for physiological unloading. Present at roughly the same concentration as hemoglobin itself, it is what makes normal delivery possible.' },

  { id:'HGB-046', m:'m4', area:'Carbon monoxide (modeled)', level:'application',
    stem:'CO occupies some heme oxygen-binding sites and raises the oxygen affinity of the remaining sites. Which combined effect on the oxygen dissociation curve is expected?',
    options:['Reduced maximum saturation with a left shift of the remaining curve','Increased maximum saturation with a right shift','Reduced maximum saturation with no change in shift','No change in maximum saturation or shift'],
    answer:0,
    why:'CO occupying heme sites lowers how much oxygen the remaining hemoglobin can carry overall — reduced capacity. By the same cooperative mechanism that makes partly oxygenated hemoglobin bind more tightly, the occupied subunits also raise the affinity of the sites that remain — a left shift, making that oxygen harder to release exactly when tissue needs it most.' },

  { id:'HGB-047', m:'m4', area:'Carbon monoxide (modeled)', level:'integration',
    stem:'Why is CO modeled separately from pH, CO₂ and 2,3-BPG on an oxygen dissociation curve, even though all four alter oxygen delivery?',
    options:['CO competes directly at the oxygen-binding site rather than acting allosterically from a separate site','CO is the only one of the four that increases oxygen affinity','CO is the only one of the four discussed in this lecture','CO has no measurable effect on the curve'],
    answer:0,
    why:'pH, CO₂ and 2,3-BPG are allosteric — they bind elsewhere and shift the T⇌R equilibrium. CO instead occupies the sixth coordination site itself, competing directly with O₂ for the same seat, which is a different kind of interference even though the visual result — a shifted, shortened curve — can look similar.' },

  /* ================= MODULE 5 ================= */
  { id:'HGB-033', m:'m5', area:'Fetal hemoglobin', level:'concept',
    stem:'Which subunit composition describes fetal hemoglobin?',
    options:['Two α chains and two γ chains','Two α chains and two β chains','Two β chains and two γ chains','Four γ chains'],
    answer:0,
    why:'HbF is α₂γ₂. The γ chain is about 72% identical to the β chain in primary sequence.' },

  { id:'HGB-034', m:'m5', area:'Fetal hemoglobin', level:'integration',
    stem:'In the γ chain, a histidine of the 2,3-BPG binding site is replaced by serine. Which chain of consequences follows?',
    options:['Less positive charge → weaker 2,3-BPG binding → higher oxygen affinity','More positive charge → stronger 2,3-BPG binding → higher oxygen affinity','Less positive charge → stronger 2,3-BPG binding → lower oxygen affinity','More negative charge → weaker 2,3-BPG binding → lower oxygen affinity'],
    answer:0,
    why:'Serine is neutral where histidine is positive, so the pocket grips negatively charged 2,3-BPG less well, less T state is stabilised, affinity rises, and oxygen moves from maternal to fetal blood.' },

  { id:'HGB-035', m:'m5', area:'Methemoglobinemia', level:'concept',
    stem:'Which iron oxidation state defines methemoglobin?',
    options:['Fe³⁺','Fe²⁺','Elemental iron','Iron bound to superoxide'],
    answer:0,
    why:'Methemoglobin carries ferric Fe³⁺ heme iron, which cannot bind oxygen. About 1–2% of circulating hemoglobin is in this form in a healthy person.' },

  { id:'HGB-036', m:'m5', area:'Methemoglobinemia', level:'application',
    stem:'A patient has a deficiency of cytochrome-b₅ reductase. Which predisposition follows?',
    options:['Methemoglobinemia','Sickle cell anemia','Persistence of fetal hemoglobin','Carbon monoxide poisoning'],
    answer:0,
    why:'Cytochrome-b₅ reductase converts methemoglobin back to functional hemoglobin, so a deficiency allows Fe³⁺ hemoglobin to accumulate. Certain medications and environmental exposures cause the same picture.' },

  { id:'HGB-037', m:'m5', area:'Methemoglobinemia', level:'application',
    stem:'Methylene blue is used in methemoglobinemia. Which action explains its use?',
    options:['It regenerates NAD⁺ for cytochrome-b₅ reductase','It binds Fe³⁺ and removes it from the porphyrin','It supplies additional heme groups','It converts hemoglobin to the R state'],
    answer:0,
    why:'Methylene blue supports the enzymatic pathway that restores functional hemoglobin rather than acting on the hemoglobin molecule directly.' },

  { id:'HGB-038', m:'m5', area:'Sickle cell disease', level:'concept',
    stem:'Which amino acid substitution characterises hemoglobin S?',
    options:['Glutamate replaced by valine at position 6 of the β chain','Valine replaced by glutamate at position 6 of the β chain','Histidine replaced by serine in the 2,3-BPG pocket','Glycine replaced by alanine at the α-chain N-terminus'],
    answer:0,
    why:'A single substitution, Glu6Val, places a hydrophobic residue on the protein surface where a charged one belonged.' },

  { id:'HGB-039', m:'m5', area:'Sickle cell disease', level:'integration',
    stem:'Why does hemoglobin S aggregate mainly in its deoxygenated form?',
    options:['The partner hydrophobic residues are exposed only in the T state','The valine substitution appears only in the T state','Oxygen binding adds a positive charge to the valine','The R state has a stronger affinity for 2,3-BPG'],
    answer:0,
    why:'The surface valine needs a hydrophobic partner surface on a neighbouring molecule, and that surface is available only in the T state. This is why conditions favouring T make sickling more likely.' },

  { id:'HGB-040', m:'m5', area:'Sickle cell disease', level:'integration',
    stem:'Which sequence describes how the HbS mutation leads to tissue injury?',
    options:['Hydrophobic surface → aggregation of deoxyhemoglobin → rigid sickled cells → capillary obstruction → impaired blood flow','Loss of heme iron → reduced oxygen capacity → anemia → capillary obstruction','Increased oxygen affinity → oxygen retention → tissue hypoxia → cell rigidity','Oxidation of iron to Fe³⁺ → methemoglobin formation → sickling'],
    answer:0,
    why:'The full chain runs from a single amino acid change to a clinical presentation of painful swelling of the extremities, higher stroke risk and infection risk. Shortened red cell lifespan adds anemia on top.' },

  /* ===== additional integration items, one per module ===== */
  { id:'HGB-041', m:'m1', area:'Heme & iron chemistry', level:'integration',
    stem:'Heme remains associated with globin across many cycles of oxygen loading and unloading. Which property accounts for this?',
    options:['It is a prosthetic group, tightly bound to the protein','It is a substrate consumed during each cycle','It is a soluble carrier exchanged between chains','It is an allosteric effector binding reversibly'],
    answer:0,
    why:'Tight association is what a prosthetic group means. A heme group that diffused away between deliveries would make an oxygen transporter useless — the iron chemistry has to stay attached to the protein that positions it.' },

  { id:'HGB-042', m:'m2', area:'Distal histidine & CO', level:'integration',
    stem:'The distal histidine disfavours CO binding, yet carbon monoxide poisoning remains clinically serious. Which explanation fits both observations?',
    options:['The distal histidine reduces but does not eliminate CO binding, which is still about 250 times stronger than O₂','The distal histidine acts only in myoglobin, leaving hemoglobin unprotected','CO binds a separate site that the distal histidine cannot reach','CO binds only once the iron has been oxidised to Fe³⁺'],
    answer:0,
    why:'Structural discouragement and clinical danger are compatible: the pocket makes CO binding less favourable than it would otherwise be, but the residual affinity is still far above that of oxygen.' },

  { id:'HGB-043', m:'m3', area:'Models of cooperativity', level:'integration',
    stem:'Evidence supports both the concerted and the sequential model of hemoglobin cooperativity. Which conclusion does this support?',
    options:['Hemoglobin behaviour lies between the two models','The concerted model applies to myoglobin and the sequential model to hemoglobin','The two models describe the same mechanism using different terms','Cooperativity occurs without any conformational change'],
    answer:0,
    why:'A 20-fold affinity rise at three-of-four occupancy fits the concerted picture; a 3–4 fold rise after the first oxygen fits the sequential one. Real hemoglobin does not obey either model exclusively.' },

  { id:'HGB-044', m:'m4', area:'Bohr effect', level:'integration',
    stem:'Blood passes through skeletal muscle during vigorous exercise, where H⁺ and CO₂ concentrations are elevated. Which combination is expected?',
    options:['The T state is stabilised, affinity falls, and oxygen is delivered to the muscle','The R state is stabilised, affinity rises, and oxygen is retained in the blood','Affinity is unchanged, since only 2,3-BPG alters the equilibrium','Hemoglobin is oxidised to methemoglobin and delivery stops'],
    answer:0,
    why:'Both effectors push the same direction through salt bridges that stabilise T. The elegance of the Bohr effect is that the tissue signalling its need is the same tissue generating the signal.' },

  { id:'HGB-045', m:'m5', area:'Fetal hemoglobin', level:'integration',
    stem:'Which comparison of fetal and adult hemoglobin correctly links structure to physiological role?',
    options:['HbF binds 2,3-BPG less well and therefore holds oxygen more tightly than HbA, allowing transfer across the placenta','HbF binds 2,3-BPG more tightly and therefore releases oxygen more readily than HbA','HbF carries six oxygen molecules compared with four for HbA','HbF uses Fe³⁺ heme iron while HbA uses Fe²⁺'],
    answer:0,
    why:'Oxygen moves down an affinity gradient. Fetal hemoglobin needs the higher affinity of the pair, and it gets it by weakening one interaction — the grip of the BPG pocket — rather than by changing the heme chemistry at all.' },

  { id:'HGB-048', m:'m4', area:'T⇌R equilibrium (integration)', level:'application',
    stem:'Rising 2,3-BPG and falling pH are applied to hemoglobin at the same time. What is the combined effect on the T⇌R equilibrium compared with either change alone?',
    options:['Both push toward T, so the shift toward T is larger than either alone','They push in opposite directions and largely cancel out','Only the larger of the two effects matters; the smaller one is ignored','2,3-BPG and pH cannot both act on hemoglobin at the same time'],
    answer:0,
    why:'2,3-BPG and the Bohr effect work through completely independent interactions — a binding pocket and a salt bridge — so nothing about one blocks the other. Their effects on the equilibrium add.' },

  { id:'HGB-049', m:'m4', area:'T⇌R equilibrium (integration)', level:'integration',
    stem:'Why is exercising skeletal muscle unusually effective at extracting oxygen from passing blood, compared with a single T-stabilising condition in isolation?',
    options:['It generates low local O₂, high CO₂, and low pH simultaneously, and all three push toward T together','It generates only one dominant T-stabilising signal, which is sufficient by itself','It shifts hemoglobin toward the R state, which favours oxygen retention','Muscle tissue produces 2,3-BPG directly, which is the only effector that matters here'],
    answer:0,
    why:'None of the three signals is doing this alone. Falling local O₂, rising CO₂, and falling pH all show up together in active tissue, and because they act through independent mechanisms, their push toward T compounds rather than competes.' }
];
