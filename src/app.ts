import express, { Response, Request, NextFunction } from "express";
import cors from "cors";
import routes from "./app/routes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", routes);
app.get("/", (req, res) => {
  res.send("Hello bOok catalog");
});

app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "Route Not Found",
      },
    ],
  });
  next();
});

export default app;
