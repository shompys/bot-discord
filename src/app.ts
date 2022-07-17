import 'dotenv/config';
import { Client, Intents } from 'discord.js';
import registerCommands from './controllers/registerCommands';
import { handleCommands } from './controllers/handleMessages';
import { GatewayIntentBits } from 'discord-api-types/v9';
registerCommands();
const client = new Client({ intents: [GatewayIntentBits.Guilds, Intents.FLAGS.GUILDS] });

client.once('ready', (bot) => {
    console.log('Bot: ', bot.user.username)
})

client.on<any>('interactionCreate', handleCommands);

client.login(process.env.DISCORD_TOKEN);