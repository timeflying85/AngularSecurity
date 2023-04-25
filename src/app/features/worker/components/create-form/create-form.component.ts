import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { fWorkerCreate } from '../../forms/worker.form';

@Component({
  selector: 'worker-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateFormComponent {
  @Output('create') createEvent = new EventEmitter<Worker>()

  createForm: FormGroup = fWorkerCreate()


  handleSubmit() {
    if (this.createForm.valid) {
      this.createEvent.emit(this.createForm.value)
      this.createForm.reset()
    }
  }
}
