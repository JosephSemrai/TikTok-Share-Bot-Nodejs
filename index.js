const fetch = require("node-fetch");

// const hrstart = process.hrtime();

const [
  protocol,
  delimiter,
  rootAddress,
  userId,
  resourceType,
  resourceId,
] = "https://www.tiktok.com/@jeseffe/video/6858381483829136646".split(
  "/"
);

let count = 0;

const sendShareRequest = async () => {
  const actionTime = Math.round(new Date().getTime());

  randomDeviceId = Math.floor(Math.random() * 10000000000000000000);

  const requestData = `action_time=${actionTime}&item_id=${resourceId}&item_type=1&share_delta=1&stats_channel=copy`;
  const requestHeaders = {
    "Content-Type": "application/x-www-form-urlencoded",
    "x-common-params-v2": `version_code=16.6.5&app_name=musical_ly&channel=App%20Store&device_id=${randomDeviceId}&aid=1233&os_version=13.5.1&device_platform=iphone&device_type=iPhone10,5`,
    "User-Agent": "TikTok 16.6.5 rv:166515 (iPhone; iOS 13.6; en_US) Cronet",
  };

  fetch(
    "https://api16-core-c-useast1a.tiktokv.com/aweme/v1/aweme/stats/?ac=WIFI&op_region=SE&app_skin=white&",
    {
      method: "post",
      body: JSON.stringify(requestData),
      headers: requestHeaders,
    }
  )
    .then(() => count++)
    .catch((e) => console.log("Bot error: " + JSON.stringify(e)));
};
const runner = async () => {
  await Promise.all([
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
    sendShareRequest(),
  ]);
};

console.log("Initializing...");

setInterval(function () {
  // const end = new Date() - start,
  runner();
}, 1);

setInterval(function () {
  console.log("Current count: ", count);
}, 5000);
runner();
