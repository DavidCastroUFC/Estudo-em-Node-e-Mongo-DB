const mongoose = require('mongoose');
//Definindo os valores que a entidade 'usuário' terá. 
const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    title : {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
// Registrando o model na aplicação
 mongoose.model('users', userSchema);