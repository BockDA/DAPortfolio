
/*
import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { statusLanguage } from './state/language.state';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  
export class AppComponent {
  title = 'DAPortfolio';

  constructor(public translate: TranslateService) {
    translate.addLangs(['de', 'en']);
    translate.setDefaultLang('de'); // Sprachewenn kein wert vorhanden
    effect(() => {
      this.translate.use(statusLanguage());
    });
  }
}
*/

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenueComponent } from './app/menue/menue.component';
import { FooterComponent } from './app/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenueComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
