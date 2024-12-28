'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import DropzoneContent from './upload/DropzoneContent';
import FileList from './upload/FileList';
import { UploadedFile } from '../types/files';
import AnalyzeAllButton from './upload/AnalyzeAllButton';
import Toast from './ui/Toast';
import { useToast } from '../hooks/useToast';
import { validateFileUpload, MAX_FILES } from '../utils/fileValidation';

export default function FileUpload() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const { toast, showToast, hideToast } = useToast();

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const validation = validateFileUpload(files.length, acceptedFiles.length);
    
    if (!validation.isValid) {
      showToast(validation.message!, 'error');
      return;
    }

    setIsUploading(true);
    await new Promise(resolve => setTimeout(resolve, 900));
    
    const newFiles = acceptedFiles.map(file => ({
      id: crypto.randomUUID(),
      file,
      status: 'idle' as const
    }));
    
    setFiles(prev => [...prev, ...newFiles]);
    setIsUploading(false);
  }, [files.length, showToast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
    },
    maxFiles: MAX_FILES,
    multiple: true,
    noClick: files.length >= MAX_FILES
  });

  const handleRemoveFile = (fileId: string) => {
    setFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const handleAnalyzeAll = () => {
    // Handle analyzing all files
    console.log('Analyzing all files:', files);
  };

  return (
    <div className="space-y-4">
      {files.length > 0 && (
        <>
          <FileList 
            files={files} 
            onRemove={handleRemoveFile} 
            showAnalyzeButtons={files.length === 1}
          />
          {files.length > 1 && (
            <AnalyzeAllButton onClick={handleAnalyzeAll} />
          )}
        </>
      )}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed border-dodger/30 rounded-lg p-12 text-center bg-ice cursor-pointer hover:border-dodger/50 transition-colors ${
          files.length >= MAX_FILES ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <input {...getInputProps()} />
        <DropzoneContent 
          isDragActive={isDragActive} 
          isUploading={isUploading}
          filesCount={files.length}
          maxFiles={MAX_FILES}
        />
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />
      )}
    </div>
  );
}