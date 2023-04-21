import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addTask } from "../../Redux /features/slices/taskSlice"
import { ReduxTask } from "./ReduxTask"
import { Link } from "wouter"

export function ReduxComponent() {

    const [prompt, setPrompt] = useState('')
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks)


    const handleSubmit = e => {
        e.preventDefault()

        setPrompt('')
        dispatch(addTask({ name: prompt, id: Math.round(Math.random() * 3000) }))
    }

    return (
        <>
            <Link href="/">GO TO HOMEPAGE</Link>
            <h1>TodoList with Redux Toolkit</h1>
            <main>
                <form onSubmit={handleSubmit}>
                    <div className="submit-task">
                        <input type="text" name="task" value={prompt} onChange={e => setPrompt(e.target.value)} />
                        <input type="submit" value="Agregar" />
                    </div>
                </form>

                {
                    tasks.map(task => (
                        <ReduxTask key={task.id} task={task} id={task.id} />
                    ))
                }
            </main>
        </>
    )
}