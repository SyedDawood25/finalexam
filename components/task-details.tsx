"use client";

import { getTasks } from "@/actions/getTasks";
import { useEffect, useState } from "react";

export const TaskDetails = () => {
  const [tasks, setTasks] = useState<any>();
  const [totalTasks, setTotalTasks] = useState<number>();
  const [compTasks, setCompTasks] = useState<number>();
  const [pendTasks, setPendTasks] = useState<number>();

  useEffect(() => {
    getTasks()
      .then((data: any) => {
        setTasks(data);
      })
      .catch((error) => {
        console.log(error);
      });
    setTotalTasks(tasks?.length);
    var completed: number = 0;
    tasks?.map((task: any) => {
      if (task.status) {
        completed = completed + 1;
      }
    });
    setCompTasks(completed);
    setPendTasks(tasks ? tasks?.length - completed : 0);
  }, [tasks, totalTasks, compTasks, pendTasks]);

  const allTasks = [
    {
      title: "Total Tasks",
      value: totalTasks,
    },
    {
      title: "Tasks Completed",
      value: compTasks,
    },
    {
      title: "Tasks Pending",
      value: pendTasks,
    },
  ];

  return (
    <main className="grid grid-cols-3 grid-rows-1 gap-x-8 w-full">
      {allTasks.map((task: any, index) => {
        var color: string =
          index === 0
            ? "bg-blue-200"
            : index === 1
            ? "bg-green-200"
            : "bg-red-200";
        return (
          <div
            key={index}
            className={`flex flex-col items-center justify-center px-10 py-8 ${color} rounded-lg border-2 border-slate-600`}
          >
            <h1 className="text-2xl font-medium">{task.title}</h1>
            <h2 className="text-6xl font-medium">{task.value}</h2>
          </div>
        );
      })}
    </main>
  );
};
