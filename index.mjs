import { sayHi } from "./hi.mjs";
import express from "express";

console.log(sayHi("Akash"));
const app = express();
app.get("/", (req, res) => {
    res.json(sayHi("Akash"));
});

const port = 3131;

app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
});