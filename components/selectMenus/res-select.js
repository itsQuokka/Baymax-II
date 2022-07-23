const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'res-select',
	async execute(interaction, client) {
		const embed = new EmbedBuilder()
			.setColor('#71368A')
			.setTitle('🏠 Success!')
			.setDescription(`<@${interaction.member.id}> has moved into the **${interaction.values[0]}** residence!`)
			.setFooter({ text: 'Baymax II • 2022' });

		await interaction.update({ embeds: [embed], components: [] });
	},
};
