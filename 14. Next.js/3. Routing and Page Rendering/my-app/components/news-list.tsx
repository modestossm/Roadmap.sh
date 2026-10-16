import Link from "next/link";
import Image from "next/image";

interface NewsItem {
    id: string;
    slug: string;
    title: string;
    image: string;
    date: string;
    content: string;
}

interface NewsListProps {
    news: NewsItem[];
}

export default function NewsList({ news }: NewsListProps) {
    return (
        <ul className="news-list">
            {news.map((newsItem) => (
                <li key={newsItem.id}>
                    <Link href={`/news/${newsItem.slug}`}> 
                        <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={150} height={150} /> 
                        <span>{newsItem.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
