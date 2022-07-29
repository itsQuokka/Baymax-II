const { ActionRowBuilder, ButtonBuilder } = require('@discordjs/builders');
const { ApplicationCommandType, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'panel-role',
	description: 'Generate the intial account creation panel!',
	cooldown: 3000,
	type: ApplicationCommandType.ChatInput,
	default_member_permissions: 'Administrator', // permission required
	run: async (client, interaction) => {
		if (interaction.guild.id !== '1001362219528888391') {
			await interaction.reply({ content: 'The panel command has been disabled for this guild!' });
			return;
		}

		const embed = new EmbedBuilder()
			.setColor('#71368A')
			.setTitle('Western Role Center')
			.setDescription(
				`You've joined the guild dedicated to current, and future Western students!

				**Here are some of the commands you can use to help you!**
				\n> \`/faq\`- Search for frequently asked questions!
				> \`/link\` - A list of useful links to navigate around!
				> \`/help\` - Ask a question and have a thread dedicated to it!

				**Important Dates**
				\n> \`September 8th\` - Classes begin!
				> \`October 10th\` - Thanksgiving Holiday!
				> \`November 1st - 7th\` - Reading Week!
				> \`January 9th\` - Classes resume!
				> \`February 18th - 26th\` - Reading Week!
				\n**Get started by assigning yourself some roles using the buttons below!**`
			)
			.setThumbnail(
				'https://scontent.fykz1-1.fna.fbcdn.net/v/t1.18169-9/23380328_10155482766942795_6008408380991123863_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qZdPs0vT-1kAX_SYksq&_nc_ht=scontent.fykz1-1.fna&oh=00_AT8g_TkynLhtG6CH3sCIWIvliXHmNyO4udXa_IXXIcKmfQ&oe=62FDC5AF'
			)
			.setFooter({ text: 'Baymax II • 2022' });

		const major = new ButtonBuilder().setCustomId('declare-major').setLabel('🎓 Declare Major').setStyle(ButtonStyle.Primary);
		const residence = new ButtonBuilder().setCustomId('declare-res').setLabel('🏠 Residence').setStyle(ButtonStyle.Primary);
		const interests = new ButtonBuilder().setCustomId('declare-int').setLabel('🎨 Interests').setStyle(ButtonStyle.Primary);
		const year = new ButtonBuilder().setCustomId('declare-class').setLabel('📅 Class').setStyle(ButtonStyle.Primary);
		const additional = new ButtonBuilder().setCustomId('declare-adds').setLabel('🍀 Additionals').setStyle(ButtonStyle.Primary);

		await interaction.reply({ embeds: [embed], components: [new ActionRowBuilder().addComponents(major, residence, year, interests, additional)] });
	},
};
