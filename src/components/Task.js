import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`alert alert-light ${task.reminder ? 'reminder': ''}`} role="alert" onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes style={{ color: '#fc3f19', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
