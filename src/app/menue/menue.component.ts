
/*
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyFunctionsService } from '../../services/my-functions.service';
import {
  isGerman,
  setLanguage,
  statusLanguage
}
  from '../../state/language.state';
import { LogoComponent } from '../logo/logo.component';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-menue',
  standalone: true,
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.scss'],
  imports: [LogoComponent,TranslateModule],
})
export class MenueComponent {
  constructor(private router: Router, public setAktiv: MyFunctionsService) {}

  async setPosMenu(sectionId: string) {
    this.setAktiv.setMenuAktiv(sectionId);

    // In EINEM Schritt zur Startseite navigieren + Fragment setzen.
    // Der Router scrollt dank withInMemoryScrolling automatisch zum Element mit id=sectionId.
    await this.router.navigate(['/'], { fragment: sectionId });

    // Fallback (nur falls aus irgendeinem Grund nicht gescrollt wurde):
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
    console.log('vor Navigation: ', this.router.url);
    await this.router.navigate(['/'], { fragment: sectionId });
    console.log('nach Navigation (sollte / sein): ', this.router.url);
  }

  statusLanguage = statusLanguage;
  isGerman = isGerman;
  setLanguage = setLanguage;
}
 */
import { Component, computed, effect } from '@angular/core';
import { Router } from '@angular/router';
import { MyFunctionsService } from '../../services/my-functions.service';
import {
  isGerman,
  setLanguage,
  statusLanguage,
} from '../../state/language.state';
import { LogoComponent } from '../logo/logo.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menue',
  standalone: true,
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.scss'],
  imports: [LogoComponent, TranslateModule],
})
export class MenueComponent {
  statusLanguage = statusLanguage;
  isGerman = isGerman;
  setLanguage = setLanguage;

  constructor(
    private router: Router,
    public setAktiv: MyFunctionsService,
    private translate: TranslateService
  ) {
    // 🧩 Reagiere auf Sprachänderungen aus deinem globalen Signal
    effect(() => {
      const lang = this.isGerman() ? 'de' : 'en';
      this.translate.use(lang);
    });
  }

  async setPosMenu(sectionId: string) {
    this.setAktiv.setMenuAktiv(sectionId);

    // 👉 Navigation zur Startseite mit Fragment (funktioniert mit InMemoryScrolling)
    await this.router.navigate(['/'], { fragment: sectionId });

    // 🧩 Fallback für Browser, die das Fragment-Scrollen ignorieren
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: 'smooth' });
    }, 300);

    console.log('Navigiert zu Abschnitt:', sectionId);
  }

  // 🧩 Sprachumschaltung
  toggleLanguage() {
    const newLang = this.isGerman() ? 'en' : 'de';
    this.setLanguage(newLang);
    this.translate.use(newLang);
  }
}







