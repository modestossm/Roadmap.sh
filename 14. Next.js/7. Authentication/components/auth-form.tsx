"use client";

import Link from 'next/link';
import { useActionState } from 'react';
import { auth } from '@/actions/authActions';
import Image from 'next/image';

type AuthFormProps = {
  mode: 'login' | 'singup';
};

export default function AuthForm({ mode }: AuthFormProps) {
  const [formState, formAction] = useActionState(auth.bind(null, mode), { errors: {} as Record<string, string> })

  return (
    <form id="auth-form" action={formAction}>
      <div>
        <Image src="/images/auth-icon.jpg" alt="A lock icon" width={100} height={100}/>
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>

      {formState.errors && ( <ul id='form-errors'>
        {Object.keys(formState.errors).map((error) => (
          <li key={error}> {formState.errors[error]} </li>
        ))}
      </ul> )}

      <p>
        <button type="submit">
          {mode === "login" ? "Login" : "Create Account"}
        </button>
      </p>
      <p>
        {mode === 'login' && <Link href="/?mode=singup">Create an account.</Link>}
        {mode === 'singup' && <Link href="/?mode=login">Login with existing account.</Link>}
      </p>
    </form>
  );
}
