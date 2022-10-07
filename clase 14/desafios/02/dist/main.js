(()=>{"use strict";var e={287:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e,t,r){this.alto=e,this.ancho=t,this.radio=r}perimetroCuadrado(){let e=2*(this.alto+this.ancho);return`El perimetro de un cuadrado de ${this.alto} de alto y ${this.ancho} de ancho es ${e} `}perimetroRectangulo(){let e=2*(this.alto+this.ancho);return`El perimetro de un rectangulo de ${this.alto} de alto y ${this.ancho} de ancho es ${e} `}perimetroCirculo(){let e=3.14*this.radio*2;return`El perimetro de un circulo de ${this.radio} es ${e}`}}},419:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e,t,r){this.base=e,this.altura=t,this.radio=r}superficieCuadrado(){let e=this.base**2;return`La superficie de un cuadrado de ${this.base} de lado es: ${e} `}superficieRectangulo(){let e=this.base*this.altura;return`La superficie de un rectangulo de ${this.base} de base y ${this.altura} de altura es: ${e} `}superficieCirculo(){let e=3.14*this.radio**2;return`La superficie de un circulo de ${this.radio} de radio es: ${e} `}}},728:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(r(860)),o=a(r(287)),s=a(r(419)),u=new o.default(2,2,0),l=new o.default(2,3,0),d=new o.default(0,0,6),c=new s.default(2,2,0),n=new s.default(2,3,0),p=new s.default(0,0,6),h=(0,i.default)();h.get("/",((e,t)=>t.send("Ingrese a las rutas /perimetros o /superficies para ver los resultados"))),h.get("/perimetros",((e,t)=>{t.send({Perimetro_Cuadrado:{detalle:u.perimetroCuadrado()},Perimetro_Rectangulo:{detalle:l.perimetroRectangulo()},Perimetro_Circulo:{detalle:d.perimetroCirculo()}})})),h.get("/superficies",((e,t)=>{t.send({Superficie_Cuadrado:{detalle:c.superficieCuadrado()},Superficie_Rectangulo:{detalle:n.superficieRectangulo()},Superficie_Circulo:{detalle:p.superficieCirculo()}})})),h.listen(8080,(()=>console.log("conectado al puerto: 8080")))},860:e=>{e.exports=require("express")}},t={};!function r(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,r),o.exports}(728)})();