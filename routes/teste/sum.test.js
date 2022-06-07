const sum = require('../sum');

describe('Testes de soma', () => {
    beforeAll(()=>{
        console.log('Questões para serem feitas antes do teste')

    })
    beforeEach(()=>{
        console.log('Em cada teste')

    })
    /**Temos também o afterAll e afterEach */
    it('Soma de dois números', (done) => {
        expect(sum(1, 2)).toBe(3);
        done();
    })
    it ('Soma de dois números- "string" e número',(done) => {
        expect(sum("texto", 2)).toBe(undefined);
        done();

    })


});