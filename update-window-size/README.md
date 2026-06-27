# 📐 Dynamic Window Size Tracker

A real-time viewport utility application built with **React** and styled via **Tailwind CSS**. This project demonstrates how to cleanly synchronize native browser window contexts with React component states, featuring proper clean-up memory management to avoid performance leaks.

---

## 🚀 Features

* **Real-Time Dimension Tracking:** Displays the precise width and height of the user's browser window dynamically as it resizes.
* **Optimized Event Subscriptions:** Leverages React lifecycle workflows to establish layout listeners only when the component mounts.
* **Garbage Collection (Memory Clean-up):** Implements a clean-up return function to automatically unbind event listeners, preventing memory leaks when the component unmounts.
* **Minimalist Responsive HUD:** Features a clean, centered data display card using Tailwind utility layout structures.

---

## 🛠️ Tech Stack

* **Frontend Library:** React.js
* **State & Event Lifecycles:** React Hooks (`useState`, `useEffect`)
* **Styling Engine:** Tailwind CSS

---

## 📦 Installation & Configuration

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/react-window-size-tracker.git](https://github.com/your-username/react-window-size-tracker.git)