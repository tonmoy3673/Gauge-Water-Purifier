import mobileLandingImage from "@/assets/mobile-landing.webp";

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center items-center py-10 bg-[#1c1c3a] h-screen">
      <img src={mobileLandingImage} alt="happy man" className="w-10/12"></img>
      <div>
        <h1>
          Gauge Water Purifier
          <span>Puts An End</span>
          To RO Service Pain
        </h1>
        <h5>
          Fully automatic water purifier provides the highest water savings
          while ensuring a seamless service experience.
        </h5>
        <button>Take a product Tour</button>
        <p>
          Experience Convenience Like Never Before With Our Smart Water Purifier
        </p>
      </div>
    </div>
  );
};

export default Hero;
