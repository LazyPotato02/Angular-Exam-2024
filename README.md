
# Todo Application

## Overview
This is a full-stack Todo application designed for managing daily tasks. The application supports user authentication and CRUD operations for Todos, with a focus on simplicity and responsiveness.

---
## Live demo: http://homeserver1122.tplinkdns.com:4200/

## Features
### General
- User authentication (Login, Registration, Logout).
- CRUD operations for Todos (Create, Read, Update, Delete).
- Guarded routes to ensure proper access control.
- Informational pages (e.g., About, Benefits).
- Error handling and friendly user notifications.

### Backend
- Built with **Node.js** and **Express.js**.
- Uses **MongoDB** for data storage.
- Implements session-based authentication.
- APIs for user and Todo management.

### Frontend
- Built with **Angular**.
- Responsive and interactive UI.
- Route guards for secure navigation.
- Organized structure for easy scalability.

---

## Tech Stack
### Backend
- **Node.js** with **Express.js**.
- **MongoDB** with **Mongoose** for ORM.
- **bcrypt** for password hashing.
- **crypto** for session ID generation.

### Frontend
- **Angular** for the UI framework.
- **RxJS** for reactive programming.
- **ngx-cookie-service** for cookie management.

---

## Project Structure
### Backend
```
backend/
├── controllers/
├── models/
├── routes/
├── middlewares/
└── server.js
```

### Frontend
```
frontend/
├── app/
│   ├── features/
│   ├── core/
│   ├── shared/
│   ├── home/
│   ├── about/
│   ├── benefits/
│   └── not-found/
└── app.routes.ts
```

---

## Installation
### Prerequisites
- Node.js
- MongoDB
- Angular CLI



# Project Setup Guide

## Steps to Run the Project

### Option 1: Run Using Docker

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Build and Start the Docker Containers**:
   ```bash
   docker-compose up --build -d
   ```

3. **Access the Application**:
   - **Frontend**: [http://localhost:4200](http://localhost:4200)
   - **Backend**: [http://localhost:8000](http://localhost:8000)
   - **MongoDB**: `mongodb://localhost:27017`

4. **Stop the Containers When Done**:
   ```bash
   docker-compose down
   ```

---

### Option 2: Run Without Docker

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Start the Backend**:
   - Navigate to the backend folder:
     ```bash
     cd backend
     ```

   - Change the db ip adress in index.js to your db ip adress

   - Install dependencies and start the server:
     ```bash
     npm install
     npm start
     ```
  
3. **Start the Frontend**:
   - Open a new terminal and navigate to the frontend folder:
     ```bash
     cd frontend
     ```
   - Install dependencies and start the application:
     ```bash
     npm install
     ng serve
     ```

4. **Set Up MongoDB**:
   - Ensure MongoDB is installed and running on your local machine.
   - Default connection URL: `mongodb://localhost:27017`

5. **Access the Application**:
   - **Frontend**: [http://localhost:4200](http://localhost:4200)
   - **Backend**: [http://localhost:8000](http://localhost:8000)

---

## API Endpoints
### User Routes
- **POST /api/users/login**: User login.
- **POST /api/users/register**: User registration.
- **POST /api/users/logout**: User logout.
- **PUT /api/users/update**: Update user profile.
- **DELETE /api/users/delete**: Delete user account.

### Todo Routes
- **POST /api/todos**: Create a new Todo.
- **GET /api/todos**: Get all Todos for the user.
- **GET /api/todos/:id**: Get a specific Todo.
- **PUT /api/todos/:id**: Update a Todo.
- **DELETE /api/todos/:id**: Delete a Todo.

---

## Contributions
Contributions are welcome! Feel free to submit a pull request or open an issue for suggestions or bug reports.

---

