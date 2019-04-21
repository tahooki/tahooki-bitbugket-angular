import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CommunityComponent implements OnInit {
  isLogin: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onOpenLoginDialog(): void {
  }

  onAddTab(): void {
    console.log('onAddTab');
    event.stopPropagation();
  }
}
