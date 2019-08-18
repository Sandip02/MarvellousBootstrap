import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCommunticationParentComponent } from './component-communtication-parent.component';

describe('ComponentCommunticationParentComponent', () => {
  let component: ComponentCommunticationParentComponent;
  let fixture: ComponentFixture<ComponentCommunticationParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentCommunticationParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCommunticationParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
