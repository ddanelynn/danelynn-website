import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.showNav();
    this.activateTab('projects');
  }

  navigateLink(url: string) {
    window.open(url);
  }

  activateTab(id: string) {
    document.getElementById(id!)?.classList.add('active');
    document.getElementById(`${id!}-mobile`)?.classList.add('active');
  }

  showNav() {
    document.querySelector('.app-navbar')?.classList.remove('invisible-nav');
    document.querySelector('.app-navbar-mobile')?.classList.remove('invisible-nav');
  }

}
