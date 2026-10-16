import NewsList from "@/components/news-list";
import { getNewsForYear, getAvailableNewsYears, getAvailableNewsMonths } from "@/lib/news";
import Link from "next/link";
import { Suspense } from "react";

interface PageParams {
    params: Promise<{
        filter: string[];
    }>;
}

async function FilteredNews({ params }: { params: Promise<{ filter: string[] }> }) {
    const { filter } = await params;

    const selectedYear = filter?.[0];
    const selectedMonth = filter?.[1];

    let news;
    let links = getAvailableNewsYears();

    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);
    }

    let newsContent = <p>No news for the selected period.</p>;

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />
    }

    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {links.map(link => <li key={link}> <Link href={`/archive/${link}`}>{link}</Link> </li>)}
                    </ul>
                </nav>
            </header>

            {newsContent}
        </>
    );
}

export default function FilteredNewsPage({ params }: PageParams) {
    return (
        <Suspense fallback={<p>Loading news...</p>}>
            <FilteredNews params={params} />
        </Suspense>
    );
}
