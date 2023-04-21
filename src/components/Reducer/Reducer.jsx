import { useState } from "react"
import { Task } from "./Task"
import { useReducerContext } from "../../hooks/Reducer/useReducerContext"

export function ReducerComponent() {

    const [input, setInput] = useState('')
    const { tasks, dispatch } = useReducerContext()

    const handleSubmit = e => {
        e.preventDefault()
        setInput('')
        const id = Math.round(Math.random() * 10000)
        dispatch({ type: 'CREATE', payload: { input, id } })
    }

    return (
        <main>
            <h1>TodoList with useReducer</h1>

            <form onSubmit={handleSubmit}>
                <div className="submit-task">
                    <input type="text" name="task" value={input} onChange={e => setInput(e.target.value)} />
                    <input type="submit" value="Agregar" />
                </div>
            </form>

            <div className="tasks">
                {
                    tasks.map(task =>
                        <Task task={task} key={task.id} />
                    )
                }
            </div>
        </main>
    )
}