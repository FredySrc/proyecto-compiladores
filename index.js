import express from 'express';
import homeRouter from './routes/security/home-router.js'
import userRoutes from './routes/security/user-routes.js';

const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", "./views");

app.use("/", homeRouter);
app.use('/auth', userRoutes);

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`✅ [server]: Server is running at localhost:${port}`);
});
