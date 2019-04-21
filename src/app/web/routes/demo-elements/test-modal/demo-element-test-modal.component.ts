import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector:    'app-demo-element-test-modal',
  templateUrl: './demo-element-test-modal.component.html',
  styleUrls:   ['./demo-element-test-modal.component.scss']
})
export class DemoElementTestModalComponent implements OnInit {
  @Input() params;

  @Output() test: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.params);
    this.test.emit({a:'abcd'});
  }

}
