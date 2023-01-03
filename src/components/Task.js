import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 
    'reminder' : ''}`} onDoubleClick={() => 
    onToggle(task.id)}>
      <h3>
        {task.text}
        <FaTimes style={{color: 'red', cursor: 'pointer'}} 
            onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

/*
Notes
With the classname in div, 'task' class is gonna stay no matter what, 
but we have added a condition, saying if task.reminder is true, 
add another class called 'reminder', if false then do nothing
*/

export default Task
