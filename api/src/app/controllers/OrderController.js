import Order from '../models/Order';
import User from '../models/User';
import Area from '../models/Area';
import Location from '../models/Location';
import File from '../models/File';

class OrderController {
  async index(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: {
        association: 'orders',
        attributes: ['front'],
        through: {
          attributes: ['user_id'],
        },
      },
    });

    return res.json(user.orders);
  }

  async store(req, res, next) {
    try {
      const { user_id } = req.params;
      const { location, ...data } = req.body;
      const order = await Order.create(data);

      if (location && Location.length > 0) {
        order.setLocation(location);
      }

      const user = await User.findByPk(user_id, {
        include: [
          {
            model: Area,
            as: 'area',
            attributes: ['name'],
          },
          {
            model: File,
            as: 'avatar',
            attributes: ['id', 'path', 'url'],
          },
        ],
      });

      // if (!user) {
      //   return res.status(400).json({ error: 'User not found' });
      // }

      // const location = await Location.findOne(location_id);

      // if (!location) {
      //   return res.status(400).json({ error: 'Location not found' });
      // }

      // await Order.create(req.body, { location });

      return res.json({ user, location });
    } catch (e) {
      console.log(e);
      return next(new Error(e));
    }
  }

  async update(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }
    const { front, description } = req.body;

    const order = await Order.update(front, description);

    return res.json({ user_id, order });
  }

  async delete(req, res) {
    const { user_id } = req.params;
    const { front, description } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const order = await Order.findOne({
      where: { front, description },
    });

    await user.removeOrder(order);

    return res.json({ user_id, front, description });
  }
}
export default new OrderController();
