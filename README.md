# 🚀 Alpha Comrade — Official Startup & Product Studio Website
**Domain:** [alphacomrade.in](https://alphacomrade.in)  
**Founder:** Rahul Poswal  

A modern, high-performance, modular portfolio and product showcase built with **React 19, Vite, TypeScript, and Tailwind CSS**.

---

## 🌟 What's Inside

### 1. 🍽️ Flagship MVP 1: DineFlow POS (Multi-Tenant QR Ordering SaaS)
- **Architecture:** React (Vite) PWA + Node.js/Express + MongoDB Atlas + Socket.io + Expo Staff Mobile App.
- **Real Screenshots Integrated:** Live Orders Dashboard (`/images/dineflow-dashboard.png`) and Menu Management (`/images/dineflow-menu.png`).
- **Features:** Zero-install QR table sessions, real-time Kitchen Display System (KOT), daily sales analytics, dynamic menu discounts, Cash & UPI settlement.
- **Interactive Simulator:** Place live test orders for Table 5 and watch the KOT pipeline transition (*New → Cooking → Ready → Served*).

### 2. 🥛 Flagship MVP 2: Smart Dairy OS (AgTech Mobile ERP)
- **Architecture:** React Native (Expo Router) + Node.js + Offline-first Local Storage Sync.
- **Features:** Morning & Evening procurement shifts, automatic FAT & SNF rate computation for Cow and Buffalo milk, double-entry farmer ledger (Khata), multi-dairy tenant switching.
- **Interactive Simulator:** Adjust milk volume, FAT %, and SNF % sliders with real-time rate calculation and live ledger logging.

### 3. 🌐 Production Client Deployments
- **Chasma Ghar:** [chasmagar.netlify.app](https://chasmagar.netlify.app) (Optical retail & eyewear showcase)
- **Vishvakarma:** [vishvakarma.netlify.app](https://vishvakarma.netlify.app) (Industrial manufacturing & engineering portal)
- **Founder Outreach AI Bot:** Automated Google Dorking, SQLite lead pipeline (`leads.db`), and human-cadence email engine.
- **Hansaraj Store:** React + Vite modern direct-to-consumer digital storefront.

---

## 🛠️ Tech Stack
- **Frontend:** React 19, Vite 8, TypeScript, Tailwind CSS v4, Lucide React
- **Mobile:** React Native, Expo Router, EAS Build
- **Backend & Real-Time:** Node.js, Express, Socket.io (WebSocket), MongoDB Atlas
- **DevOps & Edge:** Netlify Edge, Cloudflare DNS, GitHub CI/CD

---

## 💻 Running Locally

```bash
# Navigate to website directory
cd "c:\Users\Comrade\Desktop\Personal MVP\alphacomrade-web"

# Install dependencies (already installed)
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 📦 Deploying to alphacomrade.in (Netlify / Vercel / Cloudflare)

```bash
# Build production bundle
npm run build
```
The output directory is `dist/`. You can connect your GitHub repository or drag-and-drop `dist/` directly into **Netlify** or **Vercel** and point your custom domain **alphacomrade.in** via DNS!
