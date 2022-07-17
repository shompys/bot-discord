import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!'
    },
    {
        name: 'hi',
        description: 'Te saluda'
    }
]; 

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN as string);

const registerCommands = async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationCommands(process.env.DISCORD_CLIENT_ID as string),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
}
export default registerCommands;