import { useEffect, useState } from "react";
import ReadBookTab from "./ReadBookTab";
import { readGetData } from "../Utility/local_storage";


const ReadBook = () => {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        const storageData = readGetData();
        setBooks(storageData)
    } ,[])
    return (
        <div>
            {
                books.map(book => <ReadBookTab key={book.id} book={book}></ReadBookTab>)
            }
        </div>
    );
};

export default ReadBook;