const { Post } = require("../models");

const postData = [
  {
    title: "First Tech Post",
    content: "Content of first Tech Post.",
    user_id: 1,
  },
  {
    title: "Second Tech Post",
    content: "Content of second Tech post.",
    user_id: 2,
  },
  {
    title: "Third Tech Post",
    content: "Content of third blog post.",
    user_id: 3,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;