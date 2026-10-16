/* ============================================================
   BANK — Nucleotides, Nucleosides & Nucleic Acids (PHA3134)
   Pure data. No DOM, no dependency on shared/ or the page.
   Five fields only, in this order, so BankBridge can rewrite it:
     TOPIC_ID, TOPIC_TITLE, CHECKPOINTS, CARDS, POOL
   Structure (modules/sections) lives in nucleotides.manifest.js.
   ============================================================ */

var TOPIC_ID    = 'nucleotides';
var TOPIC_TITLE = 'Nucleotides, Nucleosides & Nucleic Acids';

var CHECKPOINTS = {

  /* ---------- Module 1 · Section 1 — nucleobases ---------- */
  c11a: {
    options: [
      'A fused two-ring system built from a six-membered and a five-membered ring',
      'A single six-membered ring carrying two ring nitrogen atoms',
      'A single five-membered ring carrying one ring nitrogen atom',
      'A fused two-ring system built from two six-membered rings'],
    answer: 0,
    why: 'Purines are bicyclic: a six-membered pyrimidine-type ring fused to a five-membered imidazole ring, giving nine ring positions (N1 through N9). Pyrimidines are the single six-membered ring with nitrogens at positions 1 and 3. Adenine and guanine are the two purines; cytosine, thymine, and uracil are the pyrimidines.'
  },
  c11b: {
    options: [
      'Thymine carries a methyl group at C5 that uracil lacks',
      'Thymine carries an amino group at C4 that uracil lacks',
      'Uracil carries a methyl group at C5 that thymine lacks',
      'Uracil carries a second ring nitrogen that thymine lacks'],
    answer: 0,
    why: 'Thymine is 5-methyluracil — the two bases are identical apart from that methyl group at carbon 5. This is why DNA and RNA can use chemically interchangeable partners for adenine: both thymine and uracil present the same two hydrogen-bonding positions to adenine.'
  },
  c11c: {
    options: [
      'Adenine and guanine',
      'Cytosine and thymine',
      'Adenine and cytosine',
      'Guanine and uracil'],
    answer: 0,
    why: 'Adenine and guanine are the two purines, and both appear in DNA and RNA. A useful memory anchor: the two bases with the longer names (cytosine, thymine) plus uracil are the smaller single-ring pyrimidines, while the shorter-named adenine and guanine are the larger two-ring purines.'
  },

  /* ---------- Module 1 · Section 2 — nomenclature ---------- */
  c12a: {
    options: [
      'A nucleoside, because a sugar has been added to a base with no phosphate present',
      'A nucleotide, because a sugar has been added to a base',
      'A nucleobase, because the sugar leaves the parent name unchanged',
      'A nucleotide, because ribose contributes a phosphate group'],
    answer: 0,
    why: 'Base plus sugar is a nucleoside; base plus sugar plus one to three phosphates is a nucleotide. Adenine (base) plus ribose gives adenosine (nucleoside). Adding a single phosphate to adenosine gives AMP, which is a nucleotide.'
  },
  c12b: {
    options: [
      'Adenine, deoxyribose, and one phosphate group',
      'Adenine, ribose, and one phosphate group',
      'Adenine, deoxyribose, and two phosphate groups',
      'Adenosine, ribose, and one phosphate group'],
    answer: 0,
    why: 'Reading dAMP piece by piece: the lower-case d signals deoxyribose, the A signals adenine, and MP signals a single (mono) phosphate. The same reading works for every abbreviation in this system — dGTP is guanine plus deoxyribose plus three phosphates.'
  },
  c12c: {
    options: [
      'Cytidine',
      'Cytosine',
      'Cytidylate',
      'Deoxycytidine'],
    answer: 0,
    why: 'The nucleoside names change ending relative to the base: adenine gives adenosine, guanine gives guanosine, cytosine gives cytidine, thymine gives thymidine, and uracil gives uridine. Adding deoxy- as a prefix marks the deoxyribose form, so cytosine plus deoxyribose would be deoxycytidine.'
  },

  /* ---------- Module 1 · Section 3 — the sugar ---------- */
  c13a: {
    options: [
      'Carbon 2 of the sugar ring',
      'Carbon 1 of the sugar ring',
      'Carbon 3 of the sugar ring',
      'Carbon 5 of the sugar ring'],
    answer: 0,
    why: 'Ribose carries a hydroxyl at C2 prime; deoxyribose carries a hydrogen there instead, which is the entire structural difference between the two sugars. C1 prime holds the base, C3 prime and C5 prime hold the phosphodiester backbone, and those positions are identical in both sugars.'
  },
  c13b: {
    options: [
      'It gives RNA a reactive group positioned to attack the neighboring phosphate',
      'It gives RNA an additional hydrogen bond to its partner base',
      'It prevents RNA from forming a phosphodiester backbone',
      'It blocks the C3 prime position from joining the backbone'],
    answer: 0,
    why: 'The 2 prime hydroxyl sits adjacent to the phosphodiester linkage and can attack it, which makes RNA chemically more labile than DNA. That same group also expands the shapes RNA can fold into. DNA gives up both properties in exchange for the stability appropriate to a long-term genetic template.'
  },

  /* ---------- Module 1 · Section 4 — backbone and pairing ---------- */
  c14a: {
    options: [
      'The 5 prime hydroxyl of one sugar and the 3 prime hydroxyl of the next',
      'The 1 prime hydroxyl of one sugar and the 3 prime hydroxyl of the next',
      'The 2 prime hydroxyl of one sugar and the 5 prime hydroxyl of the next',
      'The 3 prime hydroxyl of one sugar and the 3 prime hydroxyl of the next'],
    answer: 0,
    why: 'A phosphate bridges the 5 prime hydroxyl on one sugar to the 3 prime hydroxyl on the adjoining sugar, which is what makes the backbone directional. Sequences are written 5 prime to 3 prime by convention, and polymerases read and build with a fixed directionality that depends on this asymmetry.'
  },
  c14b: {
    options: [
      'Guanine paired with cytosine, held by three hydrogen bonds',
      'Adenine paired with thymine, held by three hydrogen bonds',
      'Guanine paired with cytosine, held by two hydrogen bonds',
      'Adenine paired with uracil, held by three hydrogen bonds'],
    answer: 0,
    why: 'G-C pairs form three hydrogen bonds while A-T and A-U pairs form two. A stretch of DNA rich in G-C therefore takes more energy to separate, which is why melting temperature rises with G-C content — a fact that matters for primer design and for the stability of regulatory regions.'
  },
  c14c: {
    options: [
      '3 prime - T A C G - 5 prime',
      '5 prime - T A C G - 3 prime',
      '3 prime - A T G C - 5 prime',
      '5 prime - G C A T - 3 prime'],
    answer: 0,
    why: 'Pair each base in turn (A with T, T with A, G with C, C with G) to get T A C G, and remember that the partner strand runs antiparallel — so if the given strand reads 5 prime to 3 prime, the complement written under it reads 3 prime to 5 prime.'
  },

  /* ---------- Module 2 · Section 1 — sources and PRPP ---------- */
  c21a: {
    options: [
      'De novo synthesis, because dietary nucleotides contribute little to circulation',
      'Dietary uptake, because nucleotides are absorbed intact and efficiently',
      'Dietary uptake, because the nucleobase supplies usable energy',
      'De novo synthesis, because salvage pathways are absent in human tissue'],
    answer: 0,
    why: 'Roughly five percent of dietary nucleotides reach circulation, so de novo synthesis carries the load. The sugar released during breakdown can be used for energy, but the nucleobase itself is not an energy source — its value is structural.'
  },
  c21b: {
    options: [
      'Ribose-5-phosphate and ATP',
      'Ribose-5-phosphate and glutamine',
      'Glucose-6-phosphate and ATP',
      'Ribulose-5-phosphate and GTP'],
    answer: 0,
    why: 'PRPP synthetase joins a pyrophosphate group from ATP onto ribose-5-phosphate to make PRPP. The ribose-5-phosphate comes from the pentose phosphate pathway, which links nucleotide supply to a pathway students usually meet in the context of NADPH production.'
  },
  c21c: {
    options: [
      'It supplies the ribose-5-phosphate used to make PRPP',
      'It supplies the glutamine used as a nitrogen donor',
      'It supplies the aspartate used in ring closure',
      'It supplies the bicarbonate incorporated into the ring'],
    answer: 0,
    why: 'The pentose phosphate pathway is best known for generating NADPH, but its other product, ribose-5-phosphate, is the entry point for all nucleotide synthesis. PRPP made from it feeds both the purine and the pyrimidine routes.'
  },

  /* ---------- Module 2 · Section 2 — build the ring ---------- */
  c22a: {
    options: [
      'Glycine, which contributes two carbons and one nitrogen as an intact unit',
      'Glutamine, which contributes two carbons and one nitrogen as an intact unit',
      'Aspartate, which contributes two carbons and one nitrogen as an intact unit',
      'Serine, which contributes two carbons and one nitrogen as an intact unit'],
    answer: 0,
    why: 'Glycine is added whole, contributing C4, C5, and N7 in a single step catalyzed by GAR synthetase. Every other donor contributes a single atom, which makes glycine the easiest landmark to anchor the rest of the ring map to.'
  },
  c22b: {
    options: [
      '10-formyltetrahydrofolate',
      'S-adenosylmethionine',
      'Carbamoyl phosphate',
      'Biotin-bound carbon dioxide'],
    answer: 0,
    why: 'Two separate formyl transfers, at C8 and later at C2, both use 10-formyltetrahydrofolate. This is the structural reason folate antagonists reach purine synthesis as well as thymidylate synthesis — a point that becomes central in Module 5.'
  },
  c22c: {
    options: [
      'Aspartate, which donates a nitrogen and then leaves as fumarate',
      'Glutamine, which donates a nitrogen and then leaves as glutamate',
      'Glycine, which donates a nitrogen and then leaves as glyoxylate',
      'Alanine, which donates a nitrogen and then leaves as pyruvate'],
    answer: 0,
    why: 'Aspartate condenses onto the ring, contributes N1, and the remaining carbon skeleton is eliminated as fumarate by adenylosuccinate lyase. The fumarate is not waste — it enters the citric acid cycle, partly offsetting the energy cost of building the ring.'
  },

  /* ---------- Module 2 · Section 3 — pathway and energetics ---------- */
  c23a: {
    options: [
      'The conversion of PRPP to 5-phosphoribosyl-1-amine',
      'The conversion of ribose-5-phosphate to PRPP',
      'The conversion of GAR to formylglycinamide ribonucleotide',
      'The conversion of AICAR to IMP'],
    answer: 0,
    why: 'Amidophosphoribosyltransferase converts PRPP to 5-phosphoribosyl-1-amine, and this is the committed step: PRPP still has other destinations, but once the amine is installed the molecule is headed for a purine nucleotide. A committed step is the natural place for regulation, which is why it is worth identifying in any pathway.'
  },
  c23b: {
    options: [
      'The purine ring is assembled piece by piece on a ribose that is already in place',
      'The purine ring is assembled separately and then joined to ribose',
      'The purine ring is assembled on a folate carrier before transfer to ribose',
      'The purine ring is assembled from a preformed pyrimidine ring'],
    answer: 0,
    why: 'Purine synthesis builds the ring directly onto the ribose-5-phosphate framework, so every intermediate from 5-phosphoribosyl-1-amine to IMP is already a nucleotide. Pyrimidine synthesis takes the opposite approach, which is the central comparison in Module 3.'
  },
  c23c: {
    options: [
      'Inosine monophosphate',
      'Adenosine monophosphate',
      'Guanosine monophosphate',
      'Orotidine monophosphate'],
    answer: 0,
    why: 'IMP is the branch point nucleotide: the de novo pathway builds IMP first, and AMP and GMP are each made from it in two further steps. IMP carries hypoxanthine as its base, which is why it does not appear directly in nucleic acids.'
  },

  /* ---------- Module 2 · Section 4 — the IMP branch ---------- */
  c24a: {
    options: [
      'GTP, which is hydrolyzed during adenylosuccinate formation',
      'ATP, which is hydrolyzed during adenylosuccinate formation',
      'UTP, which is hydrolyzed during adenylosuccinate formation',
      'CTP, which is hydrolyzed during adenylosuccinate formation'],
    answer: 0,
    why: 'The branch from IMP to AMP is driven by GTP, and the branch from IMP to GMP is driven by ATP. Each product depends energetically on the other branch\u2019s product, which is the structural basis for keeping the two purine pools balanced.'
  },
  c24b: {
    options: [
      'A shortage of one purine slows production of the other, keeping the pools matched',
      'A shortage of one purine accelerates production of the other, restoring balance quickly',
      'A shortage of one purine has no effect on production of the other',
      'A shortage of one purine redirects the pathway toward pyrimidine synthesis'],
    answer: 0,
    why: 'Because AMP synthesis spends GTP and GMP synthesis spends ATP, a fall in one pool restrains the branch that produces the other. This reciprocal arrangement is a form of built-in balance that costs the cell no additional regulatory machinery.'
  },

  /* ---------- Module 3 · Section 1 — strategy comparison ---------- */
  c31a: {
    options: [
      'The pyrimidine ring is completed first and joined to PRPP afterward',
      'The pyrimidine ring is built onto PRPP one atom at a time',
      'The pyrimidine ring is built onto a folate carrier and transferred',
      'The pyrimidine ring is derived by rearrangement of a purine ring'],
    answer: 0,
    why: 'Pyrimidine synthesis assembles the ring as orotate first, then orotate phosphoribosyltransferase attaches PRPP to give OMP. This is the reverse of the purine strategy, where the ring grows on ribose that is already present.'
  },
  c31b: {
    options: [
      'Both pathways require PRPP as the source of the ribose phosphate',
      'Both pathways require IMP as a shared branch point intermediate',
      'Both pathways require carbamoyl phosphate as an early intermediate',
      'Both pathways require 10-formyltetrahydrofolate as a carbon donor'],
    answer: 0,
    why: 'PRPP is the one requirement the two strategies share, which is why it is the natural top of the metabolic map. IMP is purine-specific, carbamoyl phosphate is pyrimidine-specific, and formyl-THF is used in purine ring construction.'
  },

  /* ---------- Module 3 · Section 2 — CPS II and CAD ---------- */
  c32a: {
    options: [
      'The amide nitrogen of glutamine',
      'Free ammonium generated in the liver',
      'The alpha-amino nitrogen of aspartate',
      'The amide nitrogen of asparagine'],
    answer: 0,
    why: 'CPS II draws its nitrogen from the side chain amide of glutamine. CPS I, by contrast, captures free ammonium and belongs to the urea cycle. Nitrogen source is the cleanest way to tell the two enzymes apart.'
  },
  c32b: {
    options: [
      'CPS I supports the urea cycle while CPS II supports pyrimidine synthesis',
      'CPS I supports pyrimidine synthesis while CPS II supports the urea cycle',
      'CPS I supports purine synthesis while CPS II supports the urea cycle',
      'CPS I and CPS II both support the urea cycle in different tissues'],
    answer: 0,
    why: 'The roman numerals track the pathway: CPS I handles nitrogen disposal through the urea cycle, and CPS II starts pyrimidine construction. They also differ in nitrogen source, with CPS I taking ammonium and CPS II taking the glutamine amide.'
  },
  c32c: {
    options: [
      'Three enzymatic activities carried on a single polypeptide chain',
      'Three separate proteins held together by non-covalent contacts',
      'One enzymatic activity regulated by three separate subunits',
      'Three isoforms of one enzyme expressed in different tissues'],
    answer: 0,
    why: 'CAD is one polypeptide carrying carbamoyl phosphate synthetase II, aspartate transcarbamoylase, and dihydroorotase. Housing consecutive activities on one chain shortens the distance an intermediate must travel, a recurring design theme worth recognizing whenever a pathway name looks like an acronym of its own steps.'
  },

  /* ---------- Module 3 · Section 3 — orotate to UMP ---------- */
  c33a: {
    options: [
      'Ubiquinone, which ties the reaction to the electron transport chain',
      'NAD plus, which ties the reaction to cytosolic glycolysis',
      'FAD, which ties the reaction to fatty acid oxidation',
      'NADP plus, which ties the reaction to the pentose phosphate pathway'],
    answer: 0,
    why: 'Dihydroorotate dehydrogenase sits in the mitochondrion and passes electrons to ubiquinone, which links pyrimidine synthesis directly to the electron transport chain. That unusual choice of acceptor is part of why this enzyme is a viable drug target.'
  },
  c33b: {
    options: [
      'Orotate phosphoribosyltransferase, which attaches the ribose phosphate from PRPP',
      'Orotate phosphoribosyltransferase, which removes carbon dioxide from orotate',
      'OMP decarboxylase, which attaches the ribose phosphate from PRPP',
      'Dihydroorotase, which attaches the ribose phosphate from PRPP'],
    answer: 0,
    why: 'Orotate phosphoribosyltransferase joins orotate to PRPP to give OMP; OMP decarboxylase then removes a carboxyl group to give UMP. Both activities sit on a single polypeptide called UMP synthase, echoing the CAD arrangement earlier in the same pathway.'
  },

  /* ---------- Module 3 · Section 4 — phosphorylation ---------- */
  c34a: {
    options: [
      'Nucleoside diphosphate kinase, which acts on every diphosphate nucleotide',
      'A separate diphosphate kinase dedicated to each nucleotide',
      'Adenylate kinase, which acts on adenine nucleotides alone',
      'CTP synthase, which acts on every diphosphate nucleotide'],
    answer: 0,
    why: 'The monophosphate to diphosphate step uses a kinase specific to each nucleotide, but the diphosphate to triphosphate step is handled by one shared enzyme, nucleoside diphosphate kinase. ATP is the phosphate donor at both levels.'
  },
  c34b: {
    options: [
      'UTP, using the amide nitrogen of glutamine as the nitrogen source',
      'UMP, using the amide nitrogen of glutamine as the nitrogen source',
      'UDP, using free ammonium as the nitrogen source',
      'UTP, using the amino nitrogen of aspartate as the nitrogen source'],
    answer: 0,
    why: 'CTP synthase acts at the triphosphate level, converting UTP to CTP in an ATP-dependent reaction that takes nitrogen from the glutamine amide. This is why UMP must be phosphorylated twice before any cytosine nucleotide can be made.'
  },

  /* ---------- Module 4 · Section 1 — ribonucleotide reductase ---------- */
  c41a: {
    options: [
      'The diphosphate form, such as UDP or ADP',
      'The monophosphate form, such as UMP or AMP',
      'The triphosphate form, such as UTP or ATP',
      'The free nucleoside, such as uridine or adenosine'],
    answer: 0,
    why: 'Ribonucleotide reductase works on diphosphate nucleotides, converting NDP to dNDP. Products are then phosphorylated to the triphosphate level for use in DNA synthesis, so the deoxy conversion happens once, at a single point in the phosphorylation ladder.'
  },
  c41b: {
    options: [
      'NADPH, thioredoxin reductase, thioredoxin, ribonucleotide reductase',
      'NADPH, thioredoxin, thioredoxin reductase, ribonucleotide reductase',
      'Ribonucleotide reductase, thioredoxin, thioredoxin reductase, NADPH',
      'NADH, thioredoxin reductase, thioredoxin, ribonucleotide reductase'],
    answer: 0,
    why: 'Electrons originate with NADPH, pass to thioredoxin reductase, then to thioredoxin, and finally to ribonucleotide reductase, which delivers them to the substrate. Reading the names in order helps: the reductase reduces thioredoxin, so it must come before it.'
  },
  c41c: {
    options: [
      'A hydroxyl at C2 prime is replaced by a hydrogen, which is a reduction',
      'A hydrogen at C2 prime is replaced by a hydroxyl, which is a reduction',
      'A hydroxyl at C3 prime is replaced by a hydrogen, which is an oxidation',
      'A phosphate at C5 prime is replaced by a hydrogen, which is a reduction'],
    answer: 0,
    why: 'Removing the 2 prime oxygen and installing hydrogen in its place is a gain of electrons at that carbon, which is the definition of reduction. Tracking where the electrons came from, rather than memorizing the enzyme names, is what makes this pathway make sense.'
  },

  /* ---------- Module 4 · Section 2 — thymidylate synthesis ---------- */
  c42a: {
    options: [
      'A tetrahydrofolate derivative carrying a one-carbon unit',
      'S-adenosylmethionine carrying an activated methyl group',
      'Methylcobalamin carrying an activated methyl group',
      'Carbamoyl phosphate carrying an activated carbon unit'],
    answer: 0,
    why: 'Thymidylate synthase takes its one-carbon unit from a tetrahydrofolate derivative, and the folate leaves in a more oxidized state that must be regenerated. That regeneration requirement is what places dihydrofolate reductase downstream of this reaction and makes both enzymes drug targets.'
  },
  c42b: {
    options: [
      'dUMP, a deoxyribose monophosphate nucleotide',
      'UMP, a ribose monophosphate nucleotide',
      'dUDP, a deoxyribose diphosphate nucleotide',
      'dUTP, a deoxyribose triphosphate nucleotide'],
    answer: 0,
    why: 'Thymidylate synthase accepts only the deoxyribose monophosphate, dUMP. Because thymine nucleotides are made at this deoxy monophosphate level rather than by any ribose route, there is no ribo-thymidine nucleotide made de novo in the cell.'
  },

  /* ---------- Module 4 · Section 3 — deoxynucleotide logic ---------- */
  c43a: {
    options: [
      'Thymine nucleotides are made from dUMP after the deoxy conversion has occurred',
      'Thymine nucleotides are made from UMP before the deoxy conversion occurs',
      'Thymine nucleotides are made directly by ribonucleotide reductase from UDP',
      'Thymine nucleotides are made from CMP by demethylation'],
    answer: 0,
    why: 'Ribonucleotide reductase can produce dUDP, but nothing in that reaction installs the methyl group thymine requires. The cell therefore reaches dTMP by a separate route: dUDP to dUMP, then a methyl transfer by thymidylate synthase.'
  },
  c43b: {
    options: [
      'UDP, dUDP, dUMP, dTMP, dTTP',
      'UDP, UTP, dUTP, dTTP, dTMP',
      'UMP, dUMP, dUDP, dTDP, dTTP',
      'UDP, dUDP, dUTP, dTTP, dTMP'],
    answer: 0,
    why: 'The route runs down to the monophosphate level for the methyl transfer and then back up: UDP is reduced to dUDP, dephosphorylated to dUMP, methylated to dTMP, and phosphorylated twice to dTTP. Recognizing that the phosphorylation state moves down and then up is the key to the sequence.'
  },

  /* ---------- Module 5 · Section 1 — antimetabolites ---------- */
  c51a: {
    options: [
      'Pyrimidine nucleotide synthesis falls while purine synthesis continues',
      'Purine nucleotide synthesis falls while pyrimidine synthesis continues',
      'Both purine and pyrimidine synthesis fall to the same degree',
      'Deoxynucleotide production falls while ribonucleotide production continues'],
    answer: 0,
    why: 'Dihydroorotate dehydrogenase sits in the pyrimidine pathway only, so blocking it starves the cell of UMP and everything downstream of it while leaving purine synthesis intact. Leflunomide exploits this against rapidly dividing lymphocytes in rheumatoid arthritis.'
  },
  c51b: {
    options: [
      'Tetrahydrofolate is not regenerated, so thymidylate synthesis stalls',
      'Tetrahydrofolate accumulates, so thymidylate synthesis accelerates',
      'Thymidylate synthase is inhibited directly at its active site',
      'Deoxyuridine monophosphate is degraded before it can be methylated'],
    answer: 0,
    why: 'Methotrexate competitively inhibits dihydrofolate reductase, the enzyme that returns dihydrofolate to the tetrahydrofolate pool. Without that regeneration, the one-carbon carrier thymidylate synthase depends on runs out, so the block lands one step upstream of the enzyme whose product is actually missing.'
  },
  c51c: {
    options: [
      'It is converted to F-dUMP, which binds thymidylate synthase and stalls the reaction',
      'It is converted to F-dUMP, which competitively inhibits dihydrofolate reductase',
      'It acts unchanged as a competitive inhibitor of thymidylate synthase',
      'It is incorporated into DNA in place of thymine and blocks replication'],
    answer: 0,
    why: 'Fluorouracil is a prodrug: the cell converts it to F-dUMP, which thymidylate synthase recognizes and binds but cannot process to completion. The enzyme is left occupied, dTTP supply falls, and DNA synthesis suffers — the pattern known as suicide inhibition.'
  },

  /* ---------- Module 5 · Section 2 — catabolism ---------- */
  c52a: {
    options: [
      'Uric acid, which is excreted in the urine',
      'Urea, which is excreted in the urine',
      'Ammonium and carbon dioxide, which are excreted separately',
      'Beta-alanine, which is further oxidized for energy'],
    answer: 0,
    why: 'Human purine catabolism ends at uric acid, which leaves the body in urine. Pyrimidines take a different route and are broken down to ammonium, carbon dioxide, and water, so the end product is a reliable way to tell which class a nucleotide belonged to.'
  },
  c52b: {
    options: [
      'The sugar is removed first and may be reused or oxidized for energy',
      'The base is removed first and is oxidized for energy',
      'The phosphate is retained throughout catabolism',
      'The sugar and base are degraded together in a single step'],
    answer: 0,
    why: 'Both purine and pyrimidine catabolism begin the same way: strip the phosphate and the sugar, then degrade the base. The released sugar has real metabolic value, while the base does not, which is the same asymmetry that made dietary nucleotides a poor energy source in Module 2.'
  },

  /* ---------- Module 5 · Section 3 — gout ---------- */
  c53a: {
    options: [
      'Purine nucleotides, because uric acid is the end point of purine breakdown',
      'Pyrimidine nucleotides, because uric acid is the end point of pyrimidine breakdown',
      'Both classes equally, because they share a common end product',
      'Neither class, because uric acid arises from amino acid catabolism'],
    answer: 0,
    why: 'Uric acid comes from purines alone. That is why dietary and cell-turnover sources rich in purines raise urate load, and why pyrimidine content is not part of the same clinical conversation.'
  },
  c53b: {
    options: [
      'Urate crystals deposit in the joint and provoke an inflammatory response',
      'Urate binds joint collagen and weakens the cartilage matrix directly',
      'Urate blocks nucleotide synthesis within the synovial lining',
      'Urate raises joint pH and denatures synovial proteins'],
    answer: 0,
    why: 'When urate exceeds its solubility it crystallizes, and the crystals in a joint space trigger an acute inflammatory reaction — the pain, redness, and swelling of a gout flare. High serum urate alone is not gout; the crystal deposition is what produces the disease.'
  },
  c53c: {
    options: [
      'Less uric acid is produced, because a step in purine breakdown is blocked',
      'More uric acid is excreted, because renal handling of urate is enhanced',
      'Less uric acid is produced, because purine synthesis is blocked at PRPP',
      'More uric acid is converted to urea, because a new route is opened'],
    answer: 0,
    why: 'Allopurinol inhibits xanthine oxidase, the enzyme that carries out the final oxidations to uric acid. Blocking it lowers urate production and leaves more soluble precursors to be excreted instead. This is treatment aimed at the pathway rather than at the inflammation.'
  }

};

