const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const readline = require('readline');
const fs = require('fs');
client.login('ODYyMjAwMjkzMzM2ODA5NDgy.YOU4mA.Wvh9iCCQu8i5hjM6afT-ybKKZg8');

var vote = [];
var voted = [];
var votes = [];
var changeID = [];
var voteCount = [];
var voteMons = [];
var changeMons = [];
var loadedVotes = false;

const debugOn = false;
const feuu = false;
const fuseID = '823049810922831893';
const voteID = (debugOn) ? '862200905956458497' : '859622377968369704';
const resultID = (debugOn) ? '862200912856612884' : '862219880223604736';
const botID = 862200293336809482;
const useless = ['Illuminate', 'Run Away', 'Honey Gather', 'Ball Fetch'];
const fscj = [
"warning: this fusion is cringe",
"note: i came up with this first, what the fuck is wrong with you",
"note: this fusion already exists in <#924102338115932160>",
"Googers",
"<:wht:907379241203691520>",
"warning: this fusion's base stat boost total cannot be more than 40",
"warning: this fusion has a stat boost higher than 20, which is not allowed",
"warning: this fusion has a negative stat boost, which is not allowed",
"sorry, the name of this fusion is stupid; try again",
"RATIO + JOB + BITCHES + SEEK HELP <:sob:907399357119205446> <:skull:907399357119205446>",
"L"
];
const images = [
"https://media.discordapp.net/attachments/855544880217849876/902218699849728040/61749c8ea9f0d106769608.gif",
"https://tenor.com/view/dies-of-cringe-cringe-gif-20747133",
"https://media.discordapp.net/attachments/823049810922831893/881631457607577620/612be9200adfa577489980.gif",
"https://media.discordapp.net/attachments/653473781393653800/834984873617784913/BASED.gif",
"https://cdn.discordapp.com/emojis/792490609058381834.gif?v=1",
"https://images-ext-1.discordapp.net/external/N4yHS3z04VF6T6p7Nk5F5N9Yk5460YvcvIPvxngrzSw/https/media.discordapp.net/attachments/493837927722385408/874464854415638579/image0.gif",
"https://images-ext-2.discordapp.net/external/DhODMbMV4qbWmnkES8C0BWpnJ3C_f87ZF1foy9LKU14/%3Fv%3D1/https/cdn.discordapp.com/emojis/792490609058381834.gif"
];
const statuses = [
	"fusion evolution alpha (am an alpha male)",
	"fusion evolution beta (am a beta male)",
	"fusion evolution sigma (am a sigma male)",
	"fusion evolution omega (am an omega male)",
	"fusion evolution RU (am an RU male)",
	"fusion evolution UU (am a UU male)",
	"SQUID GAMES ‼️",
	"cracker",
	"Parasex Enthusiast",
	"Toxasex Enthusiast",
	"Genesex Enthusiast",
	"Shitmontop Enthusiast",
	"Sexcadrill Enthusiast",
	"big button is watching",
	"*DIES FROM CRINGE*",
	"Based 😤 Based 😤 Baked 🥬",
	"diagnosis: skill issue",
	"gato sexo"
];

client.on('ready', readyDiscord);
client.on('message', gotMessage);

function readyDiscord(){
  console.log('in');
  client.user.setActivity(statuses[Math.floor(Math.random() * (statuses.length - 1))]);
}

