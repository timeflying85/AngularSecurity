import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WorkerEntities } from '../../models/worker.model'

@Component({
  selector: 'worker-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  remove(_t13: number) {
    throw new Error('Method not implemented.');
  }
  private workers: WorkerEntities = []

  @Input('workers') set Workers(workers: WorkerEntities) {
    this.workers = [...workers]
  }
  get Workers(): WorkerEntities { return this.workers }



}
