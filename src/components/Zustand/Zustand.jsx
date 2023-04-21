import { useState } from "react"
import { useStore } from "../../Zustand/store"
import { Link, useLocation } from "wouter"

export function ZustandComponent() {

    const tasks = useStore(state => state.tasks)
    const addTask = useStore(state => state.addTask)
    const deleteTask = useStore(state => state.deleteTask)


    const [, setPath] = useLocation(null)

    const [input, setInput] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        const id = Math.round(Math.random() * 3000)

        setInput('')
        addTask({ name: input, id })
    }

    const handleDelete = id => {
        deleteTask(id)
    }

    const handleEdit = id => {
        setPath(`/edit-zustand/${id}`)
    }

    return (
        <main>
            <Link href="/">Go to HOMEPAGE</Link>
            <h1>Zustand TodoList</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                <input type="submit" value="Agregar" />
            </form>

            {
                tasks.length !== 0 && tasks.map(task => (
                    <div key={task.id}>
                        <p>{task.name}</p>
                        <div className="buttons" style={{ display: "flex", gap: '10px' }}>
                            <button onClick={() => handleEdit(task.id)}>Editar</button>
                            <button onClick={() => handleDelete(task.id)}>Eliminar</button>
                        </div>
                    </div>
                ))
            }
        </main>
    )
}