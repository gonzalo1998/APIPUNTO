const Usuario= require('../models/usuario.models'); // Importa el modelo Usuario
const usuarioCtrl= {};
// definir los metodos
// metodo para obtener todos los usuarios
usuarioCtrl.getUsuarios = async (req, res) => {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    };

// metodo para obtener un usuario por id
usuarioCtrl.getUsuario= async (req, res) => {
   
    const usuario = await Usuario.findOne({ identificacion: req.params.identificacion });
    //const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(usuario);
}
// metodo para crear un nuevo usuario
usuarioCtrl.createUsuario = async (req, res) => {
    const usuario =new Usuario(req.body);
    await usuario.save();
    res.json({status: 'Usuario creado'});
}
// metodo de actualziar un usuario
usuarioCtrl.updateUsuario = async (req, res) => {
    const {identificacion} =req.params;
    const usuario = {
        identificacion: req.body.codigo,
        nombre: req.body.nombre,
        cargo: req.body.cargo,
        dependencia: req.body.dependencia,
        curso: req.body.curso
    };
    await Usuario.findOneAndUpdate({ identificacion: identificacion }, { $set: usuario }, { new: true });
//await Usuario.findByIdAndUpdate(id, {$set: usuario},{new:true});
res.json({status: 'Usuario actualizado'});
}
//metodo para eliminar un usuario
usuarioCtrl.eliminarUsuario = async (req, res) => {
    await Usuario.deleteOne({identificacion: req.params.identificacion});
    res.json({status: 'usuario eliminado con exito'})
}
// Exportar el controlador
 module.exports= usuarioCtrl;