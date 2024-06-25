const express = require("express");

const router = express.Router();

const { sayWelcome } = require("../../controllers/sayActions");
const { browse } = require("../../controllers/programAction");

router.get("/", sayWelcome);
router.get("/programs", browse);

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

/* ************************************************************************* */

module.exports = router;
