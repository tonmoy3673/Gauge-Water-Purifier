import water from "@/assets/water-lg.webp";

const Control = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 py-16 mt-10 items-center justify-items-center px-6">
      <div className="mb-8 px-3">
        <div className="text-center">
          <button className="p-4 mb-4 pointer-events-none rounded-full font-semibold text-[#4b5563] text-lg shadow-lg shadow-blue-400/50 flex items-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
            >
              <path
                d="M5.367 2.36968L0.839844 4.01463V8.20995C0.839844 12.0213 0.849325 12.4479 0.925172 12.9457C1.27597 15.1785 2.17192 16.9277 3.7979 18.5395C4.76496 19.5018 5.7652 20.2223 7.09727 20.9144C8.09751 21.4359 9.57654 22 9.93208 22C10.1122 22 11.2025 21.6302 11.814 21.36C13.3879 20.6679 14.7863 19.7578 15.8909 18.6959C17.7207 16.9419 18.7541 14.8134 18.9722 12.3294C19.0054 11.9407 19.0196 10.419 19.0101 7.87338L18.9959 4.00989L14.4687 2.36494C11.98 1.45951 9.93208 0.719999 9.91786 0.719999C9.90364 0.719999 7.85575 1.45951 5.367 2.36968ZM14.4924 8.34743L15.0139 8.86888L11.705 12.1777L8.4009 15.4818L6.61374 13.6947L4.82658 11.9075L5.35752 11.3719L5.88845 10.8362L7.14468 12.0924L8.4009 13.3486L11.1646 10.5849C12.6816 9.06798 13.933 7.82597 13.9473 7.82597C13.9615 7.82597 14.208 8.063 14.4924 8.34743Z"
                fill="#1962F2"
              ></path>
            </svg>
            <span className="ms-3">Customers Needs Above All Else</span>
          </button>
        </div>
        <h1 className="font-semibold text-5xl leading-snug mt-4">
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
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.99982 0C4.48655 0 0 4.48568 0 9.99965C0 15.5136 4.48626 20 9.99982 20C15.5143 20 19.9997 15.5139 19.9997 9.99965C19.9997 4.48568 15.5146 0 9.99982 0ZM14.3277 7.95082L9.09047 13.1881C8.93322 13.3451 8.72599 13.4244 8.52068 13.4244C8.31379 13.4244 8.10848 13.3452 7.9507 13.1881L5.67298 10.9103C5.35806 10.5951 5.35806 10.0853 5.67298 9.77046C5.98783 9.4556 6.49766 9.4556 6.81257 9.77046L8.52068 11.4791L13.1888 6.81076C13.503 6.49626 14.0128 6.49626 14.3277 6.81076C14.6426 7.12614 14.6426 7.63597 14.3277 7.95082Z"
                fill="#39C69B"
              ></path>
            </svg>
            <h3 className="font-semibold text-xl lg:text-align ms-3">
              Smart Water Purifier With Self Servicing Capability
            </h3>
          </div>
          <p className="text-base lg:text-start py-4 text-[#6b6b6b]">
            Say goodbye to the hassle of scheduling a technician for purifier
            maintenance with our.
            <strong> self-replacing</strong> filters.
          </p>
        </div>
        <div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.99982 0C4.48655 0 0 4.48568 0 9.99965C0 15.5136 4.48626 20 9.99982 20C15.5143 20 19.9997 15.5139 19.9997 9.99965C19.9997 4.48568 15.5146 0 9.99982 0ZM14.3277 7.95082L9.09047 13.1881C8.93322 13.3451 8.72599 13.4244 8.52068 13.4244C8.31379 13.4244 8.10848 13.3452 7.9507 13.1881L5.67298 10.9103C5.35806 10.5951 5.35806 10.0853 5.67298 9.77046C5.98783 9.4556 6.49766 9.4556 6.81257 9.77046L8.52068 11.4791L13.1888 6.81076C13.503 6.49626 14.0128 6.49626 14.3277 6.81076C14.6426 7.12614 14.6426 7.63597 14.3277 7.95082Z"
                fill="#39C69B"
              ></path>
            </svg>
            <h3 className="font-semibold text-xl lg:text-align ms-3">
              Compensation For Service Delays
            </h3>
          </div>
          <p className="text-base lg:text-start py-4 text-[#6b6b6b]">
            You are entitled to a compensation of <strong>100 Rs/Day</strong> if
            service is delayed for more than 24 hours.
          </p>
        </div>
        <div className="text-center">
          <button className="btn bg-blue-500 p-6 rounded-full text-white text-lg font-semibold">
            Next : Smart Water Conservation
          </button>
        </div>
      </div>
      <img src={water} className="hover:-translate-y-2"></img>
    </div>
  );
};

export default Control;
