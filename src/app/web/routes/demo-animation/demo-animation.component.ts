import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'app-demo-animation',
  templateUrl: './demo-animation.component.html',
  styleUrls:   ['./demo-animation.component.scss']
})
export class DemoAnimationComponent implements OnInit {
  isShow: boolean = false;

  array: string[] = ['', '', ''];

  constructor() { }

  ngOnInit() {
  }

  onClickToggle() {
    this.isShow = !this.isShow;
  }
}
