import { create } from "zustand";
import { persist } from 'zustand/middleware'


export const useStore = create(
    persist(
        (set, get) => ({
            tasks: [],
            addTask: (newTask) => set((state) => ({ tasks: [...get().tasks, newTask] })),
            deleteTask: (id) => set((state) => ({ tasks: state.tasks.filter(task => task.id !== id) })),
            editTask: (payload) => set((state) => ({
                tasks: state.tasks.map(task => {
                    return task.id == payload.id
                        ? { ...task, name: payload.input }
                        : task
                })
            }))
        }),
        {
            name: 'zustand-tasks'
        }
    )
)