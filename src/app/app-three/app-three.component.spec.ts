import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppThreeComponent } from './app-three.component';

describe('AppThreeComponent', () => {
  let component: AppThreeComponent;
  let fixture: ComponentFixture<AppThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
