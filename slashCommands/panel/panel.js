const { ActionRowBuilder, ButtonBuilder } = require('@discordjs/builders');
const { ApplicationCommandType, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'panel',
	description: 'Generate the intial account creation panel!',
	cooldown: 3000,
	type: ApplicationCommandType.ChatInput,
	default_member_permissions: 'ManageRoles', // permission required
	run: async (client, interaction) => {
		const embed = new EmbedBuilder()
			.setColor('#71368A')
			.setTitle('Welcome to Western!')
			.setDescription('Click one of the button below to get started on your account!')
			.setThumbnail(
				'https://scontent.fykz1-1.fna.fbcdn.net/v/t1.18169-9/23380328_10155482766942795_6008408380991123863_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qZdPs0vT-1kAX_SYksq&_nc_ht=scontent.fykz1-1.fna&oh=00_AT8g_TkynLhtG6CH3sCIWIvliXHmNyO4udXa_IXXIcKmfQ&oe=62FDC5AF'
			)
			.setFooter({ text: 'Baymax II • 2022' });

		const major = new ButtonBuilder().setCustomId('declare-major').setLabel('🎓 Declare Major').setStyle(ButtonStyle.Primary);
		const residence = new ButtonBuilder().setCustomId('declare-res').setLabel('🏠 Residence').setStyle(ButtonStyle.Primary).setDisabled(true);
		const interests = new ButtonBuilder().setCustomId('declare-int').setLabel('🎨 Interests').setStyle(ButtonStyle.Primary);
		const year = new ButtonBuilder().setCustomId('declare-class').setLabel('📅 Class').setStyle(ButtonStyle.Primary);
		const additional = new ButtonBuilder().setCustomId('declare-adds').setLabel('🍀 Additionals').setStyle(ButtonStyle.Primary);

		await interaction.reply({ embeds: [embed], components: [new ActionRowBuilder().addComponents(major, residence, year, interests, additional)] });
	},
};
