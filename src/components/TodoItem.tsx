import type { Todo } from "../types/todo"

interface TodoItemProps {
    tareaObjeto: Todo;
    onCompletedChange: (id:number,completed:boolean) => void;
}

export default function TodoItem({tareaObjeto,onCompletedChange}: TodoItemProps) {
    return(
        
            <label className="flex gap-4 item-center border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
                <input 
                type="checkbox"
                checked={tareaObjeto.completed}
                onChange={(e)=> onCompletedChange(tareaObjeto.id,e.target.checked)}
                className="scale-125"
                />
                <span className={tareaObjeto.completed?"line-through":""}>
                    {tareaObjeto.title}
                </span>
            </label>
            
        
    )
}