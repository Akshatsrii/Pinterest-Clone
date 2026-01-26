# 📌 Pinterest Backend Clone — Professional Node.js + Express API

<div align="center">

![Pinterest Backend](https://img.shields.io/badge/Pinterest-Backend_Clone-E60023?style=for-the-badge&logo=pinterest&logoColor=white)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Passport](https://img.shields.io/badge/Passport-34E27A?style=for-the-badge&logo=passport&logoColor=white)](http://www.passportjs.org/)

### 🎯 *A backend-focused Pinterest clone demonstrating clean architecture, authentication workflows, and scalable design*


---

</div>

## 🚀 Project Overview

**Pinterest Backend Clone** is a production-ready backend system built with **Node.js**, **Express**, **MongoDB**, and **Passport.js**. This project emphasizes **robust backend engineering** over UI design, showcasing:

- 🔐 **Secure Authentication** workflows
- 🏛️ **MVC Architecture** patterns
- 🗄️ **Database-Driven** user management
- 📦 **Modular & Scalable** structure
- 🛡️ **Session Management** best practices

> 💡 **Focus Area:** Backend engineering, clean architecture, and authentication systems — not frontend design!

---

## ✨ Core Capabilities

<table>
<tr>
<td align="center" width="25%">
<img src="https://img.icons8.com/fluency/96/000000/lock.png" width="60"/>
<br><b>Authentication</b>
<br><sub>Passport.js powered</sub>
</td>
<td align="center" width="25%">
<img src="https://img.icons8.com/fluency/96/000000/database.png" width="60"/>
<br><b>MongoDB</b>
<br><sub>Schema-based models</sub>
</td>
<td align="center" width="25%">
<img src="https://img.icons8.com/fluency/96/000000/security-checked.png" width="60"/>
<br><b>Sessions</b>
<br><sub>Persistent login</sub>
</td>
<td align="center" width="25%">
<img src="https://img.icons8.com/fluency/96/000000/module.png" width="60"/>
<br><b>Modular</b>
<br><sub>Clean architecture</sub>
</td>
</tr>
</table>

---

## 🧠 Key Backend Features

<div align="center">

### 🎨 Built for Scalability & Security

</div>

### 🔐 **User Authentication**

| Feature | Technology | Status |
|---------|-----------|--------|
| 📝 **Registration** | passport-local-mongoose | ✅ Implemented |
| 🔑 **Login System** | Passport.js Strategy | ✅ Implemented |
| 🔒 **Password Security** | Auto-hashing & salting | ✅ Implemented |
| 🎫 **Session Auth** | express-session | ✅ Implemented |
| 🚪 **Logout** | Session destruction | ✅ Implemented |

```javascript
// Automatic password hashing - No manual crypto needed!
const User = require('./models/user');
User.register(new User({ username }), password);
```

---

### 🗂 **Clean Project Structure**

```
✅ Separation of concerns (MVC pattern)
✅ Scalable folder hierarchy
✅ Express Generator–style setup
✅ Maintainable & readable codebase
✅ Industry-standard organization
```

---

### 🛡 **Session Management**

<div align="center">

![Session](https://img.shields.io/badge/Session-Management-FF6B6B?style=for-the-badge&logo=redis&logoColor=white)

</div>

- ✅ **express-session** integration
- ✅ Persistent login across requests
- ✅ Secure session storage
- ✅ Configurable session timeout
- ✅ Cookie-based authentication

---

### 🗄 **MongoDB Integration**

<table>
<tr>
<td width="50%">

#### 🎯 **Features**
- 📊 Mongoose ODM
- 📝 Schema-based modeling
- 🔍 Query optimization
- 🔗 Relationships & refs
- ⚡ Fast data access

</td>
<td width="50%">

#### 📦 **Data Models**
```javascript
// User Schema Example
{
  username: String,
  email: String,
  createdAt: Date,
  posts: [PostSchema]
}
```

</td>
</tr>
</table>

---

### 🧩 **Modular Routing**

```javascript
// Clean, organized route structure
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/posts', postsRouter);
app.use('/api/auth', authRouter);
```

**Benefits:**
- 🎯 Centralized routing logic
- 🔄 Easy to extend
- 📦 Reusable middleware
- 🧪 Easy to test
- 📚 Self-documenting API

---

## 🏗 Project Structure

<div align="center">

### 📂 Organized & Scalable Architecture

</div>

```
📦 PINTEREST-BACKEND-CLONE/
│
├── 📁 bin/
│   └── 🚀 www                    # Server startup script
│
├── 📁 public/
│   ├── 📁 images/                # Static image assets
│   ├── 📁 javascripts/           # Client-side JS
│   └── 📁 stylesheets/
│       └── 🎨 style.css          # Minimal styling
│
├── 📁 routes/
│   ├── 🛣️ index.js               # Main application routes
│   ├── 👤 users.js               # User-related routes
│   ├── 📌 posts.js               # Post management routes
│   └── 🔐 auth.js                # Authentication routes
│
├── 📁 models/
│   ├── 👤 user.js                # User model (Mongoose)
│   ├── 📌 post.js                # Post model
│   └── 💬 comment.js             # Comment model
│
├── 📁 views/
│   ├── 📁 partials/
│   │   ├── 📄 header.ejs
│   │   └── 📄 footer.ejs
│   ├── 🏠 index.ejs              # Home page
│   ├── 📝 register.ejs           # Registration page
│   ├── 🔑 login.ejs              # Login page
│   └── ❌ error.ejs              # Error page
│
├── 📁 middleware/
│   ├── 🔐 auth.js                # Authentication middleware
│   └── ⚠️ errorHandler.js        # Error handling
│
├── 📁 config/
│   ├── ⚙️ database.js            # MongoDB configuration
│   └── 🔑 passport.js            # Passport configuration
│
├── ⚙️ app.js                     # Express app configuration
├── 📦 package.json               # Dependencies & scripts
├── 🔒 .env                       # Environment variables
└── 📖 README.md                  # This file!
```

---

## 🛠 Tech Stack

<div align="center">

### 🚀 Modern Backend Technologies

</div>

<table>
<tr>
<td align="center" width="20%">
<img src="https://img.icons8.com/fluency/96/000000/node-js.png" width="60"/>
<br><b>Node.js</b>
<br><sub>v18+ Runtime</sub>
</td>
<td align="center" width="20%">
<img src="https://img.icons8.com/fluency/96/000000/express-js.png" width="60"/>
<br><b>Express.js</b>
<br><sub>v4.x Framework</sub>
</td>
<td align="center" width="20%">
<img src="https://img.icons8.com/color/96/000000/mongodb.png" width="60"/>
<br><b>MongoDB</b>
<br><sub>NoSQL Database</sub>
</td>
<td align="center" width="20%">
<img src="https://img.icons8.com/fluency/96/000000/passport.png" width="60"/>
<br><b>Passport.js</b>
<br><sub>Authentication</sub>
</td>
<td align="center" width="20%">
<img src="https://img.icons8.com/fluency/96/000000/template.png" width="60"/>
<br><b>EJS</b>
<br><sub>Templating</sub>
</td>
</tr>
</table>

### 📚 **Detailed Stack**

| Technology | Purpose | Version |
|-----------|---------|---------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) | Runtime environment | v18+ |
| ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white) | Backend framework | v4.18+ |
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) | NoSQL database | v6+ |
| ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat&logo=mongoose&logoColor=white) | ODM for MongoDB | v7+ |
| ![Passport](https://img.shields.io/badge/Passport-34E27A?style=flat&logo=passport&logoColor=white) | Authentication middleware | v0.6+ |
| ![EJS](https://img.shields.io/badge/EJS-B4CA65?style=flat&logo=ejs&logoColor=black) | View templating | v3+ |
| ![Express Session](https://img.shields.io/badge/Express_Session-000000?style=flat&logo=express&logoColor=white) | Session management | v1.17+ |

---

## 🔐 Authentication Flow

<div align="center">

### 🔒 Secure & Production-Ready

</div>

```mermaid
sequenceDiagram
    participant User
    participant Client
    participant Express
    participant Passport
    participant MongoDB
    
    User->>Client: Enter credentials
    Client->>Express: POST /register or /login
    Express->>Passport: Authenticate request
    Passport->>MongoDB: Query/Create user
    MongoDB-->>Passport: User data
    Passport-->>Express: Authentication result
    Express->>Express: Create session
    Express-->>Client: Set session cookie
    Client-->>User: Authenticated access
    
    Note over User,MongoDB: All passwords auto-hashed!
```

### 🔄 **Step-by-Step Process**

1. 📝 **User Registration**
   - User submits username & password
   - Password is **automatically hashed & salted** (no manual crypto!)
   - User document created in MongoDB
   - Success response sent

2. 🔑 **User Login**
   - User submits credentials
   - Passport verifies using local strategy
   - Password comparison (hashed)
   - Session created on success

3. 🎫 **Session Management**
   - Session ID stored in cookie
   - User stays authenticated across requests
   - Session persists until logout/expiry

4. 🚪 **Logout**
   - Session destroyed
   - Cookie cleared
   - User redirected

---

## 🔑 Key Security Features

<table>
<tr>
<td width="50%">

### 🛡️ **Built-In Security**
- ✅ Automatic password hashing
- ✅ Salt generation per user
- ✅ Secure session storage
- ✅ CSRF protection ready
- ✅ XSS prevention
- ✅ SQL injection proof (NoSQL)

</td>
<td width="50%">

### 🔐 **Best Practices**
```javascript
// Secure configuration example
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true, // HTTPS only
    httpOnly: true, // No JS access
    maxAge: 1000 * 60 * 60 * 24 // 1 day
  }
}));
```

</td>
</tr>
</table>

---

## 🚀 Quick Start

<div align="center">

### ⚡ Get Started in 5 Minutes

</div>

### 1️⃣ **Clone Repository**

```bash
git clone https://github.com/yourusername/pinterest-backend-clone.git
cd pinterest-backend-clone
```

### 2️⃣ **Install Dependencies**

```bash
npm install
```

### 3️⃣ **Setup Environment Variables**

Create a `.env` file in the root directory:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/pinterest_clone
# or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pinterest

# Session Secret (use a strong random string)
SESSION_SECRET=your_super_secret_key_here_make_it_long_and_random

# Port
PORT=3000

# Environment
NODE_ENV=development
```

### 4️⃣ **Start MongoDB**

```bash
# If using local MongoDB
mongod

# If using MongoDB Atlas, skip this step
```

### 5️⃣ **Run the Application**

```bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
```

### 6️⃣ **Access the Application**

```
🌐 Open your browser: http://localhost:3000
```

---

## 📋 Available Scripts

```bash
# Start server (production)
npm start

# Development mode with nodemon
npm run dev

# Run tests
npm test

# Check for security vulnerabilities
npm audit

# Fix security issues
npm audit fix
```

---

## 🎯 Why This Project?

<div align="center">

### 💼 Perfect for Showcasing Backend Skills

</div>

<table>
<tr>
<td align="center" width="25%">
<img src="https://img.icons8.com/fluency/96/000000/code.png" width="60"/>
<br><b>Clean Code</b>
<br><sub>Industry standards</sub>
</td>
<td align="center" width="25%">
<img src="https://img.icons8.com/fluency/96/000000/architecture.png" width="60"/>
<br><b>MVC Pattern</b>
<br><sub>Scalable design</sub>
</td>
<td align="center" width="25%">
<img src="https://img.icons8.com/fluency/96/000000/security-lock.png" width="60"/>
<br><b>Security</b>
<br><sub>Best practices</sub>
</td>
<td align="center" width="25%">
<img src="https://img.icons8.com/fluency/96/000000/graph.png" width="60"/>
<br><b>Scalability</b>
<br><sub>Production-ready</sub>
</td>
</tr>
</table>

### 🎓 **What This Project Demonstrates**

✅ **Backend System Design** — Clean MVC architecture  
✅ **Authentication & Security** — Passport.js integration  
✅ **Database Management** — MongoDB with Mongoose ODM  
✅ **Session Handling** — Persistent user sessions  
✅ **Code Organization** — Scalable folder structure  
✅ **Best Practices** — Industry-standard patterns  
✅ **Production Readiness** — Deployment-ready code

> 💡 This is **not a UI-heavy clone**, but a **backend engineering showcase** demonstrating real-world server-side development skills!

---

## 🔮 Future Enhancements

<div align="center">

### 🚀 Roadmap for Next Features

</div>

| Feature | Description | Priority | Status |
|---------|-------------|----------|--------|
| 📌 **Pin Creation** | Full CRUD for pins | 🔴 High | 📋 Planned |
| 🖼️ **Image Uploads** | Cloudinary integration | 🔴 High | 📋 Planned |
| ❤️ **Likes & Saves** | User interactions | 🟡 Medium | 📋 Planned |
| 👤 **User Profiles** | Profile pages & settings | 🟡 Medium | 📋 Planned |
| 🔍 **Search Functionality** | Find pins & users | 🟡 Medium | 📋 Planned |
| 🔄 **REST API Conversion** | Full API endpoints | 🔴 High | 📋 Planned |
| 🔐 **JWT Authentication** | Token-based auth | 🟢 Low | 📋 Planned |
| 📱 **Real-time Updates** | Socket.io integration | 🟢 Low | 💭 Future |
| 📧 **Email Verification** | Nodemailer integration | 🟡 Medium | 💭 Future |
| 🌐 **API Rate Limiting** | Prevent abuse | 🟡 Medium | 💭 Future |

### 🎯 **Upcoming Features Details**

<table>
<tr>
<td width="50%">

#### 📌 **Pin Management System**
```javascript
// Planned Routes
POST   /api/pins/create
GET    /api/pins/:id
PUT    /api/pins/:id/update
DELETE /api/pins/:id/delete
GET    /api/pins/user/:userId
```

</td>
<td width="50%">

#### 🖼️ **Image Upload Flow**
```javascript
// Cloudinary Integration
- Image upload to Cloudinary
- Automatic optimization
- CDN delivery
- Thumbnail generation
- Secure URLs
```

</td>
</tr>
</table>

---

## 📚 API Documentation

<div align="center">

### 🔌 Available Endpoints

</div>

### 🔐 **Authentication Endpoints**

```http
POST /register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securePass123"
}

Response: 201 Created
{
  "success": true,
  "message": "User registered successfully",
  "userId": "507f1f77bcf86cd799439011"
}
```

```http
POST /login
Content-Type: application/json

{
  "username": "john_doe",
  "password": "securePass123"
}

Response: 200 OK
{
  "success": true,
  "message": "Login successful",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "username": "john_doe"
  }
}
```

```http
GET /logout

Response: 200 OK
{
  "success": true,
  "message": "Logout successful"
}
```

### 👤 **User Endpoints**

```http
GET /users/profile
Authorization: Session Cookie

Response: 200 OK
{
  "username": "john_doe",
  "email": "john@example.com",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

---

## 🧪 Testing

```bash
# Run all tests
npm test

# Run specific test suite
npm test -- --grep "Authentication"

# Run with coverage
npm run test:coverage
```

### 📊 **Test Coverage Goals**

- ✅ Unit Tests: 80%+
- ✅ Integration Tests: 70%+
- ✅ E2E Tests: 60%+

---

## 🚢 Deployment

<div align="center">

### ☁️ Deploy to Production

</div>

### **Recommended Platforms**

<table>
<tr>
<td align="center" width="33%">

#### 🚀 **Heroku**
[![Deploy to Heroku](https://img.shields.io/badge/Deploy-Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)](https://heroku.com)

</td>
<td align="center" width="33%">

#### ⚡ **Railway**
[![Deploy to Railway](https://img.shields.io/badge/Deploy-Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)](https://railway.app)

</td>
<td align="center" width="33%">

#### 🌐 **Render**
[![Deploy to Render](https://img.shields.io/badge/Deploy-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com)

</td>
</tr>
</table>

### 📝 **Pre-Deployment Checklist**

```bash
✅ Environment variables configured
✅ MongoDB Atlas connection string set
✅ Production dependencies installed
✅ Security headers configured
✅ CORS policies set
✅ Rate limiting enabled
✅ Error logging configured
✅ HTTPS enforced
```

---

## 🤝 Contributing

<div align="center">

### 💜 We Welcome Contributions!

[![Contributors](https://img.shields.io/badge/Contributors-Welcome-E60023?style=for-the-badge&logo=pinterest&logoColor=white)](CONTRIBUTING.md)

</div>

### 🌟 **How to Contribute**

1. 🍴 **Fork** the repository
2. 🌿 **Create** your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. 💾 **Commit** your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. 📤 **Push** to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. 🎉 **Open** a Pull Request

### 📋 **Contribution Guidelines**

- Follow existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation
- Ensure all tests pass

---

## 📖 Learning Resources

<div align="center">

### 🎓 Master Backend Development

</div>

| Resource | Description |
|----------|-------------|
| 📘 [Node.js Docs](https://nodejs.org/docs) | Official Node.js documentation |
| 📗 [Express.js Guide](https://expressjs.com/guide) | Express.js official guide |
| 📙 [MongoDB Manual](https://docs.mongodb.com/manual/) | MongoDB documentation |
| 📕 [Passport.js Docs](http://www.passportjs.org/docs/) | Authentication strategies |
| 📓 [Mongoose Docs](https://mongoosejs.com/docs/) | ODM documentation |

---

## 🐛 Known Issues & Solutions

| Issue | Solution |
|-------|----------|
| ❌ MongoDB connection failed | Ensure MongoDB is running and URI is correct |
| ❌ Session not persisting | Check express-session configuration |
| ❌ Passport authentication fails | Verify User model has passport-local-mongoose plugin |
| ❌ Port already in use | Change PORT in .env or kill process on port 3000 |

---



### 🚀 Built with Node.js, Express, and MongoDB

**[⬆ Back to Top](#-pinterest-backend-clone--professional-nodejs--express-api)**

---

© 2025 Pinterest Backend Clone. All Rights Reserved.

*This project is not affiliated with Pinterest, Inc.*

</div>
