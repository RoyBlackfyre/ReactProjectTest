import { Trash2 } from "lucide-react";
import type { Todo } from "../types/todo"

interface TodoItemProps {
    tareaObjeto: Todo;
    onCompletedChange: (id:number,completed:boolean) => void;
    onDelete: (id:number) => void;
}

export default function TodoItem({tareaObjeto,onCompletedChange,onDelete}: TodoItemProps) {
    return(
        <div className="flex">
            <label className="flex gap-4 grow item-center border rounded-s-md p-2 border-gray-400 bg-white hover:bg-slate-50">
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
            <button 
            className="border border-gray-400 rounded-e-md bg-red-300"
            onClick={()=> onDelete(tareaObjeto.id)}
            >
                <Trash2 size={20}/>
            </button>
        </div>
            
        
    )
}