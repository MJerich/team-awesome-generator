const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    var employee = new Employee('Jimbo', 1, 'Engineer');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});