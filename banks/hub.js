/* ============================================================
   banks/hub.js
   THE HUB'S OWN QUESTION BANK — PHA3134 Biochemistry
   Cross-topic integration items students have not met inside any
   single companion. Every question here deliberately spans two or
   more companions, so it can only be answered by connecting them.

   Same shape as every other bank file: pure data, no DOM, no
   dependency on the engine. Opens in BankBridge like any other.

   `m` names the companion a student should revisit if they miss
   the item, so the hub can send them to the right page. It must
   match a companion's TOPIC_ID exactly, because poolFor() uses it
   to decide which hub questions belong with which selection.
   Valid values: enzymes, aminoacids, hemoglobin, signaling,
   nucleotides, glycogen, cac, oxphos, aametabolism, integration.

   Question IDs are permanent: HUB-001 ... never reused.
   HUB-001 to HUB-020 cover the first four companions.
   HUB-021 to HUB-026 cover Nucleotides, HUB-027 to HUB-032 cover
   Glycogen Metabolism, HUB-033 to HUB-038 cover the Citric Acid
   Cycle, HUB-039 to HUB-044 cover Oxidative Phosphorylation.
   HUB-045 to HUB-050 cover Amino Acid Metabolism & Biosynthesis,
   HUB-051 to HUB-056 cover Metabolic Integration & Organ
   Specialization.
   Next free ID: HUB-057.
   ============================================================ */
var TOPIC_ID    = 'hub';
var TOPIC_TITLE = 'Integration & Review';

/* The hub has no sections of its own, so it has no checkpoints.
   The empty object is here so a hub bank opens cleanly in
   BankBridge and reads the same as every other bank file. */
var CHECKPOINTS = {};

var CARDS = [
  { id:'HUB-CARD-01', t:'Why a lower Km means tighter binding',
    d:'Km is the substrate concentration giving half-maximal velocity. Less substrate needed to reach that halfway point means the enzyme holds substrate more tightly.' },
  { id:'HUB-CARD-02', t:'The one property shared by cooperativity and allosteric enzyme regulation',
    d:'Binding at one site changes the shape, and therefore the affinity, of a distant site on the same multi-subunit protein.' },
  { id:'HUB-CARD-03', t:'Why histidine keeps appearing in active sites and in hemoglobin',
    d:'Its imidazole side chain has a pKa near 6, so at body pH it sits between its protonated and unprotonated forms and can pass protons either way.' },
  { id:'HUB-CARD-04', t:'Primary vs secondary active transport, in one line',
    d:'Primary spends ATP directly; secondary spends the ion gradient that a primary pump built earlier. Both move a solute up its own gradient.' },
  { id:'HUB-CARD-05', t:'Where signal amplification comes from',
    d:'Each step in a cascade is an enzyme that turns on many copies of the next step, so a few bound receptors produce millions of second-messenger molecules.' },
  { id:'HUB-CARD-06', t:'Two ways to change an enzyme fast',
    d:'Covalent modification (usually phosphorylation by a kinase) and non-covalent allosteric binding. Both act on protein already present, which is why they work in seconds.' },
  { id:'HUB-CARD-07', t:'What a right shift of the oxygen dissociation curve means',
    d:'Lower affinity at every oxygen tension, so more oxygen is unloaded in tissue. Produced by falling pH, rising CO2, rising 2,3-BPG and rising temperature.' },
  { id:'HUB-CARD-08', t:'Why side-chain pKa values decide protein behavior',
    d:'Charge follows pKa relative to local pH, and charge decides folding contacts, catalytic ability, ligand binding and electrophoretic behavior.' },
  { id:'HUB-CARD-09', t:'Why the liver can share its glycogen and muscle cannot',
    d:'Liver has glucose-6-phosphatase and can strip the phosphate off, so free glucose leaves through GLUT2. Muscle has no such enzyme, so its phosphorylated glucose is trapped inside and spent locally.' },
  { id:'HUB-CARD-10', t:'What one rise in cAMP does to glycogen',
    d:'Protein kinase A switches glycogen synthase off and, through phosphorylase kinase, switches glycogen phosphorylase on. One messenger, two arms, opposite directions, so the cell never builds and breaks down at once.' },
  { id:'HUB-CARD-11', t:'Why a folate blocker stops DNA synthesis',
    d:'Folate carries the one-carbon units that build carbons 2 and 8 of the purine ring and convert dUMP to dTMP. Remove them and DNA precursors run out while RNA and protein synthesis carry on.' },
  { id:'HUB-CARD-12', t:'Why PRPP sits at the center of nucleotide supply',
    d:'It is built from the ribose-5-phosphate that the pentose phosphate pathway makes, and it feeds de novo purine synthesis, pyrimidine synthesis and the salvage routes, so its level moves all three at once.' },
  { id:'HUB-CARD-13', t:'Why the cycle is called amphibolic',
    d:'It runs oxidatively to harvest energy, but its intermediates are also pulled out to build amino acids, heme and glucose, so the cycle is simultaneously a catabolic engine and a biosynthetic hub.' },
  { id:'HUB-CARD-14', t:'One control principle, two enzymes',
    d:'Isocitrate dehydrogenase speeds up with ADP and slows with ATP bound away from its active site; ribonucleotide reductase slows with dATP bound the same way. Both are throttled by evidence that their own output already exists.' },
  { id:'HUB-CARD-15', t:'The one enzyme that belongs to both the citric acid cycle and the electron transport chain',
    d:'Succinate dehydrogenase. It is step 6 of the cycle and complex II of the chain, the only cycle enzyme bound in the inner membrane and the only chain complex that pumps no protons. Inhibiting it stops both pathways at once.' },
  { id:'HUB-CARD-16', t:'The measurement that separates an uncoupler from a chain inhibitor',
    d:'Oxygen consumption. Both end with less ATP and a smaller gradient, but an uncoupler removes the back-pressure and drives oxygen consumption up, while an inhibitor drives it down.' },
  { id:'HUB-CARD-17', t:'Why ammonia, not ammonium, is the dangerous form',
    d:'At blood pH almost all waste nitrogen sits as charged NH4+, but a small neutral NH3 fraction always exists alongside it, and only that uncharged form crosses the blood-brain barrier freely \u2014 the same pKa-versus-pH logic that lets 2,4-dinitrophenol cross the mitochondrial membrane.' },
  { id:'HUB-CARD-18', t:'Two shuttles, one job: getting nitrogen or electrons to the liver',
    d:'The glucose-alanine cycle carries nitrogen from muscle to liver as alanine so it can be built into urea; the Cori cycle carries carbon from muscle to liver as lactate so it can be rebuilt into glucose. Both let muscle dump a byproduct and let the liver do the expensive part.' },
  { id:'HUB-CARD-19', t:'One amino acid, two hormone systems',
    d:'Tyrosine is iodinated and coupled into thyroid hormone, and separately hydroxylated and decarboxylated into the catecholamines \u2014 two hormone families with unrelated receptors and effects, built from the same starting ring.' }
];

