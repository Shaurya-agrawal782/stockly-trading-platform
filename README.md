# Stockly

Stockly is a full-stack stock trading simulator inspired by modern brokerage platforms. It includes a public landing website, an authenticated trading dashboard, and a Node.js backend that manages users, funds, orders, holdings, and positions.

## Overview

This repository is split into three apps:

- `frontend` - public marketing website with product, pricing, support, about, signup, and login pages
- `dashboard` - authenticated trading dashboard for viewing holdings, positions, orders, watchlist data, and funds
- `backend` - Express + MongoDB API for authentication and portfolio operations

## Features

- User signup and login with JWT-based authentication
- Auth token support via HTTP-only cookies and `Authorization: Bearer <token>`
- Redirect from landing site to dashboard after successful login/signup
- Portfolio views for holdings, positions, and orders
- Funds management with add and withdraw actions
- Buy and sell order placement from the dashboard watchlist
- User-specific MongoDB data for funds, orders, holdings, and positions
- CORS configuration for separate frontend and dashboard origins

## Tech Stack

### Frontend

- React
- Vite
- React Router
- Axios
- React Toastify

### Dashboard

- React
- Vite
- React Router DOM
- Axios
- Material UI
- Chart.js
- React Chart.js 2

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcrypt
- cookie-parser
- cors
- dotenv

## Project Structure

```text
Stockly/
|-- backend/
|   |-- index.js
|   |-- Routes/
|   |-- Middlewares/
|   |-- model/
|   |-- schemas/
|   `-- .env.example
|-- frontend/
|   |-- public/
|   `-- src/
|-- dashboard/
|   |-- public/
|   `-- src/
`-- README.md
```

## How It Works

### Public site

The `frontend` app is the public-facing site. It contains:

- Home page
- Product page
- Pricing page
- About page
- Support page
- Signup page
- Login page

After signup or login, the frontend stores the returned user in `localStorage` and redirects the browser to the dashboard URL with the JWT token in the query string.

### Dashboard

The `dashboard` app reads the token from the URL, stores it in `localStorage`, and uses it for authenticated API requests. It includes:

- Watchlist with buy/sell actions
- Summary dashboard
- Orders page
- Holdings page
- Positions page
- Funds page

### Backend

The `backend` app connects to MongoDB and exposes routes for:

- authentication
- user verification
- holdings
- positions
- orders
- funds

Protected routes use the `requireAuth` middleware, which validates the JWT and loads the current user.


```env
FRONTEND_URL=http://localhost:5173
DASHBOARD_URL=http://localhost:3000
```

```env
VITE_BACKEND_URL=http://localhost:3002
VITE_DASHBOARD_URL=http://localhost:3000
```

### Dashboard

Create `dashboard/.env`:

```env
VITE_BACKEND_URL=http://localhost:3002
VITE_FRONTEND_URL=http://localhost:5173
```

## Installation

Install dependencies in all three apps:

```bash
cd backend
npm install
```

```bash
cd frontend
npm install
```

```bash
cd dashboard
npm install
```

## Running Locally

Start each app in a separate terminal.

### 1. Start backend

```bash
cd backend
npm run dev
```

The backend runs on `http://localhost:3002`.

### 2. Start frontend

```bash
cd frontend
npm run dev
```

By default Vite serves the frontend on `http://localhost:5173`.

### 3. Start dashboard

```bash
cd dashboard
npm run dev
```

The dashboard is configured to run on `http://localhost:3000`.

## Available Scripts

### Backend

- `npm start` - start backend with Node
- `npm run dev` - start backend with Nodemon

### Frontend

- `npm run dev` - start Vite dev server
- `npm run build` - build production bundle
- `npm run preview` - preview production build
- `npm run lint` - run ESLint

### Dashboard

- `npm run dev` - start Vite dev server
- `npm run build` - build production bundle
- `npm run preview` - preview production build

## API Endpoints

### Auth routes

- `POST /` - verify current user from cookie or bearer token
- `POST /signup` - create a new user account
- `POST /login` - log in an existing user
- `POST /logout` - clear auth cookie

### Portfolio routes

- `GET /holdings` - fetch current user's holdings
- `GET /positions` - fetch current user's positions
- `GET /orders` - fetch current user's orders
- `GET /funds` - fetch or initialize current user's funds
- `POST /funds/add` - add funds
- `POST /funds/withdraw` - withdraw funds
- `POST /newOrder` - place a buy or sell order

## Database Models

The backend currently uses these MongoDB collections:

- `User` - username, email, hashed password, timestamps
- `Orders` - order history with stock name, quantity, price, mode, and timestamps
- `Holdings` - current user holdings
- `Positions` - current user positions
- `Funds` - user wallet and margin-related balances

## Authentication Flow

1. User signs up or logs in from the landing site.
2. Backend validates credentials and returns a JWT token.
3. Token is set as an HTTP-only cookie and also returned in the JSON response.
4. Frontend redirects the user to the dashboard with the token in the URL.
5. Dashboard stores the token in `localStorage` and includes it in API requests.
6. Protected backend routes validate the token before serving user data.

## Notes and Current Limitations

- No automated tests are included yet.
- There is no root-level workspace script; each app is started independently.
- The dashboard watchlist data is currently local static data.
- Order placement updates holdings and positions in MongoDB, but this is still a simulator, not a live market integration.
- Some UI text in the dashboard shows encoding artifacts for the rupee symbol and close icon, which can be cleaned up later.

## Author

Shaurya Agrawal

## License

This project currently uses the `ISC` license in the backend package metadata.
