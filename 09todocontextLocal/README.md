## React Todo Application with Context API and Local Storage

This project is a simple Todo application built using React. It leverages the Context API for state management and utilizes the browser's Local Storage to persist tasks between sessions.

# Table of Contents

- Overview
- Features
- Installation
- Usage
- Project Structure

# Overview

Managing state across multiple components can be challenging in React applications. The Context API provides a way to share values between components without having to explicitly pass props through every level of the tree. In this Todo application, the Context API is used to manage the list of tasks and their states. Additionally, Local Storage is employed to ensure that tasks persist even after the browser is refreshed or closed.

# Features

- Add Tasks: Users can add new tasks to their todo list.
- Delete Tasks: Users can remove tasks from their list.
- Toggle Completion: Users can mark tasks as completed or incomplete.
- Persistent Storage: Tasks are saved in Local Storage, ensuring data persistence across sessions.

# Installation

To run this project locally, follow these steps:

Clone the repository:

```sh
git clone https://github.com/Jaykant07/react.js_learning_projects.git
```

Navigate to the project directory:

```sh
cd react.js_learning_projects/09todocontextLocal
```

Install dependencies:

Ensure you have Node.js installed. Then, install the necessary packages:

```sh
npm install
```

# Usage

After installing the dependencies, run app:

```sh
npm run dev
```

Open your browser and navigate to http://localhost:3000 to view the application. You can add, delete, and toggle the completion status of tasks. Your tasks will be saved in Local Storage, so they will persist even if you refresh the page or close and reopen the browser.

# Project Structure

The project structure is organized as follows:

```sh
09todocontextLocal/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── TodoForm.jsx
│ │ └── TodoItem.jsx
│ ├── contexts/
│ │ └── TodoContext.jsx
│ ├── App.jsx
│ ├── index.js
│ └── App.css
├── package.json
└── README.md
```

public/index.html: The main HTML file.

src/components/: Contains React components such as TodoForm and TodoItem.

src/contexts/TodoContext.jsx: Defines the context and provider for managing the todo list state.

src/App.jsx: The root component where the context provider wraps the application.

src/index.js: The entry point of the React application.

src/App.css: Styling for the application.

package.json: Lists the project dependencies and script
