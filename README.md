# 🧠 Job Portal Backend System

A robust and scalable backend system for a Job Portal web app, built with **Node.js**, **Express**, **MongoDB**, and **Socket.IO**. This project supports user authentication, role-based access, resume uploads, job postings, and real-time communication.

---

## 🚀 Features

- 👤 User registration and login (candidate/employer)
- 🔐 JWT-based authentication
- 🧑‍💼 Role-based access control (admin, employer, candidate)
- 📄 Resume upload with Multer
- 📋 Job posting and retrieval
- 💬 Real-time notifications using Socket.IO
- 🌐 REST API ready for frontend (Streamlit / HTML-CSS-JS)

---

## 📁 Project Structure

job-portal-backend/
│
├── config/ # Environment config
├── controllers/ # Logic (if separated)
├── middlewares/ # Auth and access control
├── models/ # Mongoose schemas
├── routes/ # All API routes
├── sockets/ # Socket.IO logic
├── uploads/ # Uploaded resumes
├── .env # Environment variables
├── app.js # Express setup
├── server.js # Entry point
└── package.json

markdown
Copy
Edit

---

## ⚙️ Tech Stack

- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **JWT** for authentication
- **Multer** for file upload
- **Socket.IO** for real-time communication
- **dotenv**, **bcryptjs**, **cors**

---

## 🧪 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint              | Description                          |
|--------|-----------------------|--------------------------------------|
| POST   | `/api/auth/register`  | Register user with role and resume   |
| POST   | `/api/auth/login`     | Login user and receive JWT           |

> 📌 **Register (form-data):**

name: John Doe
email: john@example.com
password: 123456
role: candidate/employer
resume: (file upload)

yaml
Copy
Edit

---

### 📋 Job Routes

| Method | Endpoint       | Description                      |
|--------|----------------|----------------------------------|
| POST   | `/api/jobs`    | Post job (employers only)        |
| GET    | `/api/jobs`    | Get all jobs (public)            |

> 🔐 **Note**: Protected routes require a **Bearer token** in the `Authorization` header.

---

## 📡 Real-time Events (Socket.IO)

| Event Name        | Payload          | Description                          |
|------------------|------------------|--------------------------------------|
| `job_applied`     | `{ jobId }`      | Emit when a candidate applies        |
| `notify_employer` | `{ jobId }`      | Employers get real-time notification |

---

## 🖥️ Getting Started

### ✅ Prerequisites

- Node.js and npm
- MongoDB (local or cloud e.g., MongoDB Atlas)
- Thunder Client / Postman for testing

### ⚙️ Setup Steps

1. **Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/job-portal-backend.git
cd job-portal-backend
Install dependencies

bash
Copy
Edit
npm install
Create a .env file

ini
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/jobportal
JWT_SECRET=your_jwt_secret
Run the server

bash
Copy
Edit
npm start
✅ Test the APIs with Thunder Client / Postman
1. Register
Method: POST

URL: http://localhost:5000/api/auth/register

Body: form-data

name: John

email: john@example.com

password: 123456

role: candidate

resume: (attach a .pdf file)

2. Login
Method: POST

URL: http://localhost:5000/api/auth/login

Body: raw JSON:

json
Copy
Edit
{
  "email": "john@example.com",
  "password": "123456"
}
3. Post a Job (as employer)
Method: POST

URL: http://localhost:5000/api/jobs

Headers:

Authorization: Bearer <your-token-here>

Body:

json
Copy
Edit
{
  "title": "Frontend Developer",
  "description": "Looking for a React developer",
  "company": "Tech Corp"
}
4. Get All Jobs
Method: GET

URL: http://localhost:5000/api/jobs

