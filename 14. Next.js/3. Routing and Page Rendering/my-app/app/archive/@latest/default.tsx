import { getLatestNews } from "@/lib/news";
import Link from "next/link";

export default function Default() {
    const latest = getLatestNews();
    return (
        <>
            <h1>Latest News Page</h1>

            <ul>
                {latest.map(last => (
                    <li key={last.id}>
                        <Link href={`/news/${last.slug}`}>{last.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
