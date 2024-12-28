'use client';

import { useState } from 'react';
import Modal from '../ui/Modal';
import GoogleSignUpButton from './GoogleSignUpButton';
import EmailSignUpButton from './EmailSignUpButton';
import SignUpForm from './SignUpForm';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showEmailButton, setShowEmailButton] = useState(true);

  const handleEmailClick = () => {
    setShowEmailForm(true);
    setShowEmailButton(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Register">
      <div className="p-6 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Register</h2>
          <p className="text-gray-600">
            Increase your limits for free simply by registering.
          </p>
        </div>

        <GoogleSignUpButton />

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">OR</span>
          </div>
        </div>

        <div className="space-y-4">
          <EmailSignUpButton onClick={handleEmailClick} visible={showEmailButton} />
          {showEmailForm && <SignUpForm onClose={onClose} />}
        </div>
      </div>
    </Modal>
  );
}