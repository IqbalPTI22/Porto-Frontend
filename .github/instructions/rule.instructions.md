---
description: |
  Load these instructions when the agent is generating, editing, or reviewing
  frontend code for the portfolio website. These rules ensure consistent
  architecture, clean code practices, and scalable integration with a backend API.

# applyTo: 'frontend, react, vite, portfolio, ui, api-integration'
---

# Project Context

project:
name: Portfolio Frontend
type: Web Portfolio
framework: React
bundler: Vite
language: TypeScript
styling: TailwindCSS

purpose: |
This project is a modern portfolio website that dynamically loads content
from a backend API. The website displays personal profile information,
projects, skills, and other portfolio content. The frontend must remain
flexible because backend API endpoints may evolve over time.

architecture:
pattern: Component-based + service layer
data_source: External API
api_strategy: Centralized API service
rendering: Client-side rendering

---

# Folder Structure Guidelines

Use a modular and scalable structure.

src
components/
ui/ # reusable UI elements (buttons, cards, badges)
sections/ # hero, about, projects, skills, contact sections
layout/ # navbar, footer, page layout

pages/ # main pages (home, project detail)

services/
api/ # all API communication

hooks/ # reusable logic and data fetching hooks

types/ # TypeScript interfaces for API responses

utils/ # helper functions

styles/ # global styles if needed

assets/ # images and static files

App.tsx
main.tsx

---

# API Integration Rules

The frontend must always communicate with the backend through a service layer.

Rules:

- Do NOT call APIs directly inside UI components.
- All network requests must be placed inside `services/api`.
- Components must use hooks that internally call services.
- Base API URL must be stored in environment variables.

Example flow:

Component → Custom Hook → API Service → Backend

Environment example:

VITE_API_BASE_URL=http://localhost:3000

---

# Component Design Principles

Components must follow these rules:

- Components must be small and reusable
- Separate layout components from data components
- UI components must remain stateless whenever possible
- Avoid deeply nested component logic

Preferred component types:

- UI Components
- Section Components
- Layout Components

---

# UI / UX Guidelines

Design requirements:

- Clean modern developer portfolio design
- Fully responsive (mobile-first)
- Smooth hover animations
- Clear typography hierarchy
- Accessible color contrast

Recommended sections:

- Hero
- About
- Skills
- Projects
- Contact
- Footer

---

# State Management

Default approach:

- Use React hooks for local state
- Use custom hooks for data fetching
- Avoid unnecessary global state

Examples:

useProjects()
useProfile()
useSkills()

---

# Code Quality Standards

Follow clean code principles:

- Use descriptive naming for variables and components
- Avoid duplicated logic
- Keep functions small and focused
- Prefer composition over large monolithic components
- Remove unused imports or code

Formatting:

- Consistent indentation
- Clear separation of concerns
- Maintain readable file structure

---

# Performance Guidelines

- Lazy load large components when possible
- Avoid unnecessary re-renders
- Use memoization if needed
- Optimize images

---

# Error Handling

Every API request must support:

- loading state
- error state
- fallback UI

Example:

Loading spinner when fetching data  
Error message when API fails

---

# Responsiveness

All UI must work properly on:

- desktop
- tablet
- mobile

Use Tailwind responsive utilities.

---

# Maintainability

The system must be designed so that:

- new API endpoints can be integrated easily
- new sections can be added without modifying core architecture
- components remain reusable across the project

Avoid hardcoded content unless necessary.

---

# Documentation Expectations

Generated code should include:

- short comments for complex logic
- clear naming that reduces the need for excessive comments
- simple instructions for running the project

Expected commands:

npm install  
npm run dev
