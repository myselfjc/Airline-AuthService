"use strict";
const UserRepository = require("../repository/userRepository");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/serverConfig");
const bcrypt = require('bcrypt')

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(data) {
    try {
      const user = await this.userRepository.createUser(data);
      return user;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  async deleteUser(id) {
    try {
      const user = await this.userRepository.deleteUser(id);
      return user;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  async getUser(id) {
    try {
      const user = await this.userRepository.getUser(id);
      return user;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  async login(email,password){
    try {
        const user = await this.userRepository.getByEmail(email);

        const passwordMatch = this.checkPassword(password,user.password);
        
        if(!passwordMatch){
            throw {error:'Incorrect Password!'}
        }

        const jwtToken = this.createToken({email:user.email,id:user.id});

        return jwtToken
    } catch (error) {
        throw { error };
    }
  }

  async isAuthenticated(jwtToken){
    try {
        const response = this.verifyToken(jwtToken);
        if(!response){
            throw {error:'Token not Valid!'}
        }
        const user = await this.userRepository.getUser(response.id);
        console.log(user);
        if(!user){
            throw {error:'User doesnt exists!'};
        }
        return response.id
    } catch (error) {
        throw { error };
    }
  }

  createToken(user) {
    try {
      const jwtToken = jwt.sign(user, JWT_SECRET, { expiresIn: "1h" });
      return jwtToken;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  verifyToken(jwtToken) {
    try {
      const verification = jwt.verify(jwtToken, JWT_SECRET);
      return verification;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  checkPassword(userPassword, candidatePassword) {
    try {
      const check = bcrypt.compareSync(userPassword, candidatePassword);
      return check;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }
}

module.exports = UserService;
