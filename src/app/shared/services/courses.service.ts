import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getPriorKaplanCourses (): Observable<any[]> {
    return this.http.get<any[]>('./json/prior-kaplan-courses.json');
  }

  getPriorLearningCourses (): Observable<any[]> {
    return this.http.get<any[]>('./json/prior-learning-courses.json');
  }
}
