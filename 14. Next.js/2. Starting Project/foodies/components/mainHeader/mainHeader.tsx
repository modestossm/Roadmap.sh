import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import classes from "@/components/mainHeader/main-header.module.css";
import MainHeaderBackground from "./mainHeaderBackground";
import NavLink from "./navLink";

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link href="/" className={classes.logo}>
                    <Image src={logoImg} alt="logo" />
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li> <NavLink href="/meals"> Browse Meals </NavLink> </li>
                        <li> <NavLink href="/community"> Foodies Community </NavLink> </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}