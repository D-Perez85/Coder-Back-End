class ProductosApi {
    constructor() {
      this.productos = [];
    }
    static idCount = 0;
  
    listarTodos() {
      return [...this.productos];
    };
  
    guardar(producto) {
      const { title, price, thumbnail} = producto;

      if (!title || !price || !thumbnail) return {
        error: 'title, price y thumbnail son campos obligatorios'
      };
      if (price < 0 || price % 1 !== 0 || isNaN(price)) return {
        error: 'Price debe ser un número entero positivo'
      };
      const nuevoProducto = {
        ...producto,
        id: ++ProductosApi.idCount
      };
      this.productos.push(nuevoProducto);
      return nuevoProducto;
    };
  }
  module.exports = ProductosApi;