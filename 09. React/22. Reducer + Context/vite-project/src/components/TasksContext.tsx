import { createContext, useContext, useReducer } from 'react';
import type { Dispatch, ReactNode } from 'react';

export type Task = {
  id: number;
  text: string;
  done: boolean;
};

export type TaskAction =
  | { type: 'added'; id: number; text: string }
  | { type: 'changed'; task: Task }
  | { type: 'deleted'; id: number };

const TasksContext = createContext<Task[] | null>(null);

const TasksDispatchContext = createContext<Dispatch<TaskAction> | null>(null);

export function TasksProvider({ children }: { children: ReactNode }) {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  return (
    <TasksContext value={tasks}>
      <TasksDispatchContext value={dispatch}>
        {children}
      </TasksDispatchContext>
    </TasksContext>
  );
}

export function useTasks() {
  const tasks = useContext(TasksContext);
  if (tasks === null) {
    throw new Error('useTasks must be used within TasksProvider');
  }
  return tasks;
}

export function useTasksDispatch() {
  const dispatch = useContext(TasksDispatchContext);
  if (dispatch === null) {
    throw new Error('useTasksDispatch must be used within TasksProvider');
  }
  return dispatch;
}

function tasksReducer(tasks: Task[], action: TaskAction) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      const exhaustive: never = action;
      throw Error('Unknown action: ' + exhaustive);
    }
  }
}

const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];
