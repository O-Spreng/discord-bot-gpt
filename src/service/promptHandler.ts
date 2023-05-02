import {getOpenAIResponse} from './openai'

export async function handlePrompt(prompt: string): Promise<String|undefined> {

  return await getOpenAIResponse(prompt);
}
