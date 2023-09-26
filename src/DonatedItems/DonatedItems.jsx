import React from 'react';
import DonatedItem from '../DonatedItem/DonatedItem';

const DonatedItems = () => {
  const donateItem = JSON.parse(localStorage.getItem('donated'));
  console.log(donateItem);
  return (
    <div>
      <h1 className="text-center lg:text-5xl font-bold pb-5">
        All Donated Items
      </h1>
      <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {donateItem?.map(donate => (
          <DonatedItem key={donate.id} donate={donate}></DonatedItem>
        ))}
      </div>
    </div>
  );
};

export default DonatedItems;
