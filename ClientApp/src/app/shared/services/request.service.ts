import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private readonly API = `${environment.API}`

  constructor(
    private http: HttpClient
  ) { }

  getTask() {
    return this.http.get<Task[]>(this.API).pipe(take(1));
  }

  getTaskById(id: number) {
    return this.http.get(`${this.API}/${id}`).pipe(take(1));
  }

  private newTask(task: Task) {
    return this.http.post(this.API, task).pipe(take(1));
  }

  private updateTask(task: Task) {
    return this.http.put(`${this.API}${task.id}`, task).pipe(take(1));
  }

  save(task: Task) {
    if (task.id) {
      return this.updateTask(task);
    } else {
      delete task.id
      return this.newTask(task);
    }
  }

  deleteTask(id) {
    return this.http.delete(`${this.API}${id}`).pipe(take(1));
  }

  saveStatus(task: Task) {
    return this.http.put(`${this.API}${task.id}`, task).pipe(take(1));
  }
}
