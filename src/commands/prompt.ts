import { CommandInteraction, SlashCommandBuilder} from 'discord.js';
import { handlePrompt } from '../service/promptHandler';

export const data = new SlashCommandBuilder()
  .setName('prompt')
  .setDescription('Ask something to BotGPT')
  .addStringOption(option => option.setName('prompt').setDescription('Your prompt: ').setRequired(true))

export async function execute(interaction: CommandInteraction) {
  let prompt = String(interaction.options.data[0].value);
  interaction.reply(`${prompt}, asked by: ${interaction.user.username}`);
  let response = await handlePrompt(prompt);
  await interaction.followUp({content: String(response), ephemeral: false});
}
