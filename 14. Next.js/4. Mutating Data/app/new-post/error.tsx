'use client';

export default function NewPostError({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  const message = error instanceof Error ? error.message : 'Unknown error';

  return (
    <>
      <h2>An error occurred!</h2>
      <p>Unfortunately, something went wrong.</p>
      <p>{message}</p>
      <button onClick={() => retry()}>Try again</button>
    </>
  );
}
