'use client';

import Link from 'next/link';
import { useState } from 'react';
import SignUpModal from '../auth/SignUpModal';
import SignInModal from '../auth/signin/SignInModal';

export default function NavLinks() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  return (
    <>
      <div className="flex items-center space-x-4">
        <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
          Pricing
        </Link>
        <button
          onClick={() => setIsSignInOpen(true)}
          className="text-gray-700 hover:text-gray-900"
        >
          Sign In
        </button>
        <button
          onClick={() => setIsSignUpOpen(true)}
          className="bg-dodger text-white px-4 py-2 rounded-md hover:brightness-90 transition-all"
        >
          Sign Up
        </button>
      </div>

      <SignUpModal 
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
      />
      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
      />
    </>
  );
}