import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OradorComponent } from './orador.component';

describe('OradorComponent', () => {
  let component: OradorComponent;
  let fixture: ComponentFixture<OradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OradorComponent]
    });
    fixture = TestBed.createComponent(OradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
