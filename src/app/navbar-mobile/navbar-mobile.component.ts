import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(path: string, id?: string) {
    this.router.navigateByUrl(path);
    this.clearActiveTag();
    if (typeof id !== undefined) {
      document.getElementById(id!)?.classList.add('active');
      document.getElementById(`${id!}-mobile`)?.classList.add('active');
    }
    this.toggleMenu();
  }

  navigateLink(url: string) {
    window.open(url);
  }

  clearActiveTag() {
    document.querySelectorAll('.nav-item').forEach((navItem) => {
      navItem.classList.remove('active');
    })
  }

  toggleMenu() {
    const menu = document.querySelector('.menu') as HTMLElement;
    if (menu.style.display == 'flex') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
    }
  }

}
