import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from 'app/web/routes/demo-ngxs/redux/demo-ngxs.model';
import { Select } from '@ngxs/store';
import { RemoveTutorial } from 'app/web/routes/demo-ngxs/redux/demo-ngxs.action';
import { TutorialState } from 'app/web/routes/demo-ngxs/redux/demo-ngxs.state';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

@Component({
  selector: 'app-demo-ngxs-read',
  templateUrl: './demo-ngxs-read.component.html',
  styleUrls: ['./demo-ngxs-read.component.scss']
})
export class DemoNgxsReadComponent implements OnInit {
  // 1 way
  // tutorials$: Observable<Tutorial>;

  // 2 way
  @Select(TutorialState.getTutorials) tutorials$: Observable<Tutorial>;

  constructor() {
    // 1 way
    // this.tutorials$ = this.store.select(state => state.tutorials.tutorials);
  }

  ngOnInit() {}

  @Dispatch()
  delTutorial(name) {
    console.log('???????????');
    return new RemoveTutorial(name);
  }
}
