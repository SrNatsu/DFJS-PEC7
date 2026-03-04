import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authenticationTokenGuard } from './authentication-token-guard';

describe('authenticationTokenGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authenticationTokenGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
