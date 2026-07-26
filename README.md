# EcoMart

EcoMart is a simple e-commerce web application built with React and Redux Toolkit. It fetches product data from the Dummy Products API and allows users to manage their shopping cart using Redux for global state management.

## Features

- Display products from Dummy Products API
- View product details
- Add products to cart
- Remove products from cart
- Global state management using Redux Toolkit
- Responsive user interface

## Tech Stack

- React
- Redux Toolkit
- React Redux
- React Router
- JavaScript
- CSS
- Dummy Products API

## Project Structure


src/
│── app/
│ └── store.js
│
│── features/
│ └── cart/
│ └── cartSlice.js
│
│── components/
│
│── pages/
│
│── assets/
│
└── App.jsx


## Redux Toolkit Concepts Used

- configureStore
- createSlice
- Reducers
- Actions
- useSelector
- useDispatch

## Installation

Clone the repository:

```bash
git clone <repository-url>

Navigate to the project folder:

cd ecomart

Install dependencies:

npm install

Start the development server:

npm run dev
```

## How It Works
- Products are fetched from the Dummy Products API.
- Users can browse available products.
- Clicking "Add to Cart" dispatches a Redux action.
- The cart state is updated inside the Redux store.
- Cart data is displayed using useSelector.
- Products can be removed from the cart using Redux actions.


## Learning Outcomes

This project helped me understand:

- Global state management
- Redux Toolkit workflow
- Creating slices
- Dispatching actions
- Accessing state with useSelector
- Managing cart functionality using Redux Toolkit