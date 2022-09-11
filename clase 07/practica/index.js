/** {protocolo}://{hostname}:{puerto}/{ruta del recurso}?{parametros de busqueda}  */

const express = require('express'); 
require('dotenv').config(); 
const PORT = process.env.PORT || 8080; 
const fs = require('fs'); 

// const {products} = require('./data') // Data en archivo.js
const products = JSON.parse(fs.readFileSync('./data.json', 'utf-8')) // Data en archivo.json

const app = express(); 
//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true}))


/** Utilizamos GET para obtener  informacion desde el servidor. La manera de hacerlo con express es*/
app.get('/', (req, res) => res.status(201).json({msg: 'Hola Mundo desde Home page'})); 

/** Con parametros de tipo Query */
app.get('/products', (req, res)=> {
    const {precio = 500} = req.query; // const precio = req.query.precio
    const precioNumber = Number(precio) // Otra opcion +(precio)
    const resProducts = products.filter((product)=> product.precio < precioNumber)
    res.json(resProducts)
}); 

/** Con parametros de tipo Params */
app.get('/products/:id', (req, res)=> {
    const {id} = req.params;  
    const product = products.find((value)=> value.id === +(id))
    res.json(product)
}); 

app.post('/products', (req, res)=>{
    const {nombre, precio, descripcion} = req.body; 
    const nuevoProducto = { id: products.length+1, nombre, precio, descripcion}
    products.push(nuevoProducto)
    fs.writeFileSync('./data.json', JSON.stringify(products, null, 2))
    res.status(200).json({nuevoProducto}); 
})

app.delete('/products/:id', (req, res)=>{
    const {id} = req.params; 
    const index = products.findIndex((value) => value.id === +(id)); 
    if(index < 0 ){
        res.status(400).send(`Producto con id ${id} no existe`)
    }
    const deleteProducto = products.splice(index,1)
    fs.writeFileSync('./data.json', JSON.stringify(products, null, 2))
    res.status(200).json(deleteProducto)
})

const server = app.listen(PORT, ()=> console.log(`Server escuchando en puerto: ${PORT}`)); 
server.on('error', (error)=> console.log(error.message)); 
