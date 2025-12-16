import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { TabTeamplayerComponent } from '../tab-teamplayer/tab-teamplayer.component';
import { TranslateModule } from '@ngx-translate/core';
import { MyFunctionsService } from '../../services/my-functions.service';

@Component({
  selector: 'app-teamplayer',
  imports: [TranslateModule, TabTeamplayerComponent],
  templateUrl: './teamplayer.component.html',
  styleUrls: ['./teamplayer.component.scss',
    './teamplayer-mobile.scss'
  ],
})
export class TeamplayerComponent implements AfterViewInit, OnDestroy {
  constructor(private animationService: MyFunctionsService) { }
  ngAfterViewInit(): void {
    this.animationService.setupAnimations([
      { selector: '.tPlayer_Headline', animationClass: 'animate-intro' }
    ]);
  }

  ngOnDestroy(): void {
    this.animationService.disconnectAnimations();
  }
}
