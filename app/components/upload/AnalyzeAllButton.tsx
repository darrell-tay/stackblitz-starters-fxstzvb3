interface AnalyzeAllButtonProps {
  onClick: () => void;
}

export default function AnalyzeAllButton({ onClick }: AnalyzeAllButtonProps) {
  return (
    <div className="flex justify-end">
      <button
        onClick={onClick}
        className="px-4 py-2 bg-dodger text-white rounded-md hover:brightness-90 transition-all font-medium"
      >
        Analyze All
      </button>
    </div>
  );
}