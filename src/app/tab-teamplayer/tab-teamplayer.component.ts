import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor } from '@angular/common';
import { MyFunctionsService } from '../../services/my-functions.service';

@Component({
  selector: 'app-tab-teamplayer',
  imports: [TranslateModule, NgFor],
  templateUrl: './tab-teamplayer.component.html',
  styleUrls: ['./tab-teamplayer.component.scss',
    './tab-teamplayer-mobile.scss'
  ]
})
export class TabTeamplayerComponent implements AfterViewInit, OnDestroy {
  constructor(private animationService: MyFunctionsService) { }
  ngAfterViewInit(): void {
    this.animationService.setupAnimations([
      { selector: '.player_Cards', animationClass: 'animat_1' },
      { selector: '.background_Animation', animationClass: 'animat_1' },
      { selector: '.section', animationClass: 'animat_1' },
      { selector: '.players_Card_Contents', animationClass: 'animat_1' }
    ]);
  }

  ngOnDestroy(): void {
    this.animationService.disconnectAnimations();
  }
}