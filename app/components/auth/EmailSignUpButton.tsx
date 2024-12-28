'use client';

interface EmailSignUpButtonProps {
  onClick: () => void;
  visible: boolean;
}

export default function EmailSignUpButton({ onClick, visible }: EmailSignUpButtonProps) {
  if (!visible) return null;
  
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center bg-ice text-black px-4 py-2.5 rounded-md hover:brightness-95 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"
    >
      <span className="font-normal">Register with email</span>
    </button>
  );
}