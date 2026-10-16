/* ============================================================
   banks/aminoacids.js
   Question bank — Amino Acids & Protein Structure (PHA3134)
   Source: "Proteins and Amino Acids", C. Brackett, Q2 2026

   Pure data. No DOM, no dependency on shared/ files.
   Question IDs are permanent: AA-001 .. AA-096. Never renumber.
   ============================================================ */

var TOPIC_ID    = 'aminoacids';
var TOPIC_TITLE = 'Amino Acids & Protein Structure';

/* ------------------------------------------------------------
   CHECKPOINTS — the in-section "can you predict it?" questions.
   answer = index into options BEFORE the engine shuffles them.
   ------------------------------------------------------------ */
var CHECKPOINTS = {

  /* --- Reference Lab --------------------------------------- */
  cL1: {
    options: [
      'Leu',
      'Lys',
      'Lue',
      'Leo'
    ],
    answer: 0,
    why: 'Leucine is abbreviated Leu (one letter: L). Lys is lysine, whose one-letter code is K — a pairing worth memorising early, because Leu/Lys are a common mix-up.'
  },
  cL2: {
    options: [
      'Trp',
      'Tyr',
      'Thr',
      'Try'
    ],
    answer: 0,
    why: 'Tryptophan is Trp / W. Three amino acids begin with "T" in their three-letter code (Thr, Trp, Tyr), so the one-letter codes are deliberately unrelated: T, W, and Y.'
  },
  cL3: {
    options: [
      'Glutamine',
      'Glutamic acid',
      'Glycine',
      'Guanine'
    ],
    answer: 0,
    why: 'Q is glutamine (Gln). Glutamic acid is E (Glu) and glycine is G (Gly). The amide (glutamine) and the acid (glutamate) differ by one functional group and one letter, so read the ending carefully.'
  },

  /* --- Module 1 -------------------------------------------- */
  c1: {
    options: [
      'An amino group, a carboxylic acid, a hydrogen, and a side chain',
      'An amino group, an alcohol, a hydrogen, and a side chain',
      'Two amino groups, a carboxylic acid, and a side chain',
      'An amino group, a carboxylic acid, and two side chains'
    ],
    answer: 0,
    why: 'Every alpha-amino acid carries the same four substituents on its alpha carbon: NH2, COOH, H, and R. Only the R group differs from one amino acid to the next, which is why side-chain chemistry drives essentially everything else in this lecture.'
  },
  c1b: {
    options: [
      'Glycine',
      'Alanine',
      'Proline',
      'Cysteine'
    ],
    answer: 0,
    why: 'Glycine has hydrogen as its side chain, so its alpha carbon bears two identical substituents and is therefore not a stereocentre. Glycine is the one achiral proteinogenic amino acid.'
  },
  c1c: {
    options: [
      'S',
      'R',
      'E',
      'Z'
    ],
    answer: 0,
    why: 'L in the D/L system corresponds to S in the R/S system for nearly all proteinogenic amino acids. Cysteine is the exception: its sulfur changes the substituent priorities, so L-cysteine is designated R.'
  },
  c2: {
    options: [
      'It is incorporated into proteins during translation',
      'It is produced by the liver',
      'It carries a charged side chain at physiological pH',
      'It appears as an intermediate in a biosynthetic pathway'
    ],
    answer: 0,
    why: 'Proteinogenic means "protein-generating" — the amino acid is loaded onto a tRNA and built into a growing chain during translation. There are 20 such amino acids; other amino acids exist in the body as biosynthetic intermediates but are non-proteinogenic.'
  },
  c2b: {
    options: [
      'Phenylalanine and tryptophan',
      'Methionine and cysteine',
      'Serine and threonine',
      'Lysine and arginine'
    ],
    answer: 0,
    why: 'Among the hydrophobic amino acids, phenylalanine and tryptophan carry aromatic rings. Methionine is grouped separately as the heteroatom-containing hydrophobic residue, and the remaining hydrophobic residues are aliphatic.'
  },
  c3: {
    options: [
      'Lysine, arginine, and histidine',
      'Aspartic acid, glutamic acid, and cysteine',
      'Serine, threonine, and tyrosine',
      'Alanine, valine, and leucine'
    ],
    answer: 0,
    why: 'The basic side chains are lysine (primary amine), arginine (guanidinium), and histidine (imidazole). Each can accept a proton, and their pKa values determine how much of each is protonated at a given pH.'
  },
  c3b: {
    options: [
      'Polar and neutral',
      'Polar and acidic',
      'Polar and basic',
      'Hydrophobic and aromatic'
    ],
    answer: 0,
    why: 'Threonine has a hydroxyl-bearing side chain, which makes it polar, but that hydroxyl neither gains nor loses a proton at physiological pH — so it sits in the polar, neutral group along with serine, asparagine, glutamine, and tyrosine.'
  },

  /* --- Module 2 -------------------------------------------- */
  c4: {
    options: [
      'Roughly 1.5 to 2.5',
      'Roughly 4.5 to 5.5',
      'Roughly 7.0 to 7.5',
      'Roughly 9.5 to 10.5'
    ],
    answer: 0,
    why: 'The alpha-carboxylic acid of an amino acid has a pKa of about 1.5 to 2.5, so at physiological pH it sits far above its pKa and is essentially fully deprotonated (negatively charged). The 9.5 to 10.5 range belongs to the alpha-amino group.'
  },
  c4b: {
    options: [
      'A molecule with an overall charge of zero that still contains charged groups',
      'A molecule with no charged groups anywhere',
      'A molecule with an overall positive charge',
      'A molecule that cannot participate in acid-base chemistry'
    ],
    answer: 0,
    why: 'At physiological pH the carboxylate is deprotonated (negative) and the alpha-amino group is protonated (positive). The charges cancel to a net zero, but the molecule is far from uncharged — that internal separation of charge is what "zwitterion" describes.'
  },
  c5: {
    options: [
      'Deprotonated and negatively charged',
      'Protonated and neutral',
      'Protonated and positively charged',
      'Split evenly between both forms'
    ],
    answer: 0,
    why: 'The aspartate side chain has a pKa of 3.86, roughly 3.5 units below physiological pH. A side chain sitting that far above its pKa is more than 99% deprotonated, giving aspartate a negative side chain in the cell.'
  },
  c5b: {
    options: [
      'About 10% of cysteine side chains are ionized',
      'Essentially all cysteine side chains are ionized',
      'Essentially no cysteine side chains are ionized',
      'Cysteine side chains carry a positive charge'
    ],
    answer: 0,
    why: 'With a side-chain pKa of 8.33, cysteine sits just under one pH unit above physiological pH, leaving roughly 10% of the thiol groups deprotonated. That small ionized fraction is chemically important — the thiolate is the reactive species in many enzyme active sites.'
  },
  c6: {
    options: [
      'Arginine',
      'Lysine',
      'Histidine',
      'Aspartic acid'
    ],
    answer: 0,
    why: 'Arginine has the highest side-chain pKa of the proteinogenic amino acids at 12.48, well above lysine at 10.79. Both are more than 99% protonated at physiological pH, so both carry a positive charge in the cell.'
  },
  c6b: {
    options: [
      'About 4% of histidine side chains carry a positive charge',
      'About 96% of histidine side chains carry a positive charge',
      'Histidine side chains carry a negative charge',
      'Histidine side chains are unable to gain or lose a proton'
    ],
    answer: 0,
    why: 'Histidine\'s side-chain pKa of 6.04 sits just below physiological pH, so only about 4% is protonated at 7.4. Because that number changes steeply with small pH shifts, histidine is the residue proteins reach for when they need to move protons around.'
  },
  c6c: {
    options: [
      'Histidine',
      'Arginine',
      'Aspartic acid',
      'Leucine'
    ],
    answer: 0,
    why: 'A residue buffers most effectively when the surrounding pH is near its pKa. Histidine, at 6.04, is the only proteinogenic side chain with a pKa close to physiological pH, which is why it appears so often in active sites and proton-transfer steps.'
  },

  /* --- Module 3 -------------------------------------------- */
  c7: {
    options: [
      'A peptide chain of 20 or fewer amino acids',
      'A peptide chain longer than 20 amino acids',
      'A single amino acid within a chain',
      'A branched chain of amino acids'
    ],
    answer: 0,
    why: 'An oligopeptide is a chain of 20 or fewer amino acids; anything longer and unbranched is a polypeptide. An individual amino acid inside either chain is called a residue.'
  },
  c7b: {
    options: [
      'An amide',
      'An ester',
      'An ether',
      'A thioester'
    ],
    answer: 0,
    why: 'A peptide bond forms between the carboxylic acid of one amino acid and the amino group of the next, producing an amide linkage. Recognising it as an amide is what lets you predict its resonance behaviour and rigidity.'
  },
  c8: {
    options: [
      'Resonance gives the bond partial double bond character',
      'The bond is a true carbon-carbon double bond',
      'The two flanking side chains are physically fused',
      'Hydrogen bonding locks the bond in place'
    ],
    answer: 0,
    why: 'The nitrogen lone pair delocalises into the carbonyl, so the C-N bond is a hybrid of two resonance structures and carries partial double bond character. That restricted rotation is what gives proteins a rigid, predictable backbone.'
  },
  c8b: {
    options: [
      'Esters lack partial double bond character and rotate more freely',
      'Esters have stronger partial double bond character and are more rigid',
      'Esters and amides are equally rigid',
      'Esters are unable to form linear chains'
    ],
    answer: 0,
    why: 'The ester oxygen holds its lone pairs more tightly than an amide nitrogen does, so the resonance contribution is much weaker. The result is a far more flexible linkage — and a backbone that could not hold a defined three-dimensional shape.'
  },
  c8c: {
    options: [
      'Proline',
      'Glycine',
      'Alanine',
      'Serine'
    ],
    answer: 0,
    why: 'Trans amide bonds are favoured about 1000:1 in proteins because of steric clash in the cis form. Proline\'s side chain loops back onto its own backbone nitrogen, so the steric penalty for cis is much smaller, and X-Pro bonds adopt cis geometry far more readily.'
  },
  c9: {
    options: [
      'The end carrying a free amino group',
      'The end carrying a free carboxylic acid',
      'The end with the largest side chain',
      'The end that is chemically modified'
    ],
    answer: 0,
    why: 'The N-terminus has a free alpha-amino group; the C-terminus has a free alpha-carboxylic acid. Every peptide of any length has exactly one of each.'
  },
  c9b: {
    options: [
      'Glutamine',
      'Methionine',
      'Valine',
      'Threonine'
    ],
    answer: 0,
    why: 'Sequences are written N-terminus to C-terminus, so in Met-Val-Thr-Ala-Gln the leftmost residue (Met) is the N-terminal amino acid and the rightmost (Gln) is the C-terminal one. Ribosomes build proteins in this same direction.'
  },

  /* --- Module 4 -------------------------------------------- */
  c10: {
    options: [
      'The amino acid sequence',
      'The local folding into helices and sheets',
      'The overall shape of one polypeptide chain',
      'The arrangement of multiple chains'
    ],
    answer: 0,
    why: 'Primary structure is simply the order of amino acids in the chain. Secondary structure covers local motifs such as helices and sheets, tertiary the full shape of one chain, and quaternary the assembly of several chains.'
  },
  c10b: {
    options: [
      'Quaternary structure',
      'Primary structure',
      'Secondary structure',
      'Tertiary structure'
    ],
    answer: 0,
    why: 'Quaternary structure describes how multiple polypeptide subunits assemble, so a protein made of a single chain has none. Every protein has primary, secondary, and tertiary structure.'
  },
  c11: {
    options: [
      'With a backbone N-H four residues further along the chain',
      'With a backbone N-H on the immediately adjacent residue',
      'With the side chain of the neighbouring residue',
      'With a water molecule outside the helix'
    ],
    answer: 0,
    why: 'In an alpha helix each backbone carbonyl oxygen hydrogen bonds to the amide N-H four residues ahead. That regular i to i+4 spacing is what produces the tight coil and holds it together.'
  },
  c11b: {
    options: [
      'Toward the outside of the helix',
      'Toward the centre of the helix',
      'Along the helical axis',
      'Alternating in and out with each residue'
    ],
    answer: 0,
    why: 'The hydrogen-bonded backbone occupies the core of the helix, which pushes the side chains outward. That outward display is what allows one face of a helix to be hydrophobic and sit in a membrane while another face stays polar.'
  },
  c11c: {
    options: [
      'It lacks a backbone N-H and its ring blocks the required bond angles',
      'Its side chain is too large to fit inside the helix',
      'It carries a charge that repels neighbouring residues',
      'It cannot form a peptide bond'
    ],
    answer: 0,
    why: 'Proline\'s nitrogen is tied into its ring, so within a chain it has no N-H available to donate a hydrogen bond, and the ring geometry prevents the backbone angles a helix requires. Both effects break the helical pattern.'
  },
  c12: {
    options: [
      'The adjacent strands run in opposite directions',
      'The adjacent strands run in the same direction',
      'The strands are coiled rather than extended',
      'The strands are joined by disulfide bonds'
    ],
    answer: 0,
    why: 'Antiparallel strands run N to C in opposite directions; parallel strands run the same way. The hydrogen-bonding geometry between strands differs between the two arrangements.'
  },
  c12b: {
    options: [
      'A cylinder built from antiparallel beta strands',
      'A tightly coiled single helix',
      'A pair of helices wound around each other',
      'A flat, fully extended single strand'
    ],
    answer: 0,
    why: 'A beta barrel is a rolled-up antiparallel sheet forming a cylinder. It can enclose a hydrophobic ligand — as in green fluorescent protein — or span a membrane.'
  },
  c13: {
    options: [
      'A region of a protein able to carry out a particular function',
      'A single turn of an alpha helix',
      'A separate polypeptide chain within a complex',
      'The sequence of amino acids in the chain'
    ],
    answer: 0,
    why: 'A domain is a functional region within one polypeptide chain, built from several secondary structures. A protein may have many domains, and one domain can regulate another — the basis of allosteric modulation.'
  },
  c13b: {
    options: [
      'A disulfide bond between two cysteine residues',
      'A hydrogen bond between two backbone amides',
      'An ionic bond between aspartate and lysine',
      'A hydrophobic contact between two leucines'
    ],
    answer: 0,
    why: 'A disulfide bond is a covalent linkage formed between the thiol side chains of two cysteines. The other interactions listed all stabilise structure as well, but they are non-covalent.'
  },
  c14: {
    options: [
      'A protein whose multiple chains are all identical',
      'A protein whose multiple chains are all different',
      'A protein built from a single chain',
      'A protein that has been post-translationally modified'
    ],
    answer: 0,
    why: 'Homo- means the subunits are identical; hetero- means two or more different chains are present. A protein with only one chain is monomeric and has no quaternary structure at all.'
  },
  c14b: {
    options: [
      'A heterotetramer',
      'A homotetramer',
      'A heterodimer',
      'A monomer'
    ],
    answer: 0,
    why: 'An antibody has four chains, so it is a tetramer, and those chains come in two different types — two heavy and two light — so it is a heterotetramer. This architecture is why monoclonal antibody drugs can be engineered to swap antigen specificity while keeping the constant regions intact.'
  },

  /* --- Module 5 -------------------------------------------- */
  c15: {
    options: [
      'Transcription, then translation, then post-translational modification',
      'Translation, then transcription, then post-translational modification',
      'Post-translational modification, then transcription, then translation',
      'Transcription, then post-translational modification, then translation'
    ],
    answer: 0,
    why: 'DNA is transcribed to mRNA, mature mRNA is translated into a polypeptide at the ribosome, and the immature protein is then chemically modified to reach its final active form. The modifications happen after translation, hence the name.'
  },
  c15b: {
    options: [
      'Cleavage of part of the chain converts an inactive propeptide into an active protein',
      'Cleavage always destroys the protein completely',
      'Cleavage adds a lipid anchor to the protein',
      'Cleavage reverses a phosphorylation event'
    ],
    answer: 0,
    why: 'Some proteins are made as longer, inactive propeptides and only become active once a specific segment is removed. This lets a cell keep a supply of protein on hand and switch it on quickly.'
  },
  c16: {
    options: [
      'Serine, threonine, and tyrosine',
      'Aspartate, glutamate, and lysine',
      'Alanine, valine, and leucine',
      'Proline, glycine, and cysteine'
    ],
    answer: 0,
    why: 'Kinases attach phosphate groups to hydroxyl-bearing side chains. Serine and threonine provide aliphatic alcohols and tyrosine an aromatic one — the three residues that are routinely phosphorylated.'
  },
  c16b: {
    options: [
      'A phosphatase removes it',
      'A second kinase removes it',
      'A glycosyltransferase removes it',
      'The phosphate is permanent once attached'
    ],
    answer: 0,
    why: 'Kinases add phosphate groups and phosphatases remove them. Because the pair works in opposition, phosphorylation acts as a reversible switch rather than a permanent change.'
  },
  c17: {
    options: [
      'Asparagine',
      'Serine',
      'Threonine',
      'Tyrosine'
    ],
    answer: 0,
    why: 'N-linked glycosylation attaches the sugar to the amide nitrogen of an asparagine side chain. Serine and threonine carry O-linked sugars through their hydroxyl oxygens.'
  },
  c17b: {
    options: [
      'They add sugar molecules to a substrate',
      'They remove sugar molecules from a substrate',
      'They add phosphate groups to a substrate',
      'They cleave peptide bonds within a substrate'
    ],
    answer: 0,
    why: 'Glycosyltransferases carry out glycosylation, transferring sugars onto proteins. Erythropoietin is a heavily glycosylated example, and its sugar content strongly influences how long the drug stays in circulation.'
  }
};

