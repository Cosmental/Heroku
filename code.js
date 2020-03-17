const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NjcxMTAzNDcwMzcxMjA5MjM2.XnEAYw.sTk4oiDUsOcf8R42kETT3e-Pr54');