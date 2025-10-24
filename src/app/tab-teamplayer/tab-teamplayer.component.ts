import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-tab-teamplayer',
  imports: [TranslateModule,NgFor],
  templateUrl: './tab-teamplayer.component.html',
  styleUrl: './tab-teamplayer.component.scss'
})
export class TabTeamplayerComponent {}
