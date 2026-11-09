import json
import os

os.makedirs('src/data/questions', exist_ok=True)

def write_ts(filename, var_name, questions):
    filepath = os.path.join('src/data/questions', filename)
    ts = "import { Question } from '../../types/quiz';\n\n"
    ts += f"export const {var_name}: Question[] = "
    ts += json.dumps(questions, indent=2, ensure_ascii=False)
    ts += ";\n"
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(ts)
    print(f"Generated {len(questions)} questions in {filepath}")

def q(qid, subject, curr, grade, strand, topic, question, options, correct_idx, exp, hint, diff='Sedang'):
    phase = f"Primary {grade}"
    return {
        "id": qid,
        "subject": subject,
        "curriculum": curr,
        "grade": grade,
        "phase": phase,
        "syllabusStrand": strand,
        "topic": topic,
        "question": question,
        "options": options,
        "correctIndex": correct_idx,
        "explanation": exp,
        "hint": hint,
        "difficulty": diff
    }

# =========================================================================
# SINGAPORE MATHEMATICS (Primary 1 to 6)
# =========================================================================
sg_math = []

# Primary 1
sg_math.extend([
    q("sg_mat-p1-01", "sg_math", "singapore", 1, "Numbers & Operations", "Number bonds to 10",
      "[P1 CPA Bar Model] Look at the part-whole number bond: Whole is 10, Part A is 6. What is Part B?",
      ["4", "3", "5", "6"], 0,
      "10 - 6 = 4. Number bonds: 6 and 4 make 10.", "Count up from 6 to 10: 7, 8, 9, 10.", "Mudah"),
    q("sg_mat-p1-02", "sg_math", "singapore", 1, "Numbers & Operations", "Addition within 20",
      "[P1 Concrete-Pictorial] Siti has 8 stickers. Marcus gives her 7 more stickers. How many stickers does Siti have in total?",
      ["15 stickers", "14 stickers", "16 stickers", "13 stickers"], 0,
      "8 + 7 = 15 stickers (make 10: 8 + 2 + 5 = 15).", "Make 10 first: 8 + 2 = 10, then add remaining 5.", "Mudah"),
    q("sg_mat-p1-03", "sg_math", "singapore", 1, "Measurement & Geometry", "Comparing lengths",
      "[P1] Strip A is 7 paperclips long. Strip B is 11 paperclips long. How much longer is Strip B than Strip A?",
      ["4 paperclips longer", "3 paperclips longer", "5 paperclips longer", "18 paperclips"], 0,
      "11 - 7 = 4 paperclips longer.", "Subtract length of A from length of B: 11 - 7.", "Mudah"),
    q("sg_mat-p1-04", "sg_math", "singapore", 1, "Measurement & Geometry", "2D Basic shapes",
      "[P1] Which shape has NO straight edges and NO corners?",
      ["Circle", "Square", "Rectangle", "Triangle"], 0,
      "A circle is formed by a continuous curved boundary with zero vertices and zero straight sides.", "Smooth round curved line.", "Mudah"),
    q("sg_mat-p1-05", "sg_math", "singapore", 1, "Statistics", "Picture graphs with 1-to-1 scale",
      "[P1 Picture Graph] In a fruit graph, each apple symbol represents 1 apple. If Ken's row has 6 apple symbols, how many apples does Ken have?",
      ["6 apples", "1 apple", "12 apples", "3 apples"], 0,
      "Each symbol = 1 apple, so 6 symbols = 6 apples.", "1-to-1 scale means each icon counts as 1.", "Mudah"),
    q("sg_mat-p1-06", "sg_math", "singapore", 1, "Mathematical Processes & Problem Solving", "Heuristics: Act it out / Draw a diagram",
      "[P1 Heuristics] 4 birds were sitting on a tree branch. 2 flew away, then 3 new birds joined. How many birds are now on the branch?",
      ["5 birds", "4 birds", "6 birds", "3 birds"], 0,
      "4 - 2 = 2 birds left; 2 + 3 = 5 birds.", "Follow step by step: 4 minus 2, then add 3.", "Mudah"),
    q("sg_mat-p1-07", "sg_math", "singapore", 1, "Numbers & Operations", "Ordinal numbers",
      "[P1] In a running race queue: Ali is 1st, Bala is 2nd, Charlie is 3rd, and Dan is next. What position is Dan?",
      ["4th (Fourth)", "5th", "3rd", "2nd"], 0,
      "Following 3rd (third) in ordinal sequence is 4th (fourth).", "The number that follows 3rd.", "Mudah")
])

