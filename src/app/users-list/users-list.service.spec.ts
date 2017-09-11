import { TestBed, inject } from '@angular/core/testing';

import { userListService } from './users-list.service';

describe('MoviesListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [userListService]
    });
  });

  it('should be created', inject([userListService], (service: userListService) => {
    expect(service).toBeTruthy();
  }));
});
