import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { dummyData } from './data/todos';
import TodoItem from './components/TodoItem';


function App() {

  return (
    <main className="py-10 px-20 h-screen">
      <h1 className="font-bold text-3xl text-center">Your To-do</h1> 
      <div className='max-w-lg mx-auto'>
        <div className='space-y-2'>
          {dummyData.map((elementosTodo) =>(
            <TodoItem key={elementosTodo.id} tareaObjeto={elementosTodo} />
          ))}
          
        </div>
      </div>
    </main>
  )
}

export default App;
