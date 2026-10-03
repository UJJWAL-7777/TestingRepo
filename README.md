# DevPilot Test App

A lightweight Node.js and Express REST API created specifically as a safe, standalone testing repository for the **DevPilot** deployment platform.

## Description

This project serves as an isolated test application for verifying DevPilot deployment capabilities, such as:
- GitHub repository integration
- Branch detection and commit tracking
- Webhook events
- Automated build processes
- Environment variable injection
- Live deployment logs and health checks

It contains no external databases or complex dependencies, keeping the application fast, predictable, and simple to verify.

## Features

- **Health Check**: Endpoint to quickly check application health and availability.
- **Application Information**: Endpoint reporting service name, version, and environment.
- **REST API**: Simple JSON-based REST architecture.
- **Environment Variable Configuration**: Configurable via `.env` file using `dotenv`.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Environment Configuration

Create a `.env` file in the root directory (or copy from `.env.example`):

```bash
PORT=5000
```

## Running the Application

### Development Mode

Run the application with Nodemon for automatic restarts on file changes:

```bash
npm run dev
```

### Production Mode

Run the application normally using Node.js:

```bash
npm start
```

Once running, the server will be accessible at:
```text
http://localhost:5000
```

## API Endpoints

### 1. Root Endpoint

- **Method**: `GET`
- **URL**: `/`
- **Description**: Returns welcome message and API version.
- **Expected Response** (`200 OK`):
  ```json
  {
    "message": "DevPilot Test App is running!",
    "version": "1.0.0"
  }
  ```

### 2. Health Check Endpoint

- **Method**: `GET`
- **URL**: `/api/health`
- **Description**: Verifies that the service is running and healthy.
- **Expected Response** (`200 OK`):
  ```json
  {
    "status": "OK",
    "service": "DevPilot Test App"
  }
  ```

### 3. Application Info Endpoint

- **Method**: `GET`
- **URL**: `/api/info`
- **Description**: Returns metadata regarding service name, version, and environment.
- **Expected Response** (`200 OK`):
  ```json
  {
    "name": "DevPilot Test App",
    "version": "1.0.0",
    "environment": "development"
  }
  ```

### 4. 404 Route Handler

- **Method**: Any (`GET`, `POST`, etc.)
- **URL**: Any undefined route (e.g. `/abc`)
- **Description**: Handles unknown paths gracefully.
- **Expected Response** (`404 Not Found`):
  ```json
  {
    "message": "Route not found"
  }
  ```

## Project Structure

```text
devpilot-test-app/
├── src/
│   └── server.js      # Main Express application entrypoint
├── .env.example       # Example environment variables
├── .gitignore         # Files and folders ignored by Git
├── package.json       # Project metadata and dependencies
└── README.md          # Project documentation
```

## License

ISC
