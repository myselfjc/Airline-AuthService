"use strict";
const UserRepository = require('../repository/userRepository');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(data) {
        try {
            const user = await this.userRepository.createUser(data);
            return user
        } catch (error) {
            console.log(error);
            throw { error }
        }
    }

    async deleteUser(id) {
        try {
            const user = await this.userRepository.deleteUser(id);
            return user
        } catch (error) {
            console.log(error);
            throw { error }
        }
    }

    async getUser(id){
        try {
            const user = await this.userRepository.getUser(id);
            return user
        } catch (error) {
            console.log(error);
            throw { error }
        }
    }
}

module.exports = UserService;