const axios = require("axios");

//const TEST_SERVER_URL = "https://log-api.cyclic.app/log";

const TEST_SERVER_URL = "https://httpbin.org/post";



function Log(stack, level, pkg, message) {
  const payload = {
    stack,
    level,
    package: pkg,
    message
  };

  axios.post(TEST_SERVER_URL, payload)
    .then(res => {
      console.log(`Log sent: ${res.status}`);
    })
    .catch(err => {
      console.error(`Failed to send log: ${err.message}`);
    });
}

module.exports = Log;
