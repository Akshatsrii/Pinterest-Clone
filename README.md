📌 Pinterest Backend Clone (Node.js + Express)
A backend-focused Pinterest clone built with Node.js, Express, MongoDB, and Passport.js, designed to demonstrate clean backend architecture, authentication workflows, and scalable project structure.
Frontend is intentionally kept minimal — the primary goal is robust backend engineering.

🚀 Project Overview
This project replicates the core backend functionality of Pinterest, including:
User authentication
Session management
Secure password handling
MVC-style architecture
Modular routing
Database-driven user management
The project is ideal for showcasing backend development skills rather than UI design.

🧠 Key Backend Features
🔐 User Authentication
Registration & login using passport-local-mongoose
Secure password hashing (handled internally)
Session-based authentication
🗂 Clean Project Structure
Separation of concerns (routes, models, views)
Scalable folder hierarchy
Express Generator–style setup
🛡 Session Management
express-session integration
Persistent login sessions
🗄 MongoDB Integration
Mongoose ODM
Schema-based data modeling
Local MongoDB setup

🧩 Modular Routing
Centralized routing logic
Clean API-style routes

🏗 Project Structure
PINTEREST2/
│
├── bin/
│   └── www              
│
├── public/
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
│       └── style.css
│
├── routes/
│   ├── index.js           # Main routes
│   └── users.js           # User-related routes
│
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── index.ejs
│   ├── register.ejs
│   └── error.ejs
│
├── users.js               # User model (MongoDB)
├── app.js                 # Express app configuration
├── package.json
└── package-lock.json

🛠 Tech Stack
Technology	Usage
Node.js	Runtime environment
Express.js	Backend framework
MongoDB	Database
Mongoose	ODM
Passport.js	Authentication
passport-local-mongoose	Simplified auth logic
EJS	Minimal templating
Express Session	Session handling

🔐 Authentication Flow
User registers with username & password
Password is automatically hashed & salted
Login verifies credentials using Passport
Session is created and stored
User stays authenticated across requests
✔ No manual password hashing
✔ Secure and production-ready logic


🎯 Why This Project?
This project is built to demonstrate:
Backend system design
Authentication & session handling
Real-world Express project structure
MongoDB + Passport integration
Clean and maintainable codebase
It’s not a UI-heavy clone, but a backend engineering showcase.

🔮 Future Enhancements
📌 Pin creation & storage
🖼 Image uploads with Cloudinary
❤️ Likes & saves
👤 User profiles
🔄 REST API conversion
🔐 JWT-based authentication