# Primary 2
sg_math.extend([
    q("sg_mat-p2-01", "sg_math", "singapore", 2, "Numbers & Operations", "Multiplication tables of 2, 3, 4, 5, 10",
      "[P2] 6 plates each hold 4 curry puffs. How many curry puffs are there in all?",
      ["24 curry puffs", "20 curry puffs", "28 curry puffs", "10 curry puffs"], 0,
      "6 groups of 4 = 6 × 4 = 24 curry puffs.", "Multiply 6 by 4.", "Mudah"),
    q("sg_mat-p2-02", "sg_math", "singapore", 2, "Numbers & Operations", "Fractions of a whole",
      "[P2 Fractions] A pizza is divided equally into 8 slices. Weijie eats 3 slices. What fraction of the pizza is LEFT?",
      ["5/8", "3/8", "1/8", "4/8"], 0,
      "Total is 8/8. 8/8 - 3/8 = 5/8 left.", "Total parts (8) minus eaten parts (3) = 5 remaining parts.", "Sedang"),
    q("sg_mat-p2-03", "sg_math", "singapore", 2, "Measurement & Geometry", "Mass (Kilograms and grams)",
      "[P2 Mass] A bag of rice has a mass of 5 kg. A bag of flour has a mass of 2 kg. What is their combined total mass?",
      ["7 kg", "3 kg", "10 kg", "2.5 kg"], 0,
      "5 kg + 2 kg = 7 kg.", "Add 5 + 2.", "Mudah"),
    q("sg_mat-p2-04", "sg_math", "singapore", 2, "Measurement & Geometry", "Money (Dollars and cents)",
      "[P2 Money] Mei Mei has $10. She buys a pencil case for $6.40. How much change does she receive?",
      ["$3.60", "$4.60", "$3.40", "$4.40"], 0,
      "$10.00 - $6.40 = $3.60.", "Count on from $6.40: add 60 cents to make $7, then $3 to make $10.", "Sedang"),
    q("sg_mat-p2-05", "sg_math", "singapore", 2, "Statistics", "Picture graphs with scales",
      "[P2 Graph] On a pictogram, each smiley face represents 5 books. If the 'Fantasy' bar has 4 smiley faces, how many books does it represent?",
      ["20 books", "9 books", "15 books", "25 books"], 0,
      "4 symbols × 5 books each = 20 books.", "Multiply 4 by 5.", "Mudah"),
    q("sg_mat-p2-06", "sg_math", "singapore", 2, "Mathematical Processes & Problem Solving", "Bar Model: Comparison model",
      "[P2 Comparison Bar Model] Box A has 35 marbles. Box B has 18 more marbles than Box A. How many marbles are in Box B?",
      ["53 marbles", "43 marbles", "17 marbles", "50 marbles"], 0,
      "35 + 18 = 53 marbles in Box B.", "Add the difference (18) to Box A (35).", "Sedang"),
    q("sg_mat-p2-07", "sg_math", "singapore", 2, "Measurement & Geometry", "Time to 5 minutes",
      "[P2 Time] A clock shows the hour hand just past 8 and the minute hand pointing at 7. What time is it?",
      ["8:35", "8:07", "7:40", "9:35"], 0,
      "Each number on the clock face represents 5 minutes: 7 × 5 = 35 minutes past 8 (8:35).", "Multiply 7 by 5 minutes.", "Mudah")
])

