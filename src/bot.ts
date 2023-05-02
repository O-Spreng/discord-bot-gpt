import {  Client, Events, GatewayIntentBits  } from 'discord.js';
import * as commandModules from './commands';
import config from './config';

const commands = Object(commandModules);
export const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.DirectMessages
    ],
});

client.once(Events.ClientReady, () => {
    console.log("Discord Bot Ready!");
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isCommand()) {
    return
  }
  const {commandName} = interaction;
  commands[commandName].execute(interaction, client);
});

client.login(config.DISCORD_TOKEN);
