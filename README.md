# GLORY 
It is an E-Commerce website built as an assignment.

It demonstrates:

- Clean project structure
- React fundamentals
- Node.js + Express APIs
- MongoDB integration
- Docker setup
- Basic DevOps understanding

## Preview
<img width="1891" height="909" alt="image" src="https://github.com/user-attachments/assets/d81cd764-d548-4904-918f-2ea5d9e5edf7" />

<img width="1897" height="919" alt="image" src="https://github.com/user-attachments/assets/a77948a3-71ee-4951-8c55-2a6ae483573a" />


## Tech Stacks
1. **Frontend**:- React, Tailwind CSS, Redux Toolkit (for state management)
2. **Backend**:- Node.js, Express.js, MongoDB

## Setup Locally
1. Fork the repo

2. Clone the repo
```bash
  git clone repo_url
```

3. Setup .env
- Frontend
```bash
  VITE_CART_APP_BACKEND_URL="https://localhost:3000/api/cart"
  VITE_PRODUCT_APP_BACKEND_URL="https://localhost:3000/api/products"
```

- Backend
```bash
  PORT=3000
  MONGO_URI="your-mongo_url"
```

4. Install dependencies
```bash
  cd backend
  npm install
  node server.js

  cd ..
  cd frontend
  npm install
  npm run dev
```

## Running with Docker (Recommended)

This project is configured to run using Docker Compose as required.

Build and Start
```bash
 docker-compose up --build
```

This will start:
React Frontend → http://localhost:5173

Node Backend → http://localhost:3000
