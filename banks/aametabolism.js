/* ============================================================
   QUESTION BANK — Amino Acid Metabolism & Biosynthesis
   Pure data: no dependency on shared/ or on any page element.
   Safe to open and edit in BankBridge. Structure (modules and
   sections) lives in banks/aametabolism.manifest.js, not here.
   Question IDs (AAM-###) are permanent — never renumber or reuse.
   ============================================================ */
var TOPIC_ID    = 'aametabolism';
var TOPIC_TITLE = 'Amino Acid Metabolism & Biosynthesis';

var CHECKPOINTS = {
  "c1": {
    "options": [
      "Leucine is made from pyruvate by transamination, so intake is unaffected",
      "Protein synthesis becomes limited, because humans have no pathway that builds leucine",
      "Leucine is made from α-ketoglutarate in the liver, so intake is unaffected",
      "Isoleucine, its structural isomer, is inserted into proteins in its place"
    ],
    "answer": 1,
    "why": "Leucine is one of the nine essential amino acids. With no human biosynthetic pathway, a diet lacking it limits every protein that contains leucine, regardless of how much of the other amino acids is available."
  },
  "c1b": {
    "options": [
      "Loss of alanine transaminase activity",
      "Loss of phenylalanine hydroxylase activity",
      "Loss of glutamine synthetase activity",
      "Loss of tyrosine hydroxylase activity"
    ],
    "answer": 1,
    "why": "Humans make tyrosine by hydroxylating phenylalanine (phenylalanine hydroxylase, PAH). If PAH fails, as in phenylketonuria, tyrosine can no longer be made and has to come from the diet. Tyrosine hydroxylase acts one step later and uses tyrosine rather than making it."
  },
  "c1c": {
    "options": [
      "Urea recycled by the kidney",
      "Fatty acids released from adipose tissue",
      "Intermediates of glycolysis and the citric acid cycle",
      "Ketone bodies released by the liver"
    ],
    "answer": 2,
    "why": "Nonessential amino acids are built on carbon skeletons borrowed from glucose metabolism: 3-phosphoglycerate, pyruvate, oxaloacetate, and α-ketoglutarate. Module 4 organizes the biosynthetic families around exactly these precursors."
  },
  "c2": {
    "options": [
      "Surplus amino acids are too large to be taken up by hepatocytes",
      "Surplus amino acids are secreted back into the intestine for excretion",
      "Amino acids lack a dedicated storage form like glycogen or triacylglycerol",
      "Surplus amino acids inhibit ribosomes and halt protein synthesis"
    ],
    "answer": 2,
    "why": "Carbohydrate can be stored as glycogen and fat as triacylglycerol, but there is no amino acid reservoir. Anything beyond what protein synthesis needs has its nitrogen removed and its carbon skeleton burned or converted."
  },
  "c2b": {
    "options": [
      "Normal protein turnover",
      "Dietary protein excess",
      "Protein is used as fuel because carbohydrate is present but poorly utilized"
    ],
    "answer": 2,
    "why": "Without insulin, cells cannot take up and use glucose effectively, even though blood glucose is high. The body responds as if carbohydrate were unavailable and breaks down muscle protein for fuel, the third catabolic circumstance."
  },
  "c3": {
    "options": [
      "It requires pH 1–2 and is inactive at the neutral pH of the pancreas",
      "It is stored bound to stomach acid until it is secreted",
      "Pancreatic proteins lack the peptide bonds that trypsin cleaves",
      "It is made as inactive trypsinogen and activated after reaching the small intestine"
    ],
    "answer": 3,
    "why": "Digestive proteases are synthesized as zymogens. Trypsinogen stays inactive inside the pancreas and is switched on by enteropeptidase in the small intestine. The pH 1–2 requirement belongs to pepsin, not trypsin."
  },
  "c3b": {
    "options": [
      "Exposure to hydrochloric acid in the stomach",
      "Cleavage by pepsin in the stomach",
      "Cleavage by trypsin in the small intestine",
      "Cleavage by enteropeptidase at the intestinal lining"
    ],
    "answer": 2,
    "why": "The pancreatic cascade runs enteropeptidase → trypsin → chymotrypsin. Enteropeptidase activates trypsinogen; trypsin then activates chymotrypsinogen. That dependency means a single upstream failure silences both enzymes."
  },
  "c3c": {
    "options": [
      "Chymotrypsin",
      "Trypsin",
      "Pepsin",
      "Enteropeptidase"
    ],
    "answer": 2,
    "why": "Pepsin works best at pH 1–2, and acid is also what converts pepsinogen into pepsin. At pH 6 both activation and activity suffer. Trypsin and chymotrypsin work at the neutral pH of the small intestine."
  },
  "c4": {
    "options": [
      "Pyridoxal phosphate (PLP)",
      "Cobalamin (B₁₂)",
      "Tetrahydrofolate (THF)",
      "Tetrahydrobiopterin (BH₄)"
    ],
    "answer": 0,
    "why": "Moving an amino group between an amino acid and an α-keto acid is transamination, and every aminotransferase uses PLP, the active form of vitamin B₆. PLP temporarily holds the amino group (as pyridoxamine phosphate) between the two half-reactions."
  },
  "c4b": {
    "options": [
      "Cobalamin (B₁₂)",
      "Tetrahydrobiopterin (BH₄)",
      "Tetrahydrofolate (THF)",
      "Pyridoxal phosphate (PLP)"
    ],
    "answer": 1,
    "why": "Adding a hydroxyl group to an aromatic ring is the signature of the aromatic amino acid hydroxylases (phenylalanine, tyrosine, and tryptophan hydroxylase), which all use BH₄."
  },
  "c4c": {
    "options": [
      "Cobalamin (B₁₂)",
      "Tetrahydrobiopterin (BH₄)",
      "Pyridoxal phosphate (PLP)",
      "Tetrahydrofolate (THF)"
    ],
    "answer": 1,
    "why": "BH₄ is synthesized by the body, so it is a cofactor but not a vitamin. PLP comes from vitamin B₆, THF from folate (B₉), and cobalamin is vitamin B₁₂."
  },
  "c5": {
    "options": [
      "Oxaloacetate and glutamine",
      "Pyruvate and glutamate",
      "Oxaloacetate and glutamate",
      "Fumarate and glutamate"
    ],
    "answer": 2,
    "why": "Transamination swaps an amino group for a keto group. Aspartate loses its amino group and becomes its α-keto acid, oxaloacetate; α-ketoglutarate gains the amino group and becomes glutamate. This is the AST reaction."
  },
  "c5b": {
    "options": [
      "Nitrogen is converted into urea inside the muscle cell",
      "PLP is no longer needed in any later step",
      "Amino groups from many amino acids collect on one carrier, glutamate, that a few enzymes can process",
      "Each amino group transferred generates one ATP directly"
    ],
    "answer": 2,
    "why": "Funneling nitrogen onto α-ketoglutarate means the cell only needs a small set of downstream enzymes (glutamate dehydrogenase, glutamine synthetase, ALT) to handle nitrogen from nearly every amino acid."
  },
  "c5c": {
    "options": [
      "Injured hepatocytes are releasing their aminotransferases into the blood",
      "Vitamin B₆ deficiency is raising aminotransferase activity in the blood",
      "The urea cycle is producing extra aminotransferases to clear ammonia",
      "Dietary protein excess is inducing aminotransferase secretion by the intestine"
    ],
    "answer": 0,
    "why": "ALT and AST work inside liver cells. When hepatocytes are damaged, the enzymes leak into the circulation, which is why they are used as markers of liver injury. B₆ deficiency would, if anything, lower measured activity, since both enzymes need PLP."
  },
  "c6": {
    "options": [
      "Glutamate",
      "Alanine",
      "Aspartate",
      "Glutamine"
    ],
    "answer": 1,
    "why": "In the glucose–alanine (Cahill) cycle, muscle hands nitrogen to pyruvate to make alanine. In the liver, alanine gives up its nitrogen and becomes pyruvate again, which the liver can turn into glucose for the muscle. Glutamine carries nitrogen too, but its carbon is not returned to the muscle as glucose in this cycle."
  },
  "c6b": {
    "options": [
      "Ligase",
      "Hydrolase",
      "Transferase",
      "Lyase"
    ],
    "answer": 0,
    "why": "Glutamine synthetase forms a new C–N (amide) bond and pays for it by hydrolyzing ATP. Joining two molecules with energy from ATP is the definition of a ligase."
  },
  "c6c": {
    "options": [
      "It regenerates glutamine to supply ATP to the urea cycle",
      "It captures NH₄⁺ that escapes the urea cycle before it can reach the circulation",
      "It supplies aspartate to argininosuccinate synthetase",
      "It converts urea back into amino acids for protein synthesis"
    ],
    "answer": 1,
    "why": "The liver releases NH₄⁺ from glutamine (glutaminase) to feed the urea cycle, but some ammonium escapes. Glutamine synthetase acts as a scavenger that traps that leftover NH₄⁺ in a non-toxic form before it enters the blood."
  },
  "c7": {
    "options": [
      "Carbamoyl phosphate synthetase I and ornithine transcarbamoylase",
      "Argininosuccinate lyase and arginase",
      "Ornithine transcarbamoylase and argininosuccinate synthetase",
      "Argininosuccinate synthetase and argininosuccinate lyase"
    ],
    "answer": 0,
    "why": "The cycle begins in the mitochondrial matrix: CPS I makes carbamoyl phosphate and OTC combines it with ornithine to form citrulline. Citrulline then exits to the cytosol, where the remaining three steps occur."
  },
  "c7b": {
    "options": [
      "Glutamine",
      "Aspartate",
      "Free ammonium",
      "Ornithine"
    ],
    "answer": 1,
    "why": "One nitrogen of urea arrives as free NH₄⁺ at CPS I. The second is carried in by aspartate, which condenses with citrulline at argininosuccinate synthetase."
  },
  "c7c": {
    "options": [
      "Ornithine, which returns to the mitochondria to accept the next carbamoyl phosphate",
      "Aspartate, which donates nitrogen on the next turn",
      "Fumarate, which enters the citric acid cycle",
      "Citrulline, which leaves the mitochondria to react with aspartate"
    ],
    "answer": 0,
    "why": "Arginase hydrolyzes arginine into urea and ornithine. Ornithine is the carrier that makes the pathway a cycle: it re-enters the mitochondria for the next OTC reaction."
  },
  "c8": {
    "options": [
      "Donating the second nitrogen atom of urea",
      "Transporting citrulline out of the mitochondria",
      "Allosterically activating carbamoyl phosphate synthetase I",
      "Inhibiting arginase when ammonia is low"
    ],
    "answer": 2,
    "why": "CPS I is nearly inactive without its allosteric activator, N-acetylglutamate. NAG is made from glutamate and acetyl-CoA, and its synthesis rises when amino acid breakdown (and arginine) increases, matching urea cycle capacity to the nitrogen load."
  },
  "c8b": {
    "options": [
      "Fumarate is excreted with urea and carries phosphate away",
      "Fumarate is directly phosphorylated to regenerate ATP",
      "Fumarate is converted to malate and oxaloacetate, producing NADH in the citric acid cycle",
      "Fumarate activates CPS I so that step uses less ATP"
    ],
    "answer": 2,
    "why": "Fumarate from argininosuccinate lyase can be hydrated to malate and oxidized to oxaloacetate, generating NADH that feeds oxidative phosphorylation. That recovers part of the energy the cycle spends. Oxaloacetate can also be used for gluconeogenesis or transaminated back to aspartate."
  },
  "c8c": {
    "options": [
      "Ornithine transcarbamoylase",
      "Argininosuccinate synthetase",
      "Carbamoyl phosphate synthetase I",
      "Arginase"
    ],
    "answer": 0,
    "why": "Normal carbamoyl phosphate with low citrulline points to the step that consumes carbamoyl phosphate and produces citrulline: OTC. OTC deficiency is the most frequent inherited urea cycle disorder."
  },
  "c9": {
    "options": [
      "Succinyl-CoA",
      "Fumarate",
      "Oxaloacetate",
      "α-Ketoglutarate"
    ],
    "answer": 3,
    "why": "These five amino acids form the \"glutamate family.\" Each is converted to glutamate, and glutamate becomes α-ketoglutarate, which links nitrogen metabolism directly to the citric acid cycle."
  },
  "c9b": {
    "options": [
      "Acetyl-CoA",
      "α-Ketoglutarate",
      "Succinyl-CoA",
      "Fumarate"
    ],
    "answer": 2,
    "why": "Methionine, valine, threonine, and isoleucine are degraded through propionyl-CoA and methylmalonyl-CoA to succinyl-CoA."
  },
  "c10": {
    "options": [
      "Yes, because oxaloacetate can be converted to phosphoenolpyruvate and then to glucose",
      "Yes, after it is first converted to acetyl-CoA",
      "No, because oxaloacetate is used to make ketone bodies",
      "No, because oxaloacetate is consumed when it combines with acetyl-CoA"
    ],
    "answer": 0,
    "why": "Oxaloacetate is the starting point of gluconeogenesis (oxaloacetate → PEP → glucose). Any carbon skeleton that becomes oxaloacetate, or a citric acid cycle intermediate that turns into it, can supply net glucose."
  },
  "c10b": {
    "options": [
      "Acetyl-CoA is converted directly into urea",
      "Pyruvate dehydrogenase is irreversible, and each acetyl group entering the citric acid cycle is matched by two CO₂ lost",
      "Leucine’s nitrogen blocks phosphoenolpyruvate carboxykinase",
      "Acetyl-CoA is too large to cross the mitochondrial membrane"
    ],
    "answer": 1,
    "why": "Acetyl-CoA cannot be turned back into pyruvate, and although its two carbons enter the citric acid cycle, two carbons leave as CO₂ before oxaloacetate is regenerated. There is no net gain of oxaloacetate, so no net glucose."
  },
  "c10c": {
    "options": [
      "Ketone bodies",
      "Blood glucose",
      "Muscle glycogen",
      "Liver glycogen"
    ],
    "answer": 0,
    "why": "Ketogenic amino acids are degraded to acetyl-CoA or acetoacetyl-CoA, the building blocks of ketone bodies. During starvation, ketone bodies become a major fuel for the brain and heart."
  },
  "c11": {
    "options": [
      "Both glucogenic and ketogenic",
      "Glucogenic",
      "Ketogenic"
    ],
    "answer": 0,
    "why": "Fumarate is a citric acid cycle intermediate (glucogenic), and acetoacetyl-CoA can form ketone bodies (ketogenic). An amino acid that yields one of each is classified as both."
  },
  "c11b": {
    "options": [
      "Isoleucine and threonine",
      "Leucine and lysine",
      "Alanine and serine",
      "Phenylalanine and tyrosine"
    ],
    "answer": 1,
    "why": "Leucine and lysine are degraded to acetyl-CoA and/or acetoacetyl-CoA with no pyruvate or citric acid cycle intermediate among their products, so they are exclusively ketogenic. The other pairs each include a glucogenic product."
  },
  "c12": {
    "options": [
      "Free ammonium",
      "Alanine",
      "Glutamine",
      "Glutamate"
    ],
    "answer": 3,
    "why": "Aspartate is made by transamination: glutamate hands its amino group to oxaloacetate, giving aspartate and α-ketoglutarate. This is the AST reaction running in the biosynthetic direction."
  },
  "c12b": {
    "options": [
      "The citric acid cycle, through oxaloacetate",
      "Glycolysis, through 3-phosphoglycerate",
      "Ketogenesis, through acetoacetyl-CoA",
      "The urea cycle, through ornithine"
    ],
    "answer": 1,
    "why": "3-Phosphoglycerate is converted to serine. Serine then donates carbon to glycine and to cysteine (the sulfur of cysteine comes from methionine via homocysteine)."
  },
  "c12c": {
    "options": [
      "α-Ketoglutarate",
      "Succinyl-CoA",
      "Fumarate",
      "Oxaloacetate"
    ],
    "answer": 0,
    "why": "α-Ketoglutarate → glutamate → glutamate semialdehyde, which branches to proline or to ornithine. Ornithine feeds the urea cycle, which produces arginine."
  },
  "c13": {
    "options": [
      "Asparagine synthetase",
      "Argininosuccinate synthetase",
      "Asparaginase",
      "Aspartate transaminase"
    ],
    "answer": 0,
    "why": "The naming pattern is parallel: glutamate → glutamine by glutamine synthetase, aspartate → asparagine by asparagine synthetase. The reverse hydrolytic enzymes are glutaminase and asparaginase."
  },
  "c13b": {
    "options": [
      "Lyase",
      "Oxidoreductase",
      "Hydrolase",
      "Ligase"
    ],
    "answer": 2,
    "why": "Glutaminase uses water to break the amide C–N bond of glutamine, releasing NH₄⁺. Using water to cleave a bond defines a hydrolase."
  },
  "c13c": {
    "options": [
      "It oxidizes aspartate to oxaloacetate",
      "It supplies the nitrogen atom of the amide group",
      "It phosphorylates asparagine for export from the cell",
      "It activates the side-chain carboxylate of aspartate so the amide bond can form"
    ],
    "answer": 3,
    "why": "A carboxylate is a poor target for nitrogen. ATP transfers AMP onto it, forming a reactive acyl-adenylate intermediate, and releases PPᵢ. Ammonia (supplied by glutamine in human cells) then displaces AMP to form the amide."
  },
  "c14": {
    "options": [
      "Adenosine and homocysteine",
      "Cysteine and α-ketobutyrate",
      "Methionine and ATP",
      "Cystathionine and water"
    ],
    "answer": 0,
    "why": "SAM → (methyl donated) → S-adenosylhomocysteine → (hydrolysis) → adenosine + homocysteine. Homocysteine is the branch point between methionine regeneration and cysteine synthesis."
  },
  "c14b": {
    "options": [
      "Pyridoxal phosphate and tetrahydrofolate",
      "Cobalamin (B₁₂) and tetrahydrobiopterin",
      "Cobalamin (B₁₂) and tetrahydrofolate",
      "Pyridoxal phosphate and tetrahydrobiopterin"
    ],
    "answer": 2,
    "why": "Methionine synthase takes the methyl group from N⁵-methyl-THF, passes it through cobalamin, and delivers it to homocysteine. The reaction also regenerates free THF."
  },
  "c14c": {
    "options": [
      "Activation of cystathionine β-synthase, sending homocysteine toward cysteine",
      "Inhibition of arginase, sending homocysteine toward urea",
      "Activation of methionine synthase, sending homocysteine toward methionine",
      "Activation of glutamine synthetase, sending homocysteine toward glutamine"
    ],
    "answer": 0,
    "why": "High SAM signals that methionine is plentiful. SAM activates cystathionine β-synthase, so homocysteine is committed to cysteine synthesis rather than recycled into more methionine."
  },
  "c15": {
    "options": [
      "S-adenosylmethionine (SAM)",
      "Ascorbate (vitamin C)",
      "Tetrahydrobiopterin (BH₄)",
      "Pyridoxal phosphate (PLP)"
    ],
    "answer": 2,
    "why": "Phenylalanine hydroxylase, tyrosine hydroxylase, and tryptophan hydroxylase are the aromatic amino acid hydroxylases, and all three use BH₄."
  },
  "c15b": {
    "options": [
      "Tyrosine hydroxylase (TH)",
      "Dopamine β-hydroxylase (DBH)",
      "Aromatic amino acid decarboxylase (AADC)",
      "Phenylethanolamine N-methyltransferase (PNMT)"
    ],
    "answer": 3,
    "why": "PNMT transfers a methyl group from SAM onto the nitrogen of norepinephrine, producing epinephrine. A methyl transfer from SAM points to a methyltransferase."
  },
  "c15c": {
    "options": [
      "S-adenosylmethionine (SAM)",
      "Pyridoxal phosphate (PLP)",
      "Tetrahydrofolate (THF)",
      "Tetrahydrobiopterin (BH₄)"
    ],
    "answer": 1,
    "why": "Amino acid decarboxylases, including AADC, use PLP. PLP is best known from transamination, but it also stabilizes the intermediate formed when CO₂ leaves."
  },
  "c16": {
    "options": [
      "Dopamine β-hydroxylase",
      "Phenylethanolamine N-methyltransferase",
      "Phenylalanine hydroxylase",
      "Aromatic amino acid decarboxylase"
    ],
    "answer": 2,
    "why": "Tryptophan hydroxylase hydroxylates the aromatic ring of tryptophan using BH₄ and O₂, just as phenylalanine hydroxylase does to phenylalanine. Both catalyze the first committed step of their pathway."
  },
  "c16b": {
    "options": [
      "Histidine",
      "Tyrosine",
      "Phenylalanine",
      "Tryptophan"
    ],
    "answer": 3,
    "why": "Tryptophan → 5-hydroxytryptophan → serotonin → N-acetylserotonin → melatonin. The last step uses SAM as the methyl donor."
  },
  "c17": {
    "options": [
      "CO₂",
      "H₂O",
      "NH₄⁺",
      "A methyl group"
    ],
    "answer": 0,
    "why": "Histidine decarboxylase removes the carboxyl group as CO₂, leaving histamine. The amino group stays, which is why histamine is an amine."
  },
  "c17b": {
    "options": [
      "Glutamine, cysteine, and glycine",
      "Glutamate, cysteine, and glycine",
      "Glutamate, serine, and glycine",
      "Glutamate, cysteine, and alanine"
    ],
    "answer": 1,
    "why": "Glutathione is γ-glutamyl-cysteinyl-glycine. The cysteine thiol (–SH) is the reactive group that lets it neutralize oxidants."
  },
  "c17c": {
    "options": [
      "Glutathione is decarboxylated to release CO₂",
      "Glutathione is reduced by NADPH",
      "Two glutathione molecules are oxidized and joined by a disulfide bond",
      "Glutathione is methylated by SAM"
    ],
    "answer": 2,
    "why": "Glutathione peroxidase uses the –SH groups of two glutathione molecules to reduce the oxidant, forming oxidized glutathione (GSSG) with a disulfide bond. Glutathione reductase later restores GSH using NADPH."
  },
  "c18": {
    "options": [
      "Phenylalanine transaminase",
      "Tyrosine hydroxylase",
      "Aromatic amino acid decarboxylase",
      "Phenylalanine hydroxylase"
    ],
    "answer": 3,
    "why": "PKU is caused by defective phenylalanine hydroxylase. Phenylalanine builds up because its main route out, conversion to tyrosine, is blocked."
  },
  "c18b": {
    "options": [
      "Excess tyrosine inhibits dopamine β-hydroxylase",
      "Phenylalanine is converted directly to dopamine by AADC",
      "PAH deficiency destroys the BH₄ supply",
      "Less tyrosine is made from phenylalanine, reducing substrate for tyrosine hydroxylase"
    ],
    "answer": 3,
    "why": "In PKU, the body cannot make tyrosine from phenylalanine, so tyrosine hydroxylase has less substrate unless the diet supplies tyrosine. This is the pathway reason tyrosine becomes conditionally essential."
  }
};

