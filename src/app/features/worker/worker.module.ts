import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkerRoutingModule } from './worker-routing.module';
import { WorkerComponent } from './worker.component';
import { CreateFormComponent, ListComponent } from './components';
import { WorkerService } from './services/worker.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WorkerComponent,
    CreateFormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    WorkerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [WorkerService]
})
export class WorkerModule { }
