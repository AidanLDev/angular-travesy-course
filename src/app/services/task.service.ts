import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../../interfaces/tasks';
import { apiUrl } from '../../utils/consts';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksUrl = `${apiUrl}/tasks`;

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  deleteTask(taskId: number): Observable<number> {
    const deleteUrl = `${this.tasksUrl}/${taskId}`;
    return this.http.delete<number>(deleteUrl);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const updateUrl = `${this.tasksUrl}/${task.id}`;
    return this.http.put<Task>(updateUrl, task, httpOptions);
  }
}
