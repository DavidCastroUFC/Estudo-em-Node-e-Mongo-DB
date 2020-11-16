const mongoose = require('mongoose');
//Definindo os valores que a entidade 'usuário' terá. 
const postSchema = new mongoose.Schema({
    idUser : {
        type: mongoose.Schema.ObjectId,
        ref : 'users',
        required: true
    },
    text : {
        type: String,
    },
    likes : {
        type: String,   
    }
});
// Registrando o model na aplicação
 mongoose.model('posts', postSchema);