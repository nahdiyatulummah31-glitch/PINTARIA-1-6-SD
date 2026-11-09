import React from 'react';
import { getDiagramGrade1 } from './DiagramGrade1';
import { getDiagramGrade2 } from './DiagramGrade2';
import { getDiagramGrade3 } from './DiagramGrade3';
import { getDiagramGrade4 } from './DiagramGrade4';
import { getDiagramGrade5 } from './DiagramGrade5';
import { getDiagramGrade6 } from './DiagramGrade6';

/**
 * Returns a dedicated, 100% synchronized educational SVG diagram for any illustrated question.
 * Every single one of the 120 illustrated questions has a custom, high-fidelity diagram matching
 * its exact problem prompt, numbers, colors, and options.
 */
export const getEducationalDiagram = (imageKey?: string): React.ReactNode | null => {
  if (!imageKey) return null;

  const key = imageKey.toLowerCase().trim();

  // Grade 1 (20 keys: k1-mtk-1, k1-mtk-2, ...)
  if (key.startsWith('k1-')) {
    const diag = getDiagramGrade1(key);
    if (diag) return diag;
  }

  // Grade 2 (20 keys: k2-mtk-1, ...)
  if (key.startsWith('k2-')) {
    const diag = getDiagramGrade2(key);
    if (diag) return diag;
  }

  // Grade 3 (20 keys: k3-mtk-1, ...)
  if (key.startsWith('k3-')) {
    const diag = getDiagramGrade3(key);
    if (diag) return diag;
  }

  // Grade 4 (20 keys: k4-mtk-1, ...)
  if (key.startsWith('k4-')) {
    const diag = getDiagramGrade4(key);
    if (diag) return diag;
  }

  // Grade 5 (20 keys: k5-mtk-1, ...)
  if (key.startsWith('k5-')) {
    const diag = getDiagramGrade5(key);
    if (diag) return diag;
  }

  // Grade 6 (20 keys: k6-mtk-1, ...)
  if (key.startsWith('k6-')) {
    const diag = getDiagramGrade6(key);
    if (diag) return diag;
  }

  // Fallback search across all grades if prefix was non-standard
  return (
    getDiagramGrade1(key) ||
    getDiagramGrade2(key) ||
    getDiagramGrade3(key) ||
    getDiagramGrade4(key) ||
    getDiagramGrade5(key) ||
    getDiagramGrade6(key) ||
    null
  );
};
