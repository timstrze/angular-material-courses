import {State, Action, StateContext, Selector} from '@ngxs/store';
import {IPriorLearningCourse} from '../shared/interfaces/prior-learning-course.interface';
import {AddPriorLearningCourse, RemovePriorLearningCourse} from '../actions/prior-learning-course.actions';

export class PriorLearningCourseModel {
  priorLearningCourses: IPriorLearningCourse[];
}

@State<PriorLearningCourseModel>({
  name: 'priorLearningCourses',
  defaults: {
    priorLearningCourses: []
  }
})

export class PriorLearningCourseState {

  @Selector()
  static getPriorLearningCourses(state: PriorLearningCourseModel) {
    return state.priorLearningCourses;
  }

  @Action(AddPriorLearningCourse)
  add({getState, patchState}: StateContext<PriorLearningCourseModel>, {payload}: AddPriorLearningCourse) {
    const state = getState();
    patchState({
      priorLearningCourses: [...state.priorLearningCourses, payload]
    });
  }

  @Action(RemovePriorLearningCourse)
  remove({getState, patchState}: StateContext<PriorLearningCourseModel>, {payload}: RemovePriorLearningCourse) {
    patchState({
      priorLearningCourses: getState().priorLearningCourses.filter(a => a.Code !== payload)
    });
  }

}
