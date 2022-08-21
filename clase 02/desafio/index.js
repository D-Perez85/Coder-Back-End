class Contador {
    static cuentaGlobal = 1;
    constructor(nombre) {
      this.nombre = nombre;
      this.cuentaIndividual = 0;
    }
    obtenerResponsable() {
      return this.nombre;
    }
    obtenerCuentaIndividual() {
      return this.cuentaIndividual;
    }
    obtenerCuentaGlobal() {
      return Contador.cuentaGlobal;
    }
    incrementar() {
      this.cuentaIndividual++;
      Contador.cuentaGlobal++;
      
    }
  }


  /** Instancia para contador n° 1 */
  let contador1 = new Contador("Pedro"); 
  console.log(contador1);
  console.log(contador1.obtenerResponsable());
  console.log(`Inicio contador individual: ${contador1.obtenerCuentaIndividual()}`);
  console.log(`Inicio Contador Global: ${contador1.obtenerCuentaGlobal()}`);
  contador1.incrementar(); 
  contador1.incrementar(); 
  contador1.incrementar(); 
  console.log(`Incremento individual: ${contador1.obtenerCuentaIndividual()}`);
  console.log(`Total contador global: ${contador1.obtenerCuentaGlobal()}`);




