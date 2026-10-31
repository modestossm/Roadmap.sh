import { verifyAuth } from '@/lib/auth';
import { getTrainings } from '@/lib/training';
import { redirect } from 'next/navigation';
import { connection } from 'next/server';
import Image from 'next/image';
import { Suspense } from 'react';

export default function TrainingPage() {
  return (
    <Suspense fallback={<main><p>Loading your trainings...</p></main>}>
      <TrainingContent />
    </Suspense>
  );
}

async function TrainingContent() {
  await connection();
  const result = await verifyAuth();

  if (!result.user) {
    redirect('/');
  }

  const trainingSessions = getTrainings();

  return (
    <main>
      <h1>Find your favorite activity</h1>
      <ul id="training-sessions">
        {trainingSessions.map((training) => (
          <li key={training.id}>
            <Image
              src={`/trainings/${training.image.replace(/^\/+/, '')}`}
              alt={training.title}
              width={500}
              height={500}
            />
            <div>
              <h2>{training.title}</h2>
              <p>{training.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
