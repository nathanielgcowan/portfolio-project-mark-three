import React from 'react'
import { AiOutlinePlus } from "react-icons/ai"
const AddTask = () => {
  return (
    <div>
      <button className="btn btn-primary w-full">
        Add new task
        <AiOutlinePlus size={18} />
      </button>
    </div>
  )
}

export default AddTask
