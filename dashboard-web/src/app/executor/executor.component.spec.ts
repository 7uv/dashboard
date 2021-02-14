import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutorComponent } from './executor.component';

describe('ExecutorComponent', () => {
  let component: ExecutorComponent;
  let fixture: ComponentFixture<ExecutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
