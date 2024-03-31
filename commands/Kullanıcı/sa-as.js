const { Client, SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('sa')
        .setDescription('Selam as sistemini açar veya kapatır.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('ac')
                .setDescription('Selam as sistemini açar.')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('kapat')
                .setDescription('Selam as sistemini kapatır.')
        ),
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();
        
        if (subcommand === 'ac') {
            // Selam as sistemini açma işlemleri
            await interaction.reply('Selam as sistemi açıldı.');
        } else if (subcommand === 'kapat') {
            // Selam as sistemini kapatma işlemleri
            await interaction.reply('Selam as sistemi kapatıldı.');
        }
    },
};
