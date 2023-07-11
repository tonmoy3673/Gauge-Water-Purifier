import img from "../assets/mobile-landing";
const Hero = () => {
  return (
    <div className="">
      <img src={img} alt="happy man"></img>
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
