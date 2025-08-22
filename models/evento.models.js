const mongoose = require('mongoose'); // Importa mongoose
const {Schema} = mongoose;
const EventoSchema = new Schema({

    codigo: {type: Number, 
        required: [true, 'El código es obligatorio'],
        unique: true,
        trim: true,
        immutable: true // No se puede cambiar una vez creado
},
    nombre_evento: {type: String, 
        required: [true, 'El nombre del evento es obligatorio'],
        trim: true 
    },
    descripcion: {type: String,
        required: [true, 'El puesto es obligatorio'],
        trim: true
    },
    fecha_inicio: {type: String, 
        required: [true, 'La fecha es obligatoria'],
        trim: true
    },
    fecha_final: {type: String, 
        required: [true, 'El salario es obligatorio'],
        trim: true
    }
},
  { 
    timestamps: true, // Agrega createdAt y updatedAt
 versionKey: false // Desactiva __v
}
);
module.exports = mongoose.model('Evento', EventoSchema);// exporta el modelo