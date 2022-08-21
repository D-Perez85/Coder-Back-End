/**  Uso y funcionalidad de Try / Catch  - Bloque finally se ejecuta siempre, independiente del resultado*/

const axios  = require('axios'); 
const funcionAsync = async () =>{
    try {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(resp.data[0]);
    } catch (err) {
        console.log('Hubo un error');
        console.log(err.message);
    }finally{
        console.log('Esto se ejecuta si o si');
    }
    console.log('Im still alive');
}
funcionAsync()