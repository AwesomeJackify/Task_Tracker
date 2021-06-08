import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} onToggle={onToggle} reminder={task.reminder} onDelete={onDelete} task={task}/>
            ))}
        </>
    )
}

export default Tasks
