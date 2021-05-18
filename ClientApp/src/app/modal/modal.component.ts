import { Task } from './../shared/model/Task';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestService } from '../services/request.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{
  form: FormGroup;
  modalRef: BsModalRef;
  teste: number;

  constructor(
    private formBuilder: FormBuilder,
    private requestService: RequestService,
    private modalService: BsModalService,
    public modalRefContent: BsModalRef
  ) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template)
  }

  ngOnInit(): void {
    this.formBuild();
  }

  getTaskById(id: number) {
    this.requestService.getTaskById(id).subscribe((data: Task) => {
      this.populateForm(data);
    })
  }

  formBuild() {
    this.form = this.formBuilder.group({
      id: [null],
      title: [ null, Validators.required ],
      description: [ null, Validators.maxLength(500)]
    })
  }

  populateForm(data: Task) {
    console.log('teste',data)
    this.form.patchValue({
      id: data.id,
      title: data.title,
      description: data.description
    })
  }

  onSubmit() {
    this.requestService.save(this.form.value).subscribe(
      (success) => {
        window.location.reload()
      },
      (error) => {
        // I already said that maaaaaaaaaaaaaaaaaaaaaaaaaay happen...
      }
    )
  }

  resetForm() {
    this.form.reset();
  }
}
