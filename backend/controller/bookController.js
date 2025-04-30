const Book = require("../model/book");

// Create a new book
const createBook = async (req, res) => {
    try {
        const { title, author, description, language, coverImage, price, rating } = req.body;

        // Create a new book instance
        const book = new Book({
            title,
            author,
            description,
            language,
            coverImage,  // Optional field
            price,
            rating
        });

        // Save the book to the database
        await book.save();

        // Send success response
        res.status(201).json({ message: "Book created successfully", book });
    } catch (err) {
        // Send error response
        res.status(500).json({ message: "Book creation failed", error: err.message });
    }
};

// Get all books
const getBook = async (req, resp) => {
    try {
        const books = await Book.find();
        if (!books || books.length === 0) {
            return resp.status(404).json({ message: "No books found" });
        }
        return resp.status(200).json({ books });
    } catch (err) {
        return resp.status(500).json({ message: "Error in fetching books", error: err.message });
    }
};

// Get book by ID
const getBookById = async (req, resp) => {
    const bookId = req.params.id;
    try {
        const book = await Book.findById(bookId);
        if (!book) {
            return resp.status(404).json({ message: "Book not found" });
        }
        return resp.status(200).json({ book });
    } catch (err) {
        return resp.status(500).json({ message: "Error in fetching book", error: err.message });
    }
};

// Delete book by ID
const deleteBook = async (req, resp) => {
    const bookId = req.params.id;
    try {
        const book = await Book.findByIdAndDelete(bookId);
        if (!book) {
            return resp.status(404).json({ message: "Book not found" });
        }
        return resp.status(200).json({ message: "Book deleted successfully" });
    } catch (err) {
        return resp.status(500).json({ message: "Error in deleting book", error: err.message });
    }
};

// Update book by ID
const updateBook = async (req, resp) => {
    const bookId = req.params.id;
    try {
        const book = await Book.findByIdAndUpdate(bookId, req.body, { new: true });
        if (!book) {
            return resp.status(404).json({ message: "Book not found" });
        }
        return resp.status(200).json({ message: "Book updated successfully", book });
    } catch (err) {
        return resp.status(500).json({ message: "Error in updating book", error: err.message });
    }
};

module.exports = { createBook, getBook, getBookById, deleteBook, updateBook };
