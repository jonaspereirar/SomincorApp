import Order from '../models/Order';
import User from '../models/User';

class OrderController {
  async index(req, res) {}

  async store(req, res) {
    const { user_id } = req.params;
    const { front, description } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const [order] = await Order.findOrCreate({
      where: { front, description },
    });

    await user.addOrder(order);

    return res.json(order);
  }
}

export default new OrderController();
