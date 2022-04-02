const { Collection, Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const readline = require('readline');
const fs = require('fs');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.login(token);

var vote = [];
var voted = [];
var votes = [];
var changeID = [];
var voteCount = [];
var voteMons = [];
var changeMons = [];

const debugOn = false;
const feuu = false;
const fuseID = '823049810922831893';
const voteID = (debugOn) ? '862200905956458497' : '859622377968369704';
const resultID = (debugOn) ? '862200912856612884' : '862219880223604736';
const botID = 862200293336809482;
const useless = ['Illuminate', 'Run Away', 'Honey Gather', 'Ball Fetch'];
const fscj = ["warning: this fusion is cringe",
              "note: i came up with this first, what the fuck is wrong with you",
              "note: this fusion exists in #future-submissions-circlejerk",
              "Googers",
              "<:wht:907394668986241095>",
              "warning: this fusion's base stat boost total cannot be more than 40",
              "warning: this fusion has a stat boost higher than 20, which is not allowed",
              "warning: this fusion has a negative stat boost, which is not allowed",
              "sorry, the name of this fusion is stupid; try again",
              "RATIO + JOB + BITCHES + SEEK HELP <:sob:907399357119205446> <:skull:907399357119205446>"
            ];
const images = ["https://media.discordapp.net/attachments/855544880217849876/902218699849728040/61749c8ea9f0d106769608.gif",
                "https://tenor.com/view/dies-of-cringe-cringe-gif-20747133",
                "https://media.discordapp.net/attachments/823049810922831893/881631457607577620/612be9200adfa577489980.gif",
                "https://media.discordapp.net/attachments/653473781393653800/834984873617784913/BASED.gif",
                "https://cdn.discordapp.com/emojis/792490609058381834.gif?v=1"
              ];

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.on('interactionCreate', async interaction => {
  console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'error executing command', ephemeral: true });
	}
});
