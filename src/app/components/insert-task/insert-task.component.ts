import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Project } from 'src/app/models/project.model';
import { Task } from 'src/app/models/task.model';
import { TaskType } from 'src/app/models/tasktype.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProjectAPIService } from 'src/app/services/project-api.service';

@Component({
  selector: 'app-insert-task',
  templateUrl: './insert-task.component.html',
  styleUrls: ['./insert-task.component.scss'],
})
export class InsertTaskComponent implements OnInit {
  task: Task;
  myForm: FormGroup;
  message: string;

  taskTypes: TaskType[];
  projects: Project[];
  project_id: Number;

  constructor(private fb: FormBuilder, private alertCtrl: AlertController, private route: ActivatedRoute, private projectAPI: ProjectAPIService, private auth: AuthService) {
    this.myForm = this.fb.group({
      'name': '',
      'estimate': '',
      'task_type_id': '',
      'project_id': ''
    });
    this.message = '';
    this.route.params.subscribe(params => {
      this.project_id = params['id'];
    })
  }

  ngOnInit() {
    this.taskTypes = this.projectAPI.getTypes();
    this.projects = this.projectAPI.getProjects(this.auth.getUser());
  }

  insertTask() {
    const values = this.myForm.value;
    const newTask = new Task();
    newTask.name = values.name;
    newTask.estimatedHours = values.estimate;
    newTask.project_id = values.project_id;
    newTask.task_type_id = values.task_type_id;

    this.projectAPI.insertTask(newTask);
    
    
  }

}
