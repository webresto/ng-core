import { TestBed, inject } from '@angular/core/testing';

import { RestoStorageService } from './resto-storage.service';

describe('RestoStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestoStorageService]
    });
  });

  it('should be created', inject([RestoStorageService], (service:RestoStorageService) => {
    expect(service).toBeTruthy();
  }));
});
