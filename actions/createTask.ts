"use server";

import prisma from "@/lib/db";
import { TaskSchema } from "@/schemas/taskSchema";
import { z } from "zod";

export const createTask = async (values: z.infer<typeof TaskSchema>) => {
    const validatedValues = TaskSchema.safeParse(values);

    if(!validatedValues.success) {
        return {
            error: validatedValues.error?.flatten().fieldErrors
        }
    }

    const task = await prisma.tasks.create({
        data: {
            title: validatedValues.data?.title,
            status: false
        }
    })

    console.log(task);
}