import { Component, } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { TranslateModule } from '@ngx-translate/core';
import { MyFunctionsService } from '../../services/my-functions.service';
import { MenueComponent } from "../menue/menue.component";

@Component({
  selector: 'app-hero',
  imports: [LogoComponent, TranslateModule, MenueComponent],
  templateUrl: './hero.component.html',
  styleUrls:
    ['./hero.component.scss',
      './hero-mobile.scss'
    ]

})

export class HeroComponent {

  constructor(public setAktiv: MyFunctionsService) { }
  setPosMenu(value: string) {
    this.setAktiv.setMenuAktiv(value);
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

  }
}