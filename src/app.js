const express = require("express");

const app = express();
app.use(express.json());
const movieControllers = require("./controllers/movieControllers");
const validateMovie = require("./middlewares/validateMovie");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.post("/api/movies",validateMovie, movieControllers.postMovie);
app.put("/api/movies/:id", validateMovie, movieControllers.updateMovie);
const userControllers = require("./controllers/userControllers");
const validateUser = require("./middlewares/validateUser");
app.get("/api/users", userControllers.getUsers);

app.get("/api/users/:id", userControllers.getUserById);
app.post("/api/users",validateUser, userControllers.getUsers);
app.put("/api/users/:id",validateUser, userControllers.updateUser);

module.exports = app;
