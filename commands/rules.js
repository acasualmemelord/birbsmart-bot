const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rules')
		.setDescription('displays voting rules'),
	async execute(interaction) {
		await interaction.reply("**VOTING RULES**\n\nTo vote, type \"!vote \\`\\`\\`\n[the *fusion names* of the mons you are voting for (make sure to spell them correctly), each one separated by a line break]\\`\\`\\`.\nPlease remember the line break after the \`\`\`. Otherwise, your first vote will be cut off.\n\nIf you made a mistake in your voting, simply use the same command but use !changevote instead. Your change request will be reviewed by the council.\n\nhttps://discord.com/channels/822971235645653032/823049256939421706/864033901851443210 Click this link for more details.");
	},
};
