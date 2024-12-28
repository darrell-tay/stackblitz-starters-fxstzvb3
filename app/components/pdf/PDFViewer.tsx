import { useState, useEffect } from 'react';

interface PDFViewerProps {
  file: File;
  onClose?: () => void;
}

export default function PDFViewer({ file, onClose }: PDFViewerProps) {
  const [objectUrl, setObjectUrl] = useState<string>('');

  useEffect(() => {
    const url = URL.createObjectURL(file);
    setObjectUrl(url);
    
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file]);

  if (!objectUrl) {
    return (
      <div className="w-full h-[600px] bg-gray-50 rounded-lg flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-dodger border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="w-full h-[600px] bg-gray-50 rounded-lg">
      <object
        data={objectUrl}
        type="application/pdf"
        className="w-full h-full"
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <p className="text-gray-600 mb-2">
              Unable to display PDF. Please download to view.
            </p>
            <a
              href={objectUrl}
              download={file.name}
              className="text-dodger hover:underline"
            >
              Download PDF
            </a>
          </div>
        </div>
      </object>
    </div>
  );
}