import mobileLandingImage from "@/assets/mobile-landing.webp";

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center items-center py-10 bg-[#1c1c3a] h-screen">
      <img
        src={mobileLandingImage}
        alt="happy man"
        className="lg:w-10/12 w-full"
      ></img>
      <div className="text-center">
        <h1 className="text-white text-6xl font-semibold capitalize	">
          Gauge Water Purifier
        </h1>
        <h1 className="text-white text-6xl mt-4 font-semibold capitalize	">
          <span className="mt-4 bg-gradient-to-r to-[#fea063] from-[#d73365] text-transparent bg-clip-text me-2">
            Puts An End
          </span>
          To RO <br /> Service Pain
        </h1>
        <h5 className="py-8 text-center text-[#b5b5b5]">
          Fully automatic water purifier provides the highest water savings
          while ensuring a seamless service experience.
        </h5>
        <button className="btn bg-blue-500 p-5 rounded-full text-white text-base font-semibold">
          Take a product Tour
        </button>
        <p className="py-8 text-center text-[#b5b5b5]">
          Experience Convenience Like Never Before With Our Smart Water Purifier
        </p>
      </div>
    </div>
  );
};

export default Hero;
