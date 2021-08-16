import { TestBed } from '@angular/core/testing';

import { CustomerResolver } from './photos.resolver';

describe('CustomerResolver', () => {
  let resolver: CustomerResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CustomerResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
