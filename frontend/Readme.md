
---

## Routes Configuration

Routes are defined in the `app.routes.ts` file.

### Routes List

| Path                  | Component                | Purpose                                             | Guard                |
|-----------------------|--------------------------|-----------------------------------------------------|----------------------|
| `/`                   | `HomeComponent`         | Displays the home page.                             | None                 |
| `/login`              | `LoginComponent`        | Login page for user authentication.                | `NotAuthGuard`       |
| `/register`           | `RegisterComponent`     | Registration page for new users.                   | `NotAuthGuard`       |
| `/logout`             | `LogoutComponent`       | Logs out the current user.                         | `AuthGuard`          |
| `/about`              | `AboutComponent`        | Displays information about the application.        | None                 |
| `/benefits`           | `BenefitsComponent`     | Displays benefits of using the application.        | None                 |
| `/todos/create`       | `CreateTodoComponent`   | Page to create a new Todo.                         | `AuthGuard`          |
| `/todos/edit/:id`     | `EditTodoComponent`     | Page to edit an existing Todo.                     | `AuthGuard`          |
| `/todos/delete`       | `DeleteTodoComponent`   | Page to delete a Todo.                             | `AuthGuard`          |
| `**`                  | `NotFoundComponent`     | Displays a 404 not found page.                     | None                 |

---

## Components

### **Home Component**
**Path**: `app/home/`  
**Purpose**: Displays the landing page of the application.  
**Features**:
- Welcomes users.
- Provides navigation links to other pages.

---

### **Auth Components**
#### **Login Component**
**Path**: `app/features/auth/components/login/`  
**Purpose**: Allows users to log in to the application.  
**Features**:
- Validates credentials.
- Redirects to the home page upon successful login.

#### **Register Component**
**Path**: `app/features/auth/components/register/`  
**Purpose**: Allows users to register for a new account.  
**Features**:
- Collects user details (e.g., email, password).
- Automatically logs the user in after successful registration.

#### **Logout Component**
**Path**: `app/features/auth/components/logout/`  
**Purpose**: Logs out the user.  
**Features**:
- Clears the user's session.

---

### **Todo Components**
#### **Create Todo Component**
**Path**: `app/features/todo/create/`  
**Purpose**: Provides a form for creating new Todos.  
**Features**:
- Collects task name, description, and status.

#### **Edit Todo Component**
**Path**: `app/features/todo/edit/`  
**Purpose**: Allows editing of an existing Todo.  
**Features**:
- Fetches Todo details by ID.
- Updates the Todo.

#### **Delete Todo Component**
**Path**: `app/features/todo/delete/`  
**Purpose**: Allows users to delete a Todo.  
**Features**:
- Confirms deletion of the task.

---

### **About Component**
**Path**: `app/about/`  
**Purpose**: Displays information about the application.

---

### **Benefits Component**
**Path**: `app/benefits/`  
**Purpose**: Highlights the benefits of using the application.

---

### **Not Found Component**
**Path**: `app/not-found/`  
**Purpose**: Displays a 404 error message for undefined routes.

---

## Guards

### **Auth Guard**
**Path**: `app/core/services/guards/auth-guard/`  
**Purpose**: Ensures only authenticated users can access certain routes (e.g., Todo management).

### **Not Auth Guard**
**Path**: `app/core/services/guards/not-auth-guard/`  
**Purpose**: Prevents logged-in users from accessing routes like login or registration.

---

## Services

### **Todo Service**
**Purpose**: Handles all Todo-related API calls.  
**Methods**:
- `createTodo(data: object): Observable<object>`: Creates a new Todo.
- `editTodo(id: string, data: object): Observable<object>`: Edits an existing Todo.
- `deleteTodo(id: string): Observable<void>`: Deletes a Todo.

---

This documentation provides a complete guide to the structure, components, and routes of the front-end for the Todo application. Update it as the application evolves.
