"use client";

import { useOptimistic } from "react";

type Task = { text: string; pending: boolean };

type TaskListProps = {
  tasks: Task[];
  addTask: (formData: FormData) => void;
};

export default function TaskList({ tasks, addTask }: TaskListProps) {
  const [optimisticTasks, addOptimisticTask] = useOptimistic(
    tasks,
    (state, newTask: string) => [...state, { text: newTask, pending: true }]
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const task = String(formData.get("task") ?? "");
    addOptimisticTask(task);

    addTask(formData);
    e.currentTarget.reset();
  }

  return <>{/* UI */}</>;
}