import type { Todo } from "../types/todo"

interface TodoItemProps {
    tareaObjeto: Todo;
}

export default function TodoItem({tareaObjeto}: TodoItemProps) {
    return(
        <div>
            <p>{tareaObjeto.title}{tareaObjeto.completed? " ✅" : " ❌"}</p>
        </div>
    )
}