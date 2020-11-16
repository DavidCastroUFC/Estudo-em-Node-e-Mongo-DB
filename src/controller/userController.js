const mongoose = require('mongoose');

const Users = mongoose.model('users'); 
const bcrypt = require('bcrypt');
module.exports = {
    async listar( request, response){
        const user = await Users.find();
        return response.json(user);
    },
    async pesquisar( request, response){
        const user = await Users.findById(request.params.id);
        return response.json(user);
    },
    async criar( request, response){
        const user = {
            name :request.body.name,
            title :request.body.title,
            email :request.body.email,
            password : bcrypt.hashSync(request.body.password,10)
        };
        Users.create(user);
        
        return response.json(user);
    },
    async atualizar( request, response){
        const user = await Users.findByIdAndUpdate(request.params.id,request.body, {new: true} );
        return response.json(user);
    },
    async deletar( request, response){
        const user = await Users.findByIdAndDelete(request.params.id);
        return response.send('');
    },
    
};