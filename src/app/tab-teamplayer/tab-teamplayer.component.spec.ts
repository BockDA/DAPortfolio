import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTeamplayerComponent } from './tab-teamplayer.component';

describe('TabTeamplayerComponent', () => {
  let component: TabTeamplayerComponent;
  let fixture: ComponentFixture<TabTeamplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabTeamplayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabTeamplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
