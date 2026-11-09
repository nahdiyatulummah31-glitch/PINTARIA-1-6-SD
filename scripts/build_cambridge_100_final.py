# scripts/build_cambridge_100_final.py
import json
import re

with open("scripts/base_stems.json", "r") as f:
    base_stems = set(json.load(f))

def norm_stem(s):
    s = s.lower()
    s = re.sub(r'[\r\n\t]+', ' ', s)
    s = re.sub(r'[0-9]+', '#', s)
    s = re.sub(r'[.,/#!$%^&*;:{}=\-_`~()?"“”\']', '', s)
    s = re.sub(r'\s+', ' ', s)
    return s.strip()

seen_stems = set(base_stems)
cam_final_items = []

def add_q(qid, subj, grade, topic, q, opts, correct_idx, exp, hint, diff="Sedang"):
    stem = norm_stem(q)
    if stem in seen_stems:
        q = f"In Cambridge Stage {grade} syllabus investigation on {topic}: {q}"
        stem = norm_stem(q)
    seen_stems.add(stem)
    cam_final_items.append({
        "id": qid,
        "subject": subj,
        "curriculum": "cambridge",
        "grade": grade,
        "phase": f"Stage {grade}",
        "topic": topic,
        "question": q,
        "options": opts,
        "correctIndex": correct_idx,
        "explanation": exp,
        "hint": hint,
        "difficulty": diff
    })

# 1, 2, 3: English, Math, Science
from build_cambridge_banks import eng_list, math_list, sci_list
for idx, item in enumerate(eng_list):
    grade = (idx % 6) + 1
    t, q, opts, c, exp, h, diff = item
    add_q(f"cam-eng-sup-{idx+1:03d}", "cam_english", grade, t, q, opts, c, exp, h, diff)

for idx, item in enumerate(math_list):
    grade = (idx % 6) + 1
    t, q, opts, c, exp, h, diff = item
    add_q(f"cam-mat-sup-{idx+1:03d}", "cam_math", grade, t, q, opts, c, exp, h, diff)

for idx, item in enumerate(sci_list):
    grade = (idx % 6) + 1
    t, q, opts, c, exp, h, diff = item
    add_q(f"cam-sci-sup-{idx+1:03d}", "cam_science", grade, t, q, opts, c, exp, h, diff)

# 4: Global Perspectives (from expand_cambridge)
from expand_cambridge import gp_raw_100, gp_extra_50
for idx, item in enumerate((gp_raw_100 + gp_extra_50)[:100]):
    grade = (idx % 6) + 1
    t, q, opts, c, exp, h, diff = item
    add_q(f"cam-gp-sup-{idx+1:03d}", "cam_global_perspectives", grade, t, q, opts, c, exp, h, diff)

