import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTwoComponent } from './app-two.component';

describe('AppTwoComponent', () => {
  let component: AppTwoComponent;
  let fixture: ComponentFixture<AppTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
