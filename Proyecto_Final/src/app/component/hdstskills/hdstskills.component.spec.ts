import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdstskillsComponent } from './hdstskills.component';

describe('HdstskillsComponent', () => {
  let component: HdstskillsComponent;
  let fixture: ComponentFixture<HdstskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HdstskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HdstskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
