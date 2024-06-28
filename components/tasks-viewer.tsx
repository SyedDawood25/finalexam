"use client";

import { useCallback, useEffect, useState } from "react";
import { TaskCard } from "./task-card";
import { Button } from "./ui/button";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { cn } from "@/lib/utils";
import { getTasks } from "@/actions/getTasks";

export const TasksViewer = () => {
  const [tasks, setTasks] = useState<any>();

  useEffect(() => {
    getTasks()
      .then((data: any) => {
        setTasks(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [tasks]);

  const [tasksScreen, setTasksScreen] = useState(0);

  const handleNext = useCallback(() => {
    setTasksScreen((tasksScreen) => tasksScreen + 4);
  }, [tasksScreen]);

  const handlePrev = useCallback(() => {
    if (tasksScreen === 0) {
      return;
    }
    setTasksScreen((tasksScreen) => tasksScreen - 4);
  }, [tasksScreen]);

  return (
    <main className="flex flex-col items-center gap-y-10">
      {tasks?.map((task: any, index: number) => {
        if (index >= tasksScreen && index < tasksScreen + 4) {
          return (
            <TaskCard
              key={index}
              id={task.id}
              title={task.title}
              status={task.status}
            />
          );
        }
      })}
      <div className="flex w-full items-center justify-center">
        <Button
          onClick={handlePrev}
          className={cn(
            tasksScreen !== 0 ? "flex gap-x-3 text-xl" : "invisible"
          )}
          size={"lg"}
        >
          <span>
            <IoMdArrowRoundBack size={20} />
          </span>{" "}
          Previous
        </Button>
        <Button
          onClick={handleNext}
          className={cn(
            tasksScreen + 4 < tasks?.length
              ? "flex gap-x-3 text-xl ml-20"
              : "invisible"
          )}
          size={"lg"}
        >
          Next
          <span>
            <IoMdArrowRoundForward size={20} />
          </span>{" "}
        </Button>
      </div>
    </main>
  );
};
