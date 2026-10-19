"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface ModalBackdropProps {
    children: ReactNode;
}

export default function ModalBackdrop({ children }: ModalBackdropProps) {
    const router = useRouter();

    return (
        <div className="modal-dialog" onClick={() => router.back()}>
            {children}
        </div>
    );
}
