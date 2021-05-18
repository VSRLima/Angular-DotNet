import { Task } from './../shared/model/Task';
import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [];
  form: FormGroup

  constructor(
    private request: RequestService,
    private formBuilder: FormBuilder,
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

  onSubmit() {
    this.request.save(this.form.value).subscribe(
      (success) => {
        //something may happen (alertservice)
      },
      (error) => {
        //something may happen too (alertservice)
      }
    )
  }

  onDelete(id) {
    this.request.deleteTask(id).subscribe(
      (success) => {

      },
      (error) => {

      }
    )
  }

}
