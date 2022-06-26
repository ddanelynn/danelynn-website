import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(path: string, id?: string) {
    this.router.navigateByUrl(path);
    if (path == '/home') {
      document.querySelector('.app-navbar')?.classList.add('invisible-nav');
    }
    this.clearActiveTag();
    if (typeof id !== undefined) {
      document.getElementById(id!)?.classList.add('active');
      document.getElementById(`${id!}-mobile`)?.classList.add('active');
    }
  }

  navigateLink(url: string) {
    window.open(url);
  }

  clearActiveTag() {
    document.querySelectorAll('.nav-item').forEach((navItem) => {
      navItem.classList.remove('active');
    })
  }

}
