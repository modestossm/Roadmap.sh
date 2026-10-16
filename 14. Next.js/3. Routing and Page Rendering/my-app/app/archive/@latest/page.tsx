import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";
import Link from "next/link";

export default function Default() {
    const latest = getLatestNews();
    return (
        <>
            <h1>Latest News Page</h1>
            <NewsList news={latest}/>
        </>
    );
}
