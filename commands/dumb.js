const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('displays all commands'),
	async execute(interaction) {
    aclient.user.setUsername('birbderp bot');
    client.user.setAvatar('https://cdn.discordapp.com/emojis/844332026446217227.png?v=1');
    msg.channel.send("I'm Dumb");
	},
};
