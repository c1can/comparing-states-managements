export function getTasks() {
    const tasks = JSON.parse(window.localStorage.getItem('tasks'))

    return tasks ? tasks : []
}