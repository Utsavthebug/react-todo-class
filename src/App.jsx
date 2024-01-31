import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoPage from './pages/TodoPage';
import TodoEdit from './pages/TodoEdit'

function App() {
 return (
    <BrowserRouter>
    <Routes> 
    <Route path="/" element={<TodoPage/>} />
    <Route path="todo/:id" element={<TodoEdit />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
