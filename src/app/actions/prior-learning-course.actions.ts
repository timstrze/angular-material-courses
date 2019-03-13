import {IPriorLearningCourse} from '../shared/interfaces/prior-learning-course.interface';

export class AddPriorLearningCourse {
  static readonly type = '[PRIORLEARNINGCOURSE] Add';

  constructor(public payload: IPriorLearningCourse) {
  }
}

export class RemovePriorLearningCourse {
  static readonly type = '[PRIORLEARNINGCOURSE] Remove';

  constructor(public payload: string) {
  }
}
