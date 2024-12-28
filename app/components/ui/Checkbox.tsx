'use client';

import { forwardRef } from 'react';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: React.ReactNode;
  error?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label className="flex items-start space-x-2">
          <input
            type="checkbox"
            ref={ref}
            className="mt-1 rounded border-gray-300 text-dodger focus:ring-dodger"
            {...props}
          />
          <span className="text-sm text-gray-700">{label}</span>
        </label>
        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;