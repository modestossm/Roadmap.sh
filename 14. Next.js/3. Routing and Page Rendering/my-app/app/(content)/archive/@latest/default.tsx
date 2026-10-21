import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default async function LatestNews() {
    const latest = await getLatestNews();
    return (
        <>
            <h1>Latest News Page</h1>
            <NewsList news={latest}/>
        </>
    );
}
