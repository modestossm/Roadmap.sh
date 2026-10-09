import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />

      <p><Link href="/about"> About Us </Link></p>
    </div>
  );
}
