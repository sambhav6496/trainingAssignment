import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickLogServiceComponent } from './click-log-service.component';

describe('ClickLogServiceComponent', () => {
  let component: ClickLogServiceComponent;
  let fixture: ComponentFixture<ClickLogServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickLogServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickLogServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
