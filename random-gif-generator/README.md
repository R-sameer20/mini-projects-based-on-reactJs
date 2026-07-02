# 🎬 Random & Tagged GIF Generator

An interactive, API-driven media streaming dashboard built with **React** and styled via **Tailwind CSS**. This application hooks directly into the GIPHY API to fetch dynamic media items on demand, showcasing modular optimization through a centralized custom state hook to eliminate logic redundancy.

---

## 🚀 Features

* **Random GIF Streamer:** Instantly requests a completely randomized GIF template from an API endpoint upon clicking the global layout trigger button.
* **Targeted Keyword Filtering (`Tag`):** Features a focused search container that fetches tailored GIFs specifically matching any user-defined string query (e.g., "car").
* **DRY Custom Hook Architecture:** Reuses code efficiently by centralizing duplicate asynchronous logic into a modular `useGif` hook that serves both components seamlessly.
* **Polka-Dot Canvas Interface:** Wrapped inside a stylized, full-viewport responsive layout context utilizing advanced Tailwind background pattern utilities.

---

## 🛠️ Tech Stack

* **Frontend Framework:** React.js
* **State & Lifecycle Management:** Custom React Hooks (`useGif`, `useState`, `useEffect`)
* **Data Communications:** Axios / Fetch API
* **Styling System:** Tailwind CSS

---

## 📦 Installation & Configuration

1. **Clone the shared mini-projects repository:**
   ```bash
   git clone [https://github.com/R-sameer20/react-mini-projects.git](https://github.com/R-sameer20/react-mini-projects.git)