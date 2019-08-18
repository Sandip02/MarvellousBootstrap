import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCommunticationChildComponent } from './component-communtication-child.component';

describe('ComponentCommunticationChildComponent', () => {
  let component: ComponentCommunticationChildComponent;
  let fixture: ComponentFixture<ComponentCommunticationChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentCommunticationChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCommunticationChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
