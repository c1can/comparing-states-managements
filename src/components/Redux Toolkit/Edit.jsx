import { useState } from "react"
import { useDispatch } from "react-redux"
import { editTask } from "../../Redux /features/slices/taskSlice"
import { useLocation } from "wouter"

export function EditReduxTask({ param }) {
    const { id } = param

    const [, setPath] = useLocation()
    const dispatch = useDispatch()
    const [input, setInput] = useState('')


    const handleSubmit = e => {
        e.preventDefault()

        setInput('')
        dispatch(editTask({ id, newName: input }))
        setPath('/redux')
    }


    return (
        <main>
            <p>Edit task number: {id}</p>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                <input type="submit" value="Edit" />
            </form>
        </main>
    )
}