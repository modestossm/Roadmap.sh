"use client";

interface FilterErrorProps {
    error: Error & { digest?: string };
    retry: () => void;
}

export default function FilterError({ error, retry }: FilterErrorProps) {
    return (
        <div id="error">
            <h2>An error occurred!</h2>
            <p>{error.message}</p>
            <button onClick={() => retry()}>Try again</button>
        </div>
    );
}
