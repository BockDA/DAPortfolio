import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { MenueComponent } from "../menue/menue.component";
import { WhyMeComponent } from "../why-me/why-me.component";
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, MenueComponent, WhyMeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  home = HomeComponent

}
