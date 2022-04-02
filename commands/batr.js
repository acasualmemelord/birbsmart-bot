const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('displays all commands'),
	async execute(interaction) {
    await interaction.reply("**BATR:** Broken Ability Tightrope\nThe phenomenon where it is practically impossible to balance a mon with a broken ability - either it will be overpowered or underpowered.");
	},
};
