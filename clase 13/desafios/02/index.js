var Color = /** @class */ (function () {
    function Color() {
        var _this = this;
        this.colorRGB = '';
        this.randomColor = function () { return Math.floor(Math.random() * 255); };
        this.getColor = function () { return _this.colorRGB; };
        this.colorRGB = "".concat(this.randomColor(), ", ").concat(this.randomColor(), ", ").concat(this.randomColor());
    }
    return Color;
}());
var color = new Color();
console.log(color.getColor());
