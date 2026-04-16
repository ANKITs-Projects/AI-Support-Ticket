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

* Google Gemini API (with fallback logic)

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
PORT=5000
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-1.5-flash
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
npm run dev
```

---

## ▶️ How to Run Locally

1. Start backend server → runs on `http://localhost:5000`
2. Start frontend → runs on `http://localhost:5173`
3. Open browser and use the app

---

## 🌐 Hosted URL

👉 Frontend: *Add your deployed URL here*
👉 Backend: *Add your deployed API URL here*

---

## 🧠 AI Output Format

Example:

```json
{
  "category": "PAYMENT",
  "reply": "We’re sorry for the inconvenience. Please share your transaction details.",
  "confidence": 0.92
}
```

---

## ⚠️ Assumptions Made

* AI responses may fail due to API limits, so fallback logic is implemented
* No authentication system (single-user/admin usage)
* Tickets are managed in a simple dashboard (no pagination)
* AI categorization is based on prompt engineering and may not always be 100% accurate
* UI is kept minimal as per assignment requirements

---

## 🔥 Future Improvements

* User authentication (Admin/User roles)
* Ticket priority (HIGH / MEDIUM / LOW)
* Pagination & search filters
* Real-time updates (WebSockets)
* Better AI accuracy with fine-tuned prompts
* Toast notifications & better UX

---

## 📷 Screens (Optional)

*Add screenshots here for better presentation*

---

## 📦 Deployment

* Frontend: Vercel / Netlify
* Backend: Render / Railway / Cyclic
* Database: MongoDB Atlas

---

## 👨‍💻 Author

**Ankit Gupta**

---

## ✅ Status

✔ Completed within assignment scope
✔ Functional full-stack application
✔ Clean UI and structured code
✔ AI integration with fallback handling

---
