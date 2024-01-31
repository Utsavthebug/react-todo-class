import React from 'react'
import Todo from './Todo'

const TodosList = () => {
  return (
    <div className='flex flex-col gap-3'>
      <Todo/>
      <Todo/>
      <Todo/>
    </div>
  )
}

export default TodosList