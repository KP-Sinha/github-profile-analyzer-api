# GitHub Profile Analyzer API

A backend service built using Node.js, Express.js, MySQL, and GitHub Public API to analyze GitHub user profiles and store insights.

## Features

- Fetch GitHub user profile data
- Store profile insights in MySQL
- Retrieve all analyzed profiles
- Retrieve a single analyzed profile
- Stores:
  - Public Repositories
  - Followers
  - Following
  - Profile URL
  - Account Creation Date
  - Analysis Timestamp

## Tech Stack

- Node.js
- Express.js
- MySQL
- GitHub Public API

## Project Structure

```
github-profile-analyzer-api
│
├── config
│   └── db.js
│
├── controllers
│   └── profileController.js
│
├── routes
│   └── profileRoutes.js
│
├── .env
├── .gitignore
├── README.md
├── package.json
├── server.js
└── postman_collection.json
```

## Installation

Clone repository:

```bash
git clone <repository-url>
cd github-profile-analyzer-api
```

Install dependencies:

```bash
npm install
```

Create .env file:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=github_analyzer_db
```

Start server:

```bash
npm run dev
```

## Database

```sql
CREATE DATABASE github_analyzer_db;

USE github_analyzer_db;

CREATE TABLE github_profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    github_username VARCHAR(255) UNIQUE,
    name VARCHAR(255),
    public_repos INT,
    followers INT,
    following INT,
    profile_url VARCHAR(500),
    account_created DATE,
    analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints

### Analyze GitHub Profile

POST

```http
/api/analyze-profile
```

Request Body:

```json
{
  "username": "torvalds"
}
```

### Get All Profiles

GET

```http
/api/profiles
```

### Get Single Profile

GET

```http
/api/profiles/:id
```

## Postman Collection

The Postman collection is included as:

```text
postman_collection.json
```

## Author

Kumar Prabal