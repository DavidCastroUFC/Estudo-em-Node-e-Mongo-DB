const mongoose = require("mongoose");
const User = mongoose.model("users"); 
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passToken = require("./auth.json");
module.exports = {
   async logar( request, response){
        let user = await User.findOne({ email : request.body.email }).exec().then(login).catch(fail);
        
        function login(user){  
            if(!bcrypt.compareSync(request.body.password, user.password)){
                return  response.status(401).json("User not found or password incorretly!");
            }
            else{
                const token = jwt.sign({email: user.email}, passToken.senha ,{expiresIn: 86400,});
                console.log(token);
                return  response.status(200).json({user,token});
            }
        }
        function fail(){
            return  response.status(401).json("entrou no catch");
           
        }
    },

};