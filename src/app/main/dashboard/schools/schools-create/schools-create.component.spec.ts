import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsCreateComponent } from './schools-create.component';

describe('SchoolsCreateComponent', () => {
  let component: SchoolsCreateComponent;
  let fixture: ComponentFixture<SchoolsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
