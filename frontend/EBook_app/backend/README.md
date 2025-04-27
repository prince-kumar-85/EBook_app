# EBook App

## Overview
EBook App is a web application designed to provide users with a seamless experience for browsing, reading, and managing electronic books. The backend is built using Node.js, Express, and MongoDB, providing a robust API for the frontend to interact with.

## Features
- Create and manage eBooks with details like title, author, description, language, cover image, price, and rating.
- RESTful API endpoints for managing eBooks.
- MongoDB integration for data persistence.

## Installation Instructions
To set up the backend for the EBook App, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the backend directory:**
   ```bash
   cd EBook_app/backend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**
   Create a `.env` file in the `backend` directory and add the following:
   ```env
   PORT=5000
   mongoURI=mongodb://127.0.0.1:27017/EBookStore
   ```

5. **Start the server:**
   ```bash
   npm start
   ```
   The server will start on the specified port (default: 5000).

## API Endpoints
### Base URL
`http://localhost:<PORT>/api`

### Endpoints
1. **Create a Book**
   - **URL:** `/api/createbook`
   - **Method:** `POST`
   - **Request Body:**
     ```json
     {
       "title": "Book Title",
       "author": "Author Name",
       "description": "Book Description",
       "language": "English",
       "coverImage": "URL to cover image",
       "price": 19.99,
       "rating": 4.5
     }
     ```
   - **Response:**
     ```json
     {
       "message": "Book created successfully",
       "book": { ...book details... }
     }
     ```

## Project Structure
```
backend/
├── .env                # Environment variables
├── app.js              # Main application file
├── package.json        # Project metadata and dependencies
├── conn/
│   └── conn.js         # MongoDB connection logic
├── controller/
│   └── bookController.js # Controller for book-related operations
├── model/
│   └── book.js         # Mongoose schema for books
├── router/
│   └── router.js       # API routes
```

## Contributing
If you would like to contribute to the EBook App, please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.