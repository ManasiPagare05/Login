import express from 'express';
import { Router } from 'express';

const router=Router()

router.get('/',(req,res)=>{
    try {
        res.status(200).send({message:'Successful'})
    } catch (error) {
        console.log(error)
    }
})