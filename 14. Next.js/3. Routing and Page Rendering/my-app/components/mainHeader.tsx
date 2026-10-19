import Link from "next/link";
import NavLink from "@/components/navLink";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="main-header-div">
        <div id="logo">
          <Link href="/">NextNews</Link>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink href="/news">News</NavLink>
              <NavLink href="/archive">Archive</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
