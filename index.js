// index.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './config/routes.js';

const app = express();

const corsOptions = {
    origin: '*' // O cambia esto por tu dominio específico
};

// Configuración del middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

// Rutas
app.use('/api', routes);

// Ruta de prueba para el índice
app.get('/', (req, res) => res.send('Bienvenidos a mi API :D'));

// Inicio del servidor
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
});

export default app;