var CARDS = [
  {
    "id": "AAM-CARD-01",
    "t": "Essential amino acids (9)",
    "d": "His, Ile, Leu, Lys, Met, Phe, Thr, Trp, Val. No human biosynthetic pathway, so they must come from the diet. Memory aid: \"PVT TIM HaLL.\""
  },
  {
    "id": "AAM-CARD-02",
    "t": "Conditionally essential amino acids",
    "d": "Arg, Cys, Gln, Gly, Pro, Tyr. Normally made by the body, but required from the diet when synthesis cannot keep up (for example, tyrosine in PKU)."
  },
  {
    "id": "AAM-CARD-03",
    "t": "Three circumstances of amino acid catabolism",
    "d": "1) Normal protein turnover. 2) Dietary protein beyond synthetic needs (amino acids are not stored). 3) Carbohydrate unavailable or not properly used, so protein is burned as fuel."
  },
  {
    "id": "AAM-CARD-04",
    "t": "Zymogen",
    "d": "An inactive enzyme precursor. Digestive proteases are made this way so they cannot digest the cells that produce them."
  },
  {
    "id": "AAM-CARD-05",
    "t": "Pepsinogen → pepsin",
    "d": "Activated by stomach acid. Pepsin works best at pH 1–2."
  },
  {
    "id": "AAM-CARD-06",
    "t": "Trypsinogen → trypsin",
    "d": "Activated by enteropeptidase in the small intestine. Trypsin then activates chymotrypsinogen."
  },
  {
    "id": "AAM-CARD-07",
    "t": "PLP (from vitamin B₆)",
    "d": "Cofactor for aminotransferases and amino acid decarboxylases (e.g., AADC). Reaction clue: an amino group moves or CO₂ leaves an amino acid."
  },
  {
    "id": "AAM-CARD-08",
    "t": "THF (from folate, B₉)",
    "d": "Carrier of one-carbon units. Reaction clue: a methyl, methylene, or formyl group is handed off. Works with B₁₂ in methionine synthase."
  },
  {
    "id": "AAM-CARD-09",
    "t": "BH₄ (tetrahydrobiopterin)",
    "d": "Made by the body. Cofactor for the aromatic amino acid hydroxylases: phenylalanine, tyrosine, and tryptophan hydroxylase."
  },
  {
    "id": "AAM-CARD-10",
    "t": "Cobalamin (B₁₂)",
    "d": "Contains cobalt. Required by methionine synthase to move a methyl group from N⁵-methyl-THF to homocysteine."
  },
  {
    "id": "AAM-CARD-11",
    "t": "Transamination",
    "d": "Amino acid₁ + α-keto acid₂ ⇌ α-keto acid₁ + amino acid₂. Catalyzed by aminotransferases using PLP; no free NH₄⁺ is released."
  },
  {
    "id": "AAM-CARD-12",
    "t": "ALT and AST",
    "d": "Alanine and aspartate aminotransferases. Released into blood when hepatocytes are injured, so they serve as liver-injury markers."
  },
  {
    "id": "AAM-CARD-13",
    "t": "Glutamate dehydrogenase",
    "d": "Glutamate + NAD(P)⁺ ⇌ α-ketoglutarate + NH₄⁺ + NAD(P)H. Reversible oxidoreductase that links nitrogen release to the citric acid cycle."
  },
  {
    "id": "AAM-CARD-14",
    "t": "Glutamine synthetase",
    "d": "Glutamate + NH₄⁺ + ATP → glutamine. A ligase. Packages ammonia safely in peripheral tissues and scavenges escaped NH₄⁺ in the liver."
  },
  {
    "id": "AAM-CARD-15",
    "t": "Glutaminase",
    "d": "Glutamine + H₂O → glutamate + NH₄⁺. A hydrolase that releases nitrogen in the liver and kidney."
  },
  {
    "id": "AAM-CARD-16",
    "t": "Glucose–alanine (Cahill) cycle",
    "d": "Muscle: pyruvate + glutamate → alanine. Liver: alanine → pyruvate (nitrogen to urea) → glucose, which returns to muscle."
  },
  {
    "id": "AAM-CARD-17",
    "t": "Main blood nitrogen carriers",
    "d": "Alanine (almost exclusively from muscle to liver) and glutamine (from all peripheral tissues; the most abundant amino acid in blood)."
  },
  {
    "id": "AAM-CARD-18",
    "t": "Urea cycle step 1",
    "d": "Carbamoyl phosphate synthetase I (mitochondria): NH₄⁺ + HCO₃⁻ + 2 ATP → carbamoyl phosphate. Requires N-acetylglutamate."
  },
  {
    "id": "AAM-CARD-19",
    "t": "Urea cycle step 2",
    "d": "Ornithine transcarbamoylase (mitochondria): carbamoyl phosphate + ornithine → citrulline. Citrulline then leaves for the cytosol."
  },
  {
    "id": "AAM-CARD-20",
    "t": "Urea cycle step 3",
    "d": "Argininosuccinate synthetase (cytosol): citrulline + aspartate + ATP → argininosuccinate + AMP + PPᵢ. Aspartate brings the second urea nitrogen."
  },
  {
    "id": "AAM-CARD-21",
    "t": "Urea cycle step 4",
    "d": "Argininosuccinate lyase (cytosol): argininosuccinate → arginine + fumarate. Fumarate can enter the citric acid cycle."
  },
  {
    "id": "AAM-CARD-22",
    "t": "Urea cycle step 5",
    "d": "Arginase (cytosol): arginine + H₂O → urea + ornithine. Ornithine returns to the mitochondria."
  },
  {
    "id": "AAM-CARD-23",
    "t": "Urea cycle energy cost",
    "d": "3 ATP per urea, equivalent to 4 phosphoanhydride bonds (one ATP becomes AMP + PPᵢ). Fumarate lets some energy be recovered."
  },
  {
    "id": "AAM-CARD-24",
    "t": "N-acetylglutamate (NAG)",
    "d": "Made from glutamate + acetyl-CoA (stimulated by arginine). Obligatory allosteric activator of CPS I."
  },
  {
    "id": "AAM-CARD-25",
    "t": "Hyperammonemia",
    "d": "Elevated blood ammonia. Primary: urea cycle enzyme deficiency (OTC most frequent). Secondary: other enzyme defects or reduced liver function. Neurological symptoms."
  },
  {
    "id": "AAM-CARD-26",
    "t": "The seven carbon destinations",
    "d": "Pyruvate, acetyl-CoA, acetoacetyl-CoA, α-ketoglutarate, succinyl-CoA, fumarate, oxaloacetate."
  },
  {
    "id": "AAM-CARD-27",
    "t": "Glucogenic amino acid",
    "d": "Degraded to pyruvate or a citric acid cycle intermediate, so its carbon can support gluconeogenesis."
  },
  {
    "id": "AAM-CARD-28",
    "t": "Ketogenic amino acid",
    "d": "Degraded to acetyl-CoA or acetoacetyl-CoA, so its carbon can form ketone bodies but not net glucose."
  },
  {
    "id": "AAM-CARD-29",
    "t": "Exclusively ketogenic",
    "d": "Leucine and lysine."
  },
  {
    "id": "AAM-CARD-30",
    "t": "Both glucogenic and ketogenic",
    "d": "Isoleucine, phenylalanine, threonine, tryptophan, tyrosine."
  },
  {
    "id": "AAM-CARD-31",
    "t": "α-Ketoglutarate family",
    "d": "Synthesized: glutamate, glutamine, proline, arginine. Degraded to α-KG: those four plus histidine."
  },
  {
    "id": "AAM-CARD-32",
    "t": "Oxaloacetate family",
    "d": "Aspartate (transamination of oxaloacetate) and asparagine (asparagine synthetase)."
  },
  {
    "id": "AAM-CARD-33",
    "t": "Glycolysis family",
    "d": "3-Phosphoglycerate → serine → glycine or cysteine. Pyruvate ⇌ alanine."
  },
  {
    "id": "AAM-CARD-34",
    "t": "S-Adenosylmethionine (SAM)",
    "d": "Methionine + ATP. The major methyl donor. After donating, becomes S-adenosylhomocysteine → homocysteine + adenosine."
  },
  {
    "id": "AAM-CARD-35",
    "t": "Fates of homocysteine",
    "d": "Remethylated to methionine (methionine synthase, B₁₂ + THF) or combined with serine to form cystathionine → cysteine (CBS; activated by high SAM)."
  },
  {
    "id": "AAM-CARD-36",
    "t": "Synthetase vs. synthase",
    "d": "Synthetase = ligase that spends ATP (glutamine synthetase). Synthase = makes a product without ATP (cystathionine β-synthase is a lyase)."
  },
  {
    "id": "AAM-CARD-37",
    "t": "Catecholamine pathway",
    "d": "Phe →(PAH, BH₄) Tyr →(TH, BH₄) L-DOPA →(AADC, PLP) dopamine →(DBH, vitamin C) norepinephrine →(PNMT, SAM) epinephrine."
  },
  {
    "id": "AAM-CARD-38",
    "t": "Serotonin and melatonin pathway",
    "d": "Trp →(tryptophan hydroxylase, BH₄) 5-hydroxytryptophan →(AADC, PLP) serotonin → N-acetylserotonin →(SAM) melatonin."
  },
  {
    "id": "AAM-CARD-39",
    "t": "Histamine",
    "d": "Made from histidine by histidine decarboxylase (loses CO₂). Antihistamines block histamine receptors."
  },
  {
    "id": "AAM-CARD-40",
    "t": "Glutathione",
    "d": "γ-Glutamyl-cysteinyl-glycine. Peroxidase oxidizes 2 GSH → GSSG to neutralize oxidants; reductase uses NADPH to regenerate GSH."
  },
  {
    "id": "AAM-CARD-41",
    "t": "Phenylketonuria (PKU)",
    "d": "Defective phenylalanine hydroxylase. Phenylalanine accumulates and tyrosine becomes conditionally essential."
  }
];

