import MainHeader from "@/components/mainHeader";
import { ReactNode } from 'react';
import "../globals.css";

interface LayoutProps {
    children: ReactNode;
}

export const metadata = {
    title: "Next.js Page Routing & Rendering",
    description: "Learn how to route to different pages."
};

export default function RootLayout({children}: LayoutProps) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <div id="page">
                    <MainHeader/>
                    {children}
                </div>
            </body>
        </html>
    );
};