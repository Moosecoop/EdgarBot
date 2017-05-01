const komada = require('komada');
const config = require("./config.json");
komada.start({
  "botToken": config.token,
  "ownerID" : "199621462586425346",
  "clientID": "308307302195396618",
  "prefix": config.prefix,
  "clientOptions": {
    "fetchAllMembers": true
  }
});