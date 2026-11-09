import json
import os
import random
import sys

sys.path.append(os.path.dirname(__file__))
from generate_all_audited import AUDITED_MATERI
from generator_engine import make_balanced_options, COGNITIVE_LEVELS, QUESTION_TYPES

def generate_domain_qa(domain, topic_name, grade, idx, seed):
    # Specialized generators for domains across all subjects
    # Mathematical domains
    if "hitung" in domain or "bilangan" in domain or "pecahan" in domain or "geometri" in domain or "volume" in domain or "lingkaran" in domain or "statistik" in domain or "kpk" in domain or "perkalian" in domain or "nilai_tempat" in domain or "tambah_kurang" in domain:
        return generate_math_qa(domain, topic_name, grade, idx, seed)
    
    # Science & IPAS domains
    if "tumbuhan" in domain or "wujud" in domain or "ekosistem" in domain or "fotosintesis" in domain or "gaya" in domain or "energi" in domain or "pernapasan" in domain or "cahaya" in domain or "pubertas" in domain or "geografis" in domain or "iklim" in domain or "ekonomi" in domain:
        return generate_ipas_qa(domain, topic_name, grade, idx, seed)
        
    # Language / Bahasa Indonesia domains
    if "fonik" in domain or "kosakata" in domain or "baca" in domain or "tulis" in domain or "ide_pokok" in domain or "deskripsi" in domain or "eksplanasi" in domain or "fakta" in domain or "observasi" in domain:
        return generate_indonesia_qa(domain, topic_name, grade, idx, seed)
        
    # Civics / PPKn domains
    if "identitas" in domain or "simbol" in domain or "aturan" in domain or "keberagaman" in domain or "makna_sila" in domain or "norma" in domain or "sejarah" in domain or "amalan" in domain or "hak_kewajiban" in domain or "nkri" in domain or "demokrasi" in domain:
        return generate_pkn_qa(domain, topic_name, grade, idx, seed)
        
    # Coding & AI domains
    if "komputasional" in domain or "ai" in domain or "pemrograman" in domain or "ml" in domain:
        return generate_coding_qa(domain, topic_name, grade, idx, seed)
        
    # Physical Education / PJOK domains
    if "nonlokomotor" in domain or "kebersihan" in domain or "ritmik" in domain or "atletik" in domain or "bola" in domain or "kasti" in domain or "kebugaran" in domain:
        return generate_pjok_qa(domain, topic_name, grade, idx, seed)
        
    # Art / SBdP domains
    if "bunyi" in domain or "kolase" in domain or "tangga_nada" in domain or "poster" in domain or "batik" in domain or "apresiasi" in domain:
        return generate_sbdp_qa(domain, topic_name, grade, idx, seed)
        
    # Fallback generic domain
    return generate_fallback_qa(domain, topic_name, grade, idx, seed)

