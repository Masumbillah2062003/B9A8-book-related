import { useEffect, useState } from "react";

import { readGetData } from "../../Utility/local_storage";
import ReChart from "../../Components/ReChart";

const PagesToRead = () => {
  
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const storageRead = readGetData()
    setBooks(storageRead)
  } ,[])
  
  console.log(books)


  return (
    <div className="container mx-auto flex justify-center items-center mt-24">
        <ReChart book={books}></ReChart>
    </div>
  );
};


export default PagesToRead;
