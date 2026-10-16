import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

interface PageParams {
    params: Promise<{
        year: string;
    }>;
}

export default async function FilteredNewsPage({ params }: PageParams) {
    const { year } = await params;
    const news = getNewsForYear(year);

    return (
        <NewsList news={news} />
    );
}
