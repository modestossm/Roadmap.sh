import MainHeader from "@/components/mainHeader";
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export default function NewsLayout({ children }: LayoutProps) {
    return (
        <div id="page">
            <MainHeader />
            {children}
        </div>
    );
}
