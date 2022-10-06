
class Color {
    private colorRGB: string = '';

    constructor() {
        this.colorRGB = `${this.randomColor()}, ${this.randomColor()}, ${this.randomColor()}`;
    }
    randomColor = (): number => Math.floor(Math.random() * 255);
    getColor = (): string => this.colorRGB;
}

const color = new Color();
console.log(color.getColor());
