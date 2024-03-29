import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="container mx-auto">
      <div className="bg-[#1313130D] w-full rounded-3xl my-9">
        <h1 className="text-center p-8 font-bold text-3xl">Book</h1>
      </div>

      <div className="text-center my-14">
        <select className="px-10 py-4 bg-[#23BE0A] text-white rounded-lg text-lg font-semibold border-0 outline-none">
          <option value="Sort By">Sort By</option>
          <option value="Sort By">Rating</option>
          <option value="Sort By">Number of pages</option>
          <option value="Sort By">Publisher year</option>
        </select>
      </div>

      <div className="flex items-center overflow-x-auto overflow-y-hidden justify-center lg:justify-start flex-nowrap">
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } rounded-t-lg`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span className="text-lg">Read Books</span>
        </Link>
        <Link
          to={`wishlist`}
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } rounded-t-lg`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span className="text-lg">Wishlist Books</span>
        </Link>
        <div className="border-b w-full h-[3.25rem]"></div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
