import coordinateRouter from './routes/coordinate.routes';
import imageRouter from './routes/image.routes';
import userRouter from './routes/user.routes';
import sequelize from './config/database';
import express, { Request, Response} from 'express';
import cors from 'cors';
import session from 'express-session';

const app = express();
app.use(session({
  secret: "mySecretKey",
  resave: false,
  saveUninitialized: false, // Only save sessions with initialized data
  cookie: {
    maxAge: 5 * 60_000,         // 5-minute session expiry
  },
}));
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello, TypeScript with Node.js!');
});

app.use("/api/coordinates", coordinateRouter);
app.use("/api/images", imageRouter);
app.use("/api/users", userRouter);

sequelize.sync({ alter: true })
  .then(() => console.log("Database connected"))
  .catch(err => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});