const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('displays all commands'),
	async execute(interaction) {
    client.user.setUsername('birbsmart bot');
    client.user.setAvatar('https://cdn.discordapp.com/emojis/844332026853064724.png?v=1');
    msg.channel.send("I'm Smart");
	},
};
