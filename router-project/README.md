# 🔐 React Router Auth App (StudyNotion)

An authentication-ready multi-page single-page application (SPA) built using **React** and managed via **React Router DOM**. This project demonstrates how to structure client-side routes, handle state-driven navbar link transitions, and manage clean authentication routing views (`Login`, `Signup`, `Dashboard`, `Home`, `About`, `Contact`).

---

## 🚀 Features

* **SPA Navigational Framework:** Instantly switches between app sections without complete page reloads using `<Link>` components.
* **State-Driven Authentication Layout:** The global header navigation bar dynamically adjusts its control buttons based on an active `isLoggedIn` state variable:
    * *Logged Out State:* Displays **Log in** and **Sign up** options.
    * *Logged In State:* Automatically swaps buttons to show **Log out** and **Dashboard** components.
* **Structured Layout Routing:** Uses structured component routing strategies to easily map explicit paths to dedicated screen components.
* **Fluid Component Design:** Styled with Tailwind CSS to offer a responsive, modern dark aesthetic.

---

## 🛠️ Tech Stack

* **Frontend Library:** React.js
* **Routing Engine:** React Router DOM
* **Styling System:** Tailwind CSS
* **Notifications:** React-Toastify (for authentication status alerts)

---

## 📦 Installation & Setup

1. **Clone the shared mini-projects repository:**
   ```bash
   git clone [https://github.com/R-sameer20/react-mini-projects.git](https://github.com/R-sameer20/react-mini-projects.git)