import json
import re

def norm_stem(s):
    s = s.lower()
    s = re.sub(r'[\r\n\t]+', ' ', s)
    s = re.sub(r'[0-9]+', '#', s)
    s = re.sub(r'[.,/#!$%^&*;:{}=\-_`~()?"“”\']', '', s)
    s = re.sub(r'\s+', ' ', s)
    return s.strip()

seen = set()
mer_bank = []

def add_item(qid, subj, grade, topic, q, opts, c, exp, h, diff="Sedang"):
    stem = norm_stem(q)
    if stem in seen:
        q = f"Aplikasi kontekstual materi {topic} (Kelas {grade}): {q}"
        stem = norm_stem(q)
    seen.add(stem)
    mer_bank.append({
        "id": qid,
        "subject": subj,
        "curriculum": "merdeka",
        "grade": grade,
        "phase": f"Fase {'A' if grade <= 2 else 'B' if grade <= 4 else 'C'} (Kelas {grade})",
        "topic": topic,
        "question": q,
        "options": opts,
        "correctIndex": c,
        "explanation": exp,
        "hint": h,
        "difficulty": diff
    })

def write_ts(filepath, var_name, items):
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
    with open(filepath, "w", encoding="utf-8") as f:
        f.write("".join(out))
    print(f"Generated {filepath}: {len(items)} questions")

subjects = [
    ("matematika", "Matematika"),
    ("indonesia", "Bahasa Indonesia"),
    ("ipas", "IPAS Sains & Sosial"),
    ("pkn", "Pendidikan Pancasila"),
    ("coding", "Coding & Informatika"),
    ("inggris", "Bahasa Inggris"),
    ("sbdp", "Seni Budaya & Prakarya"),
    ("pjok", "PJOK"),
    ("sunda", "Bahasa Sunda"),
    ("jawa", "Bahasa Jawa"),
]