# Primary 3
sg_math.extend([
    q("sg_mat-p3-01", "sg_math", "singapore", 3, "Numbers & Operations", "Mental addition and subtraction within 10,000",
      "[P3] Find the value of 4,500 - 1,280:",
      ["3,220", "3,320", "3,280", "3,180"], 0,
      "4,500 - 1,200 = 3,300; 3,300 - 80 = 3,220.", "Decompose: subtract 1,200 first, then 80.", "Sedang"),
    q("sg_mat-p3-02", "sg_math", "singapore", 3, "Numbers & Operations", "Equivalent fractions & Simplest form",
      "[P3 Fractions] Express 6/9 in its simplest form:",
      ["2/3", "1/3", "3/4", "3/5"], 0,
      "Divide numerator and denominator by highest common factor 3: (6÷3)/(9÷3) = 2/3.", "Divide top and bottom by 3.", "Mudah"),
    q("sg_mat-p3-03", "sg_math", "singapore", 3, "Measurement & Geometry", "Area and Perimeter of rectangles",
      "[P3 Area] A square garden has a perimeter of 36 m. What is the AREA of the garden?",
      ["81 m²", "72 m²", "36 m²", "144 m²"], 0,
      "Perimeter of square = 4 × side = 36 m, so side = 9 m. Area = 9 × 9 = 81 m².", "Find side length first (36÷4=9), then multiply side by side.", "Sedang"),
    q("sg_mat-p3-04", "sg_math", "singapore", 3, "Measurement & Geometry", "Angles & Right angles",
      "[P3 Angles] An angle is greater than a right angle (90°) but less than a straight line (180°). What type of angle is it?",
      ["Obtuse angle", "Acute angle", "Right angle", "Reflex angle"], 0,
      "An obtuse angle measures between 90° and 180°.", "Between 90° and 180° is obtuse.", "Mudah"),
    q("sg_mat-p3-05", "sg_math", "singapore", 3, "Statistics", "Bar graphs with scales",
      "[P3 Bar Graph] If a bar graph scale has gridlines at 0, 10, 20, 30... where would a frequency of 25 be drawn?",
      ["Exactly halfway between 20 and 30", "At line 20", "At line 30", "Below line 10"], 0,
      "25 is the exact arithmetic midpoint between 20 and 30.", "Halfway between 20 and 30.", "Mudah"),
    q("sg_mat-p3-06", "sg_math", "singapore", 3, "Mathematical Processes & Problem Solving", "Heuristics: Before-and-After model",
      "[P3 Singapore Bar Model] Ryan and Ethan had 120 stickers altogether. Ryan gave 20 stickers to Ethan. How many stickers do they have altogether NOW?",
      ["120 stickers", "140 stickers", "100 stickers", "80 stickers"], 0,
      "Internal transfer does not change the total sum. Total remains 120 stickers (Total Unchanged Concept).", "Internal transfer keeps total constant.", "Sedang"),
    q("sg_mat-p3-07", "sg_math", "singapore", 3, "Measurement & Geometry", "Volume and Capacity (Liters and Milliliters)",
      "[P3 Volume] A bottle contains 1 ℓ 450 mℓ of apple juice. How many milliliters (mℓ) is this?",
      ["1,450 mℓ", "145 mℓ", "1,045 mℓ", "14,500 mℓ"], 0,
      "1 ℓ = 1,000 mℓ; 1,000 + 450 = 1,450 mℓ.", "1 liter equals 1,000 milliliters.", "Mudah")
])

# Primary 4
sg_math.extend([
    q("sg_mat-p4-01", "sg_math", "singapore", 4, "Numbers & Operations", "Factors and Multiples",
      "[P4] What is the GREATEST COMMON FACTOR (GCF / HCF) of 24 and 36?",
      ["12", "6", "4", "72"], 0,
      "Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36. The largest shared factor is 12.", "Find the largest number that divides both 24 and 36 evenly.", "Sedang"),
    q("sg_mat-p4-02", "sg_math", "singapore", 4, "Numbers & Operations", "Decimals up to 3 decimal places",
      "[P4 Decimals] Round 8.476 to 2 decimal places (nearest hundredth):",
      ["8.48", "8.47", "8.50", "8.40"], 0,
      "Look at the 3rd decimal place (6). Since 6 ≥ 5, round hundredths up from 7 to 8: 8.48.", "Check the thousandths digit (6).", "Sedang"),
    q("sg_mat-p4-03", "sg_math", "singapore", 4, "Measurement & Geometry", "Symmetry & 8-point compass",
      "[P4 Compass] Facing North, John makes a 3/4 turn (270°) clockwise. Which direction is he facing now?",
      ["West", "East", "South", "North-East"], 0,
      "3/4 turn clockwise = 270°. North (0°) ➔ East (90°) ➔ South (180°) ➔ West (270°).", "Each quarter turn is 90° clockwise.", "Sedang"),
    q("sg_mat-p4-04", "sg_math", "singapore", 4, "Measurement & Geometry", "Tables and Line graphs",
      "[P4 Line Graph] A seedling was 2 cm tall on Day 1 and 14 cm tall on Day 7. What was the average growth per day?",
      ["2 cm per day", "3 cm per day", "1.5 cm per day", "12 cm per day"], 0,
      "Total growth = 14 - 2 = 12 cm across 6 days (Day 1 to 7). 12 ÷ 6 = 2 cm/day.", "Total increase divided by number of days.", "Sedang"),
    q("sg_mat-p4-05", "sg_math", "singapore", 4, "Mathematical Processes & Problem Solving", "Heuristics: Working Backwards",
      "[P4 Problem Solving] A number is multiplied by 3, then 15 is added to the product. The final result is 45. What was the original number?",
      ["10", "12", "15", "8"], 0,
      "Work backwards: 45 - 15 = 30; 30 ÷ 3 = 10.", "Reverse the operations: subtract 15 then divide by 3.", "Sedang"),
    q("sg_mat-p4-06", "sg_math", "singapore", 4, "Numbers & Operations", "Fraction of a set",
      "[P4 Fractions] Find 3/5 of 45 books:",
      ["27 books", "9 books", "15 books", "30 books"], 0,
      "45 ÷ 5 = 9 (one fifth). 9 × 3 = 27 books.", "Divide by denominator, multiply by numerator.", "Sedang")
])

