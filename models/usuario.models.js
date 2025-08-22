const mongoose = require('mongoose'); // Importa mongoose
const {Schema} = mongoose;
const UsuarioSchema = new Schema({

    identificacion: {type: Number, 
        required: [true, 'La identificacion es obligatorio'],
        unique: true,
        trim: true,
       immutable: true // No se puede cambiar una vez creado
},
    nombre: {type: String, 
        required: [true, 'El nombre es obligatorio'],
        trim: true 
    },
    cargo: {type: String,
        required: [true, 'El puesto es obligatorio'],
        trim: true
    },
    dependencia: {type: String, 
        required: [true, 'La oficina es obligatoria'],
        trim: true
    },
    curso: {type: String, 
        required: [true, 'El salario es obligatorio'],
       trim: true
    }
},
  { 
    timestamps: true, // Agrega createdAt y updatedAt
 versionKey: false // Desactiva __v
}
);
module.exports = mongoose.model('Usuario', UsuarioSchema);// exporta el modelo

/*
  
    }*/