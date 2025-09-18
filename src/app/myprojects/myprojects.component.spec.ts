import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprojectsComponent } from './myprojects.component';

describe('MyprojectsComponent', () => {
  let component: MyprojectsComponent;
  let fixture: ComponentFixture<MyprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyprojectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
