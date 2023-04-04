const schema = require('../Models/SignUpModel')

 
const loginUser = async(req, res)=>{
    const {email, pass} = req.body;
    const user = await schema.findOne({email:email})
    console.log(user);
    if(!user){
       return res.json({msg:"no user", color:"danger"});
    }
    if(user.pass!=pass){
        return res.json({msg:"wrong password", color:"danger"});
    }
    if(user.pass===pass){
        username = user.username;
        console.log(username);
        return res.status(200).json({msg:"user found",username:user.username, color:"danger"});

    }
}

const createUser = async(req, res)=>{
    try {
        const user = await schema.create(req.body)
        console.log("user created");
    } catch (error) { 
        console.log(error);
        res.status(400).json({msg:"Error Occured", color:"danger"})
    }
    res.status(201).json({msg:"Account created",color:"success"})
    

}

module.exports = {loginUser,createUser} 