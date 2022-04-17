const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, job) {
        super(name, id, email, job)
    }
    getExrta(extra) {

        return this.extra = `School: ${extra}`
    }
}

module.exports = Intern;