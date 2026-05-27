# 📌 Path2Learn Donation Management System

## 🟦 Problem Statement

Traditional donation systems often lack proper organization, tracking, and administrative control. This leads to inefficiency, lack of transparency, and difficulty in managing donation records effectively.

---

# 💡 Proposed Solution

The **Path2Learn Donation Management System** is a full-stack web application designed to streamline and manage the donation process efficiently.

### ✅ The system provides:

* A user-friendly interface for submitting donations
* A structured backend for storing and managing data
* An admin dashboard for monitoring and verifying donations
* Real-time interaction between frontend and backend

---

# 🛠️ Tech Stack

## 🎨 Frontend

* HTML
* CSS
* JavaScript

## ⚙️ Backend

* Node.js
* Express.js

## 🗄️ Database

* MongoDB
* Mongoose

---

# 📂 Project Structure

```bash
project/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── index.html
│   ├── admin.html
│   ├── adminLogin.html
│   ├── script.js
│   ├── admin.js
│   ├── adminLogin.js
│   ├── style.css
│   └── admin.css
```

---

# ✨ Features

## 👤 User Module

* Submit donation details
* Input validation
* Real-time form submission
* User-friendly donation form

## 🛡️ Admin Module

* View all donations
* Approve or reject donations
* Delete donation records
* Secure admin login system

---

# 🔗 API Endpoints

## 📌 Donation Routes

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/api/donations`     | Create donation   |
| GET    | `/api/donations`     | Get all donations |
| PUT    | `/api/donations/:id` | Update donation   |
| DELETE | `/api/donations/:id` | Delete donation   |

---

## 📌 Admin Routes

| Method | Endpoint                   | Description             |
| ------ | -------------------------- | ----------------------- |
| GET    | `/api/admin/donations`     | View all donations      |
| PUT    | `/api/admin/donations/:id` | Approve/Reject donation |
| DELETE | `/api/admin/donations/:id` | Delete donation         |
| POST   | `/api/admin/login`         | Admin login             |

---

# 🗃️ Database Design

## 📚 Collections Used

* Users
* Donations
* Categories

## 🔄 Relationships

* One User → Many Donations
* One Category → Many Donations

---

# 🚀 Implementation Strategy

## 🎨 Frontend Development

* Designed responsive UI using HTML & CSS
* Added interactivity using JavaScript
* Connected forms with backend using `fetch()`

## ⚙️ Backend Development

* Created REST APIs using Express.js
* Structured routes and controllers properly
* Used Mongoose for schema creation

## 🗄️ Database Integration

* Connected MongoDB using Mongoose
* Stored donation records in collections
* Applied schema-level validation

## 🛡️ Admin Module

* Developed admin dashboard interface
* Implemented approve/reject functionality
* Connected admin APIs with frontend

## 🔄 Frontend-Backend Integration

* Used Fetch API for communication
* Handled JSON responses dynamically
* Updated UI in real-time

---

# 🔁 Working Flow

1️⃣ User fills the donation form
2️⃣ Data is sent to backend through API
3️⃣ Backend processes and stores data in MongoDB
4️⃣ Admin dashboard fetches all donations
5️⃣ Admin approves, rejects, or deletes donations
6️⃣ UI updates dynamically in real-time

---

# ✅ Validations Implemented

* Required field validation
* Email format validation
* Positive donation amount validation
* Backend schema validation

---

# ⚠️ Challenges Faced

* API routing errors (404 issues)
* MongoDB connection issues
* Frontend-backend integration problems
* Data not reflecting in admin panel

---

# 🔮 Future Enhancements

* JWT-based authentication
* Role-based access control
* Payment gateway integration
* Dashboard analytics and reports

---

# 🎯 Conclusion

This project successfully demonstrates a complete full-stack web application with:

* Proper frontend-backend integration
* REST API implementation
* Database management using MongoDB
* Admin-controlled donation handling system

The system provides a scalable, efficient, and organized solution for donation management.

---

# ▶️ How to Run the Project

## ⚙️ Backend Setup

```bash
cd backend
npm install
node server.js
```

## 🌐 Frontend Setup

Open `index.html` in your browser.

---

# 👩‍💻 Authors

* Tuba Pathan
* Anushka Mulik
* Mamta Arali
