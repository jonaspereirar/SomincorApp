import User from '../models/User';
import Notification from '../models/Notification';
import { jwtToken, hashPassword } from '../../utils/index';
import SendMail from '../jobs/SendMail';
import Queue from '../../lib/Queue';

class ForgotPasswordController {
  async store(req, res) {
    const { email } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(401).json({ error: 'User not found' });

    const token = jwtToken.createToken(user);
    const link = `${req.protocol}://localhost:3333/reset_password/${token}`;

    const now = new Date();
    now.setHours(now.getHours());

    await Notification.create({
      notification: token,
      notification_created_at: now,
      link,
    });

    await Queue.add(SendMail.key, {
      user,
      token,
      link,
      // teste: teste,
    });

    return res.status(200).send({
      message: 'Password reset link has been successfully sent to your inbox',
    });
  }

  async update(req, res, next) {
    const { password } = req.body;
    const { token } = req.params;
    const decoded = jwtToken.verifyToken(token);
    const hash = hashPassword(password);
    const updatedUser = await User.update(
      { password_hash: hash },
      {
        where: { id: decoded.userId },
        returning: true,
        plain: true,
      }
    );

    const { id, name, email } = updatedUser[1];
    return res
      .status(200)
      .send({ token, user: { id, name, email, hash, password } });
  }
}

export default new ForgotPasswordController();
