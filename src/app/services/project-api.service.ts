import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Task } from '../models/task.model';
import { TaskType } from '../models/tasktype.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectAPIService {

  constructor() { }


  getProjects(user: User): Project[] {
    let result = [];
    result.push(new Project(1, "learn angular"));
    result.push(new Project(2, "learn php"));
    result.push(new Project(3, "simulation avion"));
    return result;
  }

  getTasks(project_id): Task[] {
    let result = [];
    const task = new Task();
    task.name = "lire livre ng";
    task.estimatedHours = 2;
    task.id = 1;
    result.push(task);
    return result;
  }

  getTypes(): TaskType[] {
    let result = [];
    result.push(new TaskType(1, "backend"));
    result.push(new TaskType(2, "frontend"));
    result.push(new TaskType(3, "affichage"));
    return result;
  }

  getTaskDetail(id_task: Number): Task {
    let task = new Task();
    task.name = "lire livre ng";
    task.estimatedHours = 2;

    task.id = 1;
    return task;
  }

  insertProject(project: Project): void {

  }

  insertTask(task: Task): void {
    console.log(task);

  }

  insertTaskAdvances(task: Task): void {
    console.log(task);

  }

}
