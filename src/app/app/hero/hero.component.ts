import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";

@Component({
  selector: 'app-hero',
  imports: [LogoComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