/* ------------------------------------------------------------
   CARDS — retrieval-practice flashcards.
   ------------------------------------------------------------ */
var CARDS = [
  { id:'AA-CARD-01', t:'Alpha-amino acid', d:'An amino acid whose amino group, carboxylic acid, hydrogen, and side chain are all attached to the same carbon — the alpha carbon.' },
  { id:'AA-CARD-02', t:'Proteinogenic', d:'Incorporated into proteins during translation. There are 20 proteinogenic amino acids.' },
  { id:'AA-CARD-03', t:'Which amino acid is achiral?', d:'Glycine — its side chain is a hydrogen, so the alpha carbon has two identical substituents.', flip:true },
  { id:'AA-CARD-04', t:'Which amino acid has R stereochemistry?', d:'Cysteine. Its sulfur changes the CIP priorities, so L-cysteine is designated R while the other L-amino acids are S.', flip:true },
  { id:'AA-CARD-05', t:'Zwitterion', d:'A molecule with an overall charge of zero that nonetheless contains both positively and negatively charged groups.' },
  { id:'AA-CARD-06', t:'Alpha-carboxyl pKa range', d:'About 1.5 to 2.5 — deprotonated and negative at physiological pH.', flip:true },
  { id:'AA-CARD-07', t:'Alpha-amino pKa range', d:'About 9.5 to 10.5 — protonated and positive at physiological pH.', flip:true },
  { id:'AA-CARD-08', t:'Aspartate side-chain pKa', d:'3.86. More than 99% ionized (negative) at physiological pH.', flip:true },
  { id:'AA-CARD-09', t:'Glutamate side-chain pKa', d:'4.25. More than 99% ionized (negative) at physiological pH.', flip:true },
  { id:'AA-CARD-10', t:'Cysteine side-chain pKa', d:'8.33. About 10% ionized at physiological pH.', flip:true },
  { id:'AA-CARD-11', t:'Histidine side-chain pKa', d:'6.04. About 4% protonated at physiological pH, which makes it the residue of choice for proton transfer.', flip:true },
  { id:'AA-CARD-12', t:'Lysine side-chain pKa', d:'10.79. More than 99% protonated (positive) at physiological pH.', flip:true },
  { id:'AA-CARD-13', t:'Arginine side-chain pKa', d:'12.48. More than 99% protonated (positive) at physiological pH.', flip:true },
  { id:'AA-CARD-14', t:'Oligopeptide vs polypeptide', d:'Oligopeptide: 20 or fewer amino acids. Polypeptide: any unbranched chain longer than 20.' },
  { id:'AA-CARD-15', t:'Residue', d:'An individual amino acid within a peptide chain.' },
  { id:'AA-CARD-16', t:'Why is a peptide bond rigid?', d:'Resonance delocalises the nitrogen lone pair into the carbonyl, giving the C-N bond partial double bond character and restricting rotation.', flip:true },
  { id:'AA-CARD-17', t:'Trans : cis amide preference', d:'Roughly 1000:1 in favour of trans, because of steric clash in the cis form. X-Pro bonds are the notable exception.', flip:true },
  { id:'AA-CARD-18', t:'N-terminus and C-terminus', d:'N-terminus has the free amino group; C-terminus has the free carboxylic acid. Sequences are written and translated N to C.' },
  { id:'AA-CARD-19', t:'Alpha helix hydrogen bonding', d:'Each backbone C=O hydrogen bonds to the N-H four residues further along the chain. Right-handed helices are favoured.', flip:true },
  { id:'AA-CARD-20', t:'Which residues destabilise an alpha helix?', d:'Proline most strongly (no backbone N-H, wrong ring geometry); serine, aspartate, and asparagine are also less common in helices.', flip:true },
  { id:'AA-CARD-21', t:'Parallel vs antiparallel beta sheet', d:'Parallel strands run the same N-to-C direction; antiparallel strands run opposite. Their hydrogen-bonding geometry differs.' },
  { id:'AA-CARD-22', t:'Beta barrel', d:'A cylinder of antiparallel beta strands. It can enclose a hydrophobic ligand (green fluorescent protein) or span a membrane.' },
  { id:'AA-CARD-23', t:'Protein domain', d:'A region of a polypeptide chain able to carry out a particular function. One domain can regulate another — allosteric modulation.' },
  { id:'AA-CARD-24', t:'Forces stabilising tertiary structure', d:'Hydrophobic and hydrophilic interactions, hydrogen bonds, ionic bonds (salt bridges), and disulfide bonds.' },
  { id:'AA-CARD-25', t:'Homomultimer vs heteromultimer', d:'Homomultimer: all subunits identical. Heteromultimer: two or more different chains. An antibody is a heterotetramer.' },
  { id:'AA-CARD-26', t:'Most common post-translational modification', d:'Phosphorylation. Kinases add phosphate groups; phosphatases remove them.', flip:true },
  { id:'AA-CARD-27', t:'Which residues are phosphorylated?', d:'Serine and threonine (aliphatic alcohols) and tyrosine (aromatic alcohol).', flip:true },
  { id:'AA-CARD-28', t:'O-linked vs N-linked glycosylation', d:'O-linked: sugar on the hydroxyl oxygen of serine or threonine. N-linked: sugar on the amide nitrogen of asparagine.' }
];

