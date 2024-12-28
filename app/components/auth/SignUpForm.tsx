'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from '../../utils/validations';
import type { SignUpFormData } from '../../types/auth';
import Input from '../ui/Input';
import Checkbox from '../ui/Checkbox';

interface SignUpFormProps {
  onClose: () => void;
}

export default function SignUpForm({ onClose }: SignUpFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema)
  });

  const onSubmit = async (data: SignUpFormData) => {
    setIsLoading(true);
    try {
      // Handle form submission
      console.log('Form data:', data);
      onClose();
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Full Name"
        {...register('fullName')}
        error={errors.fullName?.message}
      />
      
      <Input
        label="Email"
        type="email"
        {...register('email')}
        error={errors.email?.message}
      />
      
      <Input
        label="Password"
        type="password"
        {...register('password')}
        error={errors.password?.message}
      />
      
      <Input
        label="Confirm Password"
        type="password"
        {...register('confirmPassword')}
        error={errors.confirmPassword?.message}
      />
      
      <Checkbox
        label={
          <span>
            I agree to the{' '}
            <a href="/terms" className="text-dodger hover:underline">Terms of Service</a>
            {' '}and{' '}
            <a href="/privacy" className="text-dodger hover:underline">Privacy Policy</a>
          </span>
        }
        {...register('acceptTerms')}
        error={errors.acceptTerms?.message}
      />
      
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-dodger text-white py-2 px-4 rounded-md hover:brightness-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Creating Account...' : 'Create Account'}
      </button>
    </form>
  );
}