import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import multer from "multer";
import { setTimeout } from "timers/promises";
import NotificationService, { Notification } from "./NotificationService.js";

dotenv.config();

const app: Express = express();
const port: Number = parseInt(process.env.PORT!);

const notificationService: NotificationService = new NotificationService();

app.use(cors());

// for parsing application/json
app.use(express.json());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// for parsing multipart/form-data
app.use(multer().array("file", 10));
app.use(express.static("public"));

app.get("/", (_req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/date", (_req, res) => {
  res.send({
    data: new Date(),
  });
});

app.post("/addNotification", (req: Request, res: Response) => {
  const notification: Notification = req.body;
  res.send(notificationService.addNotification(notification.content));
});

app.get("/notifications", (_req: Request, res: Response) => {
  res.send(notificationService.retrieveAllNotifications());
});

app.post("/email", (req: Request, res: Response) => {
  console.log("data", req.body);
  res.setHeader("Content-Type", "application/json");
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

await setTimeout(2000);
notificationService.addNotification("Hello World");
await setTimeout(100);
notificationService.addNotification("Hello World");
await setTimeout(100);
notificationService.addNotification("Hello World");
await setTimeout(100);
notificationService.addNotification("Hello World");
