import { useLoaderData } from 'react-router-dom';
import Banner from '../../Header/Banner/Banner';
import Donation from '../Donation/Donation';

const Home = () => {
  const donations = useLoaderData();

  return (
    <div className="max-w-7xl">
      <Banner></Banner>

      <h1 className="text-5xl font-bold text-center my-10 underline">
        All Donation Categories
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mx-auto">
        {donations?.map(donation => (
          <Donation key={donation} donation={donation}></Donation>
        ))}
      </div>
    </div>
  );
};

export default Home;