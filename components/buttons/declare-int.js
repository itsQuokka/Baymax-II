const { EmbedBuilder, SelectMenuOptionBuilder, SelectMenuBuilder, ActionRowBuilder } = require('discord.js');

module.exports = {
	name: 'declare-int',
	async execute(interaction, client) {
		const menu = new SelectMenuBuilder()
			.setCustomId('int-select')
			.setMinValues(1)
			.setMaxValues(5)
			.setPlaceholder('Select all interests that apply to you!')
			.setOptions(
				new SelectMenuOptionBuilder({
					label: `💫 Anime`,
					value: `Anime`,
				}),
				new SelectMenuOptionBuilder({
					label: `🖍️ Creations`,
					value: `Creations`,
				}),
				new SelectMenuOptionBuilder({
					label: `🖱️ Gaming`,
					value: `Gaming`,
				}),
				new SelectMenuOptionBuilder({
					label: `🎧 Music`,
					value: `Music`,
				}),
				new SelectMenuOptionBuilder({
					label: `🏆 Sports`,
					value: `Sports`,
				})
			);

		const embed = new EmbedBuilder()
			.setColor('#71368A')
			.setTitle('📅 Gathering Interests...')
			.setDescription("Please select the interests you'd like to be apart of!")
			.setFooter({ text: `Baymax II • 2022` });

		await interaction.reply({ embeds: [embed], components: [new ActionRowBuilder().addComponents(menu)], ephemeral: true });
	},
};
