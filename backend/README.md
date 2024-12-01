
# Backend API Documentation: Todo Application

## Overview
This API provides endpoints for user management and Todo CRUD operations. The backend is built using **Node.js**, **Express.js**, and **MongoDB**.

### Base URL
```
http://<your-domain>:<port>/
```

---

## Authentication Middleware
- **`authenticateSession`**: Ensures that users are authenticated using session IDs stored in cookies.

---

## User Routes

### 1. Verify Session
**Endpoint**: `GET /api/users/verify`  
**Description**: Verifies if the user session is valid.  
**Response**:
- `200 OK`: `{ loggedIn: true }`
- `200 OK`: `{ loggedIn: false }`

---

### 2. Register User
**Endpoint**: `POST /api/users/register`  
**Description**: Registers a new user and initiates a session.  
**Request Body**:
```json
{
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "password": "password123"
}
```
**Response**:
- `201 Created`: `{ message: 'User registered successfully' }`
- `400 Bad Request`: `{ message: "Error message" }`

---

### 3. Login User
**Endpoint**: `POST /api/users/login`  
**Description**: Authenticates a user and creates a session.  
**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
**Response**:
- `200 OK`: `{ message: 'Login successful' }`
- `401 Unauthorized`: `{ message: 'Invalid credentials' }`
- `500 Internal Server Error`: `{ message: 'Error message' }`

---

### 4. Logout User
**Endpoint**: `POST /api/users/logout`  
**Middleware**: `authenticateSession`  
**Description**: Logs out the user by clearing the session.  
**Response**:
- `200 OK`: `{ message: 'Logged out successfully' }`
- `401 Unauthorized`: `{ message: 'Session ID required' }`

---

### 5. Update User
**Endpoint**: `PUT /api/users/update`  
**Middleware**: `authenticateSession`  
**Description**: Updates the user's profile details.  
**Request Body**:
```json
{
  "email": "newemail@example.com",
  "firstName": "Jane",
  "lastName": "Smith",
  "password": "newpassword123"
}
```
**Response**:
- `200 OK`: `{ updatedUser object }`
- `400 Bad Request`: `{ message: 'Error message' }`

---

### 6. Delete User
**Endpoint**: `DELETE /api/users/delete`  
**Middleware**: `authenticateSession`  
**Description**: Deletes the authenticated user and their session.  
**Response**:
- `200 OK`: `{ message: 'User deleted successfully' }`
- `401 Unauthorized`: `{ message: 'Session ID required' }`
- `404 Not Found`: `{ message: 'Invalid user' }`

---

## Todo Routes

### 1. Create Todo
**Endpoint**: `POST /api/todos`  
**Middleware**: `authenticateSession`  
**Description**: Creates a new todo for the authenticated user.  
**Request Body**:
```json
{
  "name": "Buy groceries",
  "description": "Milk, Bread, Eggs",
  "done": false
}
```
**Response**:
- `201 Created`: `{ newTodo object }`
- `400 Bad Request`: `{ message: 'Error message' }`

---

### 2. Get Single Todo
**Endpoint**: `GET /api/todos/:id`  
**Middleware**: `authenticateSession`  
**Description**: Fetches a single todo by its ID for the authenticated user.  
**Response**:
- `200 OK`: `{ todo object }`
- `404 Not Found`: `{ message: 'Todo not found or user not authorized' }`
- `400 Bad Request`: `{ message: 'Error message' }`

---

### 3. Get All Todos
**Endpoint**: `GET /api/todos`  
**Middleware**: `authenticateSession`  
**Description**: Retrieves all todos belonging to the authenticated user.  
**Response**:
- `200 OK`: `[ { todo object }, ... ]`
- `400 Bad Request`: `{ message: 'Error message' }`

---

### 4. Update Todo
**Endpoint**: `PUT /api/todos/:id`  
**Middleware**: `authenticateSession`  
**Description**: Updates an existing todo by its ID for the authenticated user.  
**Request Body**:
```json
{
  "name": "Updated name",
  "description": "Updated description",
  "done": true
}
```
**Response**:
- `200 OK`: `{ updatedTodo object }`
- `404 Not Found`: `{ message: 'Todo not found or user not authorized' }`
- `400 Bad Request`: `{ message: 'Error message' }`

---

### 5. Delete Todo
**Endpoint**: `DELETE /api/todos/:id`  
**Middleware**: `authenticateSession`  
**Description**: Deletes a todo by its ID for the authenticated user.  
**Response**:
- `200 OK`: `{ message: 'Todo deleted successfully' }`
- `404 Not Found`: `{ message: 'Todo not found or user not authorized' }`
- `400 Bad Request`: `{ message: 'Error message' }`

---

## Error Handling
Each endpoint provides descriptive error messages for:
- Missing or invalid inputs.
- Unauthorized access.
- Resource not found.

---

## Data Models

### User Model
| Field       | Type     | Description        |
|-------------|----------|--------------------|
| `email`     | String   | User's email.      |
| `firstName` | String   | User's first name. |
| `lastName`  | String   | User's last name.  |
| `password`  | String   | Hashed password.   |

### Todo Model
| Field         | Type     | Description                     |
|---------------|----------|---------------------------------|
| `name`        | String   | Name of the todo.              |
| `description` | String   | Details about the task.        |
| `done`        | Boolean  | Completion status of the todo. |
| `owner`       | ObjectId | Reference to the user.         |

---

## Dependencies
- **bcrypt**: Password hashing.
- **crypto**: Session ID generation.
- **mongoose**: MongoDB object modeling.
- **express**: API routing and middleware handling.

---

This documentation provides a comprehensive reference for implementing and using the Todo application backend.
