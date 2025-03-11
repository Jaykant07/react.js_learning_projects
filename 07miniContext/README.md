## React Context API Project

This project demonstrates the implementation of the React Context API to manage global state in a React application. It showcases how to create and use context to share data across components without the need for prop drilling.

# Table of Contents

- Overview
- Features
- Installation
- Usage
- Project Structure

# Overview

The React Context API provides a way to pass data through the component tree without having to pass props down manually at every level. This is particularly useful for global data such as user authentication status, themes, or preferred language, which need to be accessed by multiple components within an application.

In this project, we implement a mini e-commerce store to illustrate how to use the Context API in a real-world application.

# Features

- Global State Management: Utilizes the Context API to manage and share global state across components.

- Avoids Prop Drilling: Eliminates the need to pass props through intermediate components, simplifying data flow.

- useContext Hook: Implements the useContext hook for consuming context in functional components.

# Installation

To run this project locally, follow these steps:

Clone the repository:

```sh
git clone https://github.com/Jaykant07/react.js_learning_projects.git
```

Navigate to the project directory:

```sh
cd react.js_learning_projects/07miniContext
```

Install dependencies:

Ensure you have Node.js installed. Then, install the necessary packages:

```sh
npm install
```

# Usage

After installing the dependencies, run app:

npm run dev

Open your browser and navigate to http://localhost:3000 to view the application. You can interact with the components to see how the Context API manages and shares state across the application.

# Project Structure

The project structure is organized as follows:

```sh
07miniContext/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── ProductList.js
│   │   └── Cart.js
│   ├── context/
│   │   └── AppContext.js
│   ├── App.js
│   ├── index.js
│   └── App.css
├── package.json
└── README.md
```

public/index.html: The main HTML file.

src/components/: Contains React components such as Header, ProductList, and Cart.

src/context/AppContext.js: Defines the context and provider for global state management.

src/App.js: The root component where the context provider wraps the application.

src/index.js: The entry point of the React application.

src/App.css: Styling for the application.

package.json: Lists the project dependencies and scripts.
