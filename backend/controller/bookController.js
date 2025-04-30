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


const getBookById = async (req, resp) => {
    const bookId = req.params.id;
    try {
        const book = await  Book.findById(bookId);
        if (!book) {
            return resp.status(404).json({ message: "Book not found" });
        }
        return resp.status(200).json({ book });
    } catch (err) {     
        return resp.status(500).json({ message: "Error in fetching book", error: err.message });
    }
} 

const deleteBook = async (req, resp) => {   
    const bookId=req.params.id;
    try{
        const book =await Book.findByIdAndDelete(bookId);
        if(!book){
            return resp.status(404).json({message:"Book not found"});
        }           
        return resp.status(200).json({message:"Book deleted successfully"});
    }catch(err){
        return resp.status(500).json({message:"Error in deleting book",error:err.message});
    }

}

const updateBook = async (req, resp)=>{
    const bookId=req.params.id;
    try{
        const book =await  Book.findByIdAndUpdate(bookId,req.body,{new:true});
        if(!book){
            return resp.status(404).json({message:"Book not found"});
        }   
        return resp.status(200).json({message:"Book updated successfully",book});
    }
    catch(err){
        return resp.status(500).json({message:"Error in updating book",error:err.message});
    }   
}

module.exports = { createBook , getBook , getBookById, deleteBook, updateBook};
