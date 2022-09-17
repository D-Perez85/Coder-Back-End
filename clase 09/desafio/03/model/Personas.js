const personas = [
  {
    id: 1,
    nombre: 'Damian',
    apellido: 'Perez',
    edad: 35,
    email:'user@gmail.com',
    telefono: '0303456'
  }
]

class Persona { 
  constructor() {
    this.list = personas;
  }
  getAll() {
    return this.list;
  }
}
module.exports = Persona;