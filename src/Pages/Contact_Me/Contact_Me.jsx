const Contact_Me = () => {
  return (
    <div className="container mx-auto mt-20">
      <div>
        <h1 className="text-6xl font-bold text-center">
          Contact <span className="text-[#23BE0A]">Me!</span>
        </h1>
        <form className="space-y-6 text-center mt-12">
          <div className="space-x-6">
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full max-w-xs shadow-md"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full max-w-xs shadow-md"
            />
          </div>
          <div className="space-x-6">
            <input
              type="number"
              placeholder="Mobail Number"
              className="input input-bordered w-full max-w-xs shadow-md"
            />
            <input
              type="text"
              placeholder="Email Subject"
              className="input input-bordered w-full max-w-xs shadow-md"
            />
          </div>
          <div>
            <textarea placeholder="Your Massage" className="textarea textarea-bordered textarea-lg w-[43%] h-[250px] shadow-md" ></textarea>
          </div>
          <div>
            <input type="button" value="Submit" className="btn text-white text-2xl bg-[#23BE0A] hover:bg-transparent hover:border-[#23BE0A] hover:text-[#23BE0A] px-7 w-[20%] mr-7" />
            <input type="button" value="Reset" className="btn text-white text-2xl bg-[#59c6d2] hover:bg-transparent hover:border-[#59c6d2] hover:text-[#59c6d2] px-7 w-[20%]" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact_Me;
