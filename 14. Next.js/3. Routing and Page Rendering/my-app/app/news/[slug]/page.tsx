import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { Suspense } from "react";

interface PageParams {
  params: Promise<{
    slug: string;
  }>;
}

async function NewsContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsItem) {
    return <p>Notícia não encontrada!</p>;
  }

  return (
    <article className="news-article">
      <header>
        <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={125} height={125} />
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
