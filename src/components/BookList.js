import React  from "react";
import BookShow from"./BookShow";
import HookBooksContext from "../hooks/book-context-hook";

const BookList = () => {
    const {books} = HookBooksContext();
    const listItem = books.map((book) => <BookShow book={book} />);
    return (
        <div className="list-book">
        <h2>Reading List</h2>
        {listItem}
        </div> 
    );
};

export default BookList;
