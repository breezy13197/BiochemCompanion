/* ============================================================
   BANK: Metabolic Integration & Organ Specialization
   Pure content data. No DOM, no dependency on shared/ files.
   IDs are permanent: never renumber or reuse MET-### or MET-CARD-##.
   ============================================================ */
var TOPIC_ID    = "integration";
var TOPIC_TITLE = "Metabolic Integration & Organ Specialization";

var CHECKPOINTS = {

  /* ---------- Module 1 · Section 1: fuels and energy yield ---------- */
  c1a: {
    options: ["2,000 kilocalories", "2,000 calories", "2,000,000 kilocalories", "2 kilocalories"],
    answer: 0,
    why: "The nutritional “Calorie” is a kilocalorie: the energy needed to raise 1 liter of water by 1 °C. A 2,000-Calorie diet supplies 2,000 kcal."
  },
  c1b: {
    options: ["About 98 kcal", "About 56 kcal", "About 126 kcal", "About 14 kcal"],
    answer: 0,
    why: "Ethanol yields about 7 kcal/g, so 14 g × 7 kcal/g ≈ 98 kcal. The 56 kcal distractor uses the 4 kcal/g value for carbohydrate; 126 kcal uses the 9 kcal/g value for fat."
  },
  c1c: {
    options: ["Acetyl-CoA", "Oxaloacetate", "Lactate", "Glycerol"],
    answer: 0,
    why: "Fatty acid and ketone body oxidation generate acetyl-CoA directly, and glucose reaches it through pyruvate. This shared entry into the citric acid cycle is what lets hormones coordinate every fuel at once."
  },

  /* ---------- Module 1 · Section 2: storage efficiency ---------- */
  c2a: {
    options: [
      "It binds several grams of water per gram and yields 4 kcal/g rather than 9 kcal/g",
      "It is mobilized too slowly to meet a sudden rise in energy demand",
      "It releases its energy through oxidative pathways rather than glycolysis",
      "It is synthesized from amino acids, which are in limited supply"
    ],
    answer: 0,
    why: "Glycogen is stored with roughly 4 g of water per gram, and its carbohydrate yields 4 kcal/g. Triglyceride is stored nearly anhydrous at 9 kcal/g. Glycogen is actually mobilized quickly, which is why a small reserve is still worth keeping."
  },
  c2b: {
    options: ["About 18 kg", "About 15 kg", "About 30 kg", "About 75 kg"],
    answer: 0,
    why: "Adipose tissue is roughly 15% water, so 15 kg of triglyceride sits in about 15 ÷ 0.85 ≈ 18 kg of tissue."
  },
  c2c: {
    options: [
      "The water-bound mass would multiply storage weight roughly tenfold, costing energy to carry",
      "Glycogen stays inside the cells that made it, stranding fuel far from other tissues",
      "Large glycogen stores would block the liver from producing ketone bodies",
      "Glycogen cannot be broken down to supply glucose to the brain"
    ],
    answer: 0,
    why: "Storing ~135,000 kcal as hydrated glycogen would require ~170 kg of tissue versus ~18 kg of adipose. An animal that must move to find food cannot afford to carry that extra mass."
  },

  /* ---------- Module 1 · Section 3: stored fuel pools ---------- */
  c3a: {
    options: ["About 320 kcal", "About 32 kcal", "About 3,200 kcal", "About 720 kcal"],
    answer: 0,
    why: "0.08 kg is 80 g; 80 g × 4 kcal/g = 320 kcal. That modest reserve is why hepatic glycogen supports blood glucose for hours, not days."
  },
  c3b: {
    options: [
      "Protein used as fuel comes from working tissue rather than a dedicated reserve",
      "Muscle protein is a dedicated reserve that is refilled within hours of eating",
      "Muscle protein is converted to adipose triglyceride before it can be used",
      "Muscle protein yields more energy per gram than triglyceride"
    ],
    answer: 0,
    why: "The body has no protein storage form. When protein is mobilized for fuel, it comes from functional tissue such as skeletal muscle, so the energy is paid for with lost strength and function."
  },

  /* ---------- Module 1 · Section 4: energy expenditure ---------- */
  c4a: {
    options: ["Basal metabolic rate", "Diet-induced thermogenesis", "Physical activity expenditure"],
    answer: 0,
    why: "Lean (non-adipose) mass is metabolically active tissue, and it is one of the listed determinants of BMR. Body weight alone does not set BMR; composition matters."
  },
  c4b: {
    options: ["About 250 kcal", "About 750 kcal", "About 1,250 kcal", "About 25 kcal"],
    answer: 0,
    why: "Diet-induced thermogenesis, the cost of digesting, absorbing, distributing, and storing food, is about 10% of daily energy expenditure: 10% of 2,500 kcal ≈ 250 kcal."
  },

  /* ---------- Module 2 · Section 1: fed state ---------- */
  c5a: {
    options: ["The ratio rises", "The ratio falls", "The ratio stays unchanged"],
    answer: 0,
    why: "Rising blood glucose stimulates insulin secretion and suppresses glucagon. The high insulin/glucagon ratio tells muscle, adipose, and liver to take up and store fuel."
  },
  c5b: {
    options: ["Long-chain triglyceride", "Glucose", "Amino acids", "Fructose"],
    answer: 0,
    why: "Dietary triglyceride is packaged into chylomicrons that enter the lymphatics and bypass the liver. Glucose, amino acids, and fructose travel through the hepatic portal vein instead."
  },
  c5c: {
    options: ["Chylomicrons", "Albumin", "Low-density lipoprotein", "High-density lipoprotein"],
    answer: 0,
    why: "Lipoprotein lipase on capillary walls hydrolyzes chylomicron triglyceride, releasing fatty acids that adipose stores and muscle can oxidize."
  },

  /* ---------- Module 2 · Section 2: overnight fast ---------- */
  c6a: {
    options: ["Gluconeogenesis", "Glycogenesis", "Lipogenesis", "Glycolysis"],
    answer: 0,
    why: "The liver first exports glucose from glycogen. As that reserve shrinks, gluconeogenesis from glycerol, lactate, and amino acids takes over a growing share."
  },
  c6b: {
    options: [
      "Fatty acid carbons enter metabolism as acetyl-CoA, which cannot be converted to net glucose",
      "Fatty acids cannot leave adipose tissue during a fast",
      "Glycerol carries more carbon atoms than a fatty acid chain",
      "Fatty acids are oxidized exclusively by the brain"
    ],
    answer: 0,
    why: "Pyruvate dehydrogenase is irreversible, and the two carbons of acetyl-CoA are lost as CO₂ in one turn of the citric acid cycle. Glycerol, in contrast, enters gluconeogenesis as dihydroxyacetone phosphate."
  },
  c6c: {
    options: ["Amino acids from muscle protein", "Glycerol from triglyceride", "Lactate from red blood cells", "Ketone bodies from the liver"],
    answer: 0,
    why: "Amino acids carry nitrogen. When their carbon skeletons are used for gluconeogenesis, the nitrogen is converted to urea by the liver, so urinary nitrogen rises."
  },

  /* ---------- Module 2 · Section 3: starvation ---------- */
  c7a: {
    options: ["Ketone bodies", "Glucose", "Fatty acids", "Lactate"],
    answer: 0,
    why: "By day 40 the brain uses about 100 g/day of ketone bodies and about 40 g/day of glucose. The brain does not oxidize fatty acids to a meaningful extent."
  },
  c7b: {
    options: [
      "The lactate they produce returns to the liver and is rebuilt into glucose",
      "They switch to oxidizing ketone bodies as starvation progresses",
      "They draw on a private glycogen store built before the fast",
      "They begin oxidizing fatty acids released from adipose tissue"
    ],
    answer: 0,
    why: "Red blood cells lack mitochondria, so they convert glucose to lactate. The liver recycles that lactate into glucose (the Cori cycle), so their glucose use costs little net carbon."
  },
  c7c: {
    options: [
      "Acetyl-CoA is diverted to ketone bodies and oxaloacetate to glucose",
      "Acetyl-CoA is diverted to fatty acids and oxaloacetate to urea",
      "Pyruvate is diverted to lactate and citrate to cholesterol",
      "Oxaloacetate is diverted to ketone bodies and acetyl-CoA to glucose"
    ],
    answer: 0,
    why: "Oxaloacetate is pulled into gluconeogenesis, so less is available to condense with acetyl-CoA. The surplus acetyl-CoA is routed into ketogenesis instead of the citric acid cycle."
  },

  /* ---------- Module 2 · Section 4: simulator ---------- */
  c8a: {
    options: [
      "Low insulin/glucagon ratio, adipose lipolysis, high muscle amino acid release, hepatic gluconeogenesis",
      "High insulin/glucagon ratio, adipose lipogenesis, high muscle glucose uptake, hepatic glycogen synthesis",
      "Low insulin/glucagon ratio, adipose lipogenesis, low muscle amino acid release, hepatic glycogen synthesis",
      "Low insulin/glucagon ratio, adipose lipolysis, brain fueled mostly by ketone bodies, minimal protein breakdown"
    ],
    answer: 0,
    why: "At 36 hours, liver glycogen is largely spent, so gluconeogenesis is running hard and muscle protein breakdown is near its peak. Ketone use by the brain is rising but not yet dominant; that pattern belongs to weeks of fasting."
  },

  /* ---------- Module 3 · Section 1: insulin & glucagon ---------- */
  c9a: {
    options: ["Gluconeogenesis", "Glycogen synthesis", "Fatty acid synthesis", "VLDL synthesis"],
    answer: 0,
    why: "Insulin normally inhibits gluconeogenesis and glycogenolysis. Without it, and with glucagon unopposed, the liver keeps making and exporting glucose even while blood glucose is already high."
  },
  c9b: {
    options: [
      "Skeletal muscle lacks glucagon receptors",
      "Muscle glycogen is stored in a form glucagon cannot reach",
      "Insulin occupies the glucagon binding site in muscle",
      "Muscle cells lack glycogen phosphorylase"
    ],
    answer: 0,
    why: "Glucagon acts mainly on the liver; skeletal muscle has no glucagon receptors, so the lecture diagram marks muscle as “no effect.” Muscle does have glycogen phosphorylase, activated instead by epinephrine and contraction."
  },

  /* ---------- Module 3 · Section 2: counterregulatory hormones ---------- */
  c10a: {
    options: [
      "Catabolic, because it breaks down peripheral stores to supply glucose",
      "Anabolic, because it builds hepatic glycogen",
      "Metabolically neutral, because its anabolic and catabolic effects cancel"
    ],
    answer: 0,
    why: "Cortisol promotes breakdown of peripheral molecules, such as muscle protein, that can become glucose. Hepatic glycogen storage is a destination for that glucose, not the driving effect."
  },
  c10b: {
    options: [
      "Muscles oxidize the extra fatty acids in preference to glucose",
      "Growth hormone blocks glucose transporters directly in muscle",
      "Fatty acids are converted to glucose, which saturates muscle uptake",
      "Growth hormone lowers insulin secretion from the pancreas"
    ],
    answer: 0,
    why: "GH makes adipose less responsive to insulin’s lipogenic signal, so more fatty acids are released. Muscles burn the abundant fatty acids, which indirectly reduces their glucose uptake."
  },
  c10c: {
    options: [
      "Thyroid hormone increases tissue sensitivity to catecholamines",
      "Thyroxine is converted to epinephrine in peripheral tissues",
      "Thyroid hormone binds cardiac β₁ receptors directly",
      "Thyroid hormone lowers basal metabolic rate, triggering reflex tachycardia"
    ],
    answer: 0,
    why: "T₃ potentiates catecholamine signaling, so normal epinephrine and norepinephrine levels produce an exaggerated heart rate response. Both hormone families come from tyrosine, but T₄ is not converted to epinephrine."
  },

  /* ---------- Module 3 · Section 3: response patterns ---------- */
  c11a: {
    options: [
      "Increased hepatic gluconeogenesis and decreased peripheral glucose uptake",
      "Increased insulin secretion and increased muscle glycogen synthesis",
      "Decreased hepatic gluconeogenesis and increased peripheral glucose uptake",
      "Increased incretin secretion and decreased glucagon secretion"
    ],
    answer: 0,
    why: "Glucocorticoids push the liver to make more glucose while making muscle and other tissues take up less. Both effects push blood glucose upward."
  },
  c11b: {
    options: ["Insulin falls and glucagon rises", "Insulin rises and glucagon falls", "Both insulin and glucagon rise", "Both insulin and glucagon fall"],
    answer: 0,
    why: "Catecholamines inhibit insulin release and stimulate glucagon release, which shifts the body toward fuel mobilization during stress or intense exercise."
  },

  /* ---------- Module 3 · Section 4: incretins ---------- */
  c12a: {
    options: [
      "GLP-2 increases intestinal mucosal proliferation and barrier function",
      "GLP-2 stimulates insulin secretion after a meal",
      "GLP-2 slows gastric emptying and reduces appetite",
      "GLP-2 raises blood glucose by stimulating glycogenolysis"
    ],
    answer: 0,
    why: "GLP-2 is intestinotrophic rather than an incretin. A GLP-2 analog helps a shortened bowel grow absorptive surface, which is why teduglutide treats short bowel syndrome."
  },
  c12b: {
    options: [
      "The tissue that processes proglucagon: the small intestine versus the pancreas",
      "The blood glucose level at the moment proglucagon is transcribed",
      "Whether proglucagon is secreted intact and cleaved in the blood",
      "The route of nutrient delivery: oral versus intravenous"
    ],
    answer: 0,
    why: "Proglucagon is cleaved differently by tissue. Intestinal processing releases GLP-1 and GLP-2; pancreatic processing releases glucagon."
  },
  c12c: {
    options: [
      "Little GLP-1 and GIP secretion, so a smaller insulin response",
      "Greater GLP-1 and GIP secretion, so a larger insulin response",
      "Greater GLP-2 secretion, so faster mucosal growth",
      "Unchanged incretin secretion, since blood glucose rises either way"
    ],
    answer: 0,
    why: "GLP-1 and GIP are released in response to nutrients inside the gut. IV glucose raises blood glucose without that signal, so the incretin amplification of insulin release is missing."
  },

  /* ---------- Module 4 · Section 1: tissue fuel profiles ---------- */
  c13a: {
    options: [
      "It produces them for export to brain and muscle while meeting its own needs with fatty acids",
      "It produces them and oxidizes them to power gluconeogenesis",
      "It oxidizes ketone bodies that the brain produces during starvation",
      "It stores ketone bodies in hepatocytes until blood glucose falls"
    ],
    answer: 0,
    why: "The liver can use essentially every major fuel except ketone bodies: it lacks the transferase that activates acetoacetate to acetoacetyl-CoA. That keeps the ketones it makes available for other tissues."
  },
  c13b: {
    options: ["They lack mitochondria", "They lack glucose transporters", "They lack glycolytic enzymes", "They lack hemoglobin-bound oxygen"],
    answer: 0,
    why: "Without mitochondria, red blood cells cannot run the citric acid cycle or oxidative phosphorylation. Glycolysis to lactate is their sole ATP source, even when fully oxygenated."
  },
  c13c: {
    options: ["Fatty acids", "Glucose", "Lactate", "Ketone bodies"],
    answer: 0,
    why: "Fatty acids supply roughly 60–70% of cardiac fuel metabolism. The heart also uses lactate and glucose, which lets it keep contracting continuously as fuel availability shifts."
  },

  /* ---------- Module 4 · Section 2: liver ---------- */
  c14a: {
    options: [
      "The hepatic portal vein carries blood from the GI tract to the liver first",
      "The lymphatic system carries absorbed drugs to the liver first",
      "The hepatic artery carries absorbed drugs directly to the kidney",
      "Bile carries absorbed drugs back into the intestine before absorption"
    ],
    answer: 0,
    why: "Blood from the major GI tissues drains through the portal vein to the liver before reaching systemic circulation, so cytochrome P450 enzymes can metabolize an oral drug on its first pass."
  },
  c14b: {
    options: ["The urea cycle", "Ketone body synthesis", "Glycogen synthesis", "VLDL export"],
    answer: 0,
    why: "The liver is the primary site of amino acid metabolism and converts excess nitrogen into urea. When the urea cycle fails, ammonia accumulates in blood."
  },
  c14c: {
    options: ["Liver", "Skeletal muscle", "Adipose tissue", "Brain"],
    answer: 0,
    why: "The liver is the primary site of both fructose and galactose metabolism, and portal blood brings dietary fructose there first."
  },

  /* ---------- Module 4 · Section 3: muscle ---------- */
  c15a: {
    options: ["Phosphocreatine", "Muscle glycogen oxidized aerobically", "Blood-borne fatty acids", "Ketone bodies"],
    answer: 0,
    why: "Stored ATP lasts about 1.2 seconds; phosphocreatine can sustain maximal effort for about 9 seconds by transferring its phosphate to ADP."
  },
  c15b: {
    options: [
      "Glycolysis produces pyruvate faster than oxidative phosphorylation can use it",
      "Fatty acid oxidation produces lactate as its end product",
      "Phosphocreatine is converted to lactate once ATP runs low",
      "Excess oxygen delivery converts pyruvate to lactate"
    ],
    answer: 0,
    why: "At high intensity, ATP demand outruns oxidative capacity. Glycolysis speeds ahead, and pyruvate is reduced to lactate to regenerate NAD⁺ so glycolysis can continue."
  },
  c15c: {
    options: ["Fatty acids", "Phosphocreatine", "Stored ATP", "Muscle protein"],
    answer: 0,
    why: "The longer exercise lasts, the more muscle relies on blood-borne fatty acids as glycogen is drawn down."
  },

  /* ---------- Module 4 · Section 4: creatine / creatinine ---------- */
  c16a: {
    options: [
      "Less creatinine is produced, so serum creatinine stays low even though GFR is reduced",
      "More creatinine is produced, so serum creatinine rises even though GFR is normal",
      "Creatinine is reabsorbed more in older kidneys, so serum levels fall",
      "Creatinine formation becomes enzymatic with age, so serum levels fall"
    ],
    answer: 0,
    why: "Creatinine production tracks muscle mass. With little muscle, little creatinine is made, so a “normal” value can hide reduced filtration and overestimate kidney function."
  },
  c16b: {
    options: [
      "It forms spontaneously at a relatively constant rate for a given person",
      "It is synthesized on demand by the kidney when filtration falls",
      "It is produced by the liver in proportion to dietary protein",
      "It is actively secreted in proportion to blood pressure"
    ],
    answer: 0,
    why: "Creatine and phosphocreatine cyclize nonenzymatically into creatinine at a steady rate, which is then excreted by the kidney. A steady input makes blood levels reflect how well the kidney clears it."
  },

  /* ---------- Integration challenge ---------- */
  c17a: {
    options: [
      "Red blood cells release lactate, and the liver converts it back to glucose",
      "The liver releases lactate, and red blood cells convert it back to glucose",
      "Adipose releases lactate, and the brain converts it to ketone bodies",
      "Muscle releases glycerol, and red blood cells convert it to lactate"
    ],
    answer: 0,
    why: "This is the Cori cycle. Red blood cells cannot oxidize glucose completely, so the liver recycles their lactate into new glucose, spending ATP from fatty acid oxidation."
  },
  c17b: {
    options: [
      "Liver is the source; brain and skeletal muscle are major consumers",
      "Brain is the source; liver and skeletal muscle are major consumers",
      "Adipose is the source; liver and red blood cells are major consumers",
      "Skeletal muscle is the source; brain and liver are major consumers"
    ],
    answer: 0,
    why: "Hepatic fatty acid oxidation produces ketone bodies for export. Muscle and, increasingly, the brain oxidize them; the liver and red blood cells do not."
  }
};

