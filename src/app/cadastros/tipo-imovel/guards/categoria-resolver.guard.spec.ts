import { TipoImovelResolverGuard } from './tipo-imovel-resolver.guard';
import { TestBed } from '@angular/core/testing';

describe('CategoriaResolverGuard', () => {
  let guard: TipoImovelResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TipoImovelResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
