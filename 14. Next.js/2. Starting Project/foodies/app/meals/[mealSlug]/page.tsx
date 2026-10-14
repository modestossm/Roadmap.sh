import { Suspense } from "react";
import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function MealDetails({
    params,
}: {
    params: Promise<{ mealSlug: string }>;
}) {
    return (
        <Suspense fallback={<p className={classes.loading}>Loading meal...</p>}>
            <MealContent params={params} />
        </Suspense>
    );
}

async function MealContent({
    params,
}: {
    params: Promise<{ mealSlug: string }>;
}) {
    const { mealSlug } = await params;
    const meal = getMeal(mealSlug);

    if (!meal) {
        notFound();
    }

    const instructions = meal.instructions.replace(/\n/g, "<br />");

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={`https://nextjs-app-imagens.s3.us-east-2.amazonaws.com/${meal.image}`}
                        alt={meal.title}
                        fill />
                </div>

                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>

                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>

            <main>
                <p
                    className={classes.instructions}
                    dangerouslySetInnerHTML={{ __html: instructions }}
                ></p>
            </main>
        </>
    );
}