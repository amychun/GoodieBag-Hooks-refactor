"use strict";

const { reset } = require("nodemon");
const Candy = require("../db/models/Candy");

const router = require("express").Router();

//GET /candies
router.get("/candies", async (req, res, next) => {
  try {
    const allCandies = await Candy.findAll();
    res.send(allCandies);
  } catch (err) {
    next(err);
  }
});

//GET /candies/:id
router.get("/candies/:id", async (req, res, next) => {
  try {
    const singleCandy = await Candy.findByPk(req.params.id);
    res.send(singleCandy);
  } catch (err) {
    next(err);
  }
});

//PUT /candies
router.put("/candies/:id", async (req, res, next) => {
  try {
    const quantity = await Candy.update(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true,
    });
    console.log(quantity);
    res.send(quantity[1][0]);
  } catch (err) {
    next(err);
  }
});

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!
router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