function gotMessage(msg){
  if(msg.author == botID) return;
  if (msg.content == "!help") msg.channel.send("**List of Commands**\n\n__!help__: show this message\n__!rules__: display voting rules\n__!vote__: place a vote\n__!changevote__: change your vote\n__!bulk__: calculate the bulk for a mon, based off its base stats\n__!smart__: \<:birbsmart:844332026853064724>\n__!dumb__: \<:birbderp:844332026446217227>\n\n**Council-only commands**:\n__!yes [username]__: approves the vote change from this username\n__!no [username]__: rejects the vote change from this username\n\n__!count__: counts the number of votes\n__!nuke__: resets voting and deletes all messages in the voting channels");
  if (msg.content == "!rules") msg.channel.send("**VOTING RULES**\n\nTo vote, type \"!vote \\`\\`\\`\n[the *fusion names* of the mons you are voting for (make sure to spell them correctly), each one separated by a line break]\\`\\`\\`.\nPlease remember the line break after the \`\`\`. Otherwise, your first vote will be cut off.\n\nIf you made a mistake in your voting, simply use the same command but use !changevote instead. Your change request will be reviewed by the council.\n\nhttps://discord.com/channels/822971235645653032/823049256939421706/864033901851443210 Click this link for more details.");
  if (msg.content == "!batr") msg.channel.send("**BATR:** Broken Ability Tightrope\nThe phenomenon where it is practically impossible to balance a mon with a broken ability - either it will be overpowered or underpowered.");
  if (msg.content == "Googers") msg.channel.send("Googers");
  if (msg.content == "!changestatus"){
	console.log('status change');
	client.user.setActivity(statuses[Math.floor(Math.random() * (statuses.length - 1))]);
  }
  if (msg.content == "!dumb"){
    client.user.setUsername('birbderp bot');
    client.user.setAvatar('https://cdn.discordapp.com/emojis/844332026446217227.png?v=1');
    msg.channel.send("I'm Dumb");
  }
  if (msg.content == "!smart"){
    client.user.setUsername('birbsmart bot');
    client.user.setAvatar('https://cdn.discordapp.com/emojis/844332026853064724.png?v=1');
    msg.channel.send("I'm Smart");
  }
  
  
  
  if (regExp.test(/[a-zA-Z]/g) && msg.content == msg.content.toUpperCase()){
	msg.channel.send("Please no caps. this isn't proper internet language and i absolutely hate. Please no more.");
  }

  if(msg.channel.id == 924102338115932160 && msg.content.includes("\`\`\`")){
    if(Math.random() > 0.66){
      msg.channel.send(fscj[Math.floor(Math.random()*(fscj.length - 1))]);
    } else {
      msg.channel.send(images[Math.floor(Math.random()*(images.length - 1))]);
    }
  }

  //calculates bulk
  //!bulk [base hp], [base def], [base spd]
  if (msg.content.substring(0, 5) === '!bulk'){
    var stats = msg.content.replace(/\s/g, '').substring(5).split(",");
    var hp = 0;
    var def = 0;
    var spd = 0;
    var phys = 0;
    var spec = 0;
    var mixed = 0;
    if (stats.length != 3) {
      msg.channel.send("error: invalid number of parameters");
      return;
    } else if (isNaN(stats[0]) || isNaN(stats[1]) || isNaN(stats[2])) {
      msg.channel.send("error: at least one of the given parameters is not a number");
      return;
    } else if (stats[0] > 255 || stats[0] < 1 || stats[1] > 255 || stats[1] < 1 || stats[2] > 255 || stats[2] < 1) {
      msg.channel.send("error: at least one of the given parameters is out of range of normal base stats");
      return;
    } else if (stats[0] % 1 != 0 || stats[1] % 1 != 0 || stats[2] % 1 != 0) {
      msg.channel.send("error: all given parameters must be whole numbers");
      return;
    } else {
      hp = stats[0] * 2 + 204;
      def = Math.floor((stats[1] * 2 + 99) * 1.1);
      spd = Math.floor((stats[2] * 2 + 99) * 1.1);
      phys = (hp * def) / 1325.12;
      spec = (hp * spd) / 1325.12;
      mixed = (phys + spec) / 2;
      msg.channel.send("Physical Bulk: " + Math.round(phys) + "\nSpecial Bulk: " + Math.round(spec) + "\nMixed Bulk: " + Math.round(mixed));
    }
  }


  //future-submissions
  if (msg.channel.id == fuseID && msg.author.id != botID){
    //checkFusion(msg);
    checkOU(msg);
    checkStats(msg);
  }

  //voting commands
  if (msg.channel.id == voteID && msg.author.id != botID){
    //delete non-commands


    //vote command
    if ((debugOn || !voted.includes(msg.author.id)) && msg.channel.id == voteID && msg.content.substring(0, 5) === '!vote' && msg.content.includes("\`\`\`")){
      voted.push(msg.author.id);
      msg.channel.bulkDelete(1);
      client.channels.cache.get(resultID).send(msg.author.username + ": " + msg.content.substring(6));
      msg.author.send("Here is your vote:\n\n" + msg.author.username + ": " + msg.content.substring(6));
      vote = [msg.author.username, msg.content.substring(10, msg.content.length - 3).split("\n")];
      votes.push(vote);
      msg.reply("your vote was received");
    } else if (!msg.content.includes("\`\`\`")){
      msg.channel.bulkDelete(1);
      msg.reply("sorry, your vote did not follow the format - try again");
    } else if (msg.content.substring(0, 5) === '!vote' && voted.includes(msg.author.id)){
      msg.channel.bulkDelete(1);
      msg.reply("you have already voted");
    }

    //changevote command
    if (voted.includes(msg.author.id) && msg.channel.id == voteID && msg.content.includes('!changevote')){
      msg.channel.bulkDelete(1);
      client.channels.cache.get(resultID).send("@here (" + msg.author.id + ") " + msg.author.username +  " wants to change their vote to: " + msg.content.substring(12));
      msg.reply("your vote is pending a change");
    } else if (msg.content.includes('!changevote') && !voted.includes(msg.author.id)){
      msg.channel.bulkDelete(1);
      msg.reply("you have not voted yet");
    }
  }

  if (msg.channel.id == resultID){
    //nuke command: delete all messages and restart voting
    if (msg.content === '!nuke'){
      client.channels.cache.get(voteID).bulkDelete(100);
      client.channels.cache.get(resultID).bulkDelete(100);
      voted = [];
      votes = [];
      voteCount = [];
      voteMons = [];
      loadedVotes = false;
    }

    //count command: count votes
    if (msg.content === "!count"){
      var result = "";
      var voteMons = [];
      var voteCount = [];

      for(var h = 0; h < votes.length; h ++){
        for(var i = 0; i < votes[h][1].length; i ++){
          if (!voteMons.includes(votes[h][1][i])){
            voteMons.push(votes[h][1][i]);
            voteCount.push([votes[h][1][i], 1]);
          } else {
            var k = voteCount.findIndex(e => e[0] === votes[h][1][i]);
            voteCount[k][1] ++;
          }
        }
      }

      voteCount.sort((a, b) => b[1] - a[1]);

      for(var j = 0; j < voteCount.length; j ++){
        result += voteCount[j][0] + ": " + voteCount[j][1] + "\n";
      }

      msg.channel.send(result);
    }

    //// DEBUG
    if (msg.content === "!votes"){
      msg.channel.send(votes);
    }

    if (msg.content === "!voters"){
      var result = "";
      for(var i = 0; i < votes.length; i ++){
        result += votes[i][0] + ", ";
      }
      msg.channel.send(result.substring(0, result.length - 2) + "\n " + votes.length + " voters total");
    }

    if (msg.content.substring(0, 5) === "!load"){
      client.channels.cache.get(resultID).messages.fetch().then((messages) => {
        try {
          var voteLoad = msg.content.substring(6, msg.length).split('\n');
          for (var i = 0; i < voteLoad.length; i ++) {
            var voter = voteLoad[i].substring(0, voteLoad[i].indexOf(","));
            var votes_h = voteLoad[i].substring(voteLoad[i].indexOf(",") + 1);
            var vote = [voter, votes_h.split(",")];
            votes.push(vote);
          }
          msg.channel.send("votes loaded");
          loadedVotes = true;
        } catch (error) {
          console.log(error);
          msg.channel.send("invalid format");
          return;
        }
      });
    }

    if (msg.content.substring(0, 8) === '!votefor'){
      var user = msg.content.substring(9, msg.content.indexOf("\`\`\`") - 2);
      voted.push(user);
      vote = [user, msg.content.substring((msg.content.indexOf("\`\`\`") + 3), msg.content.length - 3).split("\n")];
      votes.push(vote);
      msg.reply("the vote was received");
    }

    //approve changes to votes
    if (msg.content.substring(0, 4) === "!yes"){
      client.channels.cache.get(resultID).messages.fetch().then((messages) => {
        var user = msg.content.substring(5, msg.length);
        var message;
        try {
          message = (messages.filter(m => m.content.includes(user + " wants")).first().content);
        } catch (error) {
          client.channels.cache.get(resultID).send("invalid username");
          return;
        }
        var userID = message.substring(message.indexOf("(") + 1, message.indexOf(")"));
        changeMons = message.substring(message.indexOf("\n") + 1, message.indexOf("\`", message.indexOf("\n"))).split("\n");
        for(var i = votes.length - 1; i >= 0; i --){
          if (user == votes[i][0]){
            for(var j = 0; j < changeMons.length; j ++){
              votes[i][1][j] = changeMons[j];
            }
            client.channels.cache.get(resultID).send("vote changed");
            client.channels.cache.get(voteID).send('<@' + userID + '>, your vote change was approved');
          }
        }
      });
    }

    //reject changes to votes
    if (msg.content.substring(0, 3) === "!no"){
      client.channels.cache.get(resultID).messages.fetch().then((messages) => {
        var user = msg.content.substring(4, msg.length);
        var message;
        try {
          message = (messages.filter(m => m.content.includes(user + " wants")).first().content);
        } catch (error) {
          client.channels.cache.get(resultID).send("invalid username");
          return;
        }
        var userID = message.substring(message.indexOf("(") + 1, message.indexOf(")"));
        client.channels.cache.get(resultID).send("vote rejected");
        client.channels.cache.get(voteID).send('<@' + userID + '>, your vote change was rejected');
      });
    }
  }
}

