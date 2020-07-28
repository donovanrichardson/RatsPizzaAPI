const Rat = require('../models/Rat')
const Pizza = require('../models/Pizza')

const index = async (req,res)=>{
    try{
        const allRats = await Rat.find({})
        const rats = await allRats.map(async rat =>{
            const za = await Pizza.findById(rat.pizza)
            console.log(rat);
            return {
                _id:rat._id,
                name: rat.name,
                pizza: za
            }
        })
        rats2 = await Promise.all(rats)
        // console.log(rats2);
        res.status(200).json(rats2)
    }catch(err){res.status(400).send(err)}
    
}
const create = async (req,res)=>{
    try{
        const newRat = await Rat.create(req.body)
        res.status(200).json(newRat)
    }catch(err){res.status(400).send(err)}
    
}
const update = async (req, res) => {
    try{
        // console.log(req.params.id, req.body)
        const updatedRat = await Rat.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedRat)
    }
    catch(error){
        res.status(400).send(error)
    }
}
const destroy = async (req, res) => {
    try{
        const deletedRat = await Rat.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedRat)
    }
    catch(error){
        res.status(400).send(error)
    }
}


module.exports = {index, create, update, destroy}
