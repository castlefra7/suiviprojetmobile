import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { Task } from 'src/app/models/task.model';
import { ProjectAPIService } from 'src/app/services/project-api.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  projectId: Number;
  tasks: Task[];

  constructor(private route: ActivatedRoute, private projectAPI: ProjectAPIService) {
    route.params.subscribe(params => this.projectId = params['id']);
  }

  ngOnInit() {
    this.tasks = this.projectAPI.getTasks(this.projectId);
  }

}
