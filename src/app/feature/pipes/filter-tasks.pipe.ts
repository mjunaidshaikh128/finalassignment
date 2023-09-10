import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTasks',
})
export class FilterTasksPipe implements PipeTransform {
  transform(tasks: any, selectedValue: string): any {
    switch (selectedValue) {
      case 'All':
        return tasks;

      case 'Done':
        return tasks.filter((task: any) => task.isCompleted === true);

      case 'Not Done':
        return tasks.filter((task: any) => task.isCompleted === false);

      default:
        return tasks;
    }

  }
}
