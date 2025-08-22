const express = require('express');
const router = express.Router();
const eventoCtrl = require('../controllers/evento.controllers');
router.get('/', eventoCtrl.getEventos); // Obtener todos los eventos
router.get('/:codigo', eventoCtrl.getEvento); // Obtener un evento por CODIGO
router.post('/', eventoCtrl.createEvento); // Crear un nuevo evento
router.put('/:codigo', eventoCtrl.updateEvento); // Actualizar un evento por CODIGO
router.delete('/:codigo', eventoCtrl.eliminarEvento); // Eliminar un evento por CODIGO

module.exports = router; // Exportar el router