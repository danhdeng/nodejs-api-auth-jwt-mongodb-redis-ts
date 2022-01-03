import express, { Application } from 'express';
import mongoose from 'mongoose';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import Controller from '@/utils/interfaces/controller.interface';
import errorMiddleware from '@/middleware/error.middleware';
import helmet from 'helmet';
// import errorMiddleware from './middleware/error.middleware';
class App {
    public express: Application;
    public port: number;

    constructor(controllers: Controller[], port: number) {
        this.express = express();
        this.port = port;
        this.initializeDatabaseConnection();
        this.initializeMiddleware();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
    }

    //set up the mongodb connection
    private initializeDatabaseConnection = (): void => {
        const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;
        const mongoUrl = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${process.env.MONGO_PATH}`;
        console.log(mongoUrl);
        mongoose
            .connect(mongoUrl)
            .then(() => {
                console.log(
                    'Connected to Distribution API Database - Initial Connection'
                );
            })
            .catch((err) => {
                console.log(
                    `Initial Distribution API Database connection error occured -`,
                    err
                );
            });
    };

    //initialize all the middleware functions for the express server
    private initializeMiddleware = (): void => {
        this.express.use(helmet());
        this.express.use(cors());
        this.express.use(morgan('dev'));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
        this.express.use(compression());
    };

    //initialize all the routes for the express server
    private initializeControllers = (controllers: Controller[]): void => {
        controllers.forEach((controller: Controller) => {
            this.express.use('/api', controller.router);
        });
    };

    //add error handling middleware to express server
    private initializeErrorHandling = (): void => {
        this.express.use(errorMiddleware);
    };

    public listen(): void {
        this.express.listen(this.port, () => {
            console.log(`App is listening on port ${this.port}`);
        });
    }
}

export default App;
