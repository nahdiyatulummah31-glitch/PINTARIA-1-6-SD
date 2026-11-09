import React, { useState, useMemo, useEffect } from 'react';
import {
  Printer,
  RefreshCw,
  ArrowLeft,
  Download,
  Copy,
  Check,
  FileText,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Question, SubjectId, GradeLevel, CurriculumId } from '../types/quiz';
import {
  allQuestions,
  ALL_SUBJECT_METAS,
  CURRICULUM_METAS,
  getSubjectsByCurriculum,
  getQuestionsByGradeAndSubject,
} from '../data/questionBank';
import { sounds } from '../utils/soundEffects';
import { speechReader } from '../utils/speechReader';
import { QuestionIllustration } from './QuestionIllustration';
import { ReadAloudButton } from './ReadAloudButton';

interface PrintWorksheetViewProps {
  initialSubject?: SubjectId;
  initialGrade?: GradeLevel;
  onBackToClassModule?: () => void;
  currentCurriculum?: CurriculumId;
  isSingleClassLock?: boolean;
}

export const PrintWorksheetView: React.FC<PrintWorksheetViewProps> = ({
  initialSubject = 'matematika',
  initialGrade = 1,
  onBackToClassModule,
  currentCurriculum = 'merdeka',
  isSingleClassLock = false,
}) => {
  const subjects = getSubjectsByCurriculum(currentCurriculum);
  const defaultSubject = subjects.some((s) => s.id === initialSubject) ? initialSubject : subjects[0].id;

  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>(initialGrade);
  const [selectedSubject, setSelectedSubject] = useState<SubjectId>(defaultSubject);
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [includeAnswerKey, setIncludeAnswerKey] = useState<boolean>(true);
  const [seed, setSeed] = useState<number>(1);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'info' | 'error'; text: string } | null>(null);
  const [copiedText, setCopiedText] = useState<boolean>(false);

  useEffect(() => {
    if (initialGrade) setSelectedGrade(initialGrade);
  }, [initialGrade]);

  const curriculumMeta = CURRICULUM_METAS[currentCurriculum] || CURRICULUM_METAS.merdeka;

  const defaultTitle =
    currentCurriculum === 'cambridge'
      ? 'Cambridge Primary Learner Worksheet'
      : currentCurriculum === 'singapore'
      ? 'Singapore Primary Problem Set (Worksheet)'
      : 'Lembar Kerja Peserta Didik (LKPD)';

  const [worksheetTitle, setWorksheetTitle] = useState<string>(defaultTitle);

  useEffect(() => {
    setWorksheetTitle(defaultTitle);
  }, [currentCurriculum]);

  useEffect(() => {
    return () => {
      speechReader.stop();
    };
  }, []);

  useEffect(() => {
    if (initialSubject && subjects.some((s) => s.id === initialSubject)) {
      setSelectedSubject(initialSubject);
    } else {
      setSelectedSubject(subjects[0].id);
    }
  }, [initialSubject, currentCurriculum]);

  // Generate questions strictly for selectedGrade (Zero mixing of other grades)
  const worksheetQuestions = useMemo(() => {
    const gradeQuestions = getQuestionsByGradeAndSubject(selectedGrade, selectedSubject, currentCurriculum);
    let pool = [...gradeQuestions];

    // Shuffle if seed > 1
    const shuffled = [...pool];
    if (seed > 1) {
      let s = seed * 9973;
      for (let i = shuffled.length - 1; i > 0; i--) {
        s = (s * 9301 + 49297) % 233280;
        const j = Math.floor((s / 233280) * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
    }
    return shuffled.slice(0, questionCount);
  }, [selectedSubject, selectedGrade, questionCount, seed, currentCurriculum]);

  const meta = ALL_SUBJECT_METAS.find((s) => s.id === selectedSubject) || subjects[0];

  let kopCurriculumLabel = '';
  let gradeBadgeLabel = '';

  if (currentCurriculum === 'cambridge') {
    kopCurriculumLabel = 'CAMBRIDGE ASSESSMENT PRIMARY • GLOBAL STANDARDS';
    gradeBadgeLabel = `Stage ${selectedGrade} (Primary ${selectedGrade})`;
  } else if (currentCurriculum === 'singapore') {
    kopCurriculumLabel = 'SINGAPORE PRIMARY MOE SYLLABUS • CPA & HEURISTICS';
    gradeBadgeLabel = `Primary ${selectedGrade} (P${selectedGrade})`;
  } else {
    const phaseLabel = selectedGrade <= 2 ? 'FASE A' : selectedGrade <= 4 ? 'FASE B' : 'FASE C';
    kopCurriculumLabel = `KURIKULUM MERDEKA • ${phaseLabel}`;
    gradeBadgeLabel = `Kelas ${selectedGrade} SD`;
  }

  const captureIllustrationElement = async (
    elementId: string
  ): Promise<{ dataUrl: string; width: number; height: number } | null> => {
    const qid = elementId.replace('q-illus-', '');
    const container =
      document.getElementById(elementId) ||
      document.querySelector(`[data-qid="${qid}"]`) ||
      document.querySelector(`[data-qid="${elementId}"]`);

    if (!container) return null;

    const svg = container.querySelector('svg');
    if (!svg) {
      try {
        const canvas = await html2canvas(container as HTMLElement, {
          scale: 2,
          backgroundColor: '#ffffff',
          logging: false,
        });
        return {
          dataUrl: canvas.toDataURL('image/png'),
          width: canvas.width,
          height: canvas.height,
        };
      } catch {
        return null;
      }
    }

    return new Promise((resolve) => {
      try {
        const serializer = new XMLSerializer();
        let svgXml = serializer.serializeToString(svg);

        if (!svgXml.includes('xmlns="http://www.w3.org/2000/svg"')) {
          svgXml = svgXml.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
        }

        let w = 460;
        let h = 160;
        const viewBox = svg.getAttribute('viewBox');
        if (viewBox) {
          const parts = viewBox.trim().split(/[\s,]+/).map(Number);
          if (parts.length === 4 && parts[2] > 0 && parts[3] > 0) {
            w = parts[2];
            h = parts[3];
          }
        }

        if (!/<svg[^>]+width=/.test(svgXml)) {
          svgXml = svgXml.replace('<svg', `<svg width="${w}" height="${h}"`);
        }

        const svgBlob = new Blob([svgXml], { type: 'image/svg+xml;charset=utf-8' });
        const blobUrl = URL.createObjectURL(svgBlob);
        const img = new Image();

        const timer = setTimeout(() => {
          URL.revokeObjectURL(blobUrl);
          resolve(null);
        }, 3000);

        img.onload = () => {
          clearTimeout(timer);
          try {
            const canvas = document.createElement('canvas');
            canvas.width = w * 2;
            canvas.height = h * 2;
            const ctx = canvas.getContext('2d');
            if (ctx) {
              ctx.fillStyle = '#ffffff';
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
              const dataUrl = canvas.toDataURL('image/png');
              URL.revokeObjectURL(blobUrl);
              resolve({ dataUrl, width: canvas.width, height: canvas.height });
            } else {
              URL.revokeObjectURL(blobUrl);
              resolve(null);
            }
          } catch {
            URL.revokeObjectURL(blobUrl);
            resolve(null);
          }
        };

        img.onerror = () => {
          clearTimeout(timer);
          URL.revokeObjectURL(blobUrl);
          try {
            const b64 = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgXml);
            const fallbackImg = new Image();
            fallbackImg.onload = () => {
              const canvas = document.createElement('canvas');
              canvas.width = w * 2;
              canvas.height = h * 2;
              const ctx = canvas.getContext('2d');
              if (ctx) {
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(fallbackImg, 0, 0, canvas.width, canvas.height);
                resolve({ dataUrl: canvas.toDataURL('image/png'), width: canvas.width, height: canvas.height });
              } else {
                resolve(null);
              }
            };
            fallbackImg.onerror = () => resolve(null);
            fallbackImg.src = b64;
          } catch {
            resolve(null);
          }
        };

        img.src = blobUrl;
      } catch (err) {
        console.warn('SVG processing error:', err);
        resolve(null);
      }
    });
  };

  // Generate and download a real PDF file directly using jsPDF
  const handleDownloadPDF = async () => {
    sounds.playPop();
    setIsGeneratingPdf(true);
    setStatusMessage({ type: 'info', text: 'Sedang menyusun dan merender berkas PDF A4 beserta diagram soal...' });

    // Allow DOM to settle
    await new Promise((r) => setTimeout(r, 80));

    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pageWidth = 210;
      const pageHeight = 297;
      const margin = 15;
      const contentWidth = pageWidth - margin * 2;
      let y = margin;

      const checkPageBreak = (neededHeight: number) => {
        if (y + neededHeight > pageHeight - margin - 10) {
          doc.addPage();
          y = margin;
          return true;
        }
        return false;
      };

      // Header / Kop
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(100, 100, 100);
      doc.text(kopCurriculumLabel, margin, y);
      y += 5;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(16);
      doc.setTextColor(20, 20, 20);
      doc.text(worksheetTitle.toUpperCase(), margin, y);
      y += 6;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(60, 60, 60);
      doc.text(`Mata Pelajaran: ${meta.name}   |   ${gradeBadgeLabel}   |   Jumlah Soal: ${worksheetQuestions.length}`, margin, y);
      y += 4;

      // Divider line
      doc.setDrawColor(30, 30, 30);
      doc.setLineWidth(0.6);
      doc.line(margin, y, margin + contentWidth, y);
      y += 5;

      // Student info box
      doc.setDrawColor(180, 180, 180);
      doc.setLineWidth(0.2);
      doc.rect(margin, y, contentWidth, 14);

      doc.setFontSize(8.5);
      doc.setTextColor(50, 50, 50);
      doc.text('Nama Siswa  : ___________________________', margin + 3, y + 5);
      doc.text('Hari / Tgl  : ___________________________', margin + 95, y + 5);
      doc.text('Kelas       : ___________________________', margin + 3, y + 10);
      doc.text('Nilai / Skor: ___________________________', margin + 95, y + 10);
      y += 18;

      // Instructions
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(8);
      doc.setTextColor(80, 80, 80);
      doc.text('Petunjuk: Bacalah setiap soal dengan cermat dan berikan tanda silang (X) pada opsi A, B, C, atau D yang paling benar.', margin, y);
      y += 6;

      // Questions List with full illustrations support
      for (let idx = 0; idx < worksheetQuestions.length; idx++) {
        const q = worksheetQuestions[idx];
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(20, 20, 20);

        const qNumStr = `${idx + 1}. `;
        const questionLines = doc.splitTextToSize(`${qNumStr}${q.question}`, contentWidth);
        const qHeight = questionLines.length * 4.5;

        // Capture illustration if available
        let imgData: { dataUrl: string; width: number; height: number } | null = null;
        let imgWidthMm = 0;
        let imgHeightMm = 0;

        if (q.hasImage && q.imageKey) {
          imgData = await captureIllustrationElement(`q-illus-${q.id}`);
          if (imgData && imgData.width > 0 && imgData.height > 0) {
            const maxW = 115;
            const aspect = imgData.height / imgData.width;
            imgWidthMm = Math.min(maxW, contentWidth - 10);
            imgHeightMm = imgWidthMm * aspect;
          }
        }

        // Calculate needed height for question + image + options + spacing
        const needed = qHeight + (imgData ? imgHeightMm + 6 : 0) + (q.options.length * 5) + 6;
        checkPageBreak(needed);

        doc.text(questionLines, margin, y);
        y += qHeight + 2;

        // Embed the image in PDF with exact PNG format
        if (imgData) {
          doc.addImage(imgData.dataUrl, 'PNG', margin + 4, y, imgWidthMm, imgHeightMm);
          y += imgHeightMm + 3;
        }

        // Options
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(40, 40, 40);

        q.options.forEach((opt, oIdx) => {
          const optLetter = String.fromCharCode(65 + oIdx);
          const optLines = doc.splitTextToSize(`[   ]  ${optLetter}.  ${opt}`, contentWidth - 8);
          doc.text(optLines, margin + 4, y);
          y += optLines.length * 4 + 0.5;
        });

        y += 3.5; // spacing between questions
      }

      // Answer Key Page
      if (includeAnswerKey) {
        doc.addPage();
        y = margin;

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(14);
        doc.setTextColor(20, 20, 20);
        doc.text('KUNCI JAWABAN & PEMBAHASAN', margin, y);
        y += 5;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(80, 80, 80);
        doc.text(`${worksheetTitle} • ${meta.name} (${gradeBadgeLabel})`, margin, y);
        y += 4;

        doc.setDrawColor(50, 50, 50);
        doc.setLineWidth(0.4);
        doc.line(margin, y, margin + contentWidth, y);
        y += 6;

        // Quick Answer Grid
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(30, 30, 30);
        doc.text('KUNCI SINGKAT:', margin, y);
        y += 4;

        let col = 0;
        const colWidth = contentWidth / 5;
        let startRowY = y;

        worksheetQuestions.forEach((q, idx) => {
          const colX = margin + col * colWidth;
          const letter = String.fromCharCode(65 + q.correctIndex);
          doc.setFont('helvetica', 'normal');
          doc.text(`No.${idx + 1}: `, colX, y);
          doc.setFont('helvetica', 'bold');
          doc.text(letter, colX + 11, y);

          col++;
          if (col >= 5) {
            col = 0;
            y += 4.5;
          }
        });

        if (col !== 0) y += 5;
        y += 5;

        // Detailed Explanation
        checkPageBreak(30);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(30, 30, 30);
        doc.text('PEMBAHASAN LENGKAP TIAP SOAL:', margin, y);
        y += 5;

        worksheetQuestions.forEach((q, idx) => {
          const letter = String.fromCharCode(65 + q.correctIndex);
          const correctText = q.options[q.correctIndex];
          const expHeader = `No ${idx + 1}. Jawaban: ${letter} (${correctText})`;
          const expText = q.explanation || 'Jawaban sesuai kaidah kurikulum materi terkait.';

          const lines = doc.splitTextToSize(`${expHeader}\nPenjelasan: ${expText}`, contentWidth - 4);
          const needed = lines.length * 4 + 3;

          checkPageBreak(needed);

          doc.setDrawColor(220, 220, 220);
          doc.setFillColor(248, 248, 248);
          doc.rect(margin, y, contentWidth, needed - 1, 'FD');

          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8.5);
          doc.setTextColor(40, 40, 40);
          doc.text(lines, margin + 2.5, y + 4);

          y += needed + 1.5;
        });
      }

      // Add page numbering on all pages
      const totalPages = doc.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.5);
        doc.setTextColor(140, 140, 140);
        doc.text(
          `Pintaria SD • Lembar Kerja ${meta.name} • Halaman ${i} dari ${totalPages}`,
          pageWidth / 2,
          pageHeight - 9,
          { align: 'center' }
        );
        doc.setFontSize(6);
        doc.setTextColor(160, 160, 160);
        doc.text(
          `© PINTARIA. Seluruh hak dilindungi. Dilarang memperjualbelikan, menggandakan, membagikan, atau mendistribusikan produk ini tanpa izin`,
          pageWidth / 2,
          pageHeight - 5,
          { align: 'center' }
        );
      }

      // Download file
      const cleanFileName = `LKPD_${meta.name}_Kelas_${initialGrade}_${currentCurriculum}`.replace(/[^a-zA-Z0-9_-]/g, '_');
      doc.save(`${cleanFileName}.pdf`);

      setStatusMessage({
        type: 'success',
        text: `Berkas "${cleanFileName}.pdf" berhasil diunduh ke perangkat Anda!`,
      });
      setTimeout(() => setStatusMessage(null), 5000);
    } catch (err: any) {
      console.error('Failed to generate PDF:', err);
      setStatusMessage({
        type: 'error',
        text: 'Gagal membuat file PDF secara otomatis: ' + (err?.message || 'Silakan gunakan tombol Salin Teks.'),
      });
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  // Browser Print Dialog with fallback
  const handlePrint = () => {
    sounds.playPop();
    try {
      // Check if window.print is supported/available
      if (typeof window !== 'undefined' && window.print) {
        window.print();
        setStatusMessage({
          type: 'info',
          text: 'Membuka dialog cetak browser. Pilih "Simpan sebagai PDF" atau printer Anda.',
        });
        setTimeout(() => setStatusMessage(null), 4000);
      } else {
        handleDownloadPDF();
      }
    } catch (err) {
      console.warn('window.print() was blocked or unavailable, falling back to PDF download:', err);
      handleDownloadPDF();
    }
  };

  const handleShuffle = () => {
    sounds.playPop();
    setSeed((s) => s + 1);
  };

  // Copy full worksheet text to clipboard (Word/Docs friendly)
  const handleCopyText = () => {
    sounds.playPop();
    const formatted = `=== ${worksheetTitle.toUpperCase()} ===\n${kopCurriculumLabel}\nMata Pelajaran: ${meta.name}\n${gradeBadgeLabel}\n\nPetunjuk: Berikan tanda silang (X) pada pilihan jawaban yang benar.\n\n` +
      worksheetQuestions
        .map(
          (q, idx) =>
            `${idx + 1}. ${q.question}\n` +
            q.options.map((opt, oIdx) => `   ${String.fromCharCode(65 + oIdx)}. ${opt}`).join('\n')
        )
        .join('\n\n') +
      (includeAnswerKey
        ? `\n\n=== KUNCI JAWABAN & PEMBAHASAN ===\n` +
          worksheetQuestions
            .map(
              (q, idx) =>
                `No ${idx + 1}: ${String.fromCharCode(65 + q.correctIndex)} (${q.options[q.correctIndex]})\nPembahasan: ${q.explanation}`
            )
            .join('\n\n')
        : '');

    navigator.clipboard.writeText(formatted);
    setCopiedText(true);
    setStatusMessage({
      type: 'success',
      text: 'Teks soal & kunci jawaban berhasil disalin ke clipboard! Siap ditempel di Microsoft Word / Google Docs.',
    });
    setTimeout(() => {
      setCopiedText(false);
      setStatusMessage(null), 4000;
    }, 4000);
  };

  return (
    <div className="mx-auto max-w-4xl px-3 sm:px-6 py-3 sm:py-8 animate-fadeIn w-full max-w-full">
      {/* Controls Bar (Hidden during print) */}
      <div className="print:hidden mb-4 sm:mb-6 rounded-2xl sm:rounded-3xl border-2 border-slate-200 bg-white p-3.5 sm:p-6 shadow-xs">
        {onBackToClassModule && (
          <button
            onClick={() => {
              sounds.playPop();
              onBackToClassModule();
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold mb-3 cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Modul Kelas</span>
          </button>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-lg sm:text-xl">🖨️</span>
              <h1 className="font-display text-lg sm:text-2xl font-extrabold text-slate-900 flex items-center gap-1.5">
                <span>Cetak Lembar Kerja • {gradeBadgeLabel}</span>
              </h1>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                {curriculumMeta.flag} {curriculumMeta.name}
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Unduh berkas PDF siap cetak A4 atau cetak langsung untuk tugas sekolah dan latihan mandiri.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleShuffle}
              className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
              title="Acak Susunan Soal Baru"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Acak</span>
            </button>

            <button
              onClick={handleCopyText}
              className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
              title="Salin Teks ke Word/Docs"
            >
              {copiedText ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copiedText ? 'Tersalin!' : 'Salin Teks'}</span>
            </button>

            {/* Direct PDF Download Button - Guaranteed to work in iframes */}
            <button
              onClick={handleDownloadPDF}
              disabled={isGeneratingPdf}
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-xs font-bold text-white shadow-[0_3px_0_#047857] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer disabled:opacity-50"
            >
              <Download className="h-4 w-4" />
              <span>{isGeneratingPdf ? 'Membuat PDF...' : 'Unduh PDF (.pdf)'}</span>
            </button>

            {/* Native browser print button */}
            <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 px-3.5 py-2 text-xs font-bold text-white shadow-[0_3px_0_#b45309] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
              title="Buka dialog cetak browser"
            >
              <Printer className="h-4 w-4" />
              <span>Cetak</span>
            </button>
          </div>
        </div>

        {/* Status Toast Banner */}
        {statusMessage && (
          <div
            className={`mb-4 p-3 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all ${
              statusMessage.type === 'success'
                ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
                : statusMessage.type === 'error'
                ? 'bg-rose-50 text-rose-900 border-rose-300'
                : 'bg-sky-50 text-sky-900 border-sky-300'
            }`}
          >
            <Sparkles className="w-4 h-4 shrink-0" />
            <span className="flex-1">{statusMessage.text}</span>
            <button onClick={() => setStatusMessage(null)} className="text-xs font-bold opacity-60 hover:opacity-100">
              ✕
            </button>
          </div>
        )}

        {/* Configuration settings */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs pt-3 border-t border-slate-100">
          <div>
            <label className="font-bold text-slate-700 block mb-1">Jenjang / Kelas:</label>
            {isSingleClassLock ? (
              <div
                className="w-full rounded-xl border border-amber-300 bg-amber-50 p-2.5 font-bold text-amber-950 flex items-center justify-between"
                title="Akses terkunci sesuai paket pembelian"
              >
                <span>🔒 Kelas {selectedGrade} SD (Paket Terkunci)</span>
              </div>
            ) : (
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(Number(e.target.value) as GradeLevel)}
                className="w-full rounded-xl border border-slate-200 bg-white p-2.5 font-bold text-slate-700 focus:border-amber-400 focus:outline-hidden"
              >
                {([1, 2, 3, 4, 5, 6] as GradeLevel[]).map((g) => (
                  <option key={g} value={g}>
                    {currentCurriculum === 'cambridge'
                      ? `Stage ${g} (Primary ${g})`
                      : currentCurriculum === 'singapore'
                      ? `Primary ${g} (P${g})`
                      : `Kelas ${g} SD`}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Mata Pelajaran:</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value as SubjectId)}
              className="w-full rounded-xl border border-slate-200 bg-white p-2.5 font-medium text-slate-700 focus:border-amber-400 focus:outline-hidden"
            >
              {subjects.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.icon} {s.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Jumlah Soal:</label>
            <select
              value={questionCount}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
              className="w-full rounded-xl border border-slate-200 bg-white p-2.5 font-medium text-slate-700 focus:border-amber-400 focus:outline-hidden"
            >
              <option value={5}>5 Soal</option>
              <option value={10}>10 Soal</option>
              <option value={15}>15 Soal</option>
              <option value={20}>20 Soal</option>
              <option value={25}>25 Soal</option>
              <option value={30}>30 Soal</option>
              <option value={40}>40 Soal</option>
              <option value={50}>50 Soal (Lengkap)</option>
              <option value={100}>100 Soal (Paket Lengkap Semester)</option>
            </select>
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Kunci Jawaban:</label>
            <label className="flex items-center gap-2 border border-slate-200 rounded-xl p-2.5 bg-white cursor-pointer select-none">
              <input
                type="checkbox"
                checked={includeAnswerKey}
                onChange={(e) => setIncludeAnswerKey(e.target.checked)}
                className="rounded text-amber-500 focus:ring-0"
              />
              <span className="font-medium text-slate-700">Sertakan Kunci & Pembahasan</span>
            </label>
          </div>
        </div>
      </div>

      {/* Printable Sheet Canvas */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-10 shadow-sm border border-slate-200 print:border-none print:shadow-none print:p-0 print:m-0 text-slate-900 font-sans w-full max-w-full overflow-hidden">
        {/* Kop Lembar Kerja */}
        <div className="border-b-2 border-slate-900 pb-3 sm:pb-4 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-2">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-600 block">
                {kopCurriculumLabel}
              </span>
              <h2 className="font-display text-lg sm:text-2xl font-black text-slate-900 uppercase">
                {worksheetTitle}
              </h2>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs sm:text-sm font-bold text-slate-800 block">{meta.name}</span>
              <span className="text-[11px] sm:text-xs text-slate-600">
                {gradeBadgeLabel} ({worksheetQuestions.length} Soal)
              </span>
            </div>
          </div>

          {/* Student Identity Box */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-dashed border-slate-300 text-xs">
            <div>
              <span className="font-semibold text-slate-600">Nama Siswa / Name :</span>
              <div className="border-b border-dotted border-slate-400 h-5" />
            </div>
            <div>
              <span className="font-semibold text-slate-600">Kelas / Class :</span>
              <div className="border-b border-dotted border-slate-400 h-5" />
            </div>
            <div>
              <span className="font-semibold text-slate-600">Hari / Date :</span>
              <div className="border-b border-dotted border-slate-400 h-5" />
            </div>
            <div>
              <span className="font-semibold text-slate-600">Nilai / Score :</span>
              <div className="border-b border-dotted border-slate-400 h-5" />
            </div>
          </div>
        </div>

        {/* Petunjuk Pengerjaan */}
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs mb-6 text-slate-700">
          <p className="font-bold mb-1">Instructions / Petunjuk Pengerjaan:</p>
          <ul className="list-disc list-inside space-y-0.5 text-[11px]">
            <li>Read each question carefully before choosing your answer.</li>
            <li>Berikan tanda silang (X) atau bulatkan huruf A, B, C, atau D pada pilihan yang paling tepat.</li>
          </ul>
        </div>

        {/* Question List */}
        <div className="space-y-5">
          {worksheetQuestions.map((q, idx) => (
            <div key={q.id} className="text-xs sm:text-sm break-inside-avoid">
              <div className="flex items-start gap-2 mb-2 font-medium">
                <span className="font-bold text-slate-900 w-5 shrink-0">{idx + 1}.</span>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-slate-900 leading-snug">{q.question}</p>
                    <span className="print:hidden shrink-0">
                      <ReadAloudButton
                        text={q.question}
                        options={q.options}
                        curriculum={q.curriculum || currentCurriculum}
                        subject={q.subject}
                        size="sm"
                        variant="ghost"
                        showBadge={true}
                        title="Dengarkan soal & pilihan"
                      />
                    </span>
                  </div>
                  {(q.imageKey || q.imageUrl) && (
                    <div id={`q-illus-${q.id}`} data-qid={q.id} className="my-2 max-w-sm">
                      <QuestionIllustration
                        imageKey={q.imageKey}
                        imageCaption={q.imageCaption}
                        imageUrl={q.imageUrl}
                        isPrint={true}
                        className="my-1 max-w-sm"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Multiple Choice Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 ml-7 text-xs text-slate-700">
                {q.options.map((opt, optIdx) => (
                  <div key={optIdx} className="flex items-center gap-1.5">
                    <span className="font-bold text-slate-900 w-4">
                      {String.fromCharCode(65 + optIdx)}.
                    </span>
                    <span>{opt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Lembar Kunci Jawaban & Penjelasan Terpisah (Jika dicentang) */}
        {includeAnswerKey && (
          <div className="mt-12 pt-8 border-t-2 border-dashed border-slate-300 break-before-page">
            <div className="text-center mb-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                {kopCurriculumLabel}
              </span>
              <h3 className="font-display text-base sm:text-xl font-black text-slate-900 uppercase">
                Kunci Jawaban & Panduan Pembahasan Guru / Orang Tua
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                {meta.name} • {gradeBadgeLabel}
              </p>
            </div>

            {/* Answer Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
              {worksheetQuestions.map((q, idx) => (
                <div
                  key={q.id}
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs"
                >
                  <span className="font-semibold text-slate-500">No. {idx + 1}</span>
                  <span className="font-black text-amber-700">
                    {String.fromCharCode(65 + q.correctIndex)}
                  </span>
                </div>
              ))}
            </div>

            {/* Detailed Explanations */}
            <div className="space-y-2 text-xs">
              <p className="font-bold text-slate-800 border-b pb-1">Rincian Pembahasan Soal:</p>
              {worksheetQuestions.map((q, idx) => (
                <div key={q.id} className="p-2 rounded-lg bg-amber-50/50 border border-amber-200/50">
                  <span className="font-bold text-amber-900 mr-1.5">
                    {idx + 1}. ({String.fromCharCode(65 + q.correctIndex)})
                  </span>
                  <span className="text-slate-700">{q.explanation}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Official Pintaria Watermark */}
        <div className="mt-8 pt-4 border-t border-slate-300 text-center text-[10px] text-slate-500 font-medium">
          © PINTARIA. Seluruh hak dilindungi. Dilarang memperjualbelikan, menggandakan, membagikan, atau mendistribusikan produk ini tanpa izin
        </div>
      </div>
    </div>
  );
};
