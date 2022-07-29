const { ApplicationCommandType, EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'archive',
	description: 'Delete the current channel.',
	moderator: 1,
	type: ApplicationCommandType.ChatInput,
	run: async (client, interaction) => {
		const embed = new EmbedBuilder().setColor('#71368A').setTitle(`This channel will be deleted in 60 seconds!`).setFooter({ text: 'Baymax II • 2022' });

		await interaction.reply({ embeds: [embed] });

		setTimeout(() => {
			if (interaction.channel) {
				interaction.channel.delete();
			}
		}, 60000);
	},
};
