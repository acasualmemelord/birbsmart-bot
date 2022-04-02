const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('displays all commands'),
	async execute(interaction) {
		await interaction.reply("**List of Commands**\n\n__!help__: show this message\n__!rules__: display voting rules\n__!vote__: place a vote\n__!changevote__: change your vote\n__!bulk__: calculate the bulk for a mon, based off its base stats\n__!smart__: \<:birbsmart:844332026853064724>\n__!dumb__: \<:birbderp:844332026446217227>\n\n**Council-only commands**:\n__!yes [username]__: approves the vote change from this username\n__!no [username]__: rejects the vote change from this username\n\n__!count__: counts the number of votes\n__!nuke__: resets voting and deletes all messages in the voting channels");
	},
};
