/* eslint-disable no-console */
import './styles/style.css';
/* eslint-disable */
// importando estilos de Materialize CSS
import 'materialize-css/dist/css/materialize.css';
// importando scripts de Materialize
import 'materialize-css/dist/js/materialize';
/* eslint-enable */
// inicializando scripts de materialize para interactividad
M.AutoInit();

console.log(' 🎉 Estilos cargados correctamente 🎉');

/*
let show = (msg='No message given') => {
    console.log(msg)
}

show();

function resolveAfter2Seconds(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('resolved');
        }, 2000)
    })
}

async function asyncCall(){
    console.log('Calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall(); */
