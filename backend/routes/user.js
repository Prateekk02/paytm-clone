const express = require("express");
const zod = require("zod");
const jwt = require('jsonwebtoken');
const { jwtSecret } = require("../config");
const { User, Account } = require("../db");
const { authMiddleware } = require("../middleware");

const router = express.Router();

const signUpBody = zod.object({
    username : zod.string(),
    firstName : zod.string(),
    lastName  : zod.string(),
    password : zod.string(),
});


router.post('/signup', async (req,res) =>{
    console.log("Hit Signup route");
    const userInput = req.body;
    const response = signUpBody.safeParse(userInput)
    if(!response.success){
        return res.status(411).json({
            message: "Invalid Input"
        });
    }
    console.log("Passed Zod Verification");
    const existingUser = await User.findOne({
        username: req.body.username,
    }) 
    if(existingUser){
        return res.status(411).json({
            message: "User already exists",
        })
    }
    console.log("Checked for already existing user");
    const {username, firstName,lastName,password} = response.data;
    try{
        console.log("In Try block")
        const user = await User.create({
            username: username,
            firstName: firstName,
            lastName: lastName,
            password: password,
        });
        const userId = user._id;

        console.log("Allocating Balance");
        await Account.create({
            userId,
            balance: 1 + Math.random() * 10000,
        })
        console.log("getting jwt token")
        const token = jwt.sign({
            userId,
        },jwtSecret);
        console.log("Obtained jwt token")
        res.json({
            message: "User created successfully",
            token: token,
        });
       
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            message: "Internal Sever Error."
        });
    }    
});

const signInBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
});

router.post('/signin', async (req,res)=>{
    console.log("Inside signin");
    const { success, data } = signInBody.safeParse(req.body);
    console.log(success)
    if (!success) {
        return res.status(411).json({
            message: "Error while Logging in",
        });
    }

    const { username, password } = data;
    console.log(`This is username: {username}`) 
    try{
        const user = await User.findOne({
            username : username,
            password : password,
        });
    
        if(user){
            const token = jwt.sign({
                userId: user._id,
            },jwtSecret);
    
            res.json({
                token: token
            })
    
            return ;
        }
    
        res.status(411).json({
            message: "Error while Logging in. yup"
        })
    }
    catch(error){
        console.error(error)
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
});

const updateBody = zod.object({
    password: zod.string().optional(), 
    firstName: zod.string().optional(), 
    lastName: zod.string().optional(),
});

router.put('/', authMiddleware, async(req , res)=>{
    const { success } = updateBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Invalid Input.",
        })
    }

    try{
        await User.updateOne(req.body, {
            _id:req.userId,
        })

        res.json({
            message: "Updated Successfully",
        })
    }
    catch(error){
        console.error(error)
        return res.json({
            message: "Internal Server Error",
        })
    }
});

router.get('/get', async(req,res) =>{
    const filter = req.query.filter || "";

    const user = await User.find({
        $or:[{
            firstName:{
                $regex:filter,
            }            
        },{
            lastName:{
                $regex:filter,
            }
        }]
    })

    res.json({
        user:user.map(user =>({
            username: user.username,
            firstName : user.firstName,
            lastName: user.lastName,
            _id:user._id,
        }))
    })
});





module.exports = router;