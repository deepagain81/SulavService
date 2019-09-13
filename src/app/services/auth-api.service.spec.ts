import { TestBed } from '@angular/core/testing';

import { AuthAPIService } from './auth-api.service';

describe('AuthAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthAPIService = TestBed.get(AuthAPIService);
    expect(service).toBeTruthy();
  });
});
