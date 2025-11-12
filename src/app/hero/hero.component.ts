import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { TranslateModule } from '@ngx-translate/core';
import { MyFunctionsService } from '../../services/my-functions.service';
import { MenueComponent } from "../menue/menue.component";

@Component({
  selector: 'app-hero',
  imports: [LogoComponent, TranslateModule, MenueComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('fadeInSection', { static: true }) fadeInSection!: ElementRef;

  constructor(public setAktiv: MyFunctionsService) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // optional: einmalig auslösen
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // 20% sichtbar
    );

    observer.observe(this.fadeInSection.nativeElement);
  }

  setPosMenu(value: string) {
    this.setAktiv.setMenuAktiv(value);
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}