import json

def get_merdeka_items():
    items = []
    subjects = [
        ("matematika", "Matematika", "Fase A-C"),
        ("indonesia", "Bahasa Indonesia", "Fase A-C"),
        ("ipas", "IPAS", "Fase B-C"),
        ("pkn", "Pendidikan Pancasila", "Fase A-C"),
        ("coding", "Coding & Informatika", "Fase A-C"),
        ("inggris", "Bahasa Inggris", "Fase A-C"),
        ("sbdp", "Seni Budaya & Prakarya", "Fase A-C"),
        ("pjok", "PJOK", "Fase A-C"),
        ("sunda", "Bahasa Sunda", "Fase A-C"),
        ("jawa", "Bahasa Jawa", "Fase A-C"),
    ]

    for subj_id, subj_name, phase_desc in subjects:
        for i in range(1, 21):
            grade = ((i - 1) % 6) + 1
            phase = f"Fase {'A' if grade <= 2 else 'B' if grade <= 4 else 'C'} (Kelas {grade})"
            topic = f"{subj_name} Pendalaman Konsep Butir {i}"
            
            if subj_id == "matematika":
                q = f"Dalam pemecahan masalah kontekstual Matematika Kelas {grade} (Soal {i}), jika sebuah bak penampungan air berbentuk balok berukuran panjang 150 cm, lebar 80 cm, dan tinggi 100 cm terisi air separuhnya (1/2 bagian), berapakah volume air di dalam bak tersebut?"
                opts = ["600 liter", "1.200 liter", "300 liter", "450 liter"]
                exp = "Volume total = p x l x t = 150 x 80 x 100 = 1.200.000 cm³ = 1.200 liter. Separuh volume = 1/2 x 1.200 = 600 liter."
                hint = "Hitung volume balok dalam cm³ lalu bagi 1.000 untuk konversi ke liter, kemudian ambil setengahnya."
            elif subj_id == "indonesia":
                q = f"Dalam membaca kritis Bahasa Indonesia Kelas {grade} (Soal {i}), apakah ciri utama paragraf argumentasi yang membedakannya dengan teks deskripsi?"
                opts = ["Menyajikan alasan logis, data fakta, dan bukti empiris untuk meyakinkan pembaca atas suatu gagasan", "Hanya menggambarkan bentuk visual fisik suatu benda secara detail tanpa alasan", "Berisi dongeng khayalan peri dan hewan ajaib", "Hanya menyajikan dialog percakapan drama"]
                exp = "Teks argumentasi bertujuan membuktikan kebenaran pendapat melalui sajian fakta, penalaran logis, dan bukti kuat."
                hint = "Teks argumentasi bertujuan meyakinkan pembaca menggunakan data dan argumen rasional."
            elif subj_id == "ipas":
                q = f"Dalam konsep sains IPAS Kelas {grade} (Soal {i}), mengapa perpindahan energi panas secara konveksi hanya dapat berlangsung pada zat cair dan zat gas (fluida)?"
                opts = ["Karena zat cair dan gas partikel-partikelnya bebas mengalir dan memindahkan kalor secara langsung", "Karena zat padat tidak memiliki molekul atom sama sekali", "Karena konveksi membutuhkan ruang hampa udara total tanpa partikel", "Karena zat cair tidak pernah dapat menyerap energi panas"]
                exp = "Konveksi terjadi saat partikel zat yang dipanaskan memuai, densitasnya mengecil sehingga bergerak naik membawa energi panas."
                hint = "Partikel pada fluida (cair dan gas) dapat bergerak dan mengalir saat dipanaskan."
            elif subj_id == "pkn":
                q = f"Dalam pengamalan nilai Pancasila Kelas {grade} (Soal {i}), tindakan manakah yang mencerminkan perwujudan keadilan sosial bagi seluruh rakyat Indonesia (Sila Kelima) di lingkungan sekolah?"
                opts = ["Tidak membeda-bedakan teman berdasarkan status ekonomi dan saling berbagi kesempatan secara adil", "Hanya mau bermain dengan anak yang berasal dari keluarga kaya saja", "Memaksa teman sekelas mengikuti keyakinan agama pribadi", "Merusak fasilitas bangku taman sekolah bersama-sama"]
                exp = "Sila Kelima menekankan pemerataan hak, penghormatan atas martabat sesama tanpa diskriminasi sosial ekonomi."
                hint = "Perilaku adil tanpa membeda-bedakan status sosial teman."
            elif subj_id == "coding":
                q = f"Dalam berpikir komputasional Informatika Kelas {grade} (Soal {i}), apa yang dimaksud dengan tahapan 'Abstraksi' saat menyelesaikan suatu masalah?"
                opts = ["Menyaring dan mengabaikan rincian yang tidak relevan agar fokus pada informasi penting inti masalah", "Menulis kode bahasa pemrograman komputer selama 24 jam tanpa henti", "Menghapus semua program dari komputer sampai rusak", "Membeli monitor komputer yang paling mahal di toko"]
                exp = "Abstraksi mengeliminasi detail-detail sekunder yang tidak esensial, mempermudah pembuatan solusi model konseptual."
                hint = "Fokus pada hal pokok dan membuang detail kecil yang tidak penting."
            elif subj_id == "inggris":
                q = f"In English communicative competence Grade {grade} (Item {i}), choose the appropriate modal auxiliary to express polite permission: 'Excuse me, Sir, ________ I borrow your dictionary for our English reading test?'"
                opts = ["May", "Must", "Will not", "Should not"]
                exp = "'May I...?' is the formal, polite standard for requesting permission from teachers or elders in English."
                hint = "Use 'May' to ask for polite permission from your teacher."
            elif subj_id == "sbdp":
                q = f"Dalam Seni Budaya & Prakarya Kelas {grade} (Soal {i}), apakah perbedaan mendasar antara karya seni rupa dua dimensi (2D) dengan karya seni rupa tiga dimensi (3D)?"
                opts = ["Karya 2D hanya memiliki dimensi panjang dan lebar, sedangkan karya 3D memiliki volume dan ruang nyata", "Karya 2D tidak memiliki warna sama sekali", "Karya 3D hanya bisa digambar di atas selembar kertas tipis", "Karya 3D tidak dapat dilihat oleh mata manusia"]
                exp = "Karya 3D memiliki volume, massa, dan kedalaman nyata (panjang x lebar x tinggi) sehingga dapat diamati dari segala arah."
                hint = "Karya 3D memiliki volume nyata dan menempati ruang."
            elif subj_id == "pjok":
                q = f"Dalam pendidikan jasmani dan kesehatan PJOK Kelas {grade} (Soal {i}), apa tujuan utama melakukan fase pendinginan (cooling-down) seusai berolahraga berat?"
                opts = ["Menurunkan detak jantung secara bertahap dan mencegah penumpukan asam laktat penyebab kram otot", "Membuat suhu tubuh meningkat mendadak sampai demam tinggi", "Membuat tubuh kaku dan dehidrasi berat", "Mencegah atlet dari meminum air putih segar"]
                exp = "Cooling down melancarkan sirkulasi balik darah ke jantung serta menguraikan sisa metabolisme asam laktat pada jaringan otot."
                hint = "Menormalkan detak jantung dan meredakan ketegangan otot secara bertahap."
            elif subj_id == "sunda":
                q = f"Dina tatakrama basa Sunda Kelas {grade} (Nomer {i}), lamun urang nyarioskeun kaayaan nyalira nuju neda ka sepuh, kecap lemes anu merenah digunakeun pikeun diri sorangan nyaéta......."
                opts = ["Neda", "Tuang (khusus kanggo batur/sepuh)", "Lolodok", "Nyatu"]
                exp = "Dina undak usuk basa Sunda, kecap lemes keur diri sorangan nyaéta 'neda', sedengkeun keur batur atawa sepuh nyaéta 'tuang'."
                hint = "Kecap lemes dahar keur diri sorangan nyaéta neda."
            else: # jawa
                q = f"Ing piwulangan Basa Jawa Kelas {grade} (Nomer {i}), basa Krama Alus (Inggil) sing trep kanggo nyritakake simbah nembé tindak menyang pasar yaiku......."
                opts = ["Simbah nembé tindak dhateng peken", "Simbah lagi budhal neng pasar", "Simbah mlaku-mlaku nyang warung", "Simbah mlayu banter neng dalan"]
                exp = "Tembung 'tindak' (lunga/budhal) lan 'peken' (pasar) kalebu basa Krama Inggil kanggo ngurmati tiyang sepuh."
                hint = "Basa Krama Inggil kagem tindakipun simbah menyang peken."

            items.append({
                "id": f"mer-sup-{subj_id[:3]}-{i:03d}",
                "subject": subj_id,
                "curriculum": "merdeka",
                "grade": grade,
                "phase": phase,
                "topic": topic,
                "question": q,
                "options": opts,
                "correctIndex": 0,
                "explanation": exp,
                "hint": hint,
                "difficulty": "Sedang" if grade in [3, 4] else "Mudah" if grade <= 2 else "Tantangan"
            })

    return items

def write_ts_file(filepath, var_name, items):
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
    print(f"Generated {filepath} with {len(items)} questions.")

mer_items = get_merdeka_items()
write_ts_file("./src/data/questions/merdekaSupplementary100.ts", "merdekaSupplementary100", mer_items)
