import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    modal: ReactNode;
}

export default function NewsDetailLayout({ children, modal }: LayoutProps) {
    return <>
        {modal}
        {children}
    </>
}