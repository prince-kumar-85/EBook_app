# EBook App

## Overview
EBook App is a full-stack web application for managing and browsing eBooks. It allows users to view books by categories, add new books, and manage book details. The backend is built with Node.js, Express, and MongoDB, while the frontend is developed using React.

## Features
### Frontend:
- Display all books grouped by categories.
- View detailed information about each book.
- Responsive design with navigation and sidebar.
- Light and dark mode toggle for better user experience.

### Backend:
- RESTful API for managing books.
- File upload support for book cover images.
- MongoDB integration for data persistence.

## Installation Instructions

### Backend Setup
1. **Navigate to the backend directory:**
   ```bash
   cd EBook_app/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the `backend` directory and add the following:
   ```env
   PORT=5000
   mongoURI=mongodb://127.0.0.1:27017/EBookStore
   ```

4. **Start the backend server:**
   ```bash
   npm start
   ```
   The backend server will start on `http://localhost:5000`.

### Frontend Setup
1. **Navigate to the frontend directory:**
   ```bash
   cd EBook_app/fronten
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the frontend server:**
   ```bash
   npm start
   ```
   The frontend server will start on `http://localhost:3000`.

## API Endpoints
### Base URL
`http://localhost:5000/api`

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
       "category": "Drama",
       "language": "English",
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

2. **Get All Books**
   - **URL:** `/api/getbook`
   - **Method:** `GET`
   - **Response:**
     ```json
     {
       "books": [ ...array of books... ]
     }
     ```

3. **Get Book by ID**
   - **URL:** `/api/getbook/:id`
   - **Method:** `GET`

4. **Delete Book**
   - **URL:** `/api/deletebook/:id`
   - **Method:** `DELETE`

5. **Update Book**
   - **URL:** `/api/updatebook/:id`
   - **Method:** `PUT`

## Project Structure
```
EBook_app/
├── backend/
│   ├── .env                # Environment variables
│   ├── app.js              # Main application file
│   ├── package.json        # Project metadata and dependencies
│   ├── conn/
│   │   └── conn.js         # MongoDB connection logic
│   ├── controller/
│   │   └── bookController.js # Controller for book-related operations
│   ├── model/
│   │   └── book.js         # Mongoose schema for books
│   ├── router/
│   │   └── router.js       # API routes
│   └── upload/             # Directory for uploaded images
├── fronten/
│   ├── src/
│   │   ├── App.jsx         # Main React component
│   │   ├── Pages/
│   │   │   ├── Home.jsx    # Home page
│   │   │   ├── AllBook.jsx # Page displaying all books
│   │   │   └── FormInput.jsx # Form for adding books
│   │   └── Component/
│   │       └── Home.css    # Styles for the home page
│   ├── package.json        # Frontend dependencies
│   └── public/             # Public assets
```

## Usage
1. Start the backend server.
2. Start the frontend server.
3. Open `http://localhost:3000` in your browser to access the application.

## Contributing
If you would like to contribute to the EBook App, please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.