import { Component, HostListener, computed, effect } from '@angular/core';
import { Router } from '@angular/router';
import { MyFunctionsService } from '../../services/my-functions.service';
import {
  isGerman,
  setLanguage,
  statusLanguage,
} from '../../state/language.state';
import { LogoComponent } from '../logo/logo.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menue',
  standalone: true,
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.scss',
    './menue-mobile.scss'
  ],
  imports: [LogoComponent, TranslateModule, RouterLink],
})
export class MenueComponent {
  statusLanguage = statusLanguage;
  isGerman = isGerman;
  setLanguage = setLanguage;
  logoDark = true; // white logo on mobile by default

  constructor(
    private router: Router,
    public setAktiv: MyFunctionsService,
    private translate: TranslateService
  ) {

    const isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined';
    if (isBrowser) {
      const storedLang = localStorage.getItem('lang');
      if (storedLang === 'en' || storedLang === 'de') {
        this.setLanguage(storedLang);
        this.translate.use(storedLang);
        return;
      }
    }
    // Fallback: Sprache aus State
    effect(() => {
      const lang = this.isGerman() ? 'de' : 'en';
      this.translate.use(lang);
    });

    // Initialize logo color by viewport
    this.updateLogoColor();
  }

  async setPosMenu(sectionId: string) {
    this.setAktiv.setMenuAktiv(sectionId);

    // Schließe das Burger-Menü in Mobile-Ansicht
    this.closeBurgerMenu();

    await this.router.navigate(['/'], { fragment: sectionId });
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  }

  closeBurgerMenu() {
    const heroCheckbox = document.getElementById('menyAvPaa') as HTMLInputElement;
    if (heroCheckbox) {
      heroCheckbox.checked = false;
    }

    const localMenuToggle = document.getElementById('menuToggle') as HTMLInputElement;
    if (localMenuToggle) {
      localMenuToggle.checked = false;
    }
  }

  toggleLanguage() {
    const newLang = this.isGerman() ? 'en' : 'de';
    this.setLanguage(newLang);
    this.translate.use(newLang);
    const isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined';
    if (isBrowser) {
      localStorage.setItem('lang', newLang);
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.updateLogoColor();
  }

  private updateLogoColor() {
    const isBrowser = typeof window !== 'undefined';
    if (!isBrowser) {
      this.logoDark = true;
      return;
    }
    const width = window.innerWidth;
    // Mobile/tablet: use white logo (dark background), Desktop: use black logo
    this.logoDark = width <= 820;
  }
}







































