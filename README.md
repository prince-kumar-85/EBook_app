# EBook App

## Overview
EBook App is a full-stack web application for managing and browsing eBooks. It allows users to view books by categories, add new books, and manage book details. The backend is built with Node.js, Express, and MongoDB, while the frontend is developed using React.

## Features
### Frontend:
1. **Responsive Design:**
   - The application is designed to work seamlessly across devices with a responsive layout.
   - Includes a navigation bar, sidebar, and footer for easy navigation.

2. **Light and Dark Mode:**
   - Users can toggle between light and dark themes for a better user experience.
   - The theme preference is saved in `localStorage` and applied on page reload.

3. **Search Functionality:**
   - Users can search for books using the search bar in the navigation bar.
   - The search query is passed to the `Home` component for filtering books.

4. **Protected Routes:**
   - Certain routes (e.g., Home, All Books, Form Input) are protected and require user authentication.
   - If a user is not logged in, they are redirected to the login page.

5. **User Authentication:**
   - Includes login and registration pages for user authentication.
   - JWT tokens are stored in `localStorage` for secure access to protected routes.

6. **Book Management:**
   - Users can view all books grouped by categories.
   - A form is provided to add new books to the database.

### Backend:
1. **RESTful API:**
   - Provides endpoints for managing books and user authentication.
   - Includes routes for creating, reading, updating, and deleting books.

2. **File Upload Support:**
   - Allows users to upload book cover images using `multer`.

3. **MongoDB Integration:**
   - Uses MongoDB for data persistence.
   - Includes schemas for books and users.

4. **JWT Authentication:**
   - Secures API endpoints with JWT-based authentication.
   - Tokens are generated during login and verified for protected routes.

---

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
   JWT_SECRET=your_jwt_secret
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

---

## API Endpoints
### Base URL
`http://localhost:5000/api`

### Endpoints
1. **User Authentication**
   - **Register User**
     - **URL:** `/user/signup`
     - **Method:** `POST`
     - **Request Body:**
       ```json
       {
         "name": "John Doe",
         "email": "john@example.com",
         "password": "password123"
       }
       ```
   - **Login User**
     - **URL:** `/user/login`
     - **Method:** `POST`
     - **Request Body:**
       ```json
       {
         "email": "john@example.com",
         "password": "password123"
       }
       ```

2. **Book Management**
   - **Create a Book**
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
   - **Get All Books**
     - **URL:** `/api/getbook`
     - **Method:** `GET`
   - **Get Book by ID**
     - **URL:** `/api/getbook/:id`
     - **Method:** `GET`
   - **Delete Book**
     - **URL:** `/api/deletebook/:id`
     - **Method:** `DELETE`
   - **Update Book**
     - **URL:** `/api/updatebook/:id`
     - **Method:** `PUT`

---

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
│   │   │   ├── Login.jsx   # Login page
│   │   │   ├── Register.jsx # Registration page
│   │   │   └── FormInput.jsx # Form for adding books
│   │   └── Component/
│   │       ├── ProtectedRoute.jsx # Component for protected routes
│   │       └── Home.css    # Styles for the home page
│   ├── package.json        # Frontend dependencies
│   └── public/             # Public assets
```

---

## Usage
1. Start the backend server.
2. Start the frontend server.
3. Open `http://localhost:3000` in your browser to access the application.

---

## Contributing
If you would like to contribute to the EBook App, please fork the repository and submit a pull request with your changes.

---

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
