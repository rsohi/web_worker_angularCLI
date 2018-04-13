import { TestBed, inject } from '@angular/core/testing';

import { FlyWorkerService } from './fly-worker.service';

describe('FlyWorkerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlyWorkerService]
    });
  });

  it('should be created', inject([FlyWorkerService], (service: FlyWorkerService) => {
    expect(service).toBeTruthy();
  }));
});
