const express = require('express');
const cors = require('cors');

class Server {

    constructor () {
        this.app  = express();
        this.port =  process.env.PORT;
        this.usuarioRoutePath = '/api/usuarios';

        //middlewares
        this.middlewares();
        // rutas de mi aplicacion
        this.routes();
    }

    middlewares() {

        // cors
        this.app.use( cors() );

        //Lectura y parseo del body
        this.app.use( express.json() );

        //Directorio puplico
        this.app.use( express.static('public') );
    }

    routes() {
        
        this.app.use(this.usuarioRoutePath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriedo en el puerto', this.port );
        });
    }

}





module.exports = Server;




