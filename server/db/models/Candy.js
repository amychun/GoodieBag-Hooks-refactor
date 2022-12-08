const Sequelize = require("sequelize");
const db = require("../database");

const candyQuantity = () => {};
module.exports = db.define("candy", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 10,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://www.memecreator.org/static/images/memes/3324898.jpg",
  },
});
