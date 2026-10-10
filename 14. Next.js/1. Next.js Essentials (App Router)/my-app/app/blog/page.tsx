import Link from "next/link";

export default function BlogPage() {
    return (
        <main className="flex flex-col justify-center items-center my-20">
            <h1 className="mb-10 font-bold text-2xl" >The Blog</h1>
            <p className="my-2"><Link href="/blog/post-1"> Post 1 </Link></p>
            <p className="my-2"><Link href="/blog/post-2"> Post 2 </Link></p>
        </main>
    );
}