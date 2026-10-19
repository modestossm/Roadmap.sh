import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

interface PageParams {
  params: Promise<{
    slug: string;
  }>;
}

async function NewsContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsItem) {
      notFound();
  }

  return (
    <article className="news-article">
      <header> 
        <Link href={`/news/${newsItem.slug}/image`}>
          <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={125} height={125} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}

export default function NewsPage({ params }: PageParams) {
  return (
    <Suspense fallback={<p>Carregando notícia...</p>}>
      <NewsContent params={params} />
    </Suspense>
  );
}
