import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  selectedValue: string = "Filter Tasks"
  tasks = [
    { id: 1, text: 'Go to Doctors', priority: 'high', isCompleted: false },
    {
      id: 2,
      text: 'Shopping for groceries',
      priority: 'medium',
      isCompleted: false,
    },
    { id: 3, text: 'Fix the car', priority: 'high', isCompleted: true },
    { id: 4, text: 'Watch Netflix', priority: 'low', isCompleted: false },
  ];

  addTask(task: any) {
    console.log(task);
    this.tasks.push(task);
  }

  markIsCompleted(task: any) {
    const updatedTask = {...task, isCompleted: true}
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }
}
