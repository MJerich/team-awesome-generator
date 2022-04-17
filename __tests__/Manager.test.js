const Manager = require('../lib/Manager')

test('creates an Manager object', () => {
    var manager = new Manager('Jimbo', 1, 'Manager');

    expect(manager.getExrta('69')).toEqual(expect.any(String));
    console.log(manager);
});