const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      productos : '/api/productos',
    }
    // Middlewares
    this.middlewares();
    // Routes
    this.routes();
  }
  middlewares() {
    // Reading & Parse of body
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    // Public Folder
    this.app.use(express.static(__dirname + '../../public'));
    // this.app.use(express.static("public"));
  }
  routes() {
     this.app.use(this.paths.productos, require("../routes/productos")); 
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`listen at the port ${this.port}`);
    });
  }
}
module.exports = Server;
