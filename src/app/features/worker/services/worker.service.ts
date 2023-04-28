import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { WorkerEntities, WorkerEntity } from '../models/worker.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class WorkerService {
  private baseUri = environment.base_uri

  constructor(
    private $http: HttpClient
  ) { }

  create(worker: Worker): Observable<WorkerEntity> {
    return this.$http
      .post<WorkerEntity>(`${this.baseUri}/workers`, worker)
      .pipe(
        take(1)
      )
  }

  getAll(): Observable<WorkerEntities> {
    return this.$http
      .get<WorkerEntities>(`${this.baseUri}/workers`)
      .pipe(
        take(1)
      )
  }

  remove(id: number) {
    this.$http.delete(`${this.baseUri}/workers/${id}`).subscribe(deleted => console.log(deleted))
  }
}
