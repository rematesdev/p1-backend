import express from "express";
import "dotenv/config";
import todoRoute from "./routes/todo.routes.js";

const app = express();

app.use(express.json());

app.use('/api/todos', todoRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server started on port "+PORT);
});