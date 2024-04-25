const chai = require('chai');
const expect = chai.expect;

const reverseString = require('../problems/reverse-string');

describe('reverseString', function(){
    it('it should reverse the string', function(){
        expect(reverseString('texas')).to.equal('saxet');
    })
})
