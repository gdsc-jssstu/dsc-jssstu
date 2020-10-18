## About the app

Lorem ipsum

## How to run the Server

1. In your terminal, navigate to the `server` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app.

## How to run the Client (React)

1. In another terminal, navigate to the `client` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app

## Check if they are connected

1. With the two apps running, open your browser in http://localhost:3000/.
2. If you see a webpage saying `Welcome to React`, it means the FrontEnd is working.
3. If the same webpage has the phrase `Server is working properly`, it means the API is working.
4. Enjoy!

## How to set-up DB for development
Method 1: We have a docker compose yml file in the server dir. Just perform a `docker-compose up`
from the server subdirectory and you should have a db ready to go
Method 2: Run a local mysql instance with creds in discord

## Api endpoints
```
POST /api/auth/register  : User registeration               : (implemented)
POST /api/auth/login     : Return JWT for valid user        : (implemented)
GET  /api/events         : no auth, return all events
GET  /api/events/:id     : no auth, return event by id
POST /api/events         : auth, add new event
GET  /api/projects       : no auth, return all projects
GET  /api/projects/:id   : no auth, return project by id
POST /api/projects       : auth, add new project
```

## Adding authenticated routes in backend
For easy maintainence, I've written a small middlewhere for all routes that require auth
in `/server/routes/auth/authRoute.js`. So if you were to make a auth route, all you have
to do is
```
const authRoute = require(<path to authRoute.js>);
const router = ... (usual express stuff)

router.get('<end point>', authRoute, (req, res) => {

});

module.exports = router;
```