function checkFusion(msg){
  var i = msg.content.indexOf("\n");
  var fusers = (msg.content.substring(msg.content.indexOf("=") + 2, i)).split(" + ");
  var types = (msg.content.substring(i + 1, msg.content.indexOf("\n", i + 1))).split('/');
  for(var j = 0; j < fusions.length; j ++){
    if (checkMon(fusers, fusions[j])){
      msg.channel.send("note: this fusion has the same mon as " + fusions[j][0]);
    }
    if (checkType(types, fusions[j])){
      msg.channel.send("note: this fusion shares types with " + fusions[j][0]);
    }
  }
}

function checkOU(msg){
  if(msg.content.indexOf("\`\`\`") == -1) return;
  var exist = false;
  var i = msg.content.indexOf("\n");
  var fusers = (msg.content.toLowerCase().substring(msg.content.indexOf("=") + 2, i)).split(" + ");

  var readInterface = readline.createInterface({
    input: fs.createReadStream('fusions.txt'),
    output: null,
    console: false
  });

  readInterface.on('line', function(line) {
    var lineC = line.split(",");
    if(lineC[0] == fusers[0] && lineC[1] == fusers[1]){
      msg.channel.send("note: this fusion already exists in FEOU");
      return;
    }
  });
}

function checkStats(msg){
  if(msg.content.indexOf("\`\`\`") == -1) return;
  var i = msg.content.indexOf("+");
  if (i == -1) return;
  var nums = [];
  var bstmax = 40;
  var boostmax = 20;
  var abilities = [];

  //check stat boosts
  for(var j = 0; j < 6; j ++){
    i = msg.content.indexOf("+", i + 1);
    if (i == -1) return;
    nums.push(msg.content.substring(i + 1, msg.content.indexOf("\n", i + 1)));
  }

  //check stat boost total
  i = msg.content.indexOf("+", i + 1);
  nums.push(msg.content.substring(i + 1, msg.content.indexOf("\n", i + 1)));

  //if doubility or useless ability, reevaluate stat boosts and stat boost total
  i = msg.content.indexOf("=", i + 1);
  var j = msg.content.indexOf("\n", i + 1);
  abilities = msg.content.substring((i + 2), j == -1 ? msg.content.length - 3 : j).split(" + ");
  const c1 = abilities[0] === abilities[1];
  const c2 = useless.includes(abilities[0]) || useless.includes(abilities[1]);
  const sum = c1 + c2;
  bstmax += 30 * sum; // conditions will be typecasted to nums
  boostmax += 5 * sum;

  for(var k = 0; k < nums.length - 1; k ++){
    if(nums[k] < 0){
      msg.channel.send("warning: this fusion has a negative stat boost, which is not allowed");
      break;
    } else if (nums[k] > boostmax) {
      msg.channel.send("warning: this fusion has a stat boost higher than " + boostmax + ", which is not allowed");
    }
  }

  if (feuu && nums[nums.length - 1] != bstmax) msg.channel.send("warning: this fusion's base stat boost total does not equal " + bstmax);
  else if (!feuu && nums[nums.length - 1] > bstmax) msg.channel.send("warning: this fusion's base stat boost total cannot be more than " + bstmax);
}

function checkMon(mons, fused){
  return (mons[0] == fused[1] || mons[0] == fused[2] || mons[1] == fused[1] || mons[1] == fused[2]);
}

function checkType(mons, fused){
  return (mons[0] == fused[3] || mons[0] == fused[4]) && (mons[1] == fused[3] || mons[1] == fused[4]);
}
