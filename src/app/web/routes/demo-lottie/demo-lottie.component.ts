import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'app-demo-lottie',
  templateUrl: './demo-lottie.component.html',
  styleUrls:   ['./demo-lottie.component.scss']
})
export class DemoLottieComponent implements OnInit {
  public lottieConfig: Object;
  anim: any;
  animationSpeed: number = 1;

  constructor() {
  }

  ngOnInit(): void {
    this.lottieConfig = {
      path: '/assets/lottie/animation.json',
      renderer: 'svg',
      autoplay: false,
      loop: false
    };
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }

  onComplete(event: any) {
    console.log('complete', event);
  }

  stop() {
    this.anim.stop();
  }

  play() {
    this.anim.play(0, 1);
  }

  pause() {
    this.anim.pause();
  }

  setSpeed(speed: number) {
    this.animationSpeed = speed;
    this.anim.setSpeed(speed);
  }

}
