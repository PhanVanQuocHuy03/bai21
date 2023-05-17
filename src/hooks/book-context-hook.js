import { useContext } from "react";
import BooksContext from "../context/books";

 const HookBooksContext = () => {
   return useContext(BooksContext);
 };
 export default HookBooksContext;