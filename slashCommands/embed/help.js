const { ActionRowBuilder, ButtonBuilder } = require('@discordjs/builders');
const { ApplicationCommandType, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'embed-todo',
	description: 'Generate the intial account creation panel!',
	cooldown: 3000,
	type: ApplicationCommandType.ChatInput,
	default_member_permissions: 'Administrator', // permission required
	run: async (client, interaction) => {
		const embed = new EmbedBuilder()
			.setColor('#71368A')
			.setTitle('Western Calendar Center')
			.setDescription(
				`Take note of important tasks that need to be completed before admission!

				**Task List**
				\n> \`GBSV\` - Sexual Violence Zoom & Online Quiz. **[Mandatory]**
				> \`WesternONE Card\` - You're going to need that Student ID! **[ASAP]**
				> \`Choose UWO\` - Make sure to check all your requirements! **[ASAP]**
				> \`Book a Slot\` - Reserve your move-in time! **[ASAP]**

				**Dates**
				\n> \`Residence Installment #1\` - **[August 2nd]**
				> \`Residence Installment #2\` - **[December 1st]**

				**Let's make sure everything is completed, click the links below!**
				`
			)
			.setThumbnail(
				'https://scontent.fykz1-1.fna.fbcdn.net/v/t1.18169-9/23380328_10155482766942795_6008408380991123863_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qZdPs0vT-1kAX_SYksq&_nc_ht=scontent.fykz1-1.fna&oh=00_AT8g_TkynLhtG6CH3sCIWIvliXHmNyO4udXa_IXXIcKmfQ&oe=62FDC5AF'
			)
			.setFooter({ text: 'Baymax II • 2022' });

		const b1 = new ButtonBuilder().setLabel('🔗 GBSV').setStyle(ButtonStyle.Link).setURL('https://owl.uwo.ca/portal/');
		const b2 = new ButtonBuilder().setLabel('🔗 Card').setStyle(ButtonStyle.Link).setURL('https://studentservices.uwo.ca/secure/oneexperience/WesternOne/index.cfm');
		const b3 = new ButtonBuilder().setLabel('🔗 ChooseUWO').setStyle(ButtonStyle.Link).setURL('https://choose.uwo.ca/');
		const b4 = new ButtonBuilder().setLabel('🔗 Move-In').setStyle(ButtonStyle.Link).setURL('https://myhousing.uwo.ca/portal/50BF4E2C/42/1166/Forms___Services-Residence_Onboarding');

		await interaction.reply({ embeds: [embed], components: [new ActionRowBuilder().addComponents(b1, b2, b3, b4)] });
	},
};
