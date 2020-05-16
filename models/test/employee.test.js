const Employee = require('../employee.model.js');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Employee', () => {

    it('should throw an error if some of args are null', () => {
        const empl1 = new Employee({ firstName: 'John', lastName: 'Doe' });
        const empl2 = new Employee({ firstName: 'John', department: 'Marketing' });
        const empl3 = new Employee({ lastName: 'Doe', department: 'Marketing' })

        const cases = [empl1, empl2, empl3]
        for (let empl of cases) {
            empl.validate(err => {
                expect(err.errors).to.exist;
            });
        }
    });

    it('should throw an error if args are not a string', () => {

        const empl1 = new Employee({ firstName: [], lastName: 'Doe', department: 'Marketing' });
        const empl2 = new Employee({ firstName: 'John', lastName: {}, department: 'Marketing' });
        const empl3 = new Employee({ firstName: 'Doe', lastName: 'Doe', department: [] })
        const empl4 = new Employee({ firstName: undefined, lastName: 'Doe', department: 'Marketing' })

        const cases = [empl1, empl2, empl3, empl4]
        for (let empl of cases) {
            empl.validate(err => {
                expect(err.errors).to.exist;
            });
        }
    });

    it('should not throw an error if args are ok', () => {

        const empl1 = new Employee({ firstName: 'John', lastName: 'Doe', department: 'Marketing' });
        const empl2 = new Employee({ firstName: 'Adam', lastName: 'Smith', department: 'Marketing' });
        const empl3 = new Employee({ firstName: 'Lorem', lastName: 'Ipsum', department: 'Marketing' })


        const cases = [empl1, empl2, empl3]
        for (let empl of cases) {
            empl.validate(err => {
                expect(err).not.to.exist;
            });
        }
    });


    after(() => {
        mongoose.models = {};
    });

});

