//este archivo va a ejecutar toda la aplicacion
//carpeta public van todo los Recursos de la app (css, img, fuentes, bootstrap)
//carpeta views van todas las vistas del usuario

const express = require('express'),
        app = express(),
        path = require('path'); //Path es un modulo de NodeJS
        cookieParser = require('cookie-parser'),
        cookieSession = require('cookie-session');

    //Middleware que nos permita ubicar los archivos de la carpeta public
    app.use(express.static(path.join(__dirname,'/public')));
    //Middleware de cookies que nos lleva conteo de visitas al site
    app.use(cookieParser());
    app.use(cookieSession({secret: "Conteo de visitas del usuario a index"}));

    //Ahora crearemos las rutas de nuestra aplicacion
    app.route('/').get((peticion, respuesta)=>{
        peticion.session.visitas || (peticion.session.visitas = 0);
        let cookie = peticion.session.visitas++
        console.log("# de ingreso de sesiones:" + cookie);
        respuesta.sendFile(`${__dirname}/views/index.html`);
    });

    app.route('/autoayuda').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/autoayuda.html`);
    });

    app.route('/universal').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/universal.html`);
    });

    app.route('/nomatch').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/nomatch.html`);
    });

    app.route('/a1').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/a1.html`);
    });

    app.route('/a2').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/a2.html`);
    });

    app.route('/a3').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/a3.html`);
    });

    app.route('/a4').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/a4.html`);
    });

    app.route('/u1').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/u1.html`);
    });

    app.route('/u2').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/u2.html`);
    });

    app.route('/u3').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/u3.html`);
    });

    app.route('/u4').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/u4.html`);
    });

    app.route('/busquedaTitulo/?').get((peticion, respuesta)=>{
        //Validar si los campos de la busqueda estan vacios.
        //sino validar si el txt ingresado coinciden con algun libro.
        if(peticion.query.busquedaTitulo !== ''){
            if(peticion.query.busquedaTitulo == 'a1'){            
                respuesta.sendFile(`${__dirname}/views/a1.html`);
            } else if(peticion.query.busquedaTitulo == 'a2'){
                respuesta.sendFile(`${__dirname}/views/a2.html`);
            } else if(peticion.query.busquedaTitulo == 'a3'){
                respuesta.sendFile(`${__dirname}/views/a3.html`);
            } else if(peticion.query.busquedaTitulo == 'a4'){
                respuesta.sendFile(`${__dirname}/views/a4.html`);
            } else if(peticion.query.busquedaTitulo == 'u1'){
                respuesta.sendFile(`${__dirname}/views/u1.html`);
            } else if(peticion.query.busquedaTitulo == 'u2'){
                respuesta.sendFile(`${__dirname}/views/u2.html`);
            } else if(peticion.query.busquedaTitulo == 'u3'){
                respuesta.sendFile(`${__dirname}/views/u3.html`);
            } else if(peticion.query.busquedaTitulo == 'u4'){
                respuesta.sendFile(`${__dirname}/views/u4.html`);    
            } else{
                respuesta.sendFile(`${__dirname}/views/noMatch.html`);
            }
        } else{
            respuesta.sendFile(`${__dirname} ${$('.alert').alert('Campo vacio, intente de nuevo.')}`);
        }
    });

    app.listen(8080);
    console.log('Conexion Exitosa con el Servidor!');
