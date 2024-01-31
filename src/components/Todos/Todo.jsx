import React, { useState } from 'react'
import { FaPencilAlt } from "react-icons/fa";
import EditModal from '../EditModal';
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const [modalIsOpen,setIsOpen] = useState(false)  //for opening and closing of modal
  const [completed,setCompleted] = useState(false) //for completion of todo
  const navigate = useNavigate() //for navigation

  const openModal = ()=>{
    setIsOpen(true)
  }

  //redirecting to edit page
  const RedirecttoEditpage = ()=>{
    navigate("/todo/2")
  }

  const toogleCompleted = ()=>{
    setCompleted((prev)=>!prev)
  }
  
  return (
    <>
     <EditModal
      modalIsOpen={modalIsOpen}
      setIsOpen={setIsOpen}
     />
      <div
    className={`${completed && 'text-red1 line-through'} flex justify-between items-center py-[0.5px] px-2 leading-10 
    border-solid border-[2px] border-[#d1d5db]`}>
      <p>Todo 1</p>

      <div className='flex gap-x-3 items-center'>
        <input onClick={()=>toogleCompleted()} className='accent-green-700 w-6 h-5 hover:cursor-pointer p-1' type="checkbox" name="" id="" checked={completed} />
        <FaPencilAlt onClick={RedirecttoEditpage}  className='w-5 h-5 hover:cursor-pointer hover:scale-110 ' color='#eab308'/>
        <MdDelete onClick={openModal} color='#db3345'  className='w-6 h-6 hover:cursor-pointer hover:scale-110' />
        {/* <img onClick={()=>openModal()} src={DeleteBtn} alt="" className='w-5 h-5 hover:cursor-pointer hover:scale-110' /> */}
      </div>
    </div>
    </>
  
  )
}

export default Todo