import { UniqueIdService } from "./unique-id.component";

describe(UniqueIdService.name,  () => {
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const service = new UniqueIdService(); // instancia da service
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id).toContain('app-');
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
