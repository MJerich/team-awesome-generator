const Intern = require('../lib/Intern')

test('creates an Intern object', () => {
    var intern = new Intern('Jimbo', 1, 'Intern');

    expect(intern.getExrta('MSU Bootcamp')).toEqual(expect.any(String));
    console.log(intern);
});