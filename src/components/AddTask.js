import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault() // Doesn't submit to a page

        if (!text) {
            alert("Please add a task")
            return
        }

        onAdd({text, day, reminder})

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Task</label>
                <input type="text" className="form-control" value={text} onChange={(e) => setText(e.target.value)} placeholder="Do the laundry"/>
            </div>
            <div className="form-group">
                <label>Day & Time</label>
                <input type="text" className="form-control" value={day} onChange={(e) => setDay(e.target.value)} placeholder="Apr 16th at 6:00pm"/>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input checkbox" value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
                <label className="form-check-label">Set Reminder</label>
            </div>
            <button type="submit" className="btn btn-primary saveTask">Save Task</button>
            <hr />
        </form>
    )
}

export default AddTask
