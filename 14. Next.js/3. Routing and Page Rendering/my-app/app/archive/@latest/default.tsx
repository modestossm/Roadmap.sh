import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";
import Link from "next/link";

export default function Default() {
    const latest = getLatestNews();
    return (
        <>
            <h1>Latest News Page</h1>

            <ul>
                {latest.map(last => (
                    <Link key={last.id}> {last} </Link>
                ))}
            </ul>
        </>
    );
}
