import { useLoaderData, useNavigate } from "react-router-dom";
import banner from "../../assets/imgaes/pngwing 1.png";
import Book from "../../Components/Book";

const Home = () => {
  const data = useLoaderData();

  const navigate = useNavigate();
  const handlerClick = () => {
    navigate("/listedbooks");
  };

  return (
    <div className="lg:mt-12 mt-6 container mx-auto">
      {/* Banner section start */}
      <div className="bg-[#1313130D] rounded-3xl p-4">
        <div className="flex justify-center items-center lg:h-[550px]">
          <div className="flex lg:flex-row flex-col justify-between lg:w-full lg:px-28 lg:py-20">
            <div className="text-center lg:text-start">
              <h1 className="lg:text-6xl text-3xl font-bold lg:leading-[84px]">
                Books to freshen <br /> up your bookshelf
              </h1>
              <button
                onClick={() => handlerClick()}
                className="btn mt-12 bg-[#23BE0A] hover:bg-[#23BE0A] font-bold text-xl text-white"
              >
                View The List
              </button>
            </div>
            <div className="flex items-center justify-center">
              <img src={banner} className="lg:w-full w-32 lg:mt-0 mt-5" />
            </div>
          </div>
        </div>
      </div>
      {/* Banner section end */}

      {/* Book Part start*/}
      <div className="lg:mt-24 mt-12">
        <h1 className="text-center font-bold text-[40px]">Books</h1>
        <div className="lg:mt-16 mt-8 grid lg:grid-cols-3 grid-cols-1 gap-6">
          {data.map((book) => (
            <Book key={book.id} book={book}></Book>
          ))}
        </div>
      </div>
      {/* book part end */}
    </div>
  );
};

export default Home;
