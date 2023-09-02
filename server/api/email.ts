import { Resend } from 'resend';

const config = useRuntimeConfig()
const resend = new Resend(config.RESEND_API_KEY);

//TODO receber dados dos inputs
export default defineEventHandler(async () => {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['lucasguissgusmao@gmail.com'],
      subject: 'Hello world',
      html: '<strong>It works!</strong>',
    });

    return data;
  } catch (error) {
    return { error };
  }
});