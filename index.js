const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const promptUser = employeeData => {
    if (!employeeData) {
        employeeData = [];
    }
    return inquirer.prompt([
        {
            type:'list',
            name: 'job',
            message: "What is this employee's position?",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            Type:'text',
            name: 'name',
            message: "What is the Employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your employee's name!");
                    return false;
                }
            }
        },
        {
            Type:'text',
            name: 'email',
            message: "What is the Employee's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your employee's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the Managers office number?',
            when: (answers) => answers.job === 'Manager'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does the intern attend?',
            when: (answers) => answers.job === 'Intern'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the Engineers GitHub name?',
            when: (answers) => answers.job === 'Engineer'
        },
        {
            type: 'confirm',
            name: 'confirmAddAnother',
            message: 'Would you like to add another employee?',
            default: false
        }
    ])
    .then(userResults => {
        employeeData.push(userResults);
        if(userResults.confirmAddAnother) {
            return promptUser(employeeData);
        } else {
            return employeeData;
        }
    });
};

promptUser()
    .then(employeeData => {
        const finishedData = [];
        for (let i = 0; i < employeeData.length; i++) {
            if (employeeData[i].job === 'Manager') {
                const managerObject = new Manager(employeeData[i].name, i, employeeData[i].email, employeeData[i].job);
                managerObject.getExrta(employeeData[i].officeNumber);
                finishedData.push(managerObject);
            }
            if (employeeData[i].job === 'Engineer') {
                const engineerObject = new Engineer(employeeData[i].name, i, employeeData[i].email, employeeData[i].job);
                engineerObject.getExrta(employeeData[i].github);
                finishedData.push(engineerObject);
            }
            if (employeeData[i].job === 'Intern') {
                const internObject = new Intern(employeeData[i].name, i, employeeData[i].email, employeeData[i].job);
                internObject.getExrta(employeeData[i].school);
                finishedData.push(internObject);
            }
        };
        return finishedData;
    })
    .then(finishedData => {
        const htmlPage = generatePage(finishedData)
        fs.writeFile('./dist/index.html', htmlPage, err => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Your Webpage has been created. Choeck out index.html in the "dist" folder.')
        })
        
    });
