const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = ';';

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
	if(message.content === 'lol')
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

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]{
        case 'ping':
            message.channel.sendmessage('pong!')
        break;
        case 'clear':
            if(!args[1]) return message.reply('Please specify the number of messages to delete!')
            message.channel.bulkDelete(args[1];
        break;

bot.login(process.env.token);
