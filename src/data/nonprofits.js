const nonProfits = [];

[...Array(10).keys()].map((i) => {
  const nonProfit = {
    id: i,
    name: `Nonprofit ${i}`,
    address: `${32 + i} Irving Place`,
    amount: `${Math.floor(Math.random() * Math.floor(500))}`,
  };
  nonProfits.push(nonProfit);
});

export default nonProfits;
