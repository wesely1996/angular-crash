import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Tasks';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task = {text: '', day: '', reminder: false};

  constructor() { }

  ngOnInit(): void {
  }

}
