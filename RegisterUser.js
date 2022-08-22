import {Router} from 'express'
import User from '../model/User.js'
const router=Router()

router.post("/",async(req,res)=>{
    try {
        const {firstname,lastname,email,password}=req.body
        // console.log(username,password,email)
        const user=await User.findOne({email})
        if(user){
            res.status(200).send({message:'User Exists'})
        }

        const userData=new User({firstname: firstname,lastname: lastname,email: email,password: password})

        await userData.save()
        res.status(200).send('User registered')
    } catch (error) {
        console.log(error)
    }
})

export default router;