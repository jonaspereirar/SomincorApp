import Departamento from '../models/Departamento';
import User from '../models/User';


class DepartamentoController {
  async store (req, res) {
    const { user_id } = req.params;
    const { name } = req.body;
try {
    const user = await User.findByPk(user_id);

    if(!user) {
      return res.status(400).json({ error: 'User not found.'});
    }

    // if (name && name != Departamento.name) {
    //   const nameExists = await Departamento.findOne({ where: { name } });

    //   if(nameExists) {
    //     return res.status(400).json({ error: 'Name de direção ou departamento already exists.'});
    //   }
    // }

    // const departamento = await Departamento.create({
    //   name
    // })
    const [ departamento ] = await Departamento.findOrCreate({
      where: { name }
    });

    await user.addDepartamento(departamento)

  console.log(departamento)
    return res.json(departamento);

    }catch (err) {
      console.log(err)
      res.status(400).send({ error: 'Error create' })
    }
  }





  ////////////////////////////////////////////////////////////////////////////
  async update (req, res) {
    try{
      const { name, oldName } = req.body;
      const nameExists = await Departamento.findOne( {name});

      if (name && name === Departamento.name) {
          return res.status(400).json({ error: 'Departamento already exists' });
        }

        if (name === oldName) {
          return res.status(401).json({ error: 'Departamento already exists' });
        }

      await nameExists.update(req.body);

      return res.json({ nameExists })

    }catch (err) {
      console.log(err)
        res.status(400).send({ error: 'Erro update'})

    }
  }

//////////////////////////////////////////////////////////////////////////
  async delete(req, res) {
    try{
      const { name } = req.body;
      const nameExists = await Departamento.findOne( {where: {name}} );

      if (name !== nameExists.name) {
        return res.status(400).json({ error: 'Departamento does not exists' });
      }

      await nameExists.destroy(nameExists)


    } catch (err) {
      console.log(err)
      res.status(400).send({ error: 'Delete fail'})
    }
  }
}

export default new DepartamentoController();
