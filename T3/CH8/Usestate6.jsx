import { useState } from "react";
import Usestate5 from "./Usestate5";

function Usestate6() {
    const [task, setTask] = useState(" ")
    const [todolist, settodolist] = useState([])

    function addTask() {
        settodolist([...todolist, { id: Date.now(), name: task }])
        setTask(" ")
    }
    function deleteTask(id) {
        settodolist(todolist.filter((t) => t.id != id))
    }

    return (
        <div>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter value" />
            <button onClick={addTask}>Add</button>

            {
                todolist.map((t) =>
                    <div key={t.id}>
                        <h3>{t.name}</h3>
                        <button onClick={() => deleteTask(t.id)}>Delete</button>
                    </div>
                )
            }
        </div>
    )
}
export default Usestate6;