var CARDS = [
  {id:'NUC-CARD-01', t:'Nucleoside', d:'A nucleobase joined to a sugar, with no phosphate attached. Adenine plus ribose gives adenosine.'},
  {id:'NUC-CARD-02', t:'Nucleotide', d:'A nucleobase joined to a sugar and carrying one to three phosphate groups. Adenosine plus one phosphate gives AMP.'},
  {id:'NUC-CARD-03', t:'Purines', d:'Adenine and guanine. A six-membered ring fused to a five-membered ring, numbered N1 through N9.'},
  {id:'NUC-CARD-04', t:'Pyrimidines', d:'Cytosine, thymine, and uracil. A single six-membered ring with nitrogens at positions 1 and 3.'},
  {id:'NUC-CARD-05', t:'Thymine compared with uracil', d:'Thymine is 5-methyluracil. The methyl group at carbon 5 is the only structural difference.'},
  {id:'NUC-CARD-06', t:'Ribose compared with deoxyribose', d:'Ribose carries a hydroxyl at C2 prime; deoxyribose carries a hydrogen there. Every other position is identical.'},
  {id:'NUC-CARD-07', t:'Why RNA is more labile than DNA', d:'The 2 prime hydroxyl sits next to the phosphodiester linkage and can attack it. It also lets RNA fold into a wider range of shapes.'},
  {id:'NUC-CARD-08', t:'Phosphodiester linkage', d:'A phosphate bridging the 5 prime hydroxyl of one sugar to the 3 prime hydroxyl of the next, giving the backbone its direction.'},
  {id:'NUC-CARD-09', t:'Hydrogen bonds per base pair', d:'Guanine with cytosine uses three; adenine with thymine or uracil uses two. G-C rich DNA is therefore harder to separate.'},
  {id:'NUC-CARD-10', t:'Antiparallel strands', d:'One strand runs 5 prime to 3 prime while its partner runs 3 prime to 5 prime.'},
  {id:'NUC-CARD-11', t:'PRPP', d:'5-phosphoribosyl-1-pyrophosphate. Made from ribose-5-phosphate and ATP by PRPP synthetase, and required by both nucleotide pathways.'},
  {id:'NUC-CARD-12', t:'Where ribose-5-phosphate comes from', d:'The pentose phosphate pathway, which also supplies the NADPH used in fatty acid synthesis and glutathione reduction.'},
  {id:'NUC-CARD-13', t:'Committed step of purine synthesis', d:'PRPP to 5-phosphoribosyl-1-amine, catalyzed by amidophosphoribosyltransferase.'},
  {id:'NUC-CARD-14', t:'Purine ring atom donors', d:'Glycine gives C4, C5, and N7 as one unit; glutamine gives N3 and N9; aspartate gives N1; 10-formyl-THF gives C2 and C8; bicarbonate gives C6.'},
  {id:'NUC-CARD-15', t:'Where the fumarate goes', d:'Adenylosuccinate lyase releases fumarate during purine synthesis, and it enters the citric acid cycle rather than being discarded.'},
  {id:'NUC-CARD-16', t:'IMP', d:'Inosine monophosphate, the branch point nucleotide of purine synthesis. Both AMP and GMP are made from it.'},
  {id:'NUC-CARD-17', t:'Reciprocal energy use at the IMP branch', d:'AMP synthesis spends GTP and GMP synthesis spends ATP, which keeps the two purine pools in balance.'},
  {id:'NUC-CARD-18', t:'Purine strategy compared with pyrimidine strategy', d:'Purines are built atom by atom onto PRPP. Pyrimidines are built as a free ring first, then joined to PRPP.'},
  {id:'NUC-CARD-19', t:'CPS I compared with CPS II', d:'CPS I captures ammonium for the urea cycle. CPS II takes nitrogen from the glutamine amide for pyrimidine synthesis.'},
  {id:'NUC-CARD-20', t:'CAD', d:'One polypeptide carrying three activities: carbamoyl phosphate synthetase II, aspartate transcarbamoylase, and dihydroorotase.'},
  {id:'NUC-CARD-21', t:'DHODH', d:'Dihydroorotate dehydrogenase. Mitochondrial, passes electrons to ubiquinone, and is the target of leflunomide.'},
  {id:'NUC-CARD-22', t:'UMP synthase', d:'One polypeptide carrying orotate phosphoribosyltransferase and OMP decarboxylase, converting orotate to OMP to UMP.'},
  {id:'NUC-CARD-23', t:'Nucleoside diphosphate kinase', d:'A single enzyme that converts every diphosphate nucleotide to its triphosphate, using ATP as the phosphate donor.'},
  {id:'NUC-CARD-24', t:'CTP synthase', d:'Converts UTP to CTP using the glutamine amide as the nitrogen source, so cytosine nucleotides arise at the triphosphate level.'},
  {id:'NUC-CARD-25', t:'Ribonucleotide reductase', d:'Converts diphosphate ribonucleotides to their deoxy counterparts by replacing the 2 prime hydroxyl with hydrogen.'},
  {id:'NUC-CARD-26', t:'The electron relay to RNR', d:'NADPH to thioredoxin reductase to thioredoxin to ribonucleotide reductase, and finally to the substrate.'},
  {id:'NUC-CARD-27', t:'Thymidylate synthase', d:'Converts dUMP to dTMP using a tetrahydrofolate derivative as the one-carbon donor. It accepts only the deoxy nucleotide.'},
  {id:'NUC-CARD-28', t:'Why dTMP comes from dUMP', d:'Ribonucleotide reductase installs the deoxy sugar but not the methyl group, so the methyl is added afterward at the monophosphate level.'},
  {id:'NUC-CARD-29', t:'Methotrexate', d:'A competitive inhibitor of dihydrofolate reductase. Blocking THF regeneration starves thymidylate synthase of its one-carbon donor.'},
  {id:'NUC-CARD-30', t:'Fluorouracil', d:'A prodrug converted to F-dUMP, which thymidylate synthase binds but cannot process, lowering dTTP and impairing DNA synthesis.'},
  {id:'NUC-CARD-31', t:'Leflunomide', d:'Inhibits DHODH, lowering pyrimidine supply to rapidly dividing lymphocytes. Used in rheumatoid arthritis.'},
  {id:'NUC-CARD-32', t:'Purine catabolism end product', d:'Uric acid, excreted in the urine.'},
  {id:'NUC-CARD-33', t:'Pyrimidine catabolism end products', d:'Ammonium, carbon dioxide, and water.'},
  {id:'NUC-CARD-34', t:'Gout', d:'Urate crystal deposition in a joint provoking acute inflammation. Raised serum urate is the risk factor; the crystals cause the disease.'},
  {id:'NUC-CARD-35', t:'Dietary nucleotides', d:'About five percent reach circulation. The sugar can be used for energy, but the base cannot, so de novo synthesis supplies most needs.'}
];

