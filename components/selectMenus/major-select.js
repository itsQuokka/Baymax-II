const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'major-select',
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
				.setTitle('🎓 Error!')
				.setDescription(`Looks like we weren't able to add the role **${interaction.values[0]}** to you!`)
				.setFooter({ text: 'Baymax II • 2022' });

			return await interaction.update({ embeds: [embed], components: [] });
		}
		const embed = new EmbedBuilder().setColor('#71368A').setTitle('🎓 Success!').setDescription(`You have updated your major to **${interaction.values[0]}!**`).setFooter({ text: 'Baymax II • 2022' });

		for (let i = 0; i < roles.length; i++) {
			const role = await interaction.member.roles.cache.find((role) => role.id === roles[i].id);
			if (role) {
				interaction.member.roles.remove(role);
			}
		}

		let _spacer = await interaction.guild.roles.cache.find((r) => r.id === '1001367632236265522');

		await interaction.member.roles.add(_r);
		await interaction.member.roles.add(_spacer);
		await interaction.update({ embeds: [embed], components: [] });
	},
};

const roles = [
	{
		name: 'Arts and Humanities',
		id: '1001363593876484156',
	},
	{
		name: 'Business',
		id: '1001363685723357246',
	},
	{
		name: 'Computer Science',
		id: '1001363495515848744',
	},
	{
		name: 'Education',
		id: '1001363711228907591',
	},
	{
		name: 'Engineering',
		id: '1001363745349582888',
	},
	{
		name: 'FIMS/MIT',
		id: '1001366707371257886',
	},
	{
		name: 'Health Sciences',
		id: '1001363790895534121',
	},
	{
		name: 'Kinesiology',
		id: '1001363887200948254',
	},
	{
		name: 'Medical Sciences',
		id: '1001364053127614467',
	},
	{
		name: 'Music',
		id: '1001363923305517106',
	},
	{
		name: 'Nursing',
		id: '1001364157901307955',
	},
	{
		name: 'Science',
		id: '1001363964858478663',
	},
	{
		name: 'Social Science',
		id: '1001364224464924712',
	},
];
