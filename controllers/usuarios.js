const { response, request } = require('express');

const usuariosGet = (req, res = response) => {

    const { q, nombre = 'No name', apikey } = req.query;

    res.json({
       msg: 'get API - controlador',
       q,
       nombre,
       apikey
    });
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
       msg: 'put API - controlador',
       id
    });
}

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
       msg: 'post API - controlador',
       nombre,
       edad 
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
       msg: 'patch API - controlador'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
       msg: 'delete API - controlador'
    });
}




module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}
