const schema = require('../Models/SignUpModel')

 
const loginUser = async(req, res)=>{
    const {email, pass} = req.body;
    const user = await schema.findOne({email:email})
    // console.log(user);
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

const addCourse = async(req, res)=>{
    const {username,cid,level,coursename,score,completed,attempted} = req.body;
    try {   
        // const user = await schema.findOneAndUpdate({username:username},{$push:{tests:{cid,coursename,level,score,completed,attempted}}})
        // if(!user){
        //     return res.status(404).json({"msg":"Error occured"})
        // }
        // user.tests.push(req.body)
        console.log(req.body);
        console.log(typeof score);
        await schema.findOneAndUpdate({username:username},{
            $push:{
                tests:{cid,coursename,level,score,completed,attempted}
            }
        })
    } catch (error) {
         
    }
}
module.exports = {loginUser,createUser, addCourse} 