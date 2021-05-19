import { TestBed } from '@angular/core/testing';

import { ModalEditService } from './modal-edit.service';

describe('ModalEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalEditService = TestBed.get(ModalEditService);
    expect(service).toBeTruthy();
  });
});
