import inquirer from "inquirer";
import colors from "colors";

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'.bgMagenta} Buscar ciudad`
            },
            {
                value: 2,
                name: `${'2.'.bgMagenta} Historial`
            },
            {
                value: 0,
                name: `${'3.'.bgMagenta} Salir`
            },
        ],
    }
]

const pausa = async() => {


        const question = [
            {
                type: 'input',
                name: 'siguiente',
                message: `Pulse ${'ENTER'.cyan} para continuar`,
            }
        ];

        console.log('\n');
        await inquirer.prompt(question);
        
    };
const listadoLugares = async ( lugares = [] ) => {
    const choices = lugares.map(( lugar, i ) => {
        const idx = `${i + 1 }.`.green;

        return {
            value: lugar.place_id,
            name: `${idx} ${lugar.nombre}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0. '.green + ' Cancelar'
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione lugar: ',
            choices
        }
    ]

    const {id}  = await inquirer.prompt(preguntas);
    return id;
}

const inquirerMenu = async() => {
    console.clear();
    console.log('============================='.america);
    console.log('----Seleccione una opción----'.bgGreen);
    console.log('=============================\n'.america);

   const {opcion} = await inquirer.prompt(preguntas);
   return opcion;
}

 const leerInput = async (mensaje) => {
    const question = [
        {
            type: 'input',
            name: 'description',
            message: mensaje,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor tienes que meter un valor';
                }
            return true;
            }
    
        }
    ];

    const {description} = await inquirer.prompt(question);
    return description;
}


export {
     inquirerMenu,
     pausa,
     leerInput,
     listadoLugares
 }