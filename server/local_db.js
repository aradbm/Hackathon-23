'use strict';

const types = ['T-shirt', 'pants', 'jeans', 'shoes', 'jacket', 'sweater', 'dress', 'skirt', 'shorts', 'underwear', 'socks', 'belt'];
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'cyan', 'purple', 'pink', 'brown', 'black', 'white', 'gray'];
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
const store_locations = ['kupa', 'booths'];
const snifim = ['dizingof_center', 'natanya', 'bat_yam', 'kiryat_ono', 'hadera', 'beer_sheva', 'yeroshalaim', 'rishon_lezion', 'ashkelon', 'tveria', 'eilat'];
const prices = [30,40,50,60,70,80,90,100,120,150,200];
const time = ["2023-05-12 09:21:33"]

// converts unixtimestamp to a YYYY-MM-DD HH:mm:ss datetime format
const convertUnixTimestamp = (unixTimestamp) => {
    const date = new Date(unixTimestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // add leading zero if necessary
    const day = String(date.getDate()).padStart(2, '0'); // add leading zero if necessary
    const hour = String(date.getHours()).padStart(2, '0'); // add leading zero if necessary
    const minute = String(date.getMinutes()).padStart(2, '0'); // add leading zero if necessary
    const second = String(date.getSeconds()).padStart(2, '0'); // add leading zero if necessary
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  };
  
  const currentDate = new Date();
  
const generateRandomDate = (from, to) => {
    let date = new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()));
    console.log(date);
    return date;
}

  const getRandomItem = (id) => {
    let item = {
      makat: id,
      type: types[Math.floor(Math.random() * types.length)],
      price: prices[Math.floor(Math.random() * prices.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      size: sizes[Math.floor(Math.random() * sizes.length)],
      scan_date: generateRandomDate(new Date(), new Date(2023, 5, 12)),
      store_location: store_locations[Math.floor(Math.random() * store_locations.length)],
      snif: snifim[Math.floor(Math.random() * snifim.length)]
    };
    return item;
  };
  
  module.exports.getRandomItem = getRandomItem;
  module.exports.generateRandomDate = generateRandomDate;