const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Justin', '2', 'justin@yahoo.com', 'justingithub');

test('creates engineer object', () => {
    expect(engineer.name).toBe('Justin');
    expect(engineer.id).toEqual('2');
    expect(engineer.email).toBe('justin@yahoo.com');
    expect(engineer.github).toBe('justingithub');
});

test('gets github and role from get methods', () => {
    expect(engineer.getGithub()).toBe('justingithub');
    expect(engineer.getRole()).toBe('Engineer');
});