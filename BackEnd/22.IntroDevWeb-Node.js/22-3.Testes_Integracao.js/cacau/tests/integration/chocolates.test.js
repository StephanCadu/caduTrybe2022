const chai = require('chai');
const app = require('../../src/app');

// o chai-http automaticamente escolhe uma porta para fazer a requisição e retorna o resultado
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando a API cacau', function () {

  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];
      const response = await chai.request(app).get('/chocolates');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const output = {
        id: 4,
        name: 'Mounds',
        brandId: 3,
      };
      const response = await chai.request(app).get('/chocolates/4');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
    it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
      const output = { message: "Chocolate not found" };
      const response = await chai.request(app).get('/chocolates/99');
      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/brand/:id para buscar a brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const output = [
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]
      const response = await chai.request(app).get('/chocolates/brand/1');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

});
