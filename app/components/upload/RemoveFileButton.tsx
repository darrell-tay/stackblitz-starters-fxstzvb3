interface RemoveFileButtonProps {
  onRemove: () => void;
}

export default function RemoveFileButton({ onRemove }: RemoveFileButtonProps) {
  return (
    <button 
      onClick={onRemove} 
      className="p-1 hover:bg-dodger/10 rounded transition-colors"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  );
}