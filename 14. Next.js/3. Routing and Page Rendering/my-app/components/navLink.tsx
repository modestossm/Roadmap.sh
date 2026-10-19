"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, Suspense } from 'react';

interface NavLinkProps {
    href: string;
    children: ReactNode;
}

function NavLinkContent({ href, children }: NavLinkProps) {
    const path = usePathname();

    return (
        <Link href={href} className={path.startsWith(href) ? "active" : undefined}>
            {children}
        </Link>
    );
}

export default function NavLink({ href, children }: NavLinkProps) {
    return (
        <Suspense fallback={<Link href={href}>{children}</Link>}>
            <NavLinkContent href={href}>{children}</NavLinkContent>
        </Suspense>
    );
}
