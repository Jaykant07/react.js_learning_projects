# React Currency Converter

This project is a Currency Converter application built using React.js. It allows users to convert an amount from one currency to another using real-time exchange rates. The application fetches data from a currency API to provide up-to-date conversion rates.

## Features

- Real-Time Currency Conversion: Fetches current exchange rates to provide accurate conversions.
- Multiple Currency Support: Supports conversion between various global currencies.
- User-Friendly Interface: Simple and intuitive design for easy currency conversion.

## Technologies Used

- React.js (Functional Components & Hooks)
- Tailwind CSS for styling
- Vite for fast development

# Installation

To run this project locally, follow these steps:

1. Clone the repository:

```sh
git clone https://github.com/Jaykant07/react-js.git
```

2. Navigate to the project directory:

```sh
cd react-js/05currencyConverter
```

3. Install dependencies:

```sh
npm install
```

4. Start the development server:

```sh
npm run dev
```

The application will run on http://localhost:3000/.

# Project Structure

```
05currencyConverter/
├── src/
│   ├── components/          # Reusable React components
│   ├── App.js               # Main application component
│   ├── index.js             # Entry point of the application
│   ├── styles.css           # Stylesheet for the application
│   ├── api.js               # Handles API requests
├── public/
│   ├── index.html           # Root HTML file
├── package.json             # Project dependencies and scripts
├── package-lock.json        # Lock file for npm
├── .gitignore               # Files ignored by Git
├── README.md                # Project documentation
```

# Usage

1. Enter the amount you wish to convert.
2. Select the currency to convert from.
3. Select the currency to convert to.
4. The converted amount will be displayed based on the current exchange rate.

# Dependencies

- React: JavaScript library for building user interfaces.
- Axios: Promise-based HTTP client for making API requests.
- React Dropdown: Simple dropdown component for React.
- React Icons: Include popular icons in your React projects easily.

# API Reference

This application uses the Currency API to fetch real-time exchange rates. No authentication is required to access this API.

# Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.
