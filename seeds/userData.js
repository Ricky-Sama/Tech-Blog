const { User } = require("../models");

const userData = [
  {
    username: "techuser1",
    email: "techuser1@example.com",
    password: "password1",
  },
  {
    username: "techuser2",
    email: "techuser2@example.com",
    password: "password2",
  },
  {
    username: "techuser3",
    email: "techuser3@example.com",
    password: "password3",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;