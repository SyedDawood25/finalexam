"use server";

import prisma from "@/lib/db";

export const deleteTask = async (id: string) => {
    await prisma.tasks.delete({
        where: {id: id}
    })
}