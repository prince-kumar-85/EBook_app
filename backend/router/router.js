const express = require('express');
const router = express.Router();
const { createBook, getBook, getBookById, deleteBook, updateBook } = require("../controller/bookController");

// Define routes for CRUD operations on books
router.post("/createbook", createBook);
router.get("/getbook", getBook);
router.get("/getbook/:id", getBookById);
router.delete("/deletebook/:id", deleteBook);
router.put("/updatebook/:id", updateBook);

module.exports = router;