/* ------------------------------------------------------------
   POOL — module quiz and final exam questions.
   m    : which quiz this belongs to ('m1'..'m5', 'final')
   area : must match a key in AREA_SECTION
   level: 'concept' | 'application' | 'integration'
   ------------------------------------------------------------ */
var POOL = [

  /* ===================== MODULE 1 ========================== */
  { id:'AA-001', m:'m1', area:'Amino acid recognition', level:'concept',
    stem:'Which set of substituents is attached to the alpha carbon of every proteinogenic amino acid?',
    options:[
      'Amino group, carboxylic acid, hydrogen, and side chain',
      'Amino group, aldehyde, hydrogen, and side chain',
      'Two amino groups, carboxylic acid, and hydrogen',
      'Carboxylic acid, hydroxyl, hydrogen, and side chain'
    ], answer:0,
    why:'All 20 proteinogenic amino acids share the same alpha-carbon framework: NH2, COOH, H, and R. Only the R group varies, which is why side-chain chemistry determines how each residue behaves.' },

  { id:'AA-002', m:'m1', area:'Amino acid recognition', level:'concept',
    stem:'Which proteinogenic amino acid lacks a stereocentre at its alpha carbon?',
    options:['Glycine','Alanine','Serine','Valine'], answer:0,
    why:'Glycine\'s side chain is a single hydrogen, so its alpha carbon carries two identical substituents and cannot be a stereocentre. Every other proteinogenic amino acid is chiral.' },

  { id:'AA-003', m:'m1', area:'Amino acid recognition', level:'concept',
    stem:'In the R/S system, the L configuration of most amino acids corresponds to which designation?',
    options:['S','R','D','Z'], answer:0,
    why:'L-amino acids are S in the R/S system, with cysteine as the single exception. Nearly all naturally occurring amino acids are the L form.' },

  { id:'AA-004', m:'m1', area:'Amino acid recognition', level:'application',
    stem:'An amino acid has a side chain consisting of a single CH2 group bonded to a hydroxyl. Which amino acid is it?',
    options:['Serine','Threonine','Cysteine','Alanine'], answer:0,
    why:'Serine\'s side chain is CH2OH. Threonine also carries a hydroxyl but on a branched, methyl-bearing carbon, and cysteine substitutes sulfur for that oxygen.' },

  { id:'AA-005', m:'m1', area:'Amino acid recognition', level:'application',
    stem:'Which one-letter abbreviation represents tryptophan?',
    options:['W','T','Y','R'], answer:0,
    why:'Tryptophan is W. T is threonine, Y is tyrosine, and R is arginine. Because three amino acids start with T, their one-letter codes were deliberately spread out.' },

  { id:'AA-006', m:'m1', area:'Amino acid recognition', level:'concept',
    stem:'Which pair of hydrophobic amino acids carries aromatic side chains?',
    options:[
      'Phenylalanine and tryptophan',
      'Leucine and isoleucine',
      'Methionine and cysteine',
      'Valine and alanine'
    ], answer:0,
    why:'Phenylalanine and tryptophan are the aromatic members of the hydrophobic group. Methionine is grouped separately as the heteroatom-containing hydrophobic residue.' },

  { id:'AA-007', m:'m1', area:'Amino acid recognition', level:'application',
    stem:'Into which group does lysine fall?',
    options:['Polar and basic','Polar and acidic','Polar and neutral','Hydrophobic and aliphatic'], answer:0,
    why:'Lysine\'s side chain ends in a primary amine that readily accepts a proton, placing it with arginine and histidine in the polar, basic group.' },

  { id:'AA-008', m:'m1', area:'Amino acid recognition', level:'concept',
    stem:'How many proteinogenic amino acids are there?',
    options:['20','16','22','25'], answer:0,
    why:'Twenty amino acids are incorporated during translation. Other amino acids exist in the body as biosynthetic intermediates, but they are non-proteinogenic.' },

  { id:'AA-009', m:'m1', area:'Amino acid recognition', level:'application',
    stem:'Which proteinogenic amino acid is assigned R stereochemistry in its naturally occurring form?',
    options:['Cysteine','Glycine','Proline','Methionine'], answer:0,
    why:'Cysteine\'s sulfur outranks the other substituents under the CIP rules, so L-cysteine is designated R even though it belongs to the same L family as the rest.' },

  { id:'AA-010', m:'m1', area:'Amino acid recognition', level:'application',
    stem:'Which three-letter abbreviation represents glutamine?',
    options:['Gln','Glu','Gly','Gua'], answer:0,
    why:'Glutamine is Gln (one letter Q) and glutamic acid is Glu (one letter E). The two differ by a single functional group — an amide versus a carboxylic acid — and by one letter.' },

  { id:'AA-011', m:'m1', area:'Amino acid recognition', level:'concept',
    stem:'Which group of amino acids is described as hydrophobic and aliphatic?',
    options:[
      'Glycine, alanine, valine, leucine, isoleucine, and proline',
      'Phenylalanine, tryptophan, and tyrosine',
      'Serine, threonine, and asparagine',
      'Aspartic acid, glutamic acid, and cysteine'
    ], answer:0,
    why:'The aliphatic hydrophobic set covers glycine, alanine, valine, leucine, isoleucine, and proline — side chains made of carbon and hydrogen without a ring system or heteroatom.' },

  { id:'AA-012', m:'m1', area:'Amino acid recognition', level:'application',
    stem:'An amino acid has a side chain of CH2SH. Which amino acid is it?',
    options:['Cysteine','Methionine','Serine','Threonine'], answer:0,
    why:'Cysteine carries a thiol on a single CH2. Methionine also contains sulfur, but as a thioether further along a longer chain.' },

  /* ===================== MODULE 2 ========================== */
  { id:'AA-013', m:'m2', area:'Ionization & pKa', level:'concept',
    stem:'What is the typical pKa range of the alpha-carboxylic acid in an amino acid?',
    options:['1.5 to 2.5','3.5 to 4.5','6.0 to 7.0','9.5 to 10.5'], answer:0,
    why:'The alpha-carboxyl pKa sits between about 1.5 and 2.5, far below physiological pH, so it is essentially fully deprotonated in the body.' },

  { id:'AA-014', m:'m2', area:'Ionization & pKa', level:'concept',
    stem:'Which description defines a zwitterion?',
    options:[
      'A molecule with an overall charge of zero that contains charged functional groups',
      'A molecule with no ionizable functional groups',
      'A molecule with two negative charges and no positive charge',
      'A molecule whose charge cannot change with pH'
    ], answer:0,
    why:'In a zwitterion the positive and negative charges cancel out to zero net charge while both remain present. Amino acids exist predominantly in this form at physiological pH.' },

  { id:'AA-015', m:'m2', area:'Ionization & pKa', level:'application',
    stem:'At physiological pH, what is the state of the aspartic acid side chain?',
    options:[
      'Deprotonated and negatively charged',
      'Protonated and uncharged',
      'Protonated and positively charged',
      'Equally divided between protonated and deprotonated forms'
    ], answer:0,
    why:'With a side-chain pKa of 3.86, aspartate sits well above its pKa at pH 7.4 and is more than 99% deprotonated, carrying a negative charge.' },

  { id:'AA-016', m:'m2', area:'Ionization & pKa', level:'application',
    stem:'Roughly what fraction of histidine side chains is protonated at physiological pH?',
    options:['About 4%','About 50%','About 90%','More than 99%'], answer:0,
    why:'Histidine\'s side-chain pKa of 6.04 lies just over one unit below physiological pH, leaving only about 4% protonated. That sensitivity to small pH changes is exactly why histidine appears in so many active sites.' },

  { id:'AA-017', m:'m2', area:'Ionization & pKa', level:'concept',
    stem:'What is the typical pKa range of the alpha-amino group in an amino acid?',
    options:['9.5 to 10.5','1.5 to 2.5','4.0 to 5.0','6.5 to 7.5'], answer:0,
    why:'The alpha-amino group has a pKa of about 9.5 to 10.5, above physiological pH, so it remains protonated and positively charged in the body.' },

  { id:'AA-018', m:'m2', area:'Ionization & pKa', level:'application',
    stem:'Given a cysteine side-chain pKa of 8.33, what is its approximate ionization at physiological pH?',
    options:['About 10% ionized','About 50% ionized','About 90% ionized','More than 99% ionized'], answer:0,
    why:'Physiological pH sits just under one unit below 8.33, so roughly a tenth of cysteine thiols are deprotonated. That minority thiolate form is the chemically reactive species.' },

  { id:'AA-019', m:'m2', area:'Ionization & pKa', level:'concept',
    stem:'Which side chain has the highest pKa among the proteinogenic amino acids?',
    options:['Arginine','Lysine','Histidine','Tyrosine'], answer:0,
    why:'Arginine\'s guanidinium side chain has a pKa of 12.48, higher than lysine at 10.79. Both stay protonated and positively charged in the cell.' },

  { id:'AA-020', m:'m2', area:'Ionization & pKa', level:'application',
    stem:'What is the net charge on free glycine at physiological pH?',
    options:['Zero','Positive one','Negative one','Negative two'], answer:0,
    why:'Glycine has no ionizable side chain, so only the backbone groups contribute: a negative carboxylate and a positive ammonium. The two cancel, giving a zwitterion with zero net charge.' },

  { id:'AA-021', m:'m2', area:'Ionization & pKa', level:'integration',
    stem:'Which residue is best suited to shuttle protons within an enzyme active site at physiological pH?',
    options:['Histidine','Leucine','Arginine','Aspartic acid'], answer:0,
    why:'Proton transfer requires a group that can readily gain and lose a proton under cellular conditions, which means a pKa near physiological pH. Histidine at 6.04 is the only side chain that qualifies.' },

  { id:'AA-022', m:'m2', area:'Ionization & pKa', level:'application',
    stem:'Which ordering places aspartic acid, cysteine, and glutamic acid side chains from lowest to highest pKa?',
    options:[
      'Aspartic acid, glutamic acid, cysteine',
      'Cysteine, aspartic acid, glutamic acid',
      'Glutamic acid, aspartic acid, cysteine',
      'Cysteine, glutamic acid, aspartic acid'
    ], answer:0,
    why:'The values are aspartic acid 3.86, glutamic acid 4.25, and cysteine 8.33. The two carboxylic acids are close together and far below cysteine\'s thiol.' },

  { id:'AA-023', m:'m2', area:'Ionization & pKa', level:'application',
    stem:'Given a lysine side-chain pKa of 10.79, what charge does that side chain carry at physiological pH?',
    options:['Positive','Negative','Neutral','It varies minute to minute'], answer:0,
    why:'Physiological pH is more than three units below the pKa, so the amine is more than 99% protonated and carries a positive charge.' },

  { id:'AA-024', m:'m2', area:'Ionization & pKa', level:'integration',
    stem:'A short peptide contains one lysine and one aspartate and no other ionizable side chains. What is the approximate net charge contributed by those two side chains at physiological pH?',
    options:['Zero','Positive one','Negative one','Negative two'], answer:0,
    why:'Lysine is protonated and positive while aspartate is deprotonated and negative, so the two side-chain charges cancel. Predicting net charge this way underlies techniques such as isoelectric focusing.' },

  /* ===================== MODULE 3 ========================== */
  { id:'AA-025', m:'m3', area:'Peptides & peptide bonds', level:'concept',
    stem:'Which definition describes an oligopeptide?',
    options:[
      'A peptide chain of 20 or fewer amino acids',
      'A peptide chain of more than 20 amino acids',
      'A branched chain of amino acids',
      'A chain of exactly two amino acids'
    ], answer:0,
    why:'Oligopeptides are 20 residues or fewer; longer unbranched chains are polypeptides. A two-residue chain is specifically a dipeptide.' },

  { id:'AA-026', m:'m3', area:'Peptides & peptide bonds', level:'concept',
    stem:'What is a residue?',
    options:[
      'An individual amino acid within a peptide chain',
      'The water molecule released when a peptide bond forms',
      'The free amino group at the end of a chain',
      'A side chain that has been chemically modified'
    ], answer:0,
    why:'Once an amino acid is joined into a chain it is called a residue, because it has lost the atoms removed during bond formation.' },

  { id:'AA-027', m:'m3', area:'Peptides & peptide bonds', level:'concept',
    stem:'A peptide bond belongs to which functional group class?',
    options:['Amide','Ester','Ether','Ketone'], answer:0,
    why:'The bond joins a carboxylic acid to an amine, producing an amide. Classifying it correctly is what lets you predict its resonance and rigidity.' },

  { id:'AA-028', m:'m3', area:'Peptides & peptide bonds', level:'concept',
    stem:'What accounts for the restricted rotation around a peptide bond?',
    options:[
      'Resonance gives the C-N bond partial double bond character',
      'The bond is a full carbon-carbon double bond',
      'Adjacent side chains are covalently linked',
      'The bond is stabilised by a disulfide bridge'
    ], answer:0,
    why:'Two resonance structures contribute to the amide, delocalising the nitrogen lone pair into the carbonyl. The resulting partial double bond character blocks free rotation and keeps the backbone planar.' },

  { id:'AA-029', m:'m3', area:'Peptides & peptide bonds', level:'application',
    stem:'Compared with an amide, why is an ester linkage more flexible?',
    options:[
      'The ester has much weaker partial double bond character',
      'The ester has stronger partial double bond character',
      'The ester contains an additional stereocentre',
      'The ester forms hydrogen bonds along the backbone'
    ], answer:0,
    why:'Oxygen holds its lone pairs more tightly than nitrogen, so resonance donation into the carbonyl is weaker in an ester. Less double bond character means freer rotation — and a backbone unable to hold a defined shape.' },

  { id:'AA-030', m:'m3', area:'Peptides & peptide bonds', level:'concept',
    stem:'Which geometry do peptide bonds in proteins overwhelmingly adopt?',
    options:['Trans','Cis','An even mixture of both','Neither, because rotation is free'], answer:0,
    why:'Trans is favoured over cis by roughly 1000 to 1, because the cis arrangement forces the flanking side chains into steric conflict.' },

  { id:'AA-031', m:'m3', area:'Peptides & peptide bonds', level:'application',
    stem:'Preceding which residue is a cis peptide bond most readily accommodated?',
    options:['Proline','Glycine','Alanine','Leucine'], answer:0,
    why:'Proline\'s side chain cyclises back onto its own backbone nitrogen, so the cis form of an X-Pro bond costs far less sterically than usual. These cis bonds generate distinctive structural motifs.' },

  { id:'AA-032', m:'m3', area:'Peptides & peptide bonds', level:'concept',
    stem:'What defines the N-terminus of a peptide?',
    options:[
      'It carries a free amino group',
      'It carries a free carboxylic acid',
      'It carries the largest side chain',
      'It is the residue most recently modified'
    ], answer:0,
    why:'The N-terminus has a free alpha-amino group and the C-terminus a free alpha-carboxylic acid. Every peptide has exactly one of each.' },

  { id:'AA-033', m:'m3', area:'Peptides & peptide bonds', level:'application',
    stem:'In the peptide Asp-Ile-His-Leu-Cys, which residue occupies the C-terminus?',
    options:['Cysteine','Aspartic acid','Histidine','Leucine'], answer:0,
    why:'Sequences are written N-terminus first, so the leftmost residue (Asp) is the N-terminal amino acid and the rightmost (Cys) is C-terminal.' },

  { id:'AA-034', m:'m3', area:'Peptides & peptide bonds', level:'concept',
    stem:'In which direction does the ribosome build a polypeptide chain?',
    options:[
      'N-terminus to C-terminus',
      'C-terminus to N-terminus',
      'From the middle outward in both directions',
      'The direction varies with the protein'
    ], answer:0,
    why:'Translation proceeds N to C, which is also the convention for writing sequences. Keeping the two consistent avoids a great deal of confusion later.' },

  { id:'AA-035', m:'m3', area:'Peptides & peptide bonds', level:'application',
    stem:'An unbranched chain of 45 amino acids is best described by which term?',
    options:['Polypeptide','Oligopeptide','Tripeptide','Residue'], answer:0,
    why:'Any unbranched chain longer than 20 amino acids is a polypeptide. At 45 residues this chain is comfortably past that threshold.' },

  { id:'AA-036', m:'m3', area:'Peptides & peptide bonds', level:'integration',
    stem:'How many peptide bonds are present in a linear pentapeptide?',
    options:['Four','Five','Six','Three'], answer:0,
    why:'Each bond joins two adjacent residues, so a chain of n residues contains n minus 1 bonds. Five residues therefore have four peptide bonds, leaving one free amino and one free carboxyl terminus.' },

  /* ===================== MODULE 4 ========================== */
  { id:'AA-037', m:'m4', area:'Protein structure', level:'concept',
    stem:'What does the primary structure of a protein describe?',
    options:[
      'The sequence of amino acids',
      'The local folding into helices and sheets',
      'The three-dimensional shape of one chain',
      'The assembly of several chains'
    ], answer:0,
    why:'Primary structure is the amino acid sequence itself. Everything above it — secondary, tertiary, and quaternary — describes how that sequence arranges itself in space.' },

  { id:'AA-038', m:'m4', area:'Protein structure', level:'concept',
    stem:'In an alpha helix, each backbone carbonyl oxygen hydrogen bonds to an amide N-H how far along the chain?',
    options:['Four residues further','One residue further','Two residues further','Seven residues further'], answer:0,
    why:'The regular i to i+4 hydrogen-bonding pattern is what produces and maintains the tight coil of an alpha helix.' },

  { id:'AA-039', m:'m4', area:'Protein structure', level:'concept',
    stem:'Which helical handedness is energetically favoured in proteins, and why?',
    options:[
      'Right-handed, because it produces fewer steric clashes',
      'Left-handed, because it produces fewer steric clashes',
      'Right-handed, because it allows more hydrogen bonds',
      'Left-handed, because it allows more hydrogen bonds'
    ], answer:0,
    why:'Helices can coil either way, but the right-handed form places side chains where they interfere less with the backbone, making it the more favourable arrangement.' },

  { id:'AA-040', m:'m4', area:'Protein structure', level:'application',
    stem:'Why does proline disrupt an alpha helix when it appears within a chain?',
    options:[
      'It has no backbone N-H to donate a hydrogen bond and its ring blocks the required angles',
      'Its side chain is too bulky to fit along the helix exterior',
      'Its positive charge repels neighbouring residues',
      'It is unable to participate in a peptide bond'
    ], answer:0,
    why:'Proline\'s nitrogen is locked inside its ring, so within a chain it cannot donate the hydrogen bond a helix depends on, and its geometry prevents the necessary backbone angles.' },

  { id:'AA-041', m:'m4', area:'Protein structure', level:'concept',
    stem:'Where do side chains point in an alpha helix?',
    options:[
      'Outward, away from the helical axis',
      'Inward, toward the helical axis',
      'Directly along the helical axis',
      'Alternately inward and outward with each residue'
    ], answer:0,
    why:'The hydrogen-bonded backbone occupies the helix core, pushing side chains outward. That is what allows one face of a helix to be hydrophobic and sit in a membrane.' },

  { id:'AA-042', m:'m4', area:'Protein structure', level:'concept',
    stem:'What distinguishes a parallel beta sheet from an antiparallel one?',
    options:[
      'Adjacent strands run in the same N-to-C direction',
      'Adjacent strands run in opposite N-to-C directions',
      'Parallel sheets contain no hydrogen bonds',
      'Parallel sheets are coiled rather than extended'
    ], answer:0,
    why:'In parallel sheets adjacent strands run the same direction; in antiparallel sheets they run opposite. The hydrogen-bonding geometry between strands differs between the two.' },

  { id:'AA-043', m:'m4', area:'Protein structure', level:'concept',
    stem:'What is a beta barrel?',
    options:[
      'A cylindrical structure built from antiparallel beta strands',
      'A bundle of alpha helices wound together',
      'A single beta strand folded back on itself once',
      'A sheet stabilised entirely by disulfide bonds'
    ], answer:0,
    why:'A beta barrel is an antiparallel sheet rolled into a cylinder. It can hold a hydrophobic ligand in its centre, as green fluorescent protein does, or span a membrane.' },

  { id:'AA-044', m:'m4', area:'Protein structure', level:'concept',
    stem:'What does tertiary structure describe?',
    options:[
      'The overall three-dimensional shape of a single polypeptide chain',
      'The sequence of amino acids in the chain',
      'A single local motif such as one helix',
      'The arrangement of several polypeptide chains'
    ], answer:0,
    why:'Tertiary structure covers the full folded shape of one chain, including how its various secondary structures pack together into domains.' },

  { id:'AA-045', m:'m4', area:'Protein structure', level:'concept',
    stem:'Which description defines a protein domain?',
    options:[
      'A region of a protein able to carry out a particular function',
      'A separate polypeptide chain within a protein complex',
      'One complete turn of an alpha helix',
      'The point at which two subunits contact each other'
    ], answer:0,
    why:'Domains are functional regions within a single chain. A protein may contain any number of them, and one can regulate another.' },

  { id:'AA-046', m:'m4', area:'Protein structure', level:'application',
    stem:'A kinase has one domain that switches on the catalytic activity of a second domain only under particular conditions. Which term describes this arrangement?',
    options:['Allosteric modulation','Quaternary assembly','Post-translational cleavage','Competitive inhibition'], answer:0,
    why:'When one region of a protein alters the activity of another region at a distance, the effect is allosteric. Pyruvate kinase is a well-studied example of multi-domain regulation.' },

  { id:'AA-047', m:'m4', area:'Protein structure', level:'concept',
    stem:'Which statement about quaternary structure is accurate?',
    options:[
      'It describes the assembly of multiple polypeptide subunits, and some proteins have none',
      'It describes the folding of a single chain, and every protein has it',
      'It describes the amino acid sequence of each subunit',
      'It describes local motifs such as helices and sheets'
    ], answer:0,
    why:'Quaternary structure exists only when a protein contains more than one polypeptide chain. A monomeric protein has primary, secondary, and tertiary structure but no quaternary structure.' },

  { id:'AA-048', m:'m4', area:'Protein structure', level:'application',
    stem:'An antibody contains two heavy chains and two light chains. Which term describes it?',
    options:['Heterotetramer','Homotetramer','Heterodimer','Monomer'], answer:0,
    why:'Four subunits make it a tetramer, and because those subunits come in two different types it is a heterotetramer.' },

  { id:'AA-049', m:'m4', area:'Pharmacy application', level:'integration',
    stem:'G-protein coupled receptors cross the cell membrane using which secondary structure?',
    options:['Alpha helices','Antiparallel beta sheets','Random coil segments','Disulfide-linked turns'], answer:0,
    why:'Alpha helices are the most common membrane-spanning motif, because their outward-facing side chains can present a hydrophobic surface to the lipid bilayer. GPCRs, one of the largest drug target families, use seven such helices.' },

  { id:'AA-050', m:'m4', area:'Protein structure', level:'application',
    stem:'Which interaction that stabilises tertiary structure is covalent?',
    options:[
      'A disulfide bond between two cysteine residues',
      'A hydrogen bond between two backbone amides',
      'A salt bridge between lysine and aspartate',
      'A hydrophobic contact between two valine side chains'
    ], answer:0,
    why:'Disulfide bonds are true covalent linkages formed between cysteine thiols. Hydrogen bonds, ionic interactions, and hydrophobic contacts all stabilise structure too, but none is covalent.' },

  /* ===================== MODULE 5 ========================== */
  { id:'AA-051', m:'m5', area:'Post-translational modifications', level:'concept',
    stem:'When does a post-translational modification occur?',
    options:[
      'After the polypeptide has been synthesised at the ribosome',
      'While mRNA is being transcribed from DNA',
      'Before the mRNA leaves the nucleus',
      'Only during protein degradation'
    ], answer:0,
    why:'As the name says, these modifications follow translation. An immature polypeptide leaves the ribosome and is then chemically altered to reach its mature, functional form.' },

  { id:'AA-052', m:'m5', area:'Post-translational modifications', level:'concept',
    stem:'Which post-translational modification is the most common?',
    options:['Phosphorylation','Glycosylation','Lipid anchoring','Propeptide cleavage'], answer:0,
    why:'Phosphorylation is the most widespread modification, and because it is reversible it serves as the cell\'s general-purpose switch.' },

  { id:'AA-053', m:'m5', area:'Post-translational modifications', level:'concept',
    stem:'Which enzyme pair adds and removes phosphate groups from proteins?',
    options:[
      'Kinases add and phosphatases remove',
      'Phosphatases add and kinases remove',
      'Glycosyltransferases add and kinases remove',
      'Proteases add and kinases remove'
    ], answer:0,
    why:'Kinases transfer phosphate onto a protein and phosphatases take it off. Opposing enzymes are what make the modification reversible.' },

  { id:'AA-054', m:'m5', area:'Post-translational modifications', level:'application',
    stem:'Which three residues are routinely phosphorylated by kinases?',
    options:[
      'Serine, threonine, and tyrosine',
      'Lysine, arginine, and histidine',
      'Aspartate, glutamate, and asparagine',
      'Alanine, valine, and leucine'
    ], answer:0,
    why:'All three carry a hydroxyl group available for phosphate transfer: serine and threonine as aliphatic alcohols and tyrosine as an aromatic one.' },

  { id:'AA-055', m:'m5', area:'Post-translational modifications', level:'application',
    stem:'Which structural feature makes a side chain a suitable target for phosphorylation?',
    options:[
      'A hydroxyl group',
      'A positively charged amine',
      'A sulfur atom',
      'An aromatic ring without substituents'
    ], answer:0,
    why:'Phosphate is attached through an oxygen, so the side chain needs a free hydroxyl. That requirement is what limits routine phosphorylation to serine, threonine, and tyrosine.' },

  { id:'AA-056', m:'m5', area:'Post-translational modifications', level:'concept',
    stem:'What does glycosylation add to a protein?',
    options:['Sugar molecules','Phosphate groups','Fatty acid chains','Additional amino acids'], answer:0,
    why:'Glycosylation attaches sugars, a reaction carried out by glycosyltransferases. It is one of the most common modifications of secreted and membrane proteins.' },

  { id:'AA-057', m:'m5', area:'Post-translational modifications', level:'application',
    stem:'In N-linked glycosylation, to which residue is the sugar attached?',
    options:['Asparagine','Serine','Threonine','Tyrosine'], answer:0,
    why:'N-linked sugars are attached to the amide nitrogen of an asparagine side chain, which is where the name comes from.' },

  { id:'AA-058', m:'m5', area:'Post-translational modifications', level:'application',
    stem:'O-linked glycosylation attaches sugars to which residues?',
    options:['Serine and threonine','Asparagine and glutamine','Lysine and arginine','Cysteine and methionine'], answer:0,
    why:'O-linked sugars are attached through the hydroxyl oxygen of serine or threonine, in contrast with the asparagine amide nitrogen used for N-linked sugars.' },

  { id:'AA-059', m:'m5', area:'Post-translational modifications', level:'concept',
    stem:'What is the purpose of cleaving a propeptide?',
    options:[
      'To convert an inactive precursor into an active protein',
      'To attach a sugar to the protein surface',
      'To anchor the protein into a membrane',
      'To reverse a phosphorylation event'
    ], answer:0,
    why:'Some proteins are synthesised as longer inactive forms and only become active when a defined segment is removed. This lets the cell store a ready supply and activate it on demand.' },

  { id:'AA-060', m:'m5', area:'Post-translational modifications', level:'application',
    stem:'Attaching a lipophilic fatty acid to a protein serves which purpose?',
    options:[
      'Anchoring the protein to a membrane',
      'Increasing the protein\'s water solubility',
      'Marking the protein for phosphorylation',
      'Adding a new catalytic site'
    ], answer:0,
    why:'A fatty acid tail inserts into the lipid bilayer, tethering an otherwise soluble protein to the membrane. The modification makes the protein less water-soluble, not more.' },

  { id:'AA-061', m:'m5', area:'Pharmacy application', level:'integration',
    stem:'Erythropoietin is described as a heavily glycosylated protein. What has been added to it?',
    options:['Sugar chains','Phosphate groups','Additional polypeptide subunits','Disulfide-linked lipids'], answer:0,
    why:'Erythropoietin carries extensive sugar chains. Because glycosylation strongly influences how quickly a protein is cleared, therapeutic versions of EPO are engineered around their glycan content.' },

  { id:'AA-062', m:'m5', area:'Post-translational modifications', level:'concept',
    stem:'Which sequence correctly orders the steps from gene to mature protein?',
    options:[
      'Transcription, translation, post-translational modification',
      'Translation, transcription, post-translational modification',
      'Transcription, post-translational modification, translation',
      'Post-translational modification, translation, transcription'
    ], answer:0,
    why:'DNA is transcribed into mRNA, mature mRNA is translated into a polypeptide, and that polypeptide is then modified. RNA polymerase II handles the first step and the ribosome the second.' },

  /* ================== CUMULATIVE MASTERY =================== */
  { id:'AA-063', m:'final', area:'Amino acid recognition', level:'concept',
    stem:'Which feature makes glycine unique among the proteinogenic amino acids?',
    options:[
      'It has no stereocentre',
      'It has the largest side chain',
      'It carries a permanent negative charge',
      'It cannot form peptide bonds'
    ], answer:0,
    why:'Glycine\'s hydrogen side chain leaves its alpha carbon with two identical substituents, so it is the one achiral proteinogenic amino acid. That small side chain also makes glycine unusually flexible within a backbone.' },

  { id:'AA-064', m:'final', area:'Amino acid recognition', level:'application',
    stem:'Which amino acid carries an imidazole ring in its side chain?',
    options:['Histidine','Tryptophan','Phenylalanine','Proline'], answer:0,
    why:'Histidine\'s imidazole ring can gain or lose a proton near physiological pH, which is why histidine appears so often in catalysis. Tryptophan uses an indole ring and phenylalanine a simple benzene ring.' },

  { id:'AA-065', m:'final', area:'Amino acid recognition', level:'application',
    stem:'Which amino acid does the one-letter abbreviation K represent?',
    options:['Lysine','Leucine','Ketoglutarate','Glutamine'], answer:0,
    why:'K is lysine. Leucine takes L, which is why lysine was assigned the neighbouring letter — a frequent source of confusion worth committing to memory.' },

  { id:'AA-066', m:'final', area:'Amino acid recognition', level:'concept',
    stem:'Which pair of proteinogenic amino acids contains sulfur?',
    options:[
      'Cysteine and methionine',
      'Serine and threonine',
      'Aspartate and glutamate',
      'Tyrosine and tryptophan'
    ], answer:0,
    why:'Cysteine carries a thiol and methionine a thioether. Cysteine\'s sulfur is what allows disulfide bonds to form between distant parts of a chain.' },

  { id:'AA-067', m:'final', area:'Amino acid recognition', level:'application',
    stem:'Into which class does threonine fall?',
    options:['Polar and neutral','Polar and acidic','Polar and basic','Hydrophobic and aromatic'], answer:0,
    why:'Threonine\'s hydroxyl makes it polar, but that hydroxyl neither gains nor loses a proton at physiological pH, placing it with serine, asparagine, glutamine, and tyrosine.' },

  { id:'AA-068', m:'final', area:'Amino acid recognition', level:'concept',
    stem:'Which criterion determines whether an amino acid is proteinogenic?',
    options:[
      'It is incorporated into proteins during translation',
      'It can be synthesised by the human body',
      'It carries an ionizable side chain',
      'It appears in the diet in measurable amounts'
    ], answer:0,
    why:'Proteinogenic means the amino acid is built into a protein during translation. Whether the body can make it is a separate question — that distinguishes essential from non-essential amino acids.' },

  { id:'AA-069', m:'final', area:'Amino acid recognition', level:'integration',
    stem:'Which amino acid has a side chain that bonds back onto its own backbone nitrogen?',
    options:['Proline','Lysine','Histidine','Cysteine'], answer:0,
    why:'Proline is the one proteinogenic amino acid whose side chain closes a ring with the backbone nitrogen. That single structural quirk explains its cis-amide tolerance and its ability to break alpha helices.' },

  { id:'AA-070', m:'final', area:'Ionization & pKa', level:'application',
    stem:'Given a glutamic acid side-chain pKa of 4.25, what charge does that side chain carry at physiological pH?',
    options:['Negative','Positive','Neutral','It alternates rapidly'], answer:0,
    why:'Physiological pH sits about three units above the pKa, so the carboxylic acid is more than 99% deprotonated and carries a negative charge.' },

  { id:'AA-071', m:'final', area:'Ionization & pKa', level:'application',
    stem:'A peptide contains two aspartate residues and one lysine residue, with no other ionizable side chains. What net charge do the side chains contribute at physiological pH?',
    options:['Negative one','Zero','Positive one','Negative three'], answer:0,
    why:'Each aspartate contributes a negative charge and the lysine a positive one, giving a total of minus two plus one, or negative one overall.' },

  { id:'AA-072', m:'final', area:'Ionization & pKa', level:'concept',
    stem:'What overall charge does a zwitterion carry?',
    options:['Zero','Positive one','Negative one','It depends on the side chain length'], answer:0,
    why:'A zwitterion has equal and opposite charges that sum to zero, even though individual groups within it are charged.' },

  { id:'AA-073', m:'final', area:'Ionization & pKa', level:'integration',
    stem:'Moving from pH 6 to pH 8, which side chain undergoes the largest change in its degree of protonation?',
    options:['Histidine','Arginine','Aspartic acid','Leucine'], answer:0,
    why:'A side chain changes protonation most steeply near its own pKa. Histidine\'s pKa of 6.04 falls inside this range, whereas arginine and aspartate lie far outside it and leucine has no ionizable side chain at all.' },

  { id:'AA-074', m:'final', area:'Ionization & pKa', level:'application',
    stem:'What is the state of the arginine side chain at physiological pH?',
    options:[
      'Protonated and positively charged',
      'Deprotonated and negatively charged',
      'Deprotonated and neutral',
      'Split evenly between two forms'
    ], answer:0,
    why:'With a pKa of 12.48, arginine sits five units above physiological pH and remains almost entirely protonated, giving it a positive charge.' },

  { id:'AA-075', m:'final', area:'Ionization & pKa', level:'concept',
    stem:'What is the side-chain pKa of aspartic acid?',
    options:['3.86','6.04','8.33','10.79'], answer:0,
    why:'Aspartate\'s side-chain pKa is 3.86. The other values belong to histidine, cysteine, and lysine respectively.' },

  { id:'AA-076', m:'final', area:'Ionization & pKa', level:'integration',
    stem:'An enzyme active site must both accept and donate a proton during a single catalytic cycle at physiological pH. Which residue is best suited to that role?',
    options:['Histidine','Arginine','Alanine','Glutamic acid'], answer:0,
    why:'Only a side chain with a pKa near physiological pH can readily exist in both protonated and deprotonated forms during one cycle. Histidine, at 6.04, is the only residue that fits.' },

  { id:'AA-077', m:'final', area:'Peptides & peptide bonds', level:'concept',
    stem:'A peptide bond forms between which two groups?',
    options:[
      'The carboxylic acid of one amino acid and the amino group of the next',
      'The side chains of two adjacent amino acids',
      'The amino groups of two adjacent amino acids',
      'The carboxylic acids of two adjacent amino acids'
    ], answer:0,
    why:'Joining a carboxylic acid to an amine produces the amide linkage that defines a peptide bond. Side chains stay free to interact with each other and with the environment.' },

  { id:'AA-078', m:'final', area:'Peptides & peptide bonds', level:'application',
    stem:'What structural consequence follows from the partial double bond character of a peptide bond?',
    options:[
      'The atoms around the bond are held in a planar arrangement',
      'The bond rotates freely in solution',
      'The bond breaks readily at physiological pH',
      'The two flanking side chains become identical'
    ], answer:0,
    why:'Restricted rotation forces the amide unit into a plane, giving the backbone a predictable geometry. Without that rigidity, defined three-dimensional structures would not be possible.' },

  { id:'AA-079', m:'final', area:'Peptides & peptide bonds', level:'application',
    stem:'How many peptide bonds does a linear hexapeptide contain?',
    options:['Five','Six','Seven','Four'], answer:0,
    why:'A chain of n residues has n minus 1 peptide bonds, so six residues are joined by five bonds.' },

  { id:'AA-080', m:'final', area:'Peptides & peptide bonds', level:'concept',
    stem:'By convention, in which direction is an amino acid sequence written?',
    options:[
      'N-terminus to C-terminus',
      'C-terminus to N-terminus',
      'Largest to smallest side chain',
      'Most to least polar residue'
    ], answer:0,
    why:'Sequences are written N to C, matching the direction in which the ribosome synthesises the chain.' },

  { id:'AA-081', m:'final', area:'Peptides & peptide bonds', level:'integration',
    stem:'Why do X-Pro peptide bonds adopt cis geometry more often than other peptide bonds?',
    options:[
      'Proline\'s ring reduces the steric penalty of the cis arrangement',
      'Proline\'s ring increases the resonance stabilisation of the cis form',
      'Proline carries a charge that favours the cis arrangement',
      'Proline forms an additional hydrogen bond in the cis form'
    ], answer:0,
    why:'In a typical peptide bond, cis geometry pushes two bulky side chains together. Because proline\'s side chain is already tied back to its own nitrogen, that clash is much smaller and cis becomes accessible.' },

  { id:'AA-082', m:'final', area:'Protein structure', level:'concept',
    stem:'Alpha helices and beta sheets are both stabilised primarily by which interaction?',
    options:[
      'Hydrogen bonds between backbone amide groups',
      'Disulfide bonds between cysteine side chains',
      'Ionic bonds between charged side chains',
      'Covalent bonds between adjacent side chains'
    ], answer:0,
    why:'Secondary structure is a backbone phenomenon: both motifs depend on hydrogen bonds between amide N-H and carbonyl groups. Side chains influence which motif forms, but they are not what holds it together.' },

  { id:'AA-083', m:'final', area:'Protein structure', level:'application',
    stem:'A residue at position 10 of an alpha helix hydrogen bonds through its carbonyl oxygen to the N-H at which position?',
    options:['14','11','12','17'], answer:0,
    why:'Alpha-helical hydrogen bonds run from residue i to residue i+4, so position 10 pairs with position 14.' },

  { id:'AA-084', m:'final', area:'Protein structure', level:'concept',
    stem:'In an antiparallel beta sheet, how do adjacent strands run?',
    options:[
      'In opposite N-to-C directions',
      'In the same N-to-C direction',
      'At right angles to one another',
      'Coiled around one another'
    ], answer:0,
    why:'Antiparallel strands point in opposite directions, which changes the hydrogen-bonding geometry relative to a parallel sheet.' },

  { id:'AA-085', m:'final', area:'Protein structure', level:'application',
    stem:'The beta barrel of green fluorescent protein serves which purpose?',
    options:[
      'It encloses a hydrophobic ligand within its centre',
      'It binds DNA within the major groove',
      'It links two separate polypeptide chains covalently',
      'It provides the protein\'s only catalytic site'
    ], answer:0,
    why:'A beta barrel forms a cylinder that can either surround a hydrophobic ligand, as in GFP, or span a membrane. Binding DNA in the major groove is a role for alpha helices.' },

  { id:'AA-086', m:'final', area:'Protein structure', level:'concept',
    stem:'When examining tertiary structure, what is being assessed?',
    options:[
      'How secondary structures assemble into domains within one chain',
      'The order of amino acids along the chain',
      'How separate polypeptide chains associate',
      'The hydrogen bonding within a single helix'
    ], answer:0,
    why:'Tertiary structure is about the packing of a single chain\'s secondary structures into functional domains. Interactions between separate chains belong to quaternary structure.' },

  { id:'AA-087', m:'final', area:'Protein structure', level:'application',
    stem:'A disulfide bond forms between the side chains of which two residues?',
    options:[
      'Two cysteines',
      'Two methionines',
      'A cysteine and a methionine',
      'Two serines'
    ], answer:0,
    why:'Only cysteine\'s free thiol can be oxidised to form a disulfide. Methionine\'s sulfur is locked inside a thioether and is unavailable for this bond.' },

  { id:'AA-088', m:'final', area:'Protein structure', level:'concept',
    stem:'What distinguishes a homomultimer from a heteromultimer?',
    options:[
      'All subunits in a homomultimer are identical',
      'All subunits in a homomultimer are different',
      'A homomultimer contains only one polypeptide chain',
      'A homomultimer has no quaternary structure'
    ], answer:0,
    why:'Homo- means identical subunits and hetero- means two or more different chains. A protein with a single chain is monomeric and has no quaternary structure at all.' },

  { id:'AA-089', m:'final', area:'Protein structure', level:'integration',
    stem:'A mutation replaces a glycine in the middle of an alpha helix with a proline. What is the most likely structural consequence?',
    options:[
      'The helix is disrupted at that point',
      'The helix becomes longer and more stable',
      'The helix converts into a parallel beta sheet',
      'The chain gains an additional disulfide bond'
    ], answer:0,
    why:'Proline within a chain has no backbone N-H to donate to the helical hydrogen-bonding network, and its ring blocks the required backbone angles. Both effects interrupt the helix at the site of the substitution.' },

  { id:'AA-090', m:'final', area:'Post-translational modifications', level:'concept',
    stem:'Kinases attach phosphate groups to which set of residues?',
    options:[
      'Serine, threonine, and tyrosine',
      'Asparagine, glutamine, and histidine',
      'Cysteine, methionine, and proline',
      'Lysine, arginine, and aspartate'
    ], answer:0,
    why:'Each of these three residues offers a hydroxyl group for phosphate transfer: two aliphatic alcohols and one aromatic alcohol.' },

  { id:'AA-091', m:'final', area:'Post-translational modifications', level:'application',
    stem:'To which atom of asparagine is the sugar attached in N-linked glycosylation?',
    options:[
      'The amide nitrogen of the side chain',
      'The hydroxyl oxygen of the side chain',
      'The backbone alpha-amino nitrogen',
      'The sulfur of the side chain'
    ], answer:0,
    why:'The linkage is made to the side-chain amide nitrogen, which is what makes it N-linked. O-linked sugars instead attach to the hydroxyl oxygen of serine or threonine.' },

  { id:'AA-092', m:'final', area:'Pharmacy application', level:'integration',
    stem:'A drug is designed to block a kinase in a signalling pathway. What direct effect does it have on the kinase\'s target proteins?',
    options:[
      'They remain unphosphorylated',
      'They become permanently phosphorylated',
      'They lose their existing glycosylation',
      'They are cleaved into shorter fragments'
    ], answer:0,
    why:'Kinases add phosphate groups, so inhibiting one prevents its targets from being phosphorylated. Phosphatases continue removing any phosphate already present, so the targets settle into the unphosphorylated state.' },

  { id:'AA-093', m:'final', area:'Post-translational modifications', level:'concept',
    stem:'Which modification converts an inactive propeptide into a functional protein?',
    options:[
      'Cleavage of a specific peptide segment',
      'Addition of a phosphate group',
      'Addition of an N-linked sugar',
      'Formation of a lipid anchor'
    ], answer:0,
    why:'Propeptides are activated by proteolytic removal of a defined segment. The other modifications listed all occur in cells but do not describe propeptide activation.' },

  { id:'AA-094', m:'final', area:'Post-translational modifications', level:'application',
    stem:'Which enzyme reverses the action of a kinase?',
    options:['A phosphatase','A glycosyltransferase','A protease','A second kinase'], answer:0,
    why:'Phosphatases remove the phosphate groups that kinases add. This opposing pair is what makes phosphorylation a reversible switch rather than a one-way change.' },

  { id:'AA-095', m:'final', area:'Protein structure', level:'integration',
    stem:'Each antibody chain contains a variable domain and one to three constant domains. What does this arrangement allow?',
    options:[
      'One region can change to recognise different antigens while the rest stays the same',
      'The whole molecule must be redesigned for each antigen',
      'The protein can function without any quaternary structure',
      'The chains can be joined without any stabilising interactions'
    ], answer:0,
    why:'Separating variable from constant domains means antigen specificity can change independently of the rest of the molecule. Therapeutic monoclonal antibodies are built on exactly this modularity.' },

  { id:'AA-096', m:'final', area:'Pharmacy application', level:'integration',
    stem:'Why are membrane-spanning regions of receptors typically built from alpha helices with hydrophobic residues facing outward?',
    options:[
      'The outward-facing side chains contact the lipid interior of the membrane',
      'The outward-facing side chains contact the aqueous cytoplasm',
      'Hydrophobic side chains form the hydrogen bonds that hold the helix together',
      'Alpha helices are the only structure able to form inside a cell'
    ], answer:0,
    why:'In a helix the backbone hydrogen bonds inward and the side chains project outward, so a helix with hydrophobic side chains presents a greasy surface that matches the lipid bilayer. Beta barrels can also span membranes, but helices are far more common in receptors such as GPCRs.' }
];
