const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    var engineer = new Engineer('Jimbo', 1, 'Engineer');

    expect(engineer.getExrta('MJerich')).toEqual(expect.any(String));
    console.log(engineer);
    const Dylan = new Engineer('Dylan', 3, 'Engineer')
    Dylan.getExrta('DyHansen')
    console.log(Dylan)
});