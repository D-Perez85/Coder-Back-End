export default class Perimetro {
  private alto: number;
  private ancho: number;
  private radio: number;
  this: any;

  constructor(alto: number, ancho: number, radio: number) {
    this.alto = alto;
    this.ancho = ancho;
    this.radio = radio;
  }

  perimetroCuadrado(): string {
    let calculo = 2 * (this.alto + this.ancho);
    return `El perimetro de un cuadrado de ${this.alto} de alto y ${this.ancho} de ancho es ${calculo} `;
  }

  perimetroRectangulo(): string {
    let calculo = 2 * (this.alto + this.ancho);
    return `El perimetro de un rectangulo de ${this.alto} de alto y ${this.ancho} de ancho es ${calculo} `;
  }

  perimetroCirculo(): string {
    let calculo = 2 * (3.14 * this.radio);
    return `El perimetro de un circulo de ${this.radio} es ${calculo}`;
  }
}
