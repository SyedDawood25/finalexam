"use server";

import prisma from "@/lib/db";

export const updateStatus = async (id: string, status: boolean) => {
    await prisma.tasks.update({
        where: {id: id},
        data: {status: status}
    })
}