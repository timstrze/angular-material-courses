export class FetchPriorLearningInstitutions {
  static readonly type = '[PriorLearningInstitution] Fetch';
}

export class AddPriorLearningInstitution {
  static readonly type = '[PriorLearningInstitution] Add';

    constructor(public payload: any) {
  }
}

export class AddCourseToInstitution {
  static readonly type = '[PriorLearningInstitution] Add Course to Institution';

    constructor(public course: any, public institution: any) {
  }
}
