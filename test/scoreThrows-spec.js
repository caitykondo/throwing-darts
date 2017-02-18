const scoreThrows = require('./../scoreThrows');
const chai = require('chai');
chai.should();

describe('sanity', () => {

  it('should be true', () => {
    true.should.equal(true);
  });
});

describe('scoreThrows', () => {
  it('should return the correct score', ()=> {
    let r1 = [1, 5, 11]; //15
    let r2 = [15, 20, 30]; //0
    let r3 = [1, 2, 3, 4]; //140
    scoreThrows(r1).should.deep.equal(15);
    scoreThrows(r2).should.deep.equal(0);
    scoreThrows(r3).should.deep.equal(140);
  });
});