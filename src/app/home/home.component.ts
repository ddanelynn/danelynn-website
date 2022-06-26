import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showNav() {
    document.querySelector('.app-navbar')?.classList.remove('invisible-nav');
    document.querySelector('.app-navbar-mobile')?.classList.remove('invisible-nav');
  }

}
