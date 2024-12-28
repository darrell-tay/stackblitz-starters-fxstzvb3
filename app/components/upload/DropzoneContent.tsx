import UploadIcon from './UploadIcon';
import UploadButton from './UploadButton';
import LoadingState from '../ui/LoadingState';

interface DropzoneContentProps {
  isDragActive: boolean;
  isUploading: boolean;
  filesCount: number;
  maxFiles: number;
}

export default function DropzoneContent({ 
  isDragActive, 
  isUploading,
  filesCount,
  maxFiles
}: DropzoneContentProps) {
  const remainingFiles = maxFiles - filesCount;

  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        {isUploading ? <LoadingState /> : <UploadIcon />}
      </div>
      <div>
        {isDragActive ? (
          <p className="text-lg text-dodger">Drop your PDFs here</p>
        ) : (
          <div className="space-y-2">
            <UploadButton />
            <p className="text-sm text-gray-500">
              or drop your PDFs here ({remainingFiles} remaining)
            </p>
          </div>
        )}
      </div>
    </div>
  );
}