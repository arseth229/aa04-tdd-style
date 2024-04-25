const chai = require('chai');
const expect = chai.expect;

const Person = require('../problems/person');

describe('Person', function() {
    describe('constructor', function() {
        it('it should have name and age properties in the constructor', function() {
            const person = new Person('jeremy', 102);
            expect(person.name).to.equal('jeremy');
            expect(person.age).to.equal(102);
        })
    })

    describe('sayHello()', function() {
        it('it should return hello with persons name', function() {
            const person = new Person('jeremy', 102);
            expect(person.sayHello()).to.equal('Hello jeremy');
        })
    })

    describe('visit(otherPerson)', function() {
        it('should return person visits person2', function() {
            const person = new Person('jeremy', 102);
            const person2 = new Person('paula', 14);
            expect(person.visit(person2)).to.equal('jeremy visits paula');
        })
    })

    describe('switchVisit(otherPerson)', function() {
        it('should return person2 visits person', function() {
            const person = new Person('jeremy', 102);
            const person2 = new Person('paula', 14);
            expect(person2.switchVisit(person)).to.equal('paula visits jeremy');
        })
    })

    describe('update(obj)', function() {
        describe('invalid argument', function() {
            it('should throw a type error if the argument is not an obj', function(){
                expect(() => update([1,2,3])).to.throw(TypeError)
            })
        })

        describe('invalid properties', function() {
            it('should throw a type error if the obj does not have name and age properties', function() {
                const person3 = new Person('jackson');
                expect(()=> person3.update()).to.throw(TypeError);
            })
        })

        describe('valid argument', function(){
            it('should update the properties', function() {
                let coolPerson = new Person("mai", 32)
                coolPerson.update({ name: "lulu", age: 57 });
                expect(coolPerson.name).to.equal('lulu');
                expect(coolPerson.age).to.equal(57);
            })
        })
    })

    describe('tryUpdate(obj)', function() {
        it('should try to update the obj', function() {


            describe('invalid arguments', function () {

                it('should return false instead of throwing an error', function() {
                    let coolPerson = new Person("mai");
                    let result = coolPerson.tryUpdate('invalid');
                    expect(result).to.be.false;
                })


            })

            describe('valid argument', function() {
                it('should return true and update the argument', function() {
                    let coolPerson = new Person("mai", 32)
                    let result = coolPerson.tryUpdate({ name: "lulu", age: 57 });
                    expect(coolPerson.name).to.equal('lulu');
                    expect(coolPerson.age).to.equal(57);
                    expect(result).to.be.true;
                })
            })
        })
    })

    describe('greetAll(obj)', function() {
        it('should return an array greeting each person', function() {
            let person1 = new Person('abdul', 24)
            let person2 = new Person('jeremy', 102)
            let person3 = new Person('bro', 17)
            let person4 = new Person('Bro', 89);
            expect(greetAll([person1,person2,person3,person4])).to.equal(['Hello abdul', 'Hello jeremy', 'Hello bro', 'Hello Bro']);
        })
    })
})
