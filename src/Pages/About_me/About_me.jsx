import me from "../../assets/imgaes/Untitled-e.png"

const About_me = () => {
  return (
    <div className="container mx-auto mt-32 ">
      <h1 className="text-6xl font-bold text-center">
        About <span className="text-[#23BE0A]">Me!</span>
      </h1>
      <div className="mt-12 flex gap-6 items-center justify-center">
        <figure className="w-1/3 flex justify-center items-center">
          <img src={me} alt=""  className="w-[250px] h-[250px]"/>
        </figure>
        <div className="w-2/3 space-y-5">
            <h2 className="text-3xl font-bold">Hi, I am Here To Help Your Next Project!</h2>
            <p>My name is Masum Billah.I am a student. I study at Munshiganj Polytechnic Institute in <br /> Department of Computer Science & technology at 4th semester.Now, I am learning <br /> Web Design & Development and basic Adobe PhotoShop.</p>
            <button className="btn text-white text-2xl bg-[#23BE0A] hover:bg-transparent hover:border-[#23BE0A] hover:text-[#23BE0A] px-7 w-[20%] mr-7">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About_me;
