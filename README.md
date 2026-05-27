# Path2Learn
The Path2Learn Donation Management System is a full-stack web application that simplifies donation management. Users can submit donations, while admins can monitor, approve, reject, and manage records efficiently. The project demonstrates frontend-backend integration, real-time data handling, and CRUD operations using modern web technologies.


🟦 Project Title
Path2Learn – Donation Management System
🟦 Project Description
The Path2Learn Donation Management System is a full-stack web application designed to streamline and manage donation processes efficiently. The system allows users to submit donations, while providing an admin interface to monitor, approve, reject, and manage all donation records.

This project demonstrates the implementation of a complete frontend-backend architecture with real-time data handling and CRUD operations using modern web technologies.

🟦 Problem Statement
Traditional donation systems often lack proper organization, tracking, and administrative control. This results in inefficiency, lack of transparency, and difficulty in managing records.

🟦 Proposed Solution
This system provides:

A user-friendly interface for submitting donations

A structured backend to store and manage data

An admin dashboard for controlling and verifying donations

🟦 Tech Stack
🔹 Frontend
HTML

CSS

JavaScript

🔹 Backend
Node.js

Express.js

🔹 Database
MongoDB

Mongoose

🟦 Project Structure
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
🟦 Features
👤 User Module
Submit donation details

Input validation

Real-time form submission

🛠️ Admin Module
View all donations

Approve / Reject donations

Delete donation records

Admin login system

🟦 API Endpoints
🔹 Donation Routes
POST   /api/donations           → Create donation
GET    /api/donations           → Get all donations
PUT    /api/donations/:id       → Update donation
DELETE /api/donations/:id       → Delete donation
🔹 Admin Routes
GET    /api/admin/donations     → View all donations
PUT    /api/admin/donations/:id → Approve/Reject
DELETE /api/admin/donations/:id → Delete donation
POST   /api/admin/login         → Admin login
🟦 Database Design
Collections Used:
Users

Donations

Categories

Relationships:
One User → Many Donations

One Category → Many Donations

🟦 Implementation Strategy
Frontend Development

Designed UI using HTML & CSS

Added interactivity using JavaScript

Integrated forms with backend using fetch()

Backend Development

Created REST APIs using Express.js

Structured routes and controllers

Used Mongoose for schema definition

Database Integration

Connected MongoDB using Mongoose

Stored donation data in collections

Ensured proper schema validation

Admin Module Implementation

Developed admin dashboard UI

Implemented approval/rejection logic

Connected admin APIs to frontend

Frontend-Backend Integration

Used fetch API for communication

Handled JSON responses

Updated UI dynamically

🟦 Working Flow
User fills donation form

Data sent to backend via API

Backend processes and stores data in MongoDB

Admin dashboard fetches all donations

Admin performs actions (approve/reject/delete)

UI updates in real-time

🟦 Validations Implemented
Required field validation

Email format validation

Positive donation amount

Backend schema validation

🟦 Challenges Faced
API routing errors (404 issues)

MongoDB connection errors

Frontend-backend integration issues

Data not reflecting in admin panel

🟦 Future Enhancements
JWT-based authentication

Role-based access control

Payment gateway integration

Dashboard analytics

🟦 Conclusion
This project successfully demonstrates a full-stack web application with proper separation of concerns, API design, database integration, and an admin-controlled system. It provides a scalable and efficient solution for managing donations.

🟦 How to Run the Project
# Backend
cd backend
npm install
node server.js

# Frontend
Open index.html in browser
🟦 Author
Mamta Arali
Anushka Mulik
Tuba Pathan
