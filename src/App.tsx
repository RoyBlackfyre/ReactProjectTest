import { useState } from 'react'
import { dummyData } from './data/todos';
import TodoItem from './components/TodoItem';
import AddItem from './components/AddItem';
import AddList from './components/AddList';


function App() {

  const[todos,setTodos] = useState(dummyData)

  function setTodoCompleted(id:number, completed:boolean){
    setTodos((prevTodos) => 
      prevTodos.map(todo => (
        todo.id === id ? {...todo,completed} : todo
      ))
  );
  }

  function addTodo (title: string) {
    setTodos(prevState => [
      ...prevState,
      {
        id:prevState.length + 1,
        title,
        completed:false
      }
      
    ])
  }

  function deleteTodoItem(id:number) {
    setTodos(prevState => prevState.filter(todos=> todos.id !==id))
  }

  return (
    <main className="py-10 px-20 h-screen">
      <div className='border mx-auto rounded-md flex flex-col gap-2 overflow-hidden'>
        <h1 className="font-bold text-3xl text-center bg-blue-500 text-white">Your To-do</h1> 
          <div className='space-y-2 m-5 mr-4 ml-4'>
            <AddItem
            onSubmited={addTodo}
            />
            <AddList todos={todos} onCompletedChange={setTodoCompleted} onDelete={deleteTodoItem}/>
          
        </div>
      </div>
    </main>
  )
}

export default App;
