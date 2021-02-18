import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertTaskComponent } from '../components/insert-task/insert-task.component';
import { ProjectListComponent } from '../components/project-list/project-list.component';
import { TaskListComponent } from '../components/task-list/task-list.component';
import { TaskComponent } from '../components/task/task.component';
import { ProjectManagement } from './project-management';

const routes: Routes = [
  {
    path: 'management',
    component: ProjectManagement,
    children: [
     
      {
        path: 'projects',
        component: ProjectListComponent
      },
      {
        path: 'task/:id',
        component: TaskComponent
      },
      {
        path: 'addTask/:idProject',
        component: InsertTaskComponent
      },
      {
        path: 'projects/:id',
        component: TaskListComponent,
      },
      {
        path: '',
        redirectTo: '/management/projects',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/management/projects',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagementRoutingModule {}
