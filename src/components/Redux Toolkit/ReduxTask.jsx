import { useDispatch } from "react-redux"
import { deleteTask } from "../../Redux /features/slices/taskSlice"
import { useLocation } from "wouter"

export function ReduxTask({ task, id }) {

    const [, setPath] = useLocation()
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteTask(id))
    }

    return (
        <div className="task">
            <p>{task.name}</p>

            <button onClick={handleDelete}>Eliminar</button>
            <button onClick={() => setPath(`/edit-redux/${id}`)}>Editar</button>
        </div>
    )
}