import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { WorkerEntities } from '../../models/worker.model'

@Component({
  selector: 'worker-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Output('remove') removeEvent = new EventEmitter<number>()
  private workers: WorkerEntities = []

  @Input('workers') set Workers(workers: WorkerEntities) {
    this.workers = [...workers]
  }
  get Workers(): WorkerEntities { return this.workers }


  remove(id: number) {
    this.removeEvent.emit(id)
  }

}
