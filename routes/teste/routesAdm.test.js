const resquest =require('supertest');
const app= require('../routesAdm');
describe ('Tarefa de rota',()=>{
    it("It should respond with an OK", async () => {
        const res=await resquest('http://localhost:3000').get('/index')
        expect(res.statusCode).toEqual(200)
    
    })
})