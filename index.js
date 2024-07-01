import express, { Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import routes from './config/routes.js';

const app = express();

const corsOptions = {
    origin: 'https://miappenreact-production.up.railway.app/' // Cambia esto por el dominio de tu aplicación
};

// Configuración del middleware
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', cors(corsOptions), routes);

app.get('/', (req, res) => res.send('Bienvenidos a mi API :D'));

const server = app.listen(process.env.PORT || 8000, () => {
    console.log(`Servidor corriendo en el puerto: ${server.address().port}`);
});

export default app;