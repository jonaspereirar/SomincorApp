import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import User from '../models/User';
import File from '../models/File';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      number: Yup.string().required(),
      password: Yup.string().required(),
    });

    if(!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }

    const { number, password } = req.body;

    const user = await User.findOne({
      where: { number },
    include: [
      {
        model: File,
        as: 'avatar',
        attributes: ['id', 'path', 'url'],
      },
    ]
  });

    if (!user) {
      return res.status(401).json({ error: 'User not found'});
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, email, avatar, provider } = user;

    return res.json({
      user: {
        id,
        number,
        name,
        email,
        provider,
        avatar,
      },
      token: jwt.sign( { id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    })
  }

}

export default new SessionController();