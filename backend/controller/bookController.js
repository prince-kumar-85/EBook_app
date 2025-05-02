const Book = require("../model/book");
const multer = require('multer') // Import multer for file upload handling

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = './upload/images';
        cb(null, uploadPath);  // Ensure this is the correct folder path
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage: storage }).single('coverImage');



// Create a new book
const createBook = async (req, res) => {
    try {
        console.log("📥 Incoming Request Body:", req.body);
        console.log("📷 Uploaded File:", req.file);

        const { title, author, description,category, language, price, rating } = req.body;
        const coverImage = req.file ? req.file.filename : null;

        const book = new Book({
            title,
            author,
            description,
            category,
            language,
            coverImage,
            price: parseFloat(price),
            rating: parseFloat(rating),
        });

        await book.save();

        res.status(201).json({ message: "Book created successfully", book });
    } catch (err) {
        console.error("🔥 Error saving book:", err.message);
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

module.exports = { createBook, getBook, getBookById, deleteBook, updateBook , upload};
