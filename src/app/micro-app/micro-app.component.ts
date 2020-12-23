import { Component, OnInit } from '@angular/core';

export class Task {
  title: any;
  editable: boolean;
  constructor(props: any) {
    this.title = props.title;
    this.editable = props.editable;
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './micro-app.component.html',
  styleUrls: ['./micro-app.component.less'],
})
export class MicroApp implements OnInit {
  title = 'Flight Booking App';
  constructor() {}
  ngOnInit(): void {}
  public taskList: Task[] = [
    { title: 'Breakfast', editable: false },
    { title: 'Follow up', editable: false },
    { title: 'Meeting Invite', editable: false },
    { title: 'Get Laptop', editable: false },
    { title: 'Take it home', editable: false },
  ];

  addTask() {
    console.log('Task List', this.taskList);
    this.taskList.push(new Task({ title: 'My Task', editable: false }));
  }

  editTask(index: number) {
    const currentTask = this.taskList[index];
    currentTask.editable = true;
    this.taskList.splice(index, 1, currentTask);
  }

  onTaskBlur(index: number, event: any) {
    console.log(index, event);
    const currentTask = this.taskList[index];
    currentTask.editable = false;
    currentTask.title = event.target.value;
    this.taskList.splice(index, 1, currentTask);
  }

  removeTask(index: number) {
    console.log('Index', index);

    if (index > -1) {
      this.taskList.splice(index, 1);
    }
  }
}
