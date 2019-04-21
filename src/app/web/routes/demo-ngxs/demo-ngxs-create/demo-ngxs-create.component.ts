import { Component, OnInit } from '@angular/core';
import { AddTutorial } from 'app/web/routes/demo-ngxs/redux/demo-ngxs.action';
import { Store } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

@Component({
  selector: 'app-demo-ngxs-create',
  templateUrl: './demo-ngxs-create.component.html',
  styleUrls: ['./demo-ngxs-create.component.scss']
})
export class DemoNgxsCreateComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @Dispatch()
  addTutorial(name, url) {
    return new AddTutorial({
      name,
      url
    });
  }
}
