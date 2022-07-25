import { CacheType, CommandInteraction, Message, MessageButton, MessageEmbed } from "discord.js";

export const handleCommands = async (interaction: CommandInteraction<CacheType> ) => {
    const { user } = interaction;
    type CommandsCaseType = { [index: string] : () => void }
    
    if(!interaction.isCommand()) return;
    const commandsCase : CommandsCaseType = {
        'ping': () => {
            const embed = new MessageEmbed().setDescription('Pong!')
            interaction.reply({embeds: [embed], ephemeral: false})
        },
        'datos': async () => {
            const embed = new MessageEmbed().setDescription(`
                Tus datos

                Usuario: ${user.username}
                Creado: ${user.createdAt}
                avatar: ${user.avatarURL()}
            `)
            interaction.reply({ embeds: [embed] })
        },
        'test': () => interaction.reply({content: 'test'})
        
    }
    commandsCase[interaction.commandName] && commandsCase[interaction.commandName]()
};
