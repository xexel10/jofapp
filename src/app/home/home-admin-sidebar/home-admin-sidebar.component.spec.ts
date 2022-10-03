import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdminSidebarComponent } from './home-admin-sidebar.component';

describe('HomeAdminSidebarComponent', () => {
  let component: HomeAdminSidebarComponent;
  let fixture: ComponentFixture<HomeAdminSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAdminSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAdminSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
