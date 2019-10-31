const {Client, Attachment} = require('discord.js');
const Discord = require('discord.js');
const bot = new Client();
//const Discord = require('discord.js');
//const bot = new Client();
//allow this project to login to AlexBot; implement the login information to allow us to login to AlexBot and change stuff
const token = 'NjM2OTM3MTg4MDE3MzA3Njc5.XbG6FQ.hlF4SxR3NwlVTAWKRbhNunofhgA'; //this is our token, provided by discord
const PREFIX = '!'; //to call the bot
bot.on('ready', () => {
    console.log('This bot is online!');
})


bot.on('message', message=> {

    let args = message.content.substring(PREFIX.length).split(" ");

    var attachment = ['./images/bear 1.jpg', './images/bear 2.jpg','./images/bear 3.jpg','./images/bear 4.jpg','./images/bear 5.jpg'];
    var randomNumber = Math.floor(Math.random()*attachment.length);

    if(message.content === '=3=')
        message.channel.sendMessage('=Ɛ=');
    if(message.content === 'owo')
        message.channel.sendMessage('ùwú');
    if(message.content === 'uwu')
        message.channel.sendMessage('◉‿◉');

    switch(args[0]){
        case 'help':
            if(args[1] === 'please'){
                message.channel.sendMessage('ok fine...');
                const embed = new Discord.RichEmbed()
                .setTitle('General Information')
                .addField('!clear #', 'alex clears previous lines in chat')
                .addField('!help please', 'alex tells you general information')
                .addField('!image', 'sends one of alex\'s favorite images')
                .addField('!yoink @user', 'alex steals your avatar')
                .setColor(0xF1C40F)
                .setThumbnail(message.author.avatarURL)
                message.channel.sendEmbed(embed);
            }
            else
                message.channel.sendMessage('say it nicely');
        break;

        case 'clear':
            if(!args[1])
                return message.reply('type the arguments correctly idit.');
            message.channel.bulkDelete(args[1]);
        break;

        case 'image':
            const attach = new Attachment(attachment[randomNumber]);
            message.channel.send(message.author, attach);
        break;

        case 'yoink':
            var user = message.mentions.users.first();
            const embed = new Discord.RichEmbed()
            .setImage(user.avatarURL)
            .setColor(0xF1C40F)
            message.channel.sendEmbed(embed);
        break;

    }
}) //listening to our bot with a message

bot.login(token); //logs in bot
