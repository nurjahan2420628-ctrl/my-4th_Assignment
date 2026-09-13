# 🚀 DevStack

DevStack is a modern and responsive web application that helps users explore different web development technologies and build their own technology stack. Users can browse technologies, view their details, and add or remove technologies from their personal stack.

## 🛠️ Technologies Used

* **React**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **React Toastify**
* **JSON**

## ✨ Features

### 1. Explore Technologies

Users can browse different technologies with information such as category, description, difficulty level, rating, and technology badge.

### 2. Build Your Own Stack

Users can add technologies to their personal stack and remove individual technologies or remove all selected technologies.

### 3. Responsive Design

The website is responsive and provides a mobile-friendly navigation menu for smaller screens.

---

# ⚛️ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. React uses JSX to make UI code easier to write and understand.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. They are read-only.

**State** is data managed inside a component that can change over time and cause the UI to update.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage changing data in a React component.

In this project, it is used in `App.tsx` to manage:

* The list of technologies
* The selected technology stack
* The loading state

It is also used in `Navbar.tsx` to control the mobile menu.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders or when its dependencies change.

I used it in `App.tsx` to load the technology data from `technologies.json` when the application starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It allows React to efficiently update only the items that have changed.

For example:

```tsx
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
```

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI elements depending on a condition.

In this project, I used it in `YourStack.tsx`. If the selected stack is empty, it shows **"Your stack is empty"**. Otherwise, it displays the selected technologies.

```tsx
{selectedStack.length === 0 ? (
  <div>Your stack is empty</div>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**.

A child can send information back to the parent by calling a **function passed through props**.

In this project, `App.tsx` passes `technologies`, `selectedStack`, and functions such as `onAdd` and `onRemove` to child components.

For example:

```tsx
<TechnologyCard
  technology={technology}
  onAdd={onAdd}
/>
```

The child component can then call `onAdd(technology)` to send the selected technology back to the parent.

---

## 📌 Project Purpose

DevStack provides a simple way for developers to explore technologies and create a personalized development stack based on their interests and needs.
