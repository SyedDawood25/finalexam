"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TaskSchema } from "@/schemas/taskSchema";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CiCirclePlus } from "react-icons/ci";
import { createTask } from "@/actions/createTask";

export const InputForm = () => {
  const form = useForm<z.infer<typeof TaskSchema>>({
    resolver: zodResolver(TaskSchema),
    defaultValues: {
      title: "",
    },
  });

  function onSubmit(values: z.infer<typeof TaskSchema>) {
    createTask(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center justify-center space-x-8"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="w-[950px] border-slate-600"
                  placeholder="Enter the task..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="flex items-center bg-red-400" type="submit">
          Add Task{" "}
          <span className="ml-4">
            <CiCirclePlus size={25} />
          </span>
        </Button>
      </form>
    </Form>
  );
};
