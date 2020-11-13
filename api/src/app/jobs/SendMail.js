import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class SendMail {
  get key() {
    return 'SendMail';
  }

  async handle({ data }) {
    const { user, token, link } = data;

    const now = new Date();
    now.setHours(now.getHours());

    Mail.sendMail({
      to: `${user.name} <${user.email}>`,
      subject: 'Renovação da minha senha - Reset my password',
      template: 'forgotpassword',
      context: {
        token,
        user: user.name,
        link,
        date: format(now, "'dia' dd 'de' MMMM', às' H:mm'h'", {
          locale: pt,
        }),
      },
    });
  }
}

export default new SendMail();
