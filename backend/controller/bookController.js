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

module.exports = { createBook };
