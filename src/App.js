import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Sneaker shopping',
			day: 'Jan 24th at 5:30pm',
			reminder: false,
		},
		{
			id: 2,
			text: 'Clean my room',
			day: 'Jan 29th at 7:00am',
			reminder: true,
		},
		{
			id: 3,
			text: 'Revise for test',
			day: 'Jan 30th at 2:00pm',
			reminder: false,
		}
	])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, reminder: !task.reminder} : task
    ))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])

  }

  return (
    <div className="container">
		<Header onAdd={() => setShowAddTask(!showAddTask)}/>
    {showAddTask && <AddTask onAdd={addTask} />}
		{ tasks.length > 0 ? <Tasks onDelete={deleteTask} onToggle={toggleReminder} tasks={tasks}/> : <h3 className="noTasks">No tasks here!</h3> }
    </div>
  );
}

export default App;
