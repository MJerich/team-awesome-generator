const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, job) {
        super(name, id, email, job)
    }
    getExrta(extra) {

        return this.extra = `GitHub: <a href="https://github.com/${extra}">${extra}</a>`
    }
}

module.exports = Engineer;