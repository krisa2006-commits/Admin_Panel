# Admin Panel Backend API

A backend REST API for managing admin details using **Node.js, Express.js, and MongoDB**.

## Project Overview

The Admin Panel Backend API allows admins to register, login, view, update, and delete admin details.

This project uses **JWT (JSON Web Token)** for authentication and authorization. It follows a simple **MVC (Model-View-Controller)** structure and uses MongoDB for storing admin data.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- JSON Web Token (JWT)
- CORS
- Dotenv
- Postman

## Features

- Admin Registration
- Admin Login
- Password Hashing using bcryptjs
- JWT Authentication
- Bearer Token Authorization
- Get All Admins
- Get a Single Admin by ID
- Update Admin Details
- Delete Admin
- MongoDB Database Integration
- REST API Structure
- Environment Variable Configuration

## Project Structure

```text
Admin_Panel/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── adminController.js
│   │
│   ├── models/
│   │   └── adminModel.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── adminRoutes.js
│   │
│   └── middleware/
│       └── authMiddleware.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## Admin Fields

Each admin contains the following fields:

- `name` - Admin name
- `email` - Admin email address
- `password` - Hashed password
- `role` - Admin role
- `status` - Admin account status

## API Endpoints

### Authentication APIs

| Method | Endpoint             | Description          |
| ------ | -------------------- | -------------------- |
| POST   | `/api/auth/register` | Register a new admin |
| POST   | `/api/auth/login`    | Login admin          |

### Admin CRUD APIs

| Method | Endpoint          | Description     |
| ------ | ----------------- | --------------- |
| GET    | `/api/admins`     | Get all admins  |
| GET    | `/api/admins/:id` | Get admin by ID |
| PUT    | `/api/admins/:id` | Update admin    |
| DELETE | `/api/admins/:id` | Delete admin    |

**Note:** Admin CRUD APIs require Bearer Token authentication.

## Run the Project

Start the server using:

```bash
npm run dev
```

The server will run on:

```text
http://localhost:5000
```

## API Testing

The APIs can be tested using **Postman**.

Example:

```text
POST http://localhost:5000/api/auth/register
```

Select:

```text
Body → raw → JSON
```

For protected APIs:

```text
Authorization → Bearer Token
```

Enter the JWT token received after successful login.

## Project Testing

The following APIs have been tested successfully using Postman:

- Admin Registration
- Admin Login
- Get All Admins
- Get Single Admin
- Update Admin
- Delete Admin

## Project Video

### Project Explanation Video

[Click here to watch the project explanation video](https://drive.google.com/file/d/18RT8oRS_Hs0VCtcXawQzsWEMtMAifQzP/view?usp=sharing)

## Author

**Name:** Krisa

**Project Name:** Admin Panel Backend API

**GitHub:** https://github.com/krisa2006-commits

---

Thank you for visiting my Admin Panel Backend API Project!
