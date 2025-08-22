const mongoose = require('mongoose');
const DB= 'mongodb+srv://roldangonzalo9:h0R4c5FwHHOsxerR@cluster0.ppu7atx.mongodb.net/PUNTO?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(DB)
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.error(err));

    module.exports = mongoose;
