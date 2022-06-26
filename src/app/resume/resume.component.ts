import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initScroll();
    this.showNav();
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

  clearActiveTag() {
    document.querySelectorAll('.nav-item').forEach((navItem) => {
      navItem.classList.remove('active');
    })
  }

  showNav() {
    document.querySelector('.app-navbar')?.classList.remove('invisible-nav');
    document.querySelector('.app-navbar-mobile')?.classList.remove('invisible-nav');
  }

  initScroll():void {
    if (window.innerWidth <= 1530 && window.innerWidth >= 1100) {
      gsap.set("#app-flower-scroll", {transformOrigin: "50% 50%"});
      var animation;
      animation = gsap.to("#app-flower-scroll", {
        rotation: 0,
        scrollTrigger: {
          trigger: "#motionPath",
          start: "top 50px",
          end: "bottom 500",
          scrub: 1,

          onUpdate: self => {
            gsap.to("#app-flower-scroll", {rotation: 360, transformOrigin: "center", overwrite: 'auto'});
          },

          onLeave: () => {
            gsap.to("#app-flower-scroll", {opacity: '0'})
          },

          onEnterBack: () => {
            gsap.to("#app-flower-scroll", {opacity: '1'})
          }

        },
        duration: 10,
        ease: "none",
        immediateRender: true,
        motionPath: {
          path: "#motionPath",
          align: "#motionPath",
          alignOrigin: [0.5, 0.5],
        }
      });
    }

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#plane",
        start: "140% bottom",
        end: "150% 30%",
        toggleActions: 'restart none none none',
      },
    });

    tl.to("#plane", { 
      yoyo: true,
      x:"+=7",
      repeat: 20,
      duration: '0.08',
    }).to("#plane", {
      translateX: "1000%",
      duration: '2',
    }).to("#plane", {
      scaleX: "-1",
      duration: '0',
    }).to("#plane", {
      translateX: "0",
      duration: '1.5',
    }).to("#plane", {
      scaleX: "1",
      duration: '0.5',
    })
  }
}
