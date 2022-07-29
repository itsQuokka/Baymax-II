const { EmbedBuilder, SelectMenuOptionBuilder, SelectMenuBuilder, ActionRowBuilder } = require('discord.js');

module.exports = {
	name: 'declare-major',
	async execute(interaction, client) {
		const menu = new SelectMenuBuilder()
			.setCustomId('major-select')
			.setMinValues(1)
			.setMaxValues(1)
			.setPlaceholder('Select your major!')
			.setOptions(
				new SelectMenuOptionBuilder({
					label: `🎨 Arts and Humanities`,
					description: `Current Enrolled Students: ${(await interaction.guild.roles.cache.find((r) => r.name === 'Arts and Humanities')).members.size}`,
					value: `Arts and Humanities`,
				}),
				new SelectMenuOptionBuilder({
					label: `👔 Business`,
					value: `Current Enrolled Students: 2`,
				}),
				new SelectMenuOptionBuilder({
					label: `💻 Computer Science`,
					value: `Computer Science`,
				}),
				new SelectMenuOptionBuilder({
					label: `📔 Education`,
					value: `Education`,
				}),
				new SelectMenuOptionBuilder({
					label: `🛠️ Engineering`,
					value: `Engineering`,
				}),
				new SelectMenuOptionBuilder({
					label: `🎦 FIMS/MIT`,
					value: `FIMS/MIT`,
				}),
				new SelectMenuOptionBuilder({
					label: `🩸 Health Sciences`,
					value: `Health Sciences`,
				}),
				new SelectMenuOptionBuilder({
					label: `🦾 Kinesiology`,
					value: `Kinesiology`,
				}),
				new SelectMenuOptionBuilder({
					label: `🏥 Medical Sciences`,
					value: `Medical Sciences`,
				}),
				new SelectMenuOptionBuilder({
					label: `🎵 Music`,
					value: `Music`,
				}),
				new SelectMenuOptionBuilder({
					label: `💟 Nursing`,
					value: `Nursing`,
				}),
				new SelectMenuOptionBuilder({
					label: `🧪 Science`,
					value: `Science`,
				}),
				new SelectMenuOptionBuilder({
					label: `💭 Social Science`,
					value: `Social Science`,
				})
			);

		const embed = new EmbedBuilder().setColor('#71368A').setTitle('🎓 Selecting Major...').setDescription('Please select your major from the dropdown below!').setFooter({ text: `Baymax II • 2022` });

		await interaction.reply({ embeds: [embed], components: [new ActionRowBuilder().addComponents(menu)], ephemeral: true });
	},
};
