import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})
export class AppComponent {
  title = 'DAPortfolio';
  constructor(public translate: TranslateService) {
    // verfügbare Sprachen
    translate.addLangs(['de', 'en']);
        translate.setDefaultLang('de');
     translate.use('en');
   
  }
}
