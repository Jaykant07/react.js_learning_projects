## React Theme Switcher

This project demonstrates how to implement a theme switcher in a React application, enabling users to toggle between light and dark themes seamlessly. The implementation utilizes styled-components for styling and the Context API for state management.

# Table of Contents

- Overview
- Features
- Installation
- Usage
- Project Structure

# Overview

Implementing a theme switcher enhances user experience by allowing customization of the application's appearance. This project showcases how to build a theme switcher using styled-components and the Context API in React.

# Features

- Theme Switching: Toggle between light and dark themes.
- Persistent Theme Preference: User's theme choice is saved in local storage for consistency across sessions.
- Responsive Design: Ensures optimal viewing experience across various devices.

# Installation

To run this project locally:

Clone the repository:

```sh
git clone https://github.com/Jaykant07/react.js_learning_projects.git
```

Navigate to the project directory:

```sh
cd react.js_learning_projects/08themeSwitcher
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

Open your browser and navigate to http://localhost:3000 to view the application. Use the provided toggle to switch between light and dark themes.

# Project Structure

The project structure is organized as follows:

```sh
08themeSwitcher/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ThemeToggle.js
│   │   └── App.js
│   ├── context/
│   │   └── ThemeContext.js
│   ├── themes/
│   │   ├── lightTheme.js
│   │   └── darkTheme.js
│   ├── index.js
│   └── App.css
├── package.json
└── README.md
```

public/index.html: The main HTML file.
src/components/: Contains React components, including the theme toggle functionality.
src/context/ThemeContext.js: Manages the current theme state using the Context API.
src/themes/: Defines the styling for both light and dark themes.
src/index.js: The entry point of the React application.
src/App.css: Global styling for the application.
package.json: Lists the project dependencies and scripts.
