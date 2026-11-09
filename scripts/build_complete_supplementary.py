import json
import os

def format_ts(var_name, items):
    out = ["import { Question } from '../../../types/quiz';\n\n", f"export const {var_name}: Question[] = [\n"]
    for q in items:
        out.append("  {\n")
        out.append(f"    id: {json.dumps(q['id'])},\n")
        out.append(f"    subject: {json.dumps(q['subject'])} as any,\n")
        out.append(f"    curriculum: {json.dumps(q['curriculum'])} as any,\n")
        out.append(f"    grade: {q['grade']} as any,\n")
        out.append(f"    phase: {json.dumps(q['phase'])},\n")
        out.append(f"    topic: {json.dumps(q['topic'])},\n")
        out.append(f"    question: {json.dumps(q['question'])},\n")
        out.append(f"    options: {json.dumps(q['options'])},\n")
        out.append(f"    correctIndex: {q['correctIndex']},\n")
        out.append(f"    explanation: {json.dumps(q['explanation'])},\n")
        out.append(f"    hint: {json.dumps(q['hint'])},\n")
        out.append(f"    difficulty: {json.dumps(q['difficulty'])},\n")
        out.append("  },\n")
    out.append("];\n")
    return "".join(out)

# -------------------------------------------------------------
# CAMBRIDGE SUPPLEMENTARY QUESTIONS
# -------------------------------------------------------------
cambridge_items = []

# cam_global_perspectives (85 items)
gp_topics = [
    ("Freshwater Preservation", "Why are underground aquifers considered non-renewable on human timescales if over-pumped?", ["They take centuries to naturally percolate rainwater through rock strata", "They turn into solid ice within an hour", "They evaporate instantly into the upper atmosphere", "They can only hold carbonated mineral water"], 0, "Deep aquifers recharge very slowly through geological strata; extraction exceeding recharge permanently depletes them.", "Think about rainwater filtering through deep rock over hundreds of years.", "Sedang", 4),
    ("Ocean Plastics Breakdown", "How do ultraviolet rays from sunlight affect macro-plastics floating on ocean surfaces?", ["UV radiation degrades plastic polymers into smaller brittle microplastic particles", "UV rays dissolve plastics harmlessly into distilled seawater", "Sunlight turns plastic into nutritious fish food", "Plastics absorb UV rays to generate electrical power"], 0, "Photodegradation breaks large plastic debris into persistent microplastics that contaminate marine food webs.", "Sunlight and waves make brittle plastic crumble into tiny fragments.", "Sedang", 5),
    ("Renewable Wind Turbines", "What environmental advantage do offshore wind turbine farms provide compared to coal plants?", ["They generate high-voltage electricity without consuming water or releasing combustion gases", "They consume five tons of coal per minute", "They require building massive chimneys that emit smoke", "They stop all winds from blowing across oceans"], 0, "Offshore wind turbines harness ocean air currents with zero combustion emissions and no operational water consumption.", "Clean wind turns the turbine blades without burning any fuel.", "Mudah", 2),
    ("Regenerative Organic Agriculture", "How does planting cover crops during winter protect arable farm soils?", ["Cover crop roots anchor topsoil, prevent wind and water erosion, and fix organic nitrogen", "They ensure all soil dries up into loose dust", "They attract insect swarms that consume the farm fields", "They stop earthworms from living underground"], 0, "Cover crops shield bare soil from erosion, suppress weeds, and enrich soil organic matter naturally.", "Roots hold the soil in place when fields are not being harvested.", "Sedang", 3),
    ("Global Literacy Campaigns", "Why does expanding free community libraries accelerate socioeconomic development?", ["Equal access to books fosters lifelong literacy, critical thinking, and career skills", "Libraries require citizens to stop working and studying", "Reading books reduces vocabulary knowledge in children", "Libraries only provide access to antique paper without information"], 0, "Community libraries provide universal access to knowledge, promoting equity and educational attainment.", "Books open doors to learning, ideas, and better future opportunities.", "Mudah", 1),
    ("Urban Wildlife Habitats", "Why are municipalities creating pocket wetlands in suburban stormwater retention basins?", ["They capture urban runoff while providing vital breeding grounds for frogs, dragonflies, and birds", "They create dry concrete squares with no water", "They make it impossible for any plants to grow", "They pump toxic waste into local playgrounds"], 0, "Pocket wetlands cleanse stormwater and restore critical biodiversity pockets within developed urban centers.", "Small natural wetlands give city wildlife a safe home.", "Sedang", 3),
    ("Combating Food Spoilage", "What low-cost zero-electricity technology helps rural farmers store harvested vegetables in arid zones?", ["Zeer evaporative cooling clay pots that lower internal temperatures through water evaporation", "Leaving vegetables uncovered under direct desert noon sun", "Washing fresh produce with boiling chemical solvents", "Wrapping vegetables in dark black heat-absorbing tarps"], 0, "Zeer pots use the evaporation of water between two clay vessels to chill internal produce naturally.", "Evaporation takes away heat, cooling the inside pot like sweat cools skin.", "Sedang", 4),
    ("Lithium-Ion Battery Recycling", "Why is developing closed-loop battery recycling critical for electric vehicle transitions?", ["It recovers scarce battery metals like cobalt, nickel, and lithium, reducing virgin mining damage", "Recycled batteries spontaneously turn into iron rust", "It requires mining ten times more virgin ore across deserts", "Battery recycling releases all electricity into the air"], 0, "Closed-loop hydrometallurgical recycling recovers high-purity battery elements, curbing destructive mining.", "Reusing valuable metals means less destructive mining of the Earth.", "Tantangan", 6),
    ("Preventing Zoonotic Spillover", "How does halting tropical forest fragmentation lower the risk of novel pandemic spillovers?", ["Preserving intact wilderness buffers minimizes dangerous contact between humans and stressed wildlife", "Cutting down forests eliminates all wild animals safely", "Building highways through jungles makes wildlife immune to viruses", "Forests manufacture viruses in laboratory buildings"], 0, "Intact ecosystems maintain natural disease dilution; habitat encroachment forces stressed wildlife into human contact.", "Keeping wild forests whole keeps wild animal viruses away from people.", "Tantangan", 6),
    ("Ethical Supply Chain Auditing", "Why do global clothing brands employ independent third-party labor inspectors in textile factories?", ["To verify that workers receive legal wages, operate in safe buildings, and face zero child exploitation", "To ensure factories lock all fire emergency exits during work shifts", "To decrease worker safety gear and eliminate clean drinking water", "To require factory workers to work without any breaks"], 0, "Independent social audits ensure manufacturing partners uphold fundamental human rights and building safety codes.", "Inspectors check that factory workers are safe, respected, and paid properly.", "Sedang", 4),
]

for idx, (t, q, opts, c, exp, h, diff, g) in enumerate(gp_topics):
    cambridge_items.append({
        "id": f"cam-gp-sup-a{idx+1:03d}",
        "subject": "cam_global_perspectives",
        "curriculum": "cambridge",
        "grade": g,
        "phase": f"Stage {g}",
        "topic": t,
        "question": q,
        "options": opts,
        "correctIndex": c,
        "explanation": exp,
        "hint": h,
        "difficulty": diff
    })

print(f"Loaded {len(cambridge_items)} initial cambridge items.")
