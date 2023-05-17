import React,{useState} from 'react'
import HookBooksContext from '../hooks/book-context-hook';

const BookCreate = () => {
    const [title, setTitle] = useState("");
    const {createBooks} = HookBooksContext();
    const handleSubmit = (event) =>{
        event.preventDefault();
        createBooks(title);
        setTitle("");
    };
    const handleChange =(event) =>{
        setTitle(event.target.value);
    };
  return (
    <div className="form-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleChange}/>
        <button>Create!</button>
      </form>
    </div>
  )
}

export default BookCreate;
