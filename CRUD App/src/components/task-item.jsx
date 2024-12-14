import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask, updateTask } from '../redux/task-slice';

function TaskItem({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    if (editText.trim()) {
      dispatch(updateTask({ id: task.id, text: editText }));
      setIsEditing(false);
    }
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleUpdate}
          autoFocus
        />
      ) : (
        <>
          <span onClick={() => dispatch(toggleTask(task.id))}>{task.text}</span>
          <div>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => dispatch(deleteTask(task.id))}>
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TaskItem;
