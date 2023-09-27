import PieCharts from '../../PieChart/PieChart';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
  const totalDonation = useLoaderData();

  // useEffect(() => {
  //   // console.log(totalDonation);
  //   const donateItem = JSON.parse(localStorage.getItem('donated'));
  //   // console.log(myDonation);
  //   let remainingTotal = 0;
  //   let myDonation = 0;
  //   if (donateItem) {
  //     const myDonation = donateItem.length;
  //     remainingTotal = totalDonation.length - myDonation;
  //   } else {
  //     remainingTotal = totalDonation.length;
  //   }
  // }, []);

  return (
    <div>
      <h1 className="text-center lg:text-4xl font-bold underline">
        All Donation Chart Percentage
      </h1>
      <PieCharts totalDonation={totalDonation}></PieCharts>
    </div>
  );
};

export default Statistics;
