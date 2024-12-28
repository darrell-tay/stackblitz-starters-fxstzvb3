'use client';

import { useState } from 'react';
import Modal from '../../ui/Modal';
import GoogleSignInButton from './GoogleSignInButton';
import EmailSignInForm from './EmailSignInForm';
import Divider from '../Divider';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignInModal({ isOpen, onClose }: SignInModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Sign In">
      <div className="p-6 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
          <p className="text-gray-600">Sign in to continue</p>
        </div>

        <GoogleSignInButton />
        <Divider text="or" />
        <EmailSignInForm onSuccess={onClose} />
      </div>
    </Modal>
  );
}