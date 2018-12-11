var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // bot needs to know if it will execute a command
    // It will listen for messages that will start with `.`
    if (message.substring(0, 1) == '.') {
	var args = message.substring(1).split(' ');
        var cmd = args[0];
       	var message = cmd
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'yeet':
                bot.sendMessage({
                    to: userID,
                    message: 'Yeeting is dead, but OK. YEEEEEET!'
                });
		console.log(user + ':' + userID + ' typed ' + message);
            break;
            // Just add any case commands if you want to..
		case 'dab':
                bot.sendMessage({
                    to: userID,
                    message: 'dab',
		    file: ['https://i.gifer.com/hbA.gif']
              });
	      console.log(user + ':' + userID + ' typed ' + message);
	      break;
		case 'yomomma':
		var yomommalist = ['Yo momma so fat, she broke the 256 block limit in Minecraft','Yo momma so ugly, Medusa turned to stone when she looked at her','Yo momma so fat, when she fell, nobody was laughing but the ground was cracking up','Yo momma so fat, when she sat on WalMart, she lowered the prices','Yo momma so fat when she got on the scale it said, I need your weight not your phone number','Yo momma so fat, I took a picture of her last Christmas and its still printing','Yo momma so fat, when she jumped from the Battle Bus, she destroyed the Fortnite Map!'];
		var yomomma = yomommalist[(Math.floor(Math.random() * yomommalist.length))];		
                bot.sendMessage({
                    to: channelID,
                    message: yomomma
                });

         }
     }
});

