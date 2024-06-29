import express from 'express';
import userRouter from "../src/routes/user"
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/user",userRouter);

app.listen(4000)