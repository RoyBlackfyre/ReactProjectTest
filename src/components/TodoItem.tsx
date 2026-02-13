import type { Todo } from "../types/todo"

interface TodoItemProps {
    tareaObjeto: Todo;
}

export default function TodoItem({tareaObjeto}: TodoItemProps) {
    return(
        
            <label className="flex gap-4 item-center border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
                <input 
                type="checkbox"
                className="scale-125"
                />
                <span className={tareaObjeto.completed?"line-through":""}>
                    {tareaObjeto.title}
                </span>
                <span>
                    {tareaObjeto.completed? " ✅" : " ❌"}
                </span>
            </label>
            
        
    )
}