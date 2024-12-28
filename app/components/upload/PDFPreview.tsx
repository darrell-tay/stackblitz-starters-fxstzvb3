'use client';

interface PDFPreviewProps {
  content: string;
}

export default function PDFPreview({ content }: PDFPreviewProps) {
  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold mb-2">PDF Preview</h3>
      <pre className="whitespace-pre-wrap font-mono text-sm bg-gray-50 p-4 rounded">
        {content}
      </pre>
    </div>
  );
}