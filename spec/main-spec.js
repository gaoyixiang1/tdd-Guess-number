const main = require('../main/main');

describe('guss-number', () => {
    it('allRight',function(){
        var sys = [1,2,3,4];
        var user = [1,2,3,4];
        var result = main(sys,user);
        expect(result).toBe('4A0B');
    })
});
describe('guss-number', () => {
    it('right and wrong',function(){
        var sys = [1,2,3,4];
        var user = [4,2,1,3];
        var result = main(sys,user);
        expect(result).toBe('1A3B');
    })
});
describe('guss-number', () => {
    it('allWrong',function(){
        var sys = [1,2,3,4];
        var user = [4,3,2,1];
        var result = main(sys,user);
        expect(result).toBe('0A4B');
    })
});
describe('guss-number', () => {
    it('right and wrong',function(){
        var sys = [1,2,3,4];
        var user = [1,2,4,3];
        var result = main(sys,user);
        expect(result).toBe('2A2B');
    })
});