import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'app-demo-material-checkbox',
  templateUrl: './demo-material-checkbox.component.html',
  styleUrls:   ['./demo-material-checkbox.component.scss']
})
export class DemoMaterialCheckboxComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  constructor() { }

  ngOnInit() {
  }

}
