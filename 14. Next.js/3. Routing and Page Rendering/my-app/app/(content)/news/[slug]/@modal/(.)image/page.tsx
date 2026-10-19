import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";
import ModalBackdrop from "./modal-backdrop";

export default function InterceptedImagePage({ params }: { params: Promise<{ slug: string }> }) {
    return (
        <Suspense fallback={<p>Carregando imagem...</p>}>
            <ImageContent params={params} />
        </Suspense>
    );
}

async function ImageContent({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

    if (!newsItem) {
        notFound();
    }

    return (
        <ModalBackdrop>
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} fill sizes="100vw" style={{ objectFit: "contain" }}/>
                </div>
            </dialog>
        </ModalBackdrop>
    );
}
