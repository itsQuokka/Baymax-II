const { EmbedBuilder, SelectMenuOptionBuilder, SelectMenuBuilder, ActionRowBuilder } = require('discord.js');

module.exports = {
	name: 'declare-class',
	async execute(interaction, client) {
		const menu = new SelectMenuBuilder()
			.setCustomId('class-select')
			.setMinValues(1)
			.setMaxValues(1)
			.setPlaceholder('Select your class!')
			.setOptions(
				new SelectMenuOptionBuilder({
					label: `Alumni`,
					value: `Alumni`,
				}),
				new SelectMenuOptionBuilder({
					label: `2023`,
					value: `2023`,
				}),
				new SelectMenuOptionBuilder({
					label: `2024`,
					value: `2024`,
				}),
				new SelectMenuOptionBuilder({
					label: `2025`,
					value: `2025`,
				}),
				new SelectMenuOptionBuilder({
					label: `2026`,
					value: `2026`,
				})
			);

		const embed = new EmbedBuilder().setColor('#71368A').setTitle('📅 Selecting Year...').setDescription("Please select the year you'll be graduating!").setFooter({ text: `Baymax II • 2022` });

		await interaction.reply({ embeds: [embed], components: [new ActionRowBuilder().addComponents(menu)], ephemeral: true });
	},
};