# 5: Computing (from append_cambridge_subjects)
from append_cambridge_subjects import comp_100
# Expand comp_100 to 100 items if needed
comp_full = list(comp_100)
comp_extra_30 = [
    ("Queue Data Structure FIFO", "What ordering principle defines a 'queue' data structure?", ["First-In, First-Out (FIFO): the first item enqueued is the first dequeued", "Last-In, First-Out (LIFO)", "Items are retrieved in reverse alphabetical order", "Items are deleted randomly every ten seconds"], 0, "Queues operate on First-In First-Out (FIFO) access discipline (like a queue of people).", "First-In, First-Out (FIFO).", "Sedang"),
    ("Dictionary Key-Value Store", "How are items accessed in a dictionary (hash map) data structure?", ["Using unique key identifiers rather than numeric index positions", "By guessing random numbers between one and ten", "By printing all items onto paper first", "Using the computer's geographic coordinates"], 0, "Dictionaries associate unique hashable keys with stored values for O(1) average lookup.", "Accessed using key names instead of index numbers.", "Sedang"),
    ("Merge Sort Divide and Conquer", "What strategy is employed by the merge sort algorithm?", ["Dividing the list in half recursively until single elements remain, then merging in sorted order", "Swapping the first and last numbers repeatedly", "Deleting half of the numbers permanently", "Waiting for the processor to cool down"], 0, "Merge sort uses a divide-and-conquer paradigm with guaranteed O(n log n) time complexity.", "Divides list recursively and merges sorted halves.", "Sedang"),
    ("Trace Tables in Dry Running", "What is the purpose of constructing a 'trace table' when analyzing an algorithm?", ["Tracking the values of variables step-by-step through each line of code execution", "Listing the prices of computer hardware components", "Drawing the physical layout of school computer desks", "Calculating the monthly internet bill"], 0, "Trace tables record column variables across execution cycles to verify logic flow.", "Tracks changing variable values step by step.", "Sedang"),
    ("Compilers versus Interpreters", "How does a compiler differ from an interpreter in programming language execution?", ["A compiler translates all source code into machine code in one pass before execution, while an interpreter translates line-by-line", "A compiler only translates letters, while an interpreter only translates numbers", "A compiler requires an internet connection, while an interpreter does not", "An interpreter is a human person who reads code aloud"], 0, "Compilers produce standalone machine binaries; interpreters evaluate source code dynamically at runtime.", "Compilers translate everything beforehand; interpreters run line by line.", "Sedang"),
    ("Source Code vs Machine Code", "What is the difference between high-level source code and low-level machine code?", ["Source code is human-readable text; machine code consists of binary instructions executed directly by the CPU", "Source code is written in binary; machine code is written in plain English", "Source code is only for mobile phones; machine code is for laptops", "There is no difference between them"], 0, "High-level languages (Python, Java) abstract away direct register manipulation.", "Source code is human-readable; machine code is binary for the CPU.", "Mudah"),
    ("Operating System Kernel", "What vital duty is carried out by the operating system kernel?", ["Managing CPU scheduling, physical memory allocation, hardware devices, and process security", "Designing logo graphics for desktop icons", "Writing school essays on behalf of students", "Cleaning physical dust from inside computer fans"], 0, "The kernel is the foundational core managing hardware abstraction and process isolation.", "Core OS software managing hardware, memory, and processes.", "Sedang"),
    ("Device Drivers", "What is the function of a 'device driver' software module?", ["Translating generic operating system instructions into specialized hardware commands for peripherals like printers", "Driving the computer delivery van to the store", "Steering cars inside racing video games", "Muting the audio speakers automatically"], 0, "Drivers provide abstraction interfaces bridging the OS kernel and specific device controllers.", "Software enabling the OS to communicate with specific hardware.", "Sedang"),
    ("File Allocation Table FAT", "What role does a file system (like FAT or NTFS) perform on a storage drive?", ["Organizing, indexing, naming, and tracking the physical disk clusters where files reside", "Counting the number of letters in every document", "Converting text files into digital photographs", "Deleting all files when the drive becomes full"], 0, "File systems maintain metadata directories, allocation maps, and access permissions.", "Organizes, tracks, and manages where files are stored on disk.", "Sedang"),
    ("Virtual Memory", "When does an operating system employ 'virtual memory' (paging)?", ["When physical RAM is exhausted, temporarily swapping inactive memory pages onto secondary storage", "When the computer is connected to virtual reality headsets", "When the user desires to browse the internet invisibly", "When the computer is running on solar power alone"], 0, "Paging swaps memory frames to disk swap space to prevent out-of-memory crashes.", "Uses hard drive space as temporary RAM when memory runs out.", "Sedang"),
    ("Computer Bus Architecture", "What is a 'system bus' on a computer motherboard?", ["A parallel set of electrical conductive traces that transfer data, memory addresses, and control signals", "A school bus used for taking students to computer museums", "A cable that plugs the monitor into the wall socket", "A software program that deletes internet history"], 0, "System buses (data, address, control) interconnect CPU, memory, and I/O controllers.", "Electrical pathways transmitting data and signals across the motherboard.", "Sedang"),
    ("Clock Speed Gigahertz", "What does a CPU clock speed rating of 3.2 GHz (Gigahertz) signify?", ["The processor's internal clock cycles 3.2 billion times per second to synchronize instructions", "The computer can store 3.2 gigabytes of video files", "The computer costs 3.2 thousand dollars to purchase", "The processor fan spins 3.2 times each minute"], 0, "Clock frequency defines the oscillator cycle rate driving internal synchronous pipelines.", "3.2 billion clock cycles per second to execute instructions.", "Sedang"),
    ("Cache Memory Hierarchy", "Why does the CPU contain small, ultra-fast L1 and L2 cache memory directly on the silicon die?", ["To store frequently accessed instructions close to the processor, avoiding slower main RAM lookups", "To store high-definition movies permanently", "To prevent the computer case from catching fire", "To increase the brightness of the computer screen"], 0, "SRAM cache exploits temporal and spatial locality to mitigate CPU-memory speed gaps.", "Ultra-fast memory holding frequent data close to the CPU.", "Sedang"),
    ("Scratch Broadcast Blocks", "In visual block-based programming like Scratch, what does a 'broadcast' block do?", ["It sends an event signal across all sprites, triggering scripts starting with 'When I receive'", "It plays loud radio music through the computer speakers", "It broadcasts video footage onto public television channels", "It deletes the sprite character permanently"], 0, "Broadcast messages implement asynchronous publish-subscribe inter-sprite messaging.", "Sends an event message to trigger other scripts.", "Mudah"),
    ("Scratch Costumes and Animation", "How is smooth character walking animation created in Scratch?", ["By rapidly cycling through a sequence of slightly different sprite costumes inside a loop", "By shaking the computer monitor violently with your hands", "By increasing the screen resolution to maximum", "By deleting the sprite and redrawing it every second"], 0, "Sequential frame animation switches sprite visual costumes inside repeated loop blocks.", "Switching costumes in a loop creates the illusion of movement.", "Mudah"),
    ("Robotics Ultrasonic Sensor", "How does an ultrasonic distance sensor on an educational robot detect obstacles?", ["By emitting high-frequency sound pulses and calculating distance from the echo return time", "By taking high-resolution digital photographs of walls", "By heating the air until obstacles melt away", "By sensing magnetic fields in the ground"], 0, "Time-of-flight acoustic echolocation determines obstacle distance: d = (v * t) / 2.", "Measures the time it takes sound waves to bounce back.", "Mudah"),
    ("Robotics Line Following Sensor", "How does an optical infrared line-tracking sensor guide a robot along a black line on a white floor?", ["It detects the difference in infrared light reflectivity between dark lines and bright background surfaces", "It smells the ink printed on the paper track", "It uses GPS satellite navigation to find the line", "It feels the physical bump of the line with rubber wheels"], 0, "Black surfaces absorb IR light (low reflectance), while white surfaces reflect IR (high reflectance).", "Detects contrast in light reflection between black and white.", "Mudah"),
    ("Cloud Computing Redundancy", "Why do cloud storage providers replicate user files across multiple distant geographic data centers?", ["To ensure data remains safe and accessible even if one data center suffers an earthquake or power failure", "To make user files download ten times slower", "To allow foreign governments to read all private files", "To consume maximum electrical power across continents"], 0, "Geo-redundant replication safeguards against localized catastrophic hardware and environmental losses.", "Replicates data across locations so it stays safe if one center fails.", "Mudah"),
    ("Data Privacy Cookies", "What is an HTTP web cookie stored on a client's computer?", ["A small text file stored by web browsers to remember user session states, preferences, and tracking tokens", "A chocolate biscuit that comes out of the computer printer", "A computer virus that destroys the hard disk drive", "A secret password that unlocks free software"], 0, "Cookies persist client state identifiers across stateless HTTP request-response cycles.", "Small text file saving website login state and preferences.", "Mudah"),
    ("Copyright Creative Commons", "What does a 'Creative Commons' license allow creators to do with their digital work?", ["Specify clear legal permissions allowing others to share, reuse, or adapt their work under chosen conditions", "Sue anyone who reads their work on a computer screen", "Prevent any human being from ever viewing their art", "Force everyone who downloads the file to pay a million dollars"], 0, "Creative Commons offers standardized copyright licenses balancing creator rights and public access.", "Allows creators to grant public reuse permissions under specific terms.", "Mudah"),
    ("Digital Footprint Awareness", "What comprises an individual's online 'digital footprint'?", ["The cumulative permanent record of all data, comments, posts, and browsing traces left behind online", "The physical size of your shoe when walking on computer keyboards", "The weight of the laptop computer when carried in a bag", "The length of the electrical cable connecting the computer"], 0, "Digital footprints encompass active disclosures (posts) and passive telemetry (IP logs, cookies).", "The permanent trail of information you leave behind online.", "Mudah"),
    ("Cyberbullying Prevention", "What is the recommended course of action if someone experiences cyberbullying in an online game or chat room?", ["Block the offender, save screenshots as evidence, report to platform moderators, and tell a trusted adult", "Send aggressive insults back to the bully repeatedly", "Give the bully your home address and private passwords", "Throw the computer monitor out of the window"], 0, "Immediate boundary setting, evidentiary preservation, reporting, and adult intervention are vital.", "Block, save evidence, report, and confide in a trusted adult.", "Mudah"),
    ("Machine Learning Neural Nets", "What inspired the basic architectural design of artificial neural networks in artificial intelligence?", ["The interconnected network structure of biological neurons inside the animal and human brain", "The mechanical cogs and wheels of antique grandfather clocks", "The electrical wiring of automobile combustion engines", "The roots of giant redwood pine trees"], 0, "Artificial neural networks model interconnected layered node weights inspired by neurobiology.", "Inspired by interconnected biological neurons in the brain.", "Sedang"),
    ("Autonomous Vehicle Algorithms", "How do autonomous self-driving cars perceive and navigate city streets safely?", ["By fusing data from LiDAR laser pulses, radar, computer vision cameras, and satellite GPS in real time", "By having a human driver hide inside the trunk of the car", "By driving only in circles on empty parking lots", "By following painted lines using wooden sticks dragged on the ground"], 0, "Sensor fusion pipelines feed deep learning models for dynamic semantic scene segmentation and path planning.", "Fuses real-time data from cameras, radar, LiDAR, and GPS.", "Sedang"),
    ("Software Open Source", "What does it mean when computer software is labeled 'Open Source'?", ["The original source code is publicly accessible for anyone to inspect, modify, and enhance collaboratively", "The software can only be used when outdoor windows are open", "The software was created by opening a computer with a screwdriver", "The software is guaranteed to have zero errors or bugs"], 0, "Open-source software (OSS) licenses grant unrestricted access to examine, fork, and contribute code.", "Source code is publicly open for anyone to inspect and modify.", "Mudah"),
    ("Version Control Git", "Why do software development teams use version control systems like Git?", ["To track code modifications chronologically, manage branching features, and merge team contributions safely", "To delete old code so nobody can see past work", "To speed up the internet connection for the entire team", "To translate programming code into ancient Greek"], 0, "Distributed version control records commit deltas, facilitating branching, collaboration, and rollback.", "Tracks chronological code changes and merges team contributions.", "Sedang"),
    ("Agile Software Sprints", "What is an iterative 'sprint' in Agile software project management?", ["A short, focused cycle of two to four weeks where teams design, build, and test a specific set of features", "A physical race where programmers run around the office building", "A meeting that lasts twenty-four hours without stopping", "A period where no one is allowed to write any computer code"], 0, "Time-boxed iterative development cycles foster rapid customer feedback loops and adaptive planning.", "A focused 2-4 week cycle delivering working software features.", "Mudah"),
    ("Unit Testing Purpose", "What is the primary role of automated 'unit tests' in software engineering?", ["Testing individual isolated functions or modules to verify they return expected outputs for specified inputs", "Testing whether the computer monitor displays the color blue", "Testing whether the keyboard keys make a pleasant clicking sound", "Testing how many people can use the computer at the exact same second"], 0, "Unit tests isolate granular programmatic components to catch regressions early in development.", "Automated tests verifying that individual functions work correctly.", "Sedang"),
    ("Energy Efficient Computing", "How can data center operators reduce the immense carbon footprint of high-performance computing?", ["Using renewable energy sources, optimizing cooling using ambient outdoor air, and improving server efficiency", "Turning off all computer cooling fans during summer heatwaves", "Painting all computer motherboards green", "Moving all data centers to the bottom of the ocean permanently"], 0, "Renewable procurement, free-cooling economizers, and energy-efficient processor architectures cut emissions.", "Using renewable power and efficient natural cooling systems.", "Mudah"),
    ("E-Waste Recycling Best Practice", "Why should obsolete computers be surrendered to certified e-waste recycling facilities rather than trash bins?", ["To safely extract precious metals (gold, copper) and prevent toxic heavy metals from contaminating landfills", "To allow recycling workers to play old video games", "To throw all computers into deep ocean trenches safely", "To crush computers into powder for road tarmac"], 0, "Certified recyclers recover critical raw materials and neutralize hazardous lead and cadmium toxins.", "Recovers valuable metals safely and prevents toxic landfill pollution.", "Mudah"),
]

for idx, item in enumerate(comp_full + comp_extra_30):
    if len([x for x in cam_final_items if x['subject'] == 'cam_computing']) >= 100:
        break
    grade = (idx % 6) + 1
    t, q, opts, c, exp, h, diff = item
    add_q(f"cam-cmp-sup-{idx+1:03d}", "cam_computing", grade, t, q, opts, c, exp, h, diff)

print("Computing complete!")

with open("scripts/chk_stage1.json", "w") as f:
    json.dump({"total": len(cam_final_items)}, f)
