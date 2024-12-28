export const MAX_FILES = 8;

export function validateFileUpload(currentFiles: number, newFiles: number): {
  isValid: boolean;
  message?: string;
} {
  const totalFiles = currentFiles + newFiles;
  
  if (totalFiles > MAX_FILES) {
    return {
      isValid: false,
      message: `Upload limit reached. Maximum ${MAX_FILES} files allowed.`
    };
  }

  return { isValid: true };
}