import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { MyFunctionsService } from '../../services/my-functions.service';

@Component({
  selector: 'app-why-me',
  imports: [TranslateModule],
  templateUrl: './why-me.component.html',
  styleUrls: ['./why-me.component.scss',
    './why-me-mobile.scss'
  ],
})
export class WhyMeComponent implements AfterViewInit, OnDestroy {
  constructor(public setAktiv: MyFunctionsService) { }
  ngAfterViewInit(): void {
    this.setAktiv.setupAnimations([
      { selector: '.whyme_Titel', animationClass: 'animat_1' },
      { selector: '.whyme_locale', animationClass: 'animat_1' },
      { selector: '.whyme_Description', animationClass: 'animat_1' }
    ]);
  }

  setPosMenu(value: string) {
    this.setAktiv.setMenuAktiv(value);
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnDestroy(): void {
    this.setAktiv.disconnectAnimations();
  }
}