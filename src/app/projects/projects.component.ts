import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.showNav();
  }

  showNav() {
    document.querySelector('.app-navbar')?.classList.remove('invisible-nav');
    document.querySelector('.app-navbar-mobile')?.classList.remove('invisible-nav');
  }

}