var CARDS = [
  { id:"MET-CARD-01", t:"Energy yield of carbohydrate, protein, fat, alcohol", d:"4, 4, 9, and 7 kcal/g, respectively. A nutritional Calorie is a kilocalorie." },
  { id:"MET-CARD-02", t:"Kilocalorie", d:"The energy needed to raise the temperature of 1 liter of water by 1 °C." },
  { id:"MET-CARD-03", t:"Why triglyceride beats glycogen for storage", d:"9 kcal/g and stored nearly dry (adipose ~15% water) versus 4 kcal/g with ~4 g water per gram. ~18 kg adipose would take ~170 kg as glycogen." },
  { id:"MET-CARD-04", t:"Share of stored calories in adipose triglyceride", d:"About 85%. Protein about 14%, liver plus muscle glycogen under 1%." },
  { id:"MET-CARD-05", t:"Dedicated protein store", d:"There is none. Protein mobilized for fuel comes from functional tissue, mainly skeletal muscle." },
  { id:"MET-CARD-06", t:"Three components of daily energy expenditure", d:"Basal metabolic rate, physical activity, and diet-induced thermogenesis (~10% of the total)." },
  { id:"MET-CARD-07", t:"Factors that change BMR", d:"Age, sex, lean mass, pregnancy, thyroid function, body temperature, and ambient temperature." },
  { id:"MET-CARD-08", t:"Route of dietary triglyceride", d:"Packaged into chylomicrons, enters lymph (bypassing the liver), unloaded by lipoprotein lipase in adipose and muscle." },
  { id:"MET-CARD-09", t:"First source of blood glucose in the postabsorptive state", d:"Liver glycogenolysis, followed by a growing share from gluconeogenesis." },
  { id:"MET-CARD-10", t:"Gluconeogenic substrates during fasting", d:"Glycerol (from triglyceride), lactate (from glycolysis), and amino acids (mainly from muscle)." },
  { id:"MET-CARD-11", t:"Why urea production falls in prolonged starvation", d:"Brain ketone use lowers glucose demand → less amino-acid gluconeogenesis → less muscle protein breakdown → less nitrogen to dispose of." },
  { id:"MET-CARD-12", t:"Brain fuel: day 3 vs day 40 of starvation", d:"Day 3: ~100 g glucose, ~50 g ketone bodies. Day 40: ~40 g glucose, ~100 g ketone bodies." },
  { id:"MET-CARD-13", t:"Why TCA flux falls in the starving liver", d:"Oxaloacetate is pulled into gluconeogenesis while acetyl-CoA is routed into ketone bodies." },
  { id:"MET-CARD-14", t:"Insulin: anabolic effects", d:"↑ uptake of glucose and amino acids; ↑ glycogen, protein, fatty acid/VLDL, and triglyceride synthesis; ↓ gluconeogenesis, glycogenolysis, and lipolysis." },
  { id:"MET-CARD-15", t:"Glucagon: target and effects", d:"Acts on the liver: ↑ glycogenolysis and gluconeogenesis, ↓ glycogen synthesis and lipogenesis. No direct effect on skeletal muscle." },
  { id:"MET-CARD-16", t:"Growth hormone: main fuel effect", d:"Increases fatty acid availability by reducing adipose sensitivity to insulin; muscle burns fatty acids and takes up less glucose. Acts largely through IGF-I." },
  { id:"MET-CARD-17", t:"Catecholamines: fuel effects", d:"Mobilize fuel; stimulate glucagon and inhibit insulin release. NE: α₁ vasoconstriction raises perfusion pressure. Epinephrine: β₁ raises cardiac output." },
  { id:"MET-CARD-18", t:"Glucocorticoids: net effect on glucose", d:"↑ hepatic gluconeogenesis and glycogen storage, ↓ peripheral glucose uptake, ↑ breakdown of peripheral substrates. Catabolic overall." },
  { id:"MET-CARD-19", t:"Thyroid hormone: metabolic effects", d:"↑ BMR and O₂ consumption; potentiates catecholamine signaling. T₄ is converted to active T₃ in peripheral tissues." },
  { id:"MET-CARD-20", t:"Incretins", d:"GLP-1 and GIP: gut hormones released after nutrients enter the intestine that amplify insulin secretion. IV glucose does not trigger them." },
  { id:"MET-CARD-21", t:"Semaglutide, tirzepatide, teduglutide", d:"Semaglutide: GLP-1 agonist. Tirzepatide: dual GLP-1/GIP agonist. Teduglutide: GLP-2 analog for short bowel syndrome." },
  { id:"MET-CARD-22", t:"Liver: the one major fuel it does not oxidize", d:"Ketone bodies. It makes them for export to brain and muscle." },
  { id:"MET-CARD-23", t:"Red blood cell fuel", d:"Glucose → lactate by glycolysis, at every stage of feeding and fasting, because RBCs lack mitochondria." },
  { id:"MET-CARD-24", t:"Heart fuel", d:"Primarily fatty acids (~60–70%), plus lactate and glucose." },
  { id:"MET-CARD-25", t:"Liver share of total O₂ consumption", d:"About 20%, reflecting the number of pathways it runs." },
  { id:"MET-CARD-26", t:"Stored ATP vs phosphocreatine duration", d:"Stored ATP ~1.2 seconds; phosphocreatine ~9 seconds of maximal exercise." },
  { id:"MET-CARD-27", t:"Why intense exercise raises lactate", d:"Glycolysis runs faster than oxidative phosphorylation can consume pyruvate." },
  { id:"MET-CARD-28", t:"Creatine synthesis", d:"From glycine, arginine, and methionine (as SAM). Begins in the kidney, finishes in the liver." },
  { id:"MET-CARD-29", t:"Creatinine and GFR", d:"Creatine cyclizes spontaneously at a steady rate to creatinine, which the kidney excretes; serum creatinine is used to estimate GFR." },
  { id:"MET-CARD-30", t:"Cori cycle", d:"Lactate from RBCs and exercising muscle returns to the liver and is rebuilt into glucose." }
];

