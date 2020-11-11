import * as Yup from 'yup';

import User from '../models/User';
import File from '../models/File';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      number: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });
try {
    if(!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }

    const userExists = await User.findOne({ where: { number: req.body.number } });

    if(userExists) {
      return res.status(400).json({ error: 'User already exists.'});
    }

    const emailExists = await User.findOne({ where: { email: req.body.email } });

    if(emailExists) {
      return res.status(400).json({ error: 'email already registed.'});
    }

    const { id, name, number, email } = await User.create(req.body);

    return res.json({
      id,
      name,
      number,
      email,
      //provider,
    });
}catch (err) {
  console.log(err)
  res.status(400).send({ error: 'Erro Create'})
}
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      number: Yup.string().required(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
      .min(6)
      .when('oldPassword', (oldPassword, field) =>
        oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
        ),
    });

    if(!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email && email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if(userExists) {
        return res.status(400).json({ error: 'User already exists.'});
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match.' });
    }

    await user.update(req.body);

    const { id, name, avatar } = await User.findByPk(req.userId, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        }
      ]
    })

    return res.json({ id, name, avatar });
  }
}

export default new UserController();