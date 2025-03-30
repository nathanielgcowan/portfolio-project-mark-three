import React from 'react'
import Task from './Task'
import { ITask } from "@/types/tasks";

interface TodoListProps {
  tasks: ITask[]
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
    <table className="table">
        {/* head */}
        <thead>
          <tr>
              <th>Name</th>
              <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => <Task task={task} index={index}/>)}
        </tbody>
    </table>
    </div>
  )
}

export default TodoList
