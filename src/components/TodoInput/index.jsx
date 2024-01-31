import { useState } from "react"
import TextInput from "../TextInput"
import TodoButton from "../TodoButton"

const TodoInput = () => {
   const [todoInput,setTodoInput] = useState("")
    return (
    <div className="flex gap-3 flex-col border-solid border-[1px] border-[#000] py-3 px-6">
      <TextInput
      todoInput={todoInput}
      setTodoInput={setTodoInput}
      />
      <TodoButton 
      onClick={()=>{}}
      text={"Add new Tasks"}
      />
    </div>
  )
}

export default TodoInput