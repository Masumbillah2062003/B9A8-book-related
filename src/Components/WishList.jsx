import { useEffect, useState } from "react";
import WishListTab from "./WishListTab";
import { wishGetData } from "../Utility/wishListTab";

const WishList = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const storageData = wishGetData();
    setBooks(storageData);
  }, []);
  return (
    <div>
      {books.map((book) => (
        <WishListTab key={book.id} book={book}></WishListTab>
      ))}
    </div>
  );
};

export default WishList;
