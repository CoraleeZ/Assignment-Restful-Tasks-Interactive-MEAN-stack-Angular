import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootpartComponent } from './rootpart.component';

describe('RootpartComponent', () => {
  let component: RootpartComponent;
  let fixture: ComponentFixture<RootpartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootpartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
