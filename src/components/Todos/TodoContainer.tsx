import React from 'react'
import TodoButton from '../TodoButton'
import TodosList from './TodosList'

const TodoContainer = () => {
  return (
    <div className='mt-8 flex flex-col gap-4'>
      <h1 className=' text-center text-2xl font-medium'>To do List</h1>
      <div className='flex gap-2'>
        <TodoButton 
        onClick={()=>{}}
        text={"All"}/>
      
      <TodoButton 
        onClick={()=>{}}
        text={"Done"}/>

      <TodoButton 
        onClick={()=>{}}
        text={"Todo"}/>
      </div>

      <TodosList/>

    </div>
  )
}

export default TodoContainer