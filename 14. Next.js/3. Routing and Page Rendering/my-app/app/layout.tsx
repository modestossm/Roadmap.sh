import { ReactNode } from 'react';
import MainHeader from '@/components/mainHeader';
import './globals.css';

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
}

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        <div id="page">
          {children}
        </div>
      </body>
    </html>
  )
}
