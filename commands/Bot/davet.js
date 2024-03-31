const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("davet")
        .setDescription("Botun davet linklerini gösterir."),

    run: async (client, interaction) => {

        const embed = new EmbedBuilder()
            .setTitle("ApexBOT - Davet")
            .setDescription(`> **Merhaba bütün sosyal linklerimizi alttaki butonlara basarak görebilirsiniz.**`)
            .setImage("https://share.creavite.co/660451f7d28c88b11e60b660.gif")
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("Davet Et")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://discord.com/oauth2/authorize?client_id=1219707479416635484&permissions=8&scope=bot+applications.commands"),
                new ButtonBuilder()
                    .setLabel("Destek Sunucusu")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://discord.gg/fNmpDfameD"),
                new ButtonBuilder()
                    .setLabel("Oy Ver")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://discord.gg/fNmpDfameD")

            )
        interaction.reply({ embeds: [embed], components: [row] })

    },
};
