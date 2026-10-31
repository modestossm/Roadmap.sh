import '../globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Next Auth',
  description: 'Next.js Authentication',
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header id="auth-header">
        <p>Welcome back!</p>

        <form action="">
          <button>Logout</button>
        </form>
      </header>
      {children}
    </>
  );
}
