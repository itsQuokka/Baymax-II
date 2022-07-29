const { ActionRowBuilder, ButtonBuilder } = require('@discordjs/builders');
const { ApplicationCommandType, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'embed-welcome',
	description: 'Welcome embed generation.',
	cooldown: 3000,
	type: ApplicationCommandType.ChatInput,
	default_member_permissions: 'Administrator', // permission required
	run: async (client, interaction) => {
		const embed = new EmbedBuilder()
			.setColor('#71368A')
			.setTitle('**Welcome to The Western Club**')
			.setDescription(
				`**Howdy there, and Welcome to The Western Club!**

				A Discord dedicated to make your arrival at Western easier!
				You can start your journey at the club by navigating to <#1001362219528888393>
				to get your roles and channel access! Additionally, you can navigate to
				<#1001362219528888394> for important information about on-boarding at Western!

				If you have any questions, you can use the \`help\` command to
				create a channel dedicated to getting the answers to your questions!
				Once you've got the answer you're looking for, you may tag a <@&1001363252518862865> 
				to archive your ticket! (You won't be able to open a new one until you do!)

				Baymax II will be your friendly helper for answering questions, getting
				links, finding answers to frequently asked questions, and more! They are 
				constantly being updated, and if you find any issues/problems with Baymax
				at any time, feel free to post in <#1002376535782727760>!

				This section will be used for important announcements by Western, so if you
				see any new messages then be sure to check them out!
				
				*'The Western Club' is not affiliated with Western University.'*
				`
			)
			.setThumbnail(
				'https://scontent.fykz1-1.fna.fbcdn.net/v/t1.18169-9/23380328_10155482766942795_6008408380991123863_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qZdPs0vT-1kAX_SYksq&_nc_ht=scontent.fykz1-1.fna&oh=00_AT8g_TkynLhtG6CH3sCIWIvliXHmNyO4udXa_IXXIcKmfQ&oe=62FDC5AF'
			)
			.setFooter({ text: 'Baymax II • 2022' });

		await interaction.reply({ embeds: [embed] });
	},
};