var POOL = [
  {
    "id": "AAM-001",
    "m": "m1",
    "area": "Essential amino acids",
    "level": "concept",
    "stem": "How many of the 20 proteinogenic amino acids are classified as essential for humans?",
    "options": [
      "14",
      "11",
      "6",
      "9"
    ],
    "answer": 3,
    "why": "Nine amino acids (His, Ile, Leu, Lys, Met, Phe, Thr, Trp, Val) have no human biosynthetic pathway. The other 11 are nonessential, although six of those can become conditionally essential."
  },
  {
    "id": "AAM-002",
    "m": "m1",
    "area": "Essential amino acids",
    "level": "concept",
    "stem": "Which set is made up entirely of essential amino acids?",
    "options": [
      "Alanine, serine, glutamate",
      "Asparagine, aspartate, tyrosine",
      "Histidine, lysine, valine",
      "Glycine, proline, cysteine"
    ],
    "answer": 2,
    "why": "Histidine, lysine, and valine are essential. Alanine, serine, and glutamate are nonessential; glycine, proline, cysteine, and tyrosine are conditionally essential; asparagine and aspartate are nonessential."
  },
  {
    "id": "AAM-003",
    "m": "m1",
    "area": "Essential amino acids",
    "level": "application",
    "stem": "A parenteral nutrition formula is missing one amino acid. Protein synthesis falls despite ample supplies of the other 19. Which omitted amino acid best explains this?",
    "options": [
      "Alanine",
      "Glutamate",
      "Methionine",
      "Serine"
    ],
    "answer": 2,
    "why": "Methionine is essential, so its absence cannot be made up by synthesis. Serine, alanine, and glutamate can all be built from glucose-derived carbon skeletons and nitrogen from other amino acids."
  },
  {
    "id": "AAM-004",
    "m": "m1",
    "area": "Essential amino acids",
    "level": "application",
    "stem": "Cysteine is conditionally essential. A diet low in which amino acid would raise the dietary requirement for cysteine?",
    "options": [
      "Tyrosine",
      "Lysine",
      "Methionine",
      "Glycine"
    ],
    "answer": 2,
    "why": "The sulfur of cysteine comes from methionine (methionine → SAM → homocysteine → cystathionine → cysteine). If methionine is scarce, the body cannot make enough cysteine and needs more of it preformed."
  },
  {
    "id": "AAM-005",
    "m": "m1",
    "area": "Essential amino acids",
    "level": "integration",
    "stem": "A child with phenylketonuria (PKU) follows a phenylalanine-restricted diet. Why must the diet also provide tyrosine?",
    "options": [
      "Tyrosine is converted back into phenylalanine to restore normal levels",
      "Tyrosine is needed to regenerate BH₄ for phenylalanine hydroxylase",
      "Tyrosine donates nitrogen for urea synthesis in the liver",
      "Tyrosine is normally made from phenylalanine, so it becomes essential when phenylalanine hydroxylase is deficient"
    ],
    "answer": 3,
    "why": "In PKU, phenylalanine hydroxylase cannot convert phenylalanine to tyrosine. Restricting phenylalanine prevents its toxic buildup, but tyrosine, still needed for proteins and catecholamines, must then come from the diet."
  },
  {
    "id": "AAM-007",
    "m": "m1",
    "area": "Catabolic circumstances",
    "level": "concept",
    "stem": "Which situation represents amino acid catabolism during normal protein turnover?",
    "options": [
      "A high-protein meal supplies more amino acids than the body needs",
      "Glycogen stores are depleted after a prolonged fast",
      "Insulin is absent, so glucose is poorly used by cells",
      "Amino acids released from degraded cellular proteins exceed what new protein synthesis requires"
    ],
    "answer": 3,
    "why": "Cells constantly degrade and rebuild proteins. Some released amino acids are not reused for new synthesis and are catabolized. The other options describe fuel use during fasting, dietary excess, and failed carbohydrate utilization."
  },
  {
    "id": "AAM-008",
    "m": "m1",
    "area": "Catabolic circumstances",
    "level": "concept",
    "stem": "How does the body handle dietary amino acids consumed beyond its needs for protein synthesis?",
    "options": [
      "They are stored in adipose tissue as free amino acids",
      "They are stored in the kidney as urea for later use",
      "They are degraded, because amino acids have no dedicated storage form",
      "They are stored in the pancreas as zymogens"
    ],
    "answer": 2,
    "why": "Unlike glucose (glycogen) and fatty acids (triacylglycerol), amino acids are not stored. Surplus amino acids are deaminated; the nitrogen leaves as urea and the carbon skeletons are oxidized or converted to glucose or ketone bodies."
  },
  {
    "id": "AAM-009",
    "m": "m1",
    "area": "Catabolic circumstances",
    "level": "application",
    "stem": "After 48 hours of fasting, liver glycogen is depleted. What happens to skeletal muscle protein?",
    "options": [
      "It is synthesized faster to store incoming amino acids",
      "It is protected because fatty acids meet the full fuel demand",
      "It is converted directly into ketone bodies inside the muscle",
      "It is broken down so amino acid carbon skeletons can supply glucose and energy"
    ],
    "answer": 3,
    "why": "When carbohydrate is unavailable, cellular proteins are used as fuel. Muscle releases amino acids (especially alanine and glutamine) that the liver uses for gluconeogenesis."
  },
  {
    "id": "AAM-010",
    "m": "m1",
    "area": "Catabolic circumstances",
    "level": "application",
    "stem": "A patient with poorly controlled type 1 diabetes has high blood glucose and ongoing muscle wasting. Which statement explains the muscle loss?",
    "options": [
      "Insulin deficiency increases the absorption of dietary protein",
      "Excess glucose is converted into amino acids that are excreted",
      "High glucose activates pepsin inside muscle fibers",
      "Cells cannot use glucose properly, so protein is broken down for fuel"
    ],
    "answer": 3,
    "why": "This is the third catabolic circumstance: carbohydrate is present but not properly utilized. Without insulin signaling, tissues behave as if starved and turn to protein as fuel."
  },
  {
    "id": "AAM-011",
    "m": "m1",
    "area": "Catabolic circumstances",
    "level": "integration",
    "stem": "A healthy athlete eats twice the protein she needs each day. Which change in her nitrogen handling is expected?",
    "options": [
      "Urea production rises as surplus amino acids are degraded",
      "Essential amino acids are converted into nonessential ones for storage",
      "Muscle stores the surplus as a pool of free amino acids",
      "Urea production falls as the extra nitrogen is retained"
    ],
    "answer": 0,
    "why": "Surplus amino acids are catabolized rather than stored, so more nitrogen flows through transamination, glutamate dehydrogenase, and the urea cycle. Urea excretion rises in proportion to protein intake."
  },
  {
    "id": "AAM-012",
    "m": "m1",
    "area": "Proteolysis & zymogens",
    "level": "concept",
    "stem": "Where does the digestion of dietary protein begin?",
    "options": [
      "Stomach",
      "Pancreas",
      "Small intestine",
      "Mouth"
    ],
    "answer": 0,
    "why": "Protein digestion begins in the stomach, where acid denatures proteins and pepsin starts cleaving them, and finishes in the small intestine with pancreatic proteases and brush-border peptidases."
  },
  {
    "id": "AAM-013",
    "m": "m1",
    "area": "Proteolysis & zymogens",
    "level": "concept",
    "stem": "Besides activating pepsinogen, what does stomach acid contribute to protein digestion?",
    "options": [
      "It hydrolyzes peptide bonds to release free amino acids",
      "It denatures proteins, exposing peptide bonds to proteases",
      "It activates trypsinogen before it is secreted",
      "It carries amino acids across the stomach wall into the blood"
    ],
    "answer": 1,
    "why": "Low pH unfolds dietary proteins. An unfolded chain exposes far more peptide bonds to protease active sites, which makes digestion much faster."
  },
  {
    "id": "AAM-014",
    "m": "m1",
    "area": "Proteolysis & zymogens",
    "level": "application",
    "stem": "A patient has an inherited lack of enteropeptidase. Formation of which active enzyme is blocked first?",
    "options": [
      "Chymotrypsin",
      "Trypsin",
      "Aminopeptidase",
      "Pepsin"
    ],
    "answer": 1,
    "why": "Enteropeptidase converts trypsinogen to trypsin. Chymotrypsin activation also fails, but only as a consequence, because trypsin is what activates chymotrypsinogen. Pepsin is activated by stomach acid."
  },
  {
    "id": "AAM-015",
    "m": "m1",
    "area": "Proteolysis & zymogens",
    "level": "application",
    "stem": "Why is a combination of pepsin, trypsin, and chymotrypsin needed to digest dietary protein?",
    "options": [
      "Each cleaves at different sites, so no single enzyme can fully digest a protein",
      "Each is the zymogen form of the next enzyme",
      "Each works best at pH 7, so they must act together",
      "Each digests a different class of macronutrient"
    ],
    "answer": 0,
    "why": "Proteases have different cleavage preferences. Working together, they reduce proteins to oligopeptides, di- and tripeptides, and free amino acids that the intestine can absorb."
  },
  {
    "id": "AAM-016",
    "m": "m1",
    "area": "Proteolysis & zymogens",
    "level": "integration",
    "stem": "Premature activation of trypsin inside the pancreas is a key event in acute pancreatitis. Why does it cause such widespread tissue damage?",
    "options": [
      "Trypsin lowers the pH of pancreatic tissue to 1–2",
      "Trypsin inactivates enteropeptidase and blocks normal digestion",
      "Trypsin activates other zymogens, including chymotrypsinogen, amplifying digestion of pancreatic tissue",
      "Trypsin converts pepsinogen to pepsin inside the pancreas"
    ],
    "answer": 2,
    "why": "Trypsin sits near the top of the pancreatic activation cascade. Once active in the wrong place, it switches on chymotrypsin (and more trypsin), so a small activation event becomes self-amplifying. This is exactly the danger that zymogen synthesis normally prevents."
  },
  {
    "id": "AAM-017",
    "m": "m1",
    "area": "Cofactors",
    "level": "concept",
    "stem": "Pyridoxal phosphate is the active form of which vitamin?",
    "options": [
      "Vitamin B₉",
      "Vitamin B₁₂",
      "Vitamin B₁",
      "Vitamin B₆"
    ],
    "answer": 3,
    "why": "Pyridoxine (vitamin B₆) is converted to pyridoxal phosphate (PLP), the cofactor for aminotransferases and amino acid decarboxylases."
  },
  {
    "id": "AAM-018",
    "m": "m1",
    "area": "Cofactors",
    "level": "concept",
    "stem": "Which cofactor is used by the aromatic amino acid hydroxylases?",
    "options": [
      "Pyridoxal phosphate (PLP)",
      "Cobalamin (B₁₂)",
      "Tetrahydrobiopterin (BH₄)",
      "Tetrahydrofolate (THF)"
    ],
    "answer": 2,
    "why": "Phenylalanine hydroxylase, tyrosine hydroxylase, and tryptophan hydroxylase all use BH₄ to add a hydroxyl group to an aromatic ring."
  },
  {
    "id": "AAM-019",
    "m": "m1",
    "area": "Cofactors",
    "level": "application",
    "stem": "An enzyme transfers a formyl group, a one-carbon unit, onto a precursor during purine synthesis. Which cofactor carries that group?",
    "options": [
      "Tetrahydrofolate (THF)",
      "Tetrahydrobiopterin (BH₄)",
      "Cobalamin (B₁₂)",
      "Pyridoxal phosphate (PLP)"
    ],
    "answer": 0,
    "why": "THF, derived from folate, is the general carrier of one-carbon units (methyl, methylene, formyl). Recognizing \"one-carbon transfer\" is how to spot a THF reaction, whether in amino acid or nucleotide metabolism."
  },
  {
    "id": "AAM-020",
    "m": "m1",
    "area": "Cofactors",
    "level": "application",
    "stem": "Cobalt is required in human metabolism as part of which cofactor?",
    "options": [
      "Cobalamin (B₁₂)",
      "Pyridoxal phosphate (PLP)",
      "Tetrahydrofolate (THF)",
      "Tetrahydrobiopterin (BH₄)"
    ],
    "answer": 0,
    "why": "Cobalamin contains a cobalt ion held in a corrin ring. This is the only known biological use of cobalt in humans, and it is essential for methionine synthase."
  },
  {
    "id": "AAM-021",
    "m": "m1",
    "area": "Cofactors",
    "level": "integration",
    "stem": "A person who has followed a strict vegan diet for many years develops impaired methionine synthase activity. Which cofactor is most likely lacking?",
    "options": [
      "Niacin (vitamin B₃)",
      "Cobalamin (vitamin B₁₂)",
      "Pyridoxine (vitamin B₆)",
      "Tetrahydrobiopterin (BH₄)"
    ],
    "answer": 1,
    "why": "Vitamin B₁₂ is found almost exclusively in animal-derived foods, and methionine synthase requires it together with THF. B₆ is abundant in plants, and BH₄ is made by the body."
  },
  {
    "id": "AAM-022",
    "m": "m1",
    "area": "Cofactors",
    "level": "application",
    "stem": "Measured blood ALT activity can be falsely low in severe vitamin B₆ deficiency. What explains this?",
    "options": [
      "Aminotransferases need PLP, the active form of B₆, as their cofactor",
      "Vitamin B₆ is the amino group donor in transamination",
      "Vitamin B₆ is required to activate trypsinogen in the intestine",
      "Aminotransferases need BH₄, which is synthesized from B₆"
    ],
    "answer": 0,
    "why": "ALT and AST depend on PLP. When PLP is scarce, a larger fraction of the enzyme is inactive apoenzyme, so the measured activity underestimates the true amount present."
  },
  {
    "id": "AAM-023",
    "m": "m2",
    "area": "Transamination",
    "level": "concept",
    "stem": "In a transamination reaction, what does the amino acid that gives up its amino group become?",
    "options": [
      "Urea",
      "An amide",
      "A free ammonium ion",
      "An α-keto acid"
    ],
    "answer": 3,
    "why": "Transamination swaps functional groups: the donor amino acid becomes the corresponding α-keto acid, and the acceptor α-keto acid becomes an amino acid. No free NH₄⁺ is released."
  },
  {
    "id": "AAM-024",
    "m": "m2",
    "area": "Transamination",
    "level": "concept",
    "stem": "Alanine transaminase (ALT) moves the amino group of alanine onto α-ketoglutarate. What are the products?",
    "options": [
      "Lactate and glutamate",
      "Oxaloacetate and glutamate",
      "Pyruvate and glutamate",
      "Pyruvate and glutamine"
    ],
    "answer": 2,
    "why": "Alanine’s α-keto acid is pyruvate, and α-ketoglutarate’s amino acid is glutamate. Glutamine would require a second nitrogen added by glutamine synthetase."
  },
  {
    "id": "AAM-025",
    "m": "m2",
    "area": "Transamination",
    "level": "application",
    "stem": "A cell has plenty of glutamate but needs aspartate. Which pair of substrates should an aminotransferase use?",
    "options": [
      "Glutamine and oxaloacetate",
      "Glutamate and oxaloacetate",
      "Glutamate and pyruvate",
      "Glutamate and fumarate"
    ],
    "answer": 1,
    "why": "To make aspartate, the aminotransferase needs an amino donor (glutamate) and aspartate’s α-keto acid (oxaloacetate). Pyruvate would give alanine instead."
  },
  {
    "id": "AAM-026",
    "m": "m2",
    "area": "Transamination",
    "level": "application",
    "stem": "Why does α-ketoglutarate serve as the main acceptor for amino groups from many different amino acids?",
    "options": [
      "Its product, glutamate, can release NH₄⁺ through glutamate dehydrogenase or pass nitrogen to other carriers",
      "It binds PLP covalently and replaces the need for the enzyme",
      "It is an essential nutrient obtained from the diet",
      "It converts amino groups directly into urea"
    ],
    "answer": 0,
    "why": "Glutamate is the hub of nitrogen metabolism: glutamate dehydrogenase can release its nitrogen as NH₄⁺, glutamine synthetase can add a second nitrogen, and ALT or AST can pass it on. Collecting nitrogen on glutamate keeps downstream handling simple."
  },
  {
    "id": "AAM-027",
    "m": "m2",
    "area": "Transamination",
    "level": "integration",
    "stem": "A patient has markedly elevated ALT and AST along with rising blood ammonia. Which interpretation best links these findings?",
    "options": [
      "The kidney is releasing aminotransferases while retaining urea",
      "Hepatocyte injury releases aminotransferases and reduces the liver’s capacity to run the urea cycle",
      "An inherited urea cycle enzyme deficiency is causing aminotransferase release",
      "Muscle is exporting excess alanine, which raises ALT and ammonia together"
    ],
    "answer": 1,
    "why": "Leaking ALT and AST signal damaged hepatocytes. Because the urea cycle runs in the liver, reduced liver function also impairs ammonia clearance, producing secondary hyperammonemia."
  },
  {
    "id": "AAM-028",
    "m": "m2",
    "area": "Nitrogen transport",
    "level": "concept",
    "stem": "Which amino acid is present in the highest concentration in blood?",
    "options": [
      "Glutamate",
      "Glycine",
      "Glutamine",
      "Alanine"
    ],
    "answer": 2,
    "why": "Glutamine is made in essentially every peripheral tissue as a non-toxic nitrogen carrier, which makes it the most abundant amino acid in circulation."
  },
  {
    "id": "AAM-029",
    "m": "m2",
    "area": "Nitrogen transport",
    "level": "concept",
    "stem": "Which reaction does glutamate dehydrogenase catalyze?",
    "options": [
      "Transfer of the amino group of glutamate to pyruvate",
      "Reversible release of NH₄⁺ from glutamate, forming α-ketoglutarate",
      "Addition of NH₄⁺ to glutamate, forming glutamine",
      "Hydrolysis of glutamine, forming glutamate"
    ],
    "answer": 1,
    "why": "Glutamate dehydrogenase oxidatively deaminates glutamate using NAD(P)⁺, releasing NH₄⁺ and α-ketoglutarate. The reaction is reversible, so in peripheral tissues it can also capture NH₄⁺ onto α-ketoglutarate."
  },
  {
    "id": "AAM-030",
    "m": "m2",
    "area": "Nitrogen transport",
    "level": "application",
    "stem": "During intense exercise, muscle glycolysis produces abundant pyruvate. How does this help muscle export nitrogen?",
    "options": [
      "Pyruvate accepts amino groups from glutamate, forming alanine that travels to the liver",
      "Pyruvate is converted into glutamine for export",
      "Pyruvate combines with NH₄⁺ to form urea in muscle",
      "Pyruvate activates glutaminase to release ammonia into the blood"
    ],
    "answer": 0,
    "why": "This is the glucose–alanine (Cahill) cycle. Transamination of pyruvate makes alanine, which carries both nitrogen and a gluconeogenic carbon skeleton to the liver."
  },
  {
    "id": "AAM-031",
    "m": "m2",
    "area": "Nitrogen transport",
    "level": "application",
    "stem": "In the glucose–alanine (Cahill) cycle, what does the liver send back to skeletal muscle?",
    "options": [
      "Alanine",
      "Urea",
      "Glucose",
      "Pyruvate"
    ],
    "answer": 2,
    "why": "The liver removes alanine’s nitrogen for urea synthesis and converts the pyruvate carbon skeleton into glucose, which returns to muscle as fuel."
  },
  {
    "id": "AAM-032",
    "m": "m2",
    "area": "Nitrogen transport",
    "level": "integration",
    "stem": "In a hepatocyte, glutamine is split by glutaminase, and the resulting glutamate is oxidized by glutamate dehydrogenase. How many NH₄⁺ ions are released from one glutamine?",
    "options": [
      "Two",
      "Three",
      "One",
      "Four"
    ],
    "answer": 0,
    "why": "Glutaminase removes the side-chain amide nitrogen (NH₄⁺ #1). Glutamate dehydrogenase removes the α-amino nitrogen (NH₄⁺ #2). This is why glutamine is such an efficient nitrogen carrier."
  },
  {
    "id": "AAM-033",
    "m": "m2",
    "area": "Nitrogen transport",
    "level": "integration",
    "stem": "Why do peripheral tissues export waste nitrogen as glutamine rather than as free NH₄⁺?",
    "options": [
      "Glutamine carries two nitrogen atoms in a non-toxic form, avoiding ammonia buildup in the blood",
      "Free NH₄⁺ is too large to cross cell membranes",
      "Glutamine can be converted into urea by peripheral tissues",
      "Free NH₄⁺ is needed for ATP synthesis in peripheral tissues"
    ],
    "answer": 0,
    "why": "Ammonia is toxic, especially to the brain. Binding it into glutamine with glutamine synthetase lets tissues move nitrogen safely to the liver and kidney, where glutaminase releases it for disposal."
  },
  {
    "id": "AAM-034",
    "m": "m2",
    "area": "Urea cycle steps",
    "level": "concept",
    "stem": "Carbamoyl phosphate synthetase I uses ATP to combine which two substrates?",
    "options": [
      "NH₄⁺ and aspartate",
      "Glutamine and HCO₃⁻",
      "Ornithine and HCO₃⁻",
      "NH₄⁺ and HCO₃⁻"
    ],
    "answer": 3,
    "why": "CPS I joins free ammonium and bicarbonate, spending 2 ATP, to make carbamoyl phosphate in the mitochondrial matrix. (A different isozyme, CPS II, uses glutamine for pyrimidine synthesis.)"
  },
  {
    "id": "AAM-035",
    "m": "m2",
    "area": "Urea cycle steps",
    "level": "concept",
    "stem": "Which product is formed by ornithine transcarbamoylase?",
    "options": [
      "Citrulline",
      "Argininosuccinate",
      "Arginine",
      "Carbamoyl phosphate"
    ],
    "answer": 0,
    "why": "OTC transfers the carbamoyl group of carbamoyl phosphate onto ornithine, forming citrulline inside the mitochondria."
  },
  {
    "id": "AAM-036",
    "m": "m2",
    "area": "Urea cycle steps",
    "level": "application",
    "stem": "Which urea cycle intermediate is transported out of the mitochondria into the cytosol?",
    "options": [
      "Ornithine",
      "Argininosuccinate",
      "Citrulline",
      "Carbamoyl phosphate"
    ],
    "answer": 2,
    "why": "Citrulline leaves the mitochondria to react with aspartate in the cytosol. Ornithine travels the other way, returning to the matrix for the next turn."
  },
  {
    "id": "AAM-037",
    "m": "m2",
    "area": "Urea cycle steps",
    "level": "application",
    "stem": "Argininosuccinate synthetase converts one ATP to AMP and PPᵢ, and the PPᵢ is then hydrolyzed. How many phosphoanhydride bonds does this step consume?",
    "options": [
      "Three",
      "One",
      "Two",
      "Four"
    ],
    "answer": 2,
    "why": "ATP → AMP + PPᵢ breaks one phosphoanhydride bond, and PPᵢ → 2 Pᵢ breaks a second. Together with the 2 ATP at CPS I, the urea cycle spends four high-energy bonds per urea."
  },
  {
    "id": "AAM-038",
    "m": "m2",
    "area": "Urea cycle steps",
    "level": "application",
    "stem": "Argininosuccinate lyase cleaves argininosuccinate. Which pair of products forms?",
    "options": [
      "Citrulline and aspartate",
      "Arginine and fumarate",
      "Arginine and succinate",
      "Ornithine and urea"
    ],
    "answer": 1,
    "why": "The lyase releases the four-carbon portion donated by aspartate as fumarate (not succinate, despite the name), leaving arginine, which carries both urea nitrogens."
  },
  {
    "id": "AAM-039",
    "m": "m2",
    "area": "Urea cycle steps",
    "level": "integration",
    "stem": "Hepatocytes are given aspartate labeled with ¹⁵N in its amino group. After arginase acts, where is the label found?",
    "options": [
      "Urea",
      "Ornithine",
      "Carbamoyl phosphate",
      "Fumarate"
    ],
    "answer": 0,
    "why": "Aspartate’s nitrogen is incorporated into argininosuccinate, retained in arginine when fumarate leaves, and released in urea by arginase. Fumarate carries aspartate’s carbons, not its nitrogen."
  },
  {
    "id": "AAM-040",
    "m": "m2",
    "area": "Urea cycle regulation & disorders",
    "level": "concept",
    "stem": "Deficiency of which enzyme is the most frequent primary cause of hyperammonemia?",
    "options": [
      "Carbamoyl phosphate synthetase I",
      "Argininosuccinate lyase",
      "Ornithine transcarbamoylase",
      "Arginase"
    ],
    "answer": 2,
    "why": "OTC deficiency is the most prevalent inherited urea cycle disorder. It is X-linked, so affected males tend to present early and severely."
  },
  {
    "id": "AAM-041",
    "m": "m2",
    "area": "Urea cycle regulation & disorders",
    "level": "concept",
    "stem": "How many ATP molecules are consumed for each molecule of urea synthesized?",
    "options": [
      "4",
      "5",
      "2",
      "3"
    ],
    "answer": 3,
    "why": "CO₂ + NH₄⁺ + 3 ATP + aspartate + 2 H₂O → urea + 2 ADP + 2 Pᵢ + AMP + PPᵢ + fumarate. Two ATP are used at CPS I and one at argininosuccinate synthetase; because that one yields AMP + PPᵢ, the cost equals four phosphoanhydride bonds."
  },
  {
    "id": "AAM-042",
    "m": "m2",
    "area": "Urea cycle regulation & disorders",
    "level": "application",
    "stem": "A high-protein meal raises arginine levels in the liver. How does this increase urea cycle capacity?",
    "options": [
      "Arginine directly inhibits argininosuccinate lyase",
      "Arginine stimulates N-acetylglutamate synthesis, and N-acetylglutamate activates CPS I",
      "Arginine is converted into carbamoyl phosphate",
      "Arginine donates the second nitrogen atom of urea"
    ],
    "answer": 1,
    "why": "Arginine signals abundant amino acid breakdown and stimulates N-acetylglutamate synthase. The resulting NAG is the obligatory allosteric activator of CPS I, so flux into the cycle rises to match the nitrogen load."
  },
  {
    "id": "AAM-043",
    "m": "m2",
    "area": "Urea cycle regulation & disorders",
    "level": "integration",
    "stem": "In hyperammonemia, brain cells trap excess NH₄⁺ using glutamate dehydrogenase and glutamine synthetase. Which consequence of this trapping can impair brain energy production?",
    "options": [
      "Excess ATP produced by glutamine synthetase",
      "Depletion of α-ketoglutarate from the citric acid cycle",
      "Accumulation of acetyl-CoA derived from glutamine",
      "Loss of urea from brain cells"
    ],
    "answer": 1,
    "why": "Glutamate dehydrogenase pulls α-ketoglutarate out of the citric acid cycle to capture NH₄⁺. Draining this intermediate slows the cycle and ATP production, one reason the symptoms of hyperammonemia are neurological."
  },
  {
    "id": "AAM-044",
    "m": "m2",
    "area": "Urea cycle regulation & disorders",
    "level": "integration",
    "stem": "A patient has hyperammonemia and markedly elevated plasma citrulline. Which enzyme is most likely deficient?",
    "options": [
      "Argininosuccinate synthetase",
      "Ornithine transcarbamoylase",
      "Carbamoyl phosphate synthetase I",
      "Argininosuccinate lyase"
    ],
    "answer": 0,
    "why": "A metabolite accumulates just before a block. Citrulline is the substrate of argininosuccinate synthetase, so an ASS defect backs citrulline up. An OTC or CPS I defect would lower citrulline instead."
  },
  {
    "id": "AAM-045",
    "m": "m2",
    "area": "Urea cycle regulation & disorders",
    "level": "integration",
    "stem": "An infant has hyperammonemia with very low carbamoyl phosphate formation, yet the CPS I gene and protein are normal. Which enzyme deficiency best explains this?",
    "options": [
      "N-acetylglutamate synthase",
      "Ornithine transcarbamoylase",
      "Glutaminase",
      "Arginase"
    ],
    "answer": 0,
    "why": "CPS I is nearly inactive without N-acetylglutamate. A defect in N-acetylglutamate synthase therefore produces the same picture as CPS I deficiency even though CPS I itself is normal."
  },
  {
    "id": "AAM-046",
    "m": "m2",
    "area": "Urea cycle regulation & disorders",
    "level": "integration",
    "stem": "A patient incorporates free ammonium into carbamoyl phosphate normally, but nitrogen from aspartate fails to enter the cycle. Dysfunction of which reaction best explains the finding?",
    "options": [
      "Argininosuccinate → arginine + fumarate",
      "Arginine → urea + ornithine",
      "Citrulline + aspartate → argininosuccinate",
      "Carbamoyl phosphate + ornithine → citrulline"
    ],
    "answer": 2,
    "why": "Aspartate delivers the second nitrogen at argininosuccinate synthetase, where it condenses with citrulline. Later steps act on nitrogen that has already entered the cycle."
  },
  {
    "id": "AAM-047",
    "m": "m3",
    "area": "Metabolic destinations",
    "level": "concept",
    "stem": "The carbon skeletons of the 20 amino acids converge on how many metabolic intermediates?",
    "options": [
      "20",
      "7",
      "10",
      "5"
    ],
    "answer": 1,
    "why": "Pyruvate, acetyl-CoA, acetoacetyl-CoA, α-ketoglutarate, succinyl-CoA, fumarate, and oxaloacetate. Twenty different degradation pathways feed just seven entry points into central metabolism."
  },
  {
    "id": "AAM-048",
    "m": "m3",
    "area": "Metabolic destinations",
    "level": "concept",
    "stem": "The carbon skeleton of asparagine enters central metabolism as which intermediate?",
    "options": [
      "Pyruvate",
      "Oxaloacetate",
      "Succinyl-CoA",
      "Fumarate"
    ],
    "answer": 1,
    "why": "Asparaginase converts asparagine to aspartate, and transamination converts aspartate to oxaloacetate."
  },
  {
    "id": "AAM-049",
    "m": "m3",
    "area": "Metabolic destinations",
    "level": "application",
    "stem": "Which amino acid has a carbon skeleton that is converted to pyruvate?",
    "options": [
      "Glutamate",
      "Valine",
      "Serine",
      "Lysine"
    ],
    "answer": 2,
    "why": "Alanine, cysteine, glycine, serine, threonine, and tryptophan feed pyruvate. Valine goes to succinyl-CoA, glutamate to α-ketoglutarate, and lysine to acetoacetyl-CoA."
  },
  {
    "id": "AAM-050",
    "m": "m3",
    "area": "Metabolic destinations",
    "level": "application",
    "stem": "Histidine is essential, yet its degradation ends at the same intermediate as glutamate. Which intermediate do they share?",
    "options": [
      "α-Ketoglutarate",
      "Fumarate",
      "Succinyl-CoA",
      "Oxaloacetate"
    ],
    "answer": 0,
    "why": "Histidine is degraded through N-formiminoglutamate to glutamate, which becomes α-ketoglutarate. Being broken down to an intermediate is different from being synthesized from it, which is why histidine remains essential."
  },
  {
    "id": "AAM-051",
    "m": "m3",
    "area": "Metabolic destinations",
    "level": "integration",
    "stem": "Aspartate appears at both oxaloacetate and fumarate on the metabolic map. Which pathway from this lecture converts aspartate carbon into fumarate?",
    "options": [
      "Catecholamine synthesis",
      "The activated methyl cycle",
      "The urea cycle, through argininosuccinate",
      "The glucose–alanine cycle"
    ],
    "answer": 2,
    "why": "Aspartate condenses with citrulline to form argininosuccinate; argininosuccinate lyase then releases aspartate’s carbon skeleton as fumarate. This links the urea cycle to the citric acid cycle (the aspartate–argininosuccinate shunt)."
  },
  {
    "id": "AAM-052",
    "m": "m3",
    "area": "Metabolic destinations",
    "level": "application",
    "stem": "Methionine, valine, isoleucine, and threonine are degraded through propionyl-CoA and methylmalonyl-CoA. Which citric acid cycle intermediate do these pathways produce?",
    "options": [
      "Citrate",
      "α-Ketoglutarate",
      "Succinyl-CoA",
      "Oxaloacetate"
    ],
    "answer": 2,
    "why": "Methylmalonyl-CoA is rearranged to succinyl-CoA (by a B₁₂-dependent mutase), which enters the citric acid cycle."
  },
  {
    "id": "AAM-053",
    "m": "m3",
    "area": "Glucose & ketone consequences",
    "level": "concept",
    "stem": "Ketone bodies are formed from which pair of intermediates?",
    "options": [
      "Pyruvate and oxaloacetate",
      "Fumarate and succinyl-CoA",
      "Acetyl-CoA and acetoacetyl-CoA",
      "α-Ketoglutarate and glutamate"
    ],
    "answer": 2,
    "why": "Ketogenic amino acids produce acetyl-CoA or acetoacetyl-CoA, the direct precursors of acetoacetate and β-hydroxybutyrate."
  },
  {
    "id": "AAM-054",
    "m": "m3",
    "area": "Glucose & ketone consequences",
    "level": "concept",
    "stem": "What is a glucogenic amino acid degraded to?",
    "options": [
      "Pyruvate or a citric acid cycle intermediate",
      "Ketone bodies",
      "Acetyl-CoA or acetoacetyl-CoA",
      "Urea and CO₂"
    ],
    "answer": 0,
    "why": "Pyruvate and the citric acid cycle intermediates can be converted to oxaloacetate and then to glucose through gluconeogenesis."
  },
  {
    "id": "AAM-055",
    "m": "m3",
    "area": "Glucose & ketone consequences",
    "level": "concept",
    "stem": "During starvation, carbon skeletons of glucogenic amino acids from muscle help maintain blood glucose. Which organ carries out most of this gluconeogenesis?",
    "options": [
      "Brain",
      "Adipose tissue",
      "Skeletal muscle",
      "Liver"
    ],
    "answer": 3,
    "why": "The liver receives alanine and other glucogenic amino acids, disposes of their nitrogen as urea, and converts their carbon skeletons into glucose for export."
  },
  {
    "id": "AAM-056",
    "m": "m3",
    "area": "Glucose & ketone consequences",
    "level": "application",
    "stem": "Alanine is converted to pyruvate, and pyruvate can become acetyl-CoA. Why is alanine still classified as glucogenic?",
    "options": [
      "Acetyl-CoA from alanine can be converted into glucose",
      "Pyruvate can also be carboxylated to oxaloacetate and used for gluconeogenesis",
      "The nitrogen of alanine is converted into glucose",
      "Alanine is converted directly into glycogen without passing through pyruvate"
    ],
    "answer": 1,
    "why": "Classification depends on whether a route to net glucose exists. Pyruvate has one (pyruvate → oxaloacetate → PEP → glucose), even though pyruvate can also be oxidized to acetyl-CoA."
  },
  {
    "id": "AAM-057",
    "m": "m3",
    "area": "Glucose & ketone consequences",
    "level": "integration",
    "stem": "A patient follows a very-low-carbohydrate diet. The carbon of dietary leucine would most directly support production of which fuel?",
    "options": [
      "Blood glucose",
      "Lactate",
      "Ketone bodies",
      "Liver glycogen"
    ],
    "answer": 2,
    "why": "Leucine is exclusively ketogenic: its carbons become acetyl-CoA and acetoacetyl-CoA. With little carbohydrate available, the liver channels these into ketone bodies."
  },
  {
    "id": "AAM-058",
    "m": "m3",
    "area": "Glucose & ketone consequences",
    "level": "integration",
    "stem": "Valine is degraded to succinyl-CoA. Which sequence allows its carbons to reach glucose?",
    "options": [
      "Succinyl-CoA → acetyl-CoA → pyruvate → glucose",
      "Succinyl-CoA → succinate → fumarate → malate → oxaloacetate → PEP → glucose",
      "Succinyl-CoA → acetoacetyl-CoA → pyruvate → glucose",
      "Succinyl-CoA → α-ketoglutarate → glutamate → glucose"
    ],
    "answer": 1,
    "why": "Succinyl-CoA moves forward around the citric acid cycle to oxaloacetate, which leaves the cycle as PEP for gluconeogenesis. Acetyl-CoA cannot be converted to pyruvate, so routes through it do not yield glucose."
  },
  {
    "id": "AAM-059",
    "m": "m3",
    "area": "Glucogenic/ketogenic classification",
    "level": "concept",
    "stem": "How is isoleucine classified?",
    "options": [
      "Both glucogenic and ketogenic",
      "Ketogenic",
      "Glucogenic"
    ],
    "answer": 0,
    "why": "Isoleucine is degraded to succinyl-CoA (glucogenic) and acetyl-CoA (ketogenic)."
  },
  {
    "id": "AAM-060",
    "m": "m3",
    "area": "Glucogenic/ketogenic classification",
    "level": "concept",
    "stem": "Which amino acid is both glucogenic and ketogenic?",
    "options": [
      "Lysine",
      "Glutamate",
      "Alanine",
      "Tryptophan"
    ],
    "answer": 3,
    "why": "Tryptophan yields pyruvate (glucogenic) plus acetyl-CoA and acetoacetyl-CoA (ketogenic). The five amino acids in the \"both\" group are isoleucine, phenylalanine, threonine, tryptophan, and tyrosine."
  },
  {
    "id": "AAM-061",
    "m": "m3",
    "area": "Glucogenic/ketogenic classification",
    "level": "application",
    "stem": "Tyrosine is degraded to fumarate and acetoacetyl-CoA. Which statement about its carbon skeleton is correct?",
    "options": [
      "Part can support gluconeogenesis and part can form ketone bodies",
      "Its acetoacetyl-CoA forms ketone bodies and its fumarate is excreted as urea",
      "Its fumarate supports gluconeogenesis and its acetoacetyl-CoA is excreted",
      "It is converted to glycogen in the liver without entering the citric acid cycle"
    ],
    "answer": 0,
    "why": "The two products follow separate fates: fumarate enters the citric acid cycle and can reach glucose, while acetoacetyl-CoA can form ketone bodies. That split is why tyrosine is both glucogenic and ketogenic."
  },
  {
    "id": "AAM-062",
    "m": "m3",
    "area": "Glucogenic/ketogenic classification",
    "level": "application",
    "stem": "A newly characterized degradation pathway yields acetyl-CoA and succinyl-CoA from a single amino acid. How should that amino acid be classified?",
    "options": [
      "Glucogenic",
      "Both glucogenic and ketogenic",
      "Ketogenic"
    ],
    "answer": 1,
    "why": "Succinyl-CoA is a citric acid cycle intermediate (glucogenic) and acetyl-CoA can form ketone bodies (ketogenic). Classification follows directly from the products, which is why learning the seven destinations is more useful than memorizing the lists."
  },
  {
    "id": "AAM-063",
    "m": "m3",
    "area": "Glucogenic/ketogenic classification",
    "level": "integration",
    "stem": "A patient on a ketogenic diet wants protein sources whose amino acid carbon feeds ketone bodies with no glucogenic contribution. Which pair of amino acids fits this goal?",
    "options": [
      "Leucine and lysine",
      "Phenylalanine and tyrosine",
      "Alanine and glycine",
      "Isoleucine and tryptophan"
    ],
    "answer": 0,
    "why": "Leucine and lysine are exclusively ketogenic. Isoleucine, tryptophan, phenylalanine, and tyrosine are both glucogenic and ketogenic, and alanine and glycine are glucogenic."
  },
  {
    "id": "AAM-064",
    "m": "m4",
    "area": "Precursor families",
    "level": "concept",
    "stem": "Which amino acid is synthesized from pyruvate in a single transamination step?",
    "options": [
      "Alanine",
      "Aspartate",
      "Glutamate",
      "Serine"
    ],
    "answer": 0,
    "why": "Pyruvate accepts an amino group (ALT, with glutamate as donor) to become alanine. Serine comes from 3-phosphoglycerate, aspartate from oxaloacetate, and glutamate from α-ketoglutarate."
  },
  {
    "id": "AAM-065",
    "m": "m4",
    "area": "Precursor families",
    "level": "concept",
    "stem": "Which group of amino acids is synthesized from α-ketoglutarate?",
    "options": [
      "Aspartate, asparagine, alanine, serine",
      "Glutamate, glutamine, proline, arginine",
      "Glutamate, aspartate, glycine, proline",
      "Serine, glycine, cysteine, alanine"
    ],
    "answer": 1,
    "why": "α-Ketoglutarate → glutamate; glutamate → glutamine (glutamine synthetase); glutamate → glutamate semialdehyde → proline or ornithine → (urea cycle) arginine."
  },
  {
    "id": "AAM-066",
    "m": "m4",
    "area": "Precursor families",
    "level": "application",
    "stem": "A cell’s oxaloacetate supply falls sharply. Synthesis of which pair of amino acids is most directly limited?",
    "options": [
      "Serine and glycine",
      "Aspartate and asparagine",
      "Glutamate and glutamine",
      "Alanine and cysteine"
    ],
    "answer": 1,
    "why": "Aspartate is made by transaminating oxaloacetate, and asparagine is made from aspartate by asparagine synthetase. Both depend on oxaloacetate."
  },
  {
    "id": "AAM-067",
    "m": "m4",
    "area": "Precursor families",
    "level": "application",
    "stem": "Glycine is made from serine. Which glycolytic intermediate supplies the carbon skeleton of serine?",
    "options": [
      "Phosphoenolpyruvate",
      "Pyruvate",
      "Dihydroxyacetone phosphate",
      "3-Phosphoglycerate"
    ],
    "answer": 3,
    "why": "3-Phosphoglycerate is oxidized, transaminated, and dephosphorylated to serine. Serine can then give up one carbon (to THF) to become glycine."
  },
  {
    "id": "AAM-068",
    "m": "m4",
    "area": "Precursor families",
    "level": "integration",
    "stem": "Cysteine synthesis combines atoms from two amino acids. Which pairing correctly assigns the sources?",
    "options": [
      "Carbon skeleton from serine; sulfur from methionine",
      "Carbon skeleton from alanine; sulfur from methionine",
      "Carbon skeleton from serine; sulfur from glutathione",
      "Carbon skeleton from methionine; sulfur from serine"
    ],
    "answer": 0,
    "why": "Serine and homocysteine (derived from methionine) condense to cystathionine. Cleavage keeps serine’s carbons with the sulfur as cysteine and releases homocysteine’s carbons as α-ketobutyrate."
  },
  {
    "id": "AAM-069",
    "m": "m4",
    "area": "Precursor families",
    "level": "integration",
    "stem": "Arginine is built from α-ketoglutarate, but its final steps overlap with another process. Which process completes arginine synthesis?",
    "options": [
      "The citric acid cycle",
      "The urea cycle",
      "The activated methyl cycle",
      "The glucose–alanine cycle"
    ],
    "answer": 1,
    "why": "Glutamate semialdehyde is converted to ornithine, and the urea cycle converts ornithine to citrulline, argininosuccinate, and then arginine. Arginine is also where urea is released."
  },
  {
    "id": "AAM-070",
    "m": "m4",
    "area": "Biosynthetic enzymes & classes",
    "level": "concept",
    "stem": "Which enzyme class uses the energy of ATP (or another nucleoside triphosphate) to join two molecules with a new covalent bond?",
    "options": [
      "Lyase",
      "Transferase",
      "Hydrolase",
      "Ligase"
    ],
    "answer": 3,
    "why": "Ligases (synthetases) couple bond formation to nucleoside triphosphate hydrolysis. Glutamine synthetase, asparagine synthetase, CPS I, and argininosuccinate synthetase are all ligases."
  },
  {
    "id": "AAM-071",
    "m": "m4",
    "area": "Biosynthetic enzymes & classes",
    "level": "concept",
    "stem": "Asparaginase converts asparagine to aspartate and NH₄⁺. To which enzyme class does it belong?",
    "options": [
      "Lyase",
      "Hydrolase",
      "Ligase",
      "Isomerase"
    ],
    "answer": 1,
    "why": "Asparaginase, like glutaminase, uses water to cleave an amide bond, which makes it a hydrolase."
  },
  {
    "id": "AAM-072",
    "m": "m4",
    "area": "Biosynthetic enzymes & classes",
    "level": "application",
    "stem": "Cystathionine β-synthase joins serine and homocysteine and releases water, without consuming ATP. Which enzyme class fits this reaction?",
    "options": [
      "Transferase",
      "Ligase",
      "Lyase",
      "Hydrolase"
    ],
    "answer": 2,
    "why": "Despite \"synthase\" in its name, CBS is a lyase (EC 4.2.1.22): it forms the new bond through elimination of water and uses no ATP. Ligases, by contrast, are \"synthetases\" that spend a nucleoside triphosphate."
  },
  {
    "id": "AAM-073",
    "m": "m4",
    "area": "Biosynthetic enzymes & classes",
    "level": "application",
    "stem": "Methionine synthase moves a methyl group from N⁵-methyl-THF to homocysteine. To which enzyme class does it belong?",
    "options": [
      "Ligase",
      "Transferase",
      "Lyase",
      "Oxidoreductase"
    ],
    "answer": 1,
    "why": "Moving a functional group (here a methyl group) from one molecule to another defines a transferase."
  },
  {
    "id": "AAM-074",
    "m": "m4",
    "area": "Biosynthetic enzymes & classes",
    "level": "application",
    "stem": "Glutamate dehydrogenase uses NAD(P)⁺ as it removes the amino group from glutamate. To which enzyme class does it belong?",
    "options": [
      "Hydrolase",
      "Oxidoreductase",
      "Ligase",
      "Transferase"
    ],
    "answer": 1,
    "why": "The reaction oxidizes glutamate and reduces NAD(P)⁺. Any \"dehydrogenase\" is an oxidoreductase."
  },
  {
    "id": "AAM-075",
    "m": "m4",
    "area": "Biosynthetic enzymes & classes",
    "level": "integration",
    "stem": "The names \"glutamine synthetase\" and \"cystathionine β-synthase\" differ by a single syllable. What distinction does this naming convention reflect?",
    "options": [
      "Synthetases require PLP, whereas synthases require BH₄",
      "Synthetases act in the mitochondria, whereas synthases act in the cytosol",
      "Synthetases break bonds, whereas synthases form bonds",
      "Synthetases consume a nucleoside triphosphate (ligases), whereas synthases form bonds without one"
    ],
    "answer": 3,
    "why": "By convention, \"synthetase\" is reserved for ligases that use ATP or another nucleoside triphosphate. \"Synthase\" names any enzyme that makes a product, often without ATP. The suffix is a quick clue to the enzyme class."
  },
  {
    "id": "AAM-076",
    "m": "m4",
    "area": "Methionine, SAM & cysteine",
    "level": "concept",
    "stem": "S-Adenosylmethionine (SAM) is formed by combining methionine with which molecule?",
    "options": [
      "AMP",
      "Adenosine",
      "ATP",
      "Acetyl-CoA"
    ],
    "answer": 2,
    "why": "SAM synthetase transfers the adenosyl group of ATP to methionine’s sulfur, releasing all three phosphates (as Pᵢ + PPᵢ)."
  },
  {
    "id": "AAM-077",
    "m": "m4",
    "area": "Methionine, SAM & cysteine",
    "level": "concept",
    "stem": "What is the main biochemical role of S-adenosylmethionine?",
    "options": [
      "Formyl group carrier",
      "Amino group donor",
      "Methyl group donor",
      "Electron carrier"
    ],
    "answer": 2,
    "why": "SAM is the major methyl donor in biosynthesis, including epinephrine, melatonin, and DNA methylation. THF carries formyl and other one-carbon units."
  },
  {
    "id": "AAM-078",
    "m": "m4",
    "area": "Methionine, SAM & cysteine",
    "level": "application",
    "stem": "Cystathionine is cleaved into cysteine and α-ketobutyrate. What is the fate of α-ketobutyrate?",
    "options": [
      "It is converted to succinyl-CoA and enters the citric acid cycle",
      "It is condensed with serine to form cystathionine",
      "It is converted to acetoacetyl-CoA and forms ketone bodies",
      "It is transaminated to regenerate methionine"
    ],
    "answer": 0,
    "why": "α-Ketobutyrate → propionyl-CoA → methylmalonyl-CoA → succinyl-CoA. This is why methionine appears at the succinyl-CoA station on the metabolic map."
  },
  {
    "id": "AAM-079",
    "m": "m4",
    "area": "Methionine, SAM & cysteine",
    "level": "integration",
    "stem": "In vitamin B₁₂ deficiency, homocysteine accumulates. Why does functional folate deficiency also develop?",
    "options": [
      "Homocysteine destroys THF directly",
      "SAM converts THF into BH₄",
      "Vitamin B₁₂ is required to absorb folate from the intestine",
      "Folate becomes trapped as N⁵-methyl-THF when methionine synthase stalls"
    ],
    "answer": 3,
    "why": "Methionine synthase is the main route that removes the methyl group from N⁵-methyl-THF. Without B₁₂, folate piles up in this form and cannot be recycled to free THF for other one-carbon reactions (the \"methyl trap\")."
  },
  {
    "id": "AAM-080",
    "m": "m4",
    "area": "Methionine, SAM & cysteine",
    "level": "integration",
    "stem": "A patient has an untreated deficiency of cystathionine β-synthase. Which pair of findings is expected?",
    "options": [
      "Methionine falls, and SAM rises",
      "Cysteine rises, and methionine falls",
      "Homocysteine rises, and cysteine becomes a dietary requirement",
      "Homocysteine falls, and cysteine rises"
    ],
    "answer": 2,
    "why": "Blocking CBS prevents homocysteine from moving toward cystathionine, so homocysteine (and methionine) accumulate. Cysteine can no longer be made from methionine, so it becomes essential."
  },
  {
    "id": "AAM-081",
    "m": "m4",
    "area": "Methionine, SAM & cysteine",
    "level": "integration",
    "stem": "A methionine-rich meal raises SAM in the liver. How does the fate of homocysteine shift?",
    "options": [
      "More homocysteine is committed to cystathionine and cysteine",
      "Homocysteine is converted directly back into SAM",
      "Homocysteine is converted to urea",
      "More homocysteine is remethylated to methionine"
    ],
    "answer": 0,
    "why": "High SAM activates cystathionine β-synthase. When methionine is abundant, the cell stops recycling homocysteine and sends it toward cysteine, which also disposes of surplus sulfur amino acid carbon."
  },
  {
    "id": "AAM-082",
    "m": "m5",
    "area": "Catecholamines",
    "level": "concept",
    "stem": "Which sequence shows catecholamine synthesis in the correct order?",
    "options": [
      "Tyrosine → dopamine → L-DOPA → norepinephrine → epinephrine",
      "Tyrosine → L-DOPA → dopamine → epinephrine → norepinephrine",
      "Tyrosine → L-DOPA → dopamine → norepinephrine → epinephrine",
      "Tyrosine → L-DOPA → norepinephrine → dopamine → epinephrine"
    ],
    "answer": 2,
    "why": "Hydroxylation (TH) gives L-DOPA, decarboxylation (AADC) gives dopamine, β-hydroxylation (DBH) gives norepinephrine, and N-methylation (PNMT) gives epinephrine."
  },
  {
    "id": "AAM-083",
    "m": "m5",
    "area": "Catecholamines",
    "level": "concept",
    "stem": "Which enzyme converts tyrosine to L-DOPA?",
    "options": [
      "Phenylalanine hydroxylase",
      "Tyrosine hydroxylase",
      "Aromatic amino acid decarboxylase",
      "Dopamine β-hydroxylase"
    ],
    "answer": 1,
    "why": "Tyrosine hydroxylase adds a second hydroxyl group to the ring of tyrosine using BH₄. It is the first step that commits tyrosine to catecholamine synthesis."
  },
  {
    "id": "AAM-084",
    "m": "m5",
    "area": "Catecholamines",
    "level": "application",
    "stem": "Dopamine β-hydroxylase requires which vitamin as a cofactor?",
    "options": [
      "Ascorbate (vitamin C)",
      "Folate (vitamin B₉)",
      "Cobalamin (vitamin B₁₂)",
      "Pyridoxine (vitamin B₆)"
    ],
    "answer": 0,
    "why": "DBH is a copper enzyme that uses ascorbate as the electron donor when it hydroxylates dopamine to norepinephrine."
  },
  {
    "id": "AAM-085",
    "m": "m5",
    "area": "Catecholamines",
    "level": "application",
    "stem": "A drug inhibits phenylethanolamine N-methyltransferase (PNMT) in the adrenal medulla. Which change is expected?",
    "options": [
      "Epinephrine falls while norepinephrine accumulates",
      "Dopamine falls while L-DOPA accumulates",
      "Norepinephrine falls while dopamine accumulates",
      "Tyrosine falls while phenylalanine accumulates"
    ],
    "answer": 0,
    "why": "PNMT makes epinephrine from norepinephrine. Inhibiting it lowers the product and backs up its substrate."
  },
  {
    "id": "AAM-086",
    "m": "m5",
    "area": "Catecholamines",
    "level": "integration",
    "stem": "Which cofactor links catecholamine synthesis to the activated methyl cycle?",
    "options": [
      "Tetrahydrobiopterin (BH₄)",
      "S-Adenosylmethionine (SAM)",
      "Pyridoxal phosphate (PLP)",
      "Ascorbate (vitamin C)"
    ],
    "answer": 1,
    "why": "PNMT uses SAM to methylate norepinephrine. The S-adenosylhomocysteine left behind is hydrolyzed to homocysteine, which re-enters the activated methyl cycle (Module 4)."
  },
  {
    "id": "AAM-087",
    "m": "m5",
    "area": "Catecholamines",
    "level": "integration",
    "stem": "Aromatic amino acid decarboxylase acts in two neurotransmitter pathways. Which pair of reactions does it catalyze?",
    "options": [
      "Dopamine → norepinephrine and serotonin → melatonin",
      "Histidine → histamine and L-DOPA → dopamine",
      "L-DOPA → dopamine and 5-hydroxytryptophan → serotonin",
      "Tyrosine → L-DOPA and tryptophan → 5-hydroxytryptophan"
    ],
    "answer": 2,
    "why": "AADC removes CO₂ from both hydroxylated aromatic amino acids. Histamine has its own dedicated enzyme, histidine decarboxylase."
  },
  {
    "id": "AAM-088",
    "m": "m5",
    "area": "Serotonin & melatonin",
    "level": "concept",
    "stem": "Serotonin acts on which family of receptors?",
    "options": [
      "Dopamine receptors",
      "Histamine receptors",
      "Adrenergic receptors",
      "5-HT receptors"
    ],
    "answer": 3,
    "why": "Serotonin is 5-hydroxytryptamine (5-HT), and its receptors are named for it. Serotonin-derived drugs targeting 5-HT receptors are used as antimigraine therapies."
  },
  {
    "id": "AAM-089",
    "m": "m5",
    "area": "Serotonin & melatonin",
    "level": "concept",
    "stem": "Which cofactor does tryptophan hydroxylase use?",
    "options": [
      "S-Adenosylmethionine (SAM)",
      "Tetrahydrobiopterin (BH₄)",
      "Tetrahydrofolate (THF)",
      "Pyridoxal phosphate (PLP)"
    ],
    "answer": 1,
    "why": "Tryptophan hydroxylase is an aromatic amino acid hydroxylase, and all three members of that family use BH₄."
  },
  {
    "id": "AAM-090",
    "m": "m5",
    "area": "Serotonin & melatonin",
    "level": "application",
    "stem": "In serotonin synthesis, what is the first product formed from tryptophan?",
    "options": [
      "5-Hydroxytryptophan",
      "Serotonin",
      "Melatonin",
      "N-Acetylserotonin"
    ],
    "answer": 0,
    "why": "Hydroxylation comes first (tryptophan → 5-hydroxytryptophan), then decarboxylation by AADC gives serotonin. The same \"hydroxylate, then decarboxylate\" order appears in dopamine synthesis."
  },
  {
    "id": "AAM-091",
    "m": "m5",
    "area": "Serotonin & melatonin",
    "level": "application",
    "stem": "Converting N-acetylserotonin to melatonin requires a methyl donor. Which molecule provides the methyl group?",
    "options": [
      "Acetyl-CoA",
      "Tetrahydrobiopterin (BH₄)",
      "N⁵-Methyl-tetrahydrofolate",
      "S-Adenosylmethionine (SAM)"
    ],
    "answer": 3,
    "why": "An O-methyltransferase moves a methyl group from SAM onto N-acetylserotonin. Acetyl-CoA was used one step earlier, to add the acetyl group."
  },
  {
    "id": "AAM-092",
    "m": "m5",
    "area": "Serotonin & melatonin",
    "level": "integration",
    "stem": "Why is tryptophan hydroxylase described as analogous to phenylalanine hydroxylase?",
    "options": [
      "Both add a methyl group to an amine using SAM",
      "Both transfer an amino group to α-ketoglutarate using PLP",
      "Both remove CO₂ from an aromatic amino acid using PLP",
      "Both add a hydroxyl group to an aromatic amino acid using BH₄"
    ],
    "answer": 3,
    "why": "The two enzymes catalyze the same type of reaction on different aromatic substrates with the same cofactor. Recognizing reaction types lets you predict cofactors across pathways."
  },
  {
    "id": "AAM-093",
    "m": "m5",
    "area": "Histamine & glutathione",
    "level": "concept",
    "stem": "Which enzyme produces histamine?",
    "options": [
      "Histidine transaminase",
      "Histidine decarboxylase",
      "Histidine hydroxylase",
      "Aromatic amino acid decarboxylase"
    ],
    "answer": 1,
    "why": "Histamine is made by a dedicated enzyme, histidine decarboxylase, which removes CO₂ from histidine."
  },
  {
    "id": "AAM-094",
    "m": "m5",
    "area": "Histamine & glutathione",
    "level": "concept",
    "stem": "What is the main role of glutathione in cells?",
    "options": [
      "Donating methyl groups for biosynthesis",
      "Carrying nitrogen from muscle to liver",
      "Neutralizing reactive oxygen species and detoxifying the cell",
      "Storing surplus cysteine for protein synthesis"
    ],
    "answer": 2,
    "why": "The thiol group of reduced glutathione donates electrons to neutralize peroxides and other oxidants, protecting proteins, lipids, and DNA."
  },
  {
    "id": "AAM-095",
    "m": "m5",
    "area": "Histamine & glutathione",
    "level": "application",
    "stem": "Glutathione reductase regenerates reduced glutathione from its disulfide form using NADPH. To which enzyme class does it belong?",
    "options": [
      "Transferase",
      "Oxidoreductase",
      "Ligase",
      "Hydrolase"
    ],
    "answer": 1,
    "why": "The enzyme reduces the disulfide in GSSG while oxidizing NADPH. Glutathione peroxidase is an oxidoreductase too."
  },
  {
    "id": "AAM-096",
    "m": "m5",
    "area": "Histamine & glutathione",
    "level": "application",
    "stem": "At which point do antihistamines act to relieve allergy symptoms?",
    "options": [
      "Histidine decarboxylase",
      "Histidine uptake into cells",
      "Histamine receptors",
      "5-HT receptors"
    ],
    "answer": 2,
    "why": "Antihistamines target the histamine receptor, preventing released histamine from producing its effects. They do not block histamine synthesis."
  },
  {
    "id": "AAM-097",
    "m": "m5",
    "area": "Histamine & glutathione",
    "level": "integration",
    "stem": "During heavy oxidative stress, the ratio of reduced glutathione (GSH) to oxidized glutathione (GSSG) falls. Which change would restore the ratio?",
    "options": [
      "Increased glutathione reductase activity",
      "Increased histidine decarboxylase activity",
      "Decreased cysteine supply",
      "Increased glutathione peroxidase activity"
    ],
    "answer": 0,
    "why": "Peroxidase converts GSH to GSSG as it neutralizes oxidants, which lowers the ratio. Reductase, using NADPH, converts GSSG back to GSH and raises it."
  },
  {
    "id": "AAM-098",
    "m": "m5",
    "area": "Histamine & glutathione",
    "level": "integration",
    "stem": "A diet severely low in methionine would most directly limit glutathione synthesis by reducing the supply of which component?",
    "options": [
      "Cysteine",
      "Glutamate",
      "Glycine",
      "Histidine"
    ],
    "answer": 0,
    "why": "The sulfur of cysteine comes from methionine. With less methionine there is less homocysteine for cysteine synthesis, and cysteine is the component that gives glutathione its reactive thiol."
  },
  {
    "id": "AAM-099",
    "m": "m5",
    "area": "Pathway disruptions",
    "level": "concept",
    "stem": "Phenylketonuria (PKU) results from deficient activity of which enzyme?",
    "options": [
      "Aromatic amino acid decarboxylase",
      "Phenylethanolamine N-methyltransferase",
      "Tyrosine hydroxylase",
      "Phenylalanine hydroxylase"
    ],
    "answer": 3,
    "why": "PKU is caused by defective phenylalanine hydroxylase, which blocks phenylalanine → tyrosine and allows phenylalanine to accumulate."
  },
  {
    "id": "AAM-100",
    "m": "m5",
    "area": "Pathway disruptions",
    "level": "application",
    "stem": "Phenylalanine → Tyrosine ─✕→ L-DOPA → Dopamine. A patient has markedly reduced activity at the marked reaction. Which enzyme normally catalyzes this step?",
    "options": [
      "Phenylalanine hydroxylase",
      "Dopamine β-hydroxylase",
      "Aromatic amino acid decarboxylase",
      "Tyrosine hydroxylase"
    ],
    "answer": 3,
    "why": "Tyrosine → L-DOPA adds a hydroxyl group to the ring and is catalyzed by tyrosine hydroxylase (BH₄-dependent)."
  },
  {
    "id": "AAM-101",
    "m": "m5",
    "area": "Pathway disruptions",
    "level": "application",
    "stem": "A patient has low norepinephrine and elevated dopamine. At which enzyme is the pathway most likely blocked?",
    "options": [
      "Tyrosine hydroxylase",
      "Aromatic amino acid decarboxylase",
      "Phenylethanolamine N-methyltransferase",
      "Dopamine β-hydroxylase"
    ],
    "answer": 3,
    "why": "The substrate before a block accumulates and the product after it falls. Dopamine → norepinephrine is catalyzed by DBH."
  },
  {
    "id": "AAM-102",
    "m": "m5",
    "area": "Pathway disruptions",
    "level": "integration",
    "stem": "An infant has high blood phenylalanine, but phenylalanine hydroxylase protein is normal. Dopamine and serotonin are also low. Which defect best explains every finding?",
    "options": [
      "Impaired tetrahydrobiopterin (BH₄) synthesis",
      "Pyridoxal phosphate deficiency",
      "Aromatic amino acid decarboxylase deficiency",
      "Tyrosine hydroxylase deficiency"
    ],
    "answer": 0,
    "why": "Phenylalanine, tyrosine, and tryptophan hydroxylases share BH₄. Losing the cofactor raises phenylalanine and reduces both catecholamine and serotonin synthesis. AADC deficiency would lower the neurotransmitters but leave phenylalanine normal."
  },
  {
    "id": "AAM-103",
    "m": "m5",
    "area": "Pathway disruptions",
    "level": "integration",
    "stem": "A patient has elevated homocysteine and reduced methionine regeneration, with normal cystathionine β-synthase activity. Which cofactor deficiency best explains these findings?",
    "options": [
      "Tetrahydrobiopterin (BH₄)",
      "Pyridoxine (vitamin B₆)",
      "Ascorbate (vitamin C)",
      "Cobalamin (vitamin B₁₂)"
    ],
    "answer": 3,
    "why": "Methionine synthase requires cobalamin (and THF). Without it, homocysteine cannot be remethylated and builds up. With CBS working normally, a B₆ problem is less likely to be the cause."
  },
  {
    "id": "AAM-104",
    "m": "m5",
    "area": "Pathway disruptions",
    "level": "integration",
    "stem": "A boy with ornithine transcarbamoylase deficiency has hyperammonemia. Which amino acid would be expected to rise in his blood as tissues trap the excess ammonia?",
    "options": [
      "Glutamine",
      "Arginine",
      "Citrulline",
      "Aspartate"
    ],
    "answer": 0,
    "why": "Tissues capture excess NH₄⁺ with glutamine synthetase, so plasma glutamine rises. Citrulline and arginine fall because the block at OTC prevents their formation."
  }
];
