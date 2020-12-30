const Discord = require("discord.js")
const util = require('util')
module.exports = {
	name: 'eval',
	description: 'Evaluate JavaScript Code.',
	aliases: ['e'],
	usage: ' ',
	cooldown: 5,
	guildOnly: false,
	admin: true,
	async execute(message, args, client) {

         const arg = message.content.split(" ").slice(1)
    if (arg.length == 0) return message.reply("You must provide JavaScript code!");
    try {
        let output = eval(arg.join(" "));
        if (typeof output !== "string") output = util.inspect(output);
        return message.channel.send(`**Output:**\n\`\`\`js\n${output}\n\`\`\``);
    } catch(err) {
        return message.channel.send(`**Error:**\n\`${err}\``);
    
}
  }
}