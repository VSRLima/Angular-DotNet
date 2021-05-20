
import { Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { Task } from 'src/app/shared/model/Task';
import { AlertModalService } from 'src/app/shared/services/alert-modal.service';
import { RequestService } from 'src/app/shared/services/request.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{
  form: FormGroup;
  @Input() title: string;
  @Input() description: string;
  @Input() date: Date;
  @Input() id: number;

  constructor(
    private formBuilder: FormBuilder,
    private requestService: RequestService,
    public modalRefContent: BsModalRef,
    private alertService: AlertModalService
  ) {
  }

  ngOnInit(): void {
    this.formBuild();
  }

  formBuild() {
    this.form = this.formBuilder.group({
      id: [null],
      title: [ null, Validators.required ],
      description: [ null, Validators.maxLength(500)],
      isCompleted: [ false ],
      date: [ null, Validators.required ]
    })
  }

  onSubmit() {
    if(this.id === undefined) {
      this.requestService.save(this.form.value).subscribe(
        (success) => {
          this.alertService.showAlert("Task criada com sucesso", "success ")
          window.location.reload()
        },
        (error) => {
        this.alertService.showAlert("Houve um erro ao criar essa task", "danger")
        }
      )
    } else {
      let taskObj: Task = {
        id: this.id,
        title: this.form.value.title,
        description: this.form.value.description,
        isCompleted: this.form.value.isCompleted,
        date: this.form.value.date
      }
      this.requestService.save(taskObj).subscribe(
        (success) => {
          this.alertService.showAlert("Task criada com sucesso", "success ")
          window.location.reload()
        },
        (error) => {
        this.alertService.showAlert("Houve um erro ao criar essa task", "danger")
        }
      )
    }
  }

  resetForm() {
    this.form.reset();
  }
}
