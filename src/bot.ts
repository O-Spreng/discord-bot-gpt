import { Client } from 'discord.js';
import config from './config';

export const client = new Client({
    intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

client.once("ready", () => {
    console.log("Discord Bot Ready!");
});

client.on('interactionCreate', async interaction => {

    // if(interaction.isCommand() === 'Teste') {
    //     message.reply('Funciona');
    // }
});

client.login(config.DISCORD_TOKEN);
