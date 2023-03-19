const { User } = require("../models/index");

class UserRepository {
  async createUser(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  async deleteUser(id) {
    try {
      const user = await User.destroy({
        where: {
          id: id,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  async getUser(id) {
    try {
      const user = await User.findByPk(id);
      //     attributes: ['email']
      // });
      return user;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  async getByEmail(email) {
    try {
      const user = await User.findOne({
        where: {
          email,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }
}

module.exports = UserRepository;
