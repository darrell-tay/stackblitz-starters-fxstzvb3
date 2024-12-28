import { PDFDocument } from 'pdf-lib';

export async function getPDFPreview(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  const pages = pdfDoc.getPages();
  
  // Get first page text content
  const firstPage = pages[0];
  const { width, height } = firstPage.getSize();
  
  return `PDF Preview - Page 1 of ${pages.length}\nSize: ${width}x${height}`;
}