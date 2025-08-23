import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { MenueComponent } from '../menue/menue.component';
import { WhyMeComponent } from '../why-me/why-me.component';
import { MyskillsComponent } from '../myskills/myskills.component';
import { MyprojectsComponent } from '../myprojects/myprojects.component';
import { TeamplayerComponent } from "../teamplayer/teamplayer.component";

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    MenueComponent,
    WhyMeComponent,
    MyskillsComponent,
    MyprojectsComponent,
    TeamplayerComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  home = HomeComponent;
}
