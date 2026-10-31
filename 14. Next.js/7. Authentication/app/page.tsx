import AuthForm from '@/components/auth-form';
import { Suspense } from 'react';

type HomeProps = {
  searchParams: Promise<{ mode?: string | string[] }>;
};

export default function Home({ searchParams }: HomeProps) {
  return (
    <Suspense fallback={<p>Loading authentication form...</p>}>
      <AuthPage searchParams={searchParams} />
    </Suspense>
  );
}

async function AuthPage({ searchParams }: HomeProps) {
  const { mode } = await searchParams;
  const formMode = mode === 'singup' ? 'singup' : 'login';

  return <AuthForm mode={formMode} />;
}
