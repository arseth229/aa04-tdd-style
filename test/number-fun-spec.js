const chai = require('chai');
const expect = chai.expect;

const {returnsThree, reciprocal} = require('../problems/number-fun');

describe('returnsThree', function() {
    it('should return number 3', function() {
        expect(returnsThree()).to.equal(3);
    })
})

describe('reciprocal', function() {
    describe('valid arguments', function() {
        it('should return reciprocal of argument', function () {
            expect(reciprocal(5)).to.equal(0.2);
        })
    })
    describe('invalid arguments', function() {
        it('should throw range error for arguments less than 1 or greater than 1000000', function(){
            expect(reciprocal.bind(0.5)).to.throw(RangeError);
            expect(reciprocal.bind(1004000)).to.throw(RangeError);
        })
    })
})


