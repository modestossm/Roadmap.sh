import { useState } from 'react';
import { type Task } from './Reducer.js';

interface TaskListProps {
  tasks: Task[];
  onChangeTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
}

export default function TaskList({ tasks, onChangeTask, onDeleteTask }: TaskListProps) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [draftText, setDraftText] = useState('');

  function handleEdit(task: Task) {
    setEditingId(task.id);
    setDraftText(task.text);
  }

  function handleSave(task: Task) {
    onChangeTask({
      ...task,
      text: draftText,
    });
    setEditingId(null);
  }

  function handleCancel() {
    setEditingId(null);
    setDraftText('');
  }

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={e =>
              onChangeTask({
                ...task,
                done: e.target.checked,
              })
            }
          />
          {editingId === task.id ? (
            <>
              <input
                value={draftText}
                onChange={e => setDraftText(e.target.value)}
              /> {" "}
              <button onClick={() => handleSave(task)}>Save</button> {" "}
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {task.text} {" "}
              <button onClick={() => handleEdit(task)}>Edit</button> {" "}
              <button onClick={() => onDeleteTask(task.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
