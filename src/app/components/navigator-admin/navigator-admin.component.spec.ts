import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorAdminComponent } from './navigator-admin.component';

describe('NavigatorAdminComponent', () => {
  let component: NavigatorAdminComponent;
  let fixture: ComponentFixture<NavigatorAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigatorAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
