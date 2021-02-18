import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { ProjectAPIService } from 'src/app/services/project-api.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  task: Task;
  task_id: Number;
  myForm: FormGroup;
  message: string;
  dt: string;
//${dt.getDate()}-${dt.getMonth()+1}-${dt.getFullYear()} ${dt.getHours()}:${dt.getMinutes()}
  constructor(private projectAPI: ProjectAPIService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.route.params.subscribe(params => this.task_id = params['id']);
    this.dt = "2021-02-01";
   
    this.myForm = this.fb.group({
      'date': new Date().toISOString(),
      'remainingHours': '',
      'workingHours': ''
    });
    this.message = '';
  }

  ngOnInit() {
    this.task = this.projectAPI.getTaskDetail(this.task_id);
  }

  insertTaskAdvance() {
    const values = this.myForm.value;

    const task = new Task();
    task.date = values.date;
    task.remainingHours = values.remainingHours;
    task.workedHours = values.workingHours;

    this.projectAPI.insertTaskAdvances(task);

  }

}
