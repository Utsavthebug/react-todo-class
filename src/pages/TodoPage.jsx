import React from 'react'
import TodoInput from '../components/TodoInput'
import TodoContainer from '../components/Todos/TodoContainer'

const TodoPage = () => {
  return (
    <div className='max-w-[76rem] mx-auto mt-10'>
      <h1 className='text-center font-medium text-2xl mb-5'>Enter Todos here:</h1>
      <TodoInput/>
      <TodoContainer/>
    </div>
  )
}

export default TodoPage