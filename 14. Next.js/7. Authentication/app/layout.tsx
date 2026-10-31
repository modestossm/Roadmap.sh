import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Next Auth',
  description: 'Next.js Authentication',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
