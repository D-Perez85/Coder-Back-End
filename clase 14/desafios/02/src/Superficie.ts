export default class Superficie {
  private base: number;
  private altura: number;
  private radio: number;

  constructor(base: number, altura: number, radio: number) {
    this.base = base;
    this.altura = altura;
    this.radio = radio;
  }

  superficieCuadrado(): string {
    let calculo = this.base ** 2;
    return `La superficie de un cuadrado de ${this.base} de lado es: ${calculo} `;
  }

  superficieRectangulo(): string {
    let calculo = this.base * this.altura;
    return `La superficie de un rectangulo de ${this.base} de base y ${this.altura} de altura es: ${calculo} `;
  }
  superficieCirculo(): string {
    let calculo = 3.14 * this.radio ** 2;
    return `La superficie de un circulo de ${this.radio} de radio es: ${calculo} `;
  }
}
