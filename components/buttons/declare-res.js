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
					value: `Delaware Hall`,
				}),
				new SelectMenuOptionBuilder({
					label: `Med-Syd Hall`,
					value: `ed-Syd Hall`,
				}),
				new SelectMenuOptionBuilder({
					label: `Saugeen Hall`,
					value: `Saugeen Hall`,
				}),
				new SelectMenuOptionBuilder({
					label: `Alumni House`,
					value: `Alumni House`,
				}),
				new SelectMenuOptionBuilder({
					label: `Elgin Hall`,
					value: `Elgin Hall`,
				}),
				new SelectMenuOptionBuilder({
					label: `Essex Hall`,
					value: `Essex Hall`,
				}),
				new SelectMenuOptionBuilder({
					label: `Lambton Hall`,
					value: `Lambton Hall`,
				}),
				new SelectMenuOptionBuilder({
					label: `London Hall`,
					value: `London Hall`,
				}),
				new SelectMenuOptionBuilder({
					label: `Bayfield Hall`,
					value: `Bayfield Hall`,
				}),
				new SelectMenuOptionBuilder({
					label: `Ontario Hall`,
					value: `Ontario Hall`,
				}),
				new SelectMenuOptionBuilder({
					label: `Perth Hall`,
					value: `Perth Hall`,
				})
			);

		const embed = new EmbedBuilder()
			.setColor('#71368A')
			.setTitle('🏠 Selecting Res...')
			.setDescription('Please select your residence from the dropdown below!')
			.addFields({})
			.setFooter({ text: `Baymax II • 2022` });

		await interaction.reply({ embeds: [embed], components: [new ActionRowBuilder().addComponents(menu)], ephemeral: true });
	},
};
