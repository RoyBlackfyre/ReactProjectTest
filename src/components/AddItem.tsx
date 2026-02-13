import { useState } from "react"

interface AddItemProps {
    onSubmited: (title:string) => void;

}


export default function AddItem({onSubmited}:AddItemProps){

    const[input,setInput] = useState("")
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if (!input.trim()) return;
        onSubmited(input);
        setInput("");
    }

    return (
        <form className="flex" onSubmit={(handleSubmit)}>
            <input 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            type="text"
            className="border rounded-s-md border-gray-400 h-10 grow p-2"
            placeholder="Add your todo task"
            />
            <button
            type="submit"
            className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
            >
            Add    
            </button>
        </form>
    )
}