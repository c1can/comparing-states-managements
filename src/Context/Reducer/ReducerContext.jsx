import { createContext, useEffect, useReducer } from "react";
import { getTasks } from "../../utils/Reducer/getTasks";

export const ReducerContext = createContext(null)

export function ReducerContextProvider({ children }) {

    let taskModel = {
        name: '',
        id: 0
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'CREATE':
                return [
                    ...state, {
                        ...taskModel,
                        name: action.payload.input,
                        id: action.payload.id
                    }
                ]
            case 'DELETE':
                return state.filter(el => el.id !== action.payload)
            case 'EDIT':
                return state.map(el => {
                    return el.id == action.payload.id
                        ? { ...taskModel, name: action.payload.input, id: action.payload.id }
                        : el
                })
        }

    }
    const [tasks, dispatch] = useReducer(reducer, getTasks())

    useEffect(() => {
        window.localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    return (
        <ReducerContext.Provider value={{ tasks, dispatch }}>
            {children}
        </ReducerContext.Provider>
    )
}