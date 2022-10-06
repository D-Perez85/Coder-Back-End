import moment from "moment";

const saludarYDarHora = (nombre) => {
    console.log(`Hola todos, me llamo ${nombre}, gusto en saludarlos!`);
    const time = +moment().format('h');
    const dayTime = (time > 0 && time <=12) 
      ? 'mañana'
      : (time <= 19) 
        ? 'tarde'
        : 'noche'; 
    console.log(`Son las ${moment().format('h:mm')} de la ${dayTime}`);
  }
export default saludarYDarHora; 
