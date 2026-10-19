import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";

export default function ImagePage({ params }: { params: Promise<{ slug: string }> }) {
    return (
        <Suspense fallback={<p>Carregando imagem...</p>}>
            <ImageContent params={params} />
        </Suspense>
    );
}

async function ImageContent({ params }: { params: Promise<{ slug: string }> }) {
    const { slug: newsItemSlug } = await params;

    const newsItem = DUMMY_NEWS.find((item) => item.slug === newsItemSlug);

    if (!newsItem) {
        notFound();
    }

    return (
        <div className="fullscreen-image">
            <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={800} height={800} />
        </div>
    );
}
