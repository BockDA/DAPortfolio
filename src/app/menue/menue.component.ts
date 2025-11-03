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
      effect(() => {
      const lang = this.isGerman() ? 'de' : 'en';
      this.translate.use(lang);
    });
  }

  async setPosMenu(sectionId: string) {
    this.setAktiv.setMenuAktiv(sectionId);
   await this.router.navigate(['/'], { fragment: sectionId });
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: 'smooth' });
    }, 500);

  
  }

  toggleLanguage() {
    const newLang = this.isGerman() ? 'en' : 'de';
    this.setLanguage(newLang);
    this.translate.use(newLang);
  }
}







