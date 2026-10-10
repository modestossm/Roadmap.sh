import { ReactNode } from "react"

export default function MealsLayout({children}: { children: ReactNode }) {
    return (
        <div>
            <p>Meals layout</p>
            {children}
        </div>
    )
}