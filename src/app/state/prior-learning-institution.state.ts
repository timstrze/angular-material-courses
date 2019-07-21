import {State, Action, StateContext, Selector} from '@ngxs/store';
import {IPriorLearningInstitution} from '../shared/interfaces/prior-learning-institution.interface';
import {
  AddCourseToInstitution,
  AddPriorLearningInstitution,
  FetchPriorLearningInstitutions,
} from '../actions/prior-learning-institution.actions';
import {HttpClient} from '@angular/common/http';
import {PriorLearningInstitutionsService} from '../shared/services/prior-learning-institutions.service';

export class PriorLearningInstitutionModel {
  priorLearningInstitutions: IPriorLearningInstitution[];
  loading: boolean;
}

@State<PriorLearningInstitutionModel>({
  name: 'priorLearningInstitutions',
  defaults: {
    priorLearningInstitutions: [],
    loading: true
  }
})

export class PriorLearningInstitutionState {

  constructor(private institutionService: PriorLearningInstitutionsService) {
  }

  @Selector()
  public static loading(state: PriorLearningInstitutionModel) {
    return state.loading;
  }

  @Selector()
  public static priorLearningInstitutions(state: PriorLearningInstitutionModel) {
    return state.priorLearningInstitutions;
  }

  @Action(AddPriorLearningInstitution)
  add({getState, patchState}: StateContext<PriorLearningInstitutionModel>, {payload}: AddPriorLearningInstitution) {
    const state = getState();
    patchState({
      priorLearningInstitutions: [payload, ...state.priorLearningInstitutions]
    });
  }

  @Action(AddCourseToInstitution)
  addCourse({getState, patchState}: StateContext<PriorLearningInstitutionModel>, {course, institution}: AddCourseToInstitution) {
    console.log(course, institution);
    const state = getState();
    const stateCopy = JSON.parse(JSON.stringify(state));
    stateCopy.priorLearningInstitutions[state.priorLearningInstitutions.indexOf(institution)].Courses.unshift(course);
    patchState({
      priorLearningInstitutions: stateCopy.priorLearningInstitutions
    });
  }

  @Action(FetchPriorLearningInstitutions)
  getPosts({getState, setState}: StateContext<PriorLearningInstitutionModel>) {
    const state = getState();
    let priorLearningInstitutions: IPriorLearningInstitution[] = [];
    this.institutionService.fetchPriorLearningInstitutions().subscribe(institutions => {
      priorLearningInstitutions = institutions;
      setState({
        ...state,
        priorLearningInstitutions: priorLearningInstitutions,
        loading: false
      });
    });
  }
}
