const config = require("../config.json");
const db = require("quick.db");
const Discord = require("discord.js");
module.exports = {
  name: "help", // Command Name
  description: "List all of my commands/info about a specific command.", // Description
  aliases: ["h"], // Aliases
  usage: " ", // Usage
  cooldown: 5, // Cooldown In Seconds
  guildOnly: false, // If Command In DMs return
  admin: false, // Bot Admin only
  async execute(message, args, client) {
    
    
    //this code is for custom prefixes
    let dbprefix = db.fetch(`prefix_${message.guild.id}`);
    if(dbprefix) {
      var prefix = dbprefix
    } else {
      var prefix = config.prefix
    }
    //this code is for custom prefixes
    
    
    message.channel.send(`**${prefix}help** - Shows all commands!\n**${prefix}setprefix <prefix>** - Change the prefix for this specfic server\n`);
  }
};
