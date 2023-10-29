const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Nice post.",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "This is pretty cool",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "Hhmmm I don't know, man",
    user_id: 3,
    post_id: 1,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;