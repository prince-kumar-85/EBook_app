const express = require('express');
const router = express.Router();
const {
  createBook,
  getBook,
  getBookById,
  deleteBook,
  updateBook,
  upload, // ← import the upload middleware
} = require("../controller/bookController");

// ✅ Use upload middleware before createBook
router.post("/createbook", upload, createBook);
router.get("/getbook", getBook);
router.get("/getbook/:id", getBookById);
router.delete("/deletebook/:id", deleteBook);
router.put("/updatebook/:id", updateBook);

module.exports = router;
