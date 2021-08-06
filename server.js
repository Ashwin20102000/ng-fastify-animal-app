const fastify = require('fastify')({logger:true})
const port = 8000
fastify.register(require('fastify-cors'),{
    origin:'*'
})
let animals = [{
    id:"1",
    name:"Lion",
    count:4
}]
fastify.get('/alive',async(req,res)=>{
    return { serveDate :new Date() }
})
fastify.get('/animals',async(req,res)=>{
    return {animals}
})
fastify.post('/animals',async(req,res)=>{
    let animal = [...animals,req.body.animal]
    return {animal}
})
fastify.patch('/animals:id',async(req,res)=>{
    const idx = animals.findIndex(i=>i===req.params.id)
    animals[idx] = req.body.animal
    return {animals}
})
fastify.delete('/animals:id',async(req,res)=>{
    let animal = animals.filter(i=>i!==req.params.id)
    return {animals}
})
const start = async()=>{
    try{
        await fastify.listen(port)
    }
    catch(error){
        fastify.log.error(error)
        process.exit(1)
    }
}
start()
