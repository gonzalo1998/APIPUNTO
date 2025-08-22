const Evento= require('../models/evento.models'); // Importa el modelo evento
const eventoCtrl= {};
// definir los metodos
// metodo para obtener todos los eventos
eventoCtrl.getEventos = async (req, res) => {
        const eventos = await Evento.find();
        res.json(eventos);
    };

// metodo para obtener un evento por codigo
eventoCtrl.getEvento= async (req, res) => {
   
    const evento = await Evento.findOne({ codigo: req.params.codigo });
    //const usuario = await Usuario.findById(req.params.id);
    if (!evento) {
        return res.status(404).json({ message: 'Evento no encontrado' });
    }
    res.json(evento);
}
// metodo para crear un nuevo evento
eventoCtrl.createEvento = async (req, res) => {
    const evento =new Evento(req.body);
    await evento.save();
    res.json({status: 'Evento creado'});
}
// metodo de actualziar un evento
eventoCtrl.updateEvento = async (req, res) => {
    const {codigo} =req.params;
    const evento = {
        codigo: req.body.codigo,
        nombre_evento: req.body.nombre_evento,
        descripcion: req.body.descripcion,
        fecha_inicio: req.body.fecha_inicio,
        fecha_final: req.body.fecha_final
    };
    await Evento.findOneAndUpdate({ codigo: codigo }, { $set: evento }, { new: true });
//await Usuario.findByIdAndUpdate(id, {$set: usuario},{new:true});
res.json({status: 'Evento actualizado'});
}
//metodo para eliminar un evento
eventoCtrl.eliminarEvento = async (req, res) => {
    await Evento.deleteOne({codigo: req.params.codigo});
    res.json({status: 'evento eliminado con exito'})
}
// Exportar el controlador
 module.exports= eventoCtrl;