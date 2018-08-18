let discord = require('discord.io');
let logger = require('winston');
let auth = require('./auth.json');

let memekit = require('./memekitmodule.js');

const commandList = ["rickroll", "error", "write", "getMeme", "inputCipher", "randomMASC", "help"];
const aliases = ["rickroll", "error", "write", "meme", "cipher", "masc", "help"];
const trigger = "$";
const argTrigger = "^";
const targetUser = "[insert_target_user_here]";

logger.remove(logger.transports.Console);

logger.add(new logger.transports.Console, {
colorize: true});
logger.level = 'debug';
// Initialize Discord Bot
let memebot = new discord.Client({
token: auth.token,
autorun: true
});
let mk;

memebot.on('ready', (event) => {
	logger.info('Connected');
	logger.info('Logged in as:');
	logger.info(memebot.username + ' – (' + memebot.id + ')');
	mk = new memekit.MemeKit();
});
console.log('here');
memebot.on('message', (user, uID, cID, message, event) => {
	if(user !== "MemeKit"){
		let commands = [];
		let commandArgs = [];
		let words = message.split(" ");
		//console.log(message, message.split(" "), words);
		for(let word of words){
			if(word.charAt(0) === trigger){
				let w;
				if(word.indexOf(argTrigger) >= 0){
					w = word.substring(1, word.indexOf(argTrigger));
				} else {
					w = word.substring(1);
				}
				if(aliases.indexOf(w) >= 0){
					commands.push(commandList[aliases.indexOf(w)]);
				}
				if(word.indexOf(argTrigger) >= 0){
					commandArgs.push(word.substring(word.indexOf(argTrigger)+1).split(argTrigger));
				} else {
					commandArgs.push(["random"]);
				}
			}
		}
	//	console.log(commands);
	//	console.log(commandArgs);
		for(let i=0;i<commands.length;i++){
			memebot.sendMessage({
				to: cID,
				message: mk[commands[i]](...commandArgs[i])
			});
			if(user === targetUser){
				memebot.sendMessage({
					to: cID,
					message: `<@${uID}> [message_for_target]`
				});	
			}
		}
	}
});
