import { TestBed, inject } from '@angular/core/testing';

import { TextEntriesService } from './text-entries.service';

describe('TextEntriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextEntriesService]
    });
  });

  it('should be created', inject([TextEntriesService], (service: TextEntriesService) => {
    expect(service).toBeTruthy();
  }));
});