var POOL = [

  /* =================== MODULE 1 =================== */
  /* Fuel energy yield */
  { id:"MET-001", m:"m1", area:"Fuel energy yield", level:"concept",
    stem:"How much energy does 1 g of dietary fat provide?",
    options:["9 kcal","4 kcal","7 kcal","12 kcal"], answer:0,
    why:"Fat yields about 9 kcal/g, more than twice the 4 kcal/g of carbohydrate and protein. Alcohol yields about 7 kcal/g." },
  { id:"MET-002", m:"m1", area:"Fuel energy yield", level:"application",
    stem:"A protein bar contains 20 g carbohydrate, 10 g fat, and 15 g protein. What is its approximate energy content?",
    options:["230 kcal","180 kcal","290 kcal","405 kcal"], answer:0,
    why:"(20 g × 4) + (10 g × 9) + (15 g × 4) = 80 + 90 + 60 = 230 kcal. 180 kcal treats every gram as 4 kcal; 405 kcal treats every gram as 9 kcal." },
  { id:"MET-003", m:"m1", area:"Fuel energy yield", level:"application",
    stem:"A person replaces a 150 kcal snack with a drink containing 21 g of ethanol and no other nutrients. How does energy intake change?",
    options:["It stays about the same","It falls by about half","It roughly doubles","It drops to near zero"], answer:0,
    why:"21 g × 7 kcal/g ≈ 147 kcal, essentially the same as the snack. Ethanol is metabolized to acetyl-CoA and contributes real energy." },
  { id:"MET-004", m:"m1", area:"Fuel energy yield", level:"integration",
    stem:"Fatty acids, ketone bodies, glucose, alanine, and ethanol each feed energy metabolism. Which feature lets hormones coordinate the use of these different fuels?",
    options:["Their catabolic pathways converge on acetyl-CoA and the citric acid cycle","Each fuel is oxidized in a separate, dedicated organ","Each fuel is converted to glycogen before it is oxidized","Each fuel uses its own electron transport chain"], answer:0,
    why:"Because the pathways share acetyl-CoA and the citric acid cycle, a small set of hormonal signals can shift the whole system between storing and burning fuel." },
  { id:"MET-005", m:"m1", area:"Fuel energy yield", level:"concept",
    stem:"In nutritional labeling, one Calorie equals which quantity?",
    options:["1 kilocalorie","1 calorie","1 kilojoule","1,000 kilocalories"], answer:0,
    why:"The nutritional Calorie is a kilocalorie: the energy required to raise 1 liter of water by 1 °C." },

  /* Fuel storage efficiency */
  { id:"MET-006", m:"m1", area:"Fuel storage efficiency", level:"concept",
    stem:"Which fuel accounts for approximately 85% of the body’s stored calories?",
    options:["Adipose triglyceride","Muscle glycogen","Body protein","Liver glycogen"], answer:0,
    why:"About 15 kg of triglyceride holds ~85% of stored energy. Protein accounts for ~14%, and muscle plus liver glycogen for less than 1%." },
  { id:"MET-007", m:"m1", area:"Fuel storage efficiency", level:"application",
    stem:"About 135,000 kcal is stored as triglyceride in a typical adult. Approximately how much tissue would be needed to store that energy as hydrated glycogen?",
    options:["170 kg","18 kg","34 kg","60 kg"], answer:0,
    why:"135,000 kcal ÷ 4 kcal/g ≈ 34 kg of glycogen. Each gram carries about 4 g of water, so the tissue mass is ~34 kg × 5 ≈ 170 kg. 34 kg forgets the water; 18 kg is the adipose value." },
  { id:"MET-008", m:"m1", area:"Fuel storage efficiency", level:"application",
    stem:"Why does 15 kg of stored triglyceride correspond to about 18 kg of adipose tissue?",
    options:["Adipose tissue contains roughly 15% water","Adipose tissue contains roughly 60% water","Adipose triglyceride is stored bound to glycogen","Adipose triglyceride is stored as hydrated protein complexes"], answer:0,
    why:"Triglyceride is hydrophobic and stored nearly anhydrous, so adipose tissue is about 85% fuel by mass: 15 kg ÷ 0.85 ≈ 18 kg." },
  { id:"MET-009", m:"m1", area:"Fuel storage efficiency", level:"integration",
    stem:"A migratory bird must store enough energy for a multiday flight without feeding. Which storage strategy best fits the biochemical trade-off?",
    options:["Triglyceride, because it stores the most energy per gram of tissue mass","Glycogen, because it can be mobilized faster than triglyceride","Protein, because it serves as both structure and fuel","Blood glucose, because it needs no mobilization step"], answer:0,
    why:"For an animal that must carry its fuel, energy per unit mass decides the question. Adipose stores roughly ten times more energy per kilogram of tissue than hydrated glycogen." },
  { id:"MET-010", m:"m1", area:"Fuel storage efficiency", level:"integration",
    stem:"Glycogen is a poor bulk energy store, yet liver and muscle maintain small glycogen reserves. Which advantage justifies keeping them?",
    options:["Glycogen is mobilized rapidly and supplies glucose, which fatty acids cannot provide","Glycogen yields more energy per gram than triglyceride","Glycogen is stored without water, saving body mass","Glycogen is the main precursor for ketone bodies"], answer:0,
    why:"Glycogen releases glucose within seconds to minutes, supporting anaerobic glycolysis in muscle and blood glucose for the brain and red blood cells. Fatty acids cannot be converted into net glucose." },

  /* Stored fuel pools */
  { id:"MET-011", m:"m1", area:"Stored fuel pools", level:"concept",
    stem:"Which macronutrient lacks a dedicated storage form in the body?",
    options:["Protein","Carbohydrate","Fat"], answer:0,
    why:"Carbohydrate is stored as glycogen and fat as triglyceride. Protein exists as functional tissue, so using it for fuel costs structure or function." },
  { id:"MET-012", m:"m1", area:"Stored fuel pools", level:"application",
    stem:"Liver glycogen totals about 0.08 kg in a fed adult. At 4 kcal/g, roughly how much energy does it hold?",
    options:["320 kcal","32 kcal","3,200 kcal","720 kcal"], answer:0,
    why:"80 g × 4 kcal/g = 320 kcal. A reserve this small explains why hepatic glycogen supports blood glucose for hours, with gluconeogenesis taking over as a fast continues." },
  { id:"MET-013", m:"m1", area:"Stored fuel pools", level:"application",
    stem:"A patient with prolonged critical illness and inadequate feeding loses substantial skeletal muscle. What does this loss represent metabolically?",
    options:["Functional protein mobilized as fuel in the absence of a protein reserve","A dedicated protein reserve released as intended","Muscle glycogen converted into adipose triglyceride","Intramuscular triglyceride oxidized by the heart"], answer:0,
    why:"Muscle protein supplies amino acids for gluconeogenesis, but because protein has no dedicated storage form, the fuel comes at the cost of strength, mobility, and respiratory muscle function." },
  { id:"MET-014", m:"m1", area:"Stored fuel pools", level:"application",
    stem:"During a fast, fatty acids travel in plasma bound to albumin. How is this fuel best classified?",
    options:["Circulating fuel","Dedicated storage","Functional tissue that can be mobilized"], answer:0,
    why:"Albumin-bound fatty acids are fuel in transit between adipose (the store) and tissues that oxidize them, such as muscle and heart." },
  { id:"MET-015", m:"m1", area:"Stored fuel pools", level:"integration",
    stem:"Muscle holds more glycogen (0.15 kg) than the liver (0.08 kg). Why does the liver’s store matter more for blood glucose between meals?",
    options:["The liver releases free glucose into blood, while muscle uses its glycogen internally","Liver glycogen yields more energy per gram than muscle glycogen","Muscle glycogen is converted to ketone bodies for the brain","Muscle glycogen is released as lactate that the brain oxidizes directly"], answer:0,
    why:"Muscle lacks glucose-6-phosphatase, so its glycogen fuels its own glycolysis. The liver can dephosphorylate glucose-6-phosphate and export glucose." },

  /* Energy expenditure */
  { id:"MET-016", m:"m1", area:"Energy expenditure", level:"concept",
    stem:"Which component accounts for about 10% of daily energy expenditure?",
    options:["Diet-induced thermogenesis","Basal metabolic rate","Physical activity"], answer:0,
    why:"Diet-induced thermogenesis (the thermic effect of feeding) is the energy spent digesting, absorbing, distributing, and storing food: about 10% of the total." },
  { id:"MET-017", m:"m1", area:"Energy expenditure", level:"application",
    stem:"A patient develops untreated hypothyroidism. Which change in energy balance is expected?",
    options:["Lower BMR with weight gain and cold intolerance","Higher BMR with weight loss and heat intolerance","Unchanged BMR with lower diet-induced thermogenesis","Higher diet-induced thermogenesis with heat intolerance"], answer:0,
    why:"Thyroid hormone raises BMR and oxygen consumption. Too little lowers energy expenditure, leading to weight gain and cold intolerance." },
  { id:"MET-018", m:"m1", area:"Energy expenditure", level:"application",
    stem:"Two adults have equal body weight, but one has substantially more lean mass. Which statement about their BMR is best supported?",
    options:["The leaner adult has the higher BMR, because non-adipose tissue is more metabolically active","The leaner adult has the lower BMR, because muscle stores less fuel","Their BMRs are equal, because BMR is set by body weight","The adult with more adipose tissue has the higher BMR, because fat insulates"], answer:0,
    why:"Lean mass is a listed determinant of BMR. Non-adipose tissue maintains gradients and runs pathways continuously, so at equal weight, more lean mass means higher BMR." },
  { id:"MET-019", m:"m1", area:"Energy expenditure", level:"application",
    stem:"A person keeps the same diet but begins training for a marathon. Which component of daily energy expenditure increases most directly?",
    options:["Physical activity","Basal metabolic rate","Diet-induced thermogenesis"], answer:0,
    why:"Contracting muscle uses ATP. Training raises the activity component directly; BMR may rise modestly later if lean mass increases." },
  { id:"MET-020", m:"m1", area:"Energy expenditure", level:"integration",
    stem:"A patient in her third trimester of pregnancy lives in a cold climate. Which conclusion about her daily energy expenditure is best supported?",
    options:["Pregnancy and low ambient temperature each raise BMR, increasing DEE","Pregnancy raises BMR while cold lowers it, so DEE is unchanged","Diet-induced thermogenesis rises to compensate while BMR stays constant","Physical activity sets DEE, so neither factor changes it"], answer:0,
    why:"Pregnancy and ambient temperature are both listed determinants of BMR. Growing tissue and heat production to defend body temperature both add to energy expenditure." },

  /* =================== MODULE 2 =================== */
  /* Fed state */
  { id:"MET-021", m:"m2", area:"Fed state", level:"concept",
    stem:"After a meal, dietary triglycerides leave the intestine packaged in which lipoprotein?",
    options:["Chylomicrons","VLDL","LDL","HDL"], answer:0,
    why:"Intestinal cells package dietary triglyceride with protein, phospholipid, and cholesterol into chylomicrons, which enter the lymph. VLDL carries triglyceride made by the liver." },
  { id:"MET-022", m:"m2", area:"Fed state", level:"application",
    stem:"Glucose absorbed from a meal passes through which organ before reaching the pancreas?",
    options:["Liver","Adipose tissue","Skeletal muscle","Kidney"], answer:0,
    why:"Absorbed glucose travels in the hepatic portal vein to the liver first, then enters systemic circulation, where it reaches the pancreas and stimulates insulin release." },
  { id:"MET-023", m:"m2", area:"Fed state", level:"application",
    stem:"Which enzyme lets adipose tissue take up fatty acids from circulating chylomicrons after a meal?",
    options:["Lipoprotein lipase","Hormone-sensitive lipase","Carnitine palmitoyltransferase I","Pancreatic lipase"], answer:0,
    why:"Lipoprotein lipase on capillary walls hydrolyzes chylomicron triglyceride. Hormone-sensitive lipase works inside adipocytes during fasting; pancreatic lipase works in the intestinal lumen." },
  { id:"MET-024", m:"m2", area:"Fed state", level:"application",
    stem:"After a high-protein meal, what happens to absorbed amino acids that exceed protein synthesis needs?",
    options:["They are oxidized or converted to other fuels, with their nitrogen disposed of as urea","They are stored as a dedicated protein reserve in muscle","They are stored unchanged within adipose tissue","They are excreted unchanged in the urine"], answer:0,
    why:"Surplus amino acids are deaminated. Their carbon skeletons enter the citric acid cycle or other pathways, and the liver converts the nitrogen to urea." },
  { id:"MET-025", m:"m2", area:"Fed state", level:"integration",
    stem:"A patient with severe fat malabsorption eats a high-fat meal. Which fed-state event is most reduced?",
    options:["Chylomicron delivery of triglyceride to adipose via lipoprotein lipase","Portal vein delivery of glucose to the liver","Insulin-stimulated glucose uptake into muscle","Hepatic glycogen synthesis from dietary glucose"], answer:0,
    why:"Without absorption of dietary fat, few chylomicrons form, so little triglyceride reaches lipoprotein lipase in adipose capillaries. The carbohydrate arm of the fed state still runs." },

  /* Postabsorptive state */
  { id:"MET-026", m:"m2", area:"Postabsorptive state", level:"concept",
    stem:"About 12 hours after a meal, which source does the liver draw on first to maintain blood glucose?",
    options:["Glycogen breakdown","Gluconeogenesis from amino acids","Ketone body conversion","Remaining dietary glucose"], answer:0,
    why:"The liver first uses its glycogen, then relies increasingly on gluconeogenesis as that store is depleted." },
  { id:"MET-027", m:"m2", area:"Postabsorptive state", level:"application",
    stem:"Which set of substrates supports hepatic gluconeogenesis during an overnight fast?",
    options:["Glycerol, lactate, and amino acids","Fatty acids, acetyl-CoA, and ketone bodies","Glycerol, fatty acids, and cholesterol","Lactate, ketone bodies, and acetyl-CoA"], answer:0,
    why:"Glycerol comes from triglyceride, lactate from glycolysis, and amino acids mainly from muscle. Fatty acids, acetyl-CoA, and ketone bodies cannot provide net glucose carbon." },
  { id:"MET-028", m:"m2", area:"Postabsorptive state", level:"application",
    stem:"Alanine released from muscle during an overnight fast enters hepatic gluconeogenesis after conversion to which intermediate?",
    options:["Pyruvate","Acetyl-CoA","Dihydroxyacetone phosphate","Acetoacetate"], answer:0,
    why:"Transamination converts alanine to pyruvate, which is carboxylated to oxaloacetate for gluconeogenesis. The amino group is sent to the urea cycle. Glycerol enters as dihydroxyacetone phosphate." },
  { id:"MET-029", m:"m2", area:"Postabsorptive state", level:"application",
    stem:"Why does urinary nitrogen excretion rise during the first day of a fast?",
    options:["Amino acids from muscle protein are deaminated for gluconeogenesis, producing urea","Ketone bodies contain nitrogen that is excreted as they accumulate","Glycerol metabolism releases ammonia that the kidney excretes","Reduced kidney filtration concentrates urea in the urine"], answer:0,
    why:"Using amino acid carbon skeletons for glucose releases their nitrogen, which the liver converts to urea for excretion." },
  { id:"MET-030", m:"m2", area:"Postabsorptive state", level:"integration",
    stem:"A child has an inherited defect that blocks hepatic gluconeogenesis. At which point is the risk of hypoglycemia greatest?",
    options:["After liver glycogen is depleted during an extended overnight fast","One hour after a carbohydrate-rich meal","During a continuous intravenous glucose infusion","Thirty minutes into eating a mixed meal"], answer:0,
    why:"Glycogenolysis can carry blood glucose for a while, so symptoms appear once that reserve runs out and gluconeogenesis would normally take over." },

  /* Starvation adaptation */
  { id:"MET-031", m:"m2", area:"Starvation adaptation", level:"concept",
    stem:"Which fuel does the brain use in increasing amounts as starvation is prolonged?",
    options:["Ketone bodies","Fatty acids","Lactate","Amino acids"], answer:0,
    why:"Brain ketone use rises from about 50 g/day at day 3 to about 100 g/day by day 40, while its glucose use falls." },
  { id:"MET-032", m:"m2", area:"Starvation adaptation", level:"application",
    stem:"Between day 3 and day 40 of starvation, muscle protein breakdown falls from about 75 g/day to about 20 g/day. Which change allows this decrease?",
    options:["Brain ketone use lowers glucose demand, reducing the need for amino acids in gluconeogenesis","Muscle protein is exhausted, so no more can be broken down","The kidney stops filtering urea, so protein breakdown is suppressed","Insulin secretion rises and promotes muscle protein synthesis"], answer:0,
    why:"As the brain switches toward ketone bodies, whole-body glucose need falls, so less amino acid carbon is needed for gluconeogenesis and muscle is spared." },
  { id:"MET-033", m:"m2", area:"Starvation adaptation", level:"application",
    stem:"Why does citric acid cycle flux in the liver fall during prolonged starvation?",
    options:["Acetyl-CoA is directed into ketogenesis while oxaloacetate is directed into gluconeogenesis","Pyruvate dehydrogenase is activated, consuming the available acetyl-CoA","Fatty acid oxidation stops, so acetyl-CoA production ends","NADH becomes scarce, so citric acid cycle enzymes are inhibited"], answer:0,
    why:"Oxaloacetate withdrawn for gluconeogenesis limits citrate formation, and the resulting acetyl-CoA surplus from β-oxidation is converted into ketone bodies." },
  { id:"MET-034", m:"m2", area:"Starvation adaptation", level:"application",
    stem:"Plasma ketone bodies rise from near 0.1 mM toward 5 mM over the first week of starvation. Which hepatic process supplies them?",
    options:["Fatty acid oxidation producing surplus acetyl-CoA","Glycogenolysis producing surplus glucose-6-phosphate","The urea cycle producing surplus fumarate","Lipogenesis producing surplus malonyl-CoA"], answer:0,
    why:"Fatty acids released by adipose lipolysis are oxidized in the liver, and the acetyl-CoA that the citric acid cycle cannot absorb is condensed into acetoacetate and β-hydroxybutyrate." },
  { id:"MET-035", m:"m2", area:"Starvation adaptation", level:"integration",
    stem:"A person on day 30 of a medically supervised fast has stable blood glucose near 3.5 mM with little ongoing protein loss. Which combination best explains this?",
    options:["Lower brain glucose use, lactate recycling, and glycerol-derived gluconeogenesis","Rebuilt glycogen reserves, lipogenesis, and rising insulin","Conversion of fatty acids to glucose and ketone bodies to amino acids","Increased red blood cell ketone use and hepatic ketone oxidation"], answer:0,
    why:"Ketone use shrinks the brain’s glucose requirement, the Cori cycle recycles RBC lactate, and glycerol from lipolysis supplies new carbon, so muscle protein is spared." },

  /* Integrated fuel states */
  { id:"MET-036", m:"m2", area:"Integrated fuel states", level:"concept",
    stem:"Which hormone pattern characterizes the postabsorptive state?",
    options:["Low insulin, high glucagon","High insulin, low glucagon","High insulin, high glucagon","Low insulin, low glucagon"], answer:0,
    why:"Between meals, falling glucose lowers insulin and raises glucagon, shifting the liver to glucose export and adipose to lipolysis." },
  { id:"MET-037", m:"m2", area:"Integrated fuel states", level:"application",
    stem:"Two hours after a mixed meal, which process predominates in adipose tissue?",
    options:["Triglyceride synthesis and storage","Lipolysis releasing fatty acids and glycerol","Ketone body formation","Gluconeogenesis from glycerol"], answer:0,
    why:"A high insulin/glucagon ratio promotes triglyceride synthesis and inhibits lipolysis. Adipose tissue does not form ketone bodies or perform gluconeogenesis." },
  { id:"MET-038", m:"m2", area:"Integrated fuel states", level:"application",
    stem:"Which pairing correctly matches fasting duration with the brain’s main fuel?",
    options:["12-hour fast: glucose; 40-day fast: mostly ketone bodies","12-hour fast: ketone bodies; 40-day fast: glucose","12-hour fast: fatty acids; 40-day fast: ketone bodies","12-hour fast: glucose; 40-day fast: mostly fatty acids"], answer:0,
    why:"Ketone production begins by 12 hours but is not a major fuel yet. After weeks of fasting, ketone bodies supply most of the brain’s energy. The brain does not oxidize fatty acids meaningfully at any stage." },
  { id:"MET-039", m:"m2", area:"Integrated fuel states", level:"integration",
    stem:"A blood sample shows glucose 3.6 mM, ketone bodies 4.5 mM, fatty acids 1.2 mM, and very low insulin. Which state best fits?",
    options:["About one week of starvation","Two hours after a meal","A 12-hour overnight fast","Thirty minutes into exercise after breakfast"], answer:0,
    why:"Glucose has leveled off near 3.5 mM while ketone bodies exceed glucose, the crossover seen around days 5–7 of starvation. After an overnight fast, ketones are still well below 1 mM." },
  { id:"MET-040", m:"m2", area:"Integrated fuel states", level:"integration",
    stem:"Which tissue’s glucose dependence keeps some hepatic glucose output necessary even after 40 days of starvation?",
    options:["Red blood cells","Heart","Skeletal muscle","Liver"], answer:0,
    why:"Red blood cells lack mitochondria and cannot use fatty acids or ketone bodies. Their lactate is recycled by the liver, but glucose must still be supplied." },

  /* =================== MODULE 3 =================== */
  /* Insulin and glucagon */
  { id:"MET-041", m:"m3", area:"Insulin and glucagon", level:"concept",
    stem:"Insulin is described as an anabolic hormone. What does this classification mean?",
    options:["It stimulates synthesis of larger biomolecules from smaller ones","It stimulates breakdown of stored fuels into smaller molecules","It raises basal metabolic rate and oxygen consumption","It stimulates ketone body production from fatty acids"], answer:0,
    why:"Insulin drives glycogen, protein, and triglyceride synthesis, building large molecules from glucose, amino acids, and fatty acids." },
  { id:"MET-042", m:"m3", area:"Insulin and glucagon", level:"application",
    stem:"Which hepatic process does insulin stimulate?",
    options:["Glycogen and fatty acid synthesis","Glycogen breakdown","Gluconeogenesis","Ketone body formation"], answer:0,
    why:"Insulin promotes glycogen, fatty acid/VLDL, and protein synthesis in the liver while inhibiting glycogenolysis and gluconeogenesis." },
  { id:"MET-043", m:"m3", area:"Insulin and glucagon", level:"application",
    stem:"Which action of insulin in adipose tissue reduces fatty acid release into blood?",
    options:["Inhibition of triglyceride hydrolysis","Stimulation of fatty acid β-oxidation","Stimulation of ketone body formation","Inhibition of glucose uptake"], answer:0,
    why:"Insulin inhibits lipolysis and stimulates triglyceride synthesis, so fatty acids stay stored after a meal." },
  { id:"MET-044", m:"m3", area:"Insulin and glucagon", level:"application",
    stem:"Which set of hepatic effects does glucagon produce between meals?",
    options:["Stimulates glycogenolysis and gluconeogenesis, inhibits glycogen synthesis","Stimulates glycogen synthesis and lipogenesis, inhibits gluconeogenesis","Stimulates lipogenesis and glycogenolysis, inhibits ketogenesis","Stimulates glycogen synthesis and gluconeogenesis, inhibits glycogenolysis"], answer:0,
    why:"Glucagon mobilizes fuel: it releases glucose from glycogen, drives gluconeogenesis, and blocks glycogen synthesis and conversion of glucose to fatty acids." },
  { id:"MET-045", m:"m3", area:"Insulin and glucagon", level:"integration",
    stem:"A patient with an insulin-secreting tumor (insulinoma) has recurrent fasting hypoglycemia. Which mechanism best explains it?",
    options:["Persistent insulin suppresses hepatic glucose output while promoting peripheral glucose uptake","Persistent insulin stimulates glucagon, which depletes liver glycogen","Persistent insulin increases lipolysis, and the fatty acids are converted to glucose","Persistent insulin blocks red blood cell glycolysis, releasing glucose"], answer:0,
    why:"Insulin normally falls during a fast. When it stays high, glycogenolysis and gluconeogenesis are held back while muscle and adipose keep taking up glucose." },

  /* Counterregulatory hormones */
  { id:"MET-046", m:"m3", area:"Counterregulatory hormones", level:"concept",
    stem:"Which hormone exerts many of its effects through the production of IGF-I?",
    options:["Growth hormone","Cortisol","Triiodothyronine","Epinephrine"], answer:0,
    why:"Growth hormone acts on target cells directly and by stimulating other growth factors, primarily IGF-I." },
  { id:"MET-047", m:"m3", area:"Counterregulatory hormones", level:"application",
    stem:"Which catecholamine action increases nutrient delivery to tissues during stress?",
    options:["Norepinephrine raises perfusion pressure through α₁-mediated vasoconstriction","Norepinephrine lowers perfusion pressure through α₁-mediated vasodilation","Epinephrine lowers cardiac output through β₁ stimulation","Epinephrine raises insulin release through β₁ stimulation"], answer:0,
    why:"Norepinephrine’s α₁ effect raises perfusion pressure, and epinephrine’s β₁ effect raises cardiac output, both speeding fuel delivery." },
  { id:"MET-048", m:"m3", area:"Counterregulatory hormones", level:"application",
    stem:"Growth hormone decreases adipose sensitivity to insulin. What is the main metabolic consequence?",
    options:["More fatty acids are released, and muscle oxidizes them instead of glucose","More triglyceride is synthesized, and adipose mass increases","Less glycerol is released, and gluconeogenesis falls","More glucose is taken up by muscle, and blood glucose falls"], answer:0,
    why:"Blunting insulin’s lipogenic signal frees fatty acids. Muscle uses them for fuel, indirectly lowering glucose uptake." },
  { id:"MET-049", m:"m3", area:"Counterregulatory hormones", level:"application",
    stem:"Which statement correctly relates thyroxine (T₄) to triiodothyronine (T₃)?",
    options:["T₄ is produced mainly by the thyroid and converted to active T₃ in peripheral tissues","T₃ is produced mainly by the thyroid and converted to active T₄ in peripheral tissues","T₄ is derived from tryptophan, whereas T₃ is derived from tyrosine","T₃ is synthesized from cholesterol in the liver, whereas T₄ is made in the thyroid"], answer:0,
    why:"Both are iodinated tyrosine derivatives. The thyroid releases mostly T₄, and peripheral tissues convert it to the active hormone T₃." },
  { id:"MET-050", m:"m3", area:"Counterregulatory hormones", level:"integration",
    stem:"Glycerol released by growth hormone–stimulated lipolysis reaches the liver. Which hepatic outcome results?",
    options:["Gluconeogenesis increases, which also supports glycogen synthesis","Ketone body formation from glycerol increases","Urea production from glycerol increases","Lipogenesis from glycerol increases"], answer:0,
    why:"Glycerol is a gluconeogenic substrate. The extra glucose made from it can also be stored as hepatic glycogen, one reason GH does not simply drain liver glycogen." },

  /* Hormone response patterns */
  { id:"MET-051", m:"m3", area:"Hormone response patterns", level:"concept",
    stem:"Which hormone pattern follows a carbohydrate-rich meal?",
    options:["↑ insulin, ↑ incretins, ↓ glucagon","↓ insulin, ↑ incretins, ↑ glucagon","↑ insulin, ↓ incretins, ↑ glucagon","↓ insulin, ↓ incretins, ↓ glucagon"], answer:0,
    why:"Nutrients in the gut release GLP-1 and GIP, which amplify glucose-stimulated insulin secretion, while glucagon is suppressed." },
  { id:"MET-052", m:"m3", area:"Hormone response patterns", level:"application",
    stem:"A person is startled and sprints away from danger. How do catecholamines shift pancreatic hormone release?",
    options:["Insulin falls and glucagon rises","Insulin rises and glucagon falls","Both insulin and glucagon rise","Both insulin and glucagon fall"], answer:0,
    why:"Catecholamines inhibit insulin release and stimulate glucagon release, adding to their direct fuel-mobilizing effects on liver, muscle, and adipose." },
  { id:"MET-053", m:"m3", area:"Hormone response patterns", level:"application",
    stem:"A patient taking high-dose prednisone for several months develops hyperglycemia. Which pair of glucocorticoid effects contributes most?",
    options:["Increased hepatic gluconeogenesis and decreased peripheral glucose uptake","Decreased hepatic gluconeogenesis and increased peripheral glucose uptake","Increased insulin secretion and increased muscle glycogen synthesis","Increased incretin release and decreased glucagon release"], answer:0,
    why:"Glucocorticoids make the liver produce more glucose while other tissues take up less, and they supply gluconeogenic substrate by breaking down peripheral molecules." },
  { id:"MET-054", m:"m3", area:"Hormone response patterns", level:"application",
    stem:"A patient with hyperthyroidism reports weight loss despite increased appetite, heat intolerance, and a rapid heart rate. Which mechanism best accounts for this combination?",
    options:["Excess T₃ raises BMR and potentiates catecholamine signaling","Excess T₃ lowers BMR and blocks catecholamine signaling","Excess T₄ stimulates insulin release and lipogenesis","Excess T₄ is converted to epinephrine in the adrenal medulla"], answer:0,
    why:"Thyroid hormone increases energy expenditure and oxygen consumption (weight loss, heat) and sensitizes tissues to catecholamines (tachycardia)." },
  { id:"MET-055", m:"m3", area:"Hormone response patterns", level:"integration",
    stem:"After major trauma, blood glucose rises sharply. Which combination of hormones would be expected to act together to produce this rise?",
    options:["Epinephrine, glucagon, and cortisol","Insulin, GLP-1, and GIP","Insulin, glucagon, and GLP-2","GLP-2, thyroxine, and insulin"], answer:0,
    why:"Epinephrine mobilizes glycogen and inhibits insulin, glucagon drives hepatic glucose output, and cortisol increases gluconeogenesis while limiting peripheral uptake." },

  /* Incretins and pharmacotherapy */
  { id:"MET-056", m:"m3", area:"Incretins and pharmacotherapy", level:"concept",
    stem:"Which pair of gastrointestinal hormones are classified as incretins?",
    options:["GLP-1 and GIP","GLP-2 and GIP","Glucagon and GLP-2","Insulin and GLP-1"], answer:0,
    why:"Incretins are gut-derived hormones that stimulate insulin secretion. GLP-2 is intestinotrophic instead, and glucagon and insulin are pancreatic." },
  { id:"MET-057", m:"m3", area:"Incretins and pharmacotherapy", level:"application",
    stem:"A patient’s insulin response to oral glucose is larger than to an IV infusion producing the same blood glucose. Which explanation fits?",
    options:["Glucose in the intestine releases GLP-1 and GIP, which amplify insulin secretion","IV glucose bypasses the pancreas, so less insulin is released","Oral glucose is absorbed as fructose, which stimulates insulin more","IV glucose releases GLP-2, which suppresses insulin secretion"], answer:0,
    why:"GLP-1 and GIP are released only when nutrients pass through the gut. That extra signal explains the larger insulin response to oral glucose." },
  { id:"MET-058", m:"m3", area:"Incretins and pharmacotherapy", level:"application",
    stem:"How does tirzepatide differ from semaglutide?",
    options:["Tirzepatide activates both GLP-1 and GIP receptors; semaglutide activates GLP-1 receptors","Tirzepatide is a GLP-2 analog; semaglutide is a dual GLP-1/GIP agonist","Tirzepatide blocks GLP-1 receptors; semaglutide activates them","Tirzepatide activates GIP receptors; semaglutide activates GLP-2 receptors"], answer:0,
    why:"Semaglutide is a GLP-1 receptor agonist. Tirzepatide is a dual GLP-1/GIP agonist. Both are used for type 2 diabetes and obesity." },
  { id:"MET-059", m:"m3", area:"Incretins and pharmacotherapy", level:"application",
    stem:"Teduglutide is used to treat short bowel syndrome. Which property of the hormone it mimics supports this use?",
    options:["GLP-2 promotes intestinal mucosal growth and barrier function","GLP-2 amplifies glucose-stimulated insulin secretion","GLP-2 stimulates hepatic glycogenolysis","GLP-2 inhibits gastric acid secretion and appetite"], answer:0,
    why:"Teduglutide is a GLP-2 analog. By increasing mucosal proliferation, it enlarges the absorptive surface of a shortened bowel." },
  { id:"MET-060", m:"m3", area:"Incretins and pharmacotherapy", level:"integration",
    stem:"GLP-1 and glucagon are both derived from proglucagon, yet they push blood glucose in opposite directions. Which explanation accounts for this?",
    options:["Intestinal processing yields GLP-1 after meals, while pancreatic processing yields glucagon between meals","GLP-1 is produced when blood glucose is low, while glucagon is produced when it is high","GLP-1 is an inactive precursor that the liver converts into glucagon","Glucagon is processed in the intestine, while GLP-1 is processed in the pancreas"], answer:0,
    why:"The same precursor is cleaved differently by tissue. The gut releases GLP-1 in response to nutrients to boost insulin; the pancreas releases glucagon in response to low glucose." },

  /* =================== MODULE 4 =================== */
  /* Tissue fuel profiles */
  { id:"MET-061", m:"m4", area:"Tissue fuel profiles", level:"concept",
    stem:"Which cells lack mitochondria and depend on glycolysis to lactate for ATP?",
    options:["Red blood cells","Neurons","Cardiac myocytes","Kidney cortex cells"], answer:0,
    why:"Mature red blood cells have no mitochondria, so they cannot run the citric acid cycle, β-oxidation, or oxidative phosphorylation." },
  { id:"MET-062", m:"m4", area:"Tissue fuel profiles", level:"application",
    stem:"During a 5-day fast, ketone bodies made by one organ fuel the brain and skeletal muscle. Which organ exports them while leaving them unused as its own fuel?",
    options:["Liver","Kidney cortex","Adipose tissue","Skeletal muscle"], answer:0,
    why:"The liver is the major site of ketone body formation and can use essentially every major fuel except ketone bodies." },
  { id:"MET-063", m:"m4", area:"Tissue fuel profiles", level:"concept",
    stem:"Under resting, well-fed conditions, which fuel supplies most of the heart’s energy?",
    options:["Fatty acids","Glucose","Lactate","Ketone bodies"], answer:0,
    why:"Fatty acids provide roughly 60–70% of cardiac fuel metabolism; lactate and glucose supply much of the rest." },
  { id:"MET-064", m:"m4", area:"Tissue fuel profiles", level:"application",
    stem:"The brain has negligible β-oxidation activity. Which fuel pattern follows during prolonged starvation?",
    options:["Glucose plus a large share of ketone bodies","Fatty acids plus a large share of ketone bodies","Glucose plus a large share of fatty acids","Amino acids plus a large share of glucose"], answer:0,
    why:"Because the brain cannot meaningfully oxidize fatty acids, the liver converts them into ketone bodies the brain can use, cutting its glucose requirement." },
  { id:"MET-065", m:"m4", area:"Tissue fuel profiles", level:"integration",
    stem:"A drug inhibits hepatic ketogenesis in a patient who has fasted for 7 days. Which tissue’s energy supply is most immediately compromised?",
    options:["Brain","Red blood cells","Liver","Adipose tissue"], answer:0,
    why:"By day 7 ketone bodies supply a large share of brain energy, and the brain cannot switch to fatty acids. Red blood cells and liver do not use ketone bodies at baseline, and adipose uses little." },

  /* Liver functions */
  { id:"MET-066", m:"m4", area:"Liver functions", level:"concept",
    stem:"Which hepatic enzyme family is most notable for inactivating xenobiotics?",
    options:["Cytochrome P450 enzymes","Aminotransferases","Creatine kinases","Lipoprotein lipases"], answer:0,
    why:"Xenobiotics are chemicals not produced by the body. Cytochrome P450 enzymes are the liver’s best-known system for metabolizing them." },
  { id:"MET-067", m:"m4", area:"Liver functions", level:"application",
    stem:"Long-chain fatty acids from a meal reach systemic circulation without first passing through the liver. Which route allows this?",
    options:["Lymphatic system, packaged in chylomicrons","Hepatic portal vein, bound to albumin","Hepatic artery, packaged in VLDL","Bile ducts, packaged in micelles"], answer:0,
    why:"Long-chain fatty acids are re-esterified into chylomicron triglyceride and enter the lymph, bypassing the portal circulation." },
  { id:"MET-068", m:"m4", area:"Liver functions", level:"application",
    stem:"A patient with cirrhosis develops confusion and elevated blood ammonia. Which hepatic function is impaired?",
    options:["Urea cycle","Ketone body synthesis","Glycogen synthesis","Cytochrome P450 oxidation"], answer:0,
    why:"The liver is the primary site of amino acid metabolism and disposes of excess nitrogen as urea. Loss of urea cycle capacity lets ammonia accumulate." },
  { id:"MET-069", m:"m4", area:"Liver functions", level:"application",
    stem:"Which precursors does the liver use to synthesize heme?",
    options:["Glycine and succinyl-CoA","Glutamate, cysteine, and glycine","Arginine, glycine, and SAM","Aspartate, glutamine, and CO₂"], answer:0,
    why:"Heme is built from glycine and succinyl-CoA. Glutathione uses glutamate, cysteine, and glycine; creatine uses arginine, glycine, and SAM; pyrimidines use aspartate, glutamine, and CO₂." },
  { id:"MET-070", m:"m4", area:"Liver functions", level:"integration",
    stem:"A child with hereditary fructose intolerance develops hypoglycemia and liver injury after drinking fruit juice. Which feature of the liver explains why the liver bears the brunt of this disorder?",
    options:["The liver is the primary site of fructose metabolism and also maintains blood glucose","The liver stores fructose as glycogen that cannot be mobilized","The liver lacks the enzymes needed to absorb fructose from portal blood","The liver converts fructose to ketone bodies that damage hepatocytes"], answer:0,
    why:"Dietary fructose goes to the liver first. When aldolase B is deficient, fructose-1-phosphate accumulates there, trapping phosphate and impairing glycogenolysis and gluconeogenesis." },

  /* Muscle energy systems */
  { id:"MET-071", m:"m4", area:"Muscle energy systems", level:"concept",
    stem:"Stored ATP in muscle can sustain maximal exercise for approximately how long?",
    options:["1.2 seconds","9 seconds","90 seconds","10 minutes"], answer:0,
    why:"Stored ATP lasts about 1.2 seconds; phosphocreatine extends maximal effort to roughly 9 seconds." },
  { id:"MET-072", m:"m4", area:"Muscle energy systems", level:"application",
    stem:"Which reaction regenerates most ATP during the first few seconds of a maximal sprint?",
    options:["Phosphocreatine + ADP → creatine + ATP","Glucose + 2 ADP → 2 lactate + 2 ATP","Palmitate oxidation through the citric acid cycle","Acetoacetate oxidation through the citric acid cycle"], answer:0,
    why:"Creatine kinase transfers phosphate from phosphocreatine to ADP almost instantly, buffering ATP while slower pathways accelerate." },
  { id:"MET-073", m:"m4", area:"Muscle energy systems", level:"application",
    stem:"Why does lactate production rise sharply as exercise intensity increases?",
    options:["Glycolysis outpaces oxidative phosphorylation, so pyruvate is reduced to lactate","Fatty acid oxidation accelerates and releases lactate","Phosphocreatine is converted to lactate when ATP is depleted","Rising oxygen delivery converts pyruvate to lactate"], answer:0,
    why:"High-intensity exercise consumes O₂ and ATP faster; glycolysis runs quicker than oxidative phosphorylation, and pyruvate is reduced to lactate to regenerate NAD⁺." },
  { id:"MET-074", m:"m4", area:"Muscle energy systems", level:"application",
    stem:"A cyclist shifts from a 10-second sprint to a 3-hour endurance ride. How does muscle fuel use change?",
    options:["From phosphocreatine and glycogen toward increasing fatty acid oxidation","From fatty acids toward increasing phosphocreatine use","From glycogen toward increasing muscle protein oxidation","From ketone bodies toward increasing stored ATP use"], answer:0,
    why:"Brief maximal efforts rely on phosphocreatine and glycolysis; the longer the exercise, the more muscle relies on blood-borne fatty acids." },
  { id:"MET-075", m:"m4", area:"Muscle energy systems", level:"integration",
    stem:"A patient with muscle glycogen phosphorylase deficiency (McArdle disease) cramps during brief intense exercise but tolerates gentle prolonged walking better. Which explanation fits?",
    options:["Intense work depends on muscle glycogen for glycolysis, while gentle work can use blood-borne fuels","Intense work depends on fatty acids, while gentle work depends on muscle glycogen","Intense work depends on hepatic ketone bodies, while gentle work depends on phosphocreatine","Intense work depends on muscle protein, while gentle work depends on stored ATP"], answer:0,
    why:"Without glycogen phosphorylase, muscle cannot release glucose-1-phosphate for fast glycolysis. Low-intensity, longer activity leans on fatty acids and blood glucose delivered by the circulation." },

  /* Creatine and creatinine */
  { id:"MET-076", m:"m4", area:"Creatine and creatinine", level:"concept",
    stem:"Creatine is synthesized from which amino acids?",
    options:["Glycine, arginine, and methionine","Glycine, glutamate, and cysteine","Aspartate, glutamine, and serine","Lysine, methionine, and tyrosine"], answer:0,
    why:"Synthesis begins in the kidney (glycine + arginine) and finishes in the liver, where SAM derived from methionine donates a methyl group." },
  { id:"MET-077", m:"m4", area:"Creatine and creatinine", level:"application",
    stem:"In resting muscle, which enzyme uses ATP to convert creatine into phosphocreatine?",
    options:["Creatine kinase","Pyruvate kinase","Adenylate kinase","Glycogen phosphorylase"], answer:0,
    why:"Creatine kinase (creatine phosphokinase) runs in both directions: it charges phosphocreatine at rest and regenerates ATP from it during sudden demand." },
  { id:"MET-078", m:"m4", area:"Creatine and creatinine", level:"application",
    stem:"Which property makes serum creatinine useful for estimating glomerular filtration rate?",
    options:["It forms spontaneously at a relatively constant rate and is excreted by the kidney","It is made by the kidney in proportion to filtration pressure","It is produced by the liver in proportion to dietary protein intake","It is secreted by muscle in response to rising blood urea"], answer:0,
    why:"Creatine cyclizes nonenzymatically into creatinine at a steady rate for a given person. With a steady input, blood levels mainly reflect renal clearance." },
  { id:"MET-079", m:"m4", area:"Creatine and creatinine", level:"application",
    stem:"A frail 88-year-old with very low muscle mass has a serum creatinine in the low-normal range. How could a creatinine-based GFR estimate mislead drug dosing?",
    options:["It could overestimate kidney function, leading to excessive doses of renally cleared drugs","It could underestimate kidney function, leading to insufficient doses of renally cleared drugs","It could overestimate hepatic function, leading to excessive doses of CYP450 substrates","It could underestimate muscle mass, leading to insufficient creatine supplementation"], answer:0,
    why:"Low muscle mass means less creatinine is formed, so serum creatinine looks reassuring even when GFR is reduced. Pharmacists watch for this when dosing renally eliminated drugs." },
  { id:"MET-080", m:"m4", area:"Creatine and creatinine", level:"integration",
    stem:"A muscular athlete taking creatine supplements has a mildly elevated serum creatinine with normal kidney function on other testing. Which explanation best fits?",
    options:["A larger creatine pool produces more creatinine by spontaneous cyclization","Creatine supplements inhibit renal creatinine filtration","Creatine supplements are converted to creatinine by hepatic enzymes","Exercise converts phosphocreatine to urea, raising creatinine"], answer:0,
    why:"More muscle mass and a larger body creatine pool increase the steady rate of nonenzymatic creatinine formation, raising serum creatinine without any drop in filtration." }
];
