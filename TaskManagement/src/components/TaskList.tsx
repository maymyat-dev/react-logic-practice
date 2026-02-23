import type { Todo } from "../types";
import TaskItem from "./TaskItem";



type TaskListProps = {
    tasks: Todo[],
    onDelete: (id: string) => void;
}

const TaskList = ({tasks, onDelete}: TaskListProps) => {
  return (
      <ul>
          {
              tasks.map((task) => (
                  <TaskItem key={task.id} task={task} onDelete={onDelete}/>
              ))
          }
    </ul>
  )
}

export default TaskList