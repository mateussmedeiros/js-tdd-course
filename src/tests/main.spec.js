describe('Main', function() {

  // Roda uma vez antes do bloco
  before(function() {
    console.log('before');
  });

  // Roda uma vez depois do bloco
  after(function() {
    console.log('after');
  });

  // Roda todas as vezes antes de cada bloco
  beforeEach(function() {
    console.log('beforeEach');
  });

  // Roda todas as vezes depois de cada bloco
  afterEach(function () {
    console.log('afterEach');
  });

  it('Teste 1', function() {
    console.log('Teste 1');
  });

  it('Teste 2', function() {
    console.log('Teste 2');
  });

});
