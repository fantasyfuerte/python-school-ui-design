import { PythonSVG } from "@/lib/utils";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-backgroundgrey/20">
      <div className="container max-w-[1280px] mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="text-xl font-bold text-text1 flex items-center gap-2"
        >
          <PythonSVG className="h-8 w-8" />
          Python School
        </Link>
        <nav className="hidden sm:flex items-center gap-6">
          <Link
            href="/"
            className="text-text2 hover:text-text1 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/challenges/easy"
            className="text-text2 hover:text-text1 transition-colors"
          >
            Easy
          </Link>
          <Link
            href="/challenges/medium"
            className="text-text2 hover:text-text1 transition-colors"
          >
            Medium
          </Link>
          <Link
            href="/challenges/advanced"
            className="text-text2 hover:text-text1 transition-colors"
          >
            Advanced
          </Link>
        </nav>
      </div>
    </header>
  );
}
