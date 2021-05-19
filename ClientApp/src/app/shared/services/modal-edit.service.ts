import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from 'src/app/views/modal/modal.component';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class ModalEditService {

  constructor(private modalService: BsModalService) { }

  showModal() {
    const bsModalRef: BsModalRef = this.modalService.show(ModalComponent);
  }

  showModalEdit(task: Task) {
    const bsModalRef: BsModalRef = this.modalService.show(ModalComponent);
    bsModalRef.content.id = task.id;
    bsModalRef.content.title = task.title;
    bsModalRef.content.description = task.description;
  }
}
