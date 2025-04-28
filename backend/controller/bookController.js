const Book = require("../model/book");

const createBook = async (req, res) => {
    try {
        const book = new Book({
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            language: req.body.language,
            coverImage: req.body.coverImage,
            price: req.body.price,
            rating: req.body.rating
        });

        await book.save();

        res.status(201).json({ message: "Book created successfully", book });
    } catch (err) {
        res.status(500).json({ message: "Book creation failed", error: err.message });
    }
};


const getBook = async (req, resp) => {
    try {
        const books = await Book.find();
        if (!books || books.length === 0) {
            return resp.status(404).json({ message: "No books found" });
        }
        return resp.status(200).json({ books }); // ✅ Send response here
    } catch (err) {
        return resp.status(500).json({ message: "Error in fetching books", error: err.message });
    }
};


module.exports = { createBook , getBook};
