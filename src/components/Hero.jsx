import house from "../assets/home.jpg";

const Hero = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-between bg-dark md:py-10 lg:pb-0 lg:flex-row">
      <div className="text-center lg:px-8 py-12 lg:py-0 w-11/12 md:w-5/6  mx-auto lg:w-2/4 lg:text-left">
        <div className="text-4xl md:text-6xl lg:text-5xl text-white font-extrabold pb-5 leading-10 font-poppins tracking-wider">
          Everyone Deserves the Opportunity of Home
        </div>
        <div className="text-gray-400 w-11/12 lg:w-full mx-auto py-3 leading-6 text-sm">
          BLUE SKY is a service that manages properties on one platform.
          Provides valuation, buy, rent, sell, and other real estate services
          worldwide. Rent or Buy a home by Exploring the millions of vacant
          homes wr have on this website.
        </div>
        <div className="text-sm flex flex-col space-y-6 w-2/4 mx-auto py-7 lg:flex-row lg:w-full lg:space-y-0 lg:space-x-5">
          <button className="font-semibold bg-blue-500 text-white px-5 py-4 rounded-md shadow-lg">
            Explore Buying
          </button>
          <button className="font-semibold bg-white text-black px-5 py-4 rounded-md shadow-lg">
            Explore Renting
          </button>
        </div>
      </div>
      <figure className="h-full w-full lg:w-2/4">
        <img
          className="hidden lg:block object-cover h-2xl lg:rounded-l-3xl"
          src={house}
          alt="house"
        />
      </figure>
    </div>
  );
};

export default Hero;