# Primary 5
sg_math.extend([
    q("sg_mat-p5-01", "sg_math", "singapore", 5, "Numbers & Operations", "Percentages (Discount & GST)",
      "[P5 Singapore Money] A school bag costs $80. There is a 9% GST (Goods & Services Tax). What is the total price including GST?",
      ["$87.20", "$89.00", "$88.00", "$86.40"], 0,
      "GST = 9% of $80 = 0.09 × 80 = $7.20. Total = $80 + $7.20 = $87.20.", "Calculate 9% of 80 then add to 80.", "Sedang"),
    q("sg_mat-p5-02", "sg_math", "singapore", 5, "Numbers & Operations", "Ratio and Proportion",
      "[P5 Ratio] The ratio of red pens to blue pens is 3 : 5. If there are 40 pens in total, how many MORE blue pens than red pens are there?",
      ["10 more blue pens", "8 more blue pens", "15 more blue pens", "25 more blue pens"], 0,
      "Total units = 3 + 5 = 8 units. 8 units = 40 pens, so 1 unit = 5 pens. Difference = 5 - 3 = 2 units. 2 × 5 = 10 more pens.", "Find difference in units (5 - 3 = 2) and multiply by unit value.", "Sedang"),
    q("sg_mat-p5-03", "sg_math", "singapore", 5, "Measurement & Geometry", "Volume of cube and cuboid",
      "[P5 Volume] A rectangular tank measuring 20 cm by 15 cm by 10 cm is half-filled with water. What is the volume of water?",
      ["1,500 cm³ (or 1.5 ℓ)", "3,000 cm³", "1,000 cm³", "750 cm³"], 0,
      "Total capacity = 20 × 15 × 10 = 3,000 cm³. Half filled = 3,000 ÷ 2 = 1,500 cm³.", "Calculate full volume then divide by 2.", "Sedang"),
    q("sg_mat-p5-04", "sg_math", "singapore", 5, "Measurement & Geometry", "Properties of triangles and four-sided figures",
      "[P5 Geometry] In an isosceles triangle, the angle between the two equal sides is 40°. What is the measure of each base angle?",
      ["70°", "60°", "80°", "50°"], 0,
      "Sum of angles in triangle = 180°. 180° - 40° = 140°. Since base angles are equal: 140° ÷ 2 = 70°.", "Subtract vertex angle from 180° and divide remainder by 2.", "Sedang"),
    q("sg_mat-p5-05", "sg_math", "singapore", 5, "Statistics", "Average of a data set",
      "[P5 Average] Four students scored 75, 80, 85, and 100 on a mathematics quiz. What was their average score?",
      ["85", "80", "88", "90"], 0,
      "Total = 75 + 80 + 85 + 100 = 340. Average = 340 ÷ 4 = 85.", "Add all 4 numbers and divide by 4.", "Sedang"),
    q("sg_mat-p5-06", "sg_math", "singapore", 5, "Mathematical Processes & Problem Solving", "Heuristics: Constant difference",
      "[P5 Heuristics] Mrs. Tan is 36 years old and her daughter is 8 years old. In how many years will Mrs. Tan be 3 times as old as her daughter?",
      ["In 6 years", "In 4 years", "In 8 years", "In 10 years"], 0,
      "Age difference remains CONSTANT: 36 - 8 = 28 years. When mother is 3 units and daughter is 1 unit, difference is 2 units = 28 years, so 1 unit = 14 years. Daughter is 14 when mother is 42. 14 - 8 = 6 years later.", "Use Constant Difference concept: age difference never changes.", "Tantangan")
])

