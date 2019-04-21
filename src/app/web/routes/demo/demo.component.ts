import { Component, Inject, OnInit } from '@angular/core';
import { TestApiService } from 'app/core/service/api/model/test/test-api-service';

@Component({
  selector:    'app-demo',
  templateUrl: 'demo.component.html',
  styleUrls:   ['demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor(@Inject('TestApi') private _testApi: TestApiService) { }

  ngOnInit() {
    this._testApi.test();
  }
}
