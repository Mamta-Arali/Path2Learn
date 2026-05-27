# Path2Learn
The Path2Learn Donation Management System is a full-stack web application that simplifies donation management. Users can submit donations, while admins can monitor, approve, reject, and manage records efficiently. The project demonstrates frontend-backend integration, real-time data handling, and CRUD operations using modern web technologies.


📍 Problem Statement
Traditional donation systems often lack:
        Proper organization 📂
        Tracking mechanisms 🔍
        Administrative control ⚙️
This leads to inefficiency and lack of transparency.

💡 🚀 Proposed Solution
This system provides:
        🧑‍💻 User-friendly donation interface
        🗄️ Structured backend data management
        🛠️ Admin dashboard for full control

🛠️ ⚙️ Tech Stack
🎨 Frontend
HTML
CSS
JavaScript

🔧 Backend
Node.js
Express.js

🗃️ Database
MongoDB
Mongoose

📁 🧩 Project Structure
project/
│
├── backend/
│   ├── models/        # Database schemas
│   ├── routes/        # API routes
│   ├── config/        # DB connection
│   └── server.js      # Main server
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

✨ 🚀 Features
👤 User Module
          Submit donation details
          Input validation ✅
          Real-time form submission

🛠️ Admin Module
          View all donations 📊
          Approve / Reject donations ✔️❌
          Delete records 🗑️
          Admin login system 🔐

🌐 🔗 API Endpoints
📦 Donation Routes
POST   /api/donations           → Create donation  
GET    /api/donations           → Get all donations  
PUT    /api/donations/:id       → Update donation  
DELETE /api/donations/:id       → Delete donation  
🛠️ Admin Routes
GET    /api/admin/donations     → View all donations  
PUT    /api/admin/donations/:id → Approve/Reject  
DELETE /api/admin/donations/:id → Delete donation  
POST   /api/admin/login         → Admin login  

🗄️ 📊 Database Design
📌 Collections Used
         Users 👤
         Donations 💰
         Categories 🏷️

🔗 Relationships
         One User → Many Donations (1:N)
         One Category → Many Donations (1:N)

🧠 🛠️ Implementation Strategy
1️⃣ Frontend Development
         Designed UI using HTML & CSS 🎨
         Added interactivity using JavaScript ⚡
         Integrated APIs using fetch()

2️⃣ Backend Development
         Built REST APIs using Express.js 🔧
         Organized routes and logic
         Used Mongoose for schema definition

3️⃣ Database Integration
         Connected MongoDB using Mongoose 🔗
         Stored structured data
         Applied schema validations

4️⃣ Admin Module
         Developed admin dashboard 📊
         Implemented approve/reject logic
         Connected backend APIs

5️⃣ Integration
         Connected frontend & backend via API calls 🔄
         Updated UI dynamically

🔄 ⚡ Working Flow
         User submits donation form 📝
         Data sent to backend via API 🌐
         Backend processes and stores in MongoDB 🗄️
         Admin dashboard fetches data 📊
         Admin approves/rejects/deletes donations ✔️❌
         UI updates in real-time 🔄

✅ 🧪 Validations
         Required fields check ✔️
         Email format validation 📧
         Positive amount validation 💰
         Backend schema validation

⚠️ 🧩 Challenges Faced
         API routing errors (404 issues)
         MongoDB connection problems
         Frontend-backend integration bugs
         Data not reflecting in admin panel

🔮 🚀 Future Enhancements
        JWT Authentication 🔐
        Role-based access control 👥
        Payment gateway integration 💳
        Dashboard analytics 📈

🏁 📌 Conclusion
        This project successfully demonstrates a full-stack web application with:
        Proper API design
        Database integration
        Admin-controlled system
        It provides a scalable and efficient solution for donation management.

▶️ ⚙️ How to Run the Project
# Backend
cd backend
npm install
node server.js

# Frontend
Open index.html in browser

 👩‍💻 Authors
Anushka Mulik
Tuba Pathan
Mamta Arali



