MERN Contact Management App

This is a simple Contact Management application built using the MERN stack as part of a web developer interview task.

The app allows users to add contacts using a form and view all saved contacts without page reload. Users can also delete contacts, see success messages, and sort the contact list. The UI is fully responsive and works well on both mobile and desktop devices.

Tech Used

React (Vite)

Tailwind CSS

Framer Motion

React Icons

Node.js

Express.js

MongoDB

How to Run

Backend

cd backend
npm install
npx nodemon server.js


Frontend

cd frontend
npm install
npm run dev


Backend runs on  https://web-dev-task-4gz0.onrender.com
Frontend runs on https://web-dev-task-1-cgl3.onrender.com
API Endpoints

POST /api/contacts – Add contact

GET /api/contacts – Get contacts

DELETE /api/contacts/:id – Delete contact
