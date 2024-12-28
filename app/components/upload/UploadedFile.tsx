interface UploadedFileProps {
  fileName: string;
  onRemove: () => void;
}

export default function UploadedFile({ fileName, onRemove }: UploadedFileProps) {
  return (
    <div className="flex items-center justify-between bg-ice text-gray-800 px-4 py-3 rounded-lg">
      <div className="flex items-center space-x-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span>{fileName}</span>
      </div>
      <div className="flex items-center space-x-2">
        <button className="px-3 py-1 bg-dodger text-white rounded hover:brightness-90 transition-all">
          Preview
        </button>
        <button className="px-3 py-1 bg-dodger text-white rounded hover:brightness-90 transition-all">
          Analyze
        </button>
        <button onClick={onRemove} className="p-1 hover:bg-dodger/10 rounded transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}