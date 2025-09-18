import { Component } from '@angular/core';
import { TabTeamplayerComponent } from '../tab-teamplayer/tab-teamplayer.component';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-teamplayer',
  imports: [TranslateModule, TabTeamplayerComponent],
  templateUrl: './teamplayer.component.html',
  styleUrl: './teamplayer.component.scss',
})
export class TeamplayerComponent {}
