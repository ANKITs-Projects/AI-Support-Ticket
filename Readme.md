# 🚀 AI-Powered Support Ticket Assistant

A full-stack web application where users can submit support tickets and an AI system automatically categorizes them and suggests professional replies.

---

## 📌 Features

* 📝 Create Support Tickets (Name, Email, Description)
* 🤖 AI-based Ticket Categorization (PAYMENT, LOGIN, BUG, OTHER)
* 💬 AI-generated Suggested Reply
* 📊 Dashboard to view all tickets
* 🔍 Detailed Ticket View
* ✅ Mark ticket as RESOLVED
* ✏️ Edit AI-generated reply
* ⚡ Fallback logic if AI fails

---

## 🛠️ Tech Stack

**Frontend:**

* React (Vite)
* TailwindCSS

**Backend:**

* Node.js
* Express.js

**Database:**

* MongoDB (Mongoose)

**AI Integration:**

* GeminiAI (with fallback logic)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd ai-support-ticket
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_GEMINI_API_KEY
```

Start backend:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file inside `frontend/`:

```env
VITE_BACKEND_URL=http://localhost:8080
```
Start frontend:

```bash
npm run dev
```
---

## ▶️ How to Run Locally

1. Start backend server → runs on `http://localhost:8080`
2. Start frontend → runs on `http://localhost:5173`
3. Open browser and use the app

---

## 🌐 Hosted URL

👉 Frontend: `https://ai-support-ticket-xqtk.vercel.app/`
👉 Backend: `https://ai-support-ticket.vercel.app/`

---

## 🧠 AI Output Format

Example:

```json
{
  "category": "PAYMENT",
  "reply": "We’re sorry for the inconvenience. Please share your transaction details."
}
```

---

## ⚠️ Assumptions Made

* AI responses may fail due to API limits, so fallback logic is implemented
* No authentication system 
* Tickets are managed in a simple dashboard
* AI categorization is based on prompt engineering
* UI is kept minimal as per assignment requirements

---


## ✅ Status

✔ Completed within assignment scope
✔ Functional full-stack application
✔ Clean UI and structured code
✔ AI integration with fallback handling

---
