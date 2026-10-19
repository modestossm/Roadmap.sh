"use client";

import { ReactNode, useEffect, useState } from "react";
import NewsList, { type NewsItem } from "@/components/news-list";

export default function NewsPage() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [news, setNews] = useState<NewsItem[] | null>(null);

    useEffect(() => {
        async function fetchNews() {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch("http://localhost:8080/news");

                if (!response.ok) {
                    setError("Failed to fetch news.");
                    return;
                }

                const data: NewsItem[] = await response.json();
                setNews(data);
            } catch {
                setError("Failed to fetch news.");
            } finally {
                setIsLoading(false);
            }
        }

        fetchNews();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    let newsContent: ReactNode = null;

    if (news) {
        newsContent = <NewsList news={news}/>
    }

    return (
        <>
            <h1>News Page</h1>
            {newsContent}
        </>
    );
}
