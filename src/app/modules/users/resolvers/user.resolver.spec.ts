import { TestBed } from '@angular/core/testing';
import { UserResolver } from './user.resolver';

describe('AccessResolver', () => {
  let resolver: AccessResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AccessResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
