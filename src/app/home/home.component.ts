import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  expanded: boolean = false;
  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  togglehomeNavItems(homeNavItems: HTMLElement, expanded: boolean) {
    const homeNavItemsList = Array.prototype.slice.call(homeNavItems.children) as HTMLElement[];
    if (!expanded) {
      gsap.to(homeNavItems, {
        duration: 0.6,
      });
      this.showElements(homeNavItemsList);
    } else {
      this.hideElements(homeNavItemsList);
    }

  }

  private showElements(homeNavItemsList: HTMLElement[]): void {
    this.expanded = true;
    document.querySelector('.profile-block')?.classList.remove('alert');
    const cover = document.querySelector('.profile-block-cover') as HTMLElement;
    cover.style.zIndex = '10';
    const timeLineArr = [];
    for (let i = 0; i < homeNavItemsList.length; i++) {
      timeLineArr.push(gsap.timeline());
    }
    for (let i = 0; i < homeNavItemsList.length; i++) {
      const sliced = homeNavItemsList.slice(i, homeNavItemsList.length);
      const angle = 130/(homeNavItemsList.length - 1);
      timeLineArr[i].to(sliced, {
        translateX: this.getDistance() * Math.cos(i * (angle/180 * Math.PI) + 25/180 * Math.PI),
        translateY: this.getDistance() * Math.sin(i * (angle/180 * Math.PI) + 25/180 * Math.PI),
        delay: 0.1 * i,
        duration: 0.4,
      });
    }
    timeLineArr[homeNavItemsList.length - 1].to(cover, {
      zIndex: -1,
    })
  }

  private hideElements(homeNavItemsList: HTMLElement[]): void {
    this.expanded = false;
    gsap.to(homeNavItemsList, {
      x: 0,
      y: 0,
      duration: 0.3
    })
  }

  navigate(path: string, id?: string) {
    this.router.navigateByUrl(path);
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

  getDistance() {
    if (window.innerWidth > 540) {
      return 250;
    } else {
      return 150;
    }
  }

}
