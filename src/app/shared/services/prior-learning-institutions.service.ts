import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPriorLearningInstitution} from '../interfaces/prior-learning-institution.interface';

@Injectable({
  providedIn: 'root'
})
export class PriorLearningInstitutionsService {

  constructor(private http: HttpClient) { }

  fetchPriorLearningInstitutions (): Observable<any[]> {
    return this.http.get<IPriorLearningInstitution[]>('./json/prior-learning-courses.json');
  }
}
