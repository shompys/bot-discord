import * as dotenv from 'dotenv';
dotenv.config();
import { Client, Intents } from 'discord.js';
import { createCommands, deleteAllCommands, deleteCommandById, createFilesCommands } from './controllers/handleCommands';
import { handleCommands } from './controllers/handleMessages';
import { GatewayIntentBits } from 'discord-api-types/v9';
// createCommands()
// createFilesCommands()
//deleteAllCommands()
// deleteCommandById('1000876322052128871');
// const client = new Client({ intents: [GatewayIntentBits.Guilds, Intents.FLAGS.GUILDS] });
const client = new Client({ intents: 513 });
client.once('ready', (bot) => {
    console.log('Bot: ', bot.user.username)
})

client.on<any>('interactionCreate', handleCommands);

client.login(process.env.DISCORD_TOKEN);