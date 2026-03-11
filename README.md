
# Porto Frontend

<p align="center">
	<img src="public/logo.png" alt="Porto Frontend Logo" width="120" />
</p>

<p align="center">
	<b>A Luxurious, Modern Portfolio Frontend</b><br/>
	Crafted with <strong>React</strong>, <strong>Vite</strong>, <strong>TypeScript</strong>, and <strong>TailwindCSS</strong>
</p>

---

## ✨ Overview

Porto Frontend is a high-class, elegant, and fully dynamic portfolio website. Designed for professionals who demand both beauty and performance, it leverages a modern tech stack and a clean architecture to deliver a seamless, API-driven experience. All content is fetched from a backend API—no hardcoded data—ensuring your portfolio is always up-to-date and effortlessly maintainable.

**Architecture Pattern:**

<kbd>Component</kbd> → <kbd>Hook</kbd> → <kbd>Service</kbd> → <kbd>API</kbd>

---

## 🚀 Features

- **Stunning, Responsive UI:** Elegant layouts, glassmorphism, and warm ambient glows for a truly premium feel.
- **API-Driven Content:** Profile, skills, and projects are fetched live from your backend.
- **TypeScript Safety:** End-to-end type safety for robust, maintainable code.
- **Lightning Fast:** Powered by Vite and optimized React patterns.
- **TailwindCSS:** Utility-first styling for rapid, consistent design.
- **Modular & Scalable:** Clean separation of concerns for easy extension.
- **Dark Mode Ready:** Designed for visual comfort and modern aesthetics.

---

## 🛠️ Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Copy the example environment file and set your API base URL:

```bash
cp .env.example .env
# Edit .env as needed
```

**.env**
```env
VITE_API_BASE_URL=http://localhost:3000
```

### 3. Start the Development Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view your portfolio.

---

## 🧩 Project Structure

```
src/
	components/
		sections/        # Hero, About, Skills, Projects, Contact
		ui/              # UI primitives (Container, ProjectCard, etc.)
	hooks/             # Data fetching and state hooks
	pages/             # Main pages (Home, Project Detail)
	services/api/      # API clients and data normalization
	types/             # TypeScript types
	utils/             # Utilities (e.g., image placeholders)
```

---

## 🌐 API Endpoints

The frontend expects the following endpoints from your backend:

- `GET /profile` — Returns profile data
- `GET /skills` — Returns skills array
- `GET /projects` — Returns all projects
- `GET /projects/:id` — Returns a single project by ID

---

## 🏗️ Scripts

| Command         | Description                  |
|-----------------|-----------------------------|
| `npm run dev`   | Start development server     |
| `npm run build` | Build for production         |
| `npm run preview` | Preview production build   |
| `npm run lint`  | Run ESLint                  |

---

## 💎 Design Philosophy

Porto Frontend is inspired by luxury, clarity, and modern web standards. Every section is animated with subtle, tasteful effects. The codebase is structured for clarity and long-term maintainability, making it ideal for developers who value both aesthetics and engineering excellence.

---

## 📦 Tech Stack

- **React 19**
- **Vite 7**
- **TypeScript 5**
- **TailwindCSS 3**
- **ESLint**

---

## 📝 License

This project is licensed under the MIT License.

---

## 👑 Author

Crafted with passion by [IqbalPTI22](https://github.com/IqbalPTI22)

---

<p align="center"><i>Elevate your portfolio. Impress with elegance. Ship with confidence.</i></p>
- `GET /projects`
- `GET /projects/:id`

## Struktur Folder

```text
src
├ components
│  ├ ui
│  └ sections
├ hooks
├ pages
├ services
│  └ api
├ types
├ utils
└ App.tsx
```

## Fitur Implementasi

- Hero, About, Skills, Projects, Contact sections
- Responsive design (desktop + mobile)
- Project card grid dengan hover animation
- Lazy loading untuk images (`loading="lazy"`)
- Lazy loading section besar (`React.lazy` + `Suspense`)
- Loading state + error fallback UI untuk setiap request API
