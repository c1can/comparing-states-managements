import { useLocation } from "wouter"
import { useReducerContext } from "../../hooks/Reducer/useReducerContext"

export function Task({ task }) {

    const { name, id } = task
    const { dispatch } = useReducerContext()

    const [, setPath] = useLocation()

    const handleDelete = () => {
        dispatch({ type: 'DELETE', payload: id })
    }

    return (
        <div className="task">

            <p>{name}</p>

            <button onClick={handleDelete}>Eliminar</button>
            <button onClick={() => setPath(`edit-reducer/${id}`)}>Editar</button>
        </div>
    )
}