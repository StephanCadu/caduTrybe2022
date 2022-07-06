// 7

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('Verifica o funcionamento da funcão uppercase', () => {
  it('Testa se a string esqueite não é transformada em SKATE', (done) => {
    uppercase('esqueite', (result) => {
      try {
        expect(result).not.toEqual('SKATE')
        expect(result).toEqual('ESQUEITE')
        done();
      } catch (error) {
        console.log('foi não mano, tenta dnv');
        done(error);
      }
    });
  });
  it('Testa se a string skate é transformada em SKATE', (done) => {
    uppercase('skate', (result) => {
      try {
        expect(result).toEqual('SKATE')
        done();
      } catch (error) {
        console.log('foi não mano, tenta dnv');
        done(error);
      }
    });
  });
});
