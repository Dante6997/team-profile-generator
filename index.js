const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateMarkdown = require('./src/generateMarkdown.js');
const teamBuild = [];

const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter manager name',
        },
    
        {
            type: 'input',
            name: 'id',
            message: 'Please enter ID',
        },
    
        {
            type: 'input',
            name: 'email',
            message: 'Please enter email address',
        },
    
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter office number',
        },
    ]).then(answers => {
        console.log(answers);
            const manager = new Manager(
                answers.name, 
                answers.id, 
                answers.email, 
                answers.officeNumber
            );

            teamBuild.push(manager);
            promptQuestions();
    })

};

const questionsPrompt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please choose a role',
            choices: ['engineer', 'intern', 'finish team']

        }
    ])

    .then(userChoice => {
        switch(userChoice.menu) {
            case 'add an engineer':
                engineerPrompt();
                break;
            case 'add am intern':
                internPrompt();
                break;
            default:
                teamBuild();

        }
    });
};

const engineerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter engineer name',
        },

        {
            type: 'input',
            name: 'id',
            message: 'Please enter ID',
        },

        {
            type: 'input',
            name: 'email',
            message: 'Please enter email',
        },

        {
            type: 'input',
            name: 'github',
            message: 'Please enter Github username',
        },
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(
            answers.name, 
            answers.id, 
            answers.email, 
            answers.github
        );

        teamBuild.push(engineer);
        questionsPrompt();
    })
};

const engineerIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter intern name',
        },

        {
            type: 'input',
            name: 'id',
            message: 'Please enter ID',
        },

        {
            type: 'input',
            name: 'email',
            message: 'Please enter email',
        },

        {
            type: 'input',
            name: 'school',
            message: 'Please enter current school',
        },
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(
            answers.name, 
            answers.id, 
            answers.email, 
            answers.school
        );

        teamBuild.push(intern);
        questionsPrompt();
    })
};