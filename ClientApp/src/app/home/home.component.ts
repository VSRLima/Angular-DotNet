import { Task } from './../shared/model/Task';
import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [];
  form: FormGroup;
  bsModalRef: BsModalRef

  constructor(
    private request: RequestService,
    private formBuilder: FormBuilder,
    private bsModalService: BsModalService,
  ) {}

  ngOnInit(): void {
    this.formBuild();
    this.getTasks();
  }

  getTasks() {
    this.request.getTask().subscribe(
      (data) => {
        this.tasks = data
      }
    )
  }

  formBuild() {
    this.form = this.formBuilder.group({
      id: [null],
      title: [null, Validators.required],
      description: [null, Validators.maxLength(500)]
    });
  }

  onDelete(id) {
    this.request.deleteTask(id).subscribe(
      (success) => {
        window.location.reload()
      },
      (error) => {

      }
    )
  }

  openModal() {
    this.bsModalRef = this.bsModalService.show(ModalComponent);
    this.bsModalRef.content.teste
  }

  onEdit(task: Task) {
   console.log(this.bsModalRef.content.teste = task.id)
    this.openModal();
  }

}
