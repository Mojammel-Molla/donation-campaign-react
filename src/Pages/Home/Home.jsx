import { useLoaderData } from 'react-router-dom';
import Banner from '../../Header/Banner/Banner';
import Donation from '../Donation/Donation';
import { useState } from 'react';

const Home = () => {
  const donations = useLoaderData();
  const [allDonations, setAllDonations] = useState(donations);
  const [searchValue, setSearchValue] = useState(donations);
  const handleSearch = e => {
    e.preventDefault();
    const search = document.getElementById('SearchInput').value;
    if (search.length) {
      const searchItems = allDonations.filter(
        donate => donate.category.toLowerCase() === search.toLowerCase()
      );
      if (searchItems) {
        setSearchValue(searchItems);
      } else {
        setSearchValue(allDonations);
      }
    }
  };
  return (
    <div className="max-w-7xl">
      <Banner></Banner>

      <h1 className=" sm:text-3xl lg:text-5xl font-bold text-center my-10 underline">
        All Donation Categories
      </h1>
      <div className="grid max-w-7xl mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3  ">
        {donations?.map(donation => (
          <Donation key={donation} donation={donation}></Donation>
        ))}
      </div>
      <div className=" ">
        <div className=" bg-slate-200 bg-blend-screen  h-[60vh] bg-cover  bg-[url('../../../src/assets/banner.jpg')]">
          <div className="text-center justify-center h-auto lg:pt-44">
            <h1 className=" text-black sm:text-2xl lg:text-5xl font-bold  mb-5">
              I Grow By Helping People In Need
            </h1>
            <div>
              <input
                id="SearchInput"
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
    </div>
  );
};

export default Home;
