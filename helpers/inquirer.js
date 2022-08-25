const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.bgMagenta} Crear una tarea`
            },
            {
                value: '2',
                name: `${'2.'.bgMagenta} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.bgMagenta} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.bgMagenta} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.bgMagenta} Completar tarea`
            },
            {
                value: '6',
                name: `${'6.'.bgMagenta} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.bgMagenta} Salir`
            }
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


module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}