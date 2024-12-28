'use client';

import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type?: 'error' | 'warning' | 'success';
  duration?: number;
  onClose: () => void;
}

export default function Toast({ 
  message, 
  type = 'error',
  duration = 3000,
  onClose 
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bgColor = {
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    success: 'bg-green-500'
  }[type];

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg`}>
      {message}
    </div>
  );
}