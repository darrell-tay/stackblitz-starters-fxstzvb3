'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema } from '../../../utils/validations';
import Input from '../../ui/Input';
import type { SignInFormData } from '../../../types/auth';

interface EmailSignInFormProps {
  onSuccess: () => void;
}

export default function EmailSignInForm({ onSuccess }: EmailSignInFormProps) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema)
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      // Handle sign-in logic
      console.log('Sign in data:', data);
      onSuccess();
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
      
      <div className="flex justify-end">
        <button
          type="button"
          className="text-sm text-dodger hover:underline"
          onClick={() => console.log('Forgot password clicked')}
        >
          Forgot Password?
        </button>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-dodger text-white py-2 px-4 rounded-md hover:brightness-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  );
}