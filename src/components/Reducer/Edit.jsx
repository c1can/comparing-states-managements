import { useEffect, useState } from "react"
import { useLocation } from "wouter"
import { useReducerContext } from "../../hooks/Reducer/useReducerContext"

export function Edit({ param }) {

    const { id } = param
    const { dispatch } = useReducerContext()
    const [location, setLocation] = useLocation()

    const [input, setInput] = useState('')

    const handleEdit = e => {
        e.preventDefault()

        setInput('')
        dispatch({ type: 'EDIT', payload: { id, input } })
        setLocation('/')
    }

    return (
        <form onSubmit={e => handleEdit(e)}>
            <input value={input} type="text" onChange={e => setInput(e.target.value)} />
            <input type="submit" value="Edit" />
        </form>
    )
}