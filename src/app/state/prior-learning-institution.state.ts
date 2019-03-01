import {State, Action, StateContext, Selector} from '@ngxs/store';
import {PriorLearningInstitution} from '../shared/interfaces/prior-learning-institution.interface';
import {
  FetchPriorLearningInstitutions,
} from '../actions/prior-learning-institution.actions';
import {HttpClient} from '@angular/common/http';

export class PriorLearningInstitutionModel {
  priorLearningInstitutions: PriorLearningInstitution[];
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

  constructor(private http: HttpClient) {
  }

  @Selector()
  public static loading(state: PriorLearningInstitutionModel) {
    return state.loading;
  }

  @Selector()
  public static priorLearningInstitutions(state: PriorLearningInstitutionModel) {
    return state.priorLearningInstitutions;
  }

  @Action(FetchPriorLearningInstitutions)
  getPosts({getState, setState}: StateContext<PriorLearningInstitutionModel>) {
    const state = getState();
    let priorLearningInstitutions: PriorLearningInstitution[] = [];
    this.http.get<PriorLearningInstitution[]>('./json/prior-learning-courses.json').subscribe(institutions => {
      priorLearningInstitutions = institutions;
      setState({
        ...state,
        priorLearningInstitutions: priorLearningInstitutions,
        loading: false
      });
    });
  }
}
