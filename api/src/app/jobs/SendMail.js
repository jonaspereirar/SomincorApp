import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class SendMail {
  get key() {
    return 'SendMail';
  }

  async handle({ data }) {
    const { user, token, link, } = data;

    const now = new Date();
    now.setHours(now.getHours());

    Mail.sendMail({
      to: `${user.name} <${user.email}>`,
      subject: 'Renovação da minha senha - Reset my password',
      template: 'forgotpassword',
      context: {
        token: token,
        user: user.name,
        link: link,
        date: format(now, "'dia' dd 'de' MMMM', às' H:mm'h'", {
          locale: pt,
        }),
      },
    }, (err) => {
          if (err)
            return res.status(400).send({ error: 'Cannot send forgot password email' });
          })
  }
}

export default new SendMail();
