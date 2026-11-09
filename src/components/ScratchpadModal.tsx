import React, { useRef, useState, useEffect } from 'react';
import { Eraser, RotateCcw, X, PenTool } from 'lucide-react';

interface ScratchpadProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScratchpadModal: React.FC<ScratchpadProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState<'pen' | 'eraser'>('pen');
  const [color, setColor] = useState('#1e293b');
  const [brushSize, setBrushSize] = useState(3);

  useEffect(() => {
    if (!isOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match display
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Draw graph paper grid background
    drawGrid(ctx, rect.width, rect.height);
  }, [isOpen]);

  const drawGrid = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.fillStyle = '#fefce8'; // soft warm light paper
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = 'rgba(217, 119, 6, 0.12)';
    ctx.lineWidth = 1;
    const step = 24;

    for (let x = 0; x < width; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    drawGrid(ctx, rect.width, rect.height);
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    if (tool === 'pen') {
      ctx.strokeStyle = color;
      ctx.lineWidth = brushSize;
    } else {
      ctx.strokeStyle = '#fefce8';
      ctx.lineWidth = brushSize * 4;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
      <div className="flex h-[88vh] w-full max-w-3xl flex-col rounded-3xl border-3 border-amber-300 bg-white shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-amber-200 bg-amber-50 px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400 text-slate-900 font-bold shadow-xs">
              ✏️
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-slate-800">
                Papan Coret-Coret Pintar
              </h3>
              <p className="text-xs text-slate-500">
                Gunakan untuk oret-oretan hitung susun atau coretan rumus
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={clearCanvas}
              className="flex items-center gap-1.5 rounded-xl border border-amber-300 bg-amber-100/70 px-3 py-1.5 text-xs font-semibold text-amber-900 hover:bg-amber-200 active:scale-95 transition-all"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Bersihkan</span>
            </button>
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-200 text-slate-700 hover:bg-slate-300 active:scale-95 transition-all"
              aria-label="Tutup"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Canvas area */}
        <div className="relative flex-1 bg-amber-50/40">
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="h-full w-full touch-none cursor-crosshair"
          />
        </div>

        {/* Toolbar Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-amber-200 bg-amber-50/70 px-5 py-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTool('pen')}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                tool === 'pen'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <PenTool className="h-3.5 w-3.5" />
              <span>Pensil</span>
            </button>

            <button
              onClick={() => setTool('eraser')}
              className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                tool === 'eraser'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Eraser className="h-3.5 w-3.5" />
              <span>Penghapus</span>
            </button>

            {tool === 'pen' && (
              <div className="ml-2 flex items-center gap-1.5 border-l border-amber-200 pl-3">
                {[
                  { hex: '#1e293b', label: 'Hitam' },
                  { hex: '#2563eb', label: 'Biru' },
                  { hex: '#dc2626', label: 'Merah' },
                  { hex: '#16a34a', label: 'Hijau' },
                  { hex: '#d97706', label: 'Oranye' },
                ].map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => setColor(c.hex)}
                    style={{ backgroundColor: c.hex }}
                    aria-label={c.label}
                    className={`h-6 w-6 rounded-full transition-transform ${
                      color === c.hex ? 'ring-2 ring-amber-400 ring-offset-2 scale-110' : 'opacity-80 hover:opacity-100'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-600 font-medium">Ketebalan:</span>
            <input
              type="range"
              min="2"
              max="12"
              value={brushSize}
              onChange={(e) => setBrushSize(Number(e.target.value))}
              className="h-1.5 w-24 cursor-pointer accent-amber-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
