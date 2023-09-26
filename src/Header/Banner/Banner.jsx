// import BannerImg from '../../../src/assets/banner.jpg';
const Banner = () => {
  return (
    <div>
      <div className="bg-blend-overlay backdrop-brightness-50  h-[60vh] container bg-cover  bg-[url('../../../src/assets/banner.jpg')]">
        <div className="text-center justify-center h-auto lg:pt-44">
          <h1 className=" sm:text-2xl lg:text-5xl font-bold  mb-5">
            I Grow By Helping People In Need
          </h1>
          <div>
            <input className="p-2 rounded-l-lg md: w-1/3" type="text" />
            <button className="bg-[#FF444A] rounded-r-lg py-2 px-3 text-white">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