# Primary 6
sg_math.extend([
    q("sg_mat-p6-01", "sg_math", "singapore", 6, "Numbers & Operations", "Algebraic expressions and substitution",
      "[P6 Algebra] Simplify the algebraic expression: 5y + 12 - 2y + 4:",
      ["3y + 16", "7y + 16", "3y + 8", "10y + 16"], 0,
      "Combine like terms: (5y - 2y) + (12 + 4) = 3y + 16.", "Group the y terms and group the constants.", "Sedang"),
    q("sg_mat-p6-02", "sg_math", "singapore", 6, "Numbers & Operations", "Speed, Distance and Time",
      "[P6 Speed] A car travels a distance of 180 km in 2 hours and 30 minutes (2.5 hours). What is its average speed in km/h?",
      ["72 km/h", "80 km/h", "60 km/h", "90 km/h"], 0,
      "Speed = Distance ÷ Time = 180 km ÷ 2.5 h = 72 km/h.", "Distance divided by time (2.5 hours).", "Sedang"),
    q("sg_mat-p6-03", "sg_math", "singapore", 6, "Measurement & Geometry", "Circles: Area and Circumference",
      "[P6 Circles] What is the area of a circle with radius 7 cm? (Take π = 22/7)",
      ["154 cm²", "44 cm²", "88 cm²", "308 cm²"], 0,
      "Area = π × r² = 22/7 × 7 × 7 = 22 × 7 = 154 cm².", "Formula: π × r × r.", "Sedang"),
    q("sg_mat-p6-04", "sg_math", "singapore", 6, "Measurement & Geometry", "Nets of 3D solids",
      "[P6 3D Solids] Which solid has a net consisting of 1 square in the center and 4 triangles attached to its sides?",
      ["Square-based pyramid", "Triangular prism", "Cube", "Cylinder"], 0,
      "A square base with 4 triangular lateral faces folds into a square pyramid.", "Square base with 4 triangular faces.", "Sedang"),
    q("sg_mat-p6-05", "sg_math", "singapore", 6, "Statistics", "Pie charts & Percentages",
      "[P6 Pie Chart] A pie chart shows student transportation: 50% Bus, 25% Walk, 15% MRT, and the rest by Car. If 200 students were surveyed, how many travel by Car?",
      ["20 students", "10 students", "30 students", "40 students"], 0,
      "Car percentage = 100% - (50% + 25% + 15%) = 10%. 10% of 200 = 20 students.", "Find remaining percentage for car (10%) then calculate 10% of 200.", "Sedang"),
    q("sg_mat-p6-06", "sg_math", "singapore", 6, "Mathematical Processes & Problem Solving", "PSLE Heuristics: Equal Fractions / Unit Model",
      "[P6 PSLE Problem] 2/3 of Elijah's money is equal to 4/5 of Lucas's money. If Elijah has $18 more than Lucas, how much money does Elijah have?",
      ["$108", "$90", "$120", "$72"], 0,
      "Equal numerators: 2/3 = 4/6. So 4/6 of Elijah = 4/5 of Lucas. Elijah has 6 units, Lucas has 5 units. Difference = 1 unit = $18. Elijah = 6 × $18 = $108.", "Equate numerators to make parts comparable.", "Tantangan")
])

write_ts('singaporeMath.ts', 'singaporeMathQuestions', sg_math)

# =========================================================================
# SINGAPORE ENGLISH (Primary 1 to 6)
# =========================================================================
sg_eng = []

