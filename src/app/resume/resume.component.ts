import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initScroll();
  }

  navigate(path: string) {
    this.router.navigateByUrl(path);
  }

  initScroll():void {
    var animation;

    gsap.set("#app-flower-scroll", {transformOrigin: "50% 50%"});

    animation = gsap.to("#app-flower-scroll", {
      rotation: 0,
      scrollTrigger: {
        trigger: "#motionPath",
        start: "top 80px",
        end: "bottom 500px",
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
}
