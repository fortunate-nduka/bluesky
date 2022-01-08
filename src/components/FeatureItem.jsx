import house from "../assets/house.jpg";
import { BiBed } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { Fragment } from "react";

const FeatureItem = () => {
  return (
    <Fragment>
      <figure className="bg-white pt-7 pb-8 px-5 rounded-2xl shadow-md">
        <div className="pb-4">
          <div className="relative py-4">
            <div className="-translate-x-2 absolute bg-blue-300 rounded-full w-16 h-16 top-0 left-0"></div>
            <div className="text-lg font-bold relative z-10 pl-5">
              Creekside Apartment
            </div>
            <div className="relative z-10 pl-7 fontbtext-sm">USA</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm flex items-center gap-x-2">
              <BiBed fontSize={15} className="text-blue-500" /> 5 Beds
            </div>
            <div className="text-sm flex items-center gap-x-2">
              <FaBath fontSize={15} className="text-blue-500" /> 5 Baths
            </div>
            <div className="text-sm flex items-center gap-x-2">
              <BiBed fontSize={15} className="text-blue-500" /> 3000 sqft
            </div>
          </div>
        </div>
        <img src={house} alt="" className=" mx-auto rounded-lg shadow-md" />
        <div className="flex items-center justify-between pt-3">
          <div className="text-sm">
            Price: <br /> <span className="text-lg font-bold">$3,000</span>
          </div>
          <button className="text-sm px-7 py-2 outline outline-1 rounded-md font-bold hover:bg-blue-500 hover:text-white hover:outline-0 cursor-pointer transition duration-150 ease-in-out">
            View Details
          </button>
        </div>
      </figure>
    </Fragment>
  );
};

export default FeatureItem;
