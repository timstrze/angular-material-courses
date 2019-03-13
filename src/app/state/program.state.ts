import {State, Action, StateContext, Selector} from '@ngxs/store';
import {HttpClient} from '@angular/common/http';
import {IProgram} from '../shared/interfaces/program.interface';
import {FetchPrograms} from '../actions/program.actions';

export class ProgramModel {
  programs: IProgram[];
  loading: boolean;
}

@State<ProgramModel>({
  name: 'Programs',
  defaults: {
    programs: [],
    loading: true
  }
})

export class ProgramState {

  constructor(private http: HttpClient) {
  }

  @Selector()
  public static loading(state: ProgramModel) {
    return state.loading;
  }

  @Selector()
  public static programs(state: ProgramModel) {
    return state.programs;
  }

  @Action(FetchPrograms)
  getPrograms({getState, setState}: StateContext<ProgramModel>) {
    const state = getState();
    let programs: IProgram[] = [];
    this.http.get<IProgram[]>('./json/programs.json').subscribe(response => {
      programs = response;
      setState({
        ...state,
        programs: programs,
        loading: false
      });
    });
  }
}
