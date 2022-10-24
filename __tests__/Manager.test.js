const Manager = require('../lib/Manager');
const manager = new Manager('Brandon', '4', 'brandon@yahoo.com', '555');

test('create manager object', () => {
    expect(manager.name).toBe('Brandon');
    expect(manager.id).toBe('4');
    expect(manager.email).toBe('brandon@yahoo.com');
    expect(manager.officeNumber).toBe('555');
});

test('gets the name, id, email, officeNumber, and role', () => {
    expect(manager.getName()).toBe('Brandon');
    expect(manager.getId()).toBe('4');
    expect(manager.getEmail()).toBe('brandon@yahoo.com');
    expect(manager.getOfficenumber()).toBe('555');
    expected(manager.getRole()).toBe('Manager');
});