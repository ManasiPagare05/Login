import {Router} from 'express'
import User from '../model/User.js'

const router=Router()

router.post("/",async(req,res)=>{
    try {
        const {username,password}=req.body
        // console.log(username,password)
       
        res.status(200).send({message:'Login Successful'})
    } catch (error) {
        console.log(error)
    }
})

export default router;
