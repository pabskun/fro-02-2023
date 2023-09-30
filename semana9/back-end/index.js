const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

app.use(cors({
    origin: '*',
    methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    allowedHeaders: 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization',
    credentials: true
}));

const listaPersonas = [
    { nombre: "Juan", apellido: "Pérez", edad: 30 },
    { nombre: "María", apellido: "González", edad: 25 },
    { nombre: "Pedro", apellido: "López", edad: 20 }
];

//localhost:3000/obtener-personas
app.get("/obtener-personas", (req, res)=>{
    res.send(listaPersonas);
});

app.listen(3000, ()=>{
    console.log("El servidor está iniciado en el puerto 3000");
});