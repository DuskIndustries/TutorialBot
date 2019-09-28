const discord = require('discord.js');
const bot = new discord.Client({disableEveryone: true});
const config = require("./config.json");

bot.on('ready', async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("A Bot for YouTube");
});

bot.on('message', async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = cmd.slice(prefix.length);

  if(args === 'test') return message.channel.send("Hello World!");
});

bot.login(config.token);
