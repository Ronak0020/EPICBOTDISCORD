const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json")

bot.on('ready', async () => {
	console.log('${bot.user.username} is online!');
	bot.user.setActivity("Made by Ronak!", ("type: PLAYING"));
});

bot.on('message', message => {
	if(message.content === 'Hi')
	{
		message.channel.send('Hello!')
	}
});

bot.on('message', message => {
	if(message.content === ';lol')
	{
		message.reply('U r funny!')
	}
})

bot.on('message', message => {
	if(message.content === ';pikachu')
	{
		message.channel.send('https://cdn.discordapp.com/attachments/547949244686794782/566891274754588672/pikachu_hi_pokemon.webp')
	}
})

bot.on('message', message => {
	if(message.content === ';dialga')
	{
		message.channel.send('https://cdn.discordapp.com/attachments/547949244686794782/566933965521289226/DialgaVSpalkia_hq.gif')
	}
})

bot.login(config.token);