import water from "@/assets/water-lg.webp";
const Control = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 py-16 mt-10 items-center justify-items-center">
      <div className="mb-8">
        <h1 className="font-semibold text-5xl">
          Take Control <br />
          <span className="text-[#ff5f55]">
            Monitor Usage & Change <br /> Filters
          </span>
          <br />
          No Technician Needed
        </h1>
        <p className="mt-3 py-5 text-base text-[#6b6b6b]">
          We have crafted a product that addresses the real frustrations of a
          <br />
          customer. The first step is to ensure there are zero service delays.
        </p>
        <div>
          <h3 className="font-semibold text-xl lg:text-align">
            Smart Water Purifier With Self Servicing Capability
          </h3>
          <p className="text-base lg:text-start py-4">
            Say goodbye to the hassle of scheduling a technician for purifier
            maintenance with our.
            <span className="font-semibold">self-replacing</span> filters.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-xl lg:text-align">
            Compensation For Service Delays
          </h3>
          <p className="text-base lg:text-start py-4">
            You are entitled to a compensation of 100 Rs/Day if service is
            delayed for more than 24 hours.
            <span className="font-semibold">self-replacing</span> filters.
          </p>
        </div>
      </div>
      <img src={water}></img>
    </div>
  );
};

export default Control;