var POOL = [

  /* ================= MODULE 1 ================= */
  {id:'NUC-001', m:'m1', area:'Nucleobase structure', level:'concept',
   stem:'Which pair of nucleobases has the fused two-ring structure characteristic of purines?',
   options:['Adenine and guanine','Cytosine and thymine','Thymine and uracil','Cytosine and guanine'],
   answer:0,
   why:'Adenine and guanine are the purines, built from a six-membered ring fused to a five-membered imidazole ring. Cytosine, thymine, and uracil are single-ring pyrimidines.'},

  {id:'NUC-002', m:'m1', area:'Nucleobase structure', level:'concept',
   stem:'Which structural feature distinguishes thymine from uracil?',
   options:['A methyl group at carbon 5','An amino group at carbon 4','A carbonyl group at carbon 2','A ring nitrogen at position 3'],
   answer:0,
   why:'Thymine is 5-methyluracil. Both bases present the same hydrogen-bonding face to adenine, which is why one can substitute for the other between DNA and RNA.'},

  {id:'NUC-003', m:'m1', area:'Nucleobase structure', level:'application',
   stem:'A base is isolated from an RNA sample and found to contain a single six-membered ring with an amino group at carbon 4. Which base is it?',
   options:['Cytosine','Uracil','Adenine','Guanine'],
   answer:0,
   why:'A single ring places the base among the pyrimidines. Of the pyrimidines found in RNA, cytosine carries the C4 amino group while uracil carries a carbonyl there.'},

  {id:'NUC-004', m:'m1', area:'Nucleoside and nucleotide naming', level:'concept',
   stem:'What distinguishes a nucleotide from a nucleoside?',
   options:['The presence of one to three phosphate groups','The presence of a five-carbon sugar','The presence of a nitrogen-containing base','The presence of a fused ring system'],
   answer:0,
   why:'A nucleoside is base plus sugar. Adding one to three phosphates makes it a nucleotide. Both contain a base and a sugar, so the phosphate is the deciding feature.'},

  {id:'NUC-005', m:'m1', area:'Nucleoside and nucleotide naming', level:'application',
   stem:'Which set of components makes up dGTP?',
   options:['Guanine, deoxyribose, and three phosphates','Guanine, ribose, and three phosphates','Guanosine, deoxyribose, and two phosphates','Adenine, deoxyribose, and three phosphates'],
   answer:0,
   why:'Read the abbreviation piece by piece: the lower-case d marks deoxyribose, G marks guanine, and TP marks three phosphate groups.'},

  {id:'NUC-006', m:'m1', area:'Nucleoside and nucleotide naming', level:'application',
   stem:'Cytosine is joined to ribose with no phosphate added. What is the resulting molecule called?',
   options:['Cytidine','Cytidine monophosphate','Deoxycytidine','Cytosine ribonucleotide'],
   answer:0,
   why:'Base plus sugar gives a nucleoside, and the nucleoside name for cytosine is cytidine. A monophosphate name would require an added phosphate, and deoxycytidine would require deoxyribose.'},

  {id:'NUC-007', m:'m1', area:'Sugars and nucleic acid chemistry', level:'concept',
   stem:'At which sugar carbon do ribose and deoxyribose differ?',
   options:['Carbon 2 prime','Carbon 1 prime','Carbon 3 prime','Carbon 5 prime'],
   answer:0,
   why:'Ribose has a hydroxyl at C2 prime and deoxyribose has a hydrogen. C1 prime bears the base and C3 prime and C5 prime bear the backbone in both sugars.'},

  {id:'NUC-008', m:'m1', area:'Sugars and nucleic acid chemistry', level:'integration',
   stem:'A laboratory stores an RNA sample and a DNA sample under identical mildly alkaline conditions. Which chemical feature best explains why the RNA degrades faster?',
   options:['The 2 prime hydroxyl can attack the adjacent phosphodiester bond','The uracil base is less stable than thymine in solution','RNA lacks the hydrogen bonding that stabilizes a duplex','Ribose forms a weaker bond to the base than deoxyribose does'],
   answer:0,
   why:'The 2 prime hydroxyl sits next to the phosphodiester linkage and is positioned to attack it, which makes the RNA backbone intrinsically more labile. DNA gives up this group, and with it some structural versatility, in exchange for stability.'},

  {id:'NUC-009', m:'m1', area:'Backbone and base pairing', level:'concept',
   stem:'Which two positions on adjoining sugars are joined by a phosphodiester linkage?',
   options:['The 5 prime and 3 prime hydroxyls','The 1 prime and 5 prime hydroxyls','The 2 prime and 3 prime hydroxyls','The 3 prime hydroxyls of both sugars'],
   answer:0,
   why:'The phosphate bridges the 5 prime hydroxyl of one sugar and the 3 prime hydroxyl of the next, giving the strand a direction that polymerases depend on.'},

  {id:'NUC-010', m:'m1', area:'Backbone and base pairing', level:'application',
   stem:'Two DNA fragments of equal length are compared, and one has a much higher guanine and cytosine content. Which property is expected to be higher in that fragment?',
   options:['The temperature required to separate the strands','The number of phosphodiester bonds per strand','The length of the sugar-phosphate backbone','The proportion of the sequence read 5 prime to 3 prime'],
   answer:0,
   why:'G-C pairs form three hydrogen bonds while A-T pairs form two, so a G-C rich duplex takes more energy to separate. Backbone length and bond count depend on fragment length, which is the same in both.'},

  {id:'NUC-011', m:'m1', area:'Backbone and base pairing', level:'application',
   stem:'A DNA strand reads 5 prime - G G A T - 3 prime. What is its complementary strand?',
   options:['3 prime - C C T A - 5 prime','5 prime - C C T A - 3 prime','3 prime - G G A T - 5 prime','5 prime - T A G G - 3 prime'],
   answer:0,
   why:'Pair each base in turn to get C C T A, then remember the partner strand runs antiparallel, so it is written 3 prime to 5 prime beneath a strand written 5 prime to 3 prime.'},

  {id:'NUC-012', m:'m1', area:'Sugars and nucleic acid chemistry', level:'integration',
   stem:'An analysis of a nucleic acid sample detects ribose and uracil but no thymine. What does this indicate about the sample?',
   options:['It is RNA, since RNA uses ribose and substitutes uracil for thymine','It is DNA, since deoxyribose is undetectable by this method','It is a mixture, since ribose and uracil occur in separate polymers','It is RNA, since RNA contains no adenine to pair with thymine'],
   answer:0,
   why:'Ribose and uracil are each independently diagnostic of RNA, and finding both together is strong evidence. RNA does contain adenine; it simply pairs with uracil rather than thymine.'},

  /* ================= MODULE 2 ================= */
  {id:'NUC-013', m:'m2', area:'Nucleotide sources and PRPP', level:'concept',
   stem:'Which process supplies most of the nucleotides a human cell uses?',
   options:['De novo synthesis','Absorption of dietary nucleotides','Hydrolysis of dietary nucleic acids in the gut','Conversion of dietary amino acids to intact bases'],
   answer:0,
   why:'Only about five percent of dietary nucleotides reach circulation, so de novo synthesis carries the load. The sugar released during digestion can be used for energy, but the base contributes none.'},

  {id:'NUC-014', m:'m2', area:'Nucleotide sources and PRPP', level:'concept',
   stem:'Which substrates does PRPP synthetase use to produce PRPP?',
   options:['Ribose-5-phosphate and ATP','Ribose-5-phosphate and glutamine','Glucose-6-phosphate and ATP','Ribulose-5-phosphate and ATP'],
   answer:0,
   why:'PRPP synthetase transfers a pyrophosphate group from ATP to ribose-5-phosphate. The ribose-5-phosphate is supplied by the pentose phosphate pathway.'},

  {id:'NUC-015', m:'m2', area:'Nucleotide sources and PRPP', level:'integration',
   stem:'A cell with reduced flux through the pentose phosphate pathway shows lower nucleotide production. Which connection best explains this result?',
   options:['The pathway supplies ribose-5-phosphate for PRPP formation','The pathway supplies glutamine for nitrogen donation','The pathway supplies bicarbonate for ring carboxylation','The pathway supplies aspartate for ring closure'],
   answer:0,
   why:'The pentose phosphate pathway is usually taught for its NADPH output, but its ribose-5-phosphate product is the entry point for PRPP and therefore for both nucleotide pathways.'},

  {id:'NUC-016', m:'m2', area:'Purine ring assembly', level:'concept',
   stem:'Which amino acid is incorporated intact into the purine ring, contributing two carbons and one nitrogen?',
   options:['Glycine','Glutamine','Aspartate','Serine'],
   answer:0,
   why:'Glycine is added whole by GAR synthetase, supplying C4, C5, and N7. Every other donor contributes a single atom to the ring.'},

  {id:'NUC-017', m:'m2', area:'Purine ring assembly', level:'concept',
   stem:'Which cofactor donates the one-carbon units that become C2 and C8 of the purine ring?',
   options:['10-formyltetrahydrofolate','S-adenosylmethionine','Carbamoyl phosphate','Thiamine pyrophosphate'],
   answer:0,
   why:'Two formyl transfers, catalyzed by GAR transformylase and later AICAR transformylase, both draw on 10-formyltetrahydrofolate. This dependence is why folate antagonists reach purine synthesis as well as thymidylate synthesis.'},

  {id:'NUC-018', m:'m2', area:'Purine ring assembly', level:'application',
   stem:'Aspartate condenses with CAIR during purine synthesis. What happens to the aspartate carbon skeleton afterward?',
   options:['It leaves as fumarate and enters the citric acid cycle','It leaves as oxaloacetate and enters gluconeogenesis','It is retained as part of the completed purine ring','It leaves as carbon dioxide during ring closure'],
   answer:0,
   why:'Aspartate donates N1 and adenylosuccinate lyase then eliminates the rest as fumarate. Feeding that fumarate into the citric acid cycle recovers some of the energy invested in building the ring.'},

  {id:'NUC-019', m:'m2', area:'Purine pathway and energetics', level:'concept',
   stem:'Which reaction represents the committed step of de novo purine synthesis?',
   options:['PRPP to 5-phosphoribosyl-1-amine','Ribose-5-phosphate to PRPP','GAR to formylglycinamide ribonucleotide','AICAR to IMP'],
   answer:0,
   why:'Amidophosphoribosyltransferase converts PRPP to 5-phosphoribosyl-1-amine. PRPP itself has other destinations, so this is the first step that dedicates the molecule to a purine nucleotide, which makes it the natural regulatory point.'},

  {id:'NUC-020', m:'m2', area:'Purine pathway and energetics', level:'application',
   stem:'Which description matches the way the purine ring is assembled?',
   options:['Atom by atom onto a ribose phosphate that is already present','As a complete free ring that is then joined to ribose phosphate','On a folate carrier and transferred to ribose phosphate at the end','By modification of a preformed pyrimidine ring'],
   answer:0,
   why:'Purine intermediates are nucleotides from the very first committed step, because the ring grows on PRPP-derived ribose phosphate. Pyrimidine synthesis uses the opposite order.'},

  {id:'NUC-021', m:'m2', area:'Purine pathway and energetics', level:'application',
   stem:'Which nucleotide is the direct product of the de novo purine pathway before any branching occurs?',
   options:['Inosine monophosphate','Adenosine monophosphate','Guanosine monophosphate','Orotidine monophosphate'],
   answer:0,
   why:'IMP is produced by IMP cyclohydrolase at the end of the linear pathway. AMP and GMP each require two additional steps from IMP, and OMP belongs to the pyrimidine route.'},

  {id:'NUC-022', m:'m2', area:'The IMP branch point', level:'concept',
   stem:'Which nucleoside triphosphate provides the energy for converting IMP to AMP?',
   options:['GTP','ATP','UTP','CTP'],
   answer:0,
   why:'AMP synthesis is driven by GTP and GMP synthesis is driven by ATP. Each branch depends on the product of the other, which is how the two purine pools stay matched.'},

  {id:'NUC-023', m:'m2', area:'The IMP branch point', level:'integration',
   stem:'A cell develops a low GTP concentration. Based on the reciprocal design of the IMP branch, what is the expected effect on AMP production?',
   options:['It slows, because GTP is required for the branch to AMP','It rises, because IMP is redirected away from GMP','It is unchanged, because the two branches operate independently','It stops entirely, because GTP is the sole substrate for AMP'],
   answer:0,
   why:'GTP supplies the energy for adenylosuccinate formation, so a low GTP pool restrains AMP output. GTP is a required cofactor rather than the substrate, so the branch slows rather than halting outright.'},

  {id:'NUC-024', m:'m2', area:'The IMP branch point', level:'integration',
   stem:'What advantage does the cell gain from having AMP synthesis depend on GTP while GMP synthesis depends on ATP?',
   options:['The two purine pools are kept in balance without additional regulatory proteins','The two purine pools can be expanded independently of one another','Purine synthesis becomes independent of the overall energy charge','Purine synthesis can proceed when PRPP supply is limited'],
   answer:0,
   why:'A shortfall in either purine restrains production of the other, so balance emerges from the pathway architecture itself. This costs the cell nothing in additional machinery, which is why it is worth recognizing as a design principle rather than a detail.'},

  /* ================= MODULE 3 ================= */
  {id:'NUC-025', m:'m3', area:'Pyrimidine strategy', level:'concept',
   stem:'How is the pyrimidine ring assembled during de novo synthesis?',
   options:['As a free ring that is attached to PRPP once complete','Atom by atom onto PRPP from the first committed step','On a folate carrier and transferred to ribose at the end','By ring contraction of a purine intermediate'],
   answer:0,
   why:'Pyrimidine synthesis builds orotate first, and orotate phosphoribosyltransferase then attaches PRPP to give OMP. This is the reverse of the purine strategy.'},

  {id:'NUC-026', m:'m3', area:'Pyrimidine strategy', level:'application',
   stem:'Which requirement is shared by de novo purine synthesis and de novo pyrimidine synthesis?',
   options:['PRPP as the source of ribose phosphate','IMP as a branch point intermediate','Carbamoyl phosphate as an early intermediate','Glycine as an intact ring contributor'],
   answer:0,
   why:'PRPP is the single shared requirement, which is why it sits at the top of the metabolic map. IMP and glycine belong to the purine route, and carbamoyl phosphate to the pyrimidine route.'},

  {id:'NUC-027', m:'m3', area:'CPS II and CAD', level:'concept',
   stem:'Which nitrogen source does carbamoyl phosphate synthetase II use?',
   options:['The amide nitrogen of glutamine','Free ammonium generated in the liver','The amino nitrogen of aspartate','The amide nitrogen of asparagine'],
   answer:0,
   why:'CPS II draws nitrogen from the glutamine side chain amide, while CPS I captures free ammonium for the urea cycle. Nitrogen source is the cleanest way to distinguish them.'},

  {id:'NUC-028', m:'m3', area:'CPS II and CAD', level:'application',
   stem:'An enzyme is described as cytosolic, glutamine-dependent, and part of a multifunctional protein. Which enzyme fits this description?',
   options:['Carbamoyl phosphate synthetase II','Carbamoyl phosphate synthetase I','Dihydroorotate dehydrogenase','Orotate phosphoribosyltransferase'],
   answer:0,
   why:'All three clues point to CPS II, which begins pyrimidine synthesis as the first activity of CAD. CPS I is mitochondrial and ammonium-dependent, and DHODH is mitochondrial and works with ubiquinone.'},

  {id:'NUC-029', m:'m3', area:'CPS II and CAD', level:'concept',
   stem:'What does the abbreviation CAD describe in pyrimidine synthesis?',
   options:['Three consecutive enzymatic activities on a single polypeptide chain','Three separate enzymes bound together by non-covalent contacts','A single enzyme regulated by three distinct subunits','Three tissue-specific isoforms of one enzyme'],
   answer:0,
   why:'CAD carries carbamoyl phosphate synthetase II, aspartate transcarbamoylase, and dihydroorotase on one chain. Placing consecutive activities together shortens the path an intermediate must travel between them.'},

  {id:'NUC-030', m:'m3', area:'Orotate to UMP', level:'concept',
   stem:'Which electron acceptor does dihydroorotate dehydrogenase use?',
   options:['Ubiquinone','NAD plus','NADP plus','Flavin adenine dinucleotide in solution'],
   answer:0,
   why:'DHODH is a mitochondrial enzyme that passes electrons to ubiquinone, tying pyrimidine synthesis to the electron transport chain. That distinctive arrangement is part of what makes the enzyme a useful drug target.'},

  {id:'NUC-031', m:'m3', area:'Orotate to UMP', level:'application',
   stem:'Which pair of reactions converts orotate to UMP?',
   options:['Addition of ribose phosphate from PRPP, then decarboxylation','Decarboxylation, then addition of ribose phosphate from PRPP','Addition of ribose phosphate from PRPP, then phosphorylation','Reduction, then addition of ribose phosphate from PRPP'],
   answer:0,
   why:'Orotate phosphoribosyltransferase attaches PRPP to give OMP, and OMP decarboxylase then removes the carboxyl group to give UMP. Both activities reside on UMP synthase, another multifunctional protein in this pathway.'},

  {id:'NUC-032', m:'m3', area:'Orotate to UMP', level:'integration',
   stem:'Why does inhibiting dihydroorotate dehydrogenase reduce production of cytosine nucleotides as well as uracil nucleotides?',
   options:['Cytosine nucleotides are made from UTP, which originates from UMP','Cytosine nucleotides are made directly from orotate by a parallel route','Cytosine nucleotides require the same electron acceptor as DHODH','Cytosine nucleotides are made from IMP, which depends on orotate supply'],
   answer:0,
   why:'The pyrimidine pathway is linear as far as UMP, and CTP synthase makes CTP from UTP. Any block upstream of UMP therefore reaches every pyrimidine nucleotide, not just the uracil ones.'},

  {id:'NUC-033', m:'m3', area:'Nucleotide phosphorylation', level:'concept',
   stem:'Which enzyme converts diphosphate nucleotides to their triphosphate forms?',
   options:['Nucleoside diphosphate kinase, acting on all of them','A dedicated kinase for each individual nucleotide','Adenylate kinase, acting on all of them','CTP synthase, acting on all of them'],
   answer:0,
   why:'The monophosphate to diphosphate step uses a kinase specific to each nucleotide, but a single shared enzyme handles the diphosphate to triphosphate step. ATP is the phosphate donor at both levels.'},

  {id:'NUC-034', m:'m3', area:'Nucleotide phosphorylation', level:'application',
   stem:'At which phosphorylation level does CTP synthase act, and what nitrogen source does it use?',
   options:['The triphosphate level, using the glutamine amide nitrogen','The monophosphate level, using the glutamine amide nitrogen','The diphosphate level, using free ammonium','The triphosphate level, using the aspartate amino nitrogen'],
   answer:0,
   why:'CTP synthase converts UTP to CTP in an ATP-dependent reaction with glutamine as the nitrogen donor. This is why UMP must be phosphorylated twice before any cytosine nucleotide can appear.'},

  {id:'NUC-035', m:'m3', area:'Pyrimidine strategy', level:'integration',
   stem:'A cell is given labeled bicarbonate and the label appears in a pyrimidine ring. Which enzyme incorporated it?',
   options:['Carbamoyl phosphate synthetase II','Aspartate transcarbamoylase','Dihydroorotase','OMP decarboxylase'],
   answer:0,
   why:'CPS II converts bicarbonate and the glutamine amide nitrogen into carbamoyl phosphate, the first committed intermediate. The later CAD activities rearrange and cyclize what CPS II produced rather than adding new carbon.'},

  {id:'NUC-036', m:'m3', area:'CPS II and CAD', level:'integration',
   stem:'A patient has a urea cycle disorder involving carbamoyl phosphate synthetase I. Why is pyrimidine synthesis expected to continue?',
   options:['Pyrimidine synthesis uses a separate enzyme, CPS II, with its own nitrogen source','Pyrimidine synthesis bypasses carbamoyl phosphate entirely','Pyrimidine synthesis uses carbamoyl phosphate imported from the mitochondrion','Pyrimidine synthesis uses aspartate in place of carbamoyl phosphate'],
   answer:0,
   why:'The two carbamoyl phosphate synthetases are distinct enzymes in different compartments serving different pathways. CPS II remains available for pyrimidine synthesis even when CPS I is impaired.'},

  /* ================= MODULE 4 ================= */
  {id:'NUC-037', m:'m4', area:'Ribonucleotide reductase', level:'concept',
   stem:'At which phosphorylation level does ribonucleotide reductase act on its substrate?',
   options:['The diphosphate level','The monophosphate level','The triphosphate level','The free nucleoside level'],
   answer:0,
   why:'Ribonucleotide reductase converts NDP to dNDP. Products are then raised to the triphosphate level for DNA synthesis, so the deoxy conversion happens at one defined point in the phosphorylation ladder.'},

  {id:'NUC-038', m:'m4', area:'Ribonucleotide reductase', level:'concept',
   stem:'Which sequence describes the flow of electrons during deoxynucleotide formation?',
   options:['NADPH to thioredoxin reductase to thioredoxin to ribonucleotide reductase','NADPH to thioredoxin to thioredoxin reductase to ribonucleotide reductase','Ribonucleotide reductase to thioredoxin reductase to thioredoxin to NADPH','NADH to thioredoxin reductase to thioredoxin to ribonucleotide reductase'],
   answer:0,
   why:'NADPH is the electron source, thioredoxin reductase reduces thioredoxin, and thioredoxin delivers electrons to ribonucleotide reductase. The enzyme name itself gives the order away: a reductase acts on the thing it is named for.'},

  {id:'NUC-039', m:'m4', area:'Ribonucleotide reductase', level:'application',
   stem:'Which chemical change does ribonucleotide reductase carry out on its substrate?',
   options:['A hydroxyl at C2 prime is replaced by a hydrogen','A hydrogen at C2 prime is replaced by a hydroxyl','A hydroxyl at C3 prime is replaced by a hydrogen','A phosphate at C5 prime is replaced by a hydroxyl'],
   answer:0,
   why:'Losing the 2 prime oxygen and gaining hydrogen is a gain of electrons at that carbon, which is what makes the reaction a reduction. This is also exactly the ribose to deoxyribose conversion described in Module 1.'},

  {id:'NUC-040', m:'m4', area:'Ribonucleotide reductase', level:'integration',
   stem:'A cell is depleted of NADPH. Which downstream effect on nucleic acid synthesis is expected?',
   options:['Deoxynucleotide production falls, limiting DNA synthesis','Ribonucleotide production falls, limiting RNA synthesis','PRPP production falls, limiting both pathways equally','Thymidylate production rises, compensating for the loss'],
   answer:0,
   why:'NADPH is the electron source for the relay that supplies ribonucleotide reductase, so its loss restricts deoxynucleotide supply specifically. Ribonucleotide synthesis upstream of that point does not depend on this relay.'},

  {id:'NUC-041', m:'m4', area:'Thymidylate synthesis', level:'concept',
   stem:'Which substrate does thymidylate synthase convert to dTMP?',
   options:['dUMP','UMP','dUDP','dUTP'],
   answer:0,
   why:'Thymidylate synthase accepts only the deoxyribose monophosphate, dUMP. Because thymine nucleotides arise at this level, no ribo-thymidine nucleotide is produced de novo.'},

  {id:'NUC-042', m:'m4', area:'Thymidylate synthesis', level:'concept',
   stem:'Which molecule donates the one-carbon unit used by thymidylate synthase?',
   options:['A tetrahydrofolate derivative','S-adenosylmethionine','Methylcobalamin','Carbamoyl phosphate'],
   answer:0,
   why:'A tetrahydrofolate derivative supplies the carbon, and the folate is left in a more oxidized state that dihydrofolate reductase must restore. That regeneration requirement is what puts DHFR downstream of this reaction.'},

  {id:'NUC-043', m:'m4', area:'Thymidylate synthesis', level:'application',
   stem:'Dihydrofolate reductase acts on folate rather than on a nucleotide. Which explanation accounts for its inhibition lowering dTMP production?',
   options:['Tetrahydrofolate is not regenerated for thymidylate synthase to use','Dihydrofolate accumulates and inhibits thymidylate synthase directly','Deoxyuridine monophosphate is degraded before it can be methylated','Ribonucleotide reductase loses its electron donor'],
   answer:0,
   why:'Thymidylate synthase consumes the reduced folate and leaves it oxidized, so the reaction depends on DHFR to return it to the usable pool. Blocking DHFR starves the reaction of its donor from one step upstream.'},

  {id:'NUC-044', m:'m4', area:'Deoxynucleotide logic', level:'application',
   stem:'Ribonucleotide reductase supplies deoxynucleotides, yet thymine nucleotides require an additional enzyme. Which explanation accounts for that requirement?',
   options:['It changes the sugar but does not add the methyl group thymine requires','It acts only on purine nucleotides and not on pyrimidine nucleotides','It acts at the triphosphate level where thymine nucleotides are absent','It requires a methyl donor that the cell supplies only to DNA polymerase'],
   answer:0,
   why:'The enzyme converts a ribose to a deoxyribose and does nothing to the base. Thymine differs from uracil by a methyl group, so a separate methyl transfer by thymidylate synthase is required.'},

  {id:'NUC-045', m:'m4', area:'Deoxynucleotide logic', level:'application',
   stem:'Which sequence describes the route from UDP to dTTP?',
   options:['UDP, dUDP, dUMP, dTMP, dTDP, dTTP','UDP, UTP, dUTP, dTTP, dTDP, dTMP','UMP, dUMP, dUDP, dTDP, dTTP, dTMP','UDP, dUDP, dUTP, dTTP, dTMP, dTDP'],
   answer:0,
   why:'The route drops to the monophosphate level so thymidylate synthase can act, then climbs back to the triphosphate. Noticing that the phosphorylation state goes down and then up is what makes the order easy to reconstruct.'},

  {id:'NUC-046', m:'m4', area:'Deoxynucleotide logic', level:'integration',
   stem:'A tissue with a high rate of cell division shows particular sensitivity to a drug that blocks thymidylate synthesis. Which explanation best accounts for this?',
   options:['Dividing cells need a continuous dTTP supply to replicate their DNA','Dividing cells rely on thymidylate synthase for RNA synthesis as well','Dividing cells cannot use ribonucleotide reductase during replication','Dividing cells lack the ability to salvage nucleotides from the diet'],
   answer:0,
   why:'DNA replication consumes dTTP in proportion to how much DNA is being made, so tissues that divide quickly feel a shortage first. This selectivity, rather than any tumor-specific enzyme, is the basis for using these drugs in cancer therapy.'},

  {id:'NUC-047', m:'m4', area:'Ribonucleotide reductase', level:'application',
   stem:'Which product results when ribonucleotide reductase acts on UDP?',
   options:['dUDP','dUMP','dUTP','dTMP'],
   answer:0,
   why:'The enzyme changes the sugar and leaves the phosphorylation state untouched, so a diphosphate substrate gives a diphosphate product. Reaching dUMP or dTMP requires additional separate steps.'},

  {id:'NUC-048', m:'m4', area:'Thymidylate synthesis', level:'integration',
   stem:'Two drugs both lower dTTP levels, but one acts on dihydrofolate reductase and the other on thymidylate synthase. What distinguishes their points of action?',
   options:['One limits the supply of the carbon donor while the other blocks the transfer itself','One acts on a purine enzyme while the other acts on a pyrimidine enzyme','One acts before ribonucleotide reductase while the other acts after it','One blocks a mitochondrial enzyme while the other blocks a cytosolic enzyme'],
   answer:0,
   why:'Dihydrofolate reductase keeps the reduced folate pool available, so inhibiting it removes the donor. Thymidylate synthase performs the transfer, so inhibiting it stops the reaction directly. Both converge on the same missing product from different positions.'},

  /* ================= MODULE 5 ================= */
  {id:'NUC-049', m:'m5', area:'Antimetabolite drugs', level:'concept',
   stem:'Which enzyme does leflunomide inhibit?',
   options:['Dihydroorotate dehydrogenase','Dihydrofolate reductase','Thymidylate synthase','Ribonucleotide reductase'],
   answer:0,
   why:'Leflunomide targets DHODH, restricting pyrimidine supply to rapidly dividing lymphocytes. This is the basis for its immunosuppressive effect in rheumatoid arthritis.'},

  {id:'NUC-050', m:'m5', area:'Antimetabolite drugs', level:'application',
   stem:'A drug blocks dihydroorotate dehydrogenase. Which immediate metabolic consequence is expected?',
   options:['Pyrimidine nucleotide synthesis declines while purine synthesis continues','Purine nucleotide synthesis declines while pyrimidine synthesis continues','Both nucleotide pathways decline to a similar extent','Deoxynucleotide formation declines while ribonucleotide formation continues'],
   answer:0,
   why:'DHODH belongs to the pyrimidine pathway alone, so the block is confined to that branch. Purine synthesis has no step that depends on this enzyme.'},

  {id:'NUC-051', m:'m5', area:'Antimetabolite drugs', level:'application',
   stem:'How does fluorouracil produce its effect on DNA synthesis?',
   options:['It is converted to F-dUMP, which occupies thymidylate synthase without completing the reaction','It is converted to F-dUMP, which competitively inhibits dihydrofolate reductase','It acts unchanged as a competitive inhibitor of thymidylate synthase','It is incorporated into DNA in place of thymine and halts replication'],
   answer:0,
   why:'Fluorouracil is a prodrug. The cell converts it to F-dUMP, which thymidylate synthase binds but cannot process, leaving the enzyme occupied. Falling dTTP then impairs DNA synthesis.'},

  {id:'NUC-052', m:'m5', area:'Antimetabolite drugs', level:'integration',
   stem:'Methotrexate is described as affecting purine synthesis in addition to thymidylate synthesis. Which shared dependency accounts for this?',
   options:['Both pathways require tetrahydrofolate derivatives as one-carbon donors','Both pathways require PRPP as the source of ribose phosphate','Both pathways require glutamine as a nitrogen donor','Both pathways require ubiquinone as an electron acceptor'],
   answer:0,
   why:'Purine ring construction uses 10-formyltetrahydrofolate twice, and thymidylate synthesis uses a folate derivative as its methyl donor. Blocking folate regeneration therefore reaches both, which is why folate antagonists have broad effects on dividing cells.'},

  {id:'NUC-053', m:'m5', area:'Antimetabolite drugs', level:'integration',
   stem:'Three drugs act at DHODH, dihydrofolate reductase, and thymidylate synthase. Which one would leave purine ring construction least affected?',
   options:['The DHODH inhibitor, since that enzyme serves pyrimidine synthesis alone','The dihydrofolate reductase inhibitor, since folate serves pyrimidine synthesis alone','The thymidylate synthase inhibitor, since that enzyme is upstream of purine synthesis','All three affect purine ring construction to a similar extent'],
   answer:0,
   why:'DHODH sits in the pyrimidine arm and nowhere else. The DHFR inhibitor reaches purine synthesis through the shared folate pool, and thymidylate synthase inhibition consumes folate in a form that cannot be reused, so both have wider reach.'},

  {id:'NUC-054', m:'m5', area:'Nucleotide catabolism', level:'concept',
   stem:'What is the end product of purine catabolism in humans?',
   options:['Uric acid','Urea','Beta-alanine','Carbon dioxide and ammonium'],
   answer:0,
   why:'Purine breakdown ends at uric acid, which is excreted in the urine. Pyrimidines are broken down instead to ammonium, carbon dioxide, and water.'},

  {id:'NUC-055', m:'m5', area:'Nucleotide catabolism', level:'concept',
   stem:'Which step begins the catabolism of both purine and pyrimidine nucleotides?',
   options:['Removal of the phosphate and sugar from the nucleotide','Oxidation of the base to a soluble acid','Cleavage of the ring by a dedicated hydrolase','Conjugation of the nucleotide for excretion'],
   answer:0,
   why:'Both classes are stripped of phosphate and sugar before the base is degraded. The released sugar can be recycled or oxidized for energy, while the base cannot serve as an energy source.'},

  {id:'NUC-056', m:'m5', area:'Nucleotide catabolism', level:'application',
   stem:'A urine sample shows a raised concentration of uric acid. Which class of nucleotide is being broken down at an increased rate?',
   options:['Purine nucleotides','Pyrimidine nucleotides','Both classes at an equal rate','Neither class, since uric acid arises from amino acid breakdown'],
   answer:0,
   why:'Uric acid comes from purines alone, so it serves as a specific marker of purine turnover. Pyrimidine breakdown yields ammonium, carbon dioxide, and water instead.'},

  {id:'NUC-057', m:'m5', area:'Uric acid and gout', level:'application',
   stem:'What is the immediate cause of the joint inflammation seen in an acute gout flare?',
   options:['Deposition of urate crystals within the joint space','Direct binding of soluble urate to joint collagen','Local depletion of nucleotides in the synovial lining','A rise in joint pH that denatures synovial proteins'],
   answer:0,
   why:'Urate that exceeds its solubility crystallizes, and crystals in a joint provoke an acute inflammatory response. Raised serum urate is the risk factor; crystal deposition is what produces the clinical picture.'},

  {id:'NUC-058', m:'m5', area:'Uric acid and gout', level:'integration',
   stem:'A patient with recurrent gout is started on allopurinol, an inhibitor of xanthine oxidase. Which effect explains the benefit?',
   options:['Uric acid production falls because a step in purine breakdown is blocked','Uric acid excretion rises because renal urate handling is enhanced','Purine synthesis falls because PRPP formation is blocked','Urate is converted to a soluble form within the joint space'],
   answer:0,
   why:'Xanthine oxidase catalyzes the final oxidations that produce uric acid, so inhibiting it lowers urate production and leaves more soluble precursors for excretion. The drug addresses the underlying pathway rather than the inflammation itself.'},

  {id:'NUC-059', m:'m5', area:'Uric acid and gout', level:'integration',
   stem:'A patient beginning chemotherapy for a large tumor burden develops a rapid rise in serum urate. Which explanation fits the biochemistry?',
   options:['Widespread cell death releases nucleic acids whose purines are degraded to urate','The chemotherapy agent is metabolized to urate by hepatic enzymes','Pyrimidine catabolism is redirected toward uric acid production','Reduced renal blood flow converts purines to urate in the kidney'],
   answer:0,
   why:'Killing many cells at once releases a large quantity of nucleic acid, and the purines within it are catabolized to uric acid. Anticipating this is why urate is monitored and managed when treatment begins.'},

  {id:'NUC-060', m:'m5', area:'Nucleotide catabolism', level:'integration',
   stem:'Dietary nucleotides were described as a poor energy source even though they are digested. Which feature of catabolism explains this?',
   options:['The sugar can be oxidized for energy while the base cannot','The phosphate is retained and prevents further breakdown','The base is absorbed intact and stored rather than degraded','The nucleotides are excreted before digestion is complete'],
   answer:0,
   why:'Catabolism separates a usable sugar from a base that yields no energy and is excreted as uric acid or as small nitrogen-containing products. This is the same asymmetry that makes de novo synthesis, rather than diet, the main nucleotide source.'}

];
