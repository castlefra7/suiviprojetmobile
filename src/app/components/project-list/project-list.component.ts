import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectAPIService } from 'src/app/services/project-api.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  projects: Project[];

  constructor(private projectAPI: ProjectAPIService) { }

  ngOnInit() {
    this.projects = this.projectAPI.getProjects("");
    console.log(this.projects);
  }

}
