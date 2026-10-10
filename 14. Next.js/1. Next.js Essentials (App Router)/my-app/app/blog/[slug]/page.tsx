import { Suspense } from "react";

export default function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
    return (
        <main className="flex flex-col justify-center items-center my-20">
            <h1 className="font-bold text-2xl">Blog Post</h1>

            <p className="my-20">
                <Suspense fallback={<span>Loading…</span>}>
                    <BlogSlug params={params} />
                </Suspense>
            </p>
        </main>
    );
}

async function BlogSlug({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <>{slug}</>;
}