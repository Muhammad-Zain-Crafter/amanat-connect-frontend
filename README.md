# 🎒 Amanat Connect Frontend

A modern React frontend for **Amanat Connect**, a campus lost & found platform that helps students report lost items, browse found items, and submit claims through a secure and user-friendly interface.

## 🔗 Live Links

- App: https://amanat-connect.vercel.app
- Backend API: https://amanat-connect-backend.onrender.com
- Backend Repository: https://github.com/Muhammad-Zain-Crafter/amanat-connect-backend

## ✨ Features

- 🔐 JWT Authentication (Bearer token)
- 👤 User Registration & Login
- 🔑 Forgot & Reset Password
- 📝 Report Lost & Found Items
- 🔍 Browse & Search Assets
- 📄 Asset Details Page
- 📦 Submit Claim Requests
- 👤 User Profile Management
- 🛡️ Protected Routes
- 📱 Fully Responsive UI
- ⚡ Centralized State Management with Redux Toolkit

## 🛠️ Tech Stack

- React.js
- TypeScript
- Redux Toolkit
- React Router
- Tailwind CSS
- Axios
- React Hook Form
- Lucide React

## 📂 Project Structure

```
src/
├── components/
├── pages/
├── features/
├── services/
├── hooks/
├── layouts/
├── routes/
├── utils/
├── types/
└── assets/
```

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/Muhammad-Zain-Crafter/amanat-connect-frontend.git
```

### Navigate to the project

```bash
cd amanat-connect-frontend
```

### Install dependencies

```bash
npm install
```

### Configure Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

```env
VITE_API_URL=http://localhost:7000/api/v1/campusAssetRecovery
```

> For local development, point this to your locally running backend (see the [backend repo](https://github.com/Muhammad-Zain-Crafter/amanat-connect-backend) setup). This must match the base path your backend routes are mounted under.

### Start the development server

```bash
npm run dev
```

The application will run at:

```
http://localhost:5173
```

> Note: to log in successfully against a **locally running backend**, make sure the backend's `CLIENT_URL` env var is set to `http://localhost:5173` and `NODE_ENV=development`.

## 📸 Screenshots

Coming Soon...

## 🚧 Project Status

This project is deployed and actively maintained.

### Upcoming Features
- Admin Dashboard
- Notifications
- Pagination & Advanced Filtering
- Unit Testing

## 👨‍💻 Author

**Muhammad Zain**
- GitHub: https://github.com/Muhammad-Zain-Crafter
- LinkedIn: https://www.linkedin.com/in/muhammad-zain-19ba6a319/

---

⭐ If you found this project helpful, consider giving it a star!
