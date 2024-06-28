"use client";

import { InputForm } from "@/components/input-form";
import { TaskDetails } from "@/components/task-details";
import { TasksViewer } from "@/components/tasks-viewer";

const Main = () => {
  return (
    <main className="flex flex-col flex-1 w-screen p-10 gap-y-8">
      <TaskDetails />
      <InputForm />
      <TasksViewer />
    </main>
  );
};

export default Main;
