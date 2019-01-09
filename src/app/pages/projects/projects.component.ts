import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService, Project } from './projects.service';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  

  constructor(private router:Router, private projectService:ProjectsService) { }

  onNavigateClick(path: string) {
    console.log("onNavigateClick")
    this.router.navigate([path]);
  }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

}
