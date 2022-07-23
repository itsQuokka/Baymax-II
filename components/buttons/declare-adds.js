const { EmbedBuilder, SelectMenuOptionBuilder, SelectMenuBuilder, ActionRowBuilder } = require('discord.js');

module.exports = {
	name: 'declare-adds',
	async execute(interaction, client) {
		const menu = new SelectMenuBuilder()
			.setCustomId('adds-select')
			.setMinValues(1)
			.setMaxValues(1)
			.setPlaceholder('Select additional roles!')
			.setOptions(
				new SelectMenuOptionBuilder({
					label: `Ivey AEO`,
					value: `Ivey AEO`,
				}),
				new SelectMenuOptionBuilder({
					label: `Scholar's Electives`,
					value: `Scholar's Electives`,
				})
			);

		const embed = new EmbedBuilder()
			.setColor('#71368A')
			.setTitle('🍀 Selecting Additionals...')
			.setDescription('Please select any additional roles you may fall into!')
			.setFooter({ text: `Baymax II • 2022` });

		await interaction.reply({ embeds: [embed], components: [new ActionRowBuilder().addComponents(menu)], ephemeral: true });
	},
};
