import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector:    'app-demo-material-datepicker',
  templateUrl: './demo-material-datepicker.component.html',
  styleUrls:   ['./demo-material-datepicker.component.scss']
})
export class DemoMaterialDatepickerComponent implements OnInit {
  startDate = new Date(1990, 0, 1);

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  constructor() { }

  ngOnInit() {
  }

}
