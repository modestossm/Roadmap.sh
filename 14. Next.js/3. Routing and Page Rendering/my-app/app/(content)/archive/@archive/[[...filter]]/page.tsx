import NewsList from "@/components/news-list";
import { getNewsForYear, getAvailableNewsYears, getAvailableNewsMonths, getNewsForYearAndMonth } from "@/lib/news";
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

    if (selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
        links = [];
    }

    let newsContent = <p>No news for the selected period.</p>;

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />
    }

    if (
        (selectedYear && !getAvailableNewsYears().includes(Number(selectedYear))) || 
        (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(Number(selectedMonth))) 
    ){
        throw new Error("Invalid filter.");
    }

    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {links.map(link => {
                            const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;

                            return (
                            <li key={link}> <Link href={href}>{link}</Link> </li>
                        )})}
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
