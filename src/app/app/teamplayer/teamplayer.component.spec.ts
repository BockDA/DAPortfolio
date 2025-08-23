import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamplayerComponent } from './teamplayer.component';

describe('TeamplayerComponent', () => {
  let component: TeamplayerComponent;
  let fixture: ComponentFixture<TeamplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamplayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
