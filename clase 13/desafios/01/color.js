 class Color {
	constructor() {
		this.colorRGB = `${this.randomColor()}, ${this.randomColor()}, ${this.randomColor()}`;
	}
	randomColor = () => Math.floor(Math.random() * 255);
}

const color = new Color();
console.log(color.colorRGB);