import { CommandInteraction, SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('alive')
  .setDescription('Check if bot still alive')

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("I\'m ALIVE, bow, mere mortal!");
}
