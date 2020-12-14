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
      let prefix = config.prefix
    
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`Help Menu`)
    .setDescription(`The prefix for this server is ${prefix}`)
    .addField(`General commands:`, `${prefix}help - Shows all the commands you can use!\n`);
    message.channel.send(embed)
  }
};