def generate_math_qa(domain, topic, grade, idx, seed):
    if "pecahan" in domain or "desimal" in domain:
        p1 = (idx % 7) + 1
        p2 = p1 + 2
        q = f"Bentuk pecahan paling sederhana dari {p1*2}/{p2*2} adalah..."
        ans = f"{p1}/{p2}"
        dist = [f"{p1+1}/{p2}", f"{p1}/{p2+1}", f"{p1*2}/{p2}"]
        exp = f"Untuk menyederhanakan pecahan, bagi pembilang ({p1*2}) dan penyebut ({p2*2}) dengan FPB-nya yaitu 2, menghasilkan {p1}/{p2}."
        h = "Bagi angka atas dan bawah dengan angka yang sama."
    elif "lingkaran" in domain:
        r = (idx % 10 + 1) * 7
        d = r * 2
        q = f"Sebuah lingkaran memiliki jari-jari r = {r} cm. Berapakah keliling lingkaran tersebut (gunakan pi = 22/7)?"
        kel = int(2 * (22/7) * r)
        ans = f"{kel} cm"
        dist = [f"{kel + 14} cm", f"{kel - 14} cm", f"{kel + 28} cm"]
        exp = f"Rumus keliling lingkaran adalah K = 2 x pi x r. Maka K = 2 x (22/7) x {r} = {kel} cm."
        h = "Gunakan rumus K = 2 x pi x r."
    elif "statistik" in domain:
        data = [(idx % 5 + 6) for _ in range(5)]
        mean_val = sum(data) / len(data)
        q = f"Diberikan data nilai ulangan: {', '.join(map(str, data))}. Berapakah nilai rata-rata (mean) data tersebut?"
        ans = f"{mean_val:.1f}"
        dist = [f"{mean_val+1:.1f}", f"{mean_val-1:.1f}", f"{mean_val+0.5:.1f}"]
        exp = f"Nilai rata-rata dihitung dengan menjumlahkan seluruh data ({sum(data)}) dibagi banyak data ({len(data)}) = {mean_val:.1f}."
        h = "Jumlahkan semua nilai lalu bagi dengan banyaknya data."
    elif "volume" in domain:
        s = (idx % 8) + 3
        vol = s * s * s
        q = f"Sebuah kubus memiliki panjang rusuk {s} cm. Berapakah volume kubus tersebut?"
        ans = f"{vol} cm³"
        dist = [f"{vol + s*s} cm³", f"{vol - s*s} cm³", f"{s*6} cm³"]
        exp = f"Volume kubus dihitung dengan rumus V = s x s x s = {s} x {s} x {s} = {vol} cm³."
        h = "Kalikan panjang rusuk sebanyak tiga kali."
    elif "kpk" in domain or "fpb" in domain:
        a = 12 + (idx % 5) * 6
        b = 18 + (idx % 4) * 6
        import math
        fpb_val = math.gcd(a, b)
        q = f"Faktor Persekutuan Terbesar (FPB) dari bilangan {a} dan {b} adalah..."
        ans = str(fpb_val)
        dist = [str(fpb_val * 2), str(max(1, fpb_val // 2)), str(fpb_val + 1)]
        exp = f"FPB dari {a} dan {b} adalah faktor terbesar yang dapat membagi habis kedua bilangan tersebut, yaitu {fpb_val}."
        h = "Cari angka terbesar yang membagi habis kedua bilangan."
    else:
        a = (idx % 25) + 10 * grade
        b = (idx % 15) + 5 * grade
        c = a + b
        q = f"Dalam suatu kegiatan belanja perlengkapan sekolah, Siti membeli buku seharga Rp{a*1000:,} dan pensil Rp{b*1000:,}. Berapa total uang yang harus dibayar Siti?".replace(",", ".")
        ans = f"Rp{c*1000:,}".replace(",", ".")
        dist = [f"Rp{(c+5)*1000:,}".replace(",", "."), f"Rp{(c-5)*1000:,}".replace(",", "."), f"Rp{(c+10)*1000:,}".replace(",", ".")]
        exp = f"Total belanja adalah penjumlahan dari Rp{a*1000:,} + Rp{b*1000:,} = Rp{c*1000:,}.".replace(",", ".")
        h = "Jumlahkan kedua harga barang tersebut."
    return q, ans, dist, exp, h

def generate_ipas_qa(domain, topic, grade, idx, seed):
    if "fotosintesis" in domain or "tumbuhan" in domain:
        q = f"Pada proses fotosintesis tumbuhan hijau (materi {topic}), zat apakah yang dihasilkan dan dilepaskan ke udara sehingga bermanfaat bagi pernapasan manusia?"
        ans = "Oksigen (O2) dan glukosa (energi)"
        dist = ["Karbon dioksida (CO2) dan nitrogen", "Karbon monoksida dan uap belerang", "Gas metana dan klorofil"]
        exp = "Fotosintesis menyerap air dan karbon dioksida dengan bantuan sinar matahari dan klorofil, lalu menghasilkan glukosa sebagai makanan serta oksigen (O2) yang dilepaskan ke udara."
        h = "Pikirkan gas yang kita hirup saat bernapas segar di dekat pohon."
    elif "ekosistem" in domain or "rantai" in domain:
        q = f"Dalam rantai makanan ekosistem sawah: Padi -> Belalang -> Katak -> Ular -> Elang. Apakah peran katak dalam rantai makanan tersebut?"
        ans = "Konsumen sekunder (Konsumen tingkat II)"
        dist = ["Produsen utama pembuat makanan", "Konsumen primer pemakan tumbuhan", "Pengurai / dekomposer tanah"]
        exp = "Padi berperan sebagai produsen, belalang sebagai konsumen I (herbivora), dan katak yang memakan belalang berperan sebagai konsumen II (karnivora)."
        h = "Katak memakan konsumen primer (belalang)."
    elif "pernapasan" in domain or "darah" in domain or "tubuh" in domain:
        q = f"Organ tubuh manusia yang berfungsi memompa darah bersih beroksigen ke seluruh tubuh adalah..."
        ans = "Jantung (terutama bilik kiri)"
        dist = ["Paru-paru bagian alveolus", "Hati bagian empedu", "Lambung bagian pilorus"]
        exp = "Jantung adalah organ berotot yang memompa darah ke seluruh tubuh melalui pembuluh arteri (nadi)."
        h = "Organ yang berdetak di dada sebelah kiri."
    elif "energi" in domain or "iklim" in domain:
        q = f"Manakah contoh sumber energi terbarukan ramah lingkungan yang tidak menghasilkan emisi gas rumah kaca?"
        ans = "Energi sinar matahari (surya) dan angin"
        dist = ["Batu bara dan minyak bumi", "Bahan bakar bensin dan solar", "Gas alam dan batu bara muda"]
        exp = "Energi surya dan angin merupakan energi baru terbarukan yang melimpah dan tidak mencemari atmosfer bumi."
        h = "Pilihlah sumber energi alam yang tidak pernah habis."
    else:
        q = f"Pada pembelajaran IPAS materi '{topic}', perubahan wujud benda dari cair menjadi gas saat dipanaskan dinamakan..."
        ans = "Menguap"
        dist = ["Membeku", "Mencair", "Mengembun"]
        exp = "Perubahan wujud zat dari cair menjadi uap/gas akibat penyerapan panas disebut menguap (contoh: air yang mendidih)."
        h = "Pikirkan apa yang terjadi saat air dimasak sampai mendidih."
    return q, ans, dist, exp, h

def generate_indonesia_qa(domain, topic, grade, idx, seed):
    if "ide_pokok" in domain:
        q = f"Kalimat yang memuat gagasan utama atau inti pembahasan dalam suatu paragraf disebut..."
        ans = "Kalimat utama (ide pokok)"
        dist = ["Kalimat penjelas tambahan", "Kalimat tanya retoris", "Kalimat seru ajakan"]
        exp = "Ide pokok merupakan gagasan inti yang menjadi dasar pengembangan paragraf, biasanya tertuang dalam kalimat utama."
        h = "Perhatikan gagasan yang menjadi pusat isi paragraf."
    elif "fakta" in domain or "opini" in domain:
        q = f"Manakah di bawah ini yang merupakan ciri dari kalimat FAKTA dalam suatu teks bacaan?"
        ans = "Dapat dibuktikan kebenarannya dengan data nyata atau angka yang teruji"
        dist = ["Berisi pendapat pribadi dan menggunakan kata 'menurut saya'", "Menggunakan kata sifat subjektif seperti 'sangat elok' dan 'paling lezat'", "Belum pasti terjadi dan masih berupa perkiraan masa depan"]
        exp = "Fakta adalah kenyataan yang benar-benar terjadi dan dapat dibuktikan dengan data, waktu, dan fakta riil."
        h = "Fakta selalu didukung bukti objektif bukan perasaan."
    else:
        q = f"Tanda baca yang tepat digunakan untuk mengakhiri kalimat tanya dalam bahasa Indonesia yang baku adalah..."
        ans = "Tanda tanya (?)"
        dist = ["Tanda titik (.)", "Tanda seru (!)", "Tanda koma (,)"]
        exp = "Kalimat tanya berfungsi untuk menanyakan informasi dan selalu diakhiri dengan tanda baca tanya (?)."
        h = "Bentuk tanda baca ini melengkung dengan titik di bawahnya."
    return q, ans, dist, exp, h

def generate_pkn_qa(domain, topic, grade, idx, seed):
    if "simbol" in domain or "garuda" in domain:
        q = f"Simbol sila kedua Pancasila yang melambangkan hubungan manusia yang saling membutuhkan dan bersatu adalah..."
        ans = "Rantai emas berlatar belakang merah"
        dist = ["Bintang tunggal berwarna emas", "Pohon beringin rindang", "Kepala banteng tegap"]
        exp = "Sila ke-2 'Kemanusiaan yang adil dan beradab' disimbolkan dengan rantai emas yang mata rantainya saling mengait."
        h = "Simbol gelang-gelang yang saling mengait."
    elif "norma" in domain or "aturan" in domain:
        q = f"Norma yang bersumber dari hati nurani manusia mengenai kebaikan dan keburukan dinamakan..."
        ans = "Norma kesusilaan"
        dist = ["Norma hukum pidana", "Norma kesopanan adat", "Norma tata tertib lalu lintas"]
        exp = "Norma kesusilaan berasal dari bisikan hati nurani manusia untuk selalu berbuat jujur dan benar."
        h = "Berasal dari dalam hati nurani pribadi."
    elif "nkri" in domain or "persatuan" in domain:
        q = f"Sikap yang mencerminkan upaya menjaga keutuhan Negara Kesatuan Republik Indonesia (NKRI) di sekolah adalah..."
        ans = "Berteman akrab dan saling tolong tanpa membeda-bedakan suku dan agama"
        dist = ["Hanya bergaul dengan teman yang berasal dari daerah yang sama", "Memaksakan kehendak pendapat pribadi dalam musyawarah", "Mengejek dialek atau bahasa daerah teman lain"]
        exp = "Menjaga persatuan dan kesatuan dimulai dari sikap toleran, menghargai keberagaman, dan gotong royong."
        h = "Pilih perilaku yang menyatukan bukan memecah belah."
    else:
        q = f"Sikap mengutamakan kepentingan bersama di atas kepentingan pribadi saat bermusyawarah mencerminkan pengamalan Pancasila sila ke-..."
        ans = "Sila ke-4 (Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan)"
        dist = ["Sila ke-1 (Ketuhanan Yang Maha Esa)", "Sila ke-2 (Kemanusiaan yang Adil dan Beradab)", "Sila ke-3 (Persatuan Indonesia)"]
        exp = "Musyawarah mufakat dan menghargai keputusan bersama merupakan esensi dari sila ke-4 Pancasila."
        h = "Sila yang berlambang kepala banteng."
    return q, ans, dist, exp, h

def generate_coding_qa(domain, topic, grade, idx, seed):
    if "komputasional" in domain:
        q = f"Teknik memecah masalah besar yang rumit menjadi bagian-bagian kecil yang lebih mudah diselesaikan disebut..."
        ans = "Dekomposisi (Decomposition)"
        dist = ["Pengenalan pola (Pattern recognition)", "Abstraksi (Abstraction)", "Algoritma bertingkat"]
        exp = "Dekomposisi adalah pilar berpikir komputasional untuk mengurai masalah kompleks menjadi sub-masalah sederhana."
        h = "Artinya mengurai atau memecah komponen masalah."
    elif "ai" in domain or "ml" in domain:
        q = f"Dalam konsep dasar Kecerdasan Artifisial (AI), apakah yang dibutuhkan oleh komputer agar dapat mengenali gambar hewan atau suara manusia dengan akurat?"
        ans = "Data latihan (training dataset) yang banyak dan berkualitas"
        dist = ["Koneksi kabel tembaga yang sangat panjang", "Layar monitor dengan resolusi sangat terang", "Baterai cadangan berkapasitas besar"]
        exp = "Model kecerdasan artifisial belajar mengenali pola berdasarkan kumpulan data latihan (dataset) yang diberikan."
        h = "Komputer belajar dari sekumpulan contoh..."
    else:
        q = f"Urutan langkah-langkah logis dan sistematis untuk menyelesaikan suatu tugas pemrograman dinamakan..."
        ans = "Algoritma"
        dist = ["Hardware", "Variabel global", "Koneksi internet"]
        exp = "Algoritma adalah deretan instruksi bertahap yang terstruktur untuk memecahkan suatu masalah komputasi."
        h = "Langkah berurutan logis..."
    return q, ans, dist, exp, h

def generate_pjok_qa(domain, topic, grade, idx, seed):
    q = f"Manakah manfaat utama dari melakukan pemanasan (stretching) sebelum melakukan aktivitas olahraga inti?"
    ans = "Meningkatkan suhu otot, kelenturan sendi, dan mencegah terjadinya cedera"
    dist = ["Membuat tubuh cepat lelah dan dehidrasi", "Mengurangi asupan oksigen ke dalam paru-paru", "Menurunkan denyut jantung secara drastis"]
    exp = "Pemanasan mempersiapkan otot dan sistem peredaran darah untuk aktivitas berat serta meminimalkan risiko kram dan cedera."
    h = "Pemanasan dilakukan agar tubuh siap dan terhindar dari..."
    return q, ans, dist, exp, h

def generate_sbdp_qa(domain, topic, grade, idx, seed):
    q = f"Karya seni menempelkan berbagai pecahan bahan (seperti biji-bijian, kertas warna, atau daun kering) pada permukaan bidang datar membentuk gambar disebut..."
    ans = "Kolase / Mosaik"
    dist = ["Patung pahat 3 dimensi", "Relief cetak cor beton", "Seni batik celup ikat"]
    exp = "Kolase dibuat dengan menempelkan berbagai bahan alam atau sintetis pada permukaan gambar 2 dimensi."
    h = "Teknik menempelkan bahan alam pada pola gambar."
    return q, ans, dist, exp, h

def generate_fallback_qa(domain, topic, grade, idx, seed):
    q = f"Pada materi kurikulum '{topic}' (Kelas {grade} SD), pemahaman konsep yang benar berdasarkan panduan resmi adalah..."
    ans = f"Menerapkan konsep {topic} secara runtut, tepat, dan bertanggung jawab"
    dist = ["Melakukan tindakan secara tergesa-gesa tanpa memperhatikan kaidah", "Mengabaikan fakta ilmiah yang telah terbukti kebenarannya", "Meniru tanpa memahami tujuan pembelajaran yang diharapkan"]
    exp = f"Materi '{topic}' diajarkan untuk membangun pemahaman konseptual dan karakter bernalar kritis siswa."
    h = "Pilihlah jawaban yang paling ilmiah dan berkarakter positif."
    return q, ans, dist, exp, h

print("Master domain QA generator ready")
