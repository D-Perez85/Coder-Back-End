class PersonasApi {
  constructor() {
    this.personas = [];
  }
  static idCount = 0;

  listarTodos() {
    return [...this.personas];
  };

  guardar(persona) {
    const {
      nombre,
      apellido,
      edad
    } = persona;
    if (!nombre || !apellido || !edad) return {
      error: 'nombre, apellido y edad son campos obligatorios'
    };
    if (edad < 0 || edad % 1 !== 0 || isNaN(edad)) return {
      error: 'La edad debe ser un número entero positivo'
    };
    const nuevaPersona = {
      ...persona,
      id: ++PersonasApi.idCount
    };
    this.personas.push(nuevaPersona);
    return nuevaPersona;
  };
}
module.exports = PersonasApi;