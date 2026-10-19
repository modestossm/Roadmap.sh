import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default function LatestNews() {
    const latest = getLatestNews();
    return (
        <>
            <h1>Latest News Page</h1>
            <NewsList news={latest}/>
        </>
    );
}
