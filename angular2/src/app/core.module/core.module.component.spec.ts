import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Core.ModuleComponent } from './core.module.component';

describe('Core.ModuleComponent', () => {
  let component: Core.ModuleComponent;
  let fixture: ComponentFixture<Core.ModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Core.ModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Core.ModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
