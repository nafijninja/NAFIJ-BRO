const fs = require("fs");

module.exports.config = {
  name: "nafijtest",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "NAFIJ_PRO", 
  description: "replay auto",
  prefix: false,
  category: "user",
  usages: "hi",
  cooldowns: 5 // Removed the duplicate entry
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;

  if (
    event.body.startsWith("bot") || 
    event.body.startsWith("nafij") || 
    event.body.startsWith("@Nafijur Rahaman")
  ) {
    var msg = {
      body: "MY CREATOR IS NAFIJ BRO",
      attachment: fs.createReadStream(__dirname + `/NAFIJ/nafij.jpg`)
    };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤡", messageID, (err) => {}, true);
  }

  if (
    event.body.startsWith("Test") || 
    event.body.startsWith("test") || 
    event.body.startsWith("TEST")
  ) {
    var msg = {
      body: "MY CREATOR IS NAFIJ BRO",
      attachment: fs.createReadStream(__dirname + `/NAFIJ/nafij1.jpg`)
    };
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😚", messageID, (err) => {}, true);
  }
};

module.exports.run = function({ api, event, client, __GLOBAL }) {};
