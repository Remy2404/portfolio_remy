import { useCallback } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const usePDFDownload = () => {
  const downloadPDF = useCallback(async (elementId: string, filename: string = 'resume.pdf') => {
    try {
      const element = document.getElementById(elementId);
      if (!element) {
        console.error('Element not found');
        return;
      }

      // Configure html2canvas options for better quality
      const canvas = await html2canvas(element, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: element.scrollWidth,
        height: element.scrollHeight,
      });

      const imgData = canvas.toDataURL('image/png');
      
      // Calculate PDF dimensions
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      
      // Calculate scaling to fit the page
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const scaledWidth = imgWidth * ratio;
      const scaledHeight = imgHeight * ratio;

      // Center the image
      const x = (pdfWidth - scaledWidth) / 2;
      const y = (pdfHeight - scaledHeight) / 2;

      pdf.addImage(imgData, 'PNG', x, y, scaledWidth, scaledHeight);
      
      // Save the PDF
      pdf.save(filename);
      
      return true;
    } catch (error) {
      console.error('Error generating PDF:', error);
      return false;
    }
  }, []);

  const downloadFromExistingPDF = useCallback(async (pdfUrl: string, filename: string = 'resume.pdf') => {
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      return true;
    } catch (error) {
      console.error('Error downloading PDF:', error);
      return false;
    }
  }, []);

  return {
    downloadPDF,
    downloadFromExistingPDF,
  };
};
