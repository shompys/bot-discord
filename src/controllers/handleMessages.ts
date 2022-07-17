import type { CacheType, CommandInteraction } from "discord.js";

export const handleCommands = async (interaction: CommandInteraction<CacheType> ) => {

    type CommandsCaseType = { [index: string] : () => void }

    if(!interaction.isCommand()) return;
    const commandsCase : CommandsCaseType = {
        'ping': async () => {
            await interaction.reply({content: 'Pong!', ephemeral: false})
        }
    }
    commandsCase[interaction.commandName] && commandsCase[interaction.commandName]()
};