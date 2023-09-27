import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
const PieCharts = ({ totalDonation }) => {
  // console.log(totalDonation);
  const donateItem = JSON.parse(localStorage.getItem('donated'));
  // console.log(myDonation);

  let remainingTotal = 0;
  let myDonation;
  if (donateItem) {
    const myDonation = donateItem.length;
    remainingTotal = totalDonation.length - myDonation;
  } else {
    remainingTotal = totalDonation.length;
  }
  const data = [
    { name: 'Your donation', value: remainingTotal },
    { name: 'Total donation', value: myDonation },
  ];

  const COLORS = ['#FFBB28', '#00C49F'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="mx-auto py-16 w-[650px] h-[650px]">
      <ResponsiveContainer
        className="mx-auto w-full h-full"
        width="100%"
        height="100%"
      >
        <PieChart className="mx-auto w-full h-full">
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={140}
            fill="#FFBB28"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex gap-2 items-center justify-center">
        <p className="bg-[#00C49F]  h-3 w-24"></p>
        <p className="lg:text-xl font-medium">Your Donation</p>
        <p className="bg-[#FFBB28] h-3 w-24"></p>
        <p className="lg:text-xl font-medium">Total Donation</p>
      </div>
    </div>
  );
};

export default PieCharts;
