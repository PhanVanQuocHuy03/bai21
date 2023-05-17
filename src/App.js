import React,{useEffect, useContext} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './style.css';
import BooksContext from './context/books';

const App = () => {
   const { fetchtBooks} = useContext(BooksContext);
    useEffect(() => {
    fetchtBooks();
  }, []);
  return (
    <div>
      <BookList/>
        <BookCreate/>
    </div>
  );
};

export default App;