for g in range(1, 7):
    prefix = f"[P{g} STELLAR]"
    sg_eng.extend([
        q(f"sg_eng-p{g}-01", "sg_english", "singapore", g, "Reading and Viewing", "Vocabulary in Context",
          f"{prefix} Read the sentence: 'The courageous firefighter dashed into the blazing building without hesitation.' What does 'courageous' mean?",
          ["Brave and fearless", "Tired and sleepy", "Careful and slow", "Angry and shouting"], 0,
          "'Courageous' means possessing bravery and fearlessness in the face of danger.", "Think of someone brave who shows courage.", "Mudah"),
        q(f"sg_eng-p{g}-02", "sg_english", "singapore", g, "Reading and Viewing", "Inference & Deep Comprehension",
          f"{prefix} 'Meiling wiped the sweat from her brow, took a deep breath, and walked onto the brightly lit stage to deliver her speech.' How was Meiling feeling?",
          ["Determined despite feeling nervous", "Bored and sleepy", "Angry and rebellious", "Sad and crying"], 0,
          "Wiping sweat and deep breathing indicate coping with performance nervousness with determination.", "Look at physical cues: wiping sweat, deep breath.", "Sedang"),
        q(f"sg_eng-p{g}-03", "sg_english", "singapore", g, "Writing and Representing", "Sentence Construction & Connectors",
          f"{prefix} Choose the connector that shows CONTRAST: 'Nathan studied tirelessly for weeks, _______ he still felt unprepared for the finals.'",
          ["yet", "because", "so", "therefore"], 0,
          "'Yet' (or 'however') introduces a surprising contrast to the previous clause.", "Connective that shows contrast or unexpected result.", "Sedang"),
        q(f"sg_eng-p{g}-04", "sg_english", "singapore", g, "Grammar and Language", "Subject-Verb Agreement",
          f"{prefix} Choose the correct verb form: 'Neither of the twins _______ interested in taking part in the swimming competition.'",
          ["is", "are", "were", "have"], 0,
          "'Neither' takes a singular verb ('is') in formal standard English.", "'Neither' is grammatically singular.", "Sedang"),
        q(f"sg_eng-p{g}-05", "sg_english", "singapore", g, "Grammar and Language", "Tenses & Conditionals",
          f"{prefix} 'If Mrs. Tan _______ earlier, she would have caught the direct express train to Orchard.'",
          ["had arrived", "arrived", "arrives", "would arrive"], 0,
          "Third conditional: 'If + past perfect (had arrived)... would have + past participle'.", "Past hypothetical conditional uses 'had + past participle'.", "Tantangan"),
        q(f"sg_eng-p{g}-06", "sg_english", "singapore", g, "Listening and Viewing", "Identifying Key Information & Purpose",
          f"{prefix} In a public announcement advising citizens to conserve tap water during dry spells, what is the main communication PURPOSE?",
          ["To urge responsible water consumption habits", "To announce a swimming pool party", "To sell bottled mineral drinks", "To close all schools"], 0,
          "The core purpose is civic persuasion and behavioral change for resource preservation.", "Look for the civic goal of the public message.", "Mudah"),
        q(f"sg_eng-p{g}-07", "sg_english", "singapore", g, "Speaking and Representing", "Expressing Viewpoints with Justification",
          f"{prefix} In classroom discussion, which phrase best introduces an opinion supported by reasoned evidence?",
          ["In my view, we should recycle more because landfill space in Semakau is severely limited.", "You are wrong!", "Recycle right now!", "Whatever, I don't care."], 0,
          "Combines polite opinion framing ('In my view...') with clear rationale ('because...').", "Polite viewpoint backed by a clear reason.", "Mudah")
    ])

write_ts('singaporeEnglish.ts', 'singaporeEnglishQuestions', sg_eng)

# =========================================================================
# SINGAPORE SCIENCE (Primary 1 to 6)
# =========================================================================
sg_sci = []

# P1 & P2 Foundations
sg_sci.extend([
    q("sg_sci-p1-01", "sg_science", "singapore", 1, "Diversity", "Living and non-living things",
      "[P1 Diversity] Which of the following is a NON-LIVING thing?",
      ["A metal bicycle", "A goldfish in an aquarium", "A potted fern", "A baby hamster"], 0,
      "A bicycle does not grow, breathe, reproduce, or need food, so it is non-living.", "Select the object made of metal that cannot grow.", "Mudah"),
    q("sg_sci-p1-02", "sg_science", "singapore", 1, "Inquiry & Exploration", "Observing nature & Senses",
      "[P1] Which sense organ helps us distinguish between sweet sugar and salty crackers?",
      ["Tongue (Sense of taste)", "Eyes", "Ears", "Nose"], 0,
      "Taste buds on the tongue detect sweet, salty, sour, bitter, and umami tastes.", "Sense of taste.", "Mudah"),
    q("sg_sci-p2-01", "sg_science", "singapore", 2, "Living Things & Systems", "Plant parts (root, stem, leaf)",
      "[P2 Systems] What is the primary role of GREEN LEAVES on a plant?",
      ["To absorb sunlight and make food through photosynthesis", "To hold the plant firmly in the soil", "To produce seeds directly", "To absorb water from deep underground"], 0,
      "Leaves contain chlorophyll to trap sunlight and synthesize glucose food.", "Leaves make food for the plant using sunlight.", "Mudah"),
    q("sg_sci-p2-02", "sg_science", "singapore", 2, "Energy & Interactions", "Pushing and pulling forces",
      "[P2 Forces] When you kick a soccer ball across a grass field, what kind of force are you applying?",
      ["A pushing force", "A pulling force", "A magnetic force", "An electrical force"], 0,
      "Kicking pushes the ball away from your foot.", "You push the ball away from you.", "Mudah")
])

