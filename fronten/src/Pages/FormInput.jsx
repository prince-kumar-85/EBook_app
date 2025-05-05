import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../Component/FormInput.css"; // Assuming you have a CSS file for styling

function FormInput() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [language, setLanguage] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [file, setFile] = useState(null); // Cover image
    const [rating, setRating] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
    
        if (!title || !author || !description || !category || !language || !price || !rating) {
            setError("All fields are required.");
            return;
        }
    
        const formData = new FormData();
        formData.append("title", title);
        formData.append("author", author);
        formData.append("description", description);
        formData.append("language", language);
        formData.append("category", category);
        formData.append("price", price);
        formData.append("rating", rating);
        if (file) formData.append("coverImage", file);
    
        try {
            const res = await axios.post("http://localhost:5000/api/createbook", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
    
            if (res.status === 201) {
                setSuccess("Book created successfully!");
                setTimeout(() => {
                    navigate("/allBook");
                }, 1000);
            } else {
                setError("Failed to create book.");
            }
        } catch (err) {
            setError(err.response?.data?.message || "Submission failed.");
            console.error("Create Book Error:", err.response?.data || err.message);
        }
    };
    

    const handleReset = () => {
        setTitle("");
        setAuthor("");
        setDescription("");
        setLanguage("");
        setPrice("");
        setFile(null);
        setCategory("");
        setRating("");
        setError("");
        setSuccess("");
    };

    return (
        <>
            <h1>Form Input</h1>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}

            <form onSubmit={handleSubmit} onReset={handleReset}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <input
                        type="text"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="language">Language</label>
                    <input
                        type="text"
                        id="language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="rating">Rating</label>
                    <input
                        type="number"
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="coverImage">Cover Image</label>
                    <input
                        type="file"
                        id="coverImage"
                        accept="image/*"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>
        </>
    );
}

export default FormInput;
