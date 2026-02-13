import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { dummyData } from './data/todos';
import TodoItem from './components/TodoItem';


function App() {

  return (
    <main className="py-10 px-20 h-screen">
      <div className='border rounded-md flex flex-col gap-2 overflow-hidden'>
        <h1 className="font-bold text-3xl text-center bg-blue-500 mb-3 text-white">Your To-do</h1> 
        <div className='max-w-lg mx-auto'>
          <div className='space-y-2 mb-3'>
            {dummyData.map((elementosTodo) =>(
              <TodoItem key={elementosTodo.id} tareaObjeto={elementosTodo} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default App;
