function getRevenue(sales) {
  let sales = [25, 40, 10, 58];
  let sum = 0;
  for (let i = 0; i < sales.length; i++) {
    sum += sales[i];
  }
  return sum;
}

function checkRevenue(sales, plannedRevenue) {
  return getRevenue(sales) > plannedRevenue;
}

getRevenue([25, 40, 10, 58]);
checkRevenue([25, 40, 10, 58], 100);
