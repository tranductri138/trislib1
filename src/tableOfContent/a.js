const axios = require("axios");

const link =
  "https://docs.google.com/spreadsheets/d/1bYCqKUdTcVpLcQFwF9vrWmnpyvegR1CAd8C9cqHaj7w/edit#gid=0";
const ggSheet = async () => {
  await axios.get(link).then((res) => {
    console.log(res.data);
  });
};

module.exports = ggSheet;
