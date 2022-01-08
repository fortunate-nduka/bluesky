import FeatureItem from "./FeatureItem";

const Feature = () => {
  return (
    <div className="bg-blue-50 relative w-full py-24 px-5 lg:px-10">
      <div className="relative z-20">
        <div className="md:w-2/4 mb-10">
          <div className="text-4xl font-bold pb-4">Our Featured Properties</div>
          <div className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
            veritatis illo rerum suscipit, quo eos possimus mollitia ipsam aut
            eveniet.
          </div>
        </div>
      </div>
      <div className="relative z-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8">
        <FeatureItem />
        <FeatureItem />
        <FeatureItem />
      </div>
    </div>
  );
};

export default Feature;
