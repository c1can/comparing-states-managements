import { useContext } from "react"
import { ReducerContext } from "../../Context/Reducer/ReducerContext"

export const useReducerContext = () => {
    const { tasks, dispatch } = useContext(ReducerContext)


    return { tasks, dispatch }
}