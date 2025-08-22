const express = require('express');
const router = express.Router();
const usuarioCtrl = require('../controllers/usuario.controllers');
router.get('/', usuarioCtrl.getUsuarios); // Obtener todos los empleados
router.get('/:identificacion', usuarioCtrl.getUsuario); // Obtener un empleado por ID
router.post('/', usuarioCtrl.createUsuario); // Crear un nuevo empleado
router.put('/:identificacion', usuarioCtrl.updateUsuario); // Actualizar un empleado por ID
router.delete('/:identificacion', usuarioCtrl.eliminarUsuario); // Eliminar un empleado por ID

module.exports = router; // Exportar el router