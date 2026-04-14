# 🚀 CRUD API Service

A simple REST API built using Node.js and Express to perform basic CRUD (Create, Read, Update, Delete) operations on user data.

This API is designed for testing, learning, and frontend integration purposes.

---

## 📌 Features

- Get all users
- Create a new user
- Update existing user
- Delete user
- Simple JSON-based data storage

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- JSON (File-based storage)

---

## 🌐 Base URL
https://crud-api-kk1s.onrender.com/users
---

## 📚 API Endpoints

### 🔹 Get All Users

**Response:**
```json
[
  {
    "id": 1,
    "name": "John",
    "email": "john@example.com"
  }
]

### 🔹 POST /users
{
  "name": "John",
  "email": "john@example.com"
}

### 🔹 PATCH /users/:id
{
  "name": "Updated Name"
}

### 🔹 DELETE /users/:id

# Run Local
npm install
node server.js

http://localhost:3000