import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectManagementRoutingModule } from './project-management-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProjectManagement } from './project-management';
import { ProjectAPIService } from '../services/project-api.service';
import { ProjectListComponent } from '../components/project-list/project-list.component';
import { ProjectComponent } from '../components/project/project.component';
import { TaskListComponent } from '../components/task-list/task-list.component';
import { TaskComponent } from '../components/task/task.component';
import { ProjectRowComponent } from '../components/project-row/project-row.component';
import { TaskRowComponent } from '../components/task-row/task-row.component';
import { InsertTaskComponent } from '../components/insert-task/insert-task.component';
import { AuthService } from '../services/auth.service';
import { InsertTaskAdvanceComponent } from '../components/insert-task-advance/insert-task-advance.component';

@NgModule({
  declarations: [ProjectManagement, ProjectListComponent, ProjectComponent, TaskComponent, TaskListComponent, ProjectRowComponent, TaskRowComponent, InsertTaskComponent, InsertTaskAdvanceComponent
  ],
  imports: [
    CommonModule,
    ProjectManagementRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProjectAPIService,
    AuthService
  ]
})
export class ProjectManagementModule { }
