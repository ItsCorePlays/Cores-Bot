const Discord = require('discord.js')
const bot = new Discord.Client();

const token = 'NTg0NjU4OTQzMjgwNjc2ODc0.XPOdFw.ANGbWWEurjE3DsJEfTN6zDcC6iw';

bot.on('ready', () =>{
   Console.log('this bot is online!');
})

bot.off('stop', () =>{
   console.log('this bot is offline');
}) 

bot.login(token);