import React from 'react'
import { useNavigate } from 'react-router-dom'

const TodoEdit = () => {
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log("form submitted")
  }

  const goBack = ()=>{
    navigate("/")
  }
  return (
    <div className='h-screen w-screen relative'>
     <div className='absolute w-[30rem] rounded-xl p-[20px] bg-slate-200 h-[20rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <h1 className='text-center font-medium text-xl'>Todo Edit</h1>
      {/* Form to edit page */}
        <form onSubmit={handleSubmit} action="" className='mt-10 h-full flex gap-y-10 flex-col'>   
        <input type="text" placeholder='Edit Todo' className='w-full leading-8 rounded-xl p-3 text-xl focus:outline-none' />

        <div className='flex gap-3'>
        <button className='btnCls  bg-green1 hover:bg-green2 '  type='submit'>
          Edit
        </button>

        <button onClick={goBack} className=' bg-red1 btnCls'>
          Cancel
        </button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default TodoEdit