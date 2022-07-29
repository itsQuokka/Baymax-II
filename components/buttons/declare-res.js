const { EmbedBuilder, SelectMenuOptionBuilder, SelectMenuBuilder, ActionRowBuilder } = require('discord.js');

module.exports = {
	name: 'declare-res',
	async execute(interaction, client) {
		const menu = new SelectMenuBuilder()
			.setCustomId('res-select')
			.setMinValues(1)
			.setMaxValues(1)
			.setPlaceholder('Select your residence!')
			.setOptions(
				new SelectMenuOptionBuilder({
					label: `Delaware Hall`,
					value: `Delaware`,
				}),
				new SelectMenuOptionBuilder({
					label: `Med-Syd Hall`,
					value: `Med-Syd`,
				}),
				new SelectMenuOptionBuilder({
					label: `Saugeen Hall`,
					value: `Saugeen`,
				}),
				new SelectMenuOptionBuilder({
					label: `Alumni House`,
					value: `Alumni`,
				}),
				new SelectMenuOptionBuilder({
					label: `Elgin Hall`,
					value: `Elgin`,
				}),
				new SelectMenuOptionBuilder({
					label: `Essex Hall`,
					value: `Essex`,
				}),
				new SelectMenuOptionBuilder({
					label: `Lambton Hall`,
					value: `Lambton`,
				}),
				new SelectMenuOptionBuilder({
					label: `London Hall`,
					value: `London`,
				}),
				new SelectMenuOptionBuilder({
					label: `Bayfield Hall`,
					value: `Bayfield`,
				}),
				new SelectMenuOptionBuilder({
					label: `Ontario Hall`,
					value: `Ontario`,
				}),
				new SelectMenuOptionBuilder({
					label: `Perth Hall`,
					value: `Perth`,
				})
			);

		const embed = new EmbedBuilder()
			.setColor('#71368A')
			.setTitle('🏠 Selecting Res...')
			.setDescription('Please select your residence from the dropdown below!')
			.setFooter({ text: `Baymax II • 2022` });

		await interaction.reply({ embeds: [embed], components: [new ActionRowBuilder().addComponents(menu)], ephemeral: true });
	},
};
