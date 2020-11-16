const mongoose = require('mongoose');

const Posts = mongoose.model('posts'); 

module.exports = {
    async criar( request, response){
        const post = await Posts.create(request.body);
        return response.json(post);
    },
    async listar( request, response){
        const post = await Posts.find();
        return response.json(post);
    },
    async pesquisarporusuario( request, response){
        const {id} = request.params;
        const post = await Posts.find({"idUser":id});
        return response.json(post);
    },
    async mostrarpost( request, response){
        const {id} = request.params;
        const post = await Posts.find({"_id":id});
        return response.json(post);
    },
    async atualizar( request, response){
        const post = await Posts.findByIdAndUpdate(request.params.id,request.body, {new: true} );
        return response.json(post);
    },
    async deletar( request, response){
        const post = await Posts.findByIdAndDelete(request.params.id);
        return response.send('');
    },
    
};