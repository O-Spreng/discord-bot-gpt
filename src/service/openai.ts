import {Configuration, OpenAIApi} from 'openai';
import config from '../config'

const configuration = new Configuration({
  apiKey: config.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function getOpenAIResponse(input: string): Promise<string|undefined > {
  const prompt = input.trim();

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: input,
      temperature: 1,
      max_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    })

    // console.log(JSON.stringify(completion.data.choices[0]));

    return completion.data.choices[0].text?.trim();
  } catch (error) {
    console.error(error);
  }
}
