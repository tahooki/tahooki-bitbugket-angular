import { Component, HostBinding, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector:    'app-demo-animation001',
  templateUrl: './demo-animation001.component.html',
  styleUrls:   ['./demo-animation001.component.scss'],
  animations:  [
    trigger('toggle', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.5s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class DemoAnimation001Component implements OnInit {
  constructor() { }

  @HostBinding('@toggle')

  ngOnInit() {
  }
}
