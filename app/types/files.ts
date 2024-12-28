export type FileStatus = 'idle' | 'processing' | 'completed' | 'error';

export interface UploadedFile {
  id: string;
  file: File;
  status: FileStatus;
}