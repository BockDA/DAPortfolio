import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  currentLang = signal<'en' | 'de'>('en');

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'de']);
    const browserLang = translate.getBrowserLang();
    const lang = browserLang?.match(/de|en/) ? browserLang : 'en';
    this.setLanguage(lang as 'en' | 'de');
  }

  setLanguage(lang: 'en' | 'de') {
    this.translate.use(lang);
    this.currentLang.set(lang);
  }

  toggleLanguage() {
    this.setLanguage(this.currentLang() === 'en' ? 'de' : 'en');
  }
}
