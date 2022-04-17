const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, job) {
        super(name, id, email, job)
    }
    getExrta(extra) {

        return this.extra = `Office number: ${extra}`
    }
}

module.exports = Manager;