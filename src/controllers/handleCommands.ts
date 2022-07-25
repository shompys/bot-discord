import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import { writeFile } from 'fs/promises';

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!'
    },
    {
        name: 'datos',
        description: 'Muestra tus datos'
    },
    {
        name: 'test',
        description: 'Pruebas'
    }
]; 

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN as string);

// todo el manejo de comandos en este caso es a nivel global no por guild o canal

export const createCommands = async () => {
  try {
    console.log('update de comandos o creacion!');

    await rest.put(
      Routes.applicationCommands(process.env.DISCORD_CLIENT_ID as string),
      { body: commands },
    );

    console.log('fin del update de comandos o create!');
  } catch (error) {
    console.error(error);
  }
}

export const deleteAllCommands = async () => {
    try {
        console.log('Borrar todos los comandos')
        await rest.put(
            Routes.applicationCommands(process.env.DISCORD_CLIENT_ID as string), { body: []}
        )
        console.log('termino la borracion de todos los comandos')
    } catch (error) {
        console.log('algo salio pal ogt: ', error)
    }
}

export const deleteCommandById = async (commandId: string) => {
    try {
        console.log('Borrando comando por ID: ', commandId)
        const resp = await rest.delete(Routes.applicationCommand(process.env.DISCORD_CLIENT_ID as string, commandId))
        console.log(resp)
    } catch (error) {
        console.log('Algo salio mal.', error)
    }
}

export const createFilesCommands = async () => {
    
    const data = await Promise.allSettled(commands.map(command => {
        return writeFile(`src/commands/${command.name}.ts`,  `export default ${JSON.stringify(command)};`)
    }))
    console.log(data)
    
}