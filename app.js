const komada = require('komada');
const token = require("./token.json");
komada.start({
  "botToken": token.token,
  "ownerID" : "199621462586425346",
  "clientID": "308307302195396618",
  "prefix": "?",
  "clientOptions": {
    "fetchAllMembers": true
  }
});