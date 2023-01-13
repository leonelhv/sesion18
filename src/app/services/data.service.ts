import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private URL = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Partial<todo>[]> {
    return this.http
      .get<todo[]>(this.URL)
      .pipe(
        map((todos) =>
          todos.map((todo) => ({
            userId: todo.userId,
            id: todo.id,
            title: todo.title,
          }))
        )
      );
  }

  getDetail(id: string): Observable<todo> {
    return this.http.get<todo>(`${this.URL}/${id}`);
  }
}
