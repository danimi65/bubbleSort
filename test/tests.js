// jshint esversion:6
const chai = require('chai');
chai.expect();
chai.should();
const sortFunction = require('../bubbleSort.js');

  let unsortedArray = [27, 8, 10, 7, 123, 5, 32];
  let sortedArray = [5, 7, 8, 10, 27, 32, 123];

describe( 'bubbleSort', () => {
  it('should be a function', () =>{
    sortFunction.should.be.a.function;
  });
  it('should have one parameter', () => {
  sortFunction.prototype.constructor.should.have.a.lengthOf(1); 
  });
  it('should return an array', () => {
    console.log(sortFunction(unsortedArray));
  sortFunction(unsortedArray).should.be.an('array');
  });
  it('unsortedArray should equal sortedArray', () => {
    sortFunction(unsortedArray).should.deep.equal(sortedArray);
  });
});