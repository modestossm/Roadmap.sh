import Link from "next/link"
import logoImg from "@/assets/logo.png"
import Image from "next/image"
import classes from "@/components/mainHeader/main-header.module.css"
import MainHeaderBackground from "./mainHeaderBackground"

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
                        <li> <Link href="/meals"> Browse Meals </Link> </li>
                        <li> <Link href="/community"> Community </Link> </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}