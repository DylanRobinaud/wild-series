const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, read } = require("../../../controllers/categoryActions");

// Route to get a list of categories
router.get("/", browse);

// Route to get one category
router.get("/:id", read);

/* ************************************************************************* */

module.exports = router;
