
import {} from 'dotenv/config'
import {inquirerMenu, leerInput, listadoLugares, pausa} from "./helpers/inquirer.js";
import Busqueda from "./models/busquedas.js";


const main = async () => {
    
    let busquedas = new Busqueda;
    let opt;


    
    do {

        opt = await inquirerMenu();
        
        switch ( opt ) {
            case 1:
                //Mostrar mensaje
                const terminoBusqueda = await leerInput('Ciudad: ');

                //Buscar los lugares
                const lugares = await busquedas.ciudad( terminoBusqueda );
                
                //Seleccionar una opcion
                const id = await listadoLugares(lugares);
                console.log( id );

                //Clima

                //Mostrar Resultados
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:', terminoBusqueda);
                console.log('Lat:', );
                console.log('Lng:', );
                console.log('Temperatura:', );
                console.log('Mínima:', );
                console.log('Máxima:', );

            break;
            case 2:
                
            break;
            case 0:
                
            break;
        } 
        
        if (opt !== 0) await pausa();
        
    } while ( opt !== 0)


    
}
main();