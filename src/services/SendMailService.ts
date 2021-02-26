import { resolve } from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import nodemailer, { Transporter } from 'nodemailer';

class SendMailService {
  private client: Transporter;

  constructor() {
    nodemailer.createTestAccount().then((account) => {
      this.client = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });
    });
  }

  async execute(to: string, subject: string, body: string): Promise<void> {
    const npsPath = resolve(__dirname, '..', 'views', 'emails', 'npsMail.hbs');
    const templateFileContent = fs.readFileSync(npsPath).toString('utf8');
    const mailTemplateParse = handlebars.compile(templateFileContent);

    const html = mailTemplateParse({
      name: to,
      title: subject,
      description: body,
    });

    const message = await this.client.sendMail({
      from: 'NPS <noreply@nps.com>',
      to,
      subject,
      html,
    });

    console.log('Message sent: %s', message.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}

export default new SendMailService();
