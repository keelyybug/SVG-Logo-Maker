const inquirer = reqquire('inquirer');

class CLI{
    run(){
        return inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'text',
                    message: 'Please Input your logo. Must be between 1 and 3 letters.'
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Please input a color keyword or a hexadecimal number for your logos color.'
                },
                {
                    type:'list',
                    name: 'shape',
                    message: `Please choose a shape for your logo's background.`,
                    choices: ['circle','square','triangle']
                },
                {
                    type: 'input',
                    name:'shapeColor',
                    message:'Please input a color keyword or a hexadecimal number for your logos background color.'
                }
            ])
            .then(()=>{
                console.log(`Great! Your logo has been created! Navigate to the file 'logo.svg' to see your new logo.`)
            })
            .catch(()=>{
                console.error(error);
            })
        }
}

module.export = CLI;