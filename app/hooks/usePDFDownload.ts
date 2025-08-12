import { useCallback } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas-pro';

export const usePDFDownload = () => {
  const downloadPDF = useCallback(async (elementId: string, filename: string = 'document.pdf') => {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error('Element not found:', elementId);
      return false;
    }

    try {
      const captureWidth = 962;
      const captureHeight = 2904;

      // Calculate offsets to center the capture area
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const xOffset = (windowWidth - captureWidth) / 2;
      const yOffset = (windowHeight - captureHeight) / 2;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: captureWidth,
        height: captureHeight,
        x: xOffset > 0 ? xOffset : 0, // Apply x offset, ensure it's not negative
        y: yOffset > 0 ? yOffset : 0, // Apply y offset, ensure it's not negative
      });

      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const scaledWidth = imgWidth * ratio;
      const scaledHeight = imgHeight * ratio;

      const x = (pdfWidth - scaledWidth) / 2;
      const y = (pdfHeight - scaledHeight) / 2;

      pdf.addImage(imgData, 'PNG', x, y, scaledWidth, scaledHeight);
      pdf.save(filename);

      return true;
    } catch (error) {
      console.error('An error occurred during PDF generation:', error);
      return false;
    }
  }, []);

  return { downloadPDF };
};