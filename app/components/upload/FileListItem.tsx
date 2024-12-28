import { useState } from 'react';
import { UploadedFile } from '../../types/files';
import FilePreviewButton from './FilePreviewButton';
import FileAnalyzeButton from './FileAnalyzeButton';
import RemoveFileButton from './RemoveFileButton';
import PDFPreviewModal from '../pdf/PDFPreviewModal';

interface FileListItemProps {
  file: UploadedFile;
  onRemove: () => void;
  showAnalyzeButton?: boolean;
}

export default function FileListItem({ 
  file, 
  onRemove, 
  showAnalyzeButton = true 
}: FileListItemProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between bg-ice text-gray-800 px-4 py-3 rounded-lg">
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>{file.file.name}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FilePreviewButton onClick={() => setIsPreviewOpen(true)} />
          {showAnalyzeButton && <FileAnalyzeButton />}
          <RemoveFileButton onRemove={onRemove} />
        </div>
      </div>

      <PDFPreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        file={file.file}
      />
    </>
  );
}