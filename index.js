const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateMarkdown = require('./src/generateMarkdown.js');
const teamBuild = [];

const managerPrompt = [
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

    (
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter office number',
    ),
];