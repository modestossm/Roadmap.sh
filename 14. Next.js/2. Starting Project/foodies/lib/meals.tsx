import sql from "better-sqlite3";

const db = sql("meals.db");

export type Meal = {
    id: string;
    title: string;
    slug: string;
    image: string;
    summary: string;
    creator: string;
};

export async function getMeals(): Promise<Meal[]> {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return db.prepare("SELECT * FROM meals").all() as Meal[];
}