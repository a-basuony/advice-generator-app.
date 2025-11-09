
# 🎲 Advice Generator App

A **React** app that fetches random advice from an API and displays it in a card.  
Click the 🎲 button to get a new advice. Designed with **Tailwind CSS** and a modern dark theme.

---

## ✨ Features

- Fetches **random advice** from [Advice Slip API](https://api.adviceslip.com/advice)
- **Dark theme** with clean typography and colors
- **Hover animations** on the card and button
- **Loading skeleton** for smooth UX
- Fully **responsive** (mobile + desktop)

---

## 🛠 Tech Stack

- **React** (Vite)
- **Tailwind CSS**
- **Fetch API**
- **Lucide React** (Loader icon)

---

## 🎨 Colors (Tailwind Config)

| Color       | Value                 |
| ----------- | -------------------- |
| Primary 200 | `hsl(193, 38%, 86%)` |
| Primary 600 | `hsl(217, 19%, 38%)` |
| Primary 900 | `hsl(217, 19%, 24%)` |
| Primary 950 | `hsl(218, 23%, 16%)` |
| Accent 300  | `hsl(150, 100%, 66%)` |

---

## 📁 Project Structure

```

src/
├── components/
│   ├── AdviceCard.jsx
│   ├── Button.jsx
│   └── LoadingSkeleton.jsx
├── hooks/
│   └── useAdvice.js
├── App.jsx
├── index.css
└── main.jsx

````

---

## 🚀 Installation & Running

1. Clone the repo:

```bash
git clone https://github.com/a-basuony/advice-generator-app.git
cd advice-generator-app
````

2. Install dependencies:

```bash
npm install
```

3. Run the app locally:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌐 Live Demo

[View Live Demo](https://advice-generator-app-ochre-gamma.vercel.app/)

---

## 🖥 Usage

1. Open the app in your browser.
2. View the current advice displayed in the card.
3. Click the 🎲 button to fetch a **new random advice**.
4. Loading skeleton appears while fetching data.

---

## 💡 Notes

* Tailwind CSS is used for styling and responsive design.
* Smooth **hover effects** and **shadow animations** for UI polish.
* Dark theme and accent colors from Tailwind config.
* Fully responsive for mobile and desktop devices.

---



