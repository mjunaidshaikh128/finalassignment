import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FormsModule } from '@angular/forms';
import { FilterTasksPipe } from './pipes/filter-tasks.pipe';


@NgModule({
  declarations: [
    TaskListComponent,
    AddTaskComponent,
    TaskItemComponent,
    FilterTasksPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TaskListComponent,
    AddTaskComponent
  ]
})
export class FeatureModule { }
