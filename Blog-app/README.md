# 📝 CodeHelp Blog - React Context API Architecture

A dynamic, optimized blog feed application built using **React** and **Tailwind CSS**. This project avoids the anti-pattern of "prop drilling" by implementing a centralized state pipeline via the **React Context API**, ensuring scalable and clean state management across deeply nested components.

---

## 🚀 Features

* **Centralized State Management:** Uses `AppContext` to handle global app states (`loading`, `posts`, `page`, `totalPages`) without passing redundant props through intermediary components.
* **Asynchronous Data Pipeline:** Features an integrated data-fetching process (`fetchBlogPost`) triggered within `App.js` via the `useEffect` hook to pull content on mounting.
* **Dynamic Pagination:** Supports standard structural feed controls (Previous/Next) coupled with active page metrics (`Page X of Y`) directly updating the global context state.
* **Fluid Feedback Indicator:** Displays a localized CSS `<Spinner />` animation during network fetch actions to enhance the user experience.

---

## 🛠️ Tech Stack

* **Frontend Library:** React.js
* **State Management Engine:** React Context API (`useContext`, `createContext`)
* **Styling Engine:** Tailwind CSS

---

## 📦 Installation & Configuration

1. **Clone the shared mini-projects repository:**
   ```bash
   git clone [https://github.com/R-sameer20/react-mini-projects.git](https://github.com/R-sameer20/react-mini-projects.git)