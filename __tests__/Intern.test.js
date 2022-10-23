const { default: test } = require('node:test');
const Intern = require('../lib/Intern');
const intern = new Intern('Tyron', '3', 'tyron@yahoo.com', 'Buffalo State');

test('creates intern object', () => {
    expect(intern.name).toBe('Tyron');
    expect(intern.id).toEqual('3');
    expect(intern.email).toBe('tyron@yahoo.com');
    expect(intern.school).toBe('Bufalo State');
});

test('gets school and role from get method' , () => {
    expect(intern.getSchool()).toBe('Bufalo State');
    expect(intern.getRole()).toBe('intern');
});