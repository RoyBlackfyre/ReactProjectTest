import type { Todo } from "../types/todo";
import TodoItem from "./TodoItem";


interface TodoListProps{
    todos: Todo[];
    onCompletedChange:(id:number, completed:boolean) => void;
    onDelete: (id:number) => void;
}

export default function AddList ({
    todos,
    onCompletedChange,
    onDelete
    }:TodoListProps) {

        const todosSorted = todos.sort((a,b)=>{
            if (a.completed === b.completed) {
                return b.id - a.id
            } 
            return a.completed ? 1 : -1;
        });

    return(
        <div className="flex flex-col gap-2">
        {todosSorted.map((elementosTodo) =>(
              <TodoItem 
              key={elementosTodo.id} 
              tareaObjeto={elementosTodo}
              onCompletedChange={onCompletedChange}
              onDelete={onDelete}
              />
            ))}
        </div>
    )
}