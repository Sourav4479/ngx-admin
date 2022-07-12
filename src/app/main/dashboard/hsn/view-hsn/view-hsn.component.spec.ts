import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHsnComponent } from './view-hsn.component';

describe('ViewHsnComponent', () => {
  let component: ViewHsnComponent;
  let fixture: ComponentFixture<ViewHsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHsnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
