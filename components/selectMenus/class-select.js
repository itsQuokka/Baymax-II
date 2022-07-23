const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'class-select',
	async execute(interaction, client) {
		let _r;
		for (let i = 0; i < roles.length; i++) {
			if (roles[i].name === interaction.values[0]) {
				_r = await interaction.message.guild.roles.cache.find((r) => r.id === `${roles[i].id}`);
			}
		}

		if (!_r) {
			const embed = new EmbedBuilder()
				.setColor('#71368A')
				.setTitle('📅  Error!')
				.setDescription(`Looks like we weren't able to add the role **${interaction.values[0]}** to you!`)
				.setFooter({ text: 'Baymax II • 2022' });

			return await interaction.update({ embeds: [embed], components: [] });
		}
		const embed = new EmbedBuilder()
			.setColor('#71368A')
			.setTitle('📅  Success!')
			.setDescription(`You have updated your graduating class to **${interaction.values[0]}!**`)
			.setFooter({ text: 'Baymax II • 2022' });

		for (let i = 0; i < roles.length; i++) {
			const role = await interaction.member.roles.cache.find((role) => role.id === roles[i].id);
			if (role) {
				interaction.member.roles.remove(role);
				break;
			}
		}

		await interaction.member.roles.add(_r);
		await interaction.update({ embeds: [embed], components: [] });
	},
};

const roles = [
	{
		name: '2023',
		id: '',
	},
	{
		name: '2024',
		id: '',
	},
	{
		name: '2025',
		id: '',
	},
	{
		name: '2026',
		id: '',
	},
	{
		name: 'Alumni',
		id: '',
	},
];
