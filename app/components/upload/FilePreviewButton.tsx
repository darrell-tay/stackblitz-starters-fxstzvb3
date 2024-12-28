interface FilePreviewButtonProps {
  onClick: () => void;
}

export default function FilePreviewButton({ onClick }: FilePreviewButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="px-3 py-1 bg-dodger text-white rounded hover:brightness-90 transition-all"
    >
      Preview
    </button>
  );
}