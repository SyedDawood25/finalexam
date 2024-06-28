"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import { IoMdHeart } from "react-icons/io";
import { HiEmojiSad } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { useCallback } from "react";
import { updateStatus } from "@/actions/updateStatus";
import { deleteTask } from "@/actions/deleteTask";

interface TaskCardProps {
  id: string;
  title: string;
  status: boolean;
}

export const TaskCard = ({ id, title, status }: TaskCardProps) => {
  const handleStatus = useCallback(() => {
    updateStatus(id, !status).then(() => {
      window.location.reload();
    });
  }, []);

  const handleDelete = useCallback(() => {
    deleteTask(id).then(() => {
      window.location.reload();
    });
  }, []);

  return (
    <Card className="min-w-[1000px] py-6 pb-0">
      <CardContent className="flex justify-between items-center">
        <p className="text-3xl font-bold mr-4">{title}</p>
        <div className="flex gap-x-3 items-center">
          <Button
            onClick={handleStatus}
            size={"lg"}
            className={cn(
              status
                ? "bg-green-400 rounded-full"
                : "bg-orange-400 rounded-full"
            )}
          >
            {status ? (
              <span className="flex gap-x-2">
                <IoMdHeart size={20} /> Marked as Completed
              </span>
            ) : (
              <span className="flex gap-x-2">
                <HiEmojiSad size={20} /> Pending
              </span>
            )}
          </Button>
          <RiDeleteBin6Line size={25} onClick={handleDelete} />
        </div>
      </CardContent>
    </Card>
  );
};