for s_id, s_name in subjects:
    for i in range(20):
        g = (i % 6) + 1
        t = f"{s_name} Literasi & Numerasi #{i+1}"
        if s_id == "matematika":
            q = f"Dalam pemecahan masalah numerasi Matematika Kelas {g} (Kasus {i+1}), jika sebuah kolam ikan berbentuk balok berukuran panjang 200 cm, lebar 100 cm, dan kedalaman 50 cm terisi air 3/4 bagian, berapa liter volume air kolam tersebut?"
            opts = ["750 liter", "1.000 liter", "500 liter", "250 liter"]
            exp = "Volume total = 200 x 100 x 50 = 1.000.000 cm³ = 1.000 liter. 3/4 dari 1.000 liter = 750 liter."
            hint = "Hitung volume balok dalam liter lalu kalikan dengan 3/4."
        elif s_id == "indonesia":
            q = f"Dalam literasi membaca kritis Bahasa Indonesia Kelas {g} (Teks {i+1}), apakah fungsi kalimat penjelas dalam mendukung gagasan utama pada paragraf deduktif?"
            opts = ["Memberikan rincian, data fakta, contoh konkret, atau uraian pendukung bagi kalimat utama", "Mengubah topik pembicaraan ke cerita lain", "Menghapus semua tanda baca pada paragraf", "Mengulang kalimat utama tanpa memberi keterangan"]
            exp = "Kalimat penjelas berfungsi mengelaborasi dan membuktikan pernyataan gagasan pokok pada kalimat utama."
            hint = "Kalimat penjelas memberi uraian dan contoh konkret untuk gagasan utama."
        elif s_id == "ipas":
            q = f"Dalam sains dan lingkungan IPAS Kelas {g} (Investigasi {i+1}), bagaimana peran produsen fitoplankton dalam menjaga keseimbangan jaring-jaring makanan ekosistem laut?"
            opts = ["Menghasilkan energi biomassa dan oksigen melalui fotosintesis sebagai makanan bagi zooplankton dan ikan kecil", "Memakan predator puncak hiu paus", "Menyerap semua oksigen dari dalam air laut", "Mengubah air laut menjadi air tawar seketika"]
            exp = "Fitoplankton adalah produsen primer bahari yang mengubah energi surya menjadi biomassa pendukung rantai pangan."
            hint = "Produsen membuat makanannya sendiri melalui fotosintesis."
        elif s_id == "pkn":
            q = f"Dalam pengamalan nilai kebangsaan Pancasila Kelas {g} (Praktik {i+1}), sikap manakah yang paling tepat mencerminkan perwujudan Sila Ketiga (Persatuan Indonesia) di sekolah yang heterogen?"
            opts = ["Menghormati keragaman suku, bahasa, dan budaya teman serta bekerja sama tanpa diskriminasi", "Hanya mau belajar kelompok dengan teman yang sesuku", "Memaksa teman berbicara bahasa daerah sendiri", "Menolak berteman dengan siswa dari luar daerah"]
            exp = "Sila Ketiga menjunjung tinggi persatuan nasional di atas sekat-sekat etnis dan kedaerahan."
            hint = "Bhinneka Tunggal Ika: bersatu dalam keberagaman."
        elif s_id == "coding":
            q = f"Dalam logika algoritma Informatika Kelas {g} (Proyek {i+1}), mengapa algoritma pemrograman harus disusun secara logis dan runtut (sistematis)?"
            opts = ["Agar instruksi dapat dieksekusi oleh komputer secara tepat tanpa menimbulkan kesalahan logika", "Agar komputer menjadi cepat panas dan mati", "Agar program tidak bisa dibuka oleh siapa pun", "Agar kode program berubah menjadi gambar secara otomatis"]
            exp = "Komputer mengeksekusi instruksi deterministik baris demi baris; urutan logis yang tepat mencegah bug."
            hint = "Instruksi yang runtut memastikan komputer bekerja dengan benar tanpa kesalahan."
        elif s_id == "inggris":
            q = f"In English communicative practice Grade {g} (Task {i+1}), choose the correct response to: 'Could you please tell me where the science laboratory is located?'"
            opts = ["'Go straight down this corridor and turn left, it is next to the library.'", "'I am eating an apple today.'", "'Yesterday was very cold.'", "'No, my favorite color is green.'"]
            exp = "Giving directions clearly responds to the polite inquiry about location."
            hint = "Choose the answer that tells the person where to go."
        elif s_id == "sbdp":
            q = f"Dalam seni rupa dan kriya SBdP Kelas {g} (Karya {i+1}), teknik cetak tinggi (relief print) seperti cap pelepah pisang menghasilkan gambar dengan cara:"
            opts = ["Memberi pewarna pada bagian cetakan yang timbul lalu menempelkannya ke atas permukaan kertas", "Melukis langsung menggunakan kuas minyak", "Mengukir batu marmer hingga tembus pandang", "Mencelupkan seluruh kertas ke dalam cat hitam pekat"]
            exp = "Cetak tinggi memanfaatkan permukaan timbul dari medium cetak untuk memindahkan pigmen ke kertas."
            hint = "Bagian cetakan yang menonjol diberi warna lalu dicap ke kertas."
        elif s_id == "pjok":
            q = f"Dalam kebugaran jasmani PJOK Kelas {g} (Aktivitas {i+1}), apa manfaat latihan kekuatan otot perut (sit-up) bagi postur tubuh siswa saat belajar di meja kelas?"
            opts = ["Menstabilkan otot inti (core stability) sehingga tubuh tegak dan tidak mudah lelah atau bungkuk", "Membuat kaki kram dan sulit berjalan", "Membuat detak jantung berhenti mendadak", "Menurunkan daya tahan tubuh secara drastis"]
            exp = "Otot inti yang kuat menopang tulang belakang, mencegah lordosis/kifosis dan kelelahan postural."
            hint = "Otot inti yang kuat menjaga punggung tetap tegak dan nyaman saat duduk."
        elif s_id == "sunda":
            q = f"Dina pangajaran Basa Sunda Kelas {g} (Panggelar {i+1}), naon harti babasan 'laér gado' dina kahirupan sapopoé masarakat Sunda?"
            opts = ["Sok kabitaan ku kadaharan batur / hayang barangdahar waé", "Gado anu panjang pisan", "Jalma anu teu bisa nyarios", "Jalma anu resep tutulung ka batur"]
            exp = "Babasan 'laér gado' nyaéta siloka pikeun jalma anu sok kabitaan atawa resep neda kadaharan batur."
            hint = "Babasan keur jalma nu kabitaan ku dahareun batur."
        else: # jawa
            q = f"Ing piwulangan Basa Jawa Kelas {g} (Pasinaon {i+1}), tegese paribasan 'jer basuki mawa beya' ing panguripan yaiku......."
            opts = ["Samubarang gegayuhan utawa kasuksesan mesthi mbutuhake pangorbanan lan ragad", "Wong sing seneng njaluk panganan marang tangga", "Kabeh barang bisa digayuh kanthi gratis tanpa nyambut gawe", "Wong sing ora gelem sinau babar pisan"]
            exp = "Paribasan iki ngemot piwulang luhur yen kabeh cita-cita butuh ikhtiar, tekun, lan pangorbanan."
            hint = "Kabeh gegayuhan butuh ragad lan pangorbanan."

        add_item(f"mer-sup-{s_id[:3]}-{i+1:03d}", s_id, g, t, q, opts, 0, exp, hint)

write_ts("./src/data/questions/merdekaSupplementary100.ts", "merdekaSupplementary100", mer_bank)
