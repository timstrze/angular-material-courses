export class FetchPrograms {
  static readonly type = '[Program] Fetch';
}

export class AddProgram {
  static readonly type = '[Program] Add';

    constructor(public payload: any) {
  }
}
