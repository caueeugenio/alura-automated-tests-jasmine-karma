import { UniqueIdService } from './unique-id.component';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;

  beforeEach(() => {
    /**
     * beforeEach -> Tem como papel principal garantir que cada
     * chamada à função it tenha seu próprio conjunto de dados de testes.
     * OBS: Isso evita que mudança de estado no conjunto de dados de teste vaze para outro.
     */
    service = new UniqueIdService();
  });
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
    should not generate duplicate IDS when called multitple times`, () => {
    const ids = new Set(); // set nao aceita elementos duplicados, ele ignora a adição
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });
  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
    should return the number of generateIds when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });
  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
    should throw when called with empty`, () => {
      // Quando temos que testar uma exceção precisamos declarar uma função dentro do expect
    const emptyValues = [null, undefined, ''];
    emptyValues.forEach((emptyValue) => {
      expect(() => service.generateUniqueIdWithPrefix(emptyValue)).toThrow();
    });
  });
});

// --> existe uma convenção que colocando o # antes do it indica um metodo
/**
 * describe('Artefato que queremos testar',  () => {
  it('Primeira condição que queemos testar', () => {
  });
  it('Segunda condição que queemos testar', () => {
  });
});

 *
 *
 */
