
To-Do Task Tracker – Full Stack Project Documentation

Overview
--------
The To-Do Task Tracker is a full-stack web application that allows users to manage their daily tasks.
Users can add, edit, delete, and mark tasks as completed. The app provides a user-friendly interface 
with persistent data storage and optional authentication.

Tech Stack
----------
Frontend:
- HTML5 – Page structure
- CSS3 – Styling and layout
- JavaScript – Dynamic behavior and interactivity
- (Optional) React – For component-based frontend

Backend:
- Node.js with Express.js (or Python Flask/Django)
- REST API – For communication between frontend and backend

Database:
- MongoDB (or MySQL/PostgreSQL) – Stores task data persistently

Authentication (Optional):
- JWT / Sessions – For secure user login/logout

Features
--------
- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as complete/incomplete
- Filter tasks (All, Completed, Pending)
- (Optional) User authentication
- Persistent data storage

Folder Structure
----------------
todo-app/
├── client/             # Frontend
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── server/             # Backend
│   ├── server.js
│   ├── routes/
│   └── models/
├── database/           # DB Config
├── README.md

Getting Started
---------------
Prerequisites:
- Node.js & npm (or Python + Flask)
- MongoDB or SQL database

Installation Steps:
1. Clone the repository
2. Install dependencies:
   npm install
3. Start the backend server:
   node server.js
4. Open index.html in your browser

Testing
-------
- Manual UI testing (clicking buttons, task behavior)
- API testing using Postman or Thunder Client
- Form validation for task inputs

Future Enhancements
-------------------
- User registration/login
- Task due dates and reminders
- Drag-and-drop task reordering
- Dark mode / theme toggle
- Mobile responsiveness

Author
------
Rishi Mishra
Developed as a full-stack learning project
