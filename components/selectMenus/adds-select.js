const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'adds-select',
	async execute(interaction, client) {
		const embed = new EmbedBuilder().setColor('#71368A').setTitle('🎨  Success!').setFooter({ text: 'Baymax II • 2022' });

		const role = await interaction.guild.roles.cache.find((r) => r.id === (interaction.values[0] === 'Ivey AEO' ? '568863920023011333' : '572874137282805790'));
		if (interaction.member.roles.cache.find((r) => r.id === role.id)) {
			await interaction.member.roles.remove(role);
			embed.setDescription(`You've successfully removed ${interaction.values[0]} from your roles!`);
		} else {
			await interaction.member.roles.add(role);
			embed.setDescription(`You've successfully added ${interaction.values[0]} to your roles!`);
		}

		await interaction.update({ embeds: [embed], components: [] });
	},
};
