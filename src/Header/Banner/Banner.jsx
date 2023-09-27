const Banner = ({ handleSearch, searchRef }) => {
  return (
    <div className=" ">
      <div className=" bg-slate-200 bg-blend-screen  h-[60vh] bg-cover  bg-[url('../../../src/assets/banner.jpg')]">
        <div className="text-center justify-center h-auto lg:pt-44">
          <h1 className=" text-black sm:text-2xl lg:text-5xl font-bold  mb-5">
            I Grow By Helping People In Need
          </h1>
          <div>
            <input
              ref={searchRef}
              className="border-2 p-2 rounded-l-lg md: w-1/3"
              type="text"
            />
            <button
              onClick={handleSearch}
              className="bg-[#FF444A] rounded-r-lg py-2 px-3 text-white"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
