import express from "express";
import Perimetro from "./Perimetro";  //Suma de todos los lados
import Superficie from "./Superficie"; // Base * Altura

//Instancias Perimetro
const cuadrado = new Perimetro(2,2,0); 
const rectangulo = new Perimetro(2,3,0); 
const circulo = new Perimetro(0,0,6);
//Instancias Supercicie
const cuadrado2 = new Superficie(2,2,0); 
const rectangulo2 = new Superficie(2,3,0); 
const circulo2 = new Superficie(0,0,6)


const app = express();
const PORT = 8080;

//endpoints
app.get("/", (req, res) => res.send(`Ingrese a las rutas /perimetros o /superficies para ver los resultados`)); 

app.get("/perimetros", (req, res) => {
    res.send({
      Perimetro_Cuadrado : {detalle: cuadrado.perimetroCuadrado()},
      Perimetro_Rectangulo : {detalle: rectangulo.perimetroRectangulo()},
      Perimetro_Circulo: {detalle: circulo.perimetroCirculo()} 
    });
   }); 

   app.get("/superficies", (req, res) => {
    res.send({
     Superficie_Cuadrado : {detalle: cuadrado2.superficieCuadrado()},
     Superficie_Rectangulo : {detalle: rectangulo2.superficieRectangulo()},
     Superficie_Circulo : {detalle: circulo2.superficieCirculo()},
    });
   }); 
//listen
app.listen(PORT, () =>  console.log(`conectado al puerto: ${PORT}`));


