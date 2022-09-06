import {useState} from 'react'
import Form from './Form/Form'
import List from './List/List'
import Footer from './Footer/Footer'

function Components() {
  const [todos,setTodos]=useState([]);
  const [hide,setHide]=useState("All");
  return (
    <div className='todoapp'>
        <Form todos={todos} setTodos={setTodos}/>
        <List todos={todos} setTodos={setTodos} hide={hide} />
        <Footer todos={todos} setTodos={setTodos} setHide={setHide}/>
    </div>
  )
}

export default Components