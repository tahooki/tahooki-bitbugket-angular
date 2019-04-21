import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector:    'app-demo-animation002',
  templateUrl: './demo-animation002.component.html',
  styleUrls:   ['./demo-animation002.component.scss'],
  animations:  [
    trigger('toggle', [
      state('active', style(
        {
          transform:  'translate({{ left_px }}, {{ top_px }})',
          width:      '{{ width_px }}',
          height:     '100px',
          background: '#55aaee'
        }),
        {
          params: {
            width_px: '0px',
            left_px: '0px',
            top_px:  '0px'
          }
        }
      ),
      state('disabled', style({})),
      transition('* <=> *', animate('0.5s ease'))
    ])
  ]
})
export class DemoAnimation002Component implements OnInit {
  @Input() listRect: any;

  toggle: string;

  toggleParams: any = {
    top_px: '0px',
    left_px: '0px',
    width_px: '0px',
  };

  constructor(private _el: ElementRef) {
  }

  ngOnInit() {
    this.toggleParams.top_px   = (this.listRect.top - this._el.nativeElement.getBoundingClientRect().top + 15) + 'px';
    this.toggleParams.left_px  = (this.listRect.left - this._el.nativeElement.getBoundingClientRect().left) + 'px';
    this.toggleParams.width_px = this.listRect.width + 'px';
  }

  onClickMessage(): void {

    this.toggle = this.toggle === 'active' ? 'disabled' : 'active';
  }
}
