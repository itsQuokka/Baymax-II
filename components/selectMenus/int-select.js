const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'int-select',
	async execute(interaction, client) {
		const embed = new EmbedBuilder().setColor('#71368A').setTitle('🎨  Success!').setFooter({ text: 'Baymax II • 2022' });

		let actions = '';
		for (let i = 0; i < interaction.values.length; i++) {
			const role = await interaction.member.roles.cache.find((role) => role.name === interaction.values[i]);
			if (role) {
				actions += '> Removed role ' + interaction.values[i] + '\n';
				interaction.member.roles.remove(role);
			} else {
				actions += '> Added role ' + interaction.values[i] + '\n';
				const r = await interaction.guild.roles.cache.find((role) => role.name === interaction.values[i]);
				interaction.member.roles.add(r);
			}
		}

		embed.setDescription(`You've made some changes to your interests, see below!\n\n${actions.toString()}`);

		await interaction.update({ embeds: [embed], components: [] });
	},
};
