import { UploadedFile } from '../../types/files';
import FileListItem from './FileListItem';

interface FileListProps {
  files: UploadedFile[];
  onRemove: (fileId: string) => void;
  showAnalyzeButtons?: boolean;
}

export default function FileList({ 
  files, 
  onRemove,
  showAnalyzeButtons = true
}: FileListProps) {
  return (
    <div className="space-y-2">
      {files.map(file => (
        <FileListItem
          key={file.id}
          file={file}
          onRemove={() => onRemove(file.id)}
          showAnalyzeButton={showAnalyzeButtons}
        />
      ))}
    </div>
  );
}