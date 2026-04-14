import express from 'express';
import cors from 'cors';
import coordinateRouter from './routes/coordinate.routes.js';
import imageRouter from './routes/image.routes.js';
import userRouter from './routes/user.routes.js';
import sequelize from './config/database.js';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_req, res) => {
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