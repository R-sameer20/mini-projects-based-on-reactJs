# 🛒 E-Commerce Shop - React & Redux Toolkit

A modern, fast, and fully responsive E-Commerce storefront built with **React**, **Redux Toolkit**, and **Tailwind CSS**. The application fetches live data from the Fake Store API, letting users dynamically browse products, add/remove items from a real-time shopping cart dashboard, and view live checkout totals.

---

## 🚀 Live Features

* **Dynamic Product Feed:** Fetches real-time products, images, and descriptions from a REST API.
* **Global State Architecture:** Utilizes centralized Redux Slices to handle lightning-fast add-to-cart actions.
* **Fluid Animations:** Built with micro-interactions, responsive 3D hover scales, and clean custom box shadows.
* **Intuitive Checkout Dashboard:** Features a split-view cart summary section that calculates subtotal pricing dynamically.
* **Instant Notifications:** Configured with `react-hot-toast` for elegant state update alerts.

---

## 🛠️ Built With

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend UI** | React 18 & Hooks | Component-driven architecture (`useState`, `useEffect`). |
| **State Management** | Redux Toolkit (`@reduxjs/toolkit`) | Centralized global store tracking client-side state. |
| **Styling Framework** | Tailwind CSS | Utility-first, clean responsive design patterns. |
| **Routing engine** | React Router DOM v6 | Seamless multi-page client transitions (`/` and `/cart`). |
| **Data Provider** | FakeStoreAPI | Dynamic marketplace REST backend simulation. |

---

## 📂 Project Architecture

```text
src/
├── components/
│   ├── CartItem.js       # Individual horizontal cart product layout
│   ├── Navbar.js         # Navigation header containing logo & cart counter
│   ├── Product.js        # Showcase store front items with add/remove triggers
│   └── Spinner.js        # Global loading state component
├── pages/
│   ├── Cart.js           # Split-screen responsive checkout summary dashboard
│   └── Home.js           # Marketplace showcase directory component
├── redux/
│   ├── Slices/
│   │   └── CartSlice.js  # Redux Toolkit reducer handling cart arrays
│   └── Store.js          # Main configureStore pipeline link
├── App.js                # Core global layout configuration file
└── index.js              # Dom mounting pipeline wrapped with Redux Provider

## 📦 Installation & Setup

1. **Clone the shared mini-projects repository:**
   ```bash
   git clone [https://github.com/R-sameer20/react-mini-projects.git](https://github.com/R-sameer20/react-mini-projects.git)