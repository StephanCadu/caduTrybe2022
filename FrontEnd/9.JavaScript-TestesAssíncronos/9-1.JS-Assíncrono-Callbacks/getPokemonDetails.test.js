// 9

// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./getPokemonDetails.js');

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    getPokemonDetails((bicho) => bicho.name === 'Chalizard', (erro, msg) => {
      expect(erro).toEqual(new Error('Não temos esse pokémon para você :('));
      done();
    });
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    // Escreva aqui seu código
    getPokemonDetails((bicho) => bicho.name === 'Charmander', (erro, msg) => {
      expect(msg).toEqual('Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember');
      done();
    });
  });
});