import { Suspense } from "react";
import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default function NewsPage() {
    return (
        <>
            <h1>News Page</h1>
            <Suspense fallback={<p>Loading news...</p>}>
                <NewsContent />
            </Suspense>
        </>
    );
}

async function NewsContent() {
    const news = await getAllNews();

    return <NewsList news={news} />;
}
