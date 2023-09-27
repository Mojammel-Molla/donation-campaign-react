import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert';

const DonationCard = () => {
  const [donation, setDonation] = useState();
  const { id } = useParams();
  console.log(id);
  const donations = useLoaderData();
  const { title, price, picture, description, text_button_bg_color } =
    donation || {};
  console.log(donation);
  useEffect(() => {
    const findDonation = donations?.find(donate => donate.id == id);
    setDonation(findDonation);
    console.log(donations);
  }, [id, donations]);
  const handleAddDonate = () => {
    const addDonationArray = [];
    const donateItem = JSON.parse(localStorage.getItem('donated'));
    if (!donateItem) {
      addDonationArray.push(donation);
      localStorage.setItem('donated', JSON.stringify(addDonationArray));
      swal('Good job!', 'You have donated successfully!', 'success');
    } else {
      const isExists = donateItem.find(donate => donate.id == id);
      if (isExists) {
        swal('Error!', 'You have already donated!', 'error');
      } else {
        addDonationArray.push(...donateItem, donation);
        localStorage.setItem('donated', JSON.stringify(addDonationArray));
        swal('Good job!', 'You have donated successfully!', 'success');
      }
    }
  };

  return (
    <div className="max-w-7xl">
      <div>
        <div>
          <img className=" rounded-lg relative h-[78vh] w-full" src={picture} />
        </div>
        <div className="absolute  lg:left-[17%] lg:bottom-[12%] bg-black lg:h-20 opacity-30 lg:w-[1270px]"></div>
        <button
          onClick={handleAddDonate}
          style={{
            backgroundColor: `${text_button_bg_color}`,
          }}
          className=" absolute text-white font-medium px-5 py-2 rounded-lg  left-[18%] bottom-[14%]   "
        >
          Donate${price}
        </button>
      </div>

      <div className="mt-5">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="mt-5 font-semibold text-xl">{description}</p>
      </div>
    </div>
  );
};

export default DonationCard;
