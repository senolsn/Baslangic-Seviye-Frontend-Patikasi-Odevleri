import {useState,useEffect} from "react";

function Form({todos,setTodos}) {
  const [form,setForm]=useState("");  
  
  useEffect(()=>{
    setForm("");
    console.log(todos)
  },[todos]);

  const onSubmitForm=(e)=>{
    e.preventDefault();
    
    if(form ===''){
      return false;
    }
    setTodos([...todos,{
      id: todos.length > 0 ? todos.length : 0,
      todo: form,
      checked:false,
    }]);
  }
  const onChangeInput = (e) => {
    setForm(e.target.value)
  }
  return (
    <header className="header">
      <h1>Todos</h1>
      <form onSubmit={onSubmitForm}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={onChangeInput}
          value={form} //useEffect ile Sıfırlamak için

        />
      </form>
    </header>
  );
}

export default Form;
