console.log("SFMC-client.js");
//const FuelRest = require('fuel-rest');
const options = {
  auth: {
    clientId: process.env.SFMC_CLIENT_ID,
    clientSecret: process.env.SFMC_CLIENT_SECRET,
    authOptions: {
      authVersion: 2,
      accountId: process.env.SFMC_ACCOUNT_ID,
    },
    authUrl: `https://${process.env.SFMC_SUBDOMAIN}.auth.marketingcloudapis.com/v2/token`,
  },
  origin: `https://${process.env.SFMC_SUBDOMAIN}.rest.marketingcloudapis.com/`,
  globalReqOptions: {
  },
};
//const client = new FuelRest(options);
console.log("auth from sfmc client"+auth);
console.log("authurl from sfmc client"+authUrl);
console.log("origin from sfmc client"+origin);
 //* Save data in DE
 //* @param externalKey
 //* @param data
 //* @returns {?Promise}
 
/*const saveData = async (externalKey, data) => client.post({
  uri: `/hub/v1/dataevents/key:${externalKey}/rowset`,
  headers: {
    'Content-Type': 'application/json',
  },
  json: true,
  body: data,
});
module.exports = {
  client,
  saveData,
};*/
