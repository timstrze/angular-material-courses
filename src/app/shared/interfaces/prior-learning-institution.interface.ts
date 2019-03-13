import {IPriorLearningCourse} from './prior-learning-course.interface';

export interface IPriorLearningInstitution {
  'InstitutionID': number;
  'InstitutionName': string;
  'Courses': IPriorLearningCourse[];
}
