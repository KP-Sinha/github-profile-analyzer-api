# GitHub Profile Analyzer API

A backend service built using Node.js, Express.js, and MySQL that analyzes GitHub user profiles using the GitHub Public API and stores profile insights for future retrieval.

## Features

* Analyze GitHub profiles using username
* Fetch data from GitHub Public API
* Store profile insights in MySQL
* Retrieve all analyzed profiles
* Retrieve a single analyzed profile by ID

## Tech Stack

* Node.js
* Express.js
* MySQL
* GitHub Public API

## Installation

1. Clone the repository
2. Run:

npm install

3. Configure `.env`

4. Start the server:

npm run dev

## Environment Variables

PORT=5000

DB_HOST=localhost

DB_USER=root

DB_PASSWORD=

DB_NAME=github_analyzer_db

## API Endpoints

POST /api/analyze-profile

GET /api/profiles

GET /api/profiles/:id

## Author

Kumar Prabal
