import house from "../assets/house.jpg";

const Why = () => {
  return (
    <div className="bg-blue-50 py-24 px-5 md:px-8 flex flex-col lg:flex-row items-center justify-center lg:gap-x-10">
      <div className="lg:basis-2/4">
        <div className="md:w-3/4 lg:w-full">
          <div className="text-4xl font-bold pb-4">Why Choose Us</div>
          <div className="text-sm">
            We are passionate about creating an incredible client experience and
            determined to get the very best results!
          </div>
        </div>
        <div className="pt-14 md:grid grid-cols-2 lg:grid-cols-1 gap-x-7 gap-y-10 space-y-8 md:space-y-0">
          <div className="bg-blue-100 shadow-xl rounded-2xl px-5 py-10 md:hover:transform md:hover:scale-105 cursor-pointer">
            <div className="font-bold text-lg pb-3">Trusted Team</div>
            <div className="text-sm">
              Every single day - we take stand for our clients. As expert real
              estate strategist - we simply won't do the deal unless it's a
              great deal and you are completely happy
            </div>
          </div>
          <div className="bg-blue-100 shadow-xl rounded-2xl px-5 py-10 md:hover:transform md:hover:scale-105 cursor-pointer">
            <div className="font-bold text-lg pb-3">
              Market Ready & Destined to Sell
            </div>
            <div className="text-sm">
              It is well known that hmes sell faster and for more money. if they
              are perpared properly for sale. We can help you with home preparation and staging including facilitating repairs, so you can net the highest price possible!
            </div>
          </div>
          <div className="bg-blue-100 shadow-xl rounded-2xl px-5 py-10 md:hover:transform md:hover:scale-105 cursor-pointer">
            <div className="font-bold text-lg pb-3">Proven Results</div>
            <div className="text-sm">
              Over the past few years our brokers and agents have worked with reputable brokeage firms. Our proven marketing strategies often result in attracting multiple offers and selling the pproperty for far above the listp price in just a few days.
            </div>
          </div>
        </div>
      </div>
      <div className="lg:basis-2/4 bg-white pt-20 pb-8 px-4 rounded-2xl mt-16 lg:mt-0 md:w-3/4 mx-auto">
        <img src={house} alt="" className="rounded-2xl w-full" />
      </div>
    </div>
  );
};

export default Why;
