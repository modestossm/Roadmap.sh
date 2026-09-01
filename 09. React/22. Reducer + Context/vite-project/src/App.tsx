import AddTask from './components/AddTask.tsx';
import TaskList from './components/TaskList.tsx';
import { TasksProvider } from './components/TasksContext.tsx';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}