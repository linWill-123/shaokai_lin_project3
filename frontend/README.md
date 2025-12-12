# Sudoku Full Stack Application - Setup Guide

## Overview
This is a full-stack Sudoku application with:
- **Frontend**: React app with routing and game logic
- **Backend**: Express.js REST API server
- **Database**: MongoDB Atlas for persistent storage

## Prerequisites
- Node.js installed
- MongoDB Atlas account with connection string

### 1. Install Dependencies

#### Frontend (Root directory):
```bash
npm install
```

#### Backend (Server directory):
```bash
cd server
npm install
```

### 2. Running 

You need to run **both** the backend server and the frontend React app:

In one terminal, run
```bash
npm run server
```
Or for development with auto-reload:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

In another terminal start frontend by:
```bash
npm start
```

### 3. Debugging
To check if server's running, you can run:
```bash
curl -s http://localhost:5000/api/health
```