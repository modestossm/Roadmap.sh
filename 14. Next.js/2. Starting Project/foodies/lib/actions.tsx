"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { saveMeal, type NewMeal } from "./meals";

function isInvalidText(text: string) {
    return !text || text.trim() === "";
}

export async function shareMeal(
    prevState: { message: string },
    formData: FormData
) {

    const meal: NewMeal = {
      title: formData.get("title")?.toString() ?? "",
      summary: formData.get("summary")?.toString() ?? "",
      instructions: formData.get("instructions")?.toString() ?? "",
      image: formData.get("image") as File,
      creator: formData.get("name")?.toString() ?? "",
      creator_email: formData.get("email")?.toString() ?? ""
    }

    if(isInvalidText(meal.title) || 
        isInvalidText(meal.summary) || 
        isInvalidText(meal.instructions) || 
        isInvalidText(meal.creator) || 
        isInvalidText(meal.creator_email) || 
        !meal.creator_email.includes("@") || 
        !meal.image || meal.image.size === 0 
    ) {
        return {
            message: "Invalid input."
        };
    }

    await saveMeal(meal);
    revalidatePath("/meals", "layout");
    redirect("/meals");
}