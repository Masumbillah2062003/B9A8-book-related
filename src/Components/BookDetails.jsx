import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { readSaveData } from "../Utility/local_storage";
import { WishSaveData } from "../Utility/wishListTab";


const BookDetails = () => {
  const data = useLoaderData();

  const { id } = useParams();

  const [book, setBook] = useState({});

  const {
    img,
    book_title,
    writer_name,
    book_review,
    number_of_pages,
    year_of_publishing,
    publisher,
    custom,
    genre,
    identity,
    rating,
  } = book;

  useEffect(() => {
    const found = data.find((b) => b.id == id);
    setBook(found);
  }, [id, data]);




  const handlerRead = (book) => {
    // console.log(book)
    readSaveData(book)
  }
  const handlerWish = (book) => {
    // console.log(book)
    WishSaveData(book)
  }

  


  console.log(book);
  console.log(typeof id);
  return (
    <div className="lg:h-[711px] flex lg:flex-row flex-col gap-12 container mx-auto lg:mt-14 mt-5 mb-14 p-4 lg:p-0">
      <figure className="h-full lg:w-1/2 lg:p-20 flex justify-center items-center rounded-2xl bg-[#1313130D]">
        <img src={img} alt="" className="lg:w-[425px] lg:h-[564px] w-[150px] h-[200px]" />
      </figure>
      <div className="lg:w-1/2 flex flex-col">
        <h1 className="font-bold lg:text-4xl text-2xl pb-5">{book_title}</h1>
        <p className="lg:text-xl text-lg font-medium py-5">{writer_name}</p>
        <hr />
        <p className="lg:text-xl text-lg font-medium py-5">{custom}</p>
        <hr />
        <p className="text-[#131313B3] py-5">
          <span className="font-bold text-black">Review :</span> {book_review}
        </p>
        <div className="flex gap-5 text-[#23BE0A] py-4 items-center">
          <p className="font-bold text-black">Tag</p>
          <p className="bg-[#23BE0A0D] rounded-[30px] py-2 px-4">#{genre}</p>
          <p className="bg-[#23BE0A0D] rounded-[30px] py-2 px-4">#{identity}</p>
        </div>
        <hr />
        <div className="py-5 space-y-4 flex-grow">
          <div className="overflow-x-auto">
            <table>
              <tbody className="p-3">
                <tr className="flex gap-[66px]">
                  <td className="text-[#131313B3] font-semibold">Number of Pages:</td>
                  <td className="-mr-11 font-semibold p-2">{number_of_pages}</td>
                </tr>
                <tr>
                  <td className="text-[#131313B3] font-semibold">Publisher:</td>
                  <td className="font-semibold p-3">{publisher}</td>
                </tr>
                <tr>
                  <td className="text-[#131313B3] font-semibold">Year of Publishing:</td>
                  <td className="font-semibold p-3">{year_of_publishing}</td>
                </tr>
                <tr>
                  <td className="text-[#131313B3] font-semibold">Rating:</td>
                  <td className="font-semibold p-3">{rating}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex gap-5  font-semibold text-lg">
          <button onClick={() => handlerRead(book)} className="btn px-7 py-4 hover:bg-transparent">Read</button>
          <button onClick={() => handlerWish(book)} className="btn px-7 py-4 bg-[#50B1C9] text-white hover:bg-[#50B1C9]">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
