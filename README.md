# Feedback Application - Backend (Node.js & Express)

## 📌 Project Overview

This repository contains the **backend API** for the **Feedback Application**.  
It provides endpoints to **store and retrieve feedback** from a **MongoDB database**.  
The backend is built using **Node.js, Express, and Mongoose**.

---

## 🚀 Features

✅ **Store user feedback** in MongoDB  
✅ **Retrieve all submitted feedback**  
✅ **REST API endpoints** for easy integration  
✅ **CORS enabled** for frontend-backend communication  
✅ **Uses Mongoose** for database modeling  

---

## 🛠️ Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (Download from [Node.js Official Site](https://nodejs.org/))
- **MongoDB Atlas** (Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **Git** (Download from [Git](https://git-scm.com/))

---

## 📥 Installation

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/LSG-hub/feedback-backend.git
cd feedback-backend
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

---

## ⚙️ Configuration

### 🔑 **Set Up Environment Variables**
Create a .env file in the project root and add:
```sh
MONGO_URI=mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.mongodb.net/feedbackDB?retryWrites=true&w=majority
PORT=5000
```
Replace <USERNAME> and <PASSWORD> with your MongoDB Atlas credentials.


