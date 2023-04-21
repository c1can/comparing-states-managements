import { useState } from "react"
import { useLocation } from "wouter"
import { useStore } from "../../Zustand/store"


export function EditZustand({ param }) {

    const [input, setInput] = useState('')
    const { id } = param

    const editTask = useStore(state => state.editTask)


    const [, setPath] = useLocation(null)

    const handleSubmit = e => {
        e.preventDefault()

        setInput('')

        if (input == '') return

        editTask({ input, id })
        setPath('/zustand')
    }

    return (

        <>
            <h1>Edit Task with id: {id}</h1>
            <main>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                    <input type="submit" value="Edit" />
                </form>
            </main>
        </>



    )
}