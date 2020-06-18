import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Input1historyComponent } from './input1history.component';

describe('Input1historyComponent', () => {
  let component: Input1historyComponent;
  let fixture: ComponentFixture<Input1historyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Input1historyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Input1historyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
