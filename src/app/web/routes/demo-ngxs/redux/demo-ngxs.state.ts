import { Tutorial } from 'app/web/routes/demo-ngxs/redux/demo-ngxs.model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddTutorial, RemoveTutorial } from 'app/web/routes/demo-ngxs/redux/demo-ngxs.action';
import { produce } from '@ngxs-labs/immer-adapter';

export class TutorialStateModel {
  tutorials: Tutorial[];
}

@State<TutorialStateModel>({
  name: 'tutorials',
  defaults: {
    tutorials: []
  }
})
export class TutorialState {

  // Section 4
  @Selector()
  static getTutorials(state: TutorialStateModel) {
    return state.tutorials;
  }

  // Section 5
  @Action(AddTutorial)
  add(ctx: StateContext<TutorialStateModel>, { payload }: AddTutorial) {
    produce(ctx, (draft: TutorialStateModel) => {
      draft.tutorials.push(payload);
    });
  }

  @Action(RemoveTutorial)
  remove(ctx: StateContext<TutorialStateModel>, { payload }: RemoveTutorial) {
    produce(ctx, (draft: TutorialStateModel) => {
      draft.tutorials = draft.tutorials.filter(a => a.name !== payload);
    });
  }
}