# P3 to P6 MOE Singapore Core Strands (Diversity, Cycles, Systems, Energy, Interactions)
for g in [3, 4, 5, 6]:
    prefix = f"[P{g} MOE Science]"
    sg_sci.extend([
        q(f"sg_sci-p{g}-01", "sg_science", "singapore", g, "Diversity", "Classification of Materials & Organisms",
          f"{prefix} Which property makes aluminum the ideal material for manufacturing aircraft wings?",
          ["High strength-to-weight ratio (strong yet lightweight)", "It dissolves in water", "It is transparent like glass", "It burns easily"], 0,
          "Aeronautical design requires materials with high tensile strength that remain lightweight to conserve fuel.", "Strong but very light in weight.", "Sedang"),
        q(f"sg_sci-p{g}-02", "sg_science", "singapore", g, "Cycles", "Life Cycles & Water Cycle",
          f"{prefix} Which organism undergoes a 3-STAGE life cycle (Egg ➔ Nymph ➔ Adult), without a pupal stage?",
          ["Cockroach", "Mosquito", "Butterfly", "Mealworm beetle"], 0,
          "Cockroaches undergo incomplete metamorphosis with 3 stages: egg, nymph, adult.", "Insect that hatches into a nymph looking like a mini adult.", "Sedang"),
        q(f"sg_sci-p{g}-03", "sg_science", "singapore", g, "Systems", "Plant & Human Systems",
          f"{prefix} What is the primary function of the circulatory system in the human body?",
          ["To transport oxygen, nutrients, and waste products throughout the body", "To break down solid food into small soluble molecules", "To send nerve impulses to muscles", "To provide rigid bony framework"], 0,
          "The heart, blood, and blood vessels transport essential gases, nutrients, and metabolic wastes.", "Heart and blood vessels transport oxygen and nutrients.", "Sedang"),
        q(f"sg_sci-p{g}-04", "sg_science", "singapore", g, "Energy", "Forms and Conversions of Energy",
          f"{prefix} A roller coaster car pauses at the very top of a steep track hill before plunging downward. What form of energy is MAXIMUM at the top?",
          ["Gravitational potential energy", "Kinetic energy", "Sound energy", "Thermal energy"], 0,
          "Gravitational potential energy depends on height (Ep = mgh) and is at its peak at the highest elevation.", "Energy stored due to high position.", "Sedang"),
        q(f"sg_sci-p{g}-05", "sg_science", "singapore", g, "Interactions", "Forces & Magnetic Interactions",
          f"{prefix} Why do parachutists fall slowly and safely to the ground after deploying their parachutes?",
          ["The large canopy increases air resistance (drag) opposing downward gravity", "The parachute removes Earth's gravitational pull completely", "Air pushes the parachute into outer space", "The canopy generates magnetic lift"], 0,
          "A broad surface area catches moving air molecules, generating upward aerodynamic drag that balances gravitational force at terminal velocity.", "Air resistance acts against gravity.", "Sedang"),
        q(f"sg_sci-p{g}-06", "sg_science", "singapore", g, "Interactions", "Adaptations & Food Webs",
          f"{prefix} Mangrove trees in Sungei Buloh possess specialized breathing roots (pneumatophores) growing upward out of water. Why?",
          ["To take in atmospheric oxygen because waterlogged muddy soil lacks air", "To catch flying insects", "To hide from monkeys", "To absorb salt from ocean waves"], 0,
          "Waterlogged muddy soils in mangrove swamps are anoxic; breathing roots access atmospheric air.", "Access air in waterlogged mud.", "Sedang")
    ])

write_ts('singaporeScience.ts', 'singaporeScienceQuestions', sg_sci)
print("Singapore files written successfully!")
