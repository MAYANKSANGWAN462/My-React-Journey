# 🚀 React + Node.js

This is a full-stack project using **React (Vite)** for the frontend and **Node.js (Express)** for the backend. This README provides all the instructions to run the project locally or set it up in an automated environment like CI/CD.

---

## ⚙️ How to Run the Project Locally

### 🧾 Requirements

- Node.js and npm installed (version 16 or above recommended)
- Internet connection to fetch dependencies

---

### 🧨 Quick Start (Copy-Paste Friendly Bash Commands)

Use the following one-shot command block to install and run both frontend and backend:

<pre><code class="language-bash">
# === FRONTEND (React with Vite) ===
npm install
npm run dev &

# === BACKEND (Node.js with Express) ===
cd backend
npm install
node app.js
</code></pre>

> 📝 Note: The frontend runs in the background due to the `&`. You can remove it if you want it to stay in the same terminal.

---

### 🌐 URLs

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend: [http://localhost:PORT](http://localhost:PORT) — replace `PORT` with the one defined in `app.js`.

---

## 🤖 CI/CD Automation Example (GitHub Actions YAML)

If you're using CI/CD (like GitHub Actions), here is a basic YAML setup to install and run both parts:

```yaml
name: Run Full Stack Project

on: [push]

jobs:
  build-and-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install and Run Frontend
        run: |
          npm install
          npm run dev &

      - name: Install and Run Backend
        run: |
          cd backend
          npm install
          node app.js
