import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { dummyData } from './data/todos';
import TodoItem from './components/TodoItem';


function App() {

  const[todos,setTodos] = useState(dummyData)

  function setTodoCompleted(id:number, completed:boolean){
    setTodos((prevTodos) => 
      prevTodos.map(todo => (
        todo.id === id ? {...todo,completed} : todo
      ))
  );
  }

  return (
    <main className="py-10 px-20 h-screen">
      <div className='border mx-auto rounded-md flex flex-col gap-2 overflow-hidden'>
        <h1 className="font-bold text-3xl text-center bg-blue-500 text-white">Your To-do</h1> 
          <div className='space-y-2 m-5 mr-4 ml-4'>
            {todos.map((elementosTodo) =>(
              <TodoItem 
              key={elementosTodo.id} 
              tareaObjeto={elementosTodo}
              onCompletedChange={setTodoCompleted}
              />
            ))}
          
        </div>
      </div>
    </main>
  )
}

export default App;
