import express from 'express';
import bodyParser from 'body-parser';
import homeRouter from './routes/security/home-router.js';
import userRoutes from './routes/security/user-routes.js';
import directoryRoutes from './routes/security/directory-routes.js';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set("view engine", "pug");
app.set("views", "./views");

app.use("/", homeRouter);
app.use('/auth', userRoutes);
app.use('/directory', directoryRoutes);


app.use(express.static("public"));


app.listen(port, () => {
    console.log(`✅ [server]: Server is running at localhost:${port}`);
});
