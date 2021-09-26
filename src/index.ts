import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

const app = express();


// 動態選擇環境變數的檔案
dotenv.config({ path: path.resolve(__dirname, `./environments/${ process.env.NODE_ENV }.env`) });

app.get('/', (req, res, next) => {
    res.send('Hello, World!!');
});

// import appRoute from './app/app.routing';
import loremController from './app/controllers/lorem.controller';

// app.use('/', appRoute);

app.use('/', loremController);

app.get('/*', (req, res, next) => {
    res.send('Not Found!!');
});

app.listen(process.env.PORT, () => console.log(`http server is running at port ${ process.env.PORT }.`));