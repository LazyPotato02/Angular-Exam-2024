
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


# Steps to Run Todo Application with Docker

## Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Build and start the Docker containers:
   ```bash
   docker-compose up --build -d
   ```

3. Access the application in your browser:
   - Frontend: [http://localhost:4200](http://localhost:4200)
   - Backend: [http://localhost:3000](http://localhost:3000)
   - MongoDB: `mongodb://localhost:27017`

4. Stop the containers when done:
   ```bash
   docker-compose down
   ```

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

