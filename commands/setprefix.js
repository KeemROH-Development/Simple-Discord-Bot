const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "setprefix",
  description: "Change the server's prefix!",
  aliases: ["sp"],
  usage: "<prefix>",
  cooldown: 5,
  guildOnly: false,
  admin: false,
  async execute(message, args, client) {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "You are missing **MANAGE GUILD** permission."
      );
    if (!args[0])
      return message.channel.send(
        "Please use at least one character for your prefix"
      );
    if (!isNaN(args[0]))
      return message.channel.send(`Your prefix musn't be a number`);
    db.set(`prefix_${message.guild.id}`, args[0]);
    const newprefix = new Discord.MessageEmbed()
      .setTitle("Prefix Changed")
      .setDescription(`**__New Prefix:__**: ${args[0]}`)
      .setTimestamp();
    message.channel.send(newprefix);
  }
};
