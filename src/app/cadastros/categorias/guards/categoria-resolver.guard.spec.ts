import { TestBed } from '@angular/core/testing';

import { CategoriaResolverGuard } from './categoria-resolver.guard';

describe('CategoriaResolverGuard', () => {
  let guard: CategoriaResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CategoriaResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
