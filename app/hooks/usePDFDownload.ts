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
      const captureHeight = element.scrollHeight;

      const rect = element.getBoundingClientRect();
      const xOffset = Math.max(0, (rect.width - captureWidth) / 2);
      const yOffset = 0;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: captureWidth,
        height: captureHeight,
        x: xOffset,
        y: yOffset,
      });

      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Scale to fit full PDF width
      const scale = pdfWidth / imgWidth;
      const pageHeightPx = pdfHeight / scale;

      let positionY = 0;
      let pageIndex = 0;

      while (positionY < imgHeight) {
        // Create a temporary canvas for the current slice
        const pageCanvas = document.createElement('canvas');
        const pageCtx = pageCanvas.getContext('2d');
        pageCanvas.width = imgWidth;
        pageCanvas.height = Math.min(pageHeightPx, imgHeight - positionY);

        // Copy part of the big canvas into the page canvas
        if (pageCtx) {
          pageCtx.drawImage(
            canvas,
            0, positionY,               
            imgWidth, pageCanvas.height,
            0, 0,                        
            imgWidth, pageCanvas.height
          );
        } else {
          console.error('Failed to get 2D context for page canvas');
          return false;
        }

        const pageData = pageCanvas.toDataURL('image/png');

        if (pageIndex > 0) pdf.addPage();
        pdf.addImage(pageData, 'PNG', 0, 0, pdfWidth, (pageCanvas.height * scale));

        positionY += pageHeightPx;
        pageIndex++;
      }

      pdf.save(filename);
      return true;
    } catch (error) {
      console.error('An error occurred during PDF generation:', error);
      return false;
    }
  }, []);

  return { downloadPDF };
};
export default usePDFDownload;