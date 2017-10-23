import chai from "chai"
const assert = chai.assert;
chai.should();
import whatPrimeFactor from "../src/main"



describe('whatPrimeFactor', () => {
    describe('handle valid input', () => {
        it('should return Pling if 3 is a prime factor', () => {
            assert.equal(whatPrimeFactor(6),"Pling");
        });
        it('should return Plang if 5 is a prime factor', () => {
            assert.equal(whatPrimeFactor(10),"Plang");
        });
        it('should return Plong if 7 is a prime factor', () => {
            assert.equal(whatPrimeFactor(28),"Plong");
        });
        it('should return PlingPlang if 3 and 5 are prime factors', () => {
            assert.equal(whatPrimeFactor(15),"PlingPlang");
        });
        it('should return PlingPlong if 3 and 7 are prime factors', () => {
            assert.equal(whatPrimeFactor(21),"PlingPlong");
        });
        it('should return PlangPlong if 5 and 7 are prime factors', () => {
            assert.equal(whatPrimeFactor(35),"PlangPlong");
        }); 
        it('should return PlingPlangPlong if 3,5,7 are prime factors', () => {
            assert.equal(whatPrimeFactor(105),"PlingPlangPlong");
        });
        it('should return 13 since 13 is not a prime factor', () =>{
            assert.equal(whatPrimeFactor(13),13);
        }); 

    });

   describe('handle invalid input', () => {
        it('should return "Enter a valid number greater than 1" for -5 since it is a negative number', () => {
            assert.equal(whatPrimeFactor(-5), 'Enter a valid number greater than 1');
        });
        it('should return "Enter a valid number greater than 1" for "demo" because it is a string', () =>{
            assert.equal(whatPrimeFactor("demo"), 'Enter a valid number greater than 1');
        });
        it('should return "Enter a valid number greater than 1" for 0 because it gives an undefined value', () =>{
            assert.equal(whatPrimeFactor(0), 'Enter a valid number greater than 1');
        });
        it('should return "Enter a valid number greater than 1" for "" because it is a string', () =>{
            assert.equal(whatPrimeFactor(""), 'Enter a valid number greater than 1');
        });
   });
});