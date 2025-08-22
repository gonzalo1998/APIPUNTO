const express = require('express');
const cors= require('cors');
const morgan = require('morgan');
const app = express();

const {mongooseConnect} = require('./database');
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));

app.use('/empleados', require('./routes/empleados.routes'));
app.use('/usuarios', require('./routes/usuarios.routes'));
app.use('/eventos', require('./routes/eventos.routes'));

//vamos definir el puerto de escucha
 app.listen(app.get('port'), () => {
    console.log('servidor escuchado:', app.get('port'));
 });
