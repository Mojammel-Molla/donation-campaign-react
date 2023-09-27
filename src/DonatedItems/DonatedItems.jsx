import React, { useEffect, useState } from 'react';
import DonatedItem from '../DonatedItem/DonatedItem';

const DonatedItems = () => {
  const [allDonates, setAllDonates] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [noDataFound, setNoDataFound] = useState(false);

  useEffect(() => {
    const donateItem = JSON.parse(localStorage.getItem('donated'));
    console.log(donateItem);
    if (donateItem) {
      setAllDonates(donateItem);
    } else {
      setNoDataFound('You have not donated yet!');
    }
  }, []);

  return (
    <div>
      <h1 className="text-center lg:text-4xl font-bold pb-5">
        All Donated Items
      </h1>
      {noDataFound ? (
        <p className="text-2xl flex justify-center items-center h-[80vh]">
          {noDataFound}
        </p>
      ) : (
        ''
      )}
      <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {isShow
          ? allDonates?.map(donate => (
              <DonatedItem key={donate.id} donate={donate}></DonatedItem>
            ))
          : allDonates
              ?.slice(0, 2)
              .map(donate => (
                <DonatedItem key={donate.id} donate={donate}></DonatedItem>
              ))}
      </div>

      {allDonates.length > 2 && (
        <button
          onClick={() => {
            setIsShow(!isShow);
          }}
          className=" block mx-auto bg-black text-white px-3 py-2 mt-3 rounded-lg"
        >
          {isShow ? 'Show Less' : 'Show All'}
        </button>
      )}
    </div>
  );
};

export default DonatedItems;
