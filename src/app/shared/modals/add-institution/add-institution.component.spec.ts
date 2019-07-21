import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddInstitutionComponent} from './add-institution.component';
import {MAT_DIALOG_DATA, MatAutocompleteModule, MatDialogRef, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxsModule, Store} from '@ngxs/store';
import {PriorLearningInstitutionState} from '../../../state/prior-learning-institution.state';
import {PriorLearningInstitutionsService} from '../../services/prior-learning-institutions.service';
import {of} from 'rxjs';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

fdescribe('AddInstitutionComponent', () => {
  let component: AddInstitutionComponent;
  let fixture: ComponentFixture<AddInstitutionComponent>;
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddInstitutionComponent],
      imports: [
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        NgxsModule.forRoot([PriorLearningInstitutionState]),
        NoopAnimationsModule
      ],
      providers: [
        {
          provide: PriorLearningInstitutionsService, useValue: {}
        },
        {
          provide: MatDialogRef, useValue: {}
        },
        {
          provide: MAT_DIALOG_DATA, useValue: {}
        }
      ]
    })
      .compileComponents();
    store = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
