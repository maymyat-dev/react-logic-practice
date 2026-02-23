import type { Todo } from "../types";

type TaskItemProps = {
  task: Todo;
  onDelete: (id: string) => void;
};

const TaskItem = ({ task, onDelete }: TaskItemProps) => {
  return (
    <li>
      {task.text}
      <button className="text-red-800" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