var POOL = [
  {
    id: 'HUB-001',
    m: 'aminoacids',
    area: 'Ionization, pH and charge',
    level: 'concept',
    stem: 'Histidine appears in the active site of many enzymes that shuttle protons at body pH. Which property of its side chain supports that role?',
    options: [
      'An imidazole pKa close to physiological pH',
      'A carboxylate pKa close to four',
      'A thiol pKa close to eight',
      'A guanidinium pKa close to twelve'
    ],
    answer: 0,
    why: 'A group can donate and accept protons readily when its pKa sits near the surrounding pH, because both forms are present together. Imidazole has a pKa around 6, so at pH 7.4 histidine can work in either direction. A carboxylate at pH 7.4 is fully deprotonated and a guanidinium fully protonated, so neither moves protons well at that pH.'
  },
  {
    id: 'HUB-002',
    m: 'hemoglobin',
    area: 'Structure and function across proteins',
    level: 'application',
    stem: 'In sickle cell disease a valine sits where a glutamate belongs on the outside of the beta chain. Which property of that swap explains the fibers that form at low oxygen tension?',
    options: [
      'A charged surface position becomes a hydrophobic patch',
      'A hydrophobic core position becomes a charged patch',
      'A polar surface position gains a disulfide bridge',
      'A hydrophobic core position gains a disulfide bridge'
    ],
    answer: 0,
    why: 'Glutamate carries a negative charge and keeps that part of the surface soluble. Valine is hydrophobic, so the surface now carries a greasy patch that docks into a complementary pocket on a neighboring deoxygenated molecule. Repeating that contact builds the fiber. Nothing about the substitution involves cysteine, so a disulfide bridge cannot form.'
  },
  {
    id: 'HUB-003',
    m: 'enzymes',
    area: 'Catalysis and kinetics in context',
    level: 'integration',
    stem: 'A drug binds reversibly at the active site of an enzyme, and its effect fades as substrate concentration climbs. Which pattern appears in the kinetic constants?',
    options: [
      'A higher apparent Km with an unchanged Vmax',
      'A lower apparent Km with an unchanged Vmax',
      'An unchanged apparent Km with a lower Vmax',
      'A lower apparent Km with a lower Vmax'
    ],
    answer: 0,
    why: 'Competition for the same site means more substrate is needed to reach half-maximal velocity, which raises apparent Km. Because enough substrate can still outcompete the drug, the enzyme reaches the same maximum rate, so Vmax holds. A drop in Vmax with steady Km is the signature of a non-competitive inhibitor instead.'
  },
  {
    id: 'HUB-004',
    m: 'hemoglobin',
    area: 'Cooperativity and allosteric control',
    level: 'integration',
    stem: 'A person acclimated to high altitude has raised red-cell 2,3-BPG. What happens to oxygen affinity, and to delivery in tissue?',
    options: [
      'The curve shifts right and unloading improves',
      'The curve shifts left and unloading improves',
      'The curve shifts right and unloading falls',
      'The curve shifts left and unloading falls'
    ],
    answer: 0,
    why: '2,3-BPG binds in the central cavity of the deoxygenated form and stabilizes it, which lowers affinity. Lower affinity is drawn as a rightward shift, and it means more oxygen is given up at the low tensions found in tissue. That trade is worth making at altitude, where the lung still loads hemoglobin reasonably well on the flat upper part of the curve.'
  },
  {
    id: 'HUB-005',
    m: 'signaling',
    area: 'Signal amplification and control',
    level: 'application',
    stem: 'Cholera toxin locks the Gs alpha subunit of intestinal cells in its switched-on form. Which downstream result follows?',
    options: [
      'Sustained cAMP production and steady chloride secretion',
      'Brief cAMP production followed by chloride uptake',
      'Sustained IP3 production and steady calcium uptake',
      'Brief IP3 production followed by calcium release'
    ],
    answer: 0,
    why: 'Gs alpha switches itself off by hydrolyzing its bound GTP. The toxin blocks that hydrolysis, so adenylyl cyclase keeps running and cAMP stays high. Protein kinase A then holds the CFTR chloride channel open, and water follows the chloride into the gut lumen. IP3 belongs to the Gq branch, which this toxin leaves alone.'
  },
  {
    id: 'HUB-006',
    m: 'signaling',
    area: 'Membranes, gradients and energy',
    level: 'integration',
    stem: 'Digoxin slows the sodium-potassium ATPase in cardiac muscle, and contractile force rises. Which sequence links the two?',
    options: [
      'A smaller sodium gradient limits calcium export',
      'A larger sodium gradient speeds calcium export',
      'A smaller potassium gradient limits calcium entry',
      'A larger potassium gradient speeds calcium entry'
    ],
    answer: 0,
    why: 'The sodium-calcium exchanger is a secondary active transporter: it pushes calcium out of the cell using the inward sodium gradient as its energy source. Slowing the pump shrinks that gradient, so the exchanger works less hard, calcium accumulates inside the cell, and each contraction is stronger. This is the whole mechanism of a cardiac glycoside in one line.'
  },
  {
    id: 'HUB-007',
    m: 'aminoacids',
    area: 'Structure and function across proteins',
    level: 'concept',
    stem: 'Which residue is found at the ends of an alpha helix rather than inside its length?',
    options: [
      'Proline',
      'Alanine',
      'Leucine',
      'Glutamine'
    ],
    answer: 0,
    why: 'Proline\u2019s side chain loops back onto its own backbone nitrogen, so that nitrogen has no hydrogen to donate to the i-4 carbonyl, and the ring also kinks the chain. Both effects break the repeating hydrogen-bond pattern a helix depends on. It sits comfortably at a terminus or in a turn, where that kink is useful rather than disruptive.'
  },
  {
    id: 'HUB-008',
    m: 'hemoglobin',
    area: 'Ionization, pH and charge',
    level: 'application',
    stem: 'Working muscle pours lactate and carbon dioxide into the capillary bed around it. How does hemoglobin behave there?',
    options: [
      'It releases oxygen more readily as pH falls',
      'It holds oxygen more tightly as pH falls',
      'It releases oxygen more readily as pH climbs',
      'It holds oxygen more tightly as pH climbs'
    ],
    answer: 0,
    why: 'This is the Bohr effect. Protons bind to histidine residues on the globin chains and stabilize the low-affinity deoxygenated form, so oxygen is given up more easily exactly where metabolism is producing acid. Carbon dioxide contributes twice over, as carbonic acid and by forming carbamates on the amino termini.'
  },
  {
    id: 'HUB-009',
    m: 'enzymes',
    area: 'Signal amplification and control',
    level: 'integration',
    stem: 'Epinephrine raises cAMP in a liver cell, and glycogen phosphorylase activity climbs within seconds. Which mechanism accounts for that speed?',
    options: [
      'Covalent phosphorylation by a kinase cascade',
      'Fresh synthesis of enzyme protein by ribosomes',
      'Competitive displacement of a bound inhibitor',
      'Irreversible cleavage of a signal peptide'
    ],
    answer: 0,
    why: 'Protein kinase A phosphorylates phosphorylase kinase, which phosphorylates glycogen phosphorylase. Covalent modification of enzyme that is already present takes seconds; making new protein takes hours, which is far too slow for an adrenaline response. Signal-peptide cleavage happens once during protein trafficking and has no regulatory role here.'
  },
  {
    id: 'HUB-010',
    m: 'aminoacids',
    area: 'Ionization, pH and charge',
    level: 'concept',
    stem: 'A plasma protein has an isoelectric point of 4.5. What net charge does it carry in blood at pH 7.4?',
    options: [
      'Negative',
      'Positive',
      'Neutral',
      'Zwitterionic'
    ],
    answer: 0,
    why: 'Above its isoelectric point a protein has lost more protons than it has gained, so the net charge is negative. Below it the protein is net positive, and at the isoelectric point itself the charges cancel. This is what decides which way a protein travels during electrophoresis and how it binds an ion-exchange column.'
  },
  {
    id: 'HUB-011',
    m: 'signaling',
    area: 'Membranes, gradients and energy',
    level: 'application',
    stem: 'Intestinal cells take up glucose from a dilute lumen into a cytosol that already holds more of it, using SGLT1. Which source supplies the energy?',
    options: [
      'The inward sodium gradient',
      'Direct ATP hydrolysis by SGLT1',
      'The outward potassium gradient',
      'Direct GTP hydrolysis by SGLT1'
    ],
    answer: 0,
    why: 'SGLT1 is a symporter: sodium moving down its own steep electrochemical gradient drags glucose along with it, uphill. The transporter itself spends no nucleotide. The gradient it feeds on was built by the sodium-potassium ATPase on the basolateral surface, which is where the ATP is spent instead.'
  },
  {
    id: 'HUB-012',
    m: 'hemoglobin',
    area: 'Clinical and pharmacologic integration',
    level: 'integration',
    stem: 'Carbon monoxide occupies part of the heme sites in a patient. Which effect appears at the sites that remain free?',
    options: [
      'They hold oxygen more tightly and release less',
      'They hold oxygen less tightly and release more',
      'They hold oxygen more tightly and release more',
      'They hold oxygen less tightly and release less'
    ],
    answer: 0,
    why: 'Carbon monoxide poisoning does two separate kinds of harm. It removes carrying capacity, and through cooperativity the occupied sites also push the remaining subunits into the high-affinity form, which shifts the curve left. The blood that is still carrying oxygen therefore gives less of it up in tissue, which is why the patient is worse off than an equivalent anaemia would suggest.'
  },
  {
    id: 'HUB-013',
    m: 'enzymes',
    area: 'Catalysis and kinetics in context',
    level: 'concept',
    stem: 'Two enzymes act on the same substrate, present at a level well below either Km. Which value predicts which enzyme converts more of it?',
    options: [
      'The ratio of kcat to Km',
      'The value of Vmax alone',
      'The value of Km alone',
      'The ratio of Vmax to kcat'
    ],
    answer: 0,
    why: 'Far below saturation the rate depends on both how tightly the enzyme captures a rare substrate molecule and how fast it processes it once caught. kcat/Km, the specificity constant, combines exactly those two things, which is why it is the fair way to rank two enzymes competing for the same scarce substrate. Vmax describes behavior at saturation, which is the opposite situation.'
  },
  {
    id: 'HUB-014',
    m: 'aminoacids',
    area: 'Structure and function across proteins',
    level: 'application',
    stem: 'A secreted protein holds its fold in the oxidizing space outside the cell. Which bond type depends on that oxidizing environment?',
    options: [
      'Disulfide bridges between cysteine residues',
      'Hydrogen bonds between backbone amide groups',
      'Salt bridges between charged side chains',
      'Hydrophobic contacts within the folded core'
    ],
    answer: 0,
    why: 'A disulfide is a covalent link formed by oxidizing two cysteine thiols. The cytosol is kept reducing by glutathione, so those bonds are pulled apart there, while the extracellular space and the endoplasmic reticulum lumen are oxidizing enough to keep them. The other three interactions are non-covalent and occur in proteins on both sides of the membrane.'
  },
  {
    id: 'HUB-015',
    m: 'signaling',
    area: 'Signal amplification and control',
    level: 'integration',
    stem: 'A handful of bound hormone molecules produce millions of second-messenger molecules inside a cell. Which feature of the cascade produces that gain?',
    options: [
      'Each active step switches on many copies of the next',
      'Each active step switches on one copy of the next',
      'The hormone stays bound to its receptor for hours',
      'The messenger diffuses faster than the hormone does'
    ],
    answer: 0,
    why: 'Amplification comes from the catalytic nature of each stage. One occupied receptor activates many G proteins, each activated cyclase makes many cAMP molecules, and each kinase phosphorylates many targets. Multiplying those factors together is what turns a picomolar hormone signal into a large intracellular response. A one-to-one relay would pass the signal on without any gain.'
  },
  {
    id: 'HUB-016',
    m: 'hemoglobin',
    area: 'Cooperativity and allosteric control',
    level: 'application',
    stem: 'Myoglobin holds its ligand tightly across a wide range of partial pressures. Why does that make it a poor blood transporter?',
    options: [
      'It releases little oxygen at tissue tensions',
      'It takes up little oxygen inside the lung',
      'It carries four oxygen molecules per subunit',
      'It sheds its iron during each binding cycle'
    ],
    answer: 0,
    why: 'A hyperbolic curve is already near saturation at tissue tensions, so a carrier built that way loads well but keeps almost everything it loaded. Hemoglobin\u2019s sigmoid curve solves this: cooperativity makes it a poor binder at low tension and a good one at high tension, so the difference between lung and tissue becomes a large delivered fraction. Myoglobin\u2019s tight grip suits storage in muscle instead.'
  },
  {
    id: 'HUB-017',
    m: 'enzymes',
    area: 'Clinical and pharmacologic integration',
    level: 'integration',
    stem: 'A statin resembles the natural substrate of HMG-CoA reductase in both shape and charge. Which consequence follows from that resemblance?',
    options: [
      'It occupies the active site and blocks turnover',
      'It binds a distant site and alters the fold',
      'It is converted to product and consumed',
      'It joins the enzyme through a permanent bond'
    ],
    answer: 0,
    why: 'Structural mimicry lets a drug fit the pocket the substrate was shaped for, so it competes for occupancy without being processed. That is the definition of a competitive inhibitor, and it is why raising substrate levels weakens such a drug. Binding at a distant site would make it allosteric, and a permanent covalent link would make it irreversible; neither describes a statin.'
  },
  {
    id: 'HUB-018',
    m: 'signaling',
    area: 'Membranes, gradients and energy',
    level: 'concept',
    stem: 'Water crosses some cell membranes far faster than simple diffusion through the bilayer would predict. Which protein feature accounts for the speed?',
    options: [
      'A continuous pore that stays open',
      'A binding site that alternates sides',
      'A pump that spends ATP per cycle',
      'A vesicle that fuses with the surface'
    ],
    answer: 0,
    why: 'Aquaporins are channels: an open, selective path that molecules stream through without the protein changing shape for each one. Carriers must bind, switch conformation and release for every molecule, which caps their throughput orders of magnitude lower. Neither channels nor carriers spend ATP, and neither moves anything against a gradient.'
  },
  {
    id: 'HUB-019',
    m: 'aminoacids',
    area: 'Catalysis and kinetics in context',
    level: 'application',
    stem: 'Chymotrypsin forms a short-lived covalent link with its substrate partway through turnover. Which residue supplies the attacking group?',
    options: [
      'Serine',
      'Leucine',
      'Valine',
      'Phenylalanine'
    ],
    answer: 0,
    why: 'The catalytic triad of aspartate, histidine and serine works together: aspartate orients histidine, histidine pulls the proton off the serine hydroxyl, and the resulting alkoxide attacks the carbonyl carbon of the peptide bond to give the acyl-enzyme intermediate. The other three residues have hydrocarbon side chains with no group capable of that attack; they line the specificity pocket instead.'
  },
  {
    id: 'HUB-020',
    m: 'hemoglobin',
    area: 'Clinical and pharmacologic integration',
    level: 'integration',
    stem: 'Blood in the umbilical vein carries a hemoglobin variant that binds 2,3-BPG weakly. How does that support gas transfer across the placenta?',
    options: [
      'The fetal form holds oxygen more tightly than the adult form',
      'The fetal form holds oxygen less tightly than the adult form',
      'The fetal form carries more heme groups than the adult form',
      'The fetal form carries fewer heme groups than the adult form'
    ],
    answer: 0,
    why: 'HbF replaces the beta chains with gamma chains, whose central cavity binds 2,3-BPG poorly. With less of that stabilizer holding the low-affinity form, HbF sits left of the maternal curve, so at the same oxygen tension it takes oxygen from maternal blood. Both forms are tetramers with four heme groups, so carrying capacity is unchanged.'
  },
  {
    id: 'HUB-021',
    m: 'nucleotides',
    area: 'Cooperativity and allosteric control',
    level: 'concept',
    stem: 'Ribonucleotide reductase slows down when dATP occupies a position well away from where catalysis happens. Which form of regulation does that arrangement describe?',
    options: [
      'Allosteric inhibition by an end product',
      'Competitive inhibition by an end product',
      'Covalent inactivation by an end product',
      'Irreversible inactivation by an end product'
    ],
    answer: 0,
    why: 'A ligand that binds somewhere other than the catalytic pocket and changes activity from a distance is acting allosterically, and dATP is a downstream product of the pathway this enzyme feeds, so this is end-product feedback. A competitive inhibitor would have to sit in the catalytic pocket itself. Covalent and irreversible inhibitors change the enzyme chemically, so activity could not return simply by letting dATP fall, which is exactly what happens here once the cell starts spending its deoxynucleotides on DNA.'
  },
  {
    id: 'HUB-022',
    m: 'nucleotides',
    area: 'Signal amplification and control',
    level: 'application',
    stem: 'Adenylyl cyclase turns ATP into a cyclic second messenger by looping the remaining phosphate back onto a free hydroxyl of the same ribose. Which position carries that hydroxyl?',
    options: [
      'Carbon 3 prime',
      'Carbon 2 prime',
      'Carbon 1 prime',
      'Carbon 5 prime'
    ],
    answer: 0,
    why: 'Cyclic AMP is adenosine 3 prime, 5 prime-cyclic monophosphate. The phosphate that stays behind on carbon 5 prime bonds to the hydroxyl on carbon 3 prime, closing the ring and releasing pyrophosphate. Carbon 2 prime does carry a free hydroxyl in ribose, but the enzyme does not use it. Carbon 1 prime is bonded to the base and carbon 5 prime already holds the phosphate, so neither offers a free hydroxyl for the ring to close on.'
  },
  {
    id: 'HUB-023',
    m: 'nucleotides',
    area: 'Ionization, pH and charge',
    level: 'application',
    stem: 'Uric acid stones form more readily when the urine is acidic. Which change in the compound accounts for that?',
    options: [
      'The protonated form predominates and dissolves poorly',
      'The deprotonated form predominates and dissolves poorly',
      'The protonated form predominates and dissolves readily',
      'The deprotonated form predominates and dissolves readily'
    ],
    answer: 0,
    why: 'Uric acid has a pKa near 5.4. Above that pH most of it exists as the urate anion, which carries a charge and stays in solution; below it the neutral protonated acid takes over, and that form is far less soluble, so crystals grow in the tubule. This is the same reasoning applied to amino acid side chains: pH relative to pKa decides which form dominates, and charge decides how the molecule behaves in water. It is also why raising urine pH is used to prevent these stones.'
  },
  {
    id: 'HUB-024',
    m: 'nucleotides',
    area: 'Clinical and pharmacologic integration',
    level: 'integration',
    stem: 'High-dose methotrexate can be reversed by giving a large supply of reduced folate. Which description of the drug binding to dihydrofolate reductase fits that response?',
    options: [
      'Reversible, and outcompeted by a high folate supply',
      'Reversible, and unaffected by a high folate supply',
      'Covalent, and outcompeted by a high folate supply',
      'Covalent, and unaffected by a high folate supply'
    ],
    answer: 0,
    why: 'Methotrexate resembles folate closely and occupies the same pocket, but the interaction is non-covalent, so flooding the cell with a competing folate shifts occupancy back toward the natural ligand and the enzyme resumes work. That is what makes rescue therapy possible at all, and why its timing matters. A covalent inhibitor would leave the enzyme permanently disabled and no amount of added folate would restore it.'
  },
  {
    id: 'HUB-025',
    m: 'nucleotides',
    area: 'Clinical and pharmacologic integration',
    level: 'integration',
    stem: 'A patient taking a folate antagonist develops enlarged, immature red cell precursors in the marrow. Which imbalance produces that appearance?',
    options: [
      'DNA synthesis lags while cytoplasmic growth continues',
      'Cytoplasmic growth lags while DNA synthesis continues',
      'Heme synthesis lags while globin synthesis continues',
      'Globin synthesis lags while heme synthesis continues'
    ],
    answer: 0,
    why: 'Folate carries the one-carbon unit that thymidylate synthase needs to make dTMP, so blocking folate metabolism starves the cell of a DNA precursor. Protein and RNA synthesis do not depend on that step, so the cytoplasm keeps enlarging while nuclear division stalls, and the precursor ends up large with an immature nucleus. The two heme-and-globin options describe iron deficiency and thalassemia instead, where the cells produced are small rather than large.'
  },
  {
    id: 'HUB-026',
    m: 'nucleotides',
    area: 'Catalysis and kinetics in context',
    level: 'integration',
    stem: 'Xanthine oxidase converts allopurinol into a product that then stays bound to the enzyme itself. Which description fits that behavior?',
    options: [
      'A substrate is turned into an inhibitor by its own target',
      'A substrate is turned into a product with no further effect',
      'An inhibitor binds a site away from the catalytic pocket',
      'An inhibitor is released unchanged before catalysis begins'
    ],
    answer: 0,
    why: 'Allopurinol is close enough to hypoxanthine that xanthine oxidase accepts it as a substrate and hydroxylates it to oxypurinol, which then binds the enzyme tightly and holds it out of action. Inhibition therefore deepens the more the enzyme works, which is the signature of a mechanism-based inhibitor. The result is less urate and more hypoxanthine and xanthine, both of which are more soluble and are cleared in the urine.'
  },
  {
    id: 'HUB-027',
    m: 'glycogen',
    area: 'Cooperativity and allosteric control',
    level: 'concept',
    stem: 'Muscle glycogen phosphorylase b becomes more active when AMP binds at a position away from the catalytic pocket. Which behavior of hemoglobin follows the same principle?',
    options: [
      'Oxygen binding at one subunit raises affinity at the others',
      'Oxygen binding at one subunit lowers affinity at the others',
      'Oxygen binding at one subunit prevents any further binding',
      'Oxygen binding at one subunit alters the number of heme groups'
    ],
    answer: 0,
    why: 'Both proteins are built from subunits that share a single conformational equilibrium, so a ligand landing anywhere on the assembly shifts the whole thing between a low-activity, low-affinity shape and a high-activity, high-affinity one. In phosphorylase the ligand is AMP and the readout is catalytic rate; in hemoglobin it is oxygen and the readout is affinity at the remaining sites. In both cases the effect is positive rather than blocking, and neither event changes how many binding sites the protein has.'
  },
  {
    id: 'HUB-028',
    m: 'glycogen',
    area: 'Signal amplification and control',
    level: 'integration',
    stem: 'A rise in cAMP inside a hepatocyte speeds glycogen breakdown and slows glycogen synthesis at the same time. Which arrangement produces both results?',
    options: [
      'One kinase acts on both arms, with opposite consequences',
      'One kinase acts on both arms, with identical consequences',
      'One kinase acts on the storage arm alone',
      'One kinase acts on the release arm alone'
    ],
    answer: 0,
    why: 'Protein kinase A is the single output of the cAMP signal, and a phosphate group means opposite things on the two enzymes: it switches glycogen synthase off, and through phosphorylase kinase it switches glycogen phosphorylase on. Wiring both arms to one messenger is what stops the cell being told to build and break down at the same time. Insulin reverses both arms together for the same reason, by activating the phosphatase that strips those phosphates off.'
  },
  {
    id: 'HUB-029',
    m: 'glycogen',
    area: 'Membranes, gradients and energy',
    level: 'application',
    stem: 'Skeletal muscle keeps its glycogen for its own use and adds no glucose to the blood. Which property of the molecule it releases accounts for that?',
    options: [
      'It carries a phosphate group and cannot cross the membrane',
      'It carries a phosphate group and crosses the membrane freely',
      'It lacks a phosphate group and cannot cross the membrane',
      'It lacks a phosphate group and crosses the membrane freely'
    ],
    answer: 0,
    why: 'Phosphorolysis yields glucose-1-phosphate, which becomes glucose-6-phosphate, and that phosphate group leaves the molecule charged, so it cannot slip through the bilayer and no glucose transporter will carry it. Liver solves the problem with glucose-6-phosphatase, which removes the phosphate so free glucose can leave through GLUT2. Muscle has no such enzyme, so the carbon stays inside and is burned locally. The same trapping happens to any glucose that hexokinase has already phosphorylated.'
  },
  {
    id: 'HUB-030',
    m: 'glycogen',
    area: 'Structure and function across proteins',
    level: 'application',
    stem: 'Glycogenin starts a new particle by attaching the first glucose residues to one of its own side chains. Which side chain accepts them?',
    options: [
      'The phenol group of a tyrosine',
      'The thiol group of a cysteine',
      'The imidazole group of a histidine',
      'The carboxylate group of a glutamate'
    ],
    answer: 0,
    why: 'Glycogenin adds glucose to the hydroxyl on a tyrosine phenol ring, building a primer of roughly eight residues that glycogen synthase can then extend. Tyrosine is the one aromatic residue carrying a hydroxyl, which is what makes it usable as an anchor. Cysteine thiols form disulfide bridges, histidine imidazole shuttles protons, and glutamate carboxylates form salt bridges, so none of those three serves as the attachment point here.'
  },
  {
    id: 'HUB-031',
    m: 'glycogen',
    area: 'Catalysis and kinetics in context',
    level: 'application',
    stem: 'After a meal the liver takes up glucose in proportion to how much arrives, while muscle takes up no more once blood levels are modest. Which difference in the enzyme that phosphorylates glucose explains this?',
    options: [
      'A higher Km, so uptake tracks a wide range of levels',
      'A lower Km, so uptake tracks a wide range of levels',
      'A higher Km, so uptake saturates at low levels',
      'A lower Km, so uptake saturates at low levels'
    ],
    answer: 0,
    why: 'The liver enzyme has a Km well above normal blood glucose, so its rate keeps climbing as portal glucose climbs after a meal, and the liver acts as a buffer for the rest of the body. The muscle enzyme has a Km far below normal blood glucose, so it is already near maximum at rest and cannot speed up much when more arrives. A low Km means early saturation, which is the correct description of muscle rather than liver, so the two options pairing a low Km with a wide working range or a high Km with early saturation contradict what Km means.'
  },
  {
    id: 'HUB-032',
    m: 'glycogen',
    area: 'Clinical and pharmacologic integration',
    level: 'integration',
    stem: 'A child with glucose-6-phosphatase deficiency has a raised serum urate concentration. Which link accounts for that finding?',
    options: [
      'Trapped glucose-6-phosphate feeds ribose-5-phosphate production',
      'Trapped glucose-6-phosphate feeds carbamoyl phosphate production',
      'Increased glycogen stores raise purine salvage activity',
      'Increased glycogen stores raise pyrimidine breakdown'
    ],
    answer: 0,
    why: 'Without the phosphatase, glucose-6-phosphate cannot be released as free glucose and builds up, so more of it is pushed through the pentose phosphate pathway. That raises ribose-5-phosphate, then PRPP, and PRPP drives the first committed step of purine synthesis, so more purine is made and more urate appears as those purines are broken down. Lactate accumulating in the same patients makes it worse by competing with urate for secretion in the kidney tubule. Urate comes from purine breakdown, not from pyrimidine breakdown, and carbamoyl phosphate belongs to the pyrimidine route.'
  },
  {
    id: 'HUB-033',
    m: 'cac',
    area: 'Catalysis and kinetics in context',
    level: 'application',
    stem: 'Malonate closely resembles succinate in shape and charge and slows succinate dehydrogenase. Adding excess succinate restores the enzyme\u2019s rate. Which kind of inhibition does malonate produce?',
    options: [
      'Competitive inhibition at the active site',
      'Noncompetitive inhibition at a separate site',
      'Irreversible inhibition through a covalent bond',
      'Uncompetitive inhibition of the enzyme-substrate complex'
    ],
    answer: 0,
    why: 'Malonate is a structural mimic of succinate that occupies the same active site, so raising substrate concentration lets succinate outcompete it and full activity returns \u2014 the signature behavior of a competitive inhibitor, a higher apparent Km with an unchanged Vmax. This was one of the original experiments used to argue that an active site is a physical pocket shaped to fit its substrate, since only a close structural match could block the enzyme this way. Noncompetitive and uncompetitive inhibitors act at sites distinct from where substrate binds and are not reversed by adding more substrate, and a covalent inhibitor would not be relieved by substrate at all.'
  },
  {
    id: 'HUB-034',
    m: 'cac',
    area: 'Structure and function across proteins',
    level: 'application',
    stem: 'Alpha-ketoglutarate is converted to glutamate by transferring an amino group from another amino acid, using a cofactor derived from vitamin B6. Which chemical step does that cofactor perform?',
    options: [
      'It forms a Schiff base with the amino acid\u2019s amino group',
      'It forms a disulfide bond with the amino acid\u2019s side chain',
      'It donates a phosphate group to the amino acid\u2019s carboxylate',
      'It abstracts a proton from the amino acid\u2019s aromatic ring'
    ],
    answer: 0,
    why: 'Pyridoxal phosphate binds the incoming amino acid\u2019s alpha-amino group as a Schiff base, and the resulting imine stabilizes the carbanion formed when the alpha-hydrogen is removed, which lets the amino group move onto the cofactor and then onto alpha-ketoglutarate. This one mechanism runs every transamination reaction that links amino acid metabolism to the cycle, including the step that lets protein breakdown feed gluconeogenesis. Disulfide bonds link two cysteine thiols and play no part in this cofactor\u2019s chemistry, and pyridoxal phosphate neither transfers phosphate nor deprotonates an aromatic ring.'
  },
  {
    id: 'HUB-035',
    m: 'cac',
    area: 'Membranes, gradients and energy',
    level: 'integration',
    stem: 'Type I, slow-twitch muscle fibers are packed with mitochondria and stain darkly for succinate dehydrogenase activity. Which other feature is expected to be elevated in the same fibers, and why?',
    options: [
      'Myoglobin content, because it buffers a steady oxygen supply to the mitochondria',
      'Myoglobin content, because it transports oxygen from the lungs to the fiber',
      'Hemoglobin content, because it buffers a steady oxygen supply to the mitochondria',
      'Hemoglobin content, because it transports oxygen from the lungs to the fiber'
    ],
    answer: 0,
    why: 'Myoglobin holds oxygen tightly and releases it only once local tension drops very low, so it acts as a short-term reservoir sitting right next to the mitochondria that need a steady supply. A fiber built to run oxidative phosphorylation and a full citric acid cycle continuously, rather than leaning on stored glycogen and fast glycolysis, needs exactly that buffer, which is why slow-twitch fibers are visibly darker and myoglobin-rich. Hemoglobin never leaves the red blood cell and stays confined to the capillary; it is the transporter that gets oxygen to the tissue, while myoglobin is the local storage molecule inside the fiber itself.'
  },
  {
    id: 'HUB-036',
    m: 'cac',
    area: 'Signal amplification and control',
    level: 'concept',
    stem: 'Phosphorylation by one kinase switches pyruvate dehydrogenase off, while phosphorylation by a different kinase switches glycogen phosphorylase on. Which property of the two enzymes explains why the same chemical change produces opposite outcomes?',
    options: [
      'Each enzyme\u2019s own conformation determines what a phosphate group there does',
      'The two kinases attach chemically different types of phosphate group',
      'The two enzymes are located in different cellular compartments',
      'The two enzymes accept the phosphate onto different nucleotide cofactors'
    ],
    answer: 0,
    why: 'A phosphate group changes an enzyme\u2019s local charge and shape, and whether that change favors the active or inactive conformation is a property of the specific protein being modified rather than of the phosphate itself, so the same chemical group produces opposite functional outcomes on different scaffolds. Both PDH kinase and phosphorylase kinase transfer phosphate from ATP onto a serine residue by the same chemistry, so the modification itself is identical in both cases and only its structural consequence differs. Compartment and choice of donor nucleotide have no bearing on why the two enzymes land in opposite active states.'
  },
  {
    id: 'HUB-037',
    m: 'cac',
    area: 'Cooperativity and allosteric control',
    level: 'integration',
    stem: 'Isocitrate dehydrogenase speeds up when ADP occupies a site away from its catalytic pocket, and slows when ATP occupies that same site. Which enzyme discussed elsewhere in the course is controlled by an analogous arrangement?',
    options: [
      'Ribonucleotide reductase, slowed by dATP at a distant site',
      'Chymotrypsin, slowed by product accumulating in its own pocket',
      'Lactase, slowed by low pH in the digestive tract',
      'Carbonic anhydrase, slowed by a shortage of substrate'
    ],
    answer: 0,
    why: 'Both enzymes are regulated by a nucleotide that binds somewhere other than the catalytic site and shifts the whole protein toward a less active shape \u2014 ADP versus ATP for isocitrate dehydrogenase, and dATP for ribonucleotide reductase. In each case the controlling molecule is chemically related to the pathway\u2019s own output, so the enzyme is held back by evidence that enough product already exists. The other three options describe ordinary effects at the catalytic site itself or in the surrounding environment, not a distant regulatory site, so none of them is allosteric in the sense this question is asking about.'
  },
  {
    id: 'HUB-038',
    m: 'cac',
    area: 'Ionization, pH and charge',
    level: 'application',
    stem: 'A sprinter\u2019s muscle produces lactate rapidly, and intracellular pH falls into the acidic range within seconds. At that pH, which form of the molecule dominates, and does the molecule itself bring about most of the acidification?',
    options: [
      'The deprotonated anion dominates, and protons released elsewhere in glycolysis explain most of the drop',
      'The protonated acid dominates, and its own dissociation explains most of the drop',
      'The deprotonated anion dominates, and its own formation explains most of the drop',
      'The protonated acid dominates, and protons released elsewhere in glycolysis explain most of the drop'
    ],
    answer: 0,
    why: 'Lactic acid has a pKa near 3.9, far below any pH the cytosol reaches even during intense exercise, so almost all of it exists as the lactate anion rather than the protonated acid. The protons that actually lower pH come mainly from ATP hydrolysis during rapid glycolysis, not from lactate itself dissociating, since lactate dehydrogenase already releases it in its deprotonated form. This is the same reasoning used everywhere else in the course: charge state depends on pH relative to pKa, and a molecule sitting far from its own pKa exists almost entirely in one form. The common name \u201clactic acidosis\u201d obscures that the protonated acid barely exists at physiological pH at all.'
  },
  {
    id: 'HUB-039',
    m: 'oxphos',
    area: 'Structure and function across proteins',
    level: 'integration',
    stem: 'Cytochrome c and hemoglobin both carry an iron atom held in a heme group, yet each protein needs that iron in a different oxidation state to do its job. Which pairing is correct?',
    options: [
      'Cytochrome c cycles between Fe2+ and Fe3+, while hemoglobin stays Fe2+',
      'Cytochrome c stays Fe2+, while hemoglobin cycles between Fe2+ and Fe3+',
      'Both cycle between Fe2+ and Fe3+ as they carry out their roles',
      'Both stay as Fe2+ as they carry out their roles'
    ],
    answer: 0,
    why: 'Cytochrome c exists to move electrons, so its iron must change oxidation state on every pass \u2014 it accepts one electron from complex III as Fe3+ and gives it up to complex IV as Fe2+. Hemoglobin exists to carry a molecule rather than an electron, and only ferrous iron binds oxygen reversibly; oxidation to Fe3+ produces methemoglobin, which holds no oxygen at all. The same cofactor is doing two different chemical jobs, and the protein around it determines which one. This is worth noticing because the heme group is often taught as though it always means oxygen transport.'
  },
  {
    id: 'HUB-040',
    m: 'oxphos',
    area: 'Ionization, pH and charge',
    level: 'application',
    stem: '2,4-dinitrophenol has a phenol pKa near 4, and both its protonated and deprotonated forms are lipid soluble enough to cross the inner mitochondrial membrane. Which behavior allows it to collapse the proton gradient?',
    options: [
      'It binds a proton on the intermembrane side and releases it in the matrix',
      'It binds a proton in the matrix and releases it on the intermembrane side',
      'It occupies the proton channel of ATP synthase and holds it open',
      'It occupies the oxygen site of complex IV and blocks its reduction'
    ],
    answer: 0,
    why: 'The molecule works as a ferry. In the more acidic intermembrane space a fraction of it picks up a proton, the neutral form crosses the membrane, and in the more alkaline matrix it gives that proton up and returns as the anion. What makes this possible is that the two nitro groups spread the negative charge across the ring, so even the deprotonated form is lipid soluble \u2014 something an ordinary carboxylic acid cannot manage. This is the same pKa-versus-pH reasoning used for amino acid side chains, applied to a drug rather than a protein.'
  },
  {
    id: 'HUB-041',
    m: 'oxphos',
    area: 'Membranes, gradients and energy',
    level: 'integration',
    stem: 'The sodium-potassium ATPase spends ATP to build an ion gradient, while ATP synthase spends an ion gradient to make ATP. Which statement describes how the two relate?',
    options: [
      'They carry out the same energy conversion in opposite directions',
      'They carry out different energy conversions in the same direction',
      'Both convert chemical bond energy into an ion gradient',
      'Both convert an ion gradient into chemical bond energy'
    ],
    answer: 0,
    why: 'A gradient and a phosphoanhydride bond are two storage formats for the same energy, and cells move between them in both directions. The pump pays ATP to charge a membrane; the synthase discharges a membrane to make ATP. Recognizing this makes secondary active transport easier to place as well, since it spends the gradient a primary pump built, exactly as ATP synthase spends the one the electron transport chain built.'
  },
  {
    id: 'HUB-042',
    m: 'oxphos',
    area: 'Catalysis and kinetics in context',
    level: 'integration',
    stem: 'An inhibitor of complex II is added to respiring mitochondria. Besides electron transport, which pathway is interrupted by that same block?',
    options: [
      'The citric acid cycle, at the oxidation of succinate to fumarate',
      'The citric acid cycle, at the oxidation of malate to oxaloacetate',
      'Glycolysis, at the oxidation of glyceraldehyde 3-phosphate',
      'The pentose phosphate pathway, at the oxidation of glucose 6-phosphate'
    ],
    answer: 0,
    why: 'Complex II is succinate dehydrogenase, which is also step 6 of the citric acid cycle, so a single inhibitor stops two pathways at once. No other electron transport inhibitor does this: rotenone, antimycin A and cyanide all act on complexes that belong to the chain alone, and the cycle continues until NAD+ runs short. Malate dehydrogenase is a cycle enzyme but sits free in the matrix and hands its electrons to NAD+, not to the chain directly.'
  },
  {
    id: 'HUB-043',
    m: 'oxphos',
    area: 'Clinical and pharmacologic integration',
    level: 'integration',
    stem: 'Two patients are brought in from a house fire with lactic acidosis. One has inhaled carbon monoxide and the other hydrogen cyanide. Which finding points to the cyanide exposure?',
    options: [
      'Venous oxygen content is higher than expected',
      'Venous oxygen content is lower than expected',
      'Arterial oxygen content is higher than expected',
      'Arterial oxygen content is lower than expected'
    ],
    answer: 0,
    why: 'The two poisons fail at different points. Carbon monoxide occupies hemoglobin, so oxygen is never picked up in the lung, but the tissues still extract whatever arrives and venous blood returns depleted. Cyanide blocks complex IV, so oxygen is delivered normally and simply cannot be used \u2014 it goes back to the heart still bound, and the venous blood looks arterialized. Both produce lactate because both leave the cell dependent on glycolysis, which is why the acidosis alone does not separate them.'
  },
  {
    id: 'HUB-044',
    m: 'oxphos',
    area: 'Signal amplification and control',
    level: 'concept',
    stem: 'Metformin partially inhibits complex I, so hepatic ATP falls and AMP rises. Which sensor responds to that shift?',
    options: [
      'AMP-activated protein kinase',
      'Protein kinase A',
      'Protein kinase C',
      'Phosphorylase kinase'
    ],
    answer: 0,
    why: 'AMP-activated protein kinase reads the ratio of AMP to ATP directly, which makes it the cell\u2019s energy gauge, and it responds by shutting down expensive pathways such as gluconeogenesis. The other three sit downstream of a receptor instead: protein kinase A responds to cAMP, protein kinase C to diacylglycerol and calcium, and phosphorylase kinase to protein kinase A. This is the mechanism by which a drug aimed at a mitochondrial complex ends up lowering blood glucose.'
  },
  {
    id: 'HUB-045',
    m: 'aametabolism',
    area: 'Ionization, pH and charge',
    level: 'application',
    stem: 'Hyperammonemia from a urea cycle defect injures the brain even though ammonium, not ammonia gas, is the form found in blood at physiologic pH. Which property lets the toxic nitrogen reach brain tissue?',
    options: [
      'A small fraction exists as neutral NH3, which crosses the blood-brain barrier freely',
      'The charged NH4+ ion crosses the blood-brain barrier through a dedicated channel',
      'NH4+ binds directly to hemoglobin and is carried into brain capillaries',
      'NH3 is actively pumped across the blood-brain barrier by an ATP-dependent transporter'
    ],
    answer: 0,
    why: 'Ammonium\u2019s pKa is about 9.25, so at blood pH 7.4 almost all of it exists as charged NH4+ \u2014 but pKa relative to pH also guarantees a small, constant fraction sits as neutral NH3, and that uncharged form is what diffuses freely across the lipid bilayer of the blood-brain barrier, the same reasoning already used for 2,4-dinitrophenol crossing the inner mitochondrial membrane. Once inside brain tissue the ammonia is trapped as glutamine, which drains alpha-ketoglutarate and slows the citric acid cycle there. NH4+ has no dedicated channel or hemoglobin-binding route, and a freely diffusing neutral species needs no pump.'
  },
  {
    id: 'HUB-046',
    m: 'aametabolism',
    area: 'Structure and function across proteins',
    level: 'integration',
    stem: 'Phenylalanine hydroxylase uses tetrahydrobiopterin and O2 to add a hydroxyl group to its substrate. Hepatic cytochrome P450 enzymes carry out a chemically similar reaction on foreign compounds. Which feature do the two enzyme systems share?',
    options: [
      'Both insert one oxygen atom from O2 onto a substrate using a reduced cofactor as an electron donor',
      'Both remove a carboxyl group from their substrate using a reduced cofactor as an electron donor',
      'Both transfer a phosphate group from ATP onto their substrate',
      'Both cleave a peptide bond within their substrate'
    ],
    answer: 0,
    why: 'Both enzyme systems are monooxygenases: they split O2, place one oxygen atom on the substrate as a new hydroxyl group, and reduce the other to water, using electrons supplied by a reduced cofactor \u2014 tetrahydrobiopterin for phenylalanine hydroxylase and NADPH-derived electrons for P450-mediated detoxification. This is part of why the liver, which runs P450 chemistry constantly, is also central to what goes wrong when phenylalanine hydroxylase fails in phenylketonuria. Neither system removes a carboxyl group, transfers phosphate, or cleaves a peptide bond \u2014 those describe decarboxylases, kinases, and proteases instead.'
  },
  {
    id: 'HUB-047',
    m: 'aametabolism',
    area: 'Catalysis and kinetics in context',
    level: 'application',
    stem: 'Argininosuccinate synthetase consumes ATP but releases AMP and pyrophosphate rather than ADP and phosphate. Which other reaction taught elsewhere in the course drives a biosynthetic step forward the same way?',
    options: [
      'Amino acid activation by aminoacyl-tRNA synthetases before protein synthesis',
      'Phosphorylation of glucose by hexokinase',
      'Transfer of phosphate from phosphocreatine to ADP',
      'Removal of a phosphate group by glucose-6-phosphatase'
    ],
    answer: 0,
    why: 'Splitting ATP all the way to AMP and pyrophosphate releases roughly twice the free energy of an ordinary ATP-to-ADP step, and cells reach for that pattern when a reaction has to be pulled hard toward completion \u2014 the pyrophosphate is then hydrolyzed away, removing any path back to the starting materials. Aminoacyl-tRNA synthetases use this identical strategy to attach an amino acid to its tRNA, a step that has to finish before protein synthesis can proceed. Hexokinase and phosphocreatine both operate in the ordinary ATP/ADP currency, and glucose-6-phosphatase is a hydrolysis that consumes no nucleotide at all.'
  },
  {
    id: 'HUB-048',
    m: 'aametabolism',
    area: 'Membranes, gradients and energy',
    level: 'integration',
    stem: 'The malate-aspartate shuttle regenerates cytosolic NAD+ for glycolysis by exchanging aspartate and glutamate across the inner mitochondrial membrane, with a transamination step on each side. Which enzyme family drives that transamination?',
    options: [
      'Aminotransferases, the same family that generates glutamate from alpha-ketoglutarate in peripheral tissue',
      'Aminotransferases, the same family that hydrolyzes peptide bonds during dietary protein digestion',
      'Dehydrogenases, the same family that oxidizes NADH within the electron transport chain',
      'Synthetases, the same family that attaches ammonium to carbamoyl phosphate in the urea cycle'
    ],
    answer: 0,
    why: 'The shuttle\u2019s carbon skeletons cross the membrane as malate and alpha-ketoglutarate/glutamate, and interconverting aspartate with oxaloacetate, and glutamate with alpha-ketoglutarate, is ordinary aminotransferase chemistry \u2014 the same pyridoxal-phosphate-dependent reaction peripheral tissue uses to funnel amino acid nitrogen onto alpha-ketoglutarate before it travels to the liver. Peptide bond hydrolysis is digestion, not transamination; NADH oxidation happens at Complex I, a separate step from the shuttle\u2019s own transamination; and carbamoyl phosphate synthetase is a ligase forming a new bond with ATP, not a transaminase.'
  },
  {
    id: 'HUB-049',
    m: 'aametabolism',
    area: 'Clinical and pharmacologic integration',
    level: 'integration',
    stem: 'A patient with vitamin B12 deficiency develops megaloblastic anemia even when dietary folate is adequate. Impaired activity of which enzyme links the B12 deficiency to a shortage of folate available for DNA synthesis?',
    options: [
      'Methionine synthase, which needs B12 to convert N5-methyl-tetrahydrofolate back to tetrahydrofolate',
      'Methionine synthase, which needs B12 to convert tetrahydrofolate into N5-methyl-tetrahydrofolate',
      'Cystathionine beta-synthase, which needs B12 to combine serine and homocysteine',
      'Phenylalanine hydroxylase, which needs B12 to regenerate tetrahydrobiopterin'
    ],
    answer: 0,
    why: 'Methionine synthase is the only enzyme that converts N5-methyl-tetrahydrofolate back to the tetrahydrofolate the cell needs for other one-carbon reactions, and it requires a B12-derived cofactor to do it. Without B12, folate becomes trapped in its methylated form, so even a folate-replete patient runs short of the tetrahydrofolate that thymidylate synthase needs to make dTMP, and DNA synthesis slows in the rapidly dividing bone marrow, producing large, immature red cells. Cystathionine beta-synthase uses pyridoxal phosphate, not B12, and phenylalanine hydroxylase uses tetrahydrobiopterin, an entirely separate cofactor from folate.'
  },
  {
    id: 'HUB-050',
    m: 'aametabolism',
    area: 'Cooperativity and allosteric control',
    level: 'concept',
    stem: 'Carbamoyl phosphate synthetase I has essentially no activity unless N-acetylglutamate is bound at a site separate from its catalytic pocket. Which enzyme discussed elsewhere in the course is controlled by a comparable arrangement?',
    options: [
      'Glycogen phosphorylase b, switched toward its active conformation by AMP binding away from the catalytic site',
      'Chymotrypsin, activated once its zymogen is cleaved by trypsin',
      'Lactase, whose activity simply tracks the amount of lactose present',
      'Carbonic anhydrase, whose rate tracks the concentration of dissolved CO2'
    ],
    answer: 0,
    why: 'Both enzymes are essentially switched off without their regulator: N-acetylglutamate is an obligate allosteric activator of carbamoyl phosphate synthetase I, binding away from the active site and shifting the enzyme toward a catalytically competent shape, the same way AMP binds glycogen phosphorylase b at a distinct regulatory site and shifts it toward its active conformation. Chymotrypsin\u2019s activation is a one-time covalent cleavage of a zymogen, not a reversible binding event, and lactase and carbonic anhydrase are ordinary enzymes whose rate simply follows substrate availability rather than a distant allosteric switch.'
  },
  {
    id: 'HUB-051',
    m: 'integration',
    area: 'Cooperativity and allosteric control',
    level: 'application',
    stem: 'During intense exercise, contracting muscle produces lactate, heat, and CO2 faster than it does at rest. Which change in hemoglobin\u2019s behavior follows from this shift in the muscle\u2019s local environment?',
    options: [
      'A right shift of the oxygen dissociation curve, releasing more oxygen at the same oxygen tension',
      'A left shift of the oxygen dissociation curve, releasing more oxygen at the same oxygen tension',
      'A right shift of the oxygen dissociation curve, releasing less oxygen at the same oxygen tension',
      'No change in the oxygen dissociation curve, because hemoglobin responds only to oxygen tension itself'
    ],
    answer: 0,
    why: 'Falling pH, rising CO2, and rising temperature are the three signals produced by exercising muscle that all push the oxygen dissociation curve to the right, lowering hemoglobin\u2019s affinity at any given oxygen tension so more oxygen is released exactly where metabolic demand is highest. This is the Bohr effect operating in real time: the tissue working hardest generates the conditions that unload the most oxygen to it. A left shift would raise affinity and withhold oxygen, the opposite of what exercising muscle needs, and hemoglobin\u2019s affinity is well known to respond to more than oxygen tension alone.'
  },
  {
    id: 'HUB-052',
    m: 'integration',
    area: 'Signal amplification and control',
    level: 'integration',
    stem: 'Epinephrine raises cardiac output through beta-1 receptors but, acting through alpha-2 receptors on pancreatic beta cells, suppresses insulin release. Which difference in G-protein coupling explains why the same hormone produces opposite intracellular effects at these two receptors?',
    options: [
      'Beta-1 couples to Gs and raises cAMP, while alpha-2 couples to Gi and lowers cAMP',
      'Beta-1 couples to Gi and lowers cAMP, while alpha-2 couples to Gs and raises cAMP',
      'Both receptors couple to Gs, but only the pancreatic receptor is expressed at high density',
      'Both receptors couple to Gq, but only the cardiac receptor activates protein kinase A'
    ],
    answer: 0,
    why: 'The same hormone produces opposite effects when it binds two receptor subtypes coupled to different G-proteins: beta-1 receptors activate Gs, which stimulates adenylate cyclase and raises cAMP, driving the increase in cardiac rate and force, while alpha-2 receptors activate Gi, which inhibits adenylate cyclase and lowers cAMP \u2014 and lower cAMP in a beta cell means less insulin secretion. The receptor, not the hormone, decides which G-protein and which direction the second messenger moves. Neither receptor pair shares the same coupling in this scenario, and protein kinase A sits downstream of cAMP at both receptor types rather than being selectively activated at only one.'
  },
  {
    id: 'HUB-053',
    m: 'integration',
    area: 'Catalysis and kinetics in context',
    level: 'concept',
    stem: 'Creatinine forms from phosphocreatine at a steady rate for a given person, which is why its urinary excretion is used to estimate kidney filtration. Which description best fits this reaction?',
    options: [
      'A spontaneous, nonenzymatic reaction whose rate depends on the size of the phosphocreatine pool, not on a catalyst',
      'An enzyme-catalyzed reaction whose rate is set by creatine kinase activity',
      'An enzyme-catalyzed reaction whose rate is set by substrate concentration far above the enzyme\u2019s Km',
      'A reaction catalyzed by an enzyme that is itself allosterically regulated by ATP'
    ],
    answer: 0,
    why: 'Creatine and phosphocreatine cyclize to creatinine spontaneously, without an enzyme, which is exactly why the rate stays so constant for a given person: it depends only on how much creatine/phosphocreatine is present in muscle, a quantity that changes very little day to day, rather than on any enzyme\u2019s activity or regulation. That predictability is what makes creatinine useful as a filtration marker \u2014 an enzyme-catalyzed step would introduce a variable the test does not want, since enzyme activity can shift with disease, drugs, or allosteric signals in ways a spontaneous chemical cyclization cannot.'
  },
  {
    id: 'HUB-054',
    m: 'integration',
    area: 'Membranes, gradients and energy',
    level: 'application',
    stem: 'Cardiac muscle draws 60 to 70 percent of its fuel from fatty acid oxidation. Which membrane transport system must be intact for that fuel preference to be met?',
    options: [
      'The carnitine shuttle, which carries long-chain fatty acyl groups across the inner mitochondrial membrane',
      'GLUT4, which carries glucose across the plasma membrane in response to insulin',
      'The malate-aspartate shuttle, which carries reducing equivalents across the inner mitochondrial membrane',
      'The sodium-potassium ATPase, which maintains the resting membrane potential of the cardiomyocyte'
    ],
    answer: 0,
    why: 'Long-chain fatty acids cannot cross the inner mitochondrial membrane on their own; they are first attached to carnitine by carnitine palmitoyltransferase I, carried across by a translocase, and released back to coenzyme A form by carnitine palmitoyltransferase II before beta-oxidation can begin. A cell built to run mostly on fatty acids, like resting cardiac muscle, depends on this shuttle staying intact, and a defect in it forces the heart back onto glucose and lactate. GLUT4 moves glucose rather than fat, the malate-aspartate shuttle moves electrons rather than fatty acid carbon, and the sodium-potassium pump plays no role in fuel selection.'
  },
  {
    id: 'HUB-055',
    m: 'integration',
    area: 'Clinical and pharmacologic integration',
    level: 'integration',
    stem: 'A patient on long-term high-dose glucocorticoid therapy develops muscle wasting alongside a rise in urinary urea nitrogen. Which effect of glucocorticoids on muscle protein connects these two findings?',
    options: [
      'Glucocorticoids promote proteolysis in muscle, and the released amino acid nitrogen is converted to urea in the liver',
      'Glucocorticoids inhibit proteolysis in muscle, so nitrogen accumulates as free amino acids and is filtered unchanged',
      'Glucocorticoids promote proteolysis in muscle, but the released nitrogen is stored as glutamine rather than excreted',
      'Glucocorticoids act only on adipose tissue, and the muscle findings reflect a separate, unrelated process'
    ],
    answer: 0,
    why: 'Glucocorticoids raise blood glucose partly by breaking down muscle protein to supply gluconeogenic amino acids, which is why prolonged high-dose therapy produces visible muscle wasting. The nitrogen released by that proteolysis travels to the liver, largely as alanine and glutamine, and is converted to urea for excretion \u2014 exactly what shows up as elevated urinary urea nitrogen. Glutamine can carry nitrogen toward the liver, but it does not stay stored there while urea output is simultaneously climbing, and the muscle wasting and the nitrogen finding are two readouts of the same catabolic process rather than separate events.'
  },
  {
    id: 'HUB-056',
    m: 'integration',
    area: 'Structure and function across proteins',
    level: 'concept',
    stem: 'Thyroid hormone and the catecholamines are unrelated in their final action, yet both are built starting from the same amino acid. Which amino acid is the shared precursor?',
    options: [
      'Tyrosine',
      'Tryptophan',
      'Histidine',
      'Phenylalanine'
    ],
    answer: 0,
    why: 'Tyrosine is iodinated and coupled to form thyroxine and triiodothyronine in the thyroid, and separately hydroxylated and decarboxylated to form dopamine, norepinephrine, and epinephrine in neurons and the adrenal medulla \u2014 two hormone families with completely different receptors and effects, built from the same starting ring structure. Phenylalanine is the precursor of tyrosine itself, one step upstream, but is not iodinated or decarboxylated directly. Tryptophan is the precursor of serotonin and melatonin, and histidine is the precursor of histamine; neither contributes to thyroid hormone or catecholamine synthesis.'
  }
];
