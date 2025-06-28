
const User = require('../models/User');

class UserService {
  async findUserByEmail(email) {
    return await User.findOne({ email });
  }

  async findUserById(id) {
    return await User.findById(id).select('-password');
  }

  async createUser(userData) {
    const user = new User(userData);
    return await user.save();
  }

  async updateUser(id, updateData) {
    return await User.findByIdAndUpdate(id, updateData, { new: true }).select('-password');
  }

  async deleteUser(id) {
    return await User.findByIdAndDelete(id);
  }

  async getAllUsers(filter = {}) {
    return await User.find(filter).select('-password');
  }

  async getUsersByRole(role) {
    return await User.find({ role }).select('-password');
  }
}

module.exports = new UserService();
