import { BsArrowRightShort } from "react-icons/bs";
import buy from "../assets/buy.png";
import rent from "../assets/rent.png";
import sell from "../assets/sell.png";

const HeroFeature = () => {
  return (
    <div className="bg-dark text-left w-full py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-center justify-center px-5 md:px-8 gap-y-10 gap-x-7">
      <div className="glass bg-lightWhite text-white shadow-2xl px-5 py-10 rounded-2xl border-transparent border-8">
        <img className="w-14 z-50" src={buy} alt="buy" />
        <div className="text-2xl font-extrabold pt-5">Buy A Home</div>
        <div className="text-sm tracking-normal pt-5 pb-10 text-gray-300">
          Find your place with an immersive photo experience and the most
          listings, incliuding things you wont find anywhere else.
        </div>
        <div className="flex items-center">
          <span className="text-blue-500 font-bold text-sm">Learn More</span>{" "}
          <BsArrowRightShort fontSize={24} className="text-blue-500" />
        </div>
      </div>

      <div className="glass bg-lightWhite text-white shadow-2xl px-5 py-10 rounded-2xl border-transparent border-8">
        <img className="w-14" src={rent} alt="buy" />
        <div className="text-2xl font-extrabold pt-5">Rent A Home</div>
        <div className="text-sm tracking-normal pt-5 pb-10 text-gray-300">
          We're creating a seamless online experirnce - from shopping on the
          largest rental network, to applying and paying rent.
        </div>
        <div className="flex items-center">
          <span className="text-blue-500 font-bold text-sm">Learn More</span>{" "}
          <BsArrowRightShort fontSize={24} className="text-blue-500" />
        </div>
      </div>

      <div className="glass bg-lightWhite text-white shadow-2xl px-5 py-10 rounded-2xl border-transparent border-8">
        <img className="w-14" src={sell} alt="buy" />
        <div className="text-2xl font-extrabold pt-4">Sell A Home</div>
        <div className="text-gray-300 text-sm tracking-normal pt-4 pb-10">
          Whether you get a cash offer through offers or choose to sell
          traditionally, we can help you navigate a successful slae.
        </div>
        <div className="flex items-center">
          <span className="font-bold text-sm text-blue-500">Learn More</span>{" "}
          <BsArrowRightShort fontSize={24} className="text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default HeroFeature;
