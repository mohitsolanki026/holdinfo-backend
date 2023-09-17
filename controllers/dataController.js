const axios = require('axios');
const Data = require('./../models/Data'); 

async function fetchData(req, res) {
  try {
    await Data.deleteMany({});
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');

    const keysToStore = Object.keys(response.data).slice(0, 10);

    for (const key of keysToStore) {
      const item = response.data[key];

      const newData = new Data({
        name: key,
        value: {
          name: item.name,
          last: item.last,
          buy: item.buy,
          sell: item.sell,
          volume: item.volume,
          base_unit: item.base_unit,
        },
      });

      await newData.save();
    }

    return res.send('First 10 entries saved successfully!');
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
}

async function getData(req,res){
    try {
        const data = await Data.find();
        if(!data){
            return res.send("no data available");
        }

        return res.json(data);
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
}

module.exports = {
  fetchData,
  getData
};
