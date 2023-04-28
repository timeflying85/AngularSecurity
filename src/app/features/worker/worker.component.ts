import { Component, OnDestroy } from '@angular/core';
import { WorkerService } from './services/worker.service';
import { Subscription } from 'rxjs';
import { WorkerEntities, WorkerEntity } from './models/worker.model';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss']
})
export class WorkerComponent implements OnDestroy {
  // handleCreate: any;
  subs$$: Subscription[] = []

  workers: WorkerEntities = []

  constructor(
    private $worker: WorkerService
  ) {
  }

  ngOnInit() {
    this.$worker
      .getAll()
      .subscribe(data => this.workers = [...data])
  }


  handleCreate(worker: Worker) {
    const sub = this.$worker
      .create(worker)
      .subscribe({
        next: (entity) => this.createNext(entity),
        error: (err) => console.log(err)
      })

    this.subs$$.push(sub)
  }

  handleRemove(id: number) {
    const copy = [...this.workers]
    const index = copy.findIndex(it => it.id === id)
    copy.splice(index, 1)

    this.workers = [...copy]

    this.$worker.remove(id)
  }

  private createNext(entity: WorkerEntity) {
    // const workers = []

    // this.workers.forEach(worker => workers.push(worker))
    // workers.push(entity)

    // this.workers = workers
    this.workers = [...this.workers, entity]
  }

  ngOnDestroy(): void {
    this.subs$$.forEach(sub => sub.unsubscribe())
  }
}
