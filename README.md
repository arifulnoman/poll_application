# Poll Application

This is a basic poll application built with Node.js, Express.js, and MongoDB, using EJS as the template engine. This project allows users to create polls, vote on them, and view poll results.

## Features

- Create new polls
- Vote on existing polls
- View poll results
- List all polls

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS (Embedded JavaScript)
- Morgan (HTTP request logger middleware for Node.js)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)
- MongoDB

## Project Structure

- `app.js`: The entry point of the application.
- `pollController.js`: Contains the logic for creating polls, voting, and viewing poll results.
- `views/`: Contains the EJS templates for rendering the frontend.

## Routes

- `GET /`: Home page.
- `GET /create`: Render the form to create a new poll.
- `POST /create`: Handle the form submission to create a new poll.
- `GET /polls/:id`: View a specific poll and its options.
- `POST /polls/:id`: Submit a vote for a specific poll.
- `GET /polls`: List all polls.

## Snapshots

### Create Poll Page
![Create Poll Page](https://github.com/arifulnoman/poll_application/blob/main/snap_shots/create.JPG)

### All Polls
![All Polls](https://github.com/arifulnoman/poll_application/blob/main/snap_shots/polls.JPG)

### Poll Results Page
![Poll Results Page](https://github.com/arifulnoman/poll_application/blob/main/snap_shots/poll_result.JPG)
