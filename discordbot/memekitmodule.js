let alphabet = "abcdefghijklmnopqrstuvwxyz";
let cipher = "";

class MemeKit{
	
	constructor(){
		this.memeCount = 23; //Update this system later with dynamic count
		this.errorPresets = 
		{
			"standard" : "An error occurred. Please try again.",
			"shakespeare" : "The fault, dear User, is not in my code, but in yourself, that you fell for this.",
			"rickroll" : "Never gonna give you up. Never gonna let you down. Never gonna run around and desert you",
			"input" : "Suggest a joke message at: transcendentalbob@gmail.com",
			"wenceslas" : "Good King Wenceslas look'd out, On the Feast of Stephen, when the snow lay round about, Deep and crisp and even.",
			"quickmath" : "2 + 2 ≠ 4 - 1 ... Internet users, please learn some math :|",
			"profit" : "Step 1: Click on error message \nStep 2: ???? \nStep 3: Profit \nStep 3: Profit",
			"grammar" : "A non sequitur walks into a bar. This year's potato harvest is great.",
			"cipher" : "OHO JFV GIEUUJ TFBRIG BF AGEAL BRHP AHYRIG? JFV CVPB TI TFGIO.",
			"goals" : '"Everyone can reach his goal, if he can think, wait and fast." -- Siddartha from the Hermann Hesse novel of the same name.',
			"nickels" : "If I had a nickel for every star in the observable universe (based on current estimates), I could cover the Earth in nickels and buy a new car with the leftovers.",
			"disfluency" : "Apparently disfluency in speech has been linked to higher information retention in the audience...",
			"emoticons" : "Wikipedia has a list of emoticons. Here's the one for Homer Simpson: ~(_8^(I)",
			"bruh" : "what"
		};
	}
	
	rickroll(){
		return 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1';
	}
	
	error(message="random"){
		let text;
		if(message === "random"){
			text = this.randomPropertyOf(this.errorPresets);
		} else if(message in this.errorPresets){
			text = this.errorPresets[message];
		} else {
			text = message;
		}
		return ` \`\`\`css
[Error] ${text}
		\`\`\` `;
	}
	
	write(message="random"){
		let text;
		if(message === "random"){
			text = this.randomPropertyOf(this.errorPresets);
		} else if(message in this.errorPresets){
			text = this.errorPresets[message];
		} else {
			text = message;
		}
		return text;
	}
	
	getMeme(id="random"){
		let num;
		if(id === "random"){
			num = Math.floor(Math.random()*this.memeCount) + 1;
		} else if(id <= this.memeCount && id >= 1){
			num = id;
		} else {
			num = 0;
		}
		return "https://scalarfield.github.io/images/memes/meme"+num+".jpg"
	}
	
	randomPropertyOf(obj){
		let keys = Object.keys(obj);
    	return obj[keys[ keys.length * Math.random() << 0]];
	}
	
	randomMASC(){
		let alpha = alphabet.split("");
		let cipher = [];
		while(alpha.length > 0){
			let i = Math.floor(alpha.length*Math.random());
			cipher.push(alpha[i]);
			alpha.splice(i, 1);
		}
		return cipher.join("");
	}
	
	isValidCipher(ct){
		if(ct.length !== 26){
			return false;
		}
		for(let i=0;i<ct.length;i++){
			let regexp = new RegExp(ct.charAt(i), 'g');
			if( ((alphabet.match(regexp) || []).length) !== 1 ){
				return false;
			}
			let regexp2 = new RegExp(alphabet.charAt(i), 'g');
			if( ((ct.match(regexp2) || []).length) !== 1 ){
				return false;
			}
		}
		return true;
	}
	
	inputCipher(input, ct="random"){
		if(!this.isValidCipher(ct)){
			cipher = this.randomMASC();
		} else {
			cipher = ct;
		}
		let output = "";
		for(let i=0;i<input.length;i++){
			let key = input.charAt(i);
			let letters = "qwertyuioplkjhgfdsazxcvbnmMNBVCXZASDFGHJKLPOIUYTREWQ";
				if(letters.indexOf(key) > -1){
				let plainLetter = key.toLowerCase();
				let cipherLetter = cipher.charAt(alphabet.indexOf(plainLetter));
				if(key.toLowerCase() !== key){
					cipherLetter = cipherLetter.toUpperCase();
				}
				output += cipherLetter;
			}
		}
		return output;
	}
				
	help(){ //This is syntax for the MemeKit Discord Bot. Change this to apply to your project.
		return `__**Syntax: $command^arg1^arg2...**__

**\`$rickroll\`** -- Rickrolls
**\`$error^content\`** -- Error message. Random preset by default. Specify preset or custom message with **optional** \`content\` parameter.
**\`$write^content\`** -- Same as \`error\` but writes like a normal message.
**\`$meme^number\`** -- Random image from scalarfield.github.io/images/memes/ - Specify meme number with **optional** \`number\` parameter.
**\`$masc\`** -- Random monoalphabetic substitution cipher (each letter in the alphabet is replaced with a different one).
**\`$cipher^text^masc\`** -- Returns \`text\` encoded with a random MASC. Specify the MASC to use with **optional** \`masc\` parameter
**\`$help\`** -- Lists commands
`	
	}

	
}

exports.MemeKit = MemeKit;
