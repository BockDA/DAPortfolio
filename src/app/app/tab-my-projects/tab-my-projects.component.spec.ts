import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMyProjectsComponent } from './tab-my-projects.component';

describe('TabMyProjectsComponent', () => {
  let component: TabMyProjectsComponent;
  let fixture: ComponentFixture<TabMyProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabMyProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabMyProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
