import {PriorLearningCourse} from './prior-learning-course.interface';

export interface PriorLearningInstitution {
  'InstitutionID': number;
  'InstitutionName': string;
  'Courses': PriorLearningCourse[];
}
