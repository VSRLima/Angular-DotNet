import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';
import { Task } from 'src/app/shared/model/Task';
import { AlertModalService } from 'src/app/shared/services/alert-modal.service';
import { ModalEditService } from 'src/app/shared/services/modal-edit.service';
import * as moment from "../../../../node_modules/moment";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [];
  taskToMark: Task[] = [];
  dateTime = new Date();
  renderCal: boolean = false;

  constructor(
    private request: RequestService,
    private alertService: AlertModalService,
    private modalService: ModalEditService,
  ) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.request.getTask().subscribe(
      (data) => {
        this.taskToMark = data
        this.tasks = [];
        data.forEach((el) => {
          this.dateVerify(el)
        })
      }
    )
  }

  dateVerify(task: Task) {
    if(moment(task.date).format('YYYY/MM/DD') == moment(this.dateTime).format('YYYY/MM/DD')) {
      if (task.isCompleted == false) {
        this.tasks.push(task);
      }
    }
  }

  onDelete(id) {
    this.request.deleteTask(id).subscribe(
      (success) => {
        this.alertService.showAlert("Task excluída com sucesso", "success")
        window.location.reload()
      },
      (error) => {
        this.alertService.showAlert("Opa, ocorreu um erro ao excluir esse item","danger")
      }
    )
  }

  openModal() {
    this.modalService.showModal();
  }

  onEdit(task: Task) {
    this.modalService.showModalEdit(task);
  }

  statusTask(statusData: Task) {
    statusData.isCompleted = !statusData.isCompleted;
    this.request.saveStatus(statusData).subscribe(
      (sucess) => {
        this.alertService.showAlert("Task completada", "success");
        window.location.reload()
      },
      (error) => {
        this.alertService.showAlert("Ocorreu um erro em completar a sua task","danger")
      }
    )
  }

  dateFromCalendar(date) {
    this.dateTime = date.value;
    this.getTasks();
  }

  renderCalendar(): void {
    this.renderCal = !this.renderCal;
  }
}
