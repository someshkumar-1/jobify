import "express-async-errors";
import express from "express";
import dotenv from "dotenv";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandleMiddleware from "./middleware/error-handle.js";
import authRouter from "./routes/authRoute.js";
import jobRouter from "./routes/jobRoute.js";
import connectDb from "./db/connect.js";
import cors from "cors";
import morgan from "morgan";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("welcome to jobify");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/job", jobRouter);

app.use(notFoundMiddleware);
app.use(errorHandleMiddleware);

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server in running at port  ